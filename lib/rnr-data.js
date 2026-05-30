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
  'Tier 1': { color: '#f59e0b', bg: '#fef9ee', label: '' },
  'Tier 2': { color: '#94a3b8', bg: '#f8fafc', label: '' },
  'Tier 3': { color: '#cd7f32', bg: '#fdf6ee', label: '' },
  'Tier 4': { color: '#e11d48', bg: '#fff1f4', label: '' },
  'Tier 5': { color: '#10b981', bg: '#f0fdf8', label: '' },
  'Tier X': { color: '#8b9ab0', bg: '#f8fafc', label: 'Expansions' },
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
    'Tier 2': ['AIESEC in Visakhapatnam', 'AIESEC in Pune', 'AIESEC in M.A.H.E.'],
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

// ── Monthly points data ──────────────────────────────────────────────────────
// Structure: { monthKey → { portfolioKey → { lcName → points } } }
// Entity points are under key 'entity' (lowercase). All other keys match PORTFOLIOS keys.
// To add a new month: add a new top-level key here and add it to MONTHS_LIST below.
export const MONTHLY_POINTS = {
  february: {
    entity: {
      'AIESEC in Hyderabad': 2370, 'AIESEC in Chandigarh': 1690, 'AIESEC in Mumbai': 1540,
      'AIESEC in Pune': 1240, 'AIESEC in M.A.H.E.': 780, 'AIESEC in Delhi University': 690,
      'AIESEC in Bengaluru': 640, 'AIESEC in Jalandhar': 640, 'AIESEC in Ludhiana': 500,
      'AIESEC in Visakhapatnam': 480, 'AIESEC in Delhi IIT': 400, 'AIESEC in VVN': 380,
      'AIESEC in Jaipur': 360, 'AIESEC in Navi Mumbai': 290, 'AIESEC in Ahmedabad': 270,
      'AIESEC in Indore': 160, 'AIESEC in Kolkata': 160, 'AIESEC in Chennai': 130,
      'AIESEC in Patiala': 60, 'AIESEC in Surat': 60, 'AIESEC in Amravati': 0,
      'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Nashik': 0, 'AIESEC in Noida': 0,
    },
    iGV: {
      'AIESEC in Hyderabad': 2380, 'AIESEC in Mumbai': 1320, 'AIESEC in Chandigarh': 640,
      'AIESEC in Ludhiana': 640, 'AIESEC in Delhi University': 500, 'AIESEC in Pune': 440,
      'AIESEC in Jaipur': 240, 'AIESEC in M.A.H.E.': 240, 'AIESEC in Ahmedabad': 200,
      'AIESEC in Navi Mumbai': 120, 'AIESEC in Delhi IIT': 80, 'AIESEC in Visakhapatnam': 80,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bengaluru': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Chennai': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Indore': 0, 'AIESEC in Jalandhar': 0, 'AIESEC in Kolkata': 0,
      'AIESEC in Nashik': 0, 'AIESEC in Noida': 0, 'AIESEC in Patiala': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    oGV: {
      'AIESEC in Pune': 1020, 'AIESEC in Bengaluru': 720, 'AIESEC in Jalandhar': 660,
      'AIESEC in Mumbai': 660, 'AIESEC in VVN': 560, 'AIESEC in M.A.H.E.': 540,
      'AIESEC in Hyderabad': 460, 'AIESEC in Visakhapatnam': 440, 'AIESEC in Dehradun': 400,
      'AIESEC in Delhi University': 360, 'AIESEC in Chennai': 340, 'AIESEC in Chandigarh': 280,
      'AIESEC in Indore': 260, 'AIESEC in Navi Mumbai': 220, 'AIESEC in Jaipur': 200,
      'AIESEC in Surat': 140, 'AIESEC in Delhi IIT': 80, 'AIESEC in Ahmedabad': 0,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0,
      'AIESEC in Kolkata': 0, 'AIESEC in Ludhiana': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0,
    },
    iGTa: {
      'AIESEC in Chandigarh': 960, 'AIESEC in Pune': 440, 'AIESEC in Delhi IIT': 360,
      'AIESEC in M.A.H.E.': 320, 'AIESEC in Delhi University': 300, 'AIESEC in Hyderabad': 280,
      'AIESEC in Jalandhar': 240, 'AIESEC in Jaipur': 160, 'AIESEC in Bengaluru': 80,
      'AIESEC in Chennai': 80, 'AIESEC in Kolkata': 80, 'AIESEC in Ahmedabad': 0,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Indore': 0, 'AIESEC in Ludhiana': 0,
      'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    iGTe: {
      'AIESEC in Chandigarh': 240, 'AIESEC in Jalandhar': 200, 'AIESEC in Bengaluru': 80,
      'AIESEC in Patiala': 80, 'AIESEC in Ahmedabad': 0, 'AIESEC in Amravati': 0,
      'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0, 'AIESEC in Chennai': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Delhi IIT': 0, 'AIESEC in Delhi University': 0,
      'AIESEC in Hyderabad': 0, 'AIESEC in Indore': 0, 'AIESEC in Jaipur': 0,
      'AIESEC in Kolkata': 0, 'AIESEC in Ludhiana': 0, 'AIESEC in M.A.H.E.': 0,
      'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Pune': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    oGTa: {
      'AIESEC in Kolkata': 320, 'AIESEC in Delhi IIT': 200, 'AIESEC in VVN': 120,
      'AIESEC in Chennai': 100, 'AIESEC in Hyderabad': 80, 'AIESEC in Jaipur': 80,
      'AIESEC in Ahmedabad': 0, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bengaluru': 0, 'AIESEC in Bhopal': 0, 'AIESEC in Chandigarh': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Delhi University': 0, 'AIESEC in Indore': 0,
      'AIESEC in Jalandhar': 0, 'AIESEC in Ludhiana': 0, 'AIESEC in M.A.H.E.': 0,
      'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Pune': 0,
      'AIESEC in Surat': 0, 'AIESEC in Visakhapatnam': 0,
    },
    MKT: {
      'AIESEC in Hyderabad': 250, 'AIESEC in Delhi IIT': 230, 'AIESEC in Pune': 170,
      'AIESEC in Bengaluru': 160, 'AIESEC in Chandigarh': 160, 'AIESEC in Jaipur': 160,
      'AIESEC in Jalandhar': 160, 'AIESEC in Navi Mumbai': 160, 'AIESEC in Visakhapatnam': 160,
      'AIESEC in Delhi University': 140, 'AIESEC in Indore': 100, 'AIESEC in M.A.H.E.': 100,
      'AIESEC in Surat': 100, 'AIESEC in VVN': 100, 'AIESEC in Mumbai': 80,
      'AIESEC in Chennai': 70, 'AIESEC in Ahmedabad': 60, 'AIESEC in Amravati': 60,
      'AIESEC in Noida': 60, 'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Kolkata': 0, 'AIESEC in Ludhiana': 0,
      'AIESEC in Nashik': 0, 'AIESEC in Patiala': 0,
    },
    BD: {
      'AIESEC in Visakhapatnam': 240, 'AIESEC in Delhi University': 60, 'AIESEC in Chandigarh': 40,
      'AIESEC in Hyderabad': 40, 'AIESEC in VVN': 40, 'AIESEC in Ahmedabad': 10,
      'AIESEC in Chennai': 10, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bengaluru': 0, 'AIESEC in Bhopal': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Delhi IIT': 0, 'AIESEC in Indore': 0, 'AIESEC in Jaipur': 0,
      'AIESEC in Jalandhar': 0, 'AIESEC in Kolkata': 0, 'AIESEC in Ludhiana': 0,
      'AIESEC in M.A.H.E.': 0, 'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Navi Mumbai': 0, 'AIESEC in Noida': 0, 'AIESEC in Patiala': 0,
      'AIESEC in Pune': 0, 'AIESEC in Surat': 0,
    },
    PM: {
      'AIESEC in Hyderabad': 330, 'AIESEC in Jalandhar': 250, 'AIESEC in Chandigarh': 245,
      'AIESEC in Chennai': 195, 'AIESEC in Bengaluru': 160, 'AIESEC in Pune': 140,
      'AIESEC in Delhi University': 130, 'AIESEC in Navi Mumbai': 110, 'AIESEC in Kolkata': 80,
      'AIESEC in Visakhapatnam': 70, 'AIESEC in VVN': 55, 'AIESEC in Ahmedabad': 50,
      'AIESEC in Indore': 40, 'AIESEC in Jaipur': 40, 'AIESEC in Mumbai': 40,
      'AIESEC in M.A.H.E.': 15, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Dehradun': 0, 'AIESEC in Delhi IIT': 0,
      'AIESEC in Ludhiana': 0, 'AIESEC in Nashik': 0, 'AIESEC in Noida': 0,
      'AIESEC in Patiala': 0, 'AIESEC in Surat': 0,
    },
    FnL: {
      'AIESEC in Mumbai': 250, 'AIESEC in Indore': 200, 'AIESEC in Jalandhar': 160,
      'AIESEC in Delhi University': 150, 'AIESEC in Pune': 150, 'AIESEC in Bengaluru': 130,
      'AIESEC in Ahmedabad': 100, 'AIESEC in Chennai': 80, 'AIESEC in Visakhapatnam': 60,
      'AIESEC in Hyderabad': 50, 'AIESEC in M.A.H.E.': 50, 'AIESEC in Patiala': 50,
      'AIESEC in Surat': 50, 'AIESEC in Delhi IIT': 30, 'AIESEC in Ludhiana': 30,
      'AIESEC in Navi Mumbai': 30, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Chandigarh': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Jaipur': 0, 'AIESEC in Kolkata': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Noida': 0, 'AIESEC in VVN': 0,
    },
    EXP: {
      'AIESEC in VVN': 40, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Dehradun': 0, 'AIESEC in Nashik': 0, 'AIESEC in Noida': 0,
    },
  },

  march: {
    entity: {
      'AIESEC in Hyderabad': 1910, 'AIESEC in Bengaluru': 1470, 'AIESEC in Delhi IIT': 940,
      'AIESEC in Mumbai': 900, 'AIESEC in Chandigarh': 860, 'AIESEC in M.A.H.E.': 780,
      'AIESEC in Chennai': 700, 'AIESEC in Jalandhar': 490, 'AIESEC in Kolkata': 460,
      'AIESEC in Jaipur': 370, 'AIESEC in Pune': 360, 'AIESEC in Ludhiana': 350,
      'AIESEC in Ahmedabad': 320, 'AIESEC in Amravati': 320, 'AIESEC in Visakhapatnam': 320,
      'AIESEC in Bhopal': 250, 'AIESEC in Patiala': 200, 'AIESEC in VVN': 190,
      'AIESEC in Indore': 160, 'AIESEC in Baroda': 120, 'AIESEC in Dehradun': 120,
      'AIESEC in Delhi University': 120, 'AIESEC in Nashik': 120, 'AIESEC in Noida': 120,
      'AIESEC in Navi Mumbai': 100, 'AIESEC in Surat': 30,
    },
    iGV: {
      'AIESEC in Hyderabad': 2600, 'AIESEC in Mumbai': 840, 'AIESEC in Delhi IIT': 480,
      'AIESEC in Chandigarh': 320, 'AIESEC in Jaipur': 280, 'AIESEC in Ahmedabad': 200,
      'AIESEC in Bengaluru': 160, 'AIESEC in Bhopal': 80, 'AIESEC in M.A.H.E.': 80,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Chennai': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Delhi University': 0, 'AIESEC in Indore': 0,
      'AIESEC in Jalandhar': 0, 'AIESEC in Kolkata': 0, 'AIESEC in Ludhiana': 0,
      'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0, 'AIESEC in Noida': 0,
      'AIESEC in Patiala': 0, 'AIESEC in Pune': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    oGV: {
      'AIESEC in Mumbai': 720, 'AIESEC in Bengaluru': 520, 'AIESEC in M.A.H.E.': 520,
      'AIESEC in Hyderabad': 420, 'AIESEC in Delhi IIT': 400, 'AIESEC in Pune': 320,
      'AIESEC in Jalandhar': 280, 'AIESEC in Ludhiana': 240, 'AIESEC in Indore': 200,
      'AIESEC in Amravati': 160, 'AIESEC in Delhi University': 80, 'AIESEC in Kolkata': 80,
      'AIESEC in Ahmedabad': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0,
      'AIESEC in Chandigarh': 0, 'AIESEC in Chennai': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Jaipur': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    iGTa: {
      'AIESEC in Chandigarh': 600, 'AIESEC in Chennai': 600, 'AIESEC in Delhi IIT': 400,
      'AIESEC in M.A.H.E.': 360, 'AIESEC in Pune': 200, 'AIESEC in Bengaluru': 160,
      'AIESEC in Jaipur': 160, 'AIESEC in Jalandhar': 80, 'AIESEC in Kolkata': 80,
      'AIESEC in Mumbai': 80, 'AIESEC in Ahmedabad': 0, 'AIESEC in Amravati': 0,
      'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Delhi University': 0, 'AIESEC in Hyderabad': 0, 'AIESEC in Indore': 0,
      'AIESEC in Ludhiana': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    iGTe: {
      'AIESEC in Bengaluru': 400, 'AIESEC in Hyderabad': 200, 'AIESEC in Delhi IIT': 120,
      'AIESEC in Chandigarh': 80, 'AIESEC in Delhi University': 80, 'AIESEC in Indore': 80,
      'AIESEC in Ahmedabad': 0, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Chennai': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Jaipur': 0, 'AIESEC in Jalandhar': 0, 'AIESEC in Kolkata': 0,
      'AIESEC in Ludhiana': 0, 'AIESEC in M.A.H.E.': 0, 'AIESEC in Mumbai': 0,
      'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0, 'AIESEC in Noida': 0,
      'AIESEC in Patiala': 0, 'AIESEC in Pune': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    oGTa: {
      'AIESEC in Kolkata': 480, 'AIESEC in Ahmedabad': 80, 'AIESEC in Visakhapatnam': 80,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bengaluru': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Chandigarh': 0, 'AIESEC in Chennai': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Delhi IIT': 0, 'AIESEC in Delhi University': 0,
      'AIESEC in Hyderabad': 0, 'AIESEC in Indore': 0, 'AIESEC in Jaipur': 0,
      'AIESEC in Jalandhar': 0, 'AIESEC in Ludhiana': 0, 'AIESEC in M.A.H.E.': 0,
      'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Pune': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    MKT: {
      'AIESEC in Kolkata': 200, 'AIESEC in Hyderabad': 160, 'AIESEC in Jalandhar': 150,
      'AIESEC in Bengaluru': 140, 'AIESEC in Chandigarh': 120, 'AIESEC in Ahmedabad': 100,
      'AIESEC in Amravati': 100, 'AIESEC in Ludhiana': 100, 'AIESEC in Visakhapatnam': 100,
      'AIESEC in Mumbai': 90, 'AIESEC in Delhi IIT': 80, 'AIESEC in Bhopal': 60,
      'AIESEC in Chennai': 60, 'AIESEC in Delhi University': 60, 'AIESEC in Indore': 60,
      'AIESEC in Jaipur': 60, 'AIESEC in Noida': 60, 'AIESEC in Pune': 60,
      'AIESEC in Baroda': 0, 'AIESEC in Dehradun': 0, 'AIESEC in M.A.H.E.': 0,
      'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0, 'AIESEC in Patiala': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    BD: {
      'AIESEC in Bengaluru': 990, 'AIESEC in Visakhapatnam': 250, 'AIESEC in Hyderabad': 30,
      'AIESEC in Kolkata': 20, 'AIESEC in Pune': 10, 'AIESEC in Ahmedabad': 0,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0,
      'AIESEC in Chandigarh': 0, 'AIESEC in Chennai': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Delhi IIT': 0, 'AIESEC in Delhi University': 0, 'AIESEC in Indore': 0,
      'AIESEC in Jaipur': 0, 'AIESEC in Jalandhar': 0, 'AIESEC in Ludhiana': 0,
      'AIESEC in M.A.H.E.': 0, 'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Navi Mumbai': 0, 'AIESEC in Noida': 0, 'AIESEC in Patiala': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    PM: {
      'AIESEC in Bengaluru': 200, 'AIESEC in Hyderabad': 180, 'AIESEC in Jalandhar': 155,
      'AIESEC in Amravati': 125, 'AIESEC in M.A.H.E.': 95, 'AIESEC in Bhopal': 70,
      'AIESEC in Chennai': 50, 'AIESEC in Patiala': 50, 'AIESEC in Surat': 45,
      'AIESEC in Kolkata': 40, 'AIESEC in Visakhapatnam': 30, 'AIESEC in Ludhiana': 30,
      'AIESEC in Pune': 30, 'AIESEC in VVN': 30, 'AIESEC in Ahmedabad': 0,
      'AIESEC in Baroda': 0, 'AIESEC in Chandigarh': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Delhi IIT': 0, 'AIESEC in Delhi University': 0, 'AIESEC in Indore': 0,
      'AIESEC in Jaipur': 0, 'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Navi Mumbai': 0, 'AIESEC in Noida': 0,
    },
    FnL: {
      'AIESEC in Visakhapatnam': 330, 'AIESEC in Hyderabad': 250, 'AIESEC in Ahmedabad': 200,
      'AIESEC in Bengaluru': 200, 'AIESEC in Chandigarh': 200, 'AIESEC in Pune': 200,
      'AIESEC in Jalandhar': 170, 'AIESEC in Ludhiana': 150, 'AIESEC in Mumbai': 150,
      'AIESEC in Chennai': 100, 'AIESEC in Delhi University': 100, 'AIESEC in Indore': 100,
      'AIESEC in Kolkata': 100, 'AIESEC in M.A.H.E.': 100, 'AIESEC in Navi Mumbai': 100,
      'AIESEC in Patiala': 100, 'AIESEC in Jaipur': 30, 'AIESEC in Surat': 30,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Delhi IIT': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Noida': 0, 'AIESEC in VVN': 0,
    },
    EXP: {
      'AIESEC in Amravati': 200, 'AIESEC in Bhopal': 200, 'AIESEC in Baroda': 20,
      'AIESEC in Dehradun': 0, 'AIESEC in Nashik': 0, 'AIESEC in Noida': 0, 'AIESEC in VVN': 0,
    },
  },

  april: {
    entity: {
      'AIESEC in Hyderabad': 5090, 'AIESEC in Chandigarh': 2630, 'AIESEC in Visakhapatnam': 2020,
      'AIESEC in M.A.H.E.': 1980, 'AIESEC in Delhi IIT': 1880, 'AIESEC in Chennai': 1650,
      'AIESEC in Mumbai': 1570, 'AIESEC in Delhi University': 1470, 'AIESEC in Ludhiana': 1420,
      'AIESEC in Bengaluru': 1040, 'AIESEC in Ahmedabad': 770, 'AIESEC in Jaipur': 700,
      'AIESEC in Amravati': 680, 'AIESEC in Jalandhar': 680, 'AIESEC in Bhopal': 590,
      'AIESEC in Kolkata': 430, 'AIESEC in Pune': 390, 'AIESEC in Indore': 220,
      'AIESEC in VVN': 160, 'AIESEC in Navi Mumbai': 120, 'AIESEC in Surat': 90,
      'AIESEC in Patiala': 60, 'AIESEC in Baroda': 30, 'AIESEC in Noida': 30,
      'AIESEC in Dehradun': 0, 'AIESEC in Nashik': 0,
    },
    iGV: {
      'AIESEC in Hyderabad': 5100, 'AIESEC in Visakhapatnam': 1920, 'AIESEC in Delhi IIT': 1560,
      'AIESEC in Ludhiana': 1360, 'AIESEC in Chandigarh': 960, 'AIESEC in Mumbai': 880,
      'AIESEC in Delhi University': 840, 'AIESEC in Bhopal': 560, 'AIESEC in Jaipur': 560,
      'AIESEC in M.A.H.E.': 400, 'AIESEC in Ahmedabad': 360, 'AIESEC in Bengaluru': 240,
      'AIESEC in Pune': 160, 'AIESEC in Kolkata': 80, 'AIESEC in Amravati': 0,
      'AIESEC in Baroda': 0, 'AIESEC in Chennai': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Indore': 0, 'AIESEC in Jalandhar': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Navi Mumbai': 0, 'AIESEC in Noida': 0, 'AIESEC in Patiala': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    oGV: {
      'AIESEC in Mumbai': 800, 'AIESEC in Amravati': 780, 'AIESEC in Delhi University': 620,
      'AIESEC in Jalandhar': 600, 'AIESEC in Hyderabad': 520, 'AIESEC in M.A.H.E.': 400,
      'AIESEC in Chandigarh': 380, 'AIESEC in Ludhiana': 380, 'AIESEC in Visakhapatnam': 380,
      'AIESEC in Bengaluru': 280, 'AIESEC in Chennai': 240, 'AIESEC in Kolkata': 240,
      'AIESEC in Bhopal': 220, 'AIESEC in VVN': 220, 'AIESEC in Ahmedabad': 200,
      'AIESEC in Delhi IIT': 160, 'AIESEC in Jaipur': 160, 'AIESEC in Navi Mumbai': 160,
      'AIESEC in Pune': 160, 'AIESEC in Surat': 140, 'AIESEC in Indore': 80,
      'AIESEC in Patiala': 80, 'AIESEC in Baroda': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Nashik': 0, 'AIESEC in Noida': 0,
    },
    iGTa: {
      'AIESEC in M.A.H.E.': 1840, 'AIESEC in Chandigarh': 1720, 'AIESEC in Chennai': 1400,
      'AIESEC in Hyderabad': 520, 'AIESEC in Delhi IIT': 400, 'AIESEC in Delhi University': 240,
      'AIESEC in Jalandhar': 200, 'AIESEC in Mumbai': 200, 'AIESEC in Jaipur': 160,
      'AIESEC in Visakhapatnam': 160, 'AIESEC in Ahmedabad': 80, 'AIESEC in Kolkata': 80,
      'AIESEC in Pune': 80, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bengaluru': 0, 'AIESEC in Bhopal': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Indore': 0, 'AIESEC in Ludhiana': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Navi Mumbai': 0, 'AIESEC in Noida': 0, 'AIESEC in Patiala': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    iGTe: {
      'AIESEC in Bengaluru': 480, 'AIESEC in Chandigarh': 360, 'AIESEC in Hyderabad': 320,
      'AIESEC in Ahmedabad': 240, 'AIESEC in Indore': 80, 'AIESEC in Jalandhar': 80,
      'AIESEC in Ludhiana': 80, 'AIESEC in Mumbai': 80, 'AIESEC in Pune': 80,
      'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0, 'AIESEC in Bhopal': 0,
      'AIESEC in Chennai': 0, 'AIESEC in Dehradun': 0, 'AIESEC in Delhi IIT': 0,
      'AIESEC in Delhi University': 0, 'AIESEC in Jaipur': 0, 'AIESEC in Kolkata': 0,
      'AIESEC in M.A.H.E.': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    oGTa: {
      'AIESEC in Chennai': 240, 'AIESEC in Visakhapatnam': 200, 'AIESEC in Ahmedabad': 120,
      'AIESEC in Amravati': 80, 'AIESEC in Baroda': 0, 'AIESEC in Bengaluru': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Chandigarh': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Delhi IIT': 0, 'AIESEC in Delhi University': 0, 'AIESEC in Hyderabad': 0,
      'AIESEC in Indore': 0, 'AIESEC in Jaipur': 0, 'AIESEC in Jalandhar': 0,
      'AIESEC in Kolkata': 0, 'AIESEC in Ludhiana': 0, 'AIESEC in M.A.H.E.': 0,
      'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Pune': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    MKT: {
      'AIESEC in Chennai': 230, 'AIESEC in Chandigarh': 160, 'AIESEC in Jalandhar': 160,
      'AIESEC in Mumbai': 150, 'AIESEC in Hyderabad': 140, 'AIESEC in M.A.H.E.': 140,
      'AIESEC in Bengaluru': 130, 'AIESEC in Pune': 130, 'AIESEC in Delhi IIT': 120,
      'AIESEC in Delhi University': 100, 'AIESEC in Indore': 100, 'AIESEC in Jaipur': 100,
      'AIESEC in Kolkata': 100, 'AIESEC in Ludhiana': 100, 'AIESEC in Navi Mumbai': 100,
      'AIESEC in VVN': 100, 'AIESEC in Visakhapatnam': 100, 'AIESEC in Surat': 70,
      'AIESEC in Bhopal': 60, 'AIESEC in Ahmedabad': 0, 'AIESEC in Amravati': 0,
      'AIESEC in Baroda': 0, 'AIESEC in Dehradun': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0,
    },
    BD: {
      'AIESEC in Hyderabad': 500, 'AIESEC in Delhi IIT': 300, 'AIESEC in Chennai': 210,
      'AIESEC in Amravati': 40, 'AIESEC in Bengaluru': 40, 'AIESEC in Visakhapatnam': 40,
      'AIESEC in Bhopal': 20, 'AIESEC in Mumbai': 20, 'AIESEC in Ahmedabad': 0,
      'AIESEC in Baroda': 0, 'AIESEC in Chandigarh': 0, 'AIESEC in Dehradun': 0,
      'AIESEC in Delhi University': 0, 'AIESEC in Indore': 0, 'AIESEC in Jaipur': 0,
      'AIESEC in Jalandhar': 0, 'AIESEC in Kolkata': 0, 'AIESEC in Ludhiana': 0,
      'AIESEC in M.A.H.E.': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Pune': 0,
      'AIESEC in Surat': 0, 'AIESEC in VVN': 0,
    },
    PM: {
      'AIESEC in Amravati': 390, 'AIESEC in Chennai': 290, 'AIESEC in Delhi University': 230,
      'AIESEC in Jalandhar': 190, 'AIESEC in Delhi IIT': 150, 'AIESEC in Bengaluru': 130,
      'AIESEC in Ahmedabad': 110, 'AIESEC in Kolkata': 110, 'AIESEC in VVN': 110,
      'AIESEC in Chandigarh': 100, 'AIESEC in Hyderabad': 100, 'AIESEC in Visakhapatnam': 110,
      'AIESEC in Jaipur': 80, 'AIESEC in Surat': 70, 'AIESEC in Baroda': 30,
      'AIESEC in Bhopal': 30, 'AIESEC in Ludhiana': 30, 'AIESEC in M.A.H.E.': 30,
      'AIESEC in Noida': 30, 'AIESEC in Pune': 30, 'AIESEC in Dehradun': 0,
      'AIESEC in Indore': 0, 'AIESEC in Mumbai': 0, 'AIESEC in Nashik': 0,
      'AIESEC in Navi Mumbai': 0, 'AIESEC in Patiala': 0,
    },
    FnL: {
      'AIESEC in Bengaluru': 250, 'AIESEC in Delhi IIT': 250, 'AIESEC in Delhi University': 150,
      'AIESEC in Indore': 150, 'AIESEC in Hyderabad': 130, 'AIESEC in Mumbai': 130,
      'AIESEC in Kolkata': 100, 'AIESEC in Pune': 100, 'AIESEC in Ludhiana': 30,
      'AIESEC in Ahmedabad': 0, 'AIESEC in Amravati': 0, 'AIESEC in Baroda': 0,
      'AIESEC in Bhopal': 0, 'AIESEC in Chandigarh': 0, 'AIESEC in Chennai': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Jaipur': 0, 'AIESEC in Jalandhar': 0,
      'AIESEC in M.A.H.E.': 0, 'AIESEC in Nashik': 0, 'AIESEC in Navi Mumbai': 0,
      'AIESEC in Noida': 0, 'AIESEC in Patiala': 0, 'AIESEC in Surat': 0,
      'AIESEC in VVN': 0, 'AIESEC in Visakhapatnam': 0,
    },
    EXP: {
      'AIESEC in Amravati': 940, 'AIESEC in Bhopal': 940, 'AIESEC in Baroda': 0,
      'AIESEC in Dehradun': 0, 'AIESEC in Nashik': 0, 'AIESEC in Noida': 0, 'AIESEC in VVN': 0,
    },
  },
};

// Available months for month filter — add new entries here when data is available
export const MONTHS_LIST = [
  { key: 'february', label: 'February 2026' },
  { key: 'march',    label: 'March 2026' },
  { key: 'april',    label: 'April 2026' },
];

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
  TIERS.forEach((tier) => {
    result[tier] = (tierMap[tier] || [])
      .filter((lc) => (pfPts[lc] || 0) > 0)
      .sort((a, b) => (pfPts[b] || 0) - (pfPts[a] || 0));
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
