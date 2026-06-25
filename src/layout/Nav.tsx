import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../components/core/Button';
import leafMark from '../assets/leaf-mark.png';

const links: Array<[string, string]> = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export function Nav() {
  const navigate = useNavigate();

  return (
    <header
      style={{
        background: 'var(--bg)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 0 rgba(255,255,255,.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          padding: '14px 40px',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={leafMark} alt="" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.12rem', lineHeight: 1, color: '#fff' }}>
            Stephenson
            <br />
            <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(255,255,255,.55)', letterSpacing: '.04em' }}>
              Physical Therapy
            </span>
          </span>
        </Link>
        <nav style={{ display: 'flex', gap: '26px', alignItems: 'center', marginLeft: 'auto' }}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-ui)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: isActive ? 'var(--text-light)' : 'rgba(255,255,255,.6)',
                borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                paddingBottom: '3px',
                transition: 'color var(--dur) var(--ease-soft)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Button variant="gradient" size="sm" onClick={() => navigate('/contact')}>
          Book a Consultation
        </Button>
      </div>
    </header>
  );
}
