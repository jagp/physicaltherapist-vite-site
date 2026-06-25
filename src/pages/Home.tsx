import type { CSSProperties, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/core/Button';
import { ServiceCard } from '../components/marketing/ServiceCard';
import { Testimonial } from '../components/marketing/Testimonial';
import { CTABand } from '../components/marketing/CTABand';
import { CredentialBand } from '../components/marketing/CredentialBand';
import { SERVICES } from '../data/services';
import headshot2 from '../assets/headshot-2.jpg';
import headshot3 from '../assets/headshot-3.jpg';
import leafLeaves from '../assets/leaf-leaves.png';

function SectionHead({
  eyebrow,
  title,
  lede,
  center,
  light,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div style={{ maxWidth: '680px', marginBottom: '46px', textAlign: center ? 'center' : 'left', marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>
      <p className="ds-eyebrow" style={{ margin: '0 0 14px', color: light ? 'rgba(255,255,255,.55)' : undefined }}>
        {eyebrow}
      </p>
      <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,42px)', color: light ? '#fff' : undefined }}>{title}</h2>
      {lede && <p style={{ marginTop: '14px', color: light ? 'rgba(255,255,255,.65)' : 'var(--text-muted)', fontSize: '1.08rem' }}>{lede}</p>}
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '64px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: '54px', alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <p className="ds-eyebrow" style={{ margin: '0 0 14px' }}>Pelvic &amp; Women's Health · South Natick, MA</p>
            <h1 style={{ fontSize: 'clamp(34px,4.4vw,56px)', margin: '0 0 22px', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
              Expert Pelvic &amp; Women's Health Care in South Natick
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '32px' }}>
              Rebecca G. Stephenson, PT, DPT, is a Board-Certified Specialist treating pelvic and women's health concerns for all genders — compassionate, evidence-based care in a private practice setting.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="gradient" size="lg" onClick={() => navigate('/contact')}>Book a Consultation</Button>
              <Button variant="secondary" size="lg" iconRight={<span>→</span>} onClick={() => navigate('/services')}>Explore Our Services</Button>
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/4.4', minHeight: '380px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src={headshot2} alt="Dr. Rebecca Stephenson" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <CredentialBand
      variant="tint"
      items={[
        { label: '40+ Years', detail: 'Evidence-based pelvic health' },
        { label: 'Board-Certified', detail: 'WCS Specialist' },
        { label: 'Private Practice', detail: 'South Natick, MA' },
        { label: 'All Genders', detail: 'Inclusive, affirming care' },
      ]}
    />
  );
}

const svcDarkCSS = `
  .svc-dark .spt-svc { background: color-mix(in srgb, var(--bg) 58%, var(--brand)) !important; border-color: rgba(255,255,255,.1) !important; box-shadow: none !important; }
  .svc-dark .spt-svc > div:first-child { background: rgba(255,255,255,.09) !important; }
  .svc-dark .spt-svc h3 { color: rgba(255,255,255,.94) !important; }
  .svc-dark .spt-svc p  { color: rgba(255,255,255,.62) !important; }
  .svc-dark .spt-svc a  { color: rgba(255,255,255,.55) !important; }
  .svc-dark .spt-svc:hover { background: color-mix(in srgb, var(--bg) 45%, var(--brand-light)) !important; box-shadow: inset 1px 0 0 0 var(--hover-edge), var(--shadow-lg) !important; }
`;

let svcDarkInjected = false;
function ensureSvcDarkCSS() {
  if (svcDarkInjected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'home-svc-dark');
  style.textContent = svcDarkCSS;
  document.head.appendChild(style);
  svcDarkInjected = true;
}

function Services() {
  ensureSvcDarkCSS();
  const navigate = useNavigate();
  return (
    <section style={{ padding: '104px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
        <SectionHead
          eyebrow="What we offer"
          title="Comprehensive care for every stage of life"
          lede="Specialized, evidence-based treatment grouped so you can quickly find yourself in the care we provide."
          light
        />
        <div className="svc-dark" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.title}
              description={s.desc}
              dark
              onClick={(e) => {
                e.preventDefault();
                navigate(`/services/${s.slug}`);
              }}
              href={`/services/${s.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FactCard({ value, label }: { value: ReactNode; label: ReactNode }) {
  return (
    <div
      className="spt-fact"
      style={
        {
          '--_factbg': 'rgba(255,255,255,.08)',
          background: 'rgba(255,255,255,.08)',
          border: '1px solid rgba(255,255,255,.12)',
          borderRadius: 'var(--radius-md)',
          padding: '28px 20px',
          textAlign: 'center',
          cursor: 'default',
        } as CSSProperties
      }
    >
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem,3.8vw,2.6rem)', fontWeight: 600, color: 'rgba(255,255,255,.82)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', color: 'rgba(255,255,255,.52)', marginTop: '8px', lineHeight: 1.35 }}>{label}</div>
    </div>
  );
}

const factCSS = `
  .spt-fact{ transition:background var(--dur) var(--ease-soft), box-shadow var(--dur) var(--ease-soft), transform var(--dur) var(--ease-out) }
  .spt-fact:hover{ background:var(--brand) !important; transform:translateY(-3px); box-shadow:inset 1px 0 0 0 var(--hover-edge), var(--shadow-lg) }
  .spt-chip:hover{ background:var(--accent) !important; color:#fff !important; border-color:var(--accent) !important; }
`;

let bioInjected = false;
function ensureBioCSS() {
  if (bioInjected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'home-bio');
  style.textContent = factCSS;
  document.head.appendChild(style);
  bioInjected = true;
}

function Bio() {
  ensureBioCSS();
  const navigate = useNavigate();
  const chips = ['PT, DPT, MS', 'Board-Certified WCS', 'Lymphedema · CLT', 'Pilates Rehab', 'Childbirth Educator'];
  return (
    <section style={{ padding: '104px 0 60px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: '50px', alignItems: 'center' }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '999px 999px var(--radius-lg) var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src={headshot3} alt="Dr. Rebecca Stephenson" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }} />
          </div>
          <div>
            <p className="ds-eyebrow" style={{ margin: '0 0 14px', color: 'rgba(255,255,255,.5)' }}>About</p>
            <h2 style={{ margin: '0 0 18px', fontSize: 'clamp(28px,3.4vw,42px)', color: '#fff' }}>Meet Dr. Rebecca Stephenson</h2>
            <p style={{ color: 'rgba(255,255,255,.72)', fontSize: '1.05rem', marginBottom: '22px', lineHeight: 1.65 }}>
              Rebecca G. Stephenson, PT, DPT, MS, CLT, WCS, is a Board-Certified Women's &amp; Pelvic Health Clinical Specialist treating all genders. Across a career spanning four decades she built and led pelvic and women's health practices at Brigham and Women's Hospital and Mass General, and is lead author of <em>The Physical Therapy Guide to Women's, Pelvic, Reproductive and Perinatal Health</em> (Taylor &amp; Francis, 2025).
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px', marginBottom: '28px' }}>
              {chips.map((c) => (
                <span
                  key={c}
                  className="spt-chip"
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,.82)',
                    background: 'rgba(255,255,255,.12)',
                    border: '1px solid rgba(255,255,255,.18)',
                    padding: '5px 13px',
                    borderRadius: 'var(--radius-pill)',
                    transition: 'background var(--dur) var(--ease-soft), color var(--dur) var(--ease-soft)',
                    cursor: 'default',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            <Button variant="onBand" size="md" iconRight={<span>→</span>} onClick={() => navigate('/about')}>Read the full bio</Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '56px' }}>
          <FactCard value="40+" label="Years in practice" />
          <FactCard value="WCS" label="Board-certified specialist" />
          <FactCard value="DPT" label="MGH Institute of Health Professions" />
          <FactCard value="2025" label="Lead textbook author" />
        </div>
      </div>
    </section>
  );
}

function WCSCallout() {
  return (
    <section style={{ background: 'var(--bg)', padding: '0 0 104px' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
        <div
          style={{
            background: 'rgba(255,255,255,.06)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 'var(--radius-lg)',
            padding: '44px 48px',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '88px',
              height: '88px',
              flexShrink: 0,
              borderRadius: '50%',
              background: 'var(--brand-gradient-spicy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: '#fff', letterSpacing: '-.02em' }}>WCS</span>
          </div>
          <div>
            <p style={{ margin: '0 0 10px', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '.14em', color: 'rgba(255,255,255,.45)' }}>
              Board Certification
            </p>
            <h3 style={{ margin: '0 0 12px', color: '#fff', fontSize: 'clamp(18px,2.2vw,24px)' }}>What is a Board-Certified WCS?</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, maxWidth: '68ch', fontSize: '0.98rem' }}>
              A Women's &amp; Pelvic Health Clinical Specialist (WCS) holds the highest board certification in the field, awarded through the American Physical Therapy Association. Fewer than 1% of PTs hold this credential — it signifies advanced clinical expertise, rigorous examination, and an ongoing commitment to evidence-based pelvic and women's health practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--surface-tint)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: '56px' }}>
        <img
          src={leafLeaves}
          alt=""
          aria-hidden="true"
          style={{ width: '200px', flexShrink: 0, opacity: 0.22, filter: 'grayscale(1) brightness(0)' }}
        />
        <div>
          <span style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--brand)', opacity: 0.35, fontFamily: 'Georgia,serif', display: 'block', marginBottom: '8px' }}>"</span>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(19px,2.3vw,27px)', lineHeight: 1.5, color: 'var(--ink-900)', margin: '0 0 20px' }}>
            My philosophy of care is the personal touch that is fundamental to overall well-being. Whether working one-on-one with a patient, teaching, or mentoring, my goal is evidence-based, compassionate care that empowers individuals to reclaim their quality of life.
          </p>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '.02em' }}>— Dr. Rebecca G. Stephenson, PT, DPT</p>
        </div>
      </div>
    </section>
  );
}

function BookSpotlight() {
  return (
    <section style={{ padding: '88px 0', background: 'var(--brand-gradient-spicy)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '48px', alignItems: 'center' }}>
        <div
          style={{
            width: '160px',
            aspectRatio: '3/4',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(255,255,255,.15)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255,255,255,.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '0.9rem', lineHeight: 1.35 }}>The PT's Guide to Women's Pelvic, Perinatal &amp; Reproductive Health</span>
        </div>
        <div>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', color: 'rgba(255,255,255,.7)', margin: '0 0 10px' }}>Lead Author · Taylor &amp; Francis, 2025</p>
          <h3 style={{ margin: '0 0 14px', fontSize: 'clamp(18px,2.3vw,26px)', color: '#fff' }}>The definitive clinical reference for pelvic health</h3>
          <p style={{ color: 'rgba(255,255,255,.75)', margin: '0 0 22px', lineHeight: 1.65 }}>
            Dr. Stephenson is lead author of this landmark textbook — evidence-based care across the full lifespan, for pelvic health specialists. Available in print and digital editions.
          </p>
          <Button variant="onBand" size="sm" iconRight={<span>→</span>}>View on VitalSource</Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { quote: 'After two births I finally feel like myself again. Rebecca’s expertise is simply unmatched.', name: 'Postpartum patient', category: 'Postpartum recovery' },
    { quote: 'She explained every step and never once rushed me. I felt safe and respected the entire time.', name: 'Pelvic-pain patient', category: 'Chronic pelvic pain' },
    { quote: 'Mentoring with Rebecca reshaped how I practice. She truly is a teacher of teachers.', name: 'PT mentee', category: 'Clinical mentorship' },
  ];
  return (
    <section style={{ padding: '104px 0', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
        <SectionHead eyebrow="Patient & mentee voices" title="Care that people remember" center />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
          {t.map((x) => (
            <Testimonial key={x.name} quote={x.quote} name={x.name} category={x.category} />
          ))}
        </div>
        <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
          Placeholder testimonials — swap in real, consented quotes before launch.
        </p>
      </div>
    </section>
  );
}

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />
      <TrustBar />
      <Services />
      <Bio />
      <WCSCallout />
      <Philosophy />
      <BookSpotlight />
      <Testimonials />
      <section style={{ padding: '80px 0', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
          <CTABand
            tone="gradient"
            eyebrow="Ready to take the first step?"
            title="Start your journey to better health"
            description="Schedule an initial evaluation — a private, 60-minute visit where we listen, assess, and build a plan together."
            leafSrc={leafLeaves}
          >
            <Button variant="onBand" size="lg" onClick={() => navigate('/contact')}>Book a Consultation</Button>
            <Button variant="onBand" size="lg" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.45)' }}>508-740-0663</Button>
          </CTABand>
        </div>
      </section>
    </div>
  );
}
