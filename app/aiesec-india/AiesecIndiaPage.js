'use client';

import ScrollReveal from '@/components/ScrollReveal';
import PageOffline from '@/components/PageOffline';

const PAGE_STATUS_LIVE = true;

const COMPENDIUM = [
  { name: 'Main Compendium',                                     file: 'Main Compendium.docx.pdf',                                          main: true },
  { letter: 'A', name: 'Brand Standardization',                 file: 'A_Brand Standardization (Brand and IM).pdf' },
  { letter: 'B', name: 'Code of Ethics',                        file: 'B_Code of Ethics (Legal and Governance).docx.pdf' },
  { letter: 'C', name: 'Election and Selection Procedure',      file: 'C_Election and Selection Procedure (AIESEC India).docx.pdf' },
  { letter: 'D', name: 'Legislative Procedures',                file: 'D_Legislative Procedures.docx.pdf' },
  { letter: 'E', name: 'HR Policy',                             file: 'E_HR Policy.docx.pdf' },
  { letter: 'F', name: 'Limited Period Motions and Mandates',   file: 'F_Limited Period Motions and Mandates.docx.pdf' },
  { letter: 'G', name: 'Entity Membership',                     file: 'G_Entity Membership.pdf' },
  { letter: 'H', name: 'Partnership Principles and MC List',    file: 'H_Partnership Principles and MC List.docx.pdf' },
  { letter: 'I', name: 'Product Policies Sub-Document (OPSC)',  file: 'I_Product Policies Sub-Document _ OPSC.docx.pdf' },
  { letter: 'J', name: 'National / Regional Meetings & Conferences', file: 'J_National_Regional Meetings & Conferences.docx.pdf' },
  { letter: 'K', name: 'Roles and Responsibilities',            file: 'K_Roles and Responsibilities.docx.pdf' },
  { letter: 'L', name: 'Reserve Policy',                        file: 'L_Reserve Policy.docx.pdf' },
  { letter: 'M', name: 'Internal Audit Board Charter',          file: 'M_Internal Audit Board Charter.docx.pdf' },
  { letter: 'N', name: 'Parent LC Services Model',              file: 'N_ Parent LC Services Model.docx.pdf' },
  { letter: 'O', name: 'MC Service Model',                      file: 'O_MC Service Model.pdf' },
  { letter: 'P', name: 'AIESEC Portfolio Internal Policies',    file: 'P_AIESEC Portfolio Internal Policies Last Update IC 2025.pdf' },
  { letter: 'Q', name: 'Anti Sexual Harassment Policy',         file: 'Q_Anti Sexual Harassment Policy.docx.pdf' },
  { letter: 'R', name: 'Quality Control and Assurance Sub-Document (OPSC)', file: 'R_Quality Control and Assurance Sub-Document _ OPSC.docx.pdf' },
  { letter: 'S', name: 'Finance Policy',                        file: 'S_Finance Policy.docx.pdf' },
];

const MC = [
  { name: 'S Faadhil Mahboob', role: 'MCVP Digital Experience & Information Management', shortRole: 'DXP & IM', phone: '+91 6374250424', dotIn: 'faadhil.mahboob@aiesec.in',  dotId: 'faadhil.mahboob@aiesecmember.in' },
  { name: 'Misna Khatun',       role: 'MCVP People Management',                                  shortRole: 'PM',                       phone: '+91 7717353509', dotIn: 'misna.khatun@aiesec.in',          dotId: 'misna.khatun@aiesecmember.in', ext: 'png' },
  { name: 'MC Member 3',       role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member3@aiesec.in',          dotId: 'member3@aiesecmember.in' },
  { name: 'MC Member 4',       role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member4@aiesec.in',          dotId: 'member4@aiesecmember.in' },
  { name: 'MC Member 5',       role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member5@aiesec.in',          dotId: 'member5@aiesecmember.in' },
  { name: 'MC Member 6',       role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member6@aiesec.in',          dotId: 'member6@aiesecmember.in' },
  { name: 'MC Member 7',       role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member7@aiesec.in',          dotId: 'member7@aiesecmember.in' },
  { name: 'MC Member 8',       role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member8@aiesec.in',          dotId: 'member8@aiesecmember.in' },
  { name: 'MC Member 9',       role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member9@aiesec.in',          dotId: 'member9@aiesecmember.in' },
  { name: 'MC Member 10',      role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member10@aiesec.in',         dotId: 'member10@aiesecmember.in' },
  { name: 'MC Member 11',      role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member11@aiesec.in',         dotId: 'member11@aiesecmember.in' },
  { name: 'MC Member 12',      role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member12@aiesec.in',         dotId: 'member12@aiesecmember.in' },
  { name: 'MC Member 13',      role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member13@aiesec.in',         dotId: 'member13@aiesecmember.in' },
  { name: 'MC Member 14',      role: 'Role Placeholder',                                  shortRole: null,                       phone: '+91 0000000000', dotIn: 'member14@aiesec.in',         dotId: 'member14@aiesecmember.in' },
];

function mcImg(member) {
  if (!member.shortRole) return null;
  return `/images/mcvp/${member.name} - ${member.shortRole}.${member.ext ?? 'jpg'}`;
}

const ADVISORS = [
  { name: 'S Faadhil Mahboob', designation: 'Head of Digital Experience and Information Management, AIESEC in India', img: '/images/board-of-advisors/faadhil.jpg' },
  { name: 'Advisor 2',         designation: 'Designation Placeholder', img: 'https://placehold.co/300x400/e2e8f0/64748b?text=Photo' },
  { name: 'Advisor 3',         designation: 'Designation Placeholder', img: 'https://placehold.co/300x400/e2e8f0/64748b?text=Photo' },
  { name: 'Advisor 4',         designation: 'Designation Placeholder', img: 'https://placehold.co/300x400/e2e8f0/64748b?text=Photo' },
  { name: 'Advisor 5',         designation: 'Designation Placeholder', img: 'https://placehold.co/300x400/e2e8f0/64748b?text=Photo' },
  { name: 'Advisor 6',         designation: 'Designation Placeholder', img: 'https://placehold.co/300x400/e2e8f0/64748b?text=Photo' },
];

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
            Developing the leadership potential of young people since 1959.
            One of the largest youth-run organisations in the world.
          </p>
        </div>
      </section>

      {/* ── About text ───────────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="ai-inset">
          <ScrollReveal>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-2)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 20 }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 16 }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-2)', marginTop: 16 }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
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
