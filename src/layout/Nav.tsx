import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../components/core/Button';
import logo from '../assets/logo_white_text_transparent_v2.png';

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
          padding: '4px 40px',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Stephenson Physical Therapy" style={{ height: '80px', display: 'block' }} />
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
