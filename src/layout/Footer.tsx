import { Link } from 'react-router-dom';
import logo from '../assets/logo_white_text_transparent_v2.png';
import s from './Footer.module.css';

const exploreLinks: Array<[string, string]> = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        <div>
          <div className={s.logo}>
            <img src={logo} alt="Stephenson Physical Therapy" width={870} height={424} loading="lazy" />
          </div>
          <p className={s.line}>
            8 Pleasant St, Unit 8E
            <br />
            South Natick, MA 01760
          </p>
          <p className={s.line}>508-740-0663</p>
          <p className={`${s.line} ${s.lineLast}`}>rstephensonpt@gmail.com</p>
        </div>
        <div>
          <h4 className={s.colTitle}>Explore</h4>
          <ul className={s.links}>
            {exploreLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={s.colTitle}>Visit</h4>
          <p className={s.line}>By appointment</p>
          <p className={s.line}>South Natick, MA</p>
          <p className={s.highlight}>New patients welcome</p>
        </div>
      </div>
      <div className={s.legal}>
        <span>© 2026 Stephenson Physical Therapy · Built with care in South Natick, MA</span>
        <span>Accessibility · Privacy · HIPAA Notice</span>
      </div>
    </footer>
  );
}
