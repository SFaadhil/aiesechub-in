import PageHero from '@/components/PageHero';
import HubCard from '@/components/HubCard';
import ScrollReveal from '@/components/ScrollReveal';
import { HUBS } from '@/lib/data';
import PageOffline from '@/components/PageOffline';

const PAGE_STATUS_LIVE = true;

export const metadata = {
  title: 'Functional Hub',
  description: 'Browse all 11 AIESEC India functional portfolio hubs.',
};

const GROUPS = [
  {
    id: 'exchange',
    label: 'Exchanges',
    sub: 'iGV · oGV · iGTae · oGTae',
    slugs: ['igv', 'ogv', 'igtae', 'ogtae'],
  },
  {
    id: 'enabling',
    label: 'Exchange Support',
    sub: 'MKT · BD · PM · FnL',
    slugs: ['mkt', 'bd', 'pm', 'fnl'],
  },
  {
    id: 'support',
    label: 'Support Functions',
    sub: 'IM · OD · Expansions',
    slugs: ['im', 'od', 'expansions'],
  },
];

const COLOR_LEGEND = [
  { label: 'iGV / oGV',     color: '#f85a40' },
  { label: 'iGTae / oGTae', color: '#0CB9C1' },
  { label: 'MKT',           color: '#037ef3' },
  { label: 'BD',            color: '#f59e0b' },
  { label: 'PM',            color: '#7552CC' },
  { label: 'FnL',           color: '#00c16e' },
  { label: 'OD',       color: '#8b9ab0' },
];

export default function FunctionalHubPage() {
  if (!PAGE_STATUS_LIVE) return <PageOffline />;
  return (
    <>
      <PageHero
        title="Functional Hub"
        subtitle="Browse all 11 portfolio hubs. Click any card to access resources, guides, and tools for your function."
        eyebrow="Portfolios"
        image="https://picsum.photos/seed/hub-index/800/500"
      />

      <section className="section-py">
        <div className="container-xl">
          {GROUPS.map((group, gi) => (
            <div key={group.id} className={gi > 0 ? 'mt-5 pt-4' : ''}>
              <ScrollReveal>
                <div
                  className="d-flex align-items-baseline gap-3 mb-4"
                  style={gi > 0 ? { borderTop: '1px solid var(--border)', paddingTop: 40 } : {}}
                >
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--text)' }}>
                    {group.label}
                  </h2>
                  <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{group.sub}</span>
                </div>
              </ScrollReveal>

              <div className="row g-3">
                {HUBS.filter((h) => group.slugs.includes(h.slug)).map((hub, i) => (
                  <div key={hub.slug} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <ScrollReveal delay={Math.min(i + 1, 6)}>
                      <HubCard {...hub} />
                    </ScrollReveal>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colour legend */}
      <section className="section-pb">
        <div className="container-xl">
          <ScrollReveal>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 24px',
            }}>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.8px', color: 'var(--text-3)', marginBottom: 14,
              }}>
                Portfolio Colour Guide
              </p>
              <div className="d-flex flex-wrap" style={{ gap: '8px 24px' }}>
                {COLOR_LEGEND.map((item) => (
                  <div key={item.label} className="d-flex align-items-center gap-2">
                    <span style={{
                      width: 10, height: 10,
                      borderRadius: 3,
                      background: item.color,
                      display: 'inline-block',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
