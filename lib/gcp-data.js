import { HUBS } from './data';
import { ENTITY_TIERS } from './rnr-data';

// ── Portfolio / Function options ─────────────────────────────────────────
// Reuses the same Functional Hub list (slug, name, accent) used across the
// rest of the site so a GCP's portfolio badge always matches its hub colour.
export const GCP_PORTFOLIOS = [
  ...HUBS.map((h) => ({ key: h.slug, label: h.name.replace(/ Hub$/, ''), accent: h.accent })),
  { key: 'other', label: 'Other / National', accent: '#8b9ab0' },
];

export function portfolioMeta(key) {
  return GCP_PORTFOLIOS.find((p) => p.key === key) || GCP_PORTFOLIOS[GCP_PORTFOLIOS.length - 1];
}

// ── Entity (LC) options ──────────────────────────────────────────────────
// Extra LCs below aren't tracked in the current RnR tiers (inactive, merged,
// or not yet expanded into national dashboards) but have historical GCPs.
const EXTRA_ENTITIES = [
  'AIESEC in Bhubaneswar',
  'AIESEC in IIT Kharagpur',
  'AIESEC in Jodhpur',
  'AIESEC in Nagpur',
  'AIESEC in Nellore',
  'AIESEC in NMIMS Shirpur',
  'AIESEC in South Mumbai',
  'AIESEC in VIT',
];

export const GCP_ENTITIES = [
  'AIESEC in India',
  ...Array.from(new Set([...Object.keys(ENTITY_TIERS), ...EXTRA_ENTITIES])).sort(),
];

// ── Month options ────────────────────────────────────────────────────────
export const GCP_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function gcpYearOptions() {
  const current = new Date().getFullYear();
  const years = [];
  for (let y = current + 1; y >= current - 3; y--) years.push(y);
  return years;
}

// ── Submission field config — single source of truth for the form,
//    the review dashboard, and the detail modal. ──────────────────────────
export const GCP_TEXT_FIELDS = [
  { key: 'outcome', label: 'Outcome', placeholder: 'What was the outcome of this GCP?', rows: 3, required: true },
  { key: 'links', label: 'Relevant Links', placeholder: 'One link per line (Drive, Slides, tracker, etc.)', rows: 2, required: false },
  { key: 'details', label: 'Details', placeholder: 'Explain the details of this GCP', rows: 5, required: true },
  { key: 'kpis', label: "KPI's", placeholder: "What are the KPI's of this GCP?", rows: 2, required: false },
  { key: 'mos', label: 'MOS', placeholder: 'What are the MOS for this GCP?', rows: 2, required: false },
  { key: 'notes', label: 'Anything Else', placeholder: 'Anything else worth mentioning', rows: 2, required: false },
];

export const GCP_PAGE_SIZE = 12;
