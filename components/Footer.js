import Link from 'next/link';
import { isPageLive, isHubLive } from '@/lib/page-status';

const ALL_SITE_LINKS = [
  { href: '/',                  label: 'Home' },
  { href: '/aiesec-india',      label: 'AIESEC in India' },
  { href: '/aiesec-way',        label: 'AIESEC Way' },
  { href: '/functional-hub',    label: 'Functional Hub' },
  { href: '/conference-output', label: 'Conference Output' },
  { href: '/rnr',               label: 'Rewards & Recognition' },
];

const ALL_HUB_GROUPS = [
  {
    heading: 'Exchanges',
    links: [
      { href: '/functional-hub/igv',   label: 'iGV',   slug: 'igv' },
      { href: '/functional-hub/ogv',   label: 'oGV',   slug: 'ogv' },
      { href: '/functional-hub/igtae', label: 'iGTae', slug: 'igtae' },
      { href: '/functional-hub/ogtae', label: 'oGTae', slug: 'ogtae' },
    ],
  },
  {
    heading: 'Exc. Support',
    links: [
      { href: '/functional-hub/mkt', label: 'MKT', slug: 'mkt' },
      { href: '/functional-hub/bd',  label: 'BD',  slug: 'bd' },
      { href: '/functional-hub/pm',  label: 'PM',  slug: 'pm' },
      { href: '/functional-hub/fnl', label: 'FnL', slug: 'fnl' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { href: '/functional-hub/im',         label: 'IM',         slug: 'im' },
      { href: '/functional-hub/expansions', label: 'Expansions', slug: 'expansions' },
    ],
  },
];

// Filter at module load — changes to lib/page-status.js take effect on next build/restart
const SITE_LINKS = ALL_SITE_LINKS.filter((l) => l.href === '/' || isPageLive(l.href));
const HUB_GROUPS = ALL_HUB_GROUPS
  .map((group) => ({ ...group, links: group.links.filter((l) => isHubLive(l.slug)) }))
  .filter((group) => group.links.length > 0);

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
      stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
      stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const SOCIALS = [
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/aiesec_india/?hl=en' },
  { label: 'LinkedIn',  Icon: LinkedInIcon,  href: 'https://www.linkedin.com/company/aiesecindia/posts/?feedView=all' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-xl" style={{ paddingTop: 56 }}>
        <div className="row g-5">

          {/* Brand column */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/aiesec-human-white.png"
                alt="AIESEC"
                width={34}
                height={34}
                style={{ objectFit: 'contain', opacity: 0.9 }}
              />
              <span className="footer-brand-name">AIESEC in India</span>
            </div>
            <p className="footer-tagline">
              World&apos;s Largest Youth-Run Organisation. Developing leadership in
              young people across India since 1981.
            </p>
            <div className="d-flex gap-2 mt-4">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="col-12 col-md-8">
            <div className="row g-4">
              <div className="col-6 col-sm-3">
                <div className="footer-col-heading">Site</div>
                {SITE_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
                ))}
              </div>
              {HUB_GROUPS.map((group) => (
                <div key={group.heading} className="col-6 col-sm-3">
                  <div className="footer-col-heading">{group.heading}</div>
                  {group.links.map((l) => (
                    <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 footer-bottom"
          style={{ paddingBottom: 28 }}>
          <span>© {year} AIESEC in India. All rights reserved.</span>
          <span>
            Built by{' '}
            <a
              href="https://www.linkedin.com/in/s-faadhil/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              Faadhil
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
