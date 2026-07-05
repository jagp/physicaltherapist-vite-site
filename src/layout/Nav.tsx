import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/core/Button';
import logo from '../assets/logo_white_text_transparent_v2.png';
import s from './Nav.module.css';

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
  const menuRef = useRef<HTMLDetailsElement>(null);

  /* The <details> element is the menu state — CSS owns the layout.
     JS only closes it on route change / Escape / outside click (a11y). */
  useEffect(() => {
    menuRef.current?.removeAttribute('open');
  }, [location.pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') menu.removeAttribute('open');
    };
    const onClick = (e: MouseEvent) => {
      if (menu.open && !menu.contains(e.target as Node)) menu.removeAttribute('open');
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <header className={s.hdr}>
      <div className={s.row}>
        <Link to="/" className={s.brand}>
          {/* intrinsic 870x424 — attributes reserve the ratio; CSS sets display size */}
          <img src={logo} alt="Stephenson Physical Therapy" width={870} height={424} />
        </Link>

        <nav className={s.links} aria-label="Primary">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? `${s.link} ${s.linkActive}` : s.link)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <span className={s.desktopCta}>
          <Button variant="gradient" size="sm" onClick={() => navigate('/contact')}>
            Book a Consultation
          </Button>
        </span>

        <details className={s.mnav} ref={menuRef}>
          <summary aria-label="Menu">
            <span className={s.burger} />
          </summary>
          <nav className={s.panel} aria-label="Primary mobile">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? `${s.panelLink} ${s.panelLinkActive}` : s.panelLink
                }
              >
                {label}
              </NavLink>
            ))}
            <span className={s.panelCta}>
              <Button variant="gradient" size="md" fullWidth onClick={() => navigate('/contact')}>
                Book a Consultation
              </Button>
            </span>
          </nav>
        </details>
      </div>
    </header>
  );
}
