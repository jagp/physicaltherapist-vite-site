import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { CTABand } from '../components/marketing/CTABand.jsx';
import { CredentialBand } from '../components/marketing/CredentialBand.jsx';
import { ServiceCard } from '../components/marketing/ServiceCard.jsx';
import { StatCard } from '../components/marketing/StatCard.jsx';
import { Testimonial } from '../components/marketing/Testimonial.jsx';
import { SectionHead } from '../components/layout/SectionHead.jsx';
import { SERVICES } from '../data/services.js';
import leafLeaves from '../assets/leaf-leaves.png';
import headshot1 from '../assets/headshot-1.jpg';
import headshot3 from '../assets/headshot-3.jpg';

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
      <img
        src={leafLeaves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[30px] -right-2.5 w-[150px] opacity-[0.07]"
        style={{ filter: 'grayscale(1) brightness(0)' }}
      />
      <div className="container-site py-[52px] pb-[73px]">
        <div className="grid items-center gap-[54px]" style={{ gridTemplateColumns: '1.05fr .95fr' }}>
          <div>
            <p className="ds-eyebrow m-0 mb-3.5">Pelvic &amp; Women's Health · South Natick, MA</p>
            <h1 className="text-[clamp(34px,4.4vw,56px)] m-0 mb-[22px]">Expert pelvic &amp; women's health care in South Natick</h1>
            <p className="text-[1.13rem] text-ink-500 max-w-[54ch] mb-[30px]">
              Rebecca G. Stephenson, PT, DPT, is a Board-Certified Specialist treating pelvic and women's health concerns for all
              genders — compassionate, evidence-based care in a private practice setting.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Book a Consultation
              </Button>
              <Button variant="secondary" size="lg" iconRight={<span>→</span>} onClick={() => navigate('/services')}>
                Explore Our Services
              </Button>
            </div>
          </div>
          <div className="relative min-h-[380px] rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '4/4.4' }}>
            <img src={headshot1} alt="Dr. Rebecca Stephenson" className="w-full h-full object-cover" style={{ objectPosition: '50% 18%' }} />
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

function Services() {
  const navigate = useNavigate();
  return (
    <section className="py-[104px]">
      <div className="container-site">
        <SectionHead
          eyebrow="What we offer"
          title="Comprehensive care for every stage of life"
          lede="Specialized, evidence-based treatment grouped so you can quickly find yourself in the care we provide."
        />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.desc} onClick={(e) => { e.preventDefault(); navigate('/services'); }} href="#" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bio() {
  const navigate = useNavigate();
  const chips = ['PT, DPT, MS', 'Board-Certified WCS', 'Lymphedema · CLT', 'Pilates Rehab', 'Childbirth Educator'];
  return (
    <section className="py-[104px] bg-linen">
      <div className="container-site">
        <div className="grid items-center gap-[50px]" style={{ gridTemplateColumns: '.85fr 1.15fr' }}>
          <div
            className="relative overflow-hidden shadow-lg"
            style={{ aspectRatio: '4/5', borderRadius: '999px 999px var(--radius-lg) var(--radius-lg)' }}
          >
            <img src={headshot3} alt="Dr. Rebecca Stephenson" className="w-full h-full object-cover" style={{ objectPosition: '50% 20%' }} />
          </div>
          <div>
            <p className="ds-eyebrow m-0 mb-3.5">About</p>
            <h2 className="m-0 mb-[18px] text-[clamp(28px,3.4vw,42px)]">Meet Dr. Rebecca Stephenson</h2>
            <p className="text-ink-700 text-[1.05rem] mb-[22px]">
              Rebecca G. Stephenson, PT, DPT, MS, CLT, WCS, is a Board-Certified Women's &amp; Pelvic Health Clinical Specialist
              treating all genders. Across a career spanning four decades she built and led pelvic and women's health practices at
              Brigham and Women's Hospital and Mass General, and is lead author of{' '}
              <em>The Physical Therapy Guide to Women's, Pelvic, Reproductive and Perinatal Health</em> (Taylor &amp; Francis, 2025).
            </p>
            <div className="flex flex-wrap gap-[9px] mb-6">
              {chips.map((c) => (
                <Badge key={c} tone="slate" variant="soft">
                  {c}
                </Badge>
              ))}
            </div>
            <Button variant="link" iconRight={<span>→</span>} onClick={() => navigate('/about')}>
              Read the full bio
            </Button>
          </div>
        </div>
        <div className="grid gap-4 mt-[46px]" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          <StatCard value="40+" label="Years in practice" accent="var(--color-iris-600)" />
          <StatCard value="WCS" label="Board-certified specialist" accent="var(--color-plum-600)" />
          <StatCard value="DPT" label="MGH Institute of Health Professions" accent="var(--color-slate-600)" />
          <StatCard value="2025" label="Lead textbook author" tone="plum" />
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-[104px] bg-indigo-100 text-center">
      <div className="max-w-[820px] mx-auto px-10">
        <img src={leafLeaves} alt="" aria-hidden="true" className="h-[52px] mx-auto mb-[22px] block" />
        <p className="font-display text-[clamp(20px,2.5vw,29px)] leading-[1.45] text-ink-900 m-0">
          "My philosophy of care is the personal touch that is fundamental to overall well-being. My goal is evidence-based,
          compassionate care that empowers individuals to reclaim their quality of life."
        </p>
        <p className="mt-[22px] text-ink-500 font-semibold tracking-[.02em]">— Dr. Rebecca G. Stephenson, PT, DPT</p>
      </div>
    </section>
  );
}

function BookSpotlight() {
  return (
    <section className="py-[88px] bg-linen border-t border-b border-line">
      <div className="max-w-[880px] mx-auto px-10 grid items-center gap-12" style={{ gridTemplateColumns: 'auto 1fr' }}>
        <div className="w-[170px] flex items-center justify-center p-5 text-center bg-gradient-to-br from-plum-600 to-iris-600 rounded-md shadow-lg" style={{ aspectRatio: '3/4' }}>
          <span className="font-display text-white text-[0.95rem] leading-[1.3]">
            The PT's Guide to Women's Pelvic, Perinatal &amp; Reproductive Health
          </span>
        </div>
        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[.15em] text-indigo-700 m-0 mb-2.5">
            Lead Author · Taylor &amp; Francis, 2025
          </p>
          <h3 className="m-0 mb-3.5 text-[clamp(18px,2.3vw,26px)]">The definitive clinical reference for pelvic health</h3>
          <p className="text-ink-500 m-0 mb-[22px]">
            Dr. Stephenson is lead author of this landmark textbook — evidence-based care across the full lifespan, for pelvic
            health specialists. Available in print and digital editions.
          </p>
          <Button variant="link" iconRight={<span>→</span>}>
            View on VitalSource
          </Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { quote: "After two births I finally feel like myself again. Rebecca's expertise is simply unmatched.", name: 'Postpartum patient', category: 'Postpartum recovery' },
    { quote: 'She explained every step and never once rushed me. I felt safe and respected the entire time.', name: 'Pelvic-pain patient', category: 'Chronic pelvic pain' },
    { quote: 'Mentoring with Rebecca reshaped how I practice. She truly is a teacher of teachers.', name: 'PT mentee', category: 'Clinical mentorship' },
  ];
  return (
    <section className="py-[104px]">
      <div className="container-site">
        <SectionHead eyebrow="Patient & mentee voices" title="Care that people remember" center />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {t.map((x) => (
            <Testimonial key={x.name} quote={x.quote} name={x.name} category={x.category} />
          ))}
        </div>
        <p className="mt-5 text-[0.8rem] text-ink-500 text-center italic">
          Placeholder testimonials — swap in real, consented quotes before launch.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />
      <TrustBar />
      <Services />
      <Bio />
      <Philosophy />
      <BookSpotlight />
      <Testimonials />
      <section className="py-[104px]">
        <div className="container-site">
          <CTABand
            eyebrow="Ready to take the first step?"
            title="Start your journey to better health"
            description="Schedule a private, 60-minute evaluation — expert, board-certified care built around you."
          >
            <Button variant="onBand" size="lg" onClick={() => navigate('/contact')}>
              Book a Consultation
            </Button>
            <Button variant="onBand" size="lg" className="!bg-transparent !text-white border border-white/50">
              508-740-0663
            </Button>
          </CTABand>
        </div>
      </section>
    </div>
  );
}
