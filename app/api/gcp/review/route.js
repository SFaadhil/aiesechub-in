import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { GCP_SESSION_COOKIE, isValidSessionToken } from '@/lib/gcp-auth';

export async function POST(req) {
  const token = req.cookies.get(GCP_SESSION_COOKIE)?.value;
  if (!isValidSessionToken(token)) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { id, action, note } = body || {};
  if (!id || !['approve', 'reject'].includes(action)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'GCP Hub is not configured yet.' }, { status: 503 });
  }

  const { error } = await admin
    .from('gcp_submissions')
    .update({
      status: action === 'approve' ? 'approved' : 'rejected',
      reviewed_at: new Date().toISOString(),
      reviewer_note: note ? String(note).trim().slice(0, 500) : null,
    })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: 'Could not update this submission.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
