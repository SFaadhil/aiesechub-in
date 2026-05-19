/* Type-specific SVG icons — no emojis */
function DriveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M12 2L2 19h20L12 2z"/>
      <path d="M12 7v6M12 16h.01"/>
    </svg>
  );
}

function SlidesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M9 9l3 3 3-3"/>
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 15v-2h1.5a1 1 0 0 1 0 2H9z"/>
      <path d="M13 15v-2M13 13h2M17 15v-2h1"/>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );
}

function SheetsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="3" y1="15" x2="21" y2="15"/>
      <line x1="9" y1="3" x2="9" y2="21"/>
      <line x1="15" y1="3" x2="15" y2="21"/>
    </svg>
  );
}

function OtherIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8"  x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

const TYPE_CONFIG = {
  drive:  { cls: 'badge-drive',  label: 'Drive',  Icon: DriveIcon,  iconBg: '#e8f5e9', iconColor: '#2e7d32' },
  sheets: { cls: 'badge-sheets', label: 'Sheets', Icon: SheetsIcon, iconBg: '#e8f5e9', iconColor: '#1e6b3c' },
  slides: { cls: 'badge-slides', label: 'Slides', Icon: SlidesIcon, iconBg: '#fff8e1', iconColor: '#f57f17' },
  doc:    { cls: 'badge-doc',    label: 'Doc',    Icon: DocIcon,    iconBg: '#e3f2fd', iconColor: '#1565c0' },
  pdf:    { cls: 'badge-pdf',    label: 'PDF',    Icon: PdfIcon,    iconBg: '#fce4ec', iconColor: '#c62828' },
  link:   { cls: 'badge-link',   label: 'Link',   Icon: LinkIcon,   iconBg: 'var(--primary-light)', iconColor: 'var(--primary-dark)' },
  other:  { cls: 'badge-other',  label: 'Other',  Icon: OtherIcon,  iconBg: '#f1f5f9', iconColor: '#475569' },
};

export default function ResourceCard({ title, description, type, linkUrl = '#', accent }) {
  const cfg = TYPE_CONFIG[type] ?? TYPE_CONFIG.other;
  const { cls, label, Icon, iconBg, iconColor } = cfg;

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
      style={{ '--accent': accent || 'var(--primary)' }}
    >
      {/* Type icon */}
      <div
        className="resource-type-icon"
        style={{ background: iconBg, color: iconColor }}
        aria-hidden="true"
      >
        <Icon />
      </div>

      <p className="resource-title">{title}</p>

      {description && (
        <p className="resource-desc">{description}</p>
      )}

      <span className={`badge-pill ${cls}`}>{label}</span>
    </a>
  );
}
