'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { HUBS } from '@/lib/data';
import { searchIndex, GROUP_META } from '@/lib/search-index';
import { loadDynamicSearchEntries } from '@/lib/search-loader';

const NAV_LINKS_BEFORE = [
  { href: '/aiesec-india', label: 'AIESEC in India' },
  { href: '/aiesec-way',   label: 'AIESEC Way' },
];

const NAV_LINKS_AFTER = [
  { href: '/conference-output', label: 'Conference Output' },
  { href: '/rnr',               label: 'MVP' },
  { href: '/gcp-hub',           label: 'GCP Hub' },
];

/* ── Icons ─────────────────────────────────────────────────────────── */

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

const ChevronIcon = ({ open }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ transition: 'transform 220ms ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

/* Animated hamburger → X */
function HamburgerIcon({ open }) {
  const bar = {
    display: 'block', width: 22, height: 2,
    borderRadius: 2, background: 'currentColor',
    transition: 'transform 280ms ease, opacity 180ms ease',
  };
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 22, pointerEvents: 'none' }}>
      <span style={{ ...bar, transformOrigin: 'center',
        transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
      <span style={{ ...bar, opacity: open ? 0 : 1 }} />
      <span style={{ ...bar, transformOrigin: 'center',
        transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
    </span>
  );
}

/* ── Desktop nav helpers ────────────────────────────────────────────── */

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

/* ── Main component ─────────────────────────────────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [hubsOpen,      setHubsOpen]      = useState(false);
  const [searchOpen,    setSearchOpen]    = useState(false);
  const [query,         setQuery]         = useState('');
  const [scrolled,      setScrolled]      = useState(false);
  const [sheetEntries,  setSheetEntries]  = useState([]);
  const [sheetsLoaded,  setSheetsLoaded]  = useState(false);

  const grouped = useMemo(() => {
    const flat = searchIndex(query, sheetEntries);
    if (!flat.length) return [];
    const map = {};
    flat.forEach((item) => {
      const g = item.group || 'pages';
      if (!map[g]) map[g] = [];
      if (map[g].length < 6) map[g].push(item);
    });
    return Object.entries(map)
      .sort(([a], [b]) => (GROUP_META[a]?.order ?? 99) - (GROUP_META[b]?.order ?? 99))
      .map(([g, items]) => ({ group: g, label: GROUP_META[g]?.label || g, items }));
  }, [query, sheetEntries]);

  function closeSearch() { setSearchOpen(false); setQuery(''); }

  function openSearch(initialQuery = '') {
    setSearchOpen(true);
    if (initialQuery) setQuery(initialQuery);
  }

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Global keyboard shortcuts */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (searchOpen) { closeSearch(); return; }
        if (menuOpen) { setMenuOpen(false); return; }
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen, menuOpen]);

  /* Custom event from search hints */
  useEffect(() => {
    const handler = (e) => openSearch(e.detail?.query || '');
    window.addEventListener('site:openSearch', handler);
    return () => window.removeEventListener('site:openSearch', handler);
  }, []);

  /* Close everything on navigation */
  useEffect(() => {
    setSearchOpen(false);
    setQuery('');
    setMenuOpen(false);
    setHubsOpen(false);
  }, [pathname]);

  /* Legacy: also hide Bootstrap collapse if it was ever triggered */
  useEffect(() => {
    const navEl = document.getElementById('mainNav');
    if (navEl && window.bootstrap) {
      window.bootstrap.Collapse.getInstance(navEl)?.hide();
    }
  }, [pathname]);

  /* Body scroll lock while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Load sheet search data once */
  useEffect(() => {
    if (!searchOpen || sheetsLoaded) return;
    setSheetsLoaded(true);
    loadDynamicSearchEntries().then((entries) => {
      if (entries.length) setSheetEntries(entries);
    });
  }, [searchOpen, sheetsLoaded]);

  /* ── All nav links for mobile (flat list) ── */
  const allLinks = [
    { href: '/', label: 'Home' },
    ...NAV_LINKS_BEFORE,
    ...NAV_LINKS_AFTER,
  ];

  return (
    <>
      {/* ══════════════════ STICKY NAV BAR ══════════════════ */}
      <nav
        className="navbar navbar-expand-lg site-navbar sticky-top"
        style={{
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'box-shadow 220ms',
        }}
        aria-label="Main navigation"
      >
        <div className="container-xl d-flex align-items-center justify-content-between w-100">

          {/* Brand */}
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

          {/* Hamburger — React-controlled, no Bootstrap data attrs */}
          <button
            className="d-lg-none border-0"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            style={{
              background: 'transparent', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44,
              color: 'var(--text)',
              borderRadius: 'var(--radius-sm)',
              transition: 'background 150ms',
              flexShrink: 0,
            }}
          >
            <HamburgerIcon open={menuOpen} />
          </button>

          {/* Desktop nav — Bootstrap's CSS auto-shows this at lg+ */}
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

              {/* Search */}
              <li className="nav-item ms-lg-2 d-flex align-items-center">
                <button
                  className="nav-icon-btn"
                  onClick={() => openSearch()}
                  aria-label="Open search"
                  title="Search (⌘K)"
                >
                  <SearchIcon />
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ══════════════════ MOBILE MENU OVERLAY ══════════════════ */}
      <div
        className={`mobile-nav-overlay d-lg-none${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Tap-outside backdrop */}
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        />

        {/* Slide-down panel */}
        <div className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">

          {/* Blue accent stripe */}
          <div style={{ height: 3, background: 'var(--primary)', flexShrink: 0 }} />

          {/* Panel header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid var(--border)',
          }}>
            <Link href="/" onClick={() => setMenuOpen(false)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/aiesec-human-white.png" alt="AIESEC"
                width={36} height={36} style={{ objectFit: 'contain' }} />
              <div style={{ lineHeight: 1.25 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.2px' }}>
                  AIESEC in India Hub
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-3)', fontWeight: 600, letterSpacing: '0.4px' }}>
                  Term 26.27
                </div>
              </div>
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
              style={{
                width: 40, height: 40, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg-alt)', border: '1px solid var(--border)',
                borderRadius: '50%', cursor: 'pointer', color: 'var(--text-2)',
                transition: 'background 150ms',
              }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Nav links */}
          <nav>
            {/* Home + links before hub */}
            {[{ href: '/', label: 'Home' }, ...NAV_LINKS_BEFORE].map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-nav-link${active ? ' active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ArrowIcon />
                </Link>
              );
            })}

            {/* Functional Hub accordion */}
            <button
              className={`mobile-nav-link${pathname.startsWith('/functional-hub') ? ' active' : ''}`}
              onClick={() => setHubsOpen((v) => !v)}
              aria-expanded={hubsOpen}
            >
              <span>Functional Hub</span>
              <ChevronIcon open={hubsOpen} />
            </button>

            <div className={`mobile-nav-hub-children${hubsOpen ? ' open' : ''}`}>
              <Link href="/functional-hub" onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '13px 24px 13px 48px',
                  textDecoration: 'none', fontSize: 14, fontWeight: 700,
                  color: 'var(--primary)',
                  borderBottom: '1px solid var(--border)',
                }}>
                All Hubs →
              </Link>
              {HUBS.map((hub) => {
                const active = pathname === `/functional-hub/${hub.slug}`;
                return (
                  <Link
                    key={hub.slug}
                    href={`/functional-hub/${hub.slug}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '13px 24px 13px 48px',
                      textDecoration: 'none', fontSize: 14,
                      fontWeight: active ? 600 : 400,
                      color: active ? 'var(--primary)' : 'var(--text-2)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {hub.name}
                  </Link>
                );
              })}
            </div>

            {/* Links after hub */}
            {NAV_LINKS_AFTER.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-nav-link${active ? ' active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ArrowIcon />
                </Link>
              );
            })}
          </nav>

          {/* Search bar */}
          <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)' }}>
            <button
              onClick={() => { setMenuOpen(false); openSearch(); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: '100%', padding: '13px 16px',
                background: 'var(--bg-alt)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)', cursor: 'pointer',
                color: 'var(--text-3)', fontSize: 13.5,
                transition: 'border-color 150ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <SearchIcon />
              <span style={{ flex: 1, textAlign: 'left' }}>Search hubs, resources, pages…</span>
              <kbd style={{
                fontSize: 10, color: 'var(--text-3)', background: 'var(--surface)',
                border: '1px solid var(--border)', borderRadius: 4, padding: '2px 6px',
                flexShrink: 0,
              }}>⌘K</kbd>
            </button>
          </div>

        </div>
      </div>

      {/* ══════════════════ SEARCH OVERLAY ══════════════════ */}
      <div
        className={`search-overlay${searchOpen ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeSearch(); }}
        role="dialog" aria-modal="true" aria-label="Search"
      >
        <div className="search-overlay-box">

          <div className="d-flex align-items-center gap-3 mb-3">
            <div style={{ position: 'relative', flex: 1 }}>
              <span style={{
                position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)',
                color: 'var(--text-3)', pointerEvents: 'none', display: 'flex',
              }}>
                <SearchIcon />
              </span>
              <input
                className="search-box-input"
                type="search"
                placeholder="Search everything — hubs, resources, LCs, people, policies…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus={searchOpen}
                style={{ paddingLeft: 40 }}
              />
            </div>
            <button className="search-close-btn" onClick={closeSearch} aria-label="Close search" style={{ flexShrink: 0 }}>
              <CloseIcon />
            </button>
          </div>

          {!query && (
            <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4, marginBottom: 0 }}>
              Press <kbd style={{ background:'var(--bg-alt)', border:'1px solid var(--border)', borderRadius:4, padding:'1px 5px', fontSize:10 }}>Esc</kbd> to close
            </p>
          )}

          {query.trim().length >= 2 && (
            <div style={{ maxHeight: 460, overflowY: 'auto', marginTop: 4 }}>
              {grouped.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', margin: 0 }}>No results for &ldquo;{query}&rdquo;</p>
                  <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>Try a different keyword or browse the sections above</p>
                </div>
              ) : (
                grouped.map(({ group, label, items }) => (
                  <div key={group} style={{ marginBottom: 18 }}>
                    <p style={{
                      fontSize: 10.5, fontWeight: 700, color: 'var(--text-3)',
                      textTransform: 'uppercase', letterSpacing: '0.7px',
                      margin: '0 0 6px', padding: '0 4px',
                    }}>
                      {label}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {items.map((item) => (
                        <li key={item.id}>
                          <Link href={item.href} onClick={closeSearch} className="search-result-row"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10,
                              padding: '8px 10px', borderRadius: 8 }}>
                            <span style={{
                              fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap',
                              color: item.accent, background: `${item.accent}15`,
                              border: `1px solid ${item.accent}28`,
                              borderRadius: 10, padding: '2px 8px', flexShrink: 0, minWidth: 56, textAlign: 'center',
                            }}>
                              {item.badge}
                            </span>
                            <div style={{ minWidth: 0, flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3,
                                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {item.title}
                              </div>
                              {item.desc && (
                                <div style={{ fontSize: 11.5, color: 'var(--text-3)', marginTop: 1,
                                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {item.desc}
                                </div>
                              )}
                            </div>
                            <span style={{ color: 'var(--text-3)', flexShrink: 0, fontSize: 12 }}>→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
