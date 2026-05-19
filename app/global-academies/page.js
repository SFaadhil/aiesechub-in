import PageHero from '@/components/PageHero';
import ResourceCard from '@/components/ResourceCard';
import ScrollReveal from '@/components/ScrollReveal';
import { STATIC_PAGES } from '@/lib/data';
import PageOffline from '@/components/PageOffline';
import { GlobeIcon, CapIcon } from '@/components/Icons';
import { fetchPageResources } from '@/lib/sheets';

export const revalidate = 60;

const PAGE_STATUS_LIVE = true;

export const metadata = {
  title: 'Global Academies',
  description: 'Learning experiences, leadership academies, and development programmes for AIESEC members.',
};

function FunctionalIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function OnlineIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

const PROG_TYPES = [
  {
    Icon: CapIcon,
    title: 'National Leadership Academy',
    desc: 'Intensive residential programme for emerging national leaders.',
    color: '#037ef3',
  },
  {
    Icon: GlobeIcon,
    title: 'Global Summit',
    desc: 'International convening for top AIESEC talent worldwide.',
    color: '#0CB9C1',
  },
  {
    Icon: FunctionalIcon,
    title: 'Functional Academy',
    desc: 'Portfolio-specific learning intensive for portfolio leads.',
    color: '#7552CC',
  },
  {
    Icon: OnlineIcon,
    title: 'Online Learning Series',
    desc: 'Self-paced digital modules accessible to all members.',
    color: '#00c16e',
  },
];

export default async function GlobalAcademiesPage() {
  if (!PAGE_STATUS_LIVE) return <PageOffline />;
  const page = STATIC_PAGES['global-academies'];
  const sheetResources = await fetchPageResources('global-academies');
  const resources = sheetResources ?? page.resources;

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        accent={page.accent}
        eyebrow="Learning &amp; Development"
        image="https://picsum.photos/seed/academies-hero/800/500"
      />

      {/* ── Content sections ── */}
      <section className="section-py">
        <div className="container-xl">
          {page.sections.map((section, i) => (
            <div
              key={section.heading}
              className="row align-items-center g-5"
              style={i > 0 ? {
                borderTop: '1px solid var(--border)',
                paddingTop: 56,
                marginTop: 16,
              } : {}}
            >
              {section.image && (
                <div className={`col-12 col-lg-5 ${i % 2 !== 0 ? 'order-lg-2' : ''}`}>
                  <ScrollReveal direction={i % 2 !== 0 ? 'right' : 'left'}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://picsum.photos/seed/academy-s${i}/800/480`}
                      alt={section.heading}
                      className="content-img"
                    />
                  </ScrollReveal>
                </div>
              )}
              <div className={`col-12 ${section.image ? 'col-lg-7' : 'col-lg-8'}`}>
                <ScrollReveal direction={section.image ? (i % 2 !== 0 ? 'left' : 'right') : 'up'}>
                  <div className="accent-line" style={{
                    background: page.accent,
                    backgroundImage: 'none',
                  }} />
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                    fontWeight: 800, letterSpacing: '-0.4px',
                    color: page.accent, marginBottom: 16,
                  }}>
                    {section.heading}
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)' }}>
                    {section.body}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programme types ── */}
      <section
        className="section-py"
        style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">Offerings</p>
            <h2 className="section-title">Programme Types</h2>
          </ScrollReveal>

          <div className="row g-3">
            {PROG_TYPES.map((p, i) => (
              <div key={p.title} className="col-12 col-sm-6 col-md-3">
                <ScrollReveal delay={Math.min(i + 1, 6)}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderTop: `3px solid ${p.color}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '24px 20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform var(--transition), box-shadow var(--transition)',
                  }}
                  >
                    <div
                      style={{
                        width: 52, height: 52,
                        borderRadius: 'var(--radius-sm)',
                        background: `${p.color}18`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 16px',
                      }}
                    >
                      <p.Icon color={p.color} />
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="section-py">
        <div className="container-xl">
          <ScrollReveal className="mb-5">
            <p className="section-eyebrow">Materials</p>
            <h2 className="section-title">Resources</h2>
          </ScrollReveal>

          <div className="row g-3">
            {resources.map((r, i) => (
              <div key={r.title} className="col-12 col-sm-6 col-md-4">
                <ScrollReveal delay={Math.min(i + 1, 6)}>
                  <ResourceCard
                    title={r.title}
                    description={r.description ?? r.desc}
                    type={r.type}
                    linkUrl={r.url || '#'}
                    accent={page.accent}
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
