// RnR data for term 26.2.
// Tiers and metrics are transcribed from the MC RnR tool (ZiddiMania.xlsx,
// sheets "TIERS 2026.2" and "RNR METRICS"). Monthly points start again with
// August 2026 — see MONTHLY_POINTS below.

// Global portfolio ordering (used across all sections)
export const PORTFOLIO_ORDER = ['Entity','iGV','oGV','iGTa','iGTe','oGTa','MKT','BD','PM','FnL','EXP'];

// Dashboard portfolios (Entity first as default; no oGTe)
export const PORTFOLIOS = [
  { key: 'Entity', label: 'Entity', color: '#0f172a', fullName: 'Overall Entity Standing' },
  { key: 'iGV',  label: 'iGV',  color: '#f85a40', fullName: 'Incoming Global Volunteer' },
  { key: 'oGV',  label: 'oGV',  color: '#f85a40', fullName: 'Outgoing Global Volunteer' },
  { key: 'iGTa', label: 'iGTa', color: '#0CB9C1', fullName: 'Incoming Global Talent ' },
  { key: 'iGTe', label: 'iGTe', color: '#0CB9C1', fullName: 'Incoming Global Teacher ' },
  { key: 'oGTa', label: 'oGTa', color: '#0CB9C1', fullName: 'Outgoing Global Talent/Teacher ' },
  { key: 'MKT',  label: 'MKT',  color: '#037ef3', fullName: 'Marketing' },
  { key: 'BD',   label: 'BD',   color: '#f59e0b', fullName: 'Business Development' },
  { key: 'PM',   label: 'PM',   color: '#7552CC', fullName: 'People Management' },
  { key: 'FnL',  label: 'FnL',  color: '#00c16e', fullName: 'Finance & Legality' },
  { key: 'EXP',  label: 'EXP',  color: '#8b9ab0', fullName: 'Expansions' },
];

// Recognition dropdown (Entity first, then portfolio order, no oGTe)
export const RECOGNITION_PORTFOLIOS = [
  { key: 'Entity', label: 'Entity', color: '#0f172a', fullName: 'Overall Entity Standing' },
  { key: 'iGV',   label: 'iGV',   color: '#f85a40', fullName: 'Incoming Global Volunteer' },
  { key: 'oGV',   label: 'oGV',   color: '#f85a40', fullName: 'Outgoing Global Volunteer' },
  { key: 'iGTa',  label: 'iGTa',  color: '#0CB9C1', fullName: 'Incoming Global Talent ' },
  { key: 'iGTe',  label: 'iGTe',  color: '#0CB9C1', fullName: 'Incoming Global Teacher ' },
  { key: 'oGTa',  label: 'oGTa',  color: '#0CB9C1', fullName: 'Outgoing Global Talent/Teacher' },
  { key: 'MKT',   label: 'MKT',   color: '#037ef3', fullName: 'Marketing' },
  { key: 'BD',    label: 'BD',    color: '#f59e0b', fullName: 'Business Development' },
  { key: 'PM',    label: 'PM',    color: '#7552CC', fullName: 'People Management' },
  { key: 'FnL',   label: 'FnL',   color: '#00c16e', fullName: 'Finance & Legality' },
  { key: 'EXP',   label: 'EXP',   color: '#8b9ab0', fullName: 'Expansions' },
];

// Tier structure tabs — 26.2 adds Expansions, which is tiered in its own cluster
export const TIER_PORTFOLIOS = [
  { key: 'Entity', label: 'Entity', color: '#0f172a', fullName: 'Overall Entity Standing' },
  { key: 'iGV',   label: 'iGV',   color: '#f85a40', fullName: 'Incoming Global Volunteer' },
  { key: 'oGV',   label: 'oGV',   color: '#f85a40', fullName: 'Outgoing Global Volunteer' },
  { key: 'iGTa',  label: 'iGTa',  color: '#0CB9C1', fullName: 'Incoming Global Talent ' },
  { key: 'iGTe',  label: 'iGTe',  color: '#0CB9C1', fullName: 'Incoming Global Teacher ' },
  { key: 'oGTa',  label: 'oGTa',  color: '#0CB9C1', fullName: 'Outgoing Global Talent/Teacher ' },
  { key: 'MKT',   label: 'MKT',   color: '#037ef3', fullName: 'Marketing' },
  { key: 'BD',    label: 'BD',    color: '#f59e0b', fullName: 'Business Development' },
  { key: 'PM',    label: 'PM',    color: '#7552CC', fullName: 'People Management' },
  { key: 'FnL',   label: 'FnL',   color: '#00c16e', fullName: 'Finance & Legality' },
  { key: 'EXP',   label: 'EXP',   color: '#8b9ab0', fullName: 'Expansions — Cluster X' },
];

// 26.2 removed Tier X from the portfolios. Expansion LCs are no longer parked
// outside the ranking — they compete in every portfolio's Tier 1–5 and are
// grouped into Cluster X only for the overall entity standing.
export const TIER_ORDER = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5', 'Cluster X'];

export const TIER_META = {
  'Tier 1':    { color: '#f59e0b', bg: '#fef9ee', label: '' },
  'Tier 2':    { color: '#94a3b8', bg: '#f8fafc', label: '' },
  'Tier 3':    { color: '#cd7f32', bg: '#fdf6ee', label: '' },
  'Tier 4':    { color: '#e11d48', bg: '#fff1f4', label: '' },
  'Tier 5':    { color: '#10b981', bg: '#f0fdf8', label: '' },
  'Cluster X': { color: '#8b9ab0', bg: '#f8fafc', label: 'Expansions' },
};

export const TIERS_BY_PORTFOLIO = {
  // ── Overall LC standing (Tier 1-5 + Cluster X for expansions) ───────────────
  Entity: {
    'Tier 1': ['AIESEC in Chandigarh', 'AIESEC in Hyderabad', 'AIESEC in M.A.H.E.'],
    'Tier 2': ['AIESEC in Bengaluru', 'AIESEC in Chennai', 'AIESEC in Delhi IIT', 'AIESEC in Mumbai'],
    'Tier 3': ['AIESEC in Delhi University', 'AIESEC in Ludhiana', 'AIESEC in Pune', 'AIESEC in Visakhapatnam'],
    'Tier 4': ['AIESEC in Ahmedabad', 'AIESEC in Jaipur', 'AIESEC in Jalandhar', 'AIESEC in Kolkata'],
    'Tier 5': ['AIESEC in Indore', 'AIESEC in Navi Mumbai', 'AIESEC in Patiala', 'AIESEC in Surat'],
    'Cluster X': [
      'AIESEC in Amravati', 'AIESEC in Noida', 'AIESEC in Bhopal', 'AIESEC in VVN', 'AIESEC in Nashik',
      'AIESEC in Baroda', 'AIESEC in Dehradun',
    ],
  },
  // ── iGV ─────────────────────────────────────────────────────────────────────
  iGV: {
    'Tier 1': ['AIESEC in Hyderabad'],
    'Tier 2': ['AIESEC in Mumbai', 'AIESEC in Chandigarh', 'AIESEC in Delhi IIT', 'AIESEC in Visakhapatnam'],
    'Tier 3': ['AIESEC in Jaipur', 'AIESEC in Ludhiana', 'AIESEC in M.A.H.E.', 'AIESEC in Bhopal'],
    'Tier 4': ['AIESEC in Pune', 'AIESEC in Bengaluru', 'AIESEC in Chennai', 'AIESEC in Delhi University'],
    'Tier 5': [
      'AIESEC in Ahmedabad', 'AIESEC in Jalandhar', 'AIESEC in Kolkata', 'AIESEC in Navi Mumbai', 'AIESEC in Surat',
      'AIESEC in Patiala',
    ],
  },
  // ── oGV ─────────────────────────────────────────────────────────────────────
  oGV: {
    'Tier 1': ['AIESEC in Mumbai', 'AIESEC in M.A.H.E.', 'AIESEC in Bengaluru', 'AIESEC in Hyderabad'],
    'Tier 2': ['AIESEC in Pune', 'AIESEC in Jalandhar', 'AIESEC in Delhi University'],
    'Tier 3': [
      'AIESEC in Amravati', 'AIESEC in Ludhiana', 'AIESEC in Chennai', 'AIESEC in Visakhapatnam',
      'AIESEC in Chandigarh',
    ],
    'Tier 4': [
      'AIESEC in Kolkata', 'AIESEC in Ahmedabad', 'AIESEC in VVN', 'AIESEC in Navi Mumbai', 'AIESEC in Delhi IIT',
    ],
    'Tier 5': [
      'AIESEC in Bhopal', 'AIESEC in Surat', 'AIESEC in Indore', 'AIESEC in Noida', 'AIESEC in Patiala',
      'AIESEC in Baroda',
    ],
  },
  // ── iGTa ────────────────────────────────────────────────────────────────────
  iGTa: {
    'Tier 1': ['AIESEC in Chandigarh', 'AIESEC in M.A.H.E.'],
    'Tier 2': ['AIESEC in Delhi IIT', 'AIESEC in Chennai', 'AIESEC in Hyderabad'],
    'Tier 3': ['AIESEC in Delhi University', 'AIESEC in Bengaluru', 'AIESEC in Mumbai'],
    'Tier 4': [
      'AIESEC in Kolkata', 'AIESEC in Visakhapatnam', 'AIESEC in Ahmedabad', 'AIESEC in Jaipur',
      'AIESEC in Jalandhar',
    ],
    'Tier 5': [
      'AIESEC in Navi Mumbai', 'AIESEC in Pune', 'AIESEC in Surat', 'AIESEC in VVN', 'AIESEC in Noida',
      'AIESEC in Baroda',
    ],
  },
  // ── iGTe ────────────────────────────────────────────────────────────────────
  iGTe: {
    'Tier 1': ['AIESEC in Bengaluru', 'AIESEC in Chandigarh'],
    'Tier 2': ['AIESEC in Hyderabad', 'AIESEC in Ahmedabad', 'AIESEC in Ludhiana'],
    'Tier 3': ['AIESEC in Delhi University', 'AIESEC in Delhi IIT', 'AIESEC in Mumbai', 'AIESEC in Jalandhar'],
    'Tier 4': [
      'AIESEC in Pune', 'AIESEC in Indore', 'AIESEC in Chennai', 'AIESEC in Visakhapatnam', 'AIESEC in Jaipur',
      'AIESEC in Surat', 'AIESEC in Patiala',
    ],
  },
  // ── oGTa ────────────────────────────────────────────────────────────────────
  oGTa: {
    'Tier 1': ['AIESEC in Chennai'],
    'Tier 2': ['AIESEC in Hyderabad', 'AIESEC in Kolkata', 'AIESEC in Noida'],
    'Tier 3': ['AIESEC in Ahmedabad', 'AIESEC in Bengaluru', 'AIESEC in Mumbai', 'AIESEC in Visakhapatnam'],
    'Tier 4': ['AIESEC in Chandigarh', 'AIESEC in VVN', 'AIESEC in Amravati', 'AIESEC in Delhi IIT'],
    'Tier 5': ['AIESEC in Jaipur', 'AIESEC in Indore', 'AIESEC in Surat'],
  },
  // ── MKT ─────────────────────────────────────────────────────────────────────
  MKT: {
    'Tier 1': ['AIESEC in Hyderabad', 'AIESEC in Mumbai', 'AIESEC in Bengaluru', 'AIESEC in Pune'],
    'Tier 2': ['AIESEC in M.A.H.E.', 'AIESEC in Delhi University', 'AIESEC in Amravati', 'AIESEC in Chennai'],
    'Tier 3': ['AIESEC in Chandigarh', 'AIESEC in Jalandhar', 'AIESEC in Visakhapatnam', 'AIESEC in Delhi IIT'],
    'Tier 4': [
      'AIESEC in Ludhiana', 'AIESEC in Ahmedabad', 'AIESEC in Navi Mumbai', 'AIESEC in VVN', 'AIESEC in Kolkata',
    ],
    'Tier 5': [
      'AIESEC in Surat', 'AIESEC in Jaipur', 'AIESEC in Indore', 'AIESEC in Patiala', 'AIESEC in Bhopal',
      'AIESEC in Noida',
    ],
  },
  // ── BD ──────────────────────────────────────────────────────────────────────
  BD: {
    'Tier 1': ['AIESEC in Bengaluru', 'AIESEC in Hyderabad', 'AIESEC in Mumbai'],
    'Tier 2': ['AIESEC in Chennai', 'AIESEC in Chandigarh', 'AIESEC in Visakhapatnam', 'AIESEC in Delhi IIT'],
    'Tier 3': ['AIESEC in Delhi University', 'AIESEC in Pune', 'AIESEC in VVN'],
    'Tier 4': ['AIESEC in Surat', 'AIESEC in Ahmedabad', 'AIESEC in Kolkata', 'AIESEC in Amravati'],
    'Tier 5': [
      'AIESEC in Navi Mumbai', 'AIESEC in Indore', 'AIESEC in Jaipur', 'AIESEC in Ludhiana', 'AIESEC in Jalandhar',
      'AIESEC in M.A.H.E.', 'AIESEC in Noida', 'AIESEC in Bhopal',
    ],
  },
  // ── PM ──────────────────────────────────────────────────────────────────────
  PM: {
    'Tier 1': [
      'AIESEC in Amravati', 'AIESEC in Hyderabad', 'AIESEC in Chennai', 'AIESEC in Jalandhar', 'AIESEC in M.A.H.E.',
    ],
    'Tier 2': ['AIESEC in Bengaluru', 'AIESEC in Chandigarh', 'AIESEC in Delhi University', 'AIESEC in Delhi IIT'],
    'Tier 3': ['AIESEC in Bhopal', 'AIESEC in Pune', 'AIESEC in Mumbai', 'AIESEC in VVN', 'AIESEC in Kolkata'],
    'Tier 4': ['AIESEC in Ahmedabad', 'AIESEC in Surat', 'AIESEC in Indore', 'AIESEC in Visakhapatnam'],
    'Tier 5': [
      'AIESEC in Jaipur', 'AIESEC in Navi Mumbai', 'AIESEC in Patiala', 'AIESEC in Noida', 'AIESEC in Ludhiana',
    ],
  },
  // ── FnL ─────────────────────────────────────────────────────────────────────
  FnL: {
    'Tier 1': ['AIESEC in Mumbai', 'AIESEC in Pune', 'AIESEC in Hyderabad', 'AIESEC in Visakhapatnam'],
    'Tier 2': ['AIESEC in Ludhiana', 'AIESEC in Jalandhar', 'AIESEC in Bengaluru'],
    'Tier 3': ['AIESEC in Ahmedabad', 'AIESEC in Chennai', 'AIESEC in Chandigarh', 'AIESEC in Delhi University'],
    'Tier 4': ['AIESEC in Delhi IIT', 'AIESEC in Indore', 'AIESEC in Kolkata', 'AIESEC in M.A.H.E.'],
    'Tier 5': ['AIESEC in Surat', 'AIESEC in Navi Mumbai', 'AIESEC in Jaipur', 'AIESEC in Patiala'],
  },
  // ── Expansions - Cluster X ──────────────────────────────────────────────────
  EXP: {
    'Tier 1': ['AIESEC in Amravati', 'AIESEC in Noida', 'AIESEC in Bhopal', 'AIESEC in VVN'],
    'Tier 2': ['AIESEC in Nashik', 'AIESEC in Baroda', 'AIESEC in Dehradun'],
  },
};

// Reverse lookup: LC → { portfolioKey → tier }
// Generated once at module load so it's O(1) at render time
export const LC_PORTFOLIO_TIERS = (() => {
  const result = {};
  Object.entries(TIERS_BY_PORTFOLIO).forEach(([portfolioKey, tierMap]) => {
    Object.entries(tierMap).forEach(([tier, lcs]) => {
      lcs.forEach((lc) => {
        if (!result[lc]) result[lc] = {};
        result[lc][portfolioKey] = tier;
      });
    });
  });
  return result;
})();

// Entity-level tier for each LC (derived from TIERS_BY_PORTFOLIO.Entity)
export const ENTITY_TIERS = (() => {
  const result = {};
  Object.entries(TIERS_BY_PORTFOLIO.Entity).forEach(([tier, lcs]) => {
    lcs.forEach((lc) => { result[lc] = tier; });
  });
  return result;
})();

// Tiers a portfolio actually uses, in display order. Portfolios stop wherever
// the sheet stops (iGTe has no Tier 5, Expansions only runs to Tier 2), and
// Cluster X exists on the entity standing alone.
export function getTiersForPortfolio(portfolioKey) {
  const tierMap = TIERS_BY_PORTFOLIO[portfolioKey] || {};
  return TIER_ORDER.filter((tier) => tier in tierMap);
}

// ── Monthly points data ──────────────────────────────────────────────────────
// Structure: { monthKey → { portfolioKey → { lcName → points } } }
// Entity points are under key 'entity' (lowercase). All other keys match PORTFOLIOS keys.
//
// Empty for now: 26.2 restarts the cycle and August 2026 is the first month.
// To bring the dashboard and recognition tables back online, add the month here
// and to MONTHS_LIST — both sections un-blur on their own once MONTHS_LIST is
// no longer empty (see HAS_MONTHLY_DATA).
export const MONTHLY_POINTS = {};

export const MONTHS_LIST = [];

// Drives the "results coming soon" state on the dashboard and recognition sections.
export const HAS_MONTHLY_DATA = MONTHS_LIST.length > 0;

// Builds dashboard rows for a given month, sorted by monthly entity points
const DASHBOARD_PF_KEYS = ['iGV','oGV','iGTa','iGTe','oGTa','MKT','BD','PM','FnL','EXP'];

export function getDashboardDataForMonth(monthKey) {
  const monthData = MONTHLY_POINTS[monthKey];
  if (!monthData) return [];

  const entityPts = monthData.entity || {};

  // Compute per-portfolio ranks for every LC
  const pfRanks = {};
  DASHBOARD_PF_KEYS.forEach((pKey) => {
    const pfData = monthData[pKey] || {};
    Object.entries(pfData)
      .sort(([, a], [, b]) => b - a)
      .forEach(([lc, pts], idx) => {
        if (!pfRanks[lc]) pfRanks[lc] = {};
        pfRanks[lc][pKey] = { rank: idx + 1, points: pts };
      });
  });

  const sorted = Object.keys(entityPts)
    .sort((a, b) => (entityPts[b] || 0) - (entityPts[a] || 0));

  return sorted.map((lc, idx) => ({
    lc,
    entityRank: idx + 1,
    entityTier: ENTITY_TIERS[lc] || '—',
    totalPoints: entityPts[lc] || 0,
    portfolios: {
      Entity: { rank: idx + 1, points: entityPts[lc] || 0 },
      ...(pfRanks[lc] || {}),
    },
  }));
}

// Returns recognised LCs per tier for a given portfolio + month
// Only includes LCs with non-zero points for that month; ordered by points desc within each tier
export function getRecognitionData(portfolioKey, monthKey) {
  const tierMap = TIERS_BY_PORTFOLIO[portfolioKey] || {};
  const pfKey   = portfolioKey === 'Entity' ? 'entity' : portfolioKey;
  const pfPts   = (MONTHLY_POINTS[monthKey] || {})[pfKey] || {};

  const result = {};
  getTiersForPortfolio(portfolioKey).forEach((tier) => {
    result[tier] = (tierMap[tier] || [])
      .filter((lc) => (pfPts[lc] || 0) > 0)
      .sort((a, b) => (pfPts[b] || 0) - (pfPts[a] || 0));
  });
  return result;
}

// ── RnR Metrics ──────────────────────────────────────────────────────────────
// Transcribed from the "RNR METRICS" sheet. Each parameter carries every
// scoring band the sheet defines plus where the data is verified from;
// maxPoints is the top band, shown as the headline number in the table.

export const RNR_METRICS = {
  Entity: {
    color: '#0f172a',
    parameters: [
      {
        parameter: 'APDs',
        maxPoints: 80,
        bands: [
          { scale: 'Every APD', points: 80 },
        ],
        source: 'Data can be verified from Expa',
      },
      {
        parameter: 'REs',
        maxPoints: 120,
        bands: [
          { scale: 'Every RE', points: 120 },
        ],
        source: 'Data can be verified from Expa',
      },
      {
        parameter: 'BD Revenue Raised',
        maxPoints: 40,
        bands: [
          { scale: 'Every 10k', points: 40 },
        ],
        source: 'The data is extracted from the Finance Audits. If the revenue raised from BD in the BD audits does not match the Finance Audit data, the entity\'s BD audit will be considered failed for that month',
      },
      {
        parameter: 'Operational Revenue BvA',
        maxPoints: 120,
        bands: [
          { scale: '60%-74%', points: 30 },
          { scale: '75%-84%', points: 50 },
          { scale: '85%-94%', points: 100 },
          { scale: '95%-110%', points: 120 },
        ],
        source: 'Operations BvA involves both Exchanges & BD revenue · [We collect the data from the BFS & CFS backend]',
      },
      {
        parameter: 'People Per Position (MB, EB, LCP)',
        maxPoints: 80,
        bands: [
          { scale: '3 & more people per position', points: 80 },
          { scale: '2 People per position', points: 50 },
        ],
        source: 'Evaluated from PM Audits',
      },
      {
        parameter: 'Avg of MXSI & LPS',
        maxPoints: 80,
        bands: [
          { scale: '9.5 - 10', points: 80 },
          { scale: '9.0 - 9.4', points: 60 },
          { scale: '8.5 - 8.9', points: 40 },
        ],
        source: 'The data is collected from the MES score',
      },
      {
        parameter: 'National Conference Attendance (% of membership)',
        maxPoints: 100,
        bands: [
          { scale: '30% and above', points: 100 },
          { scale: '20% - 30%', points: 80 },
          { scale: '10% - 20%', points: 60 },
        ],
        source: 'Data Collected from MBSc',
      },
    ],
  },
  iGV: {
    color: '#f85a40',
    parameters: [
      {
        parameter: 'APD',
        maxPoints: 80,
        bands: [
          { scale: '1 APD', points: 80 },
        ],
        source: 'Verification from Expa',
      },
      {
        parameter: 'RE',
        maxPoints: 120,
        bands: [
          { scale: '1RE', points: 120 },
        ],
      },
      {
        parameter: 'FIN-CO',
        maxPoints: 100,
        bands: [
          { scale: '90% and above', points: 100 },
          { scale: '85-90%', points: 70 },
        ],
      },
      {
        parameter: 'CO',
        maxPoints: 100,
        bands: [
          { scale: '1 CO', points: 100 },
        ],
      },
    ],
  },
  oGV: {
    color: '#f85a40',
    parameters: [
      {
        parameter: 'Growth in SU - Applications',
        maxPoints: 60,
        bands: [
          { scale: '5% and above', points: 60 },
          { scale: '0 - 5 %', points: 40 },
        ],
        source: 'Verification from Expa',
      },
      {
        parameter: 'Accepted - Approved',
        maxPoints: 60,
        bands: [
          { scale: '75% and above', points: 60 },
          { scale: '60 - 74%', points: 40 },
        ],
      },
      {
        parameter: 'Fin - Co',
        maxPoints: 100,
        bands: [
          { scale: '90% and above', points: 100 },
          { scale: '85-90%', points: 70 },
        ],
      },
      {
        parameter: '#APD',
        maxPoints: 80,
        bands: [
          { scale: '1 APD', points: 80 },
        ],
      },
      {
        parameter: '#RE',
        maxPoints: 120,
        bands: [
          { scale: '1 RE', points: 120 },
        ],
      },
      {
        parameter: '#CO',
        maxPoints: 100,
        bands: [
          { scale: '1 CO', points: 100 },
        ],
      },
    ],
  },
  iGTa: {
    color: '#0CB9C1',
    parameters: [
      {
        parameter: 'APD',
        maxPoints: 80,
        bands: [
          { scale: '1 APD', points: 80 },
        ],
        source: 'Verification from Expa',
      },
      {
        parameter: 'RE',
        maxPoints: 120,
        bands: [
          { scale: '1RE', points: 120 },
        ],
      },
      {
        parameter: 'FIN-CO',
        maxPoints: 100,
        bands: [
          { scale: '90% and above', points: 100 },
          { scale: '85-90%', points: 70 },
        ],
      },
      {
        parameter: 'CO',
        maxPoints: 100,
        bands: [
          { scale: '1 CO', points: 100 },
        ],
      },
      {
        parameter: 'Client Upscaling',
        maxPoints: 100,
        bands: [
          { scale: 'Per Client Raise', points: 100 },
        ],
        source: 'MCVP NEP will confirm from NEP Tracker',
      },
    ],
  },
  iGTe: {
    color: '#0CB9C1',
    parameters: [
      {
        parameter: 'APD',
        maxPoints: 80,
        bands: [
          { scale: '1 APD', points: 80 },
        ],
        source: 'Verification from Expa',
      },
      {
        parameter: 'RE',
        maxPoints: 120,
        bands: [
          { scale: '1RE', points: 120 },
        ],
      },
      {
        parameter: 'FIN-CO',
        maxPoints: 100,
        bands: [
          { scale: '90% and above', points: 100 },
          { scale: '85-90%', points: 70 },
        ],
      },
      {
        parameter: 'CO',
        maxPoints: 100,
        bands: [
          { scale: '1 CO', points: 100 },
        ],
      },
      {
        parameter: 'Client Upscaling',
        maxPoints: 100,
        bands: [
          { scale: 'Per Client Raise', points: 100 },
        ],
        source: 'MCVP NEP will confirm from NEP Tracker',
      },
    ],
  },
  oGTa: {
    color: '#0CB9C1',
    parameters: [
      {
        parameter: 'APL-APD',
        maxPoints: 60,
        bands: [
          { scale: '6% & above', points: 60 },
          { scale: '5% - 5.9%', points: 40 },
        ],
        source: 'Verification from Expa',
      },
      {
        parameter: 'APD',
        maxPoints: 80,
        bands: [
          { scale: '1 APD', points: 80 },
        ],
      },
      {
        parameter: 'RE',
        maxPoints: 120,
        bands: [
          { scale: '1RE', points: 120 },
        ],
      },
      {
        parameter: 'FIN-CO',
        maxPoints: 100,
        bands: [
          { scale: '90% and above', points: 100 },
          { scale: '85-90%', points: 70 },
        ],
      },
      {
        parameter: 'CO',
        maxPoints: 100,
        bands: [
          { scale: '1 CO', points: 100 },
        ],
      },
    ],
  },
  MKT: {
    color: '#037ef3',
    parameters: [
      {
        parameter: '#SU',
        maxPoints: 100,
        bands: [
          { scale: '351 and above', points: 100 },
          { scale: '251-350', points: 90 },
          { scale: '150-250', points: 70 },
        ],
        source: 'Verification from Expa',
      },
      {
        parameter: '#PPL oGV',
        maxPoints: 120,
        bands: [
          { scale: '25 & Above', points: 120 },
          { scale: '16 -25', points: 100 },
          { scale: '11-15', points: 80 },
          { scale: '5-10', points: 50 },
        ],
      },
      {
        parameter: '#PPL oGT',
        maxPoints: 80,
        bands: [
          { scale: '35 & Above', points: 80 },
          { scale: '25 - 35', points: 60 },
          { scale: '16-25', points: 50 },
          { scale: '10-15', points: 30 },
        ],
      },
      {
        parameter: '%SU-APD (oGV)',
        maxPoints: 100,
        bands: [
          { scale: 'above 4', points: 100 },
          { scale: '3-4', points: 90 },
          { scale: '2-3', points: 70 },
        ],
      },
      {
        parameter: '%APL-APD (oGT)',
        maxPoints: 100,
        bands: [
          { scale: '6% and above', points: 100 },
          { scale: '5-6%', points: 90 },
          { scale: '4-5%', points: 60 },
        ],
      },
      {
        parameter: '#UR signed',
        maxPoints: 100,
        bands: [
          { scale: '1 UR', points: 100 },
        ],
        source: 'Data to be cross referenced with MCVP MKT UR Resource Sheet',
      },
      {
        parameter: '#attractions',
        maxPoints: 120,
        bands: [
          { scale: '4 and above', points: 120 },
          { scale: '3 attractions', points: 80 },
        ],
        source: 'the type of attractions will be specified by MCVP MKT that will only be considered',
      },
      {
        parameter: '#brand initiatives',
        maxPoints: 80,
        bands: [
          { scale: '1 initiative', points: 80 },
        ],
        source: 'min 40 people shall be considered incase of B2C',
      },
      {
        parameter: '#brand campaign content / testimonials via stakeholders',
        maxPoints: 120,
        bands: [
          { scale: '6 and above', points: 120 },
          { scale: '3-5', points: 80 },
          { scale: '2', points: 60 },
        ],
        source: 'On discretion of mcvp mkt wrt quality and narrative',
      },
    ],
  },
  BD: {
    color: '#f59e0b',
    parameters: [
      {
        parameter: 'Profit Generated',
        maxPoints: 40,
        bands: [
          { scale: 'Every 10k', points: 40 },
        ],
        source: 'F audits / BD Audits',
      },
      {
        parameter: 'Youth Engaged',
        maxPoints: 50,
        bands: [
          { scale: 'Every 100', points: 50 },
        ],
        source: 'Youth engaged sheet',
      },
      {
        parameter: 'Cross Sales',
        maxPoints: 40,
        bands: [
          { scale: 'Every 10k', points: 40 },
        ],
        source: 'MCVP PD Will verify',
      },
      {
        parameter: 'Revenue Generated',
        maxPoints: 40,
        bands: [
          { scale: 'Every 10k', points: 40 },
        ],
        source: 'F audits / BD Audits',
      },
      {
        parameter: 'JBM done',
        maxPoints: 100,
        bands: [
          { scale: '1', points: 100 },
        ],
        source: 'MCVP BD will verify',
      },
    ],
  },
  PM: {
    color: '#7552CC',
    parameters: [
      {
        parameter: 'MX Implementation',
        maxPoints: 100,
        bands: [
          { scale: '95% and above', points: 100 },
          { scale: '90% -94%', points: 80 },
          { scale: '85%-89%', points: 60 },
        ],
        source: 'The data is collected from the MES score',
      },
      {
        parameter: 'LPS',
        maxPoints: 100,
        bands: [
          { scale: '9.5 and above', points: 100 },
          { scale: '9-9.4', points: 80 },
          { scale: '8.5 and above', points: 60 },
        ],
        source: 'The data is collected from the MES score',
      },
      {
        parameter: 'Recs regs TvA',
        maxPoints: 100,
        bands: [
          { scale: '95% and above', points: 100 },
          { scale: '90% - 94%', points: 80 },
          { scale: '85% and above', points: 60 },
        ],
        source: 'The data is collected from Audits Backend',
      },
      {
        parameter: 'iXP',
        maxPoints: 100,
        bands: [
          { scale: 'REP', points: 100 },
          { scale: 'RE', points: 80 },
          { scale: 'APD', points: 40 },
        ],
        source: 'The data is collected from a self reported form downscaled to PM Commission',
      },
      {
        parameter: 'PPP [people per position] (Internal Roles)',
        maxPoints: 80,
        bands: [
          { scale: '3 & more people per position', points: 80 },
          { scale: '2 People per position', points: 50 },
        ],
        source: 'The data is collected from PM Audits · [GB, MB, EB, LCP, OC, CC]',
      },
      {
        parameter: 'External Roles',
        maxPoints: 100,
        bands: [
          { scale: '2 Members - 4 Members', points: 20 },
          { scale: '5 Members - 9 Members', points: 40 },
          { scale: '10 - 15 Members', points: 60 },
          { scale: '16 - 20 Members', points: 80 },
          { scale: '20 Members & >>>', points: 100 },
        ],
        source: 'The data is collected from PM Audits · [NST, GST, EST, SC, SC, National roles]',
      },
      {
        parameter: 'NEC Participation',
        maxPoints: 50,
        bands: [
          { scale: '90% and above', points: 50 },
          { scale: '70% and above', points: 30 },
          { scale: '60% and above', points: 20 },
        ],
        source: 'The data is collected from Attendance/Participation rate in the NEC Sessions (%will be calculated on total current HR)',
      },
      {
        parameter: 'PM Initiatives (from 1 September 2026)',
        maxPoints: 70,
        bands: [
          { scale: 'Productivity/LEC campaigns', points: 70 },
          { scale: 'PDP initiatives', points: 60 },
          { scale: 'PM Newsletter', points: 50 },
        ],
        source: 'LEC campaign once a month · productivity campaigns 4 stories/week · (for membership campaigns get it approved by MCVP PM) · PDP initiatives like hobby clubs, pdp clubs (pdp tracker does not include in this) · per PM newsletter · The data will be collected from PM Audits, icomm activity',
      },
      {
        parameter: 'Audits — 1st go green',
        maxPoints: 50,
        bands: [
          { scale: 'First go green', points: 50 },
        ],
        source: 'The Data is collected from PM Audit Results',
      },
    ],
  },
  FnL: {
    color: '#00c16e',
    parameters: [
      {
        parameter: 'F&L Standards Implementation',
        maxPoints: 100,
        bands: [
          { scale: '80%-85%', points: 30 },
          { scale: '85%-90%', points: 50 },
          { scale: '90% & Above', points: 100 },
        ],
        source: 'Audits',
      },
      {
        parameter: 'Operational Expenses\' BvA',
        maxPoints: 100,
        bands: [
          { scale: '60%-75%', points: 60 },
          { scale: '75%-80%', points: 80 },
          { scale: '85%-100%', points: 100 },
          { scale: 'Above 100', points: 0 },
        ],
        source: 'Budget Sheet',
      },
      {
        parameter: 'Operational Revenue BvA',
        maxPoints: 120,
        bands: [
          { scale: '60%-74%', points: 30 },
          { scale: '75%-84%', points: 50 },
          { scale: '85%-95%', points: 100 },
          { scale: '95%-110%', points: 120 },
        ],
        source: 'Budget Sheet',
      },
      {
        parameter: 'Recon Clearance',
        maxPoints: 100,
        bands: [
          { scale: '90% - 100%', points: 100 },
          { scale: '70%-90%', points: 70 },
          { scale: '50%-70%', points: 50 },
        ],
        source: 'ILT sheet',
      },
      {
        parameter: 'Audit Compliance',
        maxPoints: 50,
        bands: [
          { scale: 'First go green', points: 50 },
        ],
        source: 'Audits',
      },
    ],
  },
  Expansions: {
    color: '#8b9ab0',
    parameters: [
      {
        parameter: 'APDs',
        maxPoints: 80,
        bands: [
          { scale: '1 APD', points: 80 },
        ],
        source: 'Verified Via Expa or RnR Tool',
      },
      {
        parameter: 'REs',
        maxPoints: 120,
        bands: [
          { scale: '1RE', points: 120 },
        ],
        source: 'Verified Via Expa or RnR Tool',
      },
      {
        parameter: 'BD Revenue Generated',
        maxPoints: 40,
        bands: [
          { scale: 'Every 10K', points: 40 },
        ],
        source: 'The data is extracted from the Finance Audits. If the revenue raised from BD in the BD audits does not match the Finance Audit data, the entity\'s BD audit will be considered failed for that month. or VMT Tool',
      },
      {
        parameter: 'Avg of MXSI & LPS',
        maxPoints: 80,
        bands: [
          { scale: '9.5 - 10', points: 80 },
          { scale: '9.0 - 9.4', points: 60 },
          { scale: '8.5 - 8.9', points: 40 },
        ],
        source: 'The data is collected from the MES score',
      },
      {
        parameter: 'National Conference Attendance (% of membership)',
        maxPoints: 100,
        bands: [
          { scale: '30% and above', points: 100 },
          { scale: '20% - 30%', points: 80 },
          { scale: '10% - 20%', points: 60 },
        ],
        source: 'Data Collected from MBSc',
      },
    ],
  },
};

// Keys in display order for the Metrics section tabs
export const METRICS_ORDER = ['Entity','iGV','oGV','iGTa','iGTe','oGTa','MKT','BD','PM','FnL','Expansions'];
