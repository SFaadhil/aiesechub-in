import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { GCP_PAGE_SIZE } from '@/lib/gcp-data';

// GET Route Handlers are cached by Next.js by default — without this, the
// no-filter response gets served stale to every visitor after the first hit.
export const dynamic = 'force-dynamic';

function escapeForOr(v) {
  // Supabase's .or() filter splits on commas — strip anything that could
  // break out of the ilike pattern we build below.
  return v.replace(/[,()%]/g, ' ').trim();
}

// Function-not-found (migration not run yet) shows up as PGRST202 from
// PostgREST, or the underlying Postgres 42883. Anything else is a real error.
function isMissingRpc(error) {
  return error?.code === 'PGRST202' || error?.code === '42883';
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim();
  const portfolio = (searchParams.get('portfolio') || '').trim();
  const entity = (searchParams.get('entity') || '').trim();
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
  const seedParam = parseFloat(searchParams.get('seed'));
  const seed = Number.isFinite(seedParam) ? seedParam : Math.random();
  const pageSize = GCP_PAGE_SIZE;
  const from = (page - 1) * pageSize;

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: 'GCP Hub is not configured yet.' }, { status: 503 });
  }

  // Shuffled listing — same seed gives a stable order (so paging within one
  // shuffle is consistent), a new seed (fresh page load, or Shuffle) reorders.
  const { data, error } = await supabase.rpc('gcp_list_random', {
    p_query: q || null,
    p_portfolio: portfolio || null,
    p_entity: entity || null,
    p_seed: seed,
    p_limit: pageSize,
    p_offset: from,
  });

  if (!error) {
    const items = (data || []).map(({ total_count, ...rest }) => rest);
    const total = data?.[0]?.total_count ?? 0;
    return NextResponse.json({ items, total: Number(total), page, pageSize, seed });
  }

  if (!isMissingRpc(error)) {
    return NextResponse.json({ error: 'Could not load GCPs right now.' }, { status: 500 });
  }

  // Fallback for before the gcp_list_random migration has been run —
  // ordinary (non-shuffled) listing so the hub still works.
  let query = supabase
    .from('gcp_submissions')
    .select('id, created_at, month, year, uploader_name, uploader_entity, portfolio, gcp_name, outcome, links, details, kpis, mos, notes', { count: 'exact' })
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  if (portfolio) query = query.eq('portfolio', portfolio);
  if (entity) query = query.eq('uploader_entity', entity);
  if (q) {
    const safe = escapeForOr(q);
    if (safe) query = query.or(`gcp_name.ilike.%${safe}%,uploader_name.ilike.%${safe}%`);
  }

  const to = from + pageSize - 1;
  query = query.range(from, to);

  const fallback = await query;
  if (fallback.error) {
    return NextResponse.json({ error: 'Could not load GCPs right now.' }, { status: 500 });
  }

  return NextResponse.json({
    items: fallback.data || [],
    total: fallback.count ?? 0,
    page,
    pageSize,
    seed,
  });
}
