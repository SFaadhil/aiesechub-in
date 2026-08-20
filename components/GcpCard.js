'use client';

import { portfolioMeta } from '@/lib/gcp-data';

export default function GcpCard({ gcp, onOpen }) {
  const meta = portfolioMeta(gcp.portfolio);

  function open() { onOpen(gcp); }

  return (
    <div
      className="gcp-card"
      style={{ '--gcp-accent': meta.accent }}
      onClick={open}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }}
    >
      <div className="gcp-card-top">
        <span className="gcp-card-badge">{meta.label}</span>
        <span className="gcp-card-month">{gcp.month} {gcp.year}</span>
      </div>

      <h3 className="gcp-card-title">{gcp.gcp_name}</h3>
      <p className="gcp-card-entity">{gcp.uploader_entity}</p>
      <p className="gcp-card-desc">{gcp.outcome}</p>

      <div className="gcp-card-footer">
        <span className="gcp-card-uploader">{gcp.uploader_name}</span>
        <span className="gcp-card-arrow">View →</span>
      </div>
    </div>
  );
}
