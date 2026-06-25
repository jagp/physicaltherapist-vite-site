import { Link } from 'react-router-dom';
import leafMark from '../assets/leaf-mark.png';

const exploreLinks: Array<[string, string]> = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--text-light)', padding: '64px 0 26px', marginTop: '0', borderTop: '1px solid rgba(255,255,255,.1)' }}>
      <div
        style={{
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '40px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <img src={leafMark} alt="" style={{ height: '38px', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: '#fff' }}>Stephenson Physical Therapy</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,.62)', margin: '0 0 6px', fontSize: '0.9rem' }}>
            8 Pleasant St, Unit 8E
            <br />
            South Natick, MA 01760
          </p>
          <p style={{ color: 'rgba(255,255,255,.62)', margin: '0 0 6px', fontSize: '0.9rem' }}>508-740-0663</p>
          <p style={{ color: 'rgba(255,255,255,.62)', margin: 0, fontSize: '0.9rem' }}>rgspt1@gmail.com</p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.4)', margin: '0 0 14px' }}>
            Explore
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.1 }}>
            {exploreLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to} style={{ color: 'rgba(255,255,255,.65)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color var(--dur) var(--ease-soft)' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.4)', margin: '0 0 14px' }}>
            Visit
          </h4>
          <p style={{ color: 'rgba(255,255,255,.62)', margin: '0 0 6px', fontSize: '0.9rem' }}>By appointment</p>
          <p style={{ color: 'rgba(255,255,255,.62)', margin: '0 0 12px', fontSize: '0.9rem' }}>South Natick, MA</p>
          <p style={{ color: 'var(--attention)', fontWeight: 600, margin: 0, fontSize: '0.9rem' }}>New patients welcome</p>
        </div>
      </div>
      <div
        style={{
          maxWidth: 'var(--maxw)',
          margin: '34px auto 0',
          padding: '18px 40px 0',
          borderTop: '1px solid rgba(255,255,255,.1)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,.38)',
        }}
      >
        <span>© 2026 Stephenson Physical Therapy · Built with care in South Natick, MA</span>
        <span>Accessibility · Privacy · HIPAA Notice</span>
      </div>
    </footer>
  );
}
