import { NextResponse } from 'next/server';
import { GCP_SESSION_COOKIE } from '@/lib/gcp-auth';

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(GCP_SESSION_COOKIE, '', { path: '/', maxAge: 0 });
  return res;
}
