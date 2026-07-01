import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/core/Button';
import { useBreakpoint } from '../hooks/useMediaQuery';
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
  const location = useLocation();
  const { isTablet } = useBreakpoint();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation, and whenever we grow back to desktop.
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!isTablet) setOpen(false);
  }, [isTablet]);

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
          padding: '4px var(--gutter)',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="Stephenson Physical Therapy"
            style={{ height: isTablet ? '60px' : '80px', display: 'block' }}
          />
        </Link>

        {isTablet ? (
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            style={{
              marginLeft: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              background: 'none',
              border: 'none',
              color: 'var(--text-light)',
              cursor: 'pointer',
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>

      {isTablet && open && (
        <nav
          id="mobile-nav"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '6px var(--gutter) 22px',
            borderTop: '1px solid rgba(255,255,255,.1)',
            background: 'var(--bg)',
          }}
        >
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-ui)',
                fontSize: '1.05rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: isActive ? 'var(--text-light)' : 'rgba(255,255,255,.72)',
                padding: '13px 4px',
                borderBottom: '1px solid rgba(255,255,255,.07)',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Button
            variant="gradient"
            size="md"
            fullWidth
            style={{ marginTop: '18px' }}
            onClick={() => navigate('/contact')}
          >
            Book a Consultation
          </Button>
        </nav>
      )}
    </header>
  );
}
