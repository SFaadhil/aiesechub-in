'use client';

import { useEffect, useState, useCallback } from 'react';
import PageHero from '@/components/PageHero';
import GcpCard from '@/components/GcpCard';
import GcpModal from '@/components/GcpModal';
import GcpDetailModal from '@/components/GcpDetailModal';
import GcpSubmitForm from '@/components/GcpSubmitForm';
import { GCP_PORTFOLIOS, GCP_ENTITIES } from '@/lib/gcp-data';

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ShuffleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>
);

export default function GcpHubPage() {
  const [q, setQ] = useState('');
  const [debouncedQ, setDebouncedQ] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [entity, setEntity] = useState('');
  const [page, setPage] = useState(1);
  // A fresh seed on every page load randomises the landing order across
  // portfolios/entities; the Shuffle button re-rolls it on demand.
  const [seed, setSeed] = useState(() => Math.random());
  const [shuffling, setShuffling] = useState(false);

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [openGcp, setOpenGcp] = useState(null);
  const [showSubmit, setShowSubmit] = useState(false);
  const [toast, setToast] = useState('');

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q.trim()), 350);
    return () => clearTimeout(t);
  }, [q]);

  // Reset to page 1 whenever a filter changes
  useEffect(() => { setPage(1); }, [debouncedQ, portfolio, entity]);

  const fetchGcps = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (debouncedQ) params.set('q', debouncedQ);
      if (portfolio) params.set('portfolio', portfolio);
      if (entity) params.set('entity', entity);
      params.set('page', String(page));
      params.set('seed', String(seed));

      const res = await fetch(`/api/gcp/list?${params.toString()}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to load');

      setItems(data.items);
      setTotal(data.total);
      setPageSize(data.pageSize);
    } catch {
      setError('Could not load GCPs right now. Please try again shortly.');
      setItems([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [debouncedQ, portfolio, entity, page, seed]);

  useEffect(() => { fetchGcps(); }, [fetchGcps]);

  function resetFilters() {
    setQ('');
    setPortfolio('');
    setEntity('');
  }

  function shuffle() {
    setSeed(Math.random());
    setPage(1);
    setShuffling(true);
    setTimeout(() => setShuffling(false), 500);
  }

  function handleSubmitted() {
    setToast('Thanks! Your GCP is now with the review team.');
    setTimeout(() => setToast(''), 4000);
  }

  const hasFilters = Boolean(q || portfolio || entity);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <>
      <PageHero
        eyebrow="Knowledge Sharing"
        title="GCP Hub"
        subtitle="Good Case Practices from LCs and portfolios across AIESEC in India — searchable, filterable, and reviewed before they go live."
        accent="var(--primary)"
      >
        <div className="d-flex flex-wrap gap-2" style={{ marginTop: 8 }}>
          <button type="button" className="btn-primary-brand" onClick={() => setShowSubmit(true)}>
            Submit a GCP
          </button>
        </div>
      </PageHero>

      <section className="section-py" style={{ paddingTop: 40 }}>
        <div className="container-xl">

          {/* ── Filter bar ── */}
          <div className="gcp-filter-bar animate-fade-up">
            <div className="gcp-filter-search">
              <span className="gcp-filter-search-icon"><SearchIcon /></span>
              <input
                className="gcp-input"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search GCP name or uploader…"
              />
            </div>

            <div className="gcp-filter-select">
              <select className="gcp-select" value={portfolio} onChange={(e) => setPortfolio(e.target.value)}>
                <option value="">All portfolios / functions</option>
                {GCP_PORTFOLIOS.map((p) => (
                  <option key={p.key} value={p.key}>{p.label}</option>
                ))}
              </select>
            </div>

            <div className="gcp-filter-select">
              <select className="gcp-select" value={entity} onChange={(e) => setEntity(e.target.value)}>
                <option value="">All entities</option>
                {GCP_ENTITIES.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="gcp-shuffle-btn"
              onClick={shuffle}
              disabled={loading}
              title="Show a different random mix"
            >
              <span className={shuffling ? 'gcp-shuffle-spin' : ''}><ShuffleIcon /></span>
              Shuffle
            </button>

            {hasFilters && (
              <button type="button" className="gcp-filter-reset" onClick={resetFilters}>
                Clear filters
              </button>
            )}
          </div>

          <p className="gcp-result-count">
            {loading ? 'Loading…' : error ? ' ' : `${total.toLocaleString()} GCP${total === 1 ? '' : 's'}${hasFilters ? ' match your filters' : ''}`}
          </p>

          {/* ── Results ── */}
          {error && (
            <div className="gcp-empty-state">
              <div className="gcp-empty-state-emoji">⚠️</div>
              <p style={{ fontWeight: 700, color: 'var(--text)' }}>{error}</p>
            </div>
          )}

          {!error && loading && (
            <div className="gcp-grid">
              {Array.from({ length: 6 }).map((_, i) => <div key={i} className="gcp-skeleton-card" />)}
            </div>
          )}

          {!error && !loading && items.length === 0 && (
            <div className="gcp-empty-state">
              <div className="gcp-empty-state-emoji">🔍</div>
              <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>No GCPs found</p>
              <p style={{ fontSize: 13.5 }}>Try a different search or clear your filters — or be the first to submit one.</p>
            </div>
          )}

          {!error && !loading && items.length > 0 && (
            <div className="gcp-grid animate-fade-in">
              {items.map((gcp) => (
                <GcpCard key={gcp.id} gcp={gcp} onOpen={setOpenGcp} />
              ))}
            </div>
          )}

          {!error && !loading && totalPages > 1 && (
            <div className="gcp-pagination">
              <button type="button" className="gcp-page-btn" disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}>
                ← Prev
              </button>
              <span className="gcp-page-status">Page {page} of {totalPages}</span>
              <button type="button" className="gcp-page-btn" disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                Next →
              </button>
            </div>
          )}

        </div>
      </section>

      {openGcp && <GcpDetailModal gcp={openGcp} onClose={() => setOpenGcp(null)} />}

      {showSubmit && (
        <GcpModal onClose={() => setShowSubmit(false)} ariaLabel="Submit a GCP">
          <h2 className="gcp-modal-title">Submit a GCP</h2>
          <p className="gcp-modal-subtitle">
            Share a Good Case Practice. It&apos;ll be reviewed before appearing on the hub.
          </p>
          <GcpSubmitForm onClose={() => setShowSubmit(false)} onSubmitted={handleSubmitted} />
        </GcpModal>
      )}

      {toast && <div className="gcp-toast">{toast}</div>}
    </>
  );
}
