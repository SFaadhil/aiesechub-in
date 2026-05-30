'use client';

export default function HeroSearch() {
  function open(value = '') {
    window.dispatchEvent(new CustomEvent('site:openSearch', { detail: { query: value } }));
  }

  return (
    <div className="hero-search animate-fade-up delay-3" onClick={() => open()} style={{ cursor: 'text' }}>
      <span className="hero-search-icon" aria-hidden="true">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </span>
      <input
        type="search"
        placeholder="Search hubs, resources, pages…"
        aria-label="Search"
        readOnly
        style={{ cursor: 'text', pointerEvents: 'none' }}
      />
      <span style={{
        position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
        fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.38)',
        background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.10)',
        borderRadius: 5, padding: '2px 7px', whiteSpace: 'nowrap', pointerEvents: 'none',
      }} aria-hidden="true">
        ⌘K
      </span>
    </div>
  );
}
