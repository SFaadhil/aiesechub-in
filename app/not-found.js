import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: '60vh', padding: '80px 20px' }}
    >
      <div style={{ fontSize: '4rem', marginBottom: 16 }}>🔍</div>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Page Not Found</h1>
      <p style={{ fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 400, marginBottom: 28 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary-brand">
        Back to Home
      </Link>
    </div>
  );
}
