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
    name: 'JNC (June National Conference)',
    desc: 'The conference where one chapter closes and another begins. JNC marks the discharge of the outgoing MC and the ratification of the incoming MC, making it one of the most emotional moments in the AIESEC in India calendar. Over five days, members come together to network, exchange ideas, create plans for the future, and make memories that last a lifetime. It also serves as an important checkpoint for Local Committees, taking place right at the halfway mark of the term.',
    Icon: NationalIcon,
    color: '#f59e0b',
  },
  {
    name: 'RYLC / NYLC (Regional / National Youth Leadership Conference)',
    desc: 'The induction conference for incoming members during the winter cycle. For many, this is their first experience of the larger AIESEC network beyond their Local Committee. It is also a space where Vice Presidents and Local Committee Presidents step into facilitation roles, leading sessions and delivering spaces in the National Plenary while inspiring the next generation of leaders.',
    Icon: CapIcon,
    color: '#037ef3',
  },
  {
    name: 'NPC (National Presidents Conference)',
    desc: 'Held after every Local Committee completes its Annual Elections Meeting, NPC brings together current and incoming Local Committee Presidents from across the country. It is a conference that symbolizes continuity and leadership transition, where outgoing LCPs proudly walk alongside their successors and prepare them for the journey ahead.',
    Icon: ReviewIcon,
    color: '#0CB9C1',
  },
  {
    name: 'NLS (National Leadership Summit)',
    desc: 'The conference where the future leadership of AIESEC in India takes shape. NLS is where MCP elections take place, determining who will lead the organization at the national level. Alongside this, it serves as a checkpoint for the outgoing Executive Boards while offering a warm welcome and orientation to the incoming Executive Boards of Local Committees across the country.',
    Icon: NationalIcon,
    color: '#7552CC',
  },
  {
    name: 'XLDS (Exchanges Leadership Development Summit)',
    desc: 'Formerly known as NLDS and MNC, XLDS brings together the best of both conferences into a single experience. While one conference focused on induction and leadership development, the other centered around innovation and problem-solving through a hackathon format. Today, XLDS carries forward both legacies, creating a space where entities collaborate, compete, and challenge themselves to emerge as the hackathon champions while growing as exchange leaders.',
    Icon: GlobeIcon,
    color: '#f85a40',
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
                    {/* Icon + title on the same row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div
                        className="conf-icon"
                        style={{ background: `${conf.color}18`, color: conf.color, flexShrink: 0 }}
                      >
                        <conf.Icon color={conf.color} />
                      </div>
                      <h3 style={{
                        fontSize: 15, fontWeight: 700,
                        margin: 0, color: 'var(--text)', lineHeight: 1.3,
                      }}>
                        {conf.name}
                      </h3>
                    </div>
                    {/* Description starts below, full width */}
                    <p style={{
                      fontSize: 13.5, color: 'var(--text-2)',
                      margin: 0, lineHeight: 1.6,
                    }}>
                      {conf.desc}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resource cards ── */}
      <section
        className="section-py"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="container-xl">
          <ScrollReveal className="mb-5">
            <p className="section-eyebrow">Outputs</p>
            <h2 className="section-title mb-2">Conference Outputs</h2>
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
