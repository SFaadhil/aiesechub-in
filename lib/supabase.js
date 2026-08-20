import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Public client — safe to use in the browser or in server code that should
// respect Row Level Security (public GCP Hub reads, public submissions).
export function getSupabase() {
  if (!SUPABASE_URL || !ANON_KEY) return null;
  return createClient(SUPABASE_URL, ANON_KEY, {
    auth: { persistSession: false },
  });
}

// Admin client — SERVER ONLY. Uses the service_role key, which bypasses RLS.
// Never import this from a Client Component or expose it to the browser.
export function getSupabaseAdmin() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) return null;
  return createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
}
