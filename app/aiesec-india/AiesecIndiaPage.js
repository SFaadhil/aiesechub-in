'use client';

import ScrollReveal from '@/components/ScrollReveal';
import PageOffline from '@/components/PageOffline';
import { MC, ADVISORS } from '@/lib/aiesec-india-data';

const PAGE_STATUS_LIVE = true;

function mcImg(member) {
  if (!member.shortRole) return null;
  return `/images/mcvp/${member.name} - ${member.shortRole}.${member.ext ?? 'jpg'}`;
}

function PdfIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
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
          src="https://picsum.photos/seed/aiesec-india-hero/1600/700"
          alt="AIESEC in India"
          style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
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
              The world's largest youth run organisation operating across 120+ countries. With over 23 Local Committees spanning universities all across India,
              we form a network of 2500+ active young leaders united by a single purpose;
              developing leadership and enabiling cross cultural exchanges.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 20 }}>
              We believe in the power of young people to drive meaningful change. Every year, AIESEC in India has faciliated X+ exchanges, 
              sending Indian youth abroad and welcoming international participants to work, volunteer, and grow across.
              Beyond exchanges, we develop 2500+ leaders annually through our structured programs, national conferences, and functional portfolio work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our History ──────────────────────────────────────────────────── */}
      <section
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
              AIESEC in India was established in the year 1981. What began as a small chapter with X founding Local committees,
              has grown over four decaded into a naitonwide movement of young leaders.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 16 }}>
               Through the 1980s and 1990s, AIESEC in India expanded steadily across institutions,
              building a reputation for developing high quality exchange experiences and developing functional leaders at the local and national level.
              By the 200s, the entity had grown to X LC's and was consistently ranked among the top performing entities globally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 16 }}>
                The 2010's marked a period of significant growth, exchange volumes scaled to 4000+ a year, national governance was strengthed, 
              and AIESEC in India began producing producing alumni who went on to lead business, civil, society and government. 
              Today, we stand proud having delivered X+ exchanges, and developing leadership in Y+ young individuals, 
              and even to this day across X cities, AIESEC in India continues to be a defining experience for thousands of young people each term.
              driven by the same vision it was founded on; Peace and Fulfilment of humankind's potential
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our MC ───────────────────────────────────────────────────────── */}
      <section style={{ paddingBlock: 56 }}>
        <div className="ai-inset">
          <ScrollReveal>
            <div className="accent-line" />
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: 'var(--text)' }}>
              MC Conqueror&apos;s
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-3)', marginTop: 4, marginBottom: 32 }}>
              Member Committee 26.27 of AIESEC in India
            </p>
          </ScrollReveal>

          <div className="row row-cols-2 row-cols-sm-4 row-cols-md-5 row-cols-lg-7 g-4">
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
              India's strongest team comprised of 14 young leaders determined and to leave behind a Legacy for the Ages.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MC Contact List ───────────────────────────────────────────────── */}
      <section
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
      <section className="section-py">
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

          <div className="row g-4">
            {ADVISORS.map((a, i) => (
              <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <ScrollReveal delay={Math.min((i % 6) + 1, 6)}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    textAlign: 'center',
                    transition: 'transform var(--transition), box-shadow var(--transition)',
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.img}
                      alt={a.name}
                      style={{
                        width: '100%', aspectRatio: '3/4',
                        objectFit: 'cover', display: 'block',
                      }}
                    />
                    <div style={{ padding: '14px 12px' }}>
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
              const isMain = doc.main === true || doc.main === 'true';
              const href = doc.url || (doc.file ? `/compendium/${encodeURIComponent(doc.file)}` : '#');
              return (
              <div
                key={doc.file ?? doc.name ?? i}
                className={isMain ? 'col-12' : 'col-12 col-sm-6 col-md-4 col-lg-3'}
                style={{ display: 'flex' }}
              >
                <ScrollReveal delay={Math.min((i % 5) + 1, 6)} className="w-100">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      gap: 12,
                      width: '100%',
                      background: 'var(--primary)',
                      color: '#fff',
                      borderRadius: 'var(--radius-md)',
                      padding: isMain ? '20px 24px' : '16px 18px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      transition: 'filter var(--transition-fast), transform var(--transition-fast)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'brightness(0.88)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(1)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <PdfIcon />
                    {isMain ? (
                      <>
                        <span style={{ fontSize: 16 }}>{doc.name}</span>
                        <span style={{
                          marginLeft: 'auto', fontSize: 11, fontWeight: 600,
                          background: 'rgba(255,255,255,0.20)',
                          borderRadius: 6, padding: '3px 8px', flexShrink: 0,
                        }}>
                          MAIN
                        </span>
                      </>
                    ) : (
                      <span style={{ fontSize: 13, lineHeight: 1.4 }}>
                        {doc.letter && <span style={{ fontWeight: 900 }}>[{doc.letter}]</span>}
                        {doc.letter ? ' ' : ''}{doc.name}
                      </span>
                    )}
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
