import Link from 'next/link';

const IMAGES = {
  igv:        '/images/placeholder-cards/igv.jpeg',
  ogv:        '/images/placeholder-cards/ogv.jpeg',
  igtae:      '/images/placeholder-cards/igt.png',
  ogtae:      '/images/placeholder-cards/ogta.jpeg',
  mkt:        '/images/placeholder-cards/mkt.png',
  bd:         '/images/placeholder-cards/BD.jpeg',
  pm:         '/images/placeholder-cards/pm.png',
  fnl:        '/images/placeholder-cards/fnl.png',
  od:         'https://picsum.photos/seed/od-org/600/300',
  expansions: '/images/placeholder-cards/exp.png',
};

export default function HubCard({ slug, name, fullName, accent }) {
  return (
    <Link href={`/functional-hub/${slug}`} className="hub-card">
      <div className="hub-card-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES[slug]}
          alt={`${name} cover`}
          className="hub-card-img"
        />
        <div className="hub-card-img-overlay" />
        <div className="hub-card-accent-bar" style={{ background: accent }} />
        {/* Portfolio emoji/initials pill overlay */}
        <div style={{
          position: 'absolute',
          bottom: 8, right: 8,
          background: `${accent}cc`,
          color: '#fff',
          borderRadius: 6,
          padding: '2px 8px',
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: '0.3px',
          backdropFilter: 'blur(4px)',
        }}>
          {name.replace(' Hub', '')}
        </div>
      </div>
      <div className="hub-card-body">
        <div className="hub-card-name">{name}</div>
        <div className="hub-card-sub">{fullName}</div>
      </div>
    </Link>
  );
}
