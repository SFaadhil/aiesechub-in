'use client';

import { useState } from 'react';
import { GCP_MONTHS, gcpYearOptions, GCP_PORTFOLIOS, GCP_ENTITIES, GCP_TEXT_FIELDS } from '@/lib/gcp-data';

const YEARS = gcpYearOptions();

const EMPTY_FORM = {
  month: '',
  year: String(new Date().getFullYear()),
  uploaderName: '',
  uploaderEmail: '',
  uploaderEntity: '',
  portfolio: '',
  gcpName: '',
  outcome: '',
  links: '',
  details: '',
  kpis: '',
  mos: '',
  notes: '',
  hp: '', // honeypot
};

export default function GcpSubmitForm({ onClose, onSubmitted }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/gcp/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, year: Number(form.year) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      setDone(true);
      onSubmitted?.();
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="gcp-success-box">
        <div className="gcp-success-emoji">✅</div>
        <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>GCP submitted!</h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 22 }}>
          Thanks for sharing — it&apos;s now with the review team. Once approved it&apos;ll appear on the GCP Hub.
        </p>
        <button type="button" className="btn-primary-brand" onClick={onClose}>Done</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        value={form.hp}
        onChange={(e) => update('hp', e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }}
      />

      <div className="row g-3 mb-1">
        <div className="col-6">
          <div className="gcp-field">
            <label className="gcp-label">Month<span className="required">*</span></label>
            <select className="gcp-select" required value={form.month} onChange={(e) => update('month', e.target.value)}>
              <option value="" disabled>Select month</option>
              {GCP_MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        </div>
        <div className="col-6">
          <div className="gcp-field">
            <label className="gcp-label">Year<span className="required">*</span></label>
            <select className="gcp-select" required value={form.year} onChange={(e) => update('year', e.target.value)}>
              {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-1">
        <div className="col-6">
          <div className="gcp-field">
            <label className="gcp-label">Uploader Name<span className="required">*</span></label>
            <input className="gcp-input" required value={form.uploaderName}
              onChange={(e) => update('uploaderName', e.target.value)} placeholder="Full name" />
          </div>
        </div>
        <div className="col-6">
          <div className="gcp-field">
            <label className="gcp-label">Uploader Email<span className="required">*</span></label>
            <input className="gcp-input" type="email" required value={form.uploaderEmail}
              onChange={(e) => update('uploaderEmail', e.target.value)} placeholder="you@aiesec.net" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-1">
        <div className="col-6">
          <div className="gcp-field">
            <label className="gcp-label">Uploader Entity<span className="required">*</span></label>
            <select className="gcp-select" required value={form.uploaderEntity}
              onChange={(e) => update('uploaderEntity', e.target.value)}>
              <option value="" disabled>Select entity</option>
              {GCP_ENTITIES.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
          </div>
        </div>
        <div className="col-6">
          <div className="gcp-field">
            <label className="gcp-label">Portfolio / Function<span className="required">*</span></label>
            <select className="gcp-select" required value={form.portfolio}
              onChange={(e) => update('portfolio', e.target.value)}>
              <option value="" disabled>Select portfolio</option>
              {GCP_PORTFOLIOS.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="gcp-field">
        <label className="gcp-label">Name of GCP<span className="required">*</span></label>
        <input className="gcp-input" required value={form.gcpName}
          onChange={(e) => update('gcpName', e.target.value)} placeholder="Give your GCP a clear, specific name" />
      </div>

      {GCP_TEXT_FIELDS.map((f) => (
        <div className="gcp-field" key={f.key}>
          <label className="gcp-label">{f.label}{f.required && <span className="required">*</span>}</label>
          <textarea
            className="gcp-textarea"
            rows={f.rows}
            required={f.required}
            value={form[f.key]}
            onChange={(e) => update(f.key, e.target.value)}
            placeholder={f.placeholder}
          />
        </div>
      ))}

      {error && <p className="gcp-error-text mb-2">{error}</p>}

      <div className="d-flex gap-2 justify-content-end mt-3">
        <button type="button" className="btn-outline-brand" onClick={onClose} disabled={submitting}>Cancel</button>
        <button type="submit" className="btn-primary-brand" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Submit GCP'}
        </button>
      </div>
    </form>
  );
}
