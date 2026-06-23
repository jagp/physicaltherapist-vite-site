import { Link } from 'react-router-dom';
import leafMark from '../../assets/leaf-mark.png';

const LINKS = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export function Footer() {
  return (
    <footer className="bg-plum-700 text-[#E9E4F5] pt-16 pb-[26px]">
      <div className="container-site grid gap-10" style={{ gridTemplateColumns: '1.5fr 1fr 1fr' }}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={leafMark} alt="" className="h-11" />
            <span className="font-display font-semibold text-[1.2rem] text-white">Stephenson Physical Therapy</span>
          </div>
          <p className="opacity-80 mb-1.5">
            8 Pleasant St, Unit 8E
            <br />
            South Natick, MA 01760
          </p>
          <p className="opacity-80 mb-1.5">508-740-0663</p>
          <p className="opacity-80 m-0">rgspt1@gmail.com</p>
        </div>
        <div>
          <h4 className="font-body text-[0.8rem] uppercase tracking-[.12em] text-white/60 mb-3.5">Explore</h4>
          <ul className="list-none p-0 m-0 leading-[2]">
            {LINKS.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-[#E9E4F5] no-underline opacity-85">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-[0.8rem] uppercase tracking-[.12em] text-white/60 mb-3.5">Visit</h4>
          <p className="opacity-80 mb-1.5">By appointment</p>
          <p className="opacity-80 mb-1.5">South Natick, MA</p>
          <p className="text-slate-300 font-semibold mt-2">New patients welcome</p>
        </div>
      </div>
      <div className="container-site mt-[34px] pt-[18px] border-t border-white/15 flex flex-wrap justify-between gap-2.5 text-[0.8rem] opacity-70">
        <span>© 2026 Stephenson Physical Therapy · Built with care in South Natick, MA</span>
        <span>Accessibility · Privacy · HIPAA Notice</span>
      </div>
    </footer>
  );
}
