import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { GCP_MONTHS, GCP_PORTFOLIOS } from '@/lib/gcp-data';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SHORT_MAX = 300;
const LONG_MAX = 6000;

function clean(v, max) {
  return String(v ?? '').trim().slice(0, max);
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot — bots tend to fill every field, humans never see this one.
  if (clean(body.hp, 100)) {
    return NextResponse.json({ ok: true });
  }

  const month = clean(body.month, 20);
  const year = Number(body.year);
  const uploaderName = clean(body.uploaderName, SHORT_MAX);
  const uploaderEmail = clean(body.uploaderEmail, SHORT_MAX);
  const uploaderEntity = clean(body.uploaderEntity, SHORT_MAX);
  const portfolio = clean(body.portfolio, 50);
  const gcpName = clean(body.gcpName, SHORT_MAX);
  const outcome = clean(body.outcome, LONG_MAX);
  const links = clean(body.links, LONG_MAX);
  const details = clean(body.details, LONG_MAX);
  const kpis = clean(body.kpis, LONG_MAX);
  const mos = clean(body.mos, LONG_MAX);
  const notes = clean(body.notes, LONG_MAX);

  const errors = [];
  if (!GCP_MONTHS.includes(month)) errors.push('Month is required.');
  if (!Number.isInteger(year) || year < 2000 || year > 2100) errors.push('Year is required.');
  if (!uploaderName) errors.push('Uploader name is required.');
  if (!EMAIL_RE.test(uploaderEmail)) errors.push('A valid uploader email is required.');
  if (!uploaderEntity) errors.push('Uploader entity is required.');
  if (!GCP_PORTFOLIOS.some((p) => p.key === portfolio)) errors.push('Portfolio / function is required.');
  if (!gcpName) errors.push('GCP name is required.');
  if (!outcome) errors.push('Outcome is required.');
  if (!details) errors.push('Details are required.');

  if (errors.length) {
    return NextResponse.json({ error: errors[0] }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: 'GCP Hub is not configured yet.' }, { status: 503 });
  }

  const { error } = await supabase.from('gcp_submissions').insert({
    month,
    year,
    uploader_name: uploaderName,
    uploader_email: uploaderEmail,
    uploader_entity: uploaderEntity,
    portfolio,
    gcp_name: gcpName,
    outcome,
    links,
    details,
    kpis,
    mos,
    notes,
  });

  if (error) {
    return NextResponse.json({ error: 'Could not submit right now. Please try again shortly.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
