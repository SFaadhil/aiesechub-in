-- ─────────────────────────────────────────────────────────────────────────
-- GCP Hub schema — run this once in Supabase → SQL Editor → New query
-- Project: suusphgywjbyliaagvbj
-- ─────────────────────────────────────────────────────────────────────────

create extension if not exists pgcrypto;

create table if not exists public.gcp_submissions (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),

  -- Submission fields (mirror the original GCP form)
  month           text not null,
  year            int  not null,
  uploader_name   text not null,
  uploader_email  text not null,
  uploader_entity text not null,
  portfolio       text not null,          -- hub slug, see lib/gcp-data.js GCP_PORTFOLIOS
  gcp_name        text not null,
  outcome         text,
  links           text,
  details         text,
  kpis            text,
  mos             text,
  notes           text,

  -- Review workflow ("in-view" queue lives here — status starts 'pending'
  -- and is invisible to the public until a reviewer approves it)
  status          text not null default 'pending'
                    check (status in ('pending', 'approved', 'rejected')),
  reviewed_at     timestamptz,
  reviewer_note   text
);

create index if not exists gcp_submissions_status_idx    on public.gcp_submissions (status);
create index if not exists gcp_submissions_portfolio_idx on public.gcp_submissions (portfolio);
create index if not exists gcp_submissions_entity_idx    on public.gcp_submissions (uploader_entity);
create index if not exists gcp_submissions_created_idx   on public.gcp_submissions (created_at desc);

-- Keep updated_at current on every row change
create or replace function public.gcp_submissions_set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists gcp_submissions_updated_at on public.gcp_submissions;
create trigger gcp_submissions_updated_at
  before update on public.gcp_submissions
  for each row execute function public.gcp_submissions_set_updated_at();

-- ── Row Level Security ─────────────────────────────────────────────────
-- The anon (public) key can only INSERT a row that lands as 'pending', and
-- can only SELECT rows that are already 'approved'. It can never see
-- pending/rejected rows, and can never update or delete anything — that
-- only happens server-side in /login via the service_role key, which
-- bypasses RLS entirely.

alter table public.gcp_submissions enable row level security;

drop policy if exists "public can submit pending gcps" on public.gcp_submissions;
create policy "public can submit pending gcps"
  on public.gcp_submissions
  for insert
  to anon
  with check (status = 'pending');

drop policy if exists "public can read approved gcps" on public.gcp_submissions;
create policy "public can read approved gcps"
  on public.gcp_submissions
  for select
  to anon
  using (status = 'approved');

-- ── Randomised listing ───────────────────────────────────────────────────
-- Powers the shuffled GCP Hub landing view + the Shuffle button. `p_seed`
-- picks the shuffle: the same seed always yields the same order (so paging
-- through one shuffle is stable), a new seed (new page load, or Shuffle
-- clicked) reorders everything. SECURITY INVOKER (the default) — runs as
-- the calling role, so the existing RLS policy above still applies.
create or replace function public.gcp_list_random(
  p_query text default null,
  p_portfolio text default null,
  p_entity text default null,
  p_seed double precision default random(),
  p_limit int default 12,
  p_offset int default 0
)
returns table (
  id uuid,
  created_at timestamptz,
  month text,
  year int,
  uploader_name text,
  uploader_entity text,
  portfolio text,
  gcp_name text,
  outcome text,
  links text,
  details text,
  kpis text,
  mos text,
  notes text,
  total_count bigint
)
language sql
stable
as $$
  select
    g.id, g.created_at, g.month, g.year, g.uploader_name, g.uploader_entity,
    g.portfolio, g.gcp_name, g.outcome, g.links, g.details, g.kpis, g.mos, g.notes,
    count(*) over() as total_count
  from public.gcp_submissions g
  where g.status = 'approved'
    and (p_portfolio is null or p_portfolio = '' or g.portfolio = p_portfolio)
    and (p_entity is null or p_entity = '' or g.uploader_entity = p_entity)
    and (
      p_query is null or p_query = ''
      or g.gcp_name ilike '%' || p_query || '%'
      or g.uploader_name ilike '%' || p_query || '%'
    )
  order by md5(g.id::text || p_seed::text)
  limit p_limit offset p_offset;
$$;

grant execute on function public.gcp_list_random(
  text, text, text, double precision, int, int
) to anon;
