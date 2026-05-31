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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { closeSearch(); return; }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const handler = (e) => openSearch(e.detail?.query || '');
    window.addEventListener('site:openSearch', handler);
    return () => window.removeEventListener('site:openSearch', handler);
  }, []);

  useEffect(() => { setSearchOpen(false); setQuery(''); }, [pathname]);

  useEffect(() => {
    const navEl = document.getElementById('mainNav');
    if (navEl && window.bootstrap) {
      window.bootstrap.Collapse.getInstance(navEl)?.hide();
    }
  }, [pathname]);

  // Load sheet data once on first open
  useEffect(() => {
    if (!searchOpen || sheetsLoaded) return;
    setSheetsLoaded(true);
    loadDynamicSearchEntries().then((entries) => {
      if (entries.length) setSheetEntries(entries);
    });
  }, [searchOpen, sheetsLoaded]);

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

              {/* Search icon */}
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

      {/* ── Search overlay ── */}
      <div
        className={`search-overlay${searchOpen ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeSearch(); }}
        role="dialog" aria-modal="true" aria-label="Search"
      >
        <div className="search-overlay-box">

          {/* Header row */}
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

          {/* Empty state */}
          {!query && (
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10 }}>
                Try searching for
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Faadhil', 'iGV Hub', 'Compendium', 'Tier 1', 'Finance Policy', 'Hyderabad', 'NEC 2019', 'Board of Advisors'].map((hint) => (
                  <button key={hint} onClick={() => setQuery(hint)} style={{
                    fontSize: 12, fontWeight: 500, color: 'var(--text-2)',
                    background: 'var(--bg-alt)', border: '1px solid var(--border)',
                    borderRadius: 20, padding: '4px 13px', cursor: 'pointer',
                    transition: 'border-color 150ms, background 150ms',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}
                  >
                    {hint}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 16, marginBottom: 0 }}>
                Press <kbd style={{ background:'var(--bg-alt)', border:'1px solid var(--border)', borderRadius:4, padding:'1px 5px', fontSize:10 }}>Esc</kbd> to close
              </p>
            </div>
          )}

          {/* Results */}
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
