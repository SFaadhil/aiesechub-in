import Link from 'next/link';
import HubCard from '@/components/HubCard';
import ScrollReveal from '@/components/ScrollReveal';
import HeroSearch from '@/components/HeroSearch';
import { HUBS } from '@/lib/data';
import PageOffline from '@/components/PageOffline';

const PAGE_STATUS_LIVE = true;

export const metadata = {
  title: 'AIESEC India Hub — 26.27',
  description: 'Central knowledge and resource hub for AIESEC in India 26.27.',
};

function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

const FEATURED = [
  {
    href: '/aiesec-india',
    title: 'AIESEC in India',
    desc: 'Our history, Member Committee, Board of Advisors, and governing Compendium.',
    color: '#037ef3',
    img: '/images/placeholder-cards/aiesec-in-india.jpeg',
  },
  {
    href: '/aiesec-way',
    title: 'The AIESEC Way',
    desc: 'Explore the vision, mission, and values that guide every AIESEC member worldwide.',
    color: '#0CB9C1',
    img: '/images/aiesec-way-card.svg',
  },
  {
    href: '/functional-hub',
    title: 'Functional Hub',
    desc: 'Access resources for all portfolios — iGV, oGV, MKT, BD, PM, FnL and more.',
    color: '#037ef3',
    img: 'https://picsum.photos/seed/feat-functional/800/400',
  },
  {
    href: '/conference-output',
    title: 'Conference Output',
    desc: 'Materials, decisions, and resources from national and regional conferences.',
    color: '#f85a40',
    img: 'https://picsum.photos/seed/feat-conference/800/400',
  },
  {
    href: '/rnr',
    title: 'Rewards & Recognition',
    desc: 'National leaderboard and recognition for top-performing LCs.',
    color: '#f59e0b',
    img: '/images/placeholder-cards/RnR.png',
  },
];

const STATS = [
  { value: '20+',   label: 'Local Committees' },
  { value: '2500+', label: 'Active Members' },
  { value: '26.27', label: 'Current Term' },
];

const CTA_LINKS = [
  { href: '/aiesec-india',      label: 'AIESEC in India' },
  { href: '/aiesec-way',        label: 'AIESEC Way' },
  { href: '/functional-hub',    label: 'Functional Hub' },
  { href: '/conference-output', label: 'Conference Output' },
  { href: '/rnr',               label: 'MVP' },
];

export default function HomePage() {
  if (!PAGE_STATUS_LIVE) return <PageOffline />;
  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="hero-section">
        {/* Dot grid overlay */}
        <div className="hero-dot-grid" aria-hidden="true" />

        {/* Animated blobs */}
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />
        <div className="hero-blob hero-blob-3" aria-hidden="true" />

        <div className="container-xl position-relative" style={{ zIndex: 1 }}>
          <div className="text-center">

            {/* Headline */}
            <h1 className="hero-title animate-fade-up delay-1">
              Your Central Hub for<br />
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>AIESEC in India</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mt-3 mx-auto animate-fade-up delay-2">
              World&apos;s Largest Youth-Run Organisation — access resources, guides,
              and tools across all functional portfolios in one place.
            </p>

            {/* Search */}
            <HeroSearch />

            {/* Stats bar */}
            <div className="hero-stats animate-fade-up delay-5">
              {STATS.map((s, i) => (
                <div key={s.label} className="text-center" style={{
                  paddingInline: i > 0 ? '0 0 0 40px' : 0,
                }}>
                  <div className="hero-stat-value stat-animate" style={{
                    animationDelay: `${0.4 + i * 0.1}s`,
                  }}>
                    {s.value}
                  </div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none" style={{ width: '100%', height: 64 }}>
            <path
              d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z"
              fill="var(--bg)"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════ FEATURED SECTIONS ══════════════════ */}
      <section className="section-py">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-5">
            <p className="section-eyebrow">Quick Access</p>
            <h2 className="section-title">Explore Key Sections</h2>
            <p className="section-body mx-auto mt-2">
              Everything your LC needs, organised for quick access
            </p>
          </ScrollReveal>

          <div className="row g-4">
            {FEATURED.map((item, i) => (
              <div
                key={item.href}
                className="col-12 col-sm-6 col-lg-4"
              >
                <ScrollReveal delay={Math.min((i % 4) + 1, 6)}>
                  <Link href={item.href} className="feature-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="feature-card-img"
                    />
                    <div className="feature-card-body">
                      <div
                        className="feature-card-accent"
                        style={{ background: item.color }}
                      />
                      <div className="feature-card-title">{item.title}</div>
                      <div className="feature-card-desc">{item.desc}</div>
                      <span
                        className="feature-card-cta"
                        style={{ color: item.color }}
                      >
                        Explore <ArrowRight />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ══════════════════ FUNCTIONAL HUBS ══════════════════ */}
      <section className="section-py">
        <div className="container-xl">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-4 mb-5">
            <ScrollReveal>
              <p className="section-eyebrow">Portfolios</p>
              <h2 className="section-title mb-0">Functional Hubs</h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <Link href="/functional-hub" className="btn-primary-brand">
                View All Hubs <ArrowRight />
              </Link>
            </ScrollReveal>
          </div>

          <div className="row g-3">
            {HUBS.map((hub, i) => (
              <div
                key={hub.slug}
                className="col-6 col-sm-4 col-md-3 col-lg-2"
              >
                <ScrollReveal delay={Math.min((i % 6) + 1, 6)}>
                  <HubCard {...hub} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section className="section-py">
        <div className="container-xl">
          <ScrollReveal>
            <div className="cta-banner">
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{
                  fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '1.4px', color: 'rgba(255,255,255,0.55)',
                  marginBottom: 10,
                }}>
                  AIESEC India Hub · 26.27
                </p>
                <h2 style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 10,
                }}>
                  Ready to Get Started?
                </h2>
                <p style={{
                  fontSize: 15, color: 'rgba(255,255,255,0.72)',
                  marginBottom: 28, maxWidth: 460, marginInline: 'auto',
                }}>
                  Select your portfolio or use search to find exactly what your LC needs.
                </p>

                <div className="d-flex gap-2 justify-content-center flex-wrap">
                  {CTA_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="btn-ghost"
                      style={{ fontSize: 13, padding: '8px 18px', borderRadius: 8 }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
