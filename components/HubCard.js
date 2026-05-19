import Link from 'next/link';

const IMAGES = {
  igv:        'https://picsum.photos/seed/igv-world/600/300',
  ogv:        'https://picsum.photos/seed/ogv-travel/600/300',
  igtae:      'https://picsum.photos/seed/igtae-pro/600/300',
  ogtae:      'https://picsum.photos/seed/ogtae-city/600/300',
  mkt:        'https://picsum.photos/seed/mkt-creative/600/300',
  bd:         'https://picsum.photos/seed/bd-business/600/300',
  pm:         'https://picsum.photos/seed/pm-team/600/300',
  fnl:        'https://picsum.photos/seed/fnl-finance/600/300',
  im:         'https://picsum.photos/seed/im-data/600/300',
  od:         'https://picsum.photos/seed/od-org/600/300',
  expansions: 'https://picsum.photos/seed/expansions-hub/600/300',
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
