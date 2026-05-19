// Global portfolio ordering (used across all sections)
export const PORTFOLIO_ORDER = ['Entity','iGV','oGV','iGTa','iGTe','oGTa','MKT','BD','PM','FnL','EXP'];

// Dashboard portfolios (no Entity — shown in sticky cols; no oGTe)
export const PORTFOLIOS = [
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

// Tier structure tabs (Entity + all 10 portfolios tracked in tiers sheet, no EXP, no oGTe)
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
];

export const TIERS = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5', 'Tier X'];

export const TIER_META = {
  'Tier 1': { color: '#f59e0b', bg: '#fef9ee', label: 'National Titans' },
  'Tier 2': { color: '#94a3b8', bg: '#f8fafc', label: 'Rising Stars' },
  'Tier 3': { color: '#cd7f32', bg: '#fdf6ee', label: 'Challengers' },
  'Tier 4': { color: '#7552CC', bg: '#f5f3ff', label: 'Builders' },
  'Tier 5': { color: '#0CB9C1', bg: '#f0fafb', label: 'Explorers' },
  'Tier X': { color: '#8b9ab0', bg: '#f8fafc', label: 'Below Minimum' },
};

export const TIERS_BY_PORTFOLIO = {
  // ── Overall LC standing ──────────────────────────────────────────────────
  Entity: {
    'Tier 1': ['AIESEC in Hyderabad', 'AIESEC in M.A.H.E.', 'AIESEC in Chandigarh', 'AIESEC in Mumbai'],
    'Tier 2': ['AIESEC in Jaipur', 'AIESEC in Ludhiana', 'AIESEC in Bengaluru', 'AIESEC in Delhi IIT', 'AIESEC in Pune'],
    'Tier 3': ['AIESEC in Ahmedabad', 'AIESEC in Jalandhar', 'AIESEC in Chennai', 'AIESEC in Visakhapatnam', 'AIESEC in Delhi University'],
    'Tier 4': ['AIESEC in Kolkata', 'AIESEC in Navi Mumbai', 'AIESEC in Indore', 'AIESEC in Surat', 'AIESEC in Patiala'],
    'Tier 5': [],
    'Tier X': ['AIESEC in Amravati', 'AIESEC in Baroda', 'AIESEC in Bhopal', 'AIESEC in Dehradun', 'AIESEC in Nashik', 'AIESEC in Noida', 'AIESEC in VVN'],
  },
  // ── iGV ─────────────────────────────────────────────────────────────────
  iGV: {
    'Tier 1': ['AIESEC in Hyderabad'],
    'Tier 2': ['AIESEC in Ludhiana', 'AIESEC in Jaipur', 'AIESEC in Chandigarh', 'AIESEC in Mumbai', 'AIESEC in M.A.H.E.'],
    'Tier 3': ['AIESEC in Delhi University', 'AIESEC in Ahmedabad', 'AIESEC in Delhi IIT', 'AIESEC in Pune'],
    'Tier 4': ['AIESEC in Bengaluru', 'AIESEC in Chennai', 'AIESEC in Visakhapatnam', 'AIESEC in Navi Mumbai'],
    'Tier 5': ['AIESEC in Jalandhar', 'AIESEC in Kolkata', 'AIESEC in Patiala'],
    'Tier X': ['AIESEC in Bhopal', 'AIESEC in Dehradun'],
  },
  // ── oGV ─────────────────────────────────────────────────────────────────
  oGV: {
    'Tier 1': ['AIESEC in Mumbai', 'AIESEC in Bengaluru'],
    'Tier 2': ['AIESEC in Jalandhar', 'AIESEC in Pune', 'AIESEC in Hyderabad', 'AIESEC in Visakhapatnam', 'AIESEC in Delhi IIT'],
    'Tier 3': ['AIESEC in VVN', 'AIESEC in Surat', 'AIESEC in M.A.H.E.', 'AIESEC in Ahmedabad', 'AIESEC in Chandigarh'],
    'Tier 4': ['AIESEC in Indore', 'AIESEC in Navi Mumbai', 'AIESEC in Chennai', 'AIESEC in Delhi University'],
    'Tier 5': ['AIESEC in Jaipur', 'AIESEC in Kolkata', 'AIESEC in Ludhiana', 'AIESEC in Patiala'],
    'Tier X': ['AIESEC in Dehradun', 'AIESEC in Amravati', 'AIESEC in Noida', 'AIESEC in Bhopal', 'AIESEC in Nashik', 'AIESEC in Baroda'],
  },
  // ── iGTa ────────────────────────────────────────────────────────────────
  iGTa: {
    'Tier 1': ['AIESEC in M.A.H.E.'],
    'Tier 2': ['AIESEC in Chandigarh', 'AIESEC in Hyderabad', 'AIESEC in Mumbai'],
    'Tier 3': ['AIESEC in Delhi IIT', 'AIESEC in Chennai', 'AIESEC in Navi Mumbai', 'AIESEC in Jaipur', 'AIESEC in Delhi University'],
    'Tier 4': ['AIESEC in Kolkata', 'AIESEC in Bengaluru', 'AIESEC in Pune', 'AIESEC in Jalandhar', 'AIESEC in Visakhapatnam'],
    'Tier 5': ['AIESEC in Indore', 'AIESEC in VVN', 'AIESEC in Ahmedabad', 'AIESEC in Surat'],
    'Tier X': ['AIESEC in Noida', 'AIESEC in Baroda'],
  },
  // ── iGTe ────────────────────────────────────────────────────────────────
  iGTe: {
    'Tier 1': ['AIESEC in Chandigarh'],
    'Tier 2': ['AIESEC in Visakhapatnam', 'AIESEC in Hyderabad', 'AIESEC in Ahmedabad'],
    'Tier 3': ['AIESEC in Delhi IIT', 'AIESEC in Indore', 'AIESEC in Bengaluru'],
    'Tier 4': ['AIESEC in Jalandhar', 'AIESEC in Delhi University', 'AIESEC in Pune', 'AIESEC in Ludhiana'],
    'Tier 5': ['AIESEC in Mumbai', 'AIESEC in Chennai', 'AIESEC in Patiala'],
    'Tier X': [],
  },
  // ── oGTa ────────────────────────────────────────────────────────────────
  oGTa: {
    'Tier 1': ['AIESEC in Kolkata', 'AIESEC in Chennai'],
    'Tier 2': ['AIESEC in Mumbai', 'AIESEC in Ahmedabad', 'AIESEC in Hyderabad'],
    'Tier 3': ['AIESEC in Bengaluru', 'AIESEC in Jalandhar', 'AIESEC in Delhi IIT'],
    'Tier 4': ['AIESEC in Chandigarh', 'AIESEC in VVN', 'AIESEC in Jaipur'],
    'Tier 5': ['AIESEC in Visakhapatnam', 'AIESEC in Indore', 'AIESEC in Surat'],
    'Tier X': ['AIESEC in Amravati', 'AIESEC in Noida', 'AIESEC in Bhopal', 'AIESEC in Nashik'],
  },
  // ── MKT ─────────────────────────────────────────────────────────────────
  MKT: {
    'Tier 1': ['AIESEC in Hyderabad', 'AIESEC in Mumbai', 'AIESEC in Pune'],
    'Tier 2': ['AIESEC in Delhi IIT', 'AIESEC in Bengaluru', 'AIESEC in Jalandhar', 'AIESEC in Ahmedabad', 'AIESEC in M.A.H.E.'],
    'Tier 3': ['AIESEC in Visakhapatnam', 'AIESEC in Ludhiana', 'AIESEC in Chandigarh', 'AIESEC in VVN', 'AIESEC in Chennai'],
    'Tier 4': ['AIESEC in Navi Mumbai', 'AIESEC in Patiala', 'AIESEC in Kolkata', 'AIESEC in Delhi University'],
    'Tier 5': ['AIESEC in Surat', 'AIESEC in Indore', 'AIESEC in Jaipur'],
    'Tier X': ['AIESEC in Amravati', 'AIESEC in Noida', 'AIESEC in Bhopal', 'AIESEC in Nashik', 'AIESEC in Baroda', 'AIESEC in Dehradun'],
  },
  // ── BD ──────────────────────────────────────────────────────────────────
  BD: {
    'Tier 1': ['AIESEC in Hyderabad', 'AIESEC in Bengaluru', 'AIESEC in Visakhapatnam'],
    'Tier 2': ['AIESEC in Chandigarh', 'AIESEC in Ludhiana', 'AIESEC in Delhi IIT', 'AIESEC in Pune'],
    'Tier 3': ['AIESEC in Navi Mumbai', 'AIESEC in Mumbai', 'AIESEC in Ahmedabad', 'AIESEC in VVN'],
    'Tier 4': ['AIESEC in Delhi University', 'AIESEC in Surat', 'AIESEC in Jalandhar', 'AIESEC in M.A.H.E.', 'AIESEC in Chennai'],
    'Tier 5': ['AIESEC in Indore', 'AIESEC in Jaipur', 'AIESEC in Kolkata', 'AIESEC in Patiala'],
    'Tier X': ['AIESEC in Amravati', 'AIESEC in Bhopal', 'AIESEC in Dehradun', 'AIESEC in Nashik', 'AIESEC in Noida', 'AIESEC in Baroda'],
  },
  // ── PM ──────────────────────────────────────────────────────────────────
  PM: {
    'Tier 1': ['AIESEC in Bengaluru', 'AIESEC in Chandigarh', 'AIESEC in Hyderabad', 'AIESEC in Jalandhar'],
    'Tier 2': ['AIESEC in Visakhapatnam', 'AIESEC in Pune', 'AIESEC in Hyderabad', 'AIESEC in M.A.H.E.'],
    'Tier 3': ['AIESEC in Delhi University', 'AIESEC in Delhi IIT', 'AIESEC in Ahmedabad', 'AIESEC in VVN'],
    'Tier 4': ['AIESEC in Chennai', 'AIESEC in Indore', 'AIESEC in Navi Mumbai', 'AIESEC in Ludhiana'],
    'Tier 5': [],
    'Tier X': ['AIESEC in Noida', 'AIESEC in Bhopal', 'AIESEC in Amravati'],
  },
  // ── FnL ─────────────────────────────────────────────────────────────────
  FnL: {
    'Tier 1': ['AIESEC in Ludhiana', 'AIESEC in Pune', 'AIESEC in Indore', 'AIESEC in Navi Mumbai', 'AIESEC in Ahmedabad'],
    'Tier 2': ['AIESEC in Mumbai', 'AIESEC in Visakhapatnam', 'AIESEC in Bengaluru', 'AIESEC in Jalandhar', 'AIESEC in Delhi University'],
    'Tier 3': ['AIESEC in Delhi IIT', 'AIESEC in Patiala', 'AIESEC in Surat', 'AIESEC in Chennai'],
    'Tier 4': ['AIESEC in Hyderabad', 'AIESEC in Kolkata', 'AIESEC in Jaipur', 'AIESEC in Chandigarh'],
    'Tier 5': [],
    'Tier X': [],
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

// All LCs ordered by entity tier
export const ALL_LCS = [
  // Tier 1
  'AIESEC in Hyderabad', 'AIESEC in M.A.H.E.', 'AIESEC in Chandigarh', 'AIESEC in Mumbai',
  // Tier 2
  'AIESEC in Jaipur', 'AIESEC in Ludhiana', 'AIESEC in Bengaluru', 'AIESEC in Delhi IIT', 'AIESEC in Pune',
  // Tier 3
  'AIESEC in Ahmedabad', 'AIESEC in Jalandhar', 'AIESEC in Chennai', 'AIESEC in Visakhapatnam', 'AIESEC in Delhi University',
  // Tier 4
  'AIESEC in Kolkata', 'AIESEC in Navi Mumbai', 'AIESEC in Indore', 'AIESEC in Surat', 'AIESEC in Patiala',
  // Tier X
  'AIESEC in VVN', 'AIESEC in Amravati', 'AIESEC in Bhopal', 'AIESEC in Nashik',
  'AIESEC in Baroda', 'AIESEC in Noida', 'AIESEC in Dehradun',
  // Untiered (appear in dashboards)
  'AIESEC in Jodhpur', 'AIESEC in Coimbatore', 'AIESEC in Nagpur', 'AIESEC in Nellore',
  'AIESEC in Lucknow', 'AIESEC in Udaipur', 'AIESEC in South Mumbai', 'AIESEC in VIT',
];

// Dashboard placeholder data (all points = 1; real data updated via backend)
const PORTFOLIO_KEYS = ['iGV','oGV','iGTa','iGTe','oGTa','MKT','BD','PM','FnL','EXP'];

export const DASHBOARD_DATA = ALL_LCS.map((lc, idx) => {
  const portfolios = {};
  PORTFOLIO_KEYS.forEach((key, i) => {
    portfolios[key] = { rank: i + 1, points: 1 };
  });
  return {
    lc,
    entityRank: idx + 1,
    entityTier: ENTITY_TIERS[lc] || '—',
    totalPoints: 1,
    portfolios,
  };
});

export const MONTHS = [
  'October 2025',
  'November 2025',
  'December 2025',
  'January 2026',
  'February 2026',
  'March 2026',
];

// Returns recognised LCs per tier for a given portfolio + month (placeholder: first 3 LCs per tier)
export function getRecognitionData(portfolioKey, _month) {
  const tierMap = TIERS_BY_PORTFOLIO[portfolioKey] || {};
  const result = {};
  TIERS.forEach((tier) => {
    result[tier] = (tierMap[tier] || []).slice(0, 3);
  });
  return result;
}

// ── RnR Metrics (global order: Entity, iGV, oGV, iGTa, iGTe, oGTa, MKT, BD, PM, FnL, EXP) ──

export const RNR_METRICS = {
  Entity: {
    color: '#0f172a',
    parameters: [
      { parameter: 'APDs',                            scale: 'Every APD = 60 pts',              maxPoints: 60,  weightage: '15%' },
      { parameter: 'REs',                             scale: 'Every RE = 100 pts',              maxPoints: 100, weightage: '30%' },
      { parameter: 'BD Revenue Raised',               scale: 'Every ₹10k = 10 pts',            maxPoints: null,weightage: '10%' },
      { parameter: 'Operation BvA',                   scale: '85%–110% → 75–84% → 60–74%',     maxPoints: 100, weightage: '10%' },
      { parameter: 'People Per Position (MB, EB, LCP)', scale: '3+ per position → 2 per position', maxPoints: 100, weightage: '15%' },
      { parameter: 'LPS Score',                       scale: '9.5–10 → 9.0–9.4 → 8.5–8.9',    maxPoints: 60,  weightage: '10%' },
      { parameter: 'National Conference Attendance',  scale: '30%+ → 20–30% → 10–20%',         maxPoints: 100, weightage: '10%' },
    ],
  },
  iGV: {
    color: '#f85a40',
    parameters: [
      { parameter: 'APD (Realization Approval)', scale: 'Every 1 APD = 80 pts',         maxPoints: 80,  weightage: '20%' },
      { parameter: 'RE (Realisation)',           scale: 'Every 1 RE = 120 pts',         maxPoints: 120, weightage: '40%' },
      { parameter: 'FIN-CO Rate',               scale: '90% & above → 85–90%',         maxPoints: 100, weightage: '10%' },
      { parameter: 'CO (Completion)',            scale: 'Every 1 CO = 100 pts',         maxPoints: 100, weightage: '20%' },
      { parameter: 'Experience Quality / NPS',  scale: '9.5–10 → 9.0–9.4 (tiered)',   maxPoints: 60,  weightage: '10%' },
    ],
  },
  oGV: {
    color: '#f85a40',
    parameters: [
      { parameter: 'APL-APD Ratio', scale: '75% & above → 60–74%',    maxPoints: 60,  weightage: '10%' },
      { parameter: 'APD',           scale: 'Every 1 APD = 80 pts',    maxPoints: 80,  weightage: '20%' },
      { parameter: 'RE',            scale: 'Every 1 RE = 120 pts',    maxPoints: 120, weightage: '40%' },
      { parameter: 'FIN-CO Rate',   scale: '90% & above → 85–90%',   maxPoints: 100, weightage: '10%' },
      { parameter: 'CO',            scale: 'Every 1 CO = 100 pts',   maxPoints: 100, weightage: '20%' },
    ],
  },
  iGTa: {
    color: '#0CB9C1',
    parameters: [
      { parameter: 'APL-APD Ratio', scale: '6% & above → 5%–5.9%',  maxPoints: 60,  weightage: '10%' },
      { parameter: 'APD',           scale: 'Every 1 APD = 80 pts',  maxPoints: 80,  weightage: '20%' },
      { parameter: 'RE',            scale: 'Every 1 RE = 120 pts',  maxPoints: 120, weightage: '40%' },
      { parameter: 'FIN-CO Rate',   scale: '90% & above → 85–90%', maxPoints: 100, weightage: '10%' },
      { parameter: 'CO',            scale: 'Every 1 CO = 100 pts', maxPoints: 100, weightage: '20%' },
    ],
  },
  iGTe: {
    color: '#0CB9C1',
    parameters: [
      { parameter: 'APL-APD Ratio', scale: '6% & above → 5%–5.9%',  maxPoints: 60,  weightage: '10%' },
      { parameter: 'APD',           scale: 'Every 1 APD = 80 pts',  maxPoints: 80,  weightage: '20%' },
      { parameter: 'RE',            scale: 'Every 1 RE = 120 pts',  maxPoints: 120, weightage: '40%' },
      { parameter: 'FIN-CO Rate',   scale: '90% & above → 85–90%', maxPoints: 100, weightage: '10%' },
      { parameter: 'CO',            scale: 'Every 1 CO = 100 pts', maxPoints: 100, weightage: '20%' },
    ],
  },
  oGTa: {
    color: '#0CB9C1',
    parameters: [
      { parameter: 'APL-APD Ratio', scale: '6% & above → 5%–5.9%',   maxPoints: 60,  weightage: '10%' },
      { parameter: 'APD',           scale: 'Every 1 APD = 80 pts',   maxPoints: 80,  weightage: '20%' },
      { parameter: 'RE',            scale: 'Every 1 RE = 120 pts',   maxPoints: 120, weightage: '40%' },
      { parameter: 'FIN-CO Rate',   scale: '90% & above → 85–90%',  maxPoints: 100, weightage: '10%' },
      { parameter: 'CO',            scale: 'Every 1 CO = 100 pts',  maxPoints: 100, weightage: '20%' },
    ],
  },
  MKT: {
    color: '#037ef3',
    parameters: [
      { parameter: 'SU-APD% [oGV]',           scale: '4% & Above → 1.5%–4% (tiered)',    maxPoints: 100, weightage: '20%' },
      { parameter: 'SU-APD% [oGTa]',          scale: '2.5% & Above → 0.1%–2.5% (tiered)', maxPoints: 100, weightage: '15%' },
      { parameter: 'SU (Sign Ups)',            scale: '500 & Above → 100–200 (tiered)',    maxPoints: 100, weightage: '20%' },
      { parameter: 'UR (Unique Referrals)',    scale: '1 UR = 100 pts',                   maxPoints: 100, weightage: '15%' },
      { parameter: 'Content Creation',         scale: 'Short: 30 | Long: 40 | Blog: 15', maxPoints: 40,  weightage: '15%' },
      { parameter: 'Likes (National Pages)',   scale: '550+ → 250–550 (tiered)',          maxPoints: 50,  weightage: '15%' },
    ],
  },
  BD: {
    color: '#f59e0b',
    parameters: [
      { parameter: 'Profit Generated',  scale: 'Every ₹10k = 10 pts',          maxPoints: null, weightage: '50%' },
      { parameter: 'Youth Engaged',     scale: '500+ → 400+ → 300+ (tiered)',  maxPoints: 100,  weightage: '20%' },
      { parameter: 'Revenue Generated', scale: 'Every ₹10k = 10 pts',          maxPoints: null, weightage: '30%' },
    ],
  },
  PM: {
    color: '#7552CC',
    parameters: [
      { parameter: 'Membership Recruitment',   scale: '20+ Members → tiered bands',       maxPoints: 100, weightage: '25%' },
      { parameter: 'Membership Retention',     scale: '80%+ retention rate',              maxPoints: 100, weightage: '30%' },
      { parameter: 'Members per Position',     scale: '3+ per position (MB, EB, LCP)',   maxPoints: 100, weightage: '25%' },
      { parameter: 'LPS Score',               scale: '9.5–10 → 8.5–9.4 (tiered)',       maxPoints: 60,  weightage: '15%' },
      { parameter: 'Audit Compliance',         scale: 'First go green = 30 pts',         maxPoints: 30,  weightage: '5%' },
    ],
  },
  FnL: {
    color: '#00c16e',
    parameters: [
      { parameter: 'Operation BvA',                scale: '85%–110% → 75%–84% → 60%–74%',   maxPoints: 100, weightage: '20%' },
      { parameter: 'F&L Standards Implementation', scale: '90% & Above → 85–90% → 80–85%',  maxPoints: 100, weightage: '30%' },
      { parameter: 'Cash Runway',                  scale: 'Above 9 months → 6–9 → 3–6',     maxPoints: 100, weightage: '25%' },
      { parameter: 'Recon Clearance',              scale: '90% & above → 70–90% → 50–70%',  maxPoints: 100, weightage: '20%' },
      { parameter: 'Audit Compliance',             scale: 'First go green = 50 pts',          maxPoints: 50,  weightage: '5%' },
    ],
  },
  Expansions: {
    color: '#8b9ab0',
    parameters: [
      { parameter: 'APDs',                           scale: 'Every 1 APD = 80 pts',     maxPoints: 80,  weightage: '25%' },
      { parameter: 'REs',                            scale: 'Every 1 RE = 120 pts',     maxPoints: 120, weightage: '45%' },
      { parameter: 'BD Revenue Generated',           scale: 'Every ₹10K = 10 pts',      maxPoints: null,weightage: '20%' },
      { parameter: 'National Conference Attendance', scale: '30%+ → 20–30% → 10–20%',  maxPoints: 100, weightage: '10%' },
    ],
  },
};

// Keys in display order for the Metrics section tabs
export const METRICS_ORDER = ['Entity','iGV','oGV','iGTa','iGTe','oGTa','MKT','BD','PM','FnL','Expansions'];
