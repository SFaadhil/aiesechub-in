export default function PageHero({
  title,
  subtitle,
  accent = 'var(--primary)',
  image,
  eyebrow,
  children,
}) {
  return (
    <section className="page-hero">
      {/* Gradient bg */}
      <div className="page-hero-bg" />

      {/* Blob decorations */}
      <div
        className="page-hero-blob"
        style={{
          width: 520, height: 520,
          background: `radial-gradient(circle, ${accent}1e 0%, transparent 65%)`,
          top: -200, right: -120,
          animation: 'floatBlob 13s ease-in-out infinite',
        }}
      />
      <div
        className="page-hero-blob"
        style={{
          width: 380, height: 380,
          background: `radial-gradient(circle, ${accent}12 0%, transparent 65%)`,
          bottom: -150, left: 40,
          animation: 'floatBlob 17s ease-in-out infinite reverse',
        }}
      />

      <div className="container-xl page-hero-content">
        {image ? (
          <div className="row align-items-center g-5">
            {/* Text */}
            <div className="col-12 col-lg-6 animate-fade-up">
              {eyebrow && (
                <p className="page-hero-eyebrow" style={{ color: accent }}>
                  {eyebrow}
                </p>
              )}
              <h1 className="page-hero-title">{title}</h1>
              {subtitle && (
                <p className="page-hero-subtitle">{subtitle}</p>
              )}
              {children}
            </div>

            {/* Image */}
            <div className="col-12 col-lg-6 animate-fade-up delay-2">
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={title}
                  className="page-hero-img"
                  style={{ display: 'block', width: '100%', height: 300, objectFit: 'cover' }}
                />
                {/* Accent bar on top of image */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${accent}, transparent)`,
                }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-lg-8 animate-fade-up">
              {eyebrow && (
                <p className="page-hero-eyebrow" style={{ color: accent }}>
                  {eyebrow}
                </p>
              )}
              <h1 className="page-hero-title">{title}</h1>
              {subtitle && (
                <p className="page-hero-subtitle">{subtitle}</p>
              )}
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
