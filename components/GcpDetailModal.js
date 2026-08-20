'use client';

import GcpModal from './GcpModal';
import { portfolioMeta } from '@/lib/gcp-data';

function LinksBlock({ links }) {
  const items = (links || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  if (!items.length) return <p className="gcp-detail-value" style={{ color: 'var(--text-3)' }}>—</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.map((link, i) => {
        const isUrl = /^https?:\/\//i.test(link);
        return isUrl ? (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="gcp-detail-value">
            {link}
          </a>
        ) : (
          <span key={i} className="gcp-detail-value">{link}</span>
        );
      })}
    </div>
  );
}

export default function GcpDetailModal({ gcp, onClose }) {
  const meta = portfolioMeta(gcp.portfolio);

  return (
    <GcpModal onClose={onClose} ariaLabel={gcp.gcp_name}>
      <div className="gcp-card-top" style={{ '--gcp-accent': meta.accent }}>
        <span className="gcp-card-badge">{meta.label}</span>
        <span className="gcp-card-month">{gcp.month} {gcp.year}</span>
      </div>

      <h2 className="gcp-modal-title">{gcp.gcp_name}</h2>
      <p className="gcp-modal-subtitle">
        {gcp.uploader_name} · {gcp.uploader_entity}
      </p>

      <div className="gcp-detail-row">
        <p className="gcp-detail-label">Outcome</p>
        <p className="gcp-detail-value">{gcp.outcome || '—'}</p>
      </div>

      <div className="gcp-detail-row">
        <p className="gcp-detail-label">Details</p>
        <p className="gcp-detail-value">{gcp.details || '—'}</p>
      </div>

      {gcp.kpis && (
        <div className="gcp-detail-row">
          <p className="gcp-detail-label">KPI&apos;s</p>
          <p className="gcp-detail-value">{gcp.kpis}</p>
        </div>
      )}

      {gcp.mos && (
        <div className="gcp-detail-row">
          <p className="gcp-detail-label">MOS</p>
          <p className="gcp-detail-value">{gcp.mos}</p>
        </div>
      )}

      <div className="gcp-detail-row">
        <p className="gcp-detail-label">Relevant Links</p>
        <LinksBlock links={gcp.links} />
      </div>

      {gcp.notes && (
        <div className="gcp-detail-row">
          <p className="gcp-detail-label">Anything Else</p>
          <p className="gcp-detail-value">{gcp.notes}</p>
        </div>
      )}
    </GcpModal>
  );
}
