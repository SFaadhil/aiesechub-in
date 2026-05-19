'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HUBS } from '@/lib/data';

const NAV_LINKS_BEFORE = [
  { href: '/aiesec-india', label: 'AIESEC in India' },
  { href: '/aiesec-way',   label: 'AIESEC Way' },
];

const NAV_LINKS_AFTER = [
  { href: '/conference-output', label: 'Conference Output' },
  { href: '/rnr',               label: 'RnR' },
];

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6"  y1="6" x2="18" y2="18"/>
  </svg>
);

function ActiveDot() {
  return (
    <span style={{
      position: 'absolute', bottom: 2, left: '50%',
      transform: 'translateX(-50%)',
      width: 4, height: 4, borderRadius: '50%',
      background: 'var(--primary)', display: 'block',
    }} aria-hidden="true" />
  );
}

function NavLink({ href, label, pathname }) {
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
  return (
    <li className="nav-item" style={{ position: 'relative' }}>
      <Link href={href} className={`nav-link${active ? ' active' : ''}`}
        style={{ position: 'relative' }}>
        {label}
        {active && <ActiveDot />}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query,      setQuery]      = useState('');
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSearchOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setSearchOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg site-navbar sticky-top"
        style={{
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'box-shadow 220ms',
        }}
        aria-label="Main navigation"
      >
        <div className="container-xl d-flex align-items-center justify-content-between w-100">

          {/* ── Brand (left) ── */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2 flex-shrink-0"
            style={{ textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/aiesec-human-white.png" alt="AIESEC"
              width={44} height={44} style={{ objectFit: 'contain' }} />
            <div style={{ lineHeight: 1.25 }}>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--text)',
                letterSpacing: '-0.2px', whiteSpace: 'nowrap' }}>
                AIESEC in India Hub
              </div>
              <div style={{ fontSize: 10.5, color: 'var(--text-3)',
                fontWeight: 600, letterSpacing: '0.4px' }}>
                Term 26.27
              </div>
            </div>
          </Link>

          {/* ── Hamburger (mobile only) ── */}
          <button
            className="navbar-toggler border-0 p-2 d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: 'var(--text-2)' }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* ── Nav links (right) ── */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 py-3 py-lg-0">

              <NavLink href="/" label="Home" pathname={pathname} />

              {NAV_LINKS_BEFORE.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
              ))}

              {/* Functional Hub dropdown */}
              <li className="nav-item dropdown" style={{ position: 'relative' }}>
                <Link
                  href="/functional-hub"
                  className={`nav-link dropdown-toggle${pathname.startsWith('/functional-hub') ? ' active' : ''}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => { if (window.innerWidth >= 992) e.preventDefault(); }}
                  style={{ position: 'relative' }}
                >
                  Functional Hub
                  {pathname.startsWith('/functional-hub') && <ActiveDot />}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link href="/functional-hub" className="dropdown-item"
                      style={{ fontWeight: 700, color: 'var(--primary)' }}>
                      All Hubs →
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider my-1" style={{ borderColor: 'var(--border)' }} /></li>
                  {HUBS.map((hub) => (
                    <li key={hub.slug}>
                      <Link
                        href={`/functional-hub/${hub.slug}`}
                        className={`dropdown-item${pathname === `/functional-hub/${hub.slug}` ? ' active' : ''}`}
                      >
                        {hub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {NAV_LINKS_AFTER.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
              ))}

              {/* Search icon only */}
              <li className="nav-item ms-lg-2 d-flex align-items-center">
                <button
                  className="nav-icon-btn"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  title="Search"
                >
                  <SearchIcon />
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ── Search overlay ── */}
      <div
        className={`search-overlay${searchOpen ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div className="search-overlay-box">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 style={{ fontWeight: 700, fontSize: 16, margin: 0, color: 'var(--text)' }}>Search</h5>
            <button
              className="search-close-btn"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <CloseIcon />
            </button>
          </div>
          <input
            className="search-box-input"
            type="search"
            placeholder="Search hubs, resources, pages…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={searchOpen}
          />
          <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 12, marginBottom: 0, textAlign: 'center' }}>
            Full-text search will be connected in Phase 2
          </p>
        </div>
      </div>
    </>
  );
}
