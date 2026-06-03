'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import PageOffline from '@/components/PageOffline';

const PAGE_STATUS_LIVE = true;

const IMG = (name) => `/images/AIESECway/${name}`;

const R  = 74;
const HW = R * 2;
const HH = Math.round(R * Math.sqrt(3));
const D  = HH + 5;
const CX = 200;
const CY = 210;
const HEX_CLIP = 'polygon(100% 50%, 75% 100%, 25% 100%, 0% 50%, 25% 0%, 75% 0%)';
const DX = Math.round(D * Math.cos(Math.PI / 6));
const DY = Math.round(D * 0.5);

const HEXES = [
  { id: 'center', cx: CX, cy: CY, hexColor: '#dce8f5', isCenter: true },
  {
    id: 'al', cx: CX, cy: CY - D, hexColor: '#1565C0',
    label: 'ACTIVATING\nLEADERSHIP', tooltipDir: 'top',
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <rect x="10" y="8" width="4" height="32" rx="2" fill="white" opacity="0.9"/>
        <path d="M14 10 L38 15 L36 26 L14 26 Z" fill="#ef4444"/>
        <path d="M13 20 L34 25 L32 34 L13 34 Z" fill="#f97316" opacity="0.85"/>
      </svg>
    ),
    desc: 'We lead by example and inspire leadership through actions and results. We take responsibility for developing the leadership of others — we live it by inspiring others to be role models.',
    elements: ['Practising empathy', 'Inspiring others'],
  },
  {
    id: 'di', cx: CX - DX, cy: CY - DY, hexColor: '#E67E22',
    label: 'DEMONSTRATING\nINTEGRITY', tooltipDir: 'left',
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <polygon points="24,6 38,16 33,36 15,36 10,16" fill="#00bcd4" stroke="#0097a7" strokeWidth="1.5"/>
        <polygon points="24,12 34,19 30,32 18,32 14,19" fill="#4dd0e1" opacity="0.7"/>
        <circle cx="14" cy="13" r="3" fill="#fff176"/>
        <circle cx="34" cy="10" r="2" fill="#fff176"/>
        <circle cx="38" cy="20" r="2.5" fill="#fff176"/>
      </svg>
    ),
    desc: 'We are consistent and transparent in our decisions and actions. We fulfil our commitments and conduct ourselves in a way aligned with what we envision — our actions back up our words.',
    elements: ['Living authenticity', 'Doing what is right'],
  },
  {
    id: 'as', cx: CX + DX, cy: CY - DY, hexColor: '#27AE60',
    label: 'ACTING\nSUSTAINABLY', tooltipDir: 'right',
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle cx="20" cy="20" r="12" fill="none" stroke="#e0f2f1" strokeWidth="3"/>
        <line x1="20" y1="9" x2="20" y2="20" stroke="#e0f2f1" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="20" y1="20" x2="27" y2="26" stroke="#e0f2f1" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="34" r="8" fill="#ffd600" opacity="0.9"/>
        <text x="32" y="38" textAnchor="middle" fontSize="10" fill="#1b5e20" fontWeight="bold">$</text>
        <path d="M6 36 Q10 28 16 30 Q18 22 24 26 Q28 20 34 24" fill="none" stroke="#a5d6a7" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'We act in a sustainable way for our society. Our decisions take into account the needs of future generations — we live it by building on what has been done in the past.',
    elements: ['Making long-term decisions', 'Managing resources sustainably'],
  },
  {
    id: 'ep', cx: CX - DX, cy: CY + DY, hexColor: '#F1C40F',
    label: 'ENJOYING\nPARTICIPATION', tooltipDir: 'left',
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <path d="M24 8 C20 8 17 11 17 15 C17 21 24 28 24 28 C24 28 31 21 31 15 C31 11 28 8 24 8Z" fill="#7b1fa2"/>
        <ellipse cx="24" cy="38" rx="12" ry="5" fill="#7b1fa2" opacity="0.6"/>
        <circle cx="16" cy="30" r="4" fill="#ce93d8"/>
        <circle cx="32" cy="30" r="4" fill="#ce93d8"/>
      </svg>
    ),
    desc: 'We celebrate and enjoy the way we are and what we represent in the society, considering the role of youth in the world — we live it by putting a youthful energy in everything we do.',
    elements: ['Demonstrating enthusiasm', 'Being proud in who we are'],
  },
  {
    id: 'se', cx: CX + DX, cy: CY + DY, hexColor: '#546E7A',
    label: 'STRIVING FOR\nEXCELLENCE', tooltipDir: 'right',
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <path d="M14 8 H34 L32 24 C32 32 28 36 24 38 C20 36 16 32 16 24 Z" fill="#ffd600"/>
        <path d="M14 8 H8 L14 20" fill="#ffa000" opacity="0.9"/>
        <path d="M34 8 H40 L34 20" fill="#ffa000" opacity="0.9"/>
        <rect x="19" y="38" width="10" height="4" rx="1" fill="#ffd600"/>
        <rect x="15" y="42" width="18" height="3" rx="1.5" fill="#ffa000"/>
      </svg>
    ),
    desc: 'We continuously improve through creativity and innovation. We strive to deliver the highest quality performance in everything we do — encouraging each other to be better and appreciating feedback.',
    elements: ['Self-developing based on feedback', 'Continuous learning'],
  },
  {
    id: 'ld', cx: CX, cy: CY + D, hexColor: '#0097A7',
    label: 'LIVING\nDIVERSITY', tooltipDir: 'bottom',
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle cx="14" cy="22" r="5" fill="#ef4444" opacity="0.9"/>
        <circle cx="24" cy="18" r="5" fill="#7b1fa2" opacity="0.9"/>
        <circle cx="34" cy="22" r="5" fill="#1565c0" opacity="0.9"/>
        <path d="M12 30 L24 38 L36 30" fill="#ffd600" opacity="0.7"/>
      </svg>
    ),
    desc: 'We seek to learn from different ways of life and opinions represented in our multicultural environment. We are inclusive by respecting and actively encouraging the contribution of every individual.',
    elements: ['Building inclusive spaces', "Capitalising on each others' differences"],
  },
];

const VALUE_CARDS = HEXES.filter(h => !h.isCenter);

function HexCluster({ hoveredId, onHover, onLeave }) {
  return (
    <div style={{
      position: 'relative',
      width: 400, height: 420,
      margin: '0 auto',
      overflow: 'visible',
    }}>
      {HEXES.map((h) => {
        const isHovered = hoveredId === h.id;
        const left = h.cx - HW / 2;
        const top  = h.cy - HH / 2;

        if (h.isCenter) {
          return (
            <div key="center" style={{
              position: 'absolute', left, top,
              width: HW, height: HH,
              clipPath: HEX_CLIP,
              background: h.hexColor,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1, overflow: 'hidden',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/aiesec-human-white.png"
                alt="AIESEC"
                style={{ width: '72%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          );
        }

        return (
          <div
            key={h.id}
            onMouseEnter={() => onHover(h.id)}
            onMouseLeave={onLeave}
            style={{
              position: 'absolute', left, top,
              width: HW, height: HH,
              clipPath: HEX_CLIP,
              background: h.hexColor,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              zIndex: isHovered ? 10 : 2,
              transform: isHovered ? 'translateY(-8px) scale(1.08)' : 'none',
              filter: isHovered
                ? `drop-shadow(0 12px 24px ${h.hexColor}aa)`
                : 'drop-shadow(0 3px 8px rgba(0,0,0,0.18))',
              transition: 'transform 220ms cubic-bezier(0.34,1.56,0.64,1), filter 220ms ease',
              gap: 4,
              paddingBottom: 8,
            }}
          >
            <div style={{ flexShrink: 0 }}>{h.icon}</div>
            <div style={{
              fontSize: 8.5, fontWeight: 800,
              color: 'white', textAlign: 'center',
              lineHeight: 1.3, textTransform: 'uppercase',
              letterSpacing: '0.4px', whiteSpace: 'pre-line',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}>
              {h.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SectionDiv() {
  return <div style={{ borderTop: '1px solid var(--border)' }} />;
}

const SECTION_LIGHT = { background: 'var(--bg)', padding: '72px 0' };
const SECTION_ALT   = { background: 'var(--bg-alt)', padding: '72px 0' };

export default function AiesecWayPage() {
  const [hoveredId, setHoveredId] = useState(null);
  if (!PAGE_STATUS_LIVE) return <PageOffline />;

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg-alt)',
        minHeight: 420, display: 'flex', alignItems: 'center',
      }}>
        {/* Arc decoration */}
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute', right: 0, top: 0,
            height: '100%', width: 'auto', opacity: 0.12,
          }}
          viewBox="0 0 500 500" fill="none"
        >
          <circle cx="500" cy="0" r="420" stroke="var(--primary)" strokeWidth="60" fill="none"/>
          <circle cx="500" cy="0" r="300" stroke="var(--primary)" strokeWidth="60" fill="none"/>
          <circle cx="500" cy="0" r="180" stroke="var(--primary)" strokeWidth="60" fill="none"/>
        </svg>
        {/* Solid blue arc */}
        <div style={{
          position: 'absolute', right: 0, top: 0,
          width: '38%', height: '100%', overflow: 'hidden', pointerEvents: 'none',
        }}>
          <svg viewBox="0 0 380 420" width="100%" height="100%"
            fill="none" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
            <circle cx="380" cy="0" r="340" fill="var(--primary)" opacity="0.10"/>
            <circle cx="380" cy="0" r="250" fill="var(--primary)" opacity="0.12"/>
            <circle cx="380" cy="0" r="160" fill="var(--primary)" opacity="0.16"/>
            <circle cx="380" cy="0" r="80"  fill="var(--primary)" opacity="0.22"/>
          </svg>
        </div>

        <div className="container-xl" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
          <div style={{ maxWidth: 580 }}>
            <p className="section-eyebrow animate-fade-in">Framework</p>
            <h1 className="animate-fade-up delay-1" style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900, lineHeight: 1.05,
              letterSpacing: '-2px', color: 'var(--text)', marginBottom: 24,
            }}>
              THE<br />
              <span style={{ color: 'var(--primary)' }}>AIESEC</span><br />
              WAY
            </h1>
            <p className="animate-fade-up delay-2" style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 480,
            }}>
              The guide that explains the purpose of our existence and the unique way
              we achieve it as an organisation.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════ INTRO ══════════════════ */}
      <section style={{ background: 'var(--surface)', padding: '48px 0 40px' }}>
        <div className="container-xl text-center">
          <ScrollReveal>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-2)', lineHeight: 1.8,
              maxWidth: 780, margin: '0 auto 24px',
            }}>
              <strong style={{ color: 'var(--text)' }}>The AIESEC Way</strong> is the guide that
              explains what is the purpose of our existence but also the unique way of how we are
              achieving it as an organisation.
            </p>
            <div style={{
              width: 72, height: 4,
              background: 'linear-gradient(90deg, var(--primary), #0CB9C1)',
              borderRadius: 2, margin: '0 auto',
            }} />
          </ScrollReveal>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ GOLDEN CIRCLE ══════════════════ */}
      <section style={SECTION_ALT}>
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">Framework</p>
            <h2 className="section-title">The Golden Circle</h2>
            <p className="section-body mx-auto mt-2">
              The AIESEC Way is explained through an adapted version of the Golden Circle model —
              a simple and powerful explanation of what we believe in and what drives us.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/AIESECway/the-golden-circle.png"
              alt="Golden Circle — Why, Who, How, What"
              style={{
                display: 'block', margin: '0 auto',
                maxWidth: 900, width: '100%', borderRadius: 16,
              }}
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ OUR FOUNDATION ══════════════════ */}
      <section style={SECTION_LIGHT}>
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <ScrollReveal direction="left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG('Foundation.png')}
                  alt="Our Foundation"
                  style={{
                    width: '100%', height: 'auto',
                    borderRadius: 16, boxShadow: 'var(--shadow-md)',
                  }}
                />
              </ScrollReveal>
            </div>
            <div className="col-12 col-lg-7">
              <ScrollReveal direction="right">
                <div className="accent-line" />
                <p className="section-eyebrow">Our Foundation</p>
                <h2 className="section-title mb-4">
                  It all started after the Second World War
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 16 }}>
                  AIESEC was founded after the Second World War by a group of young people from
                  Europe (Belgium, Denmark, Finland, France, Netherlands, Norway, and Sweden).
                  The political and social context of the time shaped our fundamental principles.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 16 }}>
                  The perception of &lsquo;peace&rsquo; has evolved. We now know peace starts
                  with people accepting, understanding, and embracing what makes us unique.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', fontWeight: 600 }}>
                  That is why AIESEC strives for Peace &amp; Fulfilment of Humankind&apos;s Potential.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ WHY ══════════════════ */}
      <section style={SECTION_ALT}>
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-7">
              <ScrollReveal direction="left">
                <div className="accent-line" />
                <p className="section-eyebrow">WHY — Our Vision</p>
                <h2 className="section-title mb-4">
                  Peace &amp; Fulfilment of Humankind&apos;s Potential
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 16 }}>
                  In today&apos;s context, &lsquo;Peace&rsquo; does not only mean avoiding war.
                  Peace can refer to a world where no conflict arises from cultural, religious,
                  or other differences in humanity.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 16 }}>
                  AIESEC&apos;s aspiration is for every young person to work towards their
                  understanding of peace and take collaborative action towards fostering a
                  better world.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)' }}>
                  Through &ldquo;Fulfillment of Humankind&apos;s Potential&rdquo;, AIESEC envisions
                  a world where people continually become better versions of themselves and
                  empower others along the way.
                </p>
              </ScrollReveal>
            </div>
            <div className="col-12 col-lg-5">
              <ScrollReveal direction="right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG('Why.png')}
                  alt="WHY — Our Vision"
                  style={{
                    width: '100%', height: 'auto',
                    borderRadius: 16, boxShadow: 'var(--shadow-md)',
                  }}
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ WHO ══════════════════ */}
      <section style={SECTION_LIGHT}>
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <ScrollReveal direction="left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG('Who.png')}
                  alt="WHO — Our Target"
                  style={{
                    width: '100%', height: 'auto',
                    borderRadius: 16, boxShadow: 'var(--shadow-md)',
                  }}
                />
              </ScrollReveal>
            </div>
            <div className="col-12 col-lg-7">
              <ScrollReveal direction="right">
                <div className="accent-line" />
                <p className="section-eyebrow">WHO — Our Target</p>
                <h2 className="section-title mb-4">
                  We engage and develop youth to create a better future
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 16 }}>
                  Getting young adults involved and developing them is essential. We believe
                  that we as young people have the responsibility to create a long-lasting,
                  positive impact on our own lives, our communities, and the world at large.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)' }}>
                  We trust that we will drive and shape the future with our passion, dynamism,
                  and innovative spirit — for themselves, their communities and therefore, the world.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ HOW ══════════════════ */}
      <section style={SECTION_ALT}>
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">HOW — Our Method</p>
            <h2 className="section-title">Leadership is the fundamental solution</h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG('How.png')}
              alt="We believe Leadership is the fundamental solution"
              style={{
                display: 'block', margin: '0 auto 32px',
                maxWidth: 900, width: '100%',
                borderRadius: 16, boxShadow: 'var(--shadow-md)',
              }}
            />
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p style={{
              fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)',
              maxWidth: 820, margin: '0 auto', textAlign: 'center',
            }}>
              AIESEC is a platform that strives to unlock the potential within humankind. We do
              that by enabling young people to demonstrate and live by values based on
              AIESEC&apos;s leadership development model.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ VALUES / HEX CLUSTER ══════════════════ */}
      <section style={SECTION_LIGHT}>
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">Our Values</p>
            <h2 className="section-title">Our Unique Leadership Development Model</h2>
            <p className="section-body mx-auto mt-2">
              AIESEC&apos;s leadership development model seeks to prepare youth to take a stand
              on what they care about. Hover over each value to learn more.
            </p>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <div style={{ transform: 'scale(var(--hex-scale,1))', transformOrigin: 'top center' }}>
              <HexCluster
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          </div>

          {/* Values text cards */}
          <div className="row g-3 mt-5">
            {VALUE_CARDS.map((v, i) => (
              <div key={v.id} className="col-12 col-sm-6 col-md-4">
                <ScrollReveal delay={Math.min((i % 6) + 1, 6)}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderLeft: `4px solid ${v.hexColor}`,
                    borderRadius: 12,
                    padding: '18px 16px',
                    height: '100%',
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform var(--transition), box-shadow var(--transition)',
                  }}>
                    <h3 style={{
                      fontSize: 13.5, fontWeight: 700,
                      color: v.hexColor, marginBottom: 6,
                    }}>
                      {v.label.replace('\n', ' ')}
                    </h3>
                    <p style={{
                      fontSize: 13, color: 'var(--text-2)',
                      lineHeight: 1.6, margin: '0 0 8px',
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {v.desc}
                    </p>
                    <div style={{ fontSize: 11.5, color: v.hexColor, fontWeight: 600, flexShrink: 0 }}>
                      {v.elements.map((el) => (
                        <div key={el}>· {el}</div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal>
            <p style={{ textAlign: 'center', color: 'var(--text-2)', marginTop: 32, fontSize: 15 }}>
              Our values guide our everyday actions and decisions. They shape our organisational
              culture, bringing the AIESEC way to life.<br />
              <strong style={{ color: 'var(--primary)' }}>
                This is the leadership that we believe in and develop.
              </strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ INNER & OUTER JOURNEY ══════════════════ */}
      <section style={SECTION_ALT}>
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">HOW — The LEAD Model</p>
            <h2 className="section-title">Inner Journey &amp; Outer Journey</h2>
            <p className="section-body mx-auto mt-2">
              We believe that young people learn best by doing and reflecting. The outer journey
              is the individual&apos;s interaction with the external environment. The Inner Journey
              is the internal change that happens within the individual.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG('I&O Journey.png')}
              alt="Inner and Outer Journey"
              style={{
                display: 'block', margin: '0 auto 48px',
                width: '100%', maxWidth: 860, height: 'auto',
                borderRadius: 16, boxShadow: 'var(--shadow-md)',
              }}
            />
          </ScrollReveal>

          <div className="row g-3">
            {[
              { title: 'Impact',                         desc: "Your journey's impact on society — enables young people to see their connection with the world and take ownership." },
              { title: 'Individual Responsibility',      desc: 'Taking individual responsibility with clear goals is a first step in the outer journey of leadership development.' },
              { title: 'Challenging Role & Environment', desc: 'Your role and surrounding environment push you to leave your comfort zone, enabling you to learn.' },
              { title: 'Interaction with Multiple Stakeholders', desc: "The diversity and quantity of stakeholders heavily influences one's leadership development." },
              { title: 'Reflect on Your Experience',    desc: 'Self-reflection exercises to understand how you are achieving personal goals and capture your learnings.' },
              { title: 'Support System',                desc: 'A mentor, coach, or buddy — provided by AIESEC or any external stakeholder — supports the inner journey.' },
              { title: 'Set Personal Goals',            desc: 'The inner leadership journey starts with understanding where you are and setting goals for what you want to gain.' },
              { title: 'Understand Your Personal Values', desc: 'By living the experience you realise fundamental things about yourself — your values and how they impact everyday life.' },
              { title: 'Reinvent Yourself',             desc: 'Capturing the learning from this experience to use in the future: understanding your new self.' },
            ].map((item, i) => (
              <div key={item.title} className="col-12 col-sm-6 col-lg-4">
                <ScrollReveal delay={Math.min((i % 6) + 1, 6)}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--primary)', marginTop: 7, flexShrink: 0,
                    }} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.55 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ WHAT ══════════════════ */}
      <section style={SECTION_LIGHT}>
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">WHAT — What we do</p>
            <h2 className="section-title">What We Offer</h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG('What.png')}
              alt="We enable young people to develop their leadership through practical experiences"
              style={{
                display: 'block', margin: '0 auto 40px',
                maxWidth: 900, width: '100%',
                borderRadius: 16, boxShadow: 'var(--shadow-md)',
              }}
            />
          </ScrollReveal>

          <div className="row g-4">
            {[
              { title: 'Our Impact',               desc: "We create direct and positive impact in the world by developing leadership in young people. We impact the world indirectly by designing cross-cultural opportunities that strive to address society's challenges." },
              { title: 'Cross-Cultural Understanding', desc: 'Cross-cultural understanding encompasses an understanding of different nations or territories, races, ethnicities, religions, as well as across different sectors and segments of society.' },
              { title: 'Leadership Opportunities', desc: 'AIESEC provides diverse opportunities such as exchange opportunities, work experiences, volunteering, and other activities created for young people to develop their leadership in unfamiliar environments.' },
              { title: 'AIESEC Membership',        desc: 'AIESEC members collaborate in teams to create, support and manage these cross-cultural, practical experiences — living fulfilling team experiences that activate their leadership potential.' },
            ].map((item, i) => (
              <div key={item.title} className="col-12 col-sm-6 col-lg-3">
                <ScrollReveal delay={Math.min(i + 1, 6)}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderTop: '3px solid var(--primary)',
                    borderRadius: 12,
                    padding: '20px 16px',
                    height: '100%',
                    transition: 'transform var(--transition), box-shadow var(--transition)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ WHO WE ARE ══════════════════ */}
      <section style={SECTION_ALT}>
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-title" style={{ color: 'var(--primary)' }}>AIESEC</h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG('Definition.png')}
              alt="AIESEC — Who We Are"
              style={{
                display: 'block', margin: '0 auto 48px',
                maxWidth: 960, width: '100%', borderRadius: 16,
              }}
            />
          </ScrollReveal>

          <div className="row g-4">
            {[
              { title: 'Global',       desc: 'AIESEC is present in all parts of the world. We have a global network that strives to make the world a better place through leadership development and peace while standing up for fundamental human rights.' },
              { title: 'Non Partisan', desc: 'AIESEC chooses peace above all and therefore does not have a pre-defined or officially accepted political tendency or subscription.' },
              { title: 'Independent', desc: 'AIESEC as a global network is not a subsidiary or an entity that is dependent on any other bodies in its work, sustainability or decision-making.' },
              { title: 'Not-For-Profit', desc: "AIESEC's main goal is to develop leadership for young people to have a positive impact in the world. We use our resources sustainably to generate impact rather than making profit for shareholders." },
              { title: 'Youth-Run',    desc: 'AIESEC is completely run by youth for youth.' },
            ].map((item, i) => (
              <div key={item.title} className="col-12 col-sm-6 col-lg-4">
                <ScrollReveal delay={Math.min((i % 5) + 1, 6)}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 12, padding: '20px 18px', height: '100%',
                    boxShadow: 'var(--shadow-xs)',
                    transition: 'transform var(--transition), box-shadow var(--transition)',
                  }}>
                    <h3 style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
            <div className="col-12 col-sm-6 col-lg-4">
              <ScrollReveal delay={6}>
                <div style={{
                  background: 'var(--primary-light)',
                  borderRadius: 12,
                  borderLeft: '4px solid var(--primary)',
                  padding: '20px 18px', height: '100%',
                  display: 'flex', alignItems: 'center',
                }}>
                  <p style={{ fontSize: 13.5, color: 'var(--primary-dark)', lineHeight: 1.75, margin: 0, fontWeight: 500 }}>
                    AIESEC does not discriminate on the basis of gender identity and/or expression,
                    sexual orientation, ability, creed, or religion, nor on the basis of national,
                    ethnic, or social origin.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDiv />

      {/* ══════════════════ CLOSING IMAGE ══════════════════ */}
      <section style={{
        background: 'var(--bg-alt)', padding: '64px 24px',
        display: 'flex', justifyContent: 'center',
      }}>
        <ScrollReveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG('aspirational question.png')}
            alt="Can you imagine what happens to the world when we engage and develop every young person?"
            style={{ width: '100%', maxWidth: 360, height: 'auto', display: 'block' }}
          />
        </ScrollReveal>
      </section>

      <SectionDiv />

      {/* ══════════════════ RESOURCE CARDS ══════════════════ */}
      <section style={{ background: 'var(--surface)', padding: '56px 0' }}>
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">Resources</p>
            <h2 className="section-title">Documents &amp; Links</h2>
          </ScrollReveal>

          <div className="row g-4 justify-content-center">
            {/* AIESEC Way PDF */}
            <div className="col-12 col-sm-6 col-lg-4">
              <ScrollReveal delay={1}>
                <a
                  href="/AIESECway/THE AIESEC WAY (5).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <div className="feature-card" style={{ height: '100%' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/aiesec-way-card.svg"
                      alt="AIESEC Way PDF"
                      className="feature-card-img"
                    />
                    <div className="feature-card-body">
                      <div className="feature-card-accent" style={{ background: 'var(--primary)' }} />
                      <div className="feature-card-title">The AIESEC Way PDF</div>
                      <div className="feature-card-desc">
                        Read the full AIESEC Way document — our purpose, values, and leadership
                        model in one place.
                      </div>
                      <span className="feature-card-cta" style={{ color: 'var(--primary)' }}>
                        Open PDF →
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            {/* A2030 */}
            <div className="col-12 col-sm-6 col-lg-4">
              <ScrollReveal delay={2}>
                <a
                  href="https://a2030.aiesec.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <div className="feature-card" style={{ height: '100%' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/placeholder-cards/A2030.png"
                      alt="AIESEC 2030"
                      className="feature-card-img"
                    />
                    <div className="feature-card-body">
                      <div className="feature-card-accent" style={{ background: '#0CB9C1' }} />
                      <div className="feature-card-title">AIESEC 2030</div>
                      <div className="feature-card-desc">
                        Explore AIESEC&apos;s long-term strategic direction and the vision for
                        where we are headed by 2030.
                      </div>
                      <span className="feature-card-cta" style={{ color: '#0CB9C1' }}>
                        Visit A2030 →
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
