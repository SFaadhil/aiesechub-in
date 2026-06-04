import { SHEET_ID, HUB_SHEET_TABS, PAGE_SHEET_TABS } from './sheets-config';

// Builds a CSV fetch URL that supports two SHEET_ID formats:
//   1. Just the spreadsheet ID:  "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms"
//      → uses gviz endpoint: /spreadsheets/d/{ID}/gviz/tq?tqx=out:csv&sheet={tab}
//   2. Full published-to-web URL: "https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv"
//      → strips query string, appends ?output=csv&sheet={tab}
function buildUrl(tab) {
  const id = (SHEET_ID || '').trim();
  if (!id) return null;

  if (id.startsWith('https://')) {
    const base = id.split('?')[0];
    return `${base}?output=csv&sheet=${encodeURIComponent(tab)}`;
  }

  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
}

async function fetchFromSheet(tab, filterKey = 'title') {
  const url = buildUrl(tab);
  if (!url) return null;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;

    const csv = await res.text();
    // Google returns an HTML error page (not a 4xx) for missing tabs
    if (csv.trim().startsWith('<')) return null;

    const rows = parseCSV(csv, filterKey);
    return rows.length > 0 ? rows : null;
  } catch {
    return null;
  }
}

// For hub sub-pages. Sheet columns: title | description | type | url
export async function fetchHubResources(slug) {
  return fetchFromSheet(HUB_SHEET_TABS[slug]);
}

// For static pages. Sheet columns: title | description | type | url
export async function fetchPageResources(pageKey) {
  return fetchFromSheet(PAGE_SHEET_TABS[pageKey]);
}

// For the AIESEC in India compendium. Sheet columns: letter | name | url | main
export async function fetchCompendium() {
  return fetchFromSheet(PAGE_SHEET_TABS['compendium'], 'name');
}

const TYPE_ALIASES = {
  'google sheets':'sheets',
  'google drive': 'drive',
  'google docs':  'doc',
  'google slides':'slides',
  document:       'doc',
  presentation:   'slides',
  // Conference type aliases
  rylc:           'nylc',   // Regional YLC → same as NYLC
  nlds:           'xlds',   // Legacy name
  mnc:            'xlds',   // Legacy name
};

function normalizeType(raw) {
  const t = (raw || '').toLowerCase().trim();
  return TYPE_ALIASES[t] || t;
}

function normalizeUrl(raw) {
  const u = (raw || '').trim();
  if (!u) return '#';
  if (u.startsWith('http://') || u.startsWith('https://') || u.startsWith('/')) return u;
  return '#';
}

function parseCSV(csv, filterKey) {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = parseRow(lines[0]).map((h) => h.toLowerCase().trim());

  return lines
    .slice(1)
    .map((line) => {
      const values = parseRow(line);
      const row = {};
      headers.forEach((h, i) => { row[h] = (values[i] ?? '').trim(); });
      if (row.type) row.type = normalizeType(row.type);
      if ('url' in row) row.url = normalizeUrl(row.url);
      return row;
    })
    .filter((row) => row[filterKey]);
}

function parseRow(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
      else { inQuotes = !inQuotes; }
    } else if (ch === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}
