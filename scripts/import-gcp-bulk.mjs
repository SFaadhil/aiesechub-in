// One-off / reusable bulk importer for historical GCPs.
//
// Usage:
//   node --env-file=.env.local scripts/import-gcp-bulk.mjs path/to/records.json
//
// Expects a JSON array of objects shaped like:
//   { month, year, uploader_name, uploader_email, uploader_entity,
//     portfolio, gcp_name, outcome, links, details, kpis, mos, notes }
//
// Inserts everything as status='approved' (bulk-imported history is treated
// as pre-vetted — it does not sit in the /login pending queue) in batches,
// using the service-role key so RLS doesn't block it.

import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const [, , filePath] = process.argv;
if (!filePath) {
  console.error('Usage: node --env-file=.env.local scripts/import-gcp-bulk.mjs <records.json>');
  process.exit(1);
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in the environment.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const raw = JSON.parse(readFileSync(filePath, 'utf-8'));
if (!Array.isArray(raw) || raw.length === 0) {
  console.error('Input JSON must be a non-empty array.');
  process.exit(1);
}

const now = new Date().toISOString();

const rows = raw.map((r) => ({
  month: r.month,
  year: r.year,
  uploader_name: r.uploader_name || 'Unknown',
  uploader_email: r.uploader_email || '',
  uploader_entity: r.uploader_entity,
  portfolio: r.portfolio || 'other',
  gcp_name: r.gcp_name,
  outcome: r.outcome || '',
  links: r.links || '',
  details: r.details || '',
  kpis: r.kpis || '',
  mos: r.mos || '',
  notes: r.notes || '',
  status: 'approved',
  reviewed_at: now,
  reviewer_note: 'Bulk import from historical spreadsheet',
}));

const BATCH_SIZE = 200;
let inserted = 0;
let failed = 0;

for (let i = 0; i < rows.length; i += BATCH_SIZE) {
  const batch = rows.slice(i, i + BATCH_SIZE);
  const { error, count } = await supabase.from('gcp_submissions').insert(batch, { count: 'exact' });
  if (error) {
    failed += batch.length;
    console.error(`Batch ${i / BATCH_SIZE + 1} failed:`, error.message);
  } else {
    inserted += count ?? batch.length;
    console.log(`Batch ${i / BATCH_SIZE + 1}: inserted ${batch.length} (running total ${inserted})`);
  }
}

console.log(`\nDone. Inserted: ${inserted}. Failed: ${failed}. Total attempted: ${rows.length}.`);
if (failed > 0) process.exit(1);
