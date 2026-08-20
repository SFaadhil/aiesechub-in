'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { portfolioMeta } from '@/lib/gcp-data';

function AdminItem({ item, onDone }) {
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const meta = portfolioMeta(item.portfolio);

  async function act(action) {
    setError('');
    setBusy(true);
    try {
      const res = await fetch('/api/gcp/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, action, note }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Could not update this submission.');
        setBusy(false);
        return;
      }
      onDone(item.id);
    } catch {
      setError('Network error. Please try again.');
      setBusy(false);
    }
  }

  return (
    <div className="gcp-admin-item">
      <div className="gcp-admin-item-top">
        <div>
          <span className="gcp-card-badge" style={{ '--gcp-accent': meta.accent, marginRight: 8 }}>{meta.label}</span>
          <span style={{ fontSize: 15, fontWeight: 700 }}>{item.gcp_name}</span>
        </div>
        <span className="gcp-card-month">{item.month} {item.year}</span>
      </div>

      <p className="gcp-admin-meta">
        <strong>{item.uploader_name}</strong> · {item.uploader_email} · {item.uploader_entity}
      </p>

      <div className="gcp-admin-grid">
        <div>
          <p className="gcp-detail-label">Outcome</p>
          <p className="gcp-detail-value">{item.outcome || '—'}</p>
        </div>
        <div>
          <p className="gcp-detail-label">Details</p>
          <p className="gcp-detail-value">{item.details || '—'}</p>
        </div>
        {item.kpis && (
          <div>
            <p className="gcp-detail-label">KPI&apos;s</p>
            <p className="gcp-detail-value">{item.kpis}</p>
          </div>
        )}
        {item.mos && (
          <div>
            <p className="gcp-detail-label">MOS</p>
            <p className="gcp-detail-value">{item.mos}</p>
          </div>
        )}
        {item.links && (
          <div>
            <p className="gcp-detail-label">Links</p>
            <p className="gcp-detail-value">{item.links}</p>
          </div>
        )}
        {item.notes && (
          <div>
            <p className="gcp-detail-label">Anything Else</p>
            <p className="gcp-detail-value">{item.notes}</p>
          </div>
        )}
      </div>

      <div className="gcp-field" style={{ maxWidth: 420 }}>
        <label className="gcp-label">Reviewer note (optional)</label>
        <input className="gcp-input" value={note} onChange={(e) => setNote(e.target.value)}
          placeholder="Visible only to reviewers — e.g. reason for rejection" />
      </div>

      {error && <p className="gcp-error-text mb-2">{error}</p>}

      <div className="gcp-admin-actions">
        <button type="button" className="btn-approve-brand" disabled={busy} onClick={() => act('approve')}>
          Approve
        </button>
        <button type="button" className="btn-reject-brand" disabled={busy} onClick={() => act('reject')}>
          Reject
        </button>
      </div>
    </div>
  );
}

export default function GcpAdminDashboard({ initialItems, loadError }) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems || []);
  const [loggingOut, setLoggingOut] = useState(false);

  function handleDone(id) {
    setItems((list) => list.filter((i) => i.id !== id));
  }

  async function handleLogout() {
    setLoggingOut(true);
    await fetch('/api/gcp/logout', { method: 'POST' });
    router.refresh();
  }

  return (
    <section className="section-py">
      <div className="container-xl">
        <div className="gcp-admin-header">
          <div>
            <p className="section-eyebrow">GCP Hub</p>
            <h1 className="section-title">Review Queue</h1>
          </div>
          <button type="button" className="btn-outline-brand" onClick={handleLogout} disabled={loggingOut}>
            {loggingOut ? 'Signing out…' : 'Sign Out'}
          </button>
        </div>

        {loadError && (
          <div className="gcp-empty-state">
            <div className="gcp-empty-state-emoji">⚠️</div>
            <p style={{ fontWeight: 700 }}>{loadError}</p>
          </div>
        )}

        {!loadError && items.length === 0 && (
          <div className="gcp-empty-state">
            <div className="gcp-empty-state-emoji">✅</div>
            <p style={{ fontWeight: 700, color: 'var(--text)' }}>All caught up</p>
            <p style={{ fontSize: 13.5 }}>No pending GCPs to review right now.</p>
          </div>
        )}

        {!loadError && items.length > 0 && (
          <>
            <p className="gcp-result-count">{items.length} pending submission{items.length === 1 ? '' : 's'}</p>
            {items.map((item) => (
              <AdminItem key={item.id} item={item} onDone={handleDone} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
