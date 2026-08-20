import { cookies } from 'next/headers';
import { GCP_SESSION_COOKIE, isValidSessionToken } from '@/lib/gcp-auth';
import { getSupabaseAdmin } from '@/lib/supabase';
import GcpLoginGate from '@/components/GcpLoginGate';
import GcpAdminDashboard from '@/components/GcpAdminDashboard';

export const metadata = {
  title: 'Review Access',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function LoginPage() {
  const token = cookies().get(GCP_SESSION_COOKIE)?.value;
  const authed = isValidSessionToken(token);

  if (!authed) {
    return <GcpLoginGate />;
  }

  const admin = getSupabaseAdmin();
  let pending = [];
  let loadError = '';

  if (!admin) {
    loadError = 'GCP Hub is not configured yet — missing Supabase service role key.';
  } else {
    const { data, error } = await admin
      .from('gcp_submissions')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: true });

    if (error) loadError = 'Could not load pending submissions.';
    else pending = data || [];
  }

  return <GcpAdminDashboard initialItems={pending} loadError={loadError} />;
}
