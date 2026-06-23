import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Card } from '../components/ui/Card.jsx';
import { ServiceCard } from '../components/marketing/ServiceCard.jsx';
import { CTABand } from '../components/marketing/CTABand.jsx';
import { SERVICES } from '../data/services.js';

const DIAGNOSES = [
  'Urinary incontinence',
  'Pelvic organ prolapse',
  'Diastasis recti',
  'Pudendal neuralgia',
  'Dyspareunia',
  'Lymphedema',
  'Osteoporosis',
  'Coccyx pain',
  'Pregnancy-related pain',
];

export default function ServicesPage() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader
        eyebrow="What we offer"
        title="Specialized care, grouped around you"
        lede="Evidence-based treatment across pelvic, women's, oncologic and orthopedic health — for all genders, at every stage of life."
      />
      <section className="py-[88px]">
        <div className="container-site grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.desc} linkLabel="What this includes" href="#" onClick={(e) => e.preventDefault()} />
          ))}
        </div>
      </section>
      <section className="pb-[88px]">
        <div className="container-site">
          <Card tone="surface" padding="40px" leaf>
            <p className="ds-eyebrow m-0 mb-3">Common diagnoses</p>
            <h3 className="m-0 mb-5 text-[1.6rem]">Conditions we treat every week</h3>
            <div className="flex flex-wrap gap-2.5">
              {DIAGNOSES.map((d) => (
                <Badge key={d} tone="plum" variant="soft" size="md">
                  {d}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className="pb-[104px]">
        <div className="container-site">
          <CTABand
            eyebrow="Not sure where you fit?"
            title="Let's talk it through"
            description="A first visit is a conversation. We'll listen, assess, and build a plan together."
            tone="gradient"
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
