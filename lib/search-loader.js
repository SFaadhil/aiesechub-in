// Client-side async loader for Google Sheets resources.
// Fetches all hub and page tabs once per session, then caches.
import { SHEET_ID, HUB_SHEET_TABS, PAGE_SHEET_TABS } from '@/lib/sheets-config';
import { HUBS } from '@/lib/data';

let _cache = null;
let _promise = null;

function buildUrl(tab) {
  const id = (SHEET_ID || '').trim();
  if (!id) return null;
  if (id.startsWith('https://')) {
    const base = id.split('?')[0];
    return `${base}?output=csv&sheet=${encodeURIComponent(tab)}`;
  }
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
}

function parseRow(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current); current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

function parseCSV(csv, filterKey = 'title') {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return [];
  const headers = parseRow(lines[0]).map((h) => h.toLowerCase().trim());
  return lines.slice(1).map((line) => {
    const values = parseRow(line);
    const row = {};
    headers.forEach((h, i) => { row[h] = (values[i] ?? '').trim(); });
    return row;
  }).filter((row) => row[filterKey]);
}

async function fetchTab(tab, filterKey = 'title') {
  try {
    const url = buildUrl(tab);
    if (!url) return [];
    const res = await fetch(url);
    if (!res.ok) return [];
    const csv = await res.text();
    if (csv.trim().startsWith('<')) return [];
    return parseCSV(csv, filterKey);
  } catch {
    return [];
  }
}

export async function loadDynamicSearchEntries() {
  if (_cache) return _cache;
  if (_promise) return _promise;

  _promise = (async () => {
    const entries = [];

    const hubFetches = Object.entries(HUB_SHEET_TABS).map(async ([slug, tab]) => {
      const hub = HUBS.find((h) => h.slug === slug);
      if (!hub) return;
      const rows = await fetchTab(tab);
      rows.forEach((row, i) => {
        if (!row.title) return;
        entries.push({
          id: `sheet-hub-${slug}-${i}`,
          title: row.title,
          desc: row.description || '',
          href: `/functional-hub/${slug}`,
          badge: hub.name,
          accent: hub.accent,
          group: 'resources',
          keywords: `${row.title} ${row.description || ''} ${row.type || ''} ${hub.fullName} ${hub.name} resource`,
        });
      });
    });

    const pageFetches = [
      fetchTab(PAGE_SHEET_TABS['aiesec-way']).then((rows) => rows.forEach((row, i) => {
        if (!row.title) return;
        entries.push({ id: `sheet-way-${i}`, title: row.title, desc: row.description || '',
          href: '/aiesec-way', badge: 'AIESEC Way', accent: '#037ef3', group: 'content',
          keywords: `${row.title} ${row.description || ''} ${row.type || ''} aiesec way` });
      })),
      fetchTab(PAGE_SHEET_TABS['global-academies']).then((rows) => rows.forEach((row, i) => {
        if (!row.title) return;
        entries.push({ id: `sheet-ga-${i}`, title: row.title, desc: row.description || '',
          href: '/global-academies', badge: 'Academies', accent: '#00c16e', group: 'content',
          keywords: `${row.title} ${row.description || ''} ${row.type || ''} global academies` });
      })),
      fetchTab(PAGE_SHEET_TABS['conference-output']).then((rows) => rows.forEach((row, i) => {
        if (!row.title) return;
        entries.push({ id: `sheet-conf-${i}`, title: row.title, desc: row.description || '',
          href: '/conference-output', badge: 'Conference', accent: '#f59e0b', group: 'content',
          keywords: `${row.title} ${row.description || ''} ${row.type || ''} conference output` });
      })),
      fetchTab(PAGE_SHEET_TABS['compendium'], 'name').then((rows) => rows.forEach((row, i) => {
        if (!row.name) return;
        entries.push({ id: `sheet-comp-${i}`,
          title: row.letter ? `[${row.letter}] ${row.name}` : row.name,
          desc: 'AIESEC in India Compendium', href: '/aiesec-india',
          badge: 'Compendium', accent: '#037ef3', group: 'aiesec-india',
          keywords: `${row.name} ${row.letter || ''} compendium policy governance india` });
      })),
    ];

    await Promise.all([...hubFetches, ...pageFetches]);

    _cache = entries;
    _promise = null;
    return entries;
  })();

  return _promise;
}
