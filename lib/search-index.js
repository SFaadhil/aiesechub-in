import { HUBS, STATIC_PAGES } from '@/lib/data';
import { RECOGNITION_PORTFOLIOS, TIERS_BY_PORTFOLIO, TIER_META, RNR_METRICS } from '@/lib/rnr-data';
import { MC, ADVISORS, COMPENDIUM } from '@/lib/aiesec-india-data';

// ── Top-level pages ──────────────────────────────────────────────────────────
const PAGES = [
  { id: 'home',              title: 'Home',                    group: 'pages', badge: 'Page', accent: '#037ef3', href: '/',                  desc: 'AIESEC in India Hub — Term 26.27 national operations platform.',                                        keywords: 'home main landing aiesec india hub term 2627 national' },
  { id: 'aiesec-india-page', title: 'AIESEC in India',        group: 'pages', badge: 'Page', accent: '#037ef3', href: '/aiesec-india',       desc: 'Our history, Member Committee, Board of Advisors, and governing Compendium.',                             keywords: 'aiesec india history mc member committee advisors compendium 1959 1981 governance' },
  { id: 'functional-hub',   title: 'Functional Hub',          group: 'pages', badge: 'Page', accent: '#037ef3', href: '/functional-hub',     desc: 'Resources and tools for all AIESEC India portfolios in one place.',                                       keywords: 'functional hub portfolios igv ogv igta igte ogta mkt bd pm fnl expansions' },
  { id: 'aiesec-way-page',  title: 'The AIESEC Way',          group: 'pages', badge: 'Page', accent: '#037ef3', href: '/aiesec-way',         desc: 'The philosophy, values, and vision that guide every AIESEC member worldwide.',                             keywords: 'aiesec way vision mission values leadership diversity integrity excellence sustainability participation peace youth' },
  { id: 'global-academies', title: 'Global Academies',        group: 'pages', badge: 'Page', accent: '#00c16e', href: '/global-academies',   desc: 'Learning experiences, leadership academies, and global development programmes.',                           keywords: 'global academies learning leadership development programme training apply selection' },
  { id: 'conference-output',title: 'Conference Output',       group: 'pages', badge: 'Page', accent: '#f59e0b', href: '/conference-output',  desc: 'Key outputs, presentations, and decisions from national and regional conferences.',                         keywords: 'conference output national regional presentations decisions facilitation sessions recordings' },
  { id: 'rnr-page',         title: 'Rewards & Recognition',   group: 'pages', badge: 'Page', accent: '#0f172a', href: '/rnr',                desc: 'National dashboard, tier standings, and monthly recognition for all AIESEC India LCs.',                   keywords: 'rnr rewards recognition tiers points leaderboard national dashboard monthly standings portfolio lc' },
  { id: 'gcp-hub-page',     title: 'GCP Hub',                 group: 'pages', badge: 'Page', accent: '#037ef3', href: '/gcp-hub',            desc: 'Good Case Practices from LCs and portfolios across AIESEC in India — search, filter, and submit your own.', keywords: 'gcp hub good case practices submit review lc portfolio share knowledge' },
];

// ── AIESEC in India page sections ────────────────────────────────────────────
const AIESEC_INDIA_SECTIONS = [
  { id: 'ai-history',  title: 'Our History',      group: 'aiesec-india', badge: 'AIESEC India', accent: '#037ef3', href: '/aiesec-india#history',    desc: 'The story and growth of AIESEC in India since 1959.', keywords: 'history aiesec india 1959 1981 founded established organisation' },
  { id: 'ai-mc',       title: 'MC Conquerors',    group: 'aiesec-india', badge: 'AIESEC India', accent: '#037ef3', href: '/aiesec-india#mc',          desc: 'Member Committee 26.27 of AIESEC in India — the national leadership team.', keywords: 'mc member committee conquerors mcvp team leadership 2627 national' },
  { id: 'ai-contact',  title: 'MC Contact List',  group: 'aiesec-india', badge: 'AIESEC India', accent: '#037ef3', href: '/aiesec-india#mc-contact',  desc: 'Contact details for all MC members — phone, .in and .ID emails.', keywords: 'mc contact list phone email aiesec.in aiesecmember.in reach' },
  { id: 'ai-advisors', title: 'Board of Advisors',group: 'aiesec-india', badge: 'AIESEC India', accent: '#037ef3', href: '/aiesec-india#advisors',    desc: 'Guiding AIESEC in India with experience and expertise.', keywords: 'board advisors guidance experience expertise senior advisory' },
  { id: 'ai-comp',     title: 'Compendium',       group: 'aiesec-india', badge: 'AIESEC India', accent: '#037ef3', href: '/aiesec-india#compendium',  desc: "AIESEC in India's governing policy documents.", keywords: 'compendium governing policy documents constitution rules regulations legal governance india' },
];

// ── MC members ───────────────────────────────────────────────────────────────
const MC_ENTRIES = MC.map((m) => ({
  id: `mc-${m.dotIn}`,
  title: m.name,
  desc: `${m.role} · ${m.phone}`,
  href: '/aiesec-india#mc',
  badge: 'MC',
  accent: '#037ef3',
  group: 'aiesec-india',
  keywords: `${m.name} ${m.role} ${m.shortRole || ''} ${m.phone} ${m.dotIn} ${m.dotId} member committee mcvp conquerors`,
}));

// ── Board of Advisors ────────────────────────────────────────────────────────
const ADVISOR_ENTRIES = ADVISORS.map((a, i) => ({
  id: `advisor-${i}`,
  title: a.name,
  desc: a.designation,
  href: '/aiesec-india#advisors',
  badge: 'Advisor',
  accent: '#037ef3',
  group: 'aiesec-india',
  keywords: `${a.name} ${a.designation} board advisors guidance india`,
}));

// ── Compendium documents ─────────────────────────────────────────────────────
const COMPENDIUM_ENTRIES = COMPENDIUM.map((doc, i) => ({
  id: `compendium-${doc.letter || 'main'}-${i}`,
  title: doc.letter ? `[${doc.letter}] ${doc.name}` : doc.name,
  desc: doc.main ? 'Main Compendium — AIESEC in India governing document' : `Compendium Annex ${doc.letter || ''}`,
  href: '/aiesec-india#compendium',
  badge: 'Compendium',
  accent: '#037ef3',
  group: 'aiesec-india',
  keywords: `${doc.name} ${doc.letter || ''} compendium policy document governance india annex constitution`,
}));

// ── AIESEC Way sections ──────────────────────────────────────────────────────
const AIESEC_WAY_SECTIONS = (STATIC_PAGES['aiesec-way']?.sections || []).map((s, i) => ({
  id: `aiesec-way-section-${i}`,
  title: s.heading,
  desc: s.body.slice(0, 130) + (s.body.length > 130 ? '…' : ''),
  href: '/aiesec-way',
  badge: 'AIESEC Way',
  accent: '#037ef3',
  group: 'content',
  keywords: `${s.heading} ${s.body} aiesec way values leadership vision mission peace diversity`,
}));

// ── Static page resources ────────────────────────────────────────────────────
const PAGE_RESOURCES = [
  ...(STATIC_PAGES['aiesec-way']?.resources || []).map((r, i) => ({
    id: `way-resource-${i}`, title: r.title, desc: r.desc, href: '/aiesec-way',
    badge: 'AIESEC Way', accent: '#037ef3', group: 'content',
    keywords: `${r.title} ${r.desc} ${r.type} aiesec way resource`,
  })),
  ...(STATIC_PAGES['global-academies']?.resources || []).map((r, i) => ({
    id: `ga-resource-${i}`, title: r.title, desc: r.desc, href: '/global-academies',
    badge: 'Academies', accent: '#00c16e', group: 'content',
    keywords: `${r.title} ${r.desc} ${r.type} global academies resource`,
  })),
  ...(STATIC_PAGES['conference-output']?.resources || []).map((r, i) => ({
    id: `conf-resource-${i}`, title: r.title, desc: r.desc, href: '/conference-output',
    badge: 'Conference', accent: '#f59e0b', group: 'content',
    keywords: `${r.title} ${r.desc} ${r.type} conference output resource`,
  })),
];

// ── Functional Hubs ──────────────────────────────────────────────────────────
const HUB_ENTRIES = HUBS.map((hub) => ({
  id: `hub-${hub.slug}`,
  title: `${hub.name} — ${hub.fullName}`,
  desc: hub.description,
  href: `/functional-hub/${hub.slug}`,
  badge: hub.name,
  accent: hub.accent,
  group: 'hubs',
  keywords: `${hub.slug} ${hub.name} ${hub.fullName} hub portfolio functional resources`,
}));

// ── Hub static resource fallbacks ────────────────────────────────────────────
const HUB_RESOURCES = HUBS.flatMap((hub) =>
  hub.resources.map((r, i) => ({
    id: `hub-${hub.slug}-resource-${i}`,
    title: r.title,
    desc: r.desc,
    href: `/functional-hub/${hub.slug}`,
    badge: hub.name,
    accent: hub.accent,
    group: 'resources',
    keywords: `${r.title} ${r.desc} ${r.type} ${hub.fullName} ${hub.name} resource`,
  }))
);

// ── RnR main sections ────────────────────────────────────────────────────────
const RNR_SECTIONS = [
  { id: 'rnr-dashboard',   title: 'National Dashboard',        group: 'rnr', badge: 'RnR', accent: '#0f172a', href: '/rnr#dashboard',   desc: 'Per-portfolio tier standings and monthly points for every LC.',                    keywords: 'dashboard standings rank points portfolio monthly lc national leaderboard tier badge' },
  { id: 'rnr-recognition', title: 'Monthly Recognition Table', group: 'rnr', badge: 'RnR', accent: '#0f172a', href: '/rnr#recognition', desc: 'LCs recognised at each tier level for every portfolio, filtered by month.',       keywords: 'monthly recognition table tier april march february portfolio lc recognised awards' },
  { id: 'rnr-tiers',       title: 'Portfolio Tiers',           group: 'rnr', badge: 'RnR', accent: '#0f172a', href: '/rnr#tiers',       desc: 'LC tier assignments across all portfolios for the current term.',                  keywords: 'tier structure portfolio assignments term standings tier 1 2 3 4 5 x expansion' },
  { id: 'rnr-metrics',     title: 'Points Framework',          group: 'rnr', badge: 'RnR', accent: '#0f172a', href: '/rnr#metrics',     desc: 'Per-portfolio scoring parameters, weightages, and point scales for all LCs.',     keywords: 'points framework metrics parameters weightage scale apd re co finco apl bd revenue mkt su sign ups' },
];

// ── RnR portfolios ───────────────────────────────────────────────────────────
const RNR_PORTFOLIOS = RECOGNITION_PORTFOLIOS.map((p) => {
  const metrics = RNR_METRICS[p.key];
  return {
    id: `rnr-portfolio-${p.key}`,
    title: `${p.label} — ${p.fullName.trim()}`,
    desc: metrics ? `Parameters: ${metrics.parameters.map((x) => x.parameter).join(', ')}` : `${p.fullName.trim()} portfolio`,
    href: '/rnr#dashboard',
    badge: 'RnR',
    accent: p.color,
    group: 'rnr',
    keywords: `${p.key} ${p.fullName} rnr portfolio tier points metrics recognition`,
  };
});

// ── Local Committees ─────────────────────────────────────────────────────────
const allLCs = new Set();
Object.values(TIERS_BY_PORTFOLIO).forEach((tierMap) => {
  Object.values(tierMap).forEach((lcs) => lcs.forEach((lc) => allLCs.add(lc)));
});
const RNR_LCS = Array.from(allLCs).map((lc) => {
  const entityTier = Object.entries(TIERS_BY_PORTFOLIO.Entity || {}).find(([, lcs]) => lcs.includes(lc))?.[0];
  return {
    id: `lc-${lc.replace(/\s+/g, '-').toLowerCase()}`,
    title: lc,
    desc: entityTier ? `Entity Standing: ${entityTier}` : 'AIESEC India Local Committee',
    href: '/rnr#dashboard',
    badge: 'LC',
    accent: entityTier && TIER_META[entityTier] ? TIER_META[entityTier].color : '#8b9ab0',
    group: 'lc',
    keywords: `${lc} lc local committee india aiesec entity ${entityTier || ''}`,
  };
});

// ── Full static index ────────────────────────────────────────────────────────
export const SEARCH_INDEX = [
  ...PAGES,
  ...AIESEC_INDIA_SECTIONS,
  ...MC_ENTRIES,
  ...ADVISOR_ENTRIES,
  ...COMPENDIUM_ENTRIES,
  ...AIESEC_WAY_SECTIONS,
  ...PAGE_RESOURCES,
  ...HUB_ENTRIES,
  ...HUB_RESOURCES,
  ...RNR_SECTIONS,
  ...RNR_PORTFOLIOS,
  ...RNR_LCS,
];

// ── Search function ──────────────────────────────────────────────────────────
// extraEntries: live sheet results merged at query time (sheet entries take priority)
export function searchIndex(query, extraEntries = []) {
  const q = query.trim().toLowerCase();
  if (!q || q.length < 2) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const seen = new Set();
  const match = (item) => {
    const hay = `${item.title} ${item.desc} ${item.keywords}`.toLowerCase();
    return tokens.every((t) => hay.includes(t));
  };

  const results = [];
  // Sheet entries first (they're live; static are fallbacks)
  for (const item of [...extraEntries, ...SEARCH_INDEX]) {
    const key = `${item.title.toLowerCase()}|${item.href}`;
    if (seen.has(key)) continue;
    if (match(item)) { results.push(item); seen.add(key); }
  }
  return results;
}

export const GROUP_META = {
  pages:        { label: 'Pages',            order: 0 },
  'aiesec-india': { label: 'AIESEC in India', order: 1 },
  content:      { label: 'Page Content',     order: 2 },
  hubs:         { label: 'Functional Hubs',  order: 3 },
  resources:    { label: 'Resources',        order: 4 },
  rnr:          { label: 'RnR',              order: 5 },
  lc:           { label: 'Local Committees', order: 6 },
};
