'use client';

import ScrollReveal from '@/components/ScrollReveal';
import PageOffline from '@/components/PageOffline';
import { MC, ADVISORS } from '@/lib/aiesec-india-data';

const PAGE_STATUS_LIVE = true;

function mcImg(member) {
  if (!member.shortRole) return null;
  return `/images/mcvp/${member.name} - ${member.shortRole}.${member.ext ?? 'jpg'}`;
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export default function AiesecIndiaPage({ compendium: sheetCompendium }) {
  if (!PAGE_STATUS_LIVE) return <PageOffline />;
  const compendiumDocs = sheetCompendium ?? COMPENDIUM;
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/placeholder-cards/aiesec-in-india.jpeg"
          alt="AIESEC in India"
          style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 100%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
        }}>
          {/* Accent bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'var(--primary)',
          }} />

          <p className="animate-fade-in" style={{
            fontSize: 11.5, fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 12,
          }}>
            Est. 1981
          </p>
          <h1 className="animate-fade-up delay-1" style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
            color: '#fff', margin: 0, lineHeight: 1.15,
          }}>
            AIESEC in India
          </h1>
          <p className="animate-fade-up delay-2" style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.80)', marginTop: 16,
            maxWidth: 600, lineHeight: 1.65,
          }}>
            Developing the leadership potential of young people since 1981.
            One of the largest youth-run organisations in the world.
          </p>
        </div>
      </section>

      {/* ── About text ───────────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="ai-inset">
          <ScrollReveal>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-2)' }}>
              AIESEC in India is one of the largest and the most impactful national entities of AIESEC;
              The world&apos;s largest youth run organisation operating across 120+ countries. With over 19 Local Committees spanning universities all across India,
              we form a network of 2500+ active young leaders united by a single purpose;
              developing leadership and enabiling cross cultural exchanges.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 20 }}>
              We believe in the power of young people to drive meaningful change. In 45 years, AIESEC in India has faciliated 55,000+ exchanges, 
              sending Indian youth abroad and welcoming international participants to work, volunteer, and grow across.
              Beyond exchanges, we develop 2500+ leaders annually through our structured programs, national conferences, and functional portfolio work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our History ──────────────────────────────────────────────────── */}
      <section
        id="history"
        className="section-py"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="ai-inset">
          <ScrollReveal>
            <div className="accent-line" />
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, color: 'var(--text)' }}>
              Our History
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)' }}>
              AIESEC in India was established in the year 1981. What began as a small chapter with a few founding Local committees,
              has grown over four decades into a naitonwide movement of young leaders.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 16 }}>
               Through the 1980s and 1990s, AIESEC in India expanded steadily across institutions,
              building a reputation for developing high quality exchange experiences and developing functional leaders at the local and national level.
              By the 2000s, the entity had grown to 15+ LC&apos;s and was consistently ranked among the top performing entities globally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 16 }}>
                The 2010&apos;s marked a period of significant growth, exchange volumes scaled to 4000+ a year, national governance was strengthed, 
              and AIESEC in India began producing producing alumni who went on to lead business, civil, society and government. 
              Today, we stand proud having delivered 55,000+ exchanges, and developing leadership in 44,000+ young individuals, 
              and even to this day across 20+ cities, AIESEC in India continues to be a defining experience for thousands of young people each term.
              driven by the same vision it was founded on; Peace and Fulfilment of humankind&apos;s potential
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our MC ───────────────────────────────────────────────────────── */}
      <section id="mc" style={{ paddingBlock: 56 }}>
        <div className="ai-inset">
          <ScrollReveal>
            <div className="accent-line" />
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: 'var(--text)' }}>
              MC Zidd
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-3)', marginTop: 4, marginBottom: 32 }}>
              Member Committee 26.27 of AIESEC in India
            </p>
          </ScrollReveal>

          <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 g-4">
            {MC.map((m, i) => {
              const img = mcImg(m);
              return (
                <div key={m.name} className="col" style={{ textAlign: 'center' }}>
                  <ScrollReveal delay={Math.min((i % 6) + 1, 6)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img ?? `https://placehold.co/180x240/e2e8f0/94a3b8?text=${encodeURIComponent(m.name.split(' ')[0])}`}
                      alt={m.name}
                      onError={(e) => { e.currentTarget.src = `https://placehold.co/180x240/e2e8f0/94a3b8?text=${encodeURIComponent(m.name.split(' ')[0])}`; }}
                      style={{
                        width: '100%', aspectRatio: '3/4',
                        objectFit: 'cover', objectPosition: 'top',
                        borderRadius: 'var(--radius-lg)', display: 'block',
                        transition: 'transform var(--transition)',
                      }}
                    />
                    <p style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: 'var(--text)', lineHeight: 1.35 }}>
                      {m.name}
                    </p>
                    <p style={{ marginTop: 3, fontSize: 11.5, color: 'var(--text-3)', lineHeight: 1.4 }}>
                      {m.role}
                    </p>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>

          <ScrollReveal>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)', maxWidth: 820, marginTop: 36 }}>
              India&apos;s strongest team comprised of 14 young leaders determined and to leave behind a Legacy for the Ages.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MC Contact List ───────────────────────────────────────────────── */}
      <section
        id="mc-contact"
        className="section-py"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="ai-inset">
          <ScrollReveal>
            <div className="accent-line" />
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, color: 'var(--text)' }}>
              MC Contact List
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="leaderboard-wrap"
              style={{ overflowX: 'auto' }}
            >
              <table style={{ width: '100%', marginBottom: 0 }}>
                <thead>
                  <tr>
                    {['Name', 'Role', 'Phone', '.in', '.ID'].map((h) => (
                      <th key={h} style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MC.map((m) => (
                    <tr key={m.dotIn}>
                      <td style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{m.name}</td>
                      <td>{m.role}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>{m.phone}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <a href={`mailto:${m.dotIn}`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                          {m.dotIn}
                        </a>
                      </td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <a href={`mailto:${m.dotId}`} style={{ color: 'var(--text-3)', textDecoration: 'none' }}>
                          {m.dotId}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Board of Advisors ─────────────────────────────────────────────── */}
      <section id="advisors" className="section-py">
        <div className="ai-inset">
          <ScrollReveal>
            <div className="accent-line" />
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>
              Board of Advisors
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 36 }}>
              Guiding AIESEC in India with experience and expertise
            </p>
          </ScrollReveal>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-4">
            {ADVISORS.map((a, i) => (
              <div key={i} className="col" style={{ display: 'flex' }}>
                <ScrollReveal delay={Math.min((i % 6) + 1, 6)} className="h-100 w-100">
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    textAlign: 'center',
                    transition: 'transform var(--transition), box-shadow var(--transition)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.img}
                      alt={a.name}
                      style={{
                        width: '100%', aspectRatio: '3/4',
                        objectFit: 'cover', objectPosition: 'top', display: 'block',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ padding: '14px 12px', flex: 1 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                        {a.name}
                      </p>
                      <p style={{ fontSize: 11.5, color: 'var(--text-3)', marginTop: 4, lineHeight: 1.5 }}>
                        {a.designation}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compendium ────────────────────────────────────────────────────── */}
      <section
        id="compendium"
        className="section-py"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="ai-inset">
          <ScrollReveal>
            <div className="accent-line" />
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>
              Compendium
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-3)', marginBottom: 36 }}>
              AIESEC in India&apos;s governing policy documents
            </p>
          </ScrollReveal>

          <div className="row g-3">
            {compendiumDocs.map((doc, i) => {
              const isMain = doc.main === true || String(doc.main).toLowerCase() === 'true';
              const href = doc.url || (doc.file ? `/compendium/${encodeURIComponent(doc.file)}` : '#');
              return (
                <div
                  key={doc.file ?? doc.name ?? i}
                  className={isMain ? 'col-12' : 'col-12 col-sm-6 col-md-4 col-lg-3'}
                  style={{ display: 'flex' }}
                >
                  <ScrollReveal delay={Math.min((i % 5) + 1, 6)} className="w-100 h-100">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`compendium-card${isMain ? ' compendium-card-main' : ''}`}
                    >
                      <span className="compendium-badge">
                        {isMain ? 'MAIN' : doc.letter}
                      </span>
                      <span className="compendium-title">
                        {doc.name}
                      </span>
                      <span className="compendium-arrow">
                        <ArrowIcon />
                      </span>
                    </a>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
