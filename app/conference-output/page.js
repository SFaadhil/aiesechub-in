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
  title: 'Conference Output',
  description: 'Key outputs and resources from AIESEC India national and regional conferences.',
};

function NationalIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function ReviewIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <polyline points="9 9 12 12 15 9"/>
    </svg>
  );
}

const CONF_TYPES = [
  {
    name: 'National Congress (NC)',
    desc: 'Annual flagship conference for strategic direction setting and national governance.',
    Icon: NationalIcon,
    color: '#f59e0b',
  },
  {
    name: 'NLDS',
    desc: 'National Leadership Development Seminar — intensive training for emerging LC leaders.',
    Icon: CapIcon,
    color: '#f85a40',
  },
  {
    name: 'Mid-Year Conference (MYC)',
    desc: 'Mid-term review to assess progress, recalibrate strategy, and share best practices.',
    Icon: ReviewIcon,
    color: '#037ef3',
  },
  {
    name: 'Regional Conferences',
    desc: 'Zone-level conferences for regional networking and localised strategy.',
    Icon: GlobeIcon,
    color: '#0CB9C1',
  },
];

export default async function ConferenceOutputPage() {
  if (!PAGE_STATUS_LIVE) return <PageOffline />;
  const page = STATIC_PAGES['conference-output'];
  const sheetResources = await fetchPageResources('conference-output');
  const resources = sheetResources ?? page.resources;

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        accent={page.accent}
        eyebrow="Conference Hub"
        image="https://picsum.photos/seed/conference-hero/800/500"
      />

      {/* ── Conference types ── */}
      <section className="section-py">
        <div className="container-xl">
          <ScrollReveal className="mb-5">
            <p className="section-eyebrow">Our Conferences</p>
            <h2 className="section-title mb-2">National &amp; Regional Events</h2>
            <p className="section-body">
              AIESEC India runs multiple conferences each term at national and regional levels.
            </p>
          </ScrollReveal>

          <div className="row g-3">
            {CONF_TYPES.map((conf, i) => (
              <div key={conf.name} className="col-12 col-md-6">
                <ScrollReveal delay={Math.min(i + 1, 6)}>
                  <div
                    className="conf-card"
                    style={{ borderLeft: `3px solid ${conf.color}` }}
                  >
                    <div
                      className="conf-icon"
                      style={{
                        background: `${conf.color}18`,
                        color: conf.color,
                      }}
                    >
                      <conf.Icon color={conf.color} />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: 15, fontWeight: 700,
                        marginBottom: 6, color: 'var(--text)',
                      }}>
                        {conf.name}
                      </h3>
                      <p style={{
                        fontSize: 13.5, color: 'var(--text-2)',
                        margin: 0, lineHeight: 1.6,
                      }}>
                        {conf.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.sections.map((section, i) => (
        <section
          key={section.heading}
          className="section-py"
          style={{
            background: i % 2 === 0 ? 'var(--bg-alt)' : 'var(--bg)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div className="container-xl">
            <div className="row g-5 align-items-center">
              {section.image && (
                <div className="col-12 col-lg-5">
                  <ScrollReveal direction="left">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="content-img"
                    />
                  </ScrollReveal>
                </div>
              )}
              <div className={`col-12 ${section.image ? 'col-lg-7' : 'col-lg-8'}`}>
                <ScrollReveal direction={section.image ? 'right' : 'up'}>
                  <div className="accent-line" style={{
                    background: page.accent,
                    backgroundImage: 'none',
                  }} />
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                    fontWeight: 800, color: page.accent, marginBottom: 16,
                  }}>
                    {section.heading}
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)' }}>
                    {section.body}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Resource cards ── */}
      <section
        className="section-py"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="container-xl">
          <ScrollReveal className="mb-5">
            <p className="section-eyebrow">Materials</p>
            <h2 className="section-title mb-2">Conference Materials</h2>
            <p className="section-body">
              Outputs and materials from past and upcoming conferences.
            </p>
          </ScrollReveal>

          <div className="row g-3">
            {resources.map((r, i) => (
              <div key={r.title} className="col-12 col-sm-6 col-md-4">
                <ScrollReveal delay={Math.min((i % 5) + 1, 6)}>
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
