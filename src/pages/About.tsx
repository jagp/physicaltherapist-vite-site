import { useNavigate } from 'react-router-dom';
import { PageSeo } from '../components/PageSeo';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/core/Card';
import { Button } from '../components/core/Button';
import { CTABand } from '../components/marketing/CTABand';
import { CareerTimeline } from '../components/marketing/CareerTimeline';
import headshot2 from '../assets/headshot-2.jpg';
import leafLeaves from '../assets/leaf-leaves.png';
import s from './About.module.css';

export function About() {
  const navigate = useNavigate();
  return (
    <div>
      <PageSeo
        title="About Rebecca Stephenson"
        description="Board-Certified Women's Health Clinical Specialist with decades of experience in pelvic health, teaching, and published research."
        path="/about"
      />
      <PageHeader eyebrow="About" title="Four decades of compassionate, expert care" />
      <section className={s.introSection}>
        <div className={`${s.wrap} ${s.introGrid}`}>
          <div className={s.portrait}>
            <img src={headshot2} alt="Dr. Rebecca Stephenson" width={896} height={1152} />
          </div>
          <div>
            <p className={s.lede}>
              Rebecca G. Stephenson, PT, DPT, MS, CLT, WCS, is a Board-Certified Women's &amp; Pelvic Health Clinical Specialist treating all genders. Her care blends deep clinical expertise with a personal, compassionate approach.
            </p>
            <Card tone="tint" padding="26px" className={s.wcsCard}>
              <h4 className={s.wcsTitle}>What is a Board-Certified WCS?</h4>
              <p className={s.wcsBody}>
                A Women's Health Clinical Specialist holds the highest board certification in pelvic and women's health — earned through thousands of supervised clinical hours and a rigorous national exam. Only a small percentage of physical therapists achieve it.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className={s.timelineSection}>
        <div className={s.wrap}>
          <CareerTimeline />
        </div>
      </section>
      <section className={s.ctaSection}>
        <div className={s.wrap}>
          <CTABand
            eyebrow="Work with Rebecca"
            title="Compassionate care, built around you"
            description="Schedule a private, 60-minute first visit at our South Natick practice."
            leafSrc={leafLeaves}
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
