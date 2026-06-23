import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { CTABand } from '../components/marketing/CTABand.jsx';
import headshot2 from '../assets/headshot-2.jpg';

const EXPERIENCE = [
  ["Brigham & Women's Hospital", "Built and led pelvic & women's health physical therapy"],
  ['Massachusetts General Hospital', "Clinical specialist, pelvic & women's health"],
  ['MGH Institute of Health Professions', 'Faculty — doctorate of physical therapy'],
  ['Academy of Pelvic Health', "Board-certified Women's Health Clinical Specialist (WCS)"],
  ['Taylor & Francis, 2025', 'Lead author — landmark clinical textbook'],
];

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader eyebrow="About" title="Four decades of compassionate, expert care" />
      <section className="py-[72px]">
        <div className="container-site grid gap-[50px] items-start" style={{ gridTemplateColumns: '.8fr 1.2fr' }}>
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ aspectRatio: '4/5' }}>
            <img src={headshot2} alt="Dr. Rebecca Stephenson" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[1.13rem] text-ink-700 mt-0">
              Rebecca G. Stephenson, PT, DPT, MS, CLT, WCS, is a Board-Certified Women's &amp; Pelvic Health Clinical Specialist
              treating all genders. Her care blends deep clinical expertise with a personal, compassionate approach.
            </p>
            <Card tone="tint" padding="26px" className="mt-2">
              <h4 className="m-0 mb-2 text-[1.2rem]">What is a Board-Certified WCS?</h4>
              <p className="m-0 text-ink-500">
                A Women's Health Clinical Specialist holds the highest board certification in pelvic and women's health — earned
                through thousands of supervised clinical hours and a rigorous national exam. Only a small percentage of physical
                therapists achieve it.
              </p>
            </Card>
            <div className="mt-8">
              {EXPERIENCE.map(([when, what], i) => (
                <div
                  key={when}
                  className={`grid gap-6 py-[18px] border-t border-line ${i === EXPERIENCE.length - 1 ? 'border-b' : ''}`}
                  style={{ gridTemplateColumns: '220px 1fr' }}
                >
                  <div className="font-display font-semibold text-indigo-700">{when}</div>
                  <div className="text-ink-700">{what}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[104px]">
        <div className="container-site">
          <CTABand
            eyebrow="Work with Rebecca"
            title="Compassionate care, built around you"
            description="Schedule a private, 60-minute first visit at our South Natick practice."
          >
            <Button variant="onBand" size="lg" onClick={() => navigate('/contact')}>
              Book a Consultation
            </Button>
          </CTABand>
        </div>
      </section>
    </div>
  );
}
