export default function PageOffline() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
      textAlign: 'center',
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--bg-alt)',
        border: '1px solid var(--border-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="var(--text-3)" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <h1 style={{
        fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
        fontWeight: 800,
        color: 'var(--text)',
        marginBottom: 12,
      }}>
        Page Not Available
      </h1>
      <p style={{
        fontSize: 15,
        color: 'var(--text-2)',
        maxWidth: 400,
        lineHeight: 1.7,
        marginBottom: 32,
      }}>
        This page is currently offline. Check back soon.
      </p>
    </div>
  );
}
