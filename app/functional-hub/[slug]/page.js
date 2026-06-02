import { notFound } from 'next/navigation';
import Link from 'next/link';
import ResourceCard from '@/components/ResourceCard';
import ScrollReveal from '@/components/ScrollReveal';
import { HUBS, getHub } from '@/lib/data';
import { isHubLive } from '@/lib/page-status';
import { fetchHubResources } from '@/lib/sheets';

export const revalidate = 60;

const HUB_IMAGES = {
  igv:        'https://picsum.photos/seed/igv-hero/1200/500',
  ogv:        'https://picsum.photos/seed/ogv-hero/1200/500',
  igtae:      'https://picsum.photos/seed/igtae-hero/1200/500',
  ogtae:      'https://picsum.photos/seed/ogtae-hero/1200/500',
  mkt:        'https://picsum.photos/seed/mkt-hero/1200/500',
  bd:         'https://picsum.photos/seed/bd-hero/1200/500',
  pm:         'https://picsum.photos/seed/pm-hero/1200/500',
  fnl:        'https://picsum.photos/seed/fnl-hero/1200/500',
  im:         'https://picsum.photos/seed/im-hero/1200/500',
  od:         'https://picsum.photos/seed/od-hero/1200/500',
  expansions: 'https://picsum.photos/seed/expansions-hero/1200/500',
};

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8"  x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

export function generateStaticParams() {
  return HUBS.filter((hub) => isHubLive(hub.slug)).map((hub) => ({ slug: hub.slug }));
}

export function generateMetadata({ params }) {
  const hub = getHub(params.slug);
  if (!hub) return { title: 'Hub Not Found' };
  return { title: hub.name, description: hub.description };
}

export default async function SubHubPage({ params }) {
  if (!isHubLive(params.slug)) notFound();
  const hub = getHub(params.slug);
  if (!hub) notFound();

  // Live data from Google Sheets; falls back to data.js if sheet not configured
  const sheetResources = await fetchHubResources(params.slug);
  const resources = sheetResources ?? hub.resources;

  return (
    <>
      {/* ── Full-width image hero ── */}
      <section style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HUB_IMAGES[hub.slug]}
          alt={`${hub.name} cover`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Gradient overlay — left-to-right */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.76) 0%, rgba(0,0,0,0.30) 55%, transparent 100%)',
        }} />
        {/* Accent colour bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 4, background: hub.accent,
        }} />

        <div className="container-xl" style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', paddingBottom: 44,
        }}>
          {/* Breadcrumb */}
          <div
            className="d-flex align-items-center gap-2 mb-3 animate-fade-in"
            style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}
          >
            <Link href="/functional-hub"
              style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                transition: 'color var(--transition-fast)' }}
              onMouseEnter={undefined}
            >
              Functional Hub
            </Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>{hub.name}</span>
          </div>

          <h1
            className="animate-fade-up"
            style={{
              color: '#fff',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800, letterSpacing: '-0.5px',
              margin: 0, lineHeight: 1.1,
            }}
          >
            {hub.name}
          </h1>
          <p
            className="animate-fade-up delay-1"
            style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: 15, margin: '8px 0 0', fontWeight: 400,
            }}
          >
            {hub.fullName}
          </p>
        </div>
      </section>

      {/* ── Description bar ── */}
      <div style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container-xl py-4">
          <ScrollReveal>
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-9">
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-2)', margin: 0 }}>
                  {hub.description}
                </p>
              </div>
              <div className="col-12 col-md-3 text-md-end">
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: `${hub.accent}18`,
                  color: hub.accent,
                  border: `1px solid ${hub.accent}35`,
                  borderRadius: 20, padding: '5px 14px',
                  fontSize: 13, fontWeight: 600,
                }}>
                  {resources.length} resources
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Resources grid ── */}
      <section className="section-py">
        <div className="container-xl">
          <ScrollReveal className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-5">
            <h2 style={{ fontWeight: 700, fontSize: 20, margin: 0, color: 'var(--text)' }}>
              Resources
            </h2>
            <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
              All links open in a new tab
            </span>
          </ScrollReveal>

          <div className="row g-3">
            {resources.map((r, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ScrollReveal delay={Math.min((i % 6) + 1, 6)}>
                  <ResourceCard
                    title={r.title}
                    description={r.description ?? r.desc}
                    type={r.type}
                    linkUrl={r.url || r.linkUrl || '#'}
                    accent={hub.accent}
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Info note */}
          <ScrollReveal className="info-note mt-4">
            <InfoIcon />
            <p style={{ margin: 0 }}>
              All links open in a new tab. Resources are managed via Google Sheets and refresh automatically.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Back to all hubs ── */}
      <section className="section-pb">
        <div className="container-xl">
          <hr className="divider mb-5" />
          <div className="d-flex justify-content-center">
            <Link href="/functional-hub" className="btn-outline-brand">
              ← All Hubs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
