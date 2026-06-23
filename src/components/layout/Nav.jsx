import { NavLink, useNavigate } from 'react-router-dom';
import leafMark from '../../assets/leaf-mark.png';
import { Button } from '../ui/Button.jsx';

const LINKS = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export function Nav() {
  const navigate = useNavigate();
  return (
    <header className="container-site relative z-10 flex items-center gap-6 py-[18px]">
      <NavLink to="/" className="flex items-center gap-3 no-underline">
        <img src={leafMark} alt="" className="h-[46px]" />
        <span className="font-display font-semibold text-[1.18rem] leading-none text-ink-900">
          Stephenson
          <br />
          <span className="text-[0.82rem] font-medium text-ink-500 tracking-[.04em]">Physical Therapy</span>
        </span>
      </NavLink>
      <nav className="flex items-center gap-[26px] ml-auto">
        {LINKS.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `font-body text-[0.93rem] font-medium no-underline pb-[3px] border-b-2 ${
                isActive ? 'text-iris-500 border-iris-500' : 'text-ink-700 border-transparent'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Button variant="primary" size="sm" onClick={() => navigate('/contact')}>
        Book a Consultation
      </Button>
    </header>
  );
}
