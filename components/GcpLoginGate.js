'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GcpLoginGate() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/gcp/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="gcp-login-wrap">
      <div className="gcp-login-card animate-fade-up">
        <div className="gcp-login-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1 style={{ fontSize: 19, fontWeight: 800, marginBottom: 6 }}>Review Access</h1>
        <p style={{ fontSize: 13.5, color: 'var(--text-3)', marginBottom: 24 }}>
          Enter the reviewer password to see pending GCP submissions.
        </p>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div className="gcp-field">
            <label className="gcp-label">Password</label>
            <input
              className="gcp-input"
              type="password"
              autoFocus
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          {error && <p className="gcp-error-text mb-2">{error}</p>}
          <button type="submit" className="btn-primary-brand w-100 justify-content-center" disabled={loading}>
            {loading ? 'Checking…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
