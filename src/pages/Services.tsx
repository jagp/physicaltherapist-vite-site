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
      <section style={{ padding: "88px 0" }}>
        <div
          style={{
            maxWidth: "var(--maxw)",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "22px",
            }}
          >
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.desc}
                linkLabel="What this includes"
                href={`/services/${s.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/services/${s.slug}`);
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "0 0 88px" }}>
        <div
          style={{
            maxWidth: "var(--maxw)",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <Card tone="surface" padding="40px" leaf leafSrc={leafLeaves}>
            <p className="ds-eyebrow" style={{ margin: "0 0 12px" }}>
              Common diagnoses
            </p>
            <h3 style={{ margin: "0 0 20px", fontSize: "1.6rem" }}>
              Conditions we treat every week
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {diagnoses.map((d) => (
                <Badge key={d} tone="plum" variant="soft" size="md">
                  {d}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section style={{ padding: "0 0 104px" }}>
        <div
          style={{
            maxWidth: "var(--maxw)",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <CTABand
            eyebrow="Not sure where you fit?"
            title="Let's talk it through"
            description="A first visit is a conversation. We'll listen, assess, and build a plan together."
            tone="gradient"
            leafSrc={leafLeaves}
          >
            <Button
              variant="onBand"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              Book a Consultation
            </Button>
          </CTABand>
        </div>
      </section>
    </div>
  );
}
