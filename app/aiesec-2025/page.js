import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ResourceCard from '@/components/ResourceCard';
import { STATIC_PAGES } from '@/lib/data';
import PageOffline from '@/components/PageOffline';

const PAGE_STATUS_LIVE = false;

export const metadata = {
  title: 'AIESEC 2025',
  description: "AIESEC global strategic direction towards 2025 — goals, pillars, and India's contribution.",
};

const PILLARS = [
  { icon: '📈', title: 'Scale Exchange Volume', desc: 'Drive significant growth in exchange participants across India.' },
  { icon: '🌟', title: 'Deepen Leadership Quality', desc: 'Elevate the quality and depth of leadership development for all members.' },
  { icon: '🤝', title: 'Expand Partner Ecosystem', desc: 'Grow our network of hosting partners, universities, and corporates.' },
];

export default function Aiesec2025Page() {
  if (!PAGE_STATUS_LIVE) return <PageOffline />;
  const page = STATIC_PAGES['aiesec-2025'];
  if (!page) notFound();

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        accent={page.accent}
        eyebrow="Strategy"
        image="https://picsum.photos/seed/2025-strategy/800/500"
      />

      {/* Content sections */}
      <section className="section-py">
        <div className="container-xl">
          {page.sections.map((section, i) => (
            <div
              key={section.heading}
              className={`row align-items-center g-5 animate-fade-up${i > 0 ? ' pt-4' : ''}`}
              style={i > 0 ? { borderTop: '1px solid var(--border)', paddingTop: 48, marginTop: 0 } : {}}
            >
              {section.image && (
                <div className={`col-12 col-lg-5 ${i % 2 !== 0 ? 'order-lg-2' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/2025-s${i}/800/480`}
                    alt={section.heading}
                    className="content-img"
                  />
                </div>
              )}
              <div className={`col-12 ${section.image ? 'col-lg-7' : 'col-lg-8'}`}>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, letterSpacing: '-0.4px', color: page.accent, marginBottom: 16 }}>
                  {section.heading}
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)' }}>{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="section-py">
        <div className="container-xl">
          <div className="text-center mb-5 animate-fade-up">
            <p className="section-eyebrow">Strategy</p>
            <h2 className="section-title">Three Strategic Pillars</h2>
          </div>
          <div className="row g-4">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`col-12 col-md-4 animate-fade-up delay-${i + 1}`}>
                <div
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderTop: `3px solid ${page.accent}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '28px 24px',
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{p.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-py">
        <div className="container-xl">
          <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 24 }}>Resources</h2>
          <div className="row g-3">
            {page.resources.map((r, i) => (
              <div key={r.title} className={`col-12 col-sm-6 col-md-4 animate-fade-up delay-${i + 1}`}>
                <ResourceCard title={r.title} icon={r.icon} description={r.desc} type={r.type} linkUrl="#" accent={page.accent} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
