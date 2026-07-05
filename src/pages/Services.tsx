import { useNavigate } from "react-router-dom";
import { PageSeo } from '../components/PageSeo';
import { PageHeader } from "../components/PageHeader";
import { ServiceCard } from "../components/marketing/ServiceCard";
import { Card } from "../components/core/Card";
import { Badge } from "../components/core/Badge";
import { Button } from "../components/core/Button";
import { CTABand } from "../components/marketing/CTABand";
import { services } from "../data/services";
import leafLeaves from "../assets/leaf-leaves.png";
import s from "./Services.module.css";

const diagnoses = [
  "Urinary incontinence",
  "Pelvic organ prolapse",
  "Diastasis recti",
  "Pudendal neuralgia",
  "Dyspareunia",
  "Lymphedema",
  "Osteoporosis",
  "Coccyx pain",
  "Pregnancy-related pain",
];

export function Services() {
  const navigate = useNavigate();
  return (
    <div>
      <PageSeo
        title="Services"
        description="Comprehensive pelvic and women's health physical therapy: bladder health, pregnancy and postpartum, pelvic pain, oncology rehab, orthopedics, and sports recovery."
        path="/services"
      />
      <PageHeader
        eyebrow="What we offer"
        title="Specialized care, grouped around you"
        lede="Evidence-based treatment across pelvic, women's, oncologic and orthopedic health — for all genders, at every stage of life."
      />
      <section className={s.gridSection}>
        <div className={s.wrap}>
          <div className="card-grid">
            <ul className="card-grid__list">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <ServiceCard
                    icon={svc.icon}
                    title={svc.title}
                    description={svc.desc}
                    linkLabel="What this includes"
                    href={`/services/${svc.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/services/${svc.slug}`);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={s.diagnosesSection}>
        <div className={s.wrap}>
          <Card tone="surface" padding="40px" leaf leafSrc={leafLeaves}>
            <p className={`ds-eyebrow ${s.diagEyebrow}`}>Common diagnoses</p>
            <h3 className={s.diagTitle}>Conditions we treat every week</h3>
            <div className={s.chips}>
              {diagnoses.map((d) => (
                <Badge key={d} tone="plum" variant="soft" size="md">
                  {d}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className={s.ctaSection}>
        <div className={s.wrap}>
          <CTABand
            eyebrow="Not sure where you fit?"
            title="Let's talk it through"
            description="A first visit is a conversation. We'll listen, assess, and build a plan together."
            tone="gradient"
            leafSrc={leafLeaves}
          >
            <Button variant="onBand" size="lg" onClick={() => navigate("/contact")}>
              Book a Consultation
            </Button>
          </CTABand>
        </div>
      </section>
    </div>
  );
}
