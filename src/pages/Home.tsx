import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PageSeo } from "../components/PageSeo";
import { Button } from "../components/core/Button";
import { ServiceCard } from "../components/marketing/ServiceCard";
import { Testimonial } from "../components/marketing/Testimonial";
import { CTABand } from "../components/marketing/CTABand";
import { CredentialBand } from "../components/marketing/CredentialBand";
import { stephensonTrustItems } from "../components/marketing/CredentialBand.data";
import { services } from "../data/services";
import { ResponsiveImage } from "../components/core/ResponsiveImage";
import headshot2Avif from "../assets/headshot-2.jpg?w=448;672;896&format=avif&as=srcset";
import headshot2Webp from "../assets/headshot-2.jpg?w=448;672;896&format=webp&as=srcset";
import headshot2 from "../assets/headshot-2.jpg?w=896&format=jpeg";
import headshot3Avif from "../assets/headshot-3.jpg?w=448;672;896&format=avif&as=srcset";
import headshot3Webp from "../assets/headshot-3.jpg?w=448;672;896&format=webp&as=srcset";
import headshot3 from "../assets/headshot-3.jpg?w=896&format=jpeg";
import bookAvif from "../assets/pt-guide-to-pelvic-health-book.jpg?w=320;640&format=avif&as=srcset";
import bookWebp from "../assets/pt-guide-to-pelvic-health-book.jpg?w=320;640&format=webp&as=srcset";
import bookCover from "../assets/pt-guide-to-pelvic-health-book.jpg?w=640&format=jpeg";
import leafLeaves from "../assets/leaf-leaves.png";
import s from "./Home.module.css";

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
  const cls = [
    s.sectionHead,
    center && s.sectionHeadCenter,
    light && s.sectionHeadLight,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <p className={`ds-eyebrow ${s.eyebrow}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {lede && <p className={s.sectionLede}>{lede}</p>}
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();
  return (
    <section className={s.hero}>
      <div className={s.heroWrap}>
        <div className={s.heroCopy}>
          <p className={`ds-eyebrow ${s.eyebrow}`}>
            Pelvic &amp; Women's Health · South Natick, MA
          </p>
          <h1 className={s.heroTitle}>
            Expert Pelvic &amp; Women's Health Care in South Natick
          </h1>
          <p className={s.heroLede}>
            Rebecca G. Stephenson, PT, DPT, is a Board-Certified Specialist
            treating pelvic and women's health concerns for all genders —
            compassionate, evidence-based care in a private practice setting.
          </p>
          <div className={s.heroCtas}>
            <Button variant="gradient" size="lg" onClick={() => navigate("/contact")}>
              Book a Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              iconRight={<span>→</span>}
              onClick={() => navigate("/services")}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
        <div className={s.heroMedia}>
          {/* LCP image: AVIF/WebP/JPEG cascade, prioritized, never lazy */}
          <ResponsiveImage
            avifSrcSet={headshot2Avif}
            webpSrcSet={headshot2Webp}
            src={headshot2}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 540px"
            alt="Dr. Rebecca Stephenson"
            width={896}
            height={1152}
            priority
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return <CredentialBand variant="plum" items={stephensonTrustItems} />;
}

function Services() {
  const navigate = useNavigate();
  return (
    <section className={s.svcSection}>
      <div className={s.wrap}>
        <SectionHead
          eyebrow="What we offer"
          title="Comprehensive care for every stage of life"
          lede="Specialized, evidence-based treatment grouped so you can quickly find yourself in the care we provide."
          light
        />
        <div className="card-grid">
          <ul className="card-grid__list">
            {services.map((svc) => (
              <li key={svc.slug}>
                <ServiceCard
                  icon={svc.icon}
                  title={svc.title}
                  description={svc.desc}
                  dark
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/services/${svc.slug}`);
                  }}
                  href={`/services/${svc.slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Bio() {
  const navigate = useNavigate();
  const chips = [
    "PT, DPT, MS",
    "Board-Certified PWCS",
    "Lymphedema · CLT",
    "Pilates Rehab",
    "Childbirth Educator",
  ];
  return (
    <section className={s.bioSection}>
      <div className={s.wrap}>
        <div className={s.bioGrid}>
          <div className={s.bioMedia}>
            <ResponsiveImage
              avifSrcSet={headshot3Avif}
              webpSrcSet={headshot3Webp}
              src={headshot3}
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 40vw, 480px"
              alt="Dr. Rebecca Stephenson"
              width={896}
              height={1152}
            />
          </div>
          <div>
            <p className={`ds-eyebrow ${s.bioEyebrow}`}>About</p>
            <h2 className={s.bioTitle}>Meet Dr. Rebecca Stephenson</h2>
            <p className={s.bioBody}>
              Rebecca G. Stephenson, PT, DPT, MS, CLT, PWCS, is a Board-Certified
              Pelvic &amp; Women's Health Clinical Specialist treating all
              genders. Across a career spanning four decades she built and led
              pelvic and women's health practices at Brigham and Women's
              Hospital and Mass General, and is lead author of{" "}
              <em>
                The Physical Therapist's Guide to Women's Pelvic, Perinatal, and
                Reproductive Health
              </em>{" "}
              (Routledge, 2025).
            </p>
            <div className={s.chips}>
              {chips.map((c) => (
                <span key={c} className={s.chip}>
                  {c}
                </span>
              ))}
            </div>
            <Button
              variant="onBand"
              size="md"
              iconRight={<span>→</span>}
              onClick={() => navigate("/about")}
            >
              Read the full bio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WCSCallout() {
  return (
    <section className={s.pwcsSection}>
      <div className={s.wrap}>
        <div className={s.wcsCard}>
          <div className={s.wcsSeal}>
            <span>PWCS</span>
          </div>
          <div>
            <p className={s.wcsKicker}>Board Certification</p>
            <h3 className={s.wcsTitle}>What is a Board-Certified PWCS?</h3>
            <p className={s.wcsBody}>
              A Pelvic &amp; Women's Health Clinical Specialist (PWCS) holds the
              highest board certification in the field, awarded through the
              American Physical Therapy Association. Fewer than 1% of PTs hold
              this credential — it signifies advanced clinical expertise,
              rigorous examination, and an ongoing commitment to evidence-based
              pelvic and women's health practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className={s.philosophySection}>
      <div className={s.philosophyWrap}>
        <img
          src={leafLeaves}
          alt=""
          aria-hidden="true"
          className={s.philosophyLeaf}
          width={400}
          height={976}
          loading="lazy"
        />
        <div>
          <span className={s.philosophyMark}>"</span>
          <p className={s.philosophyQuote}>
            My philosophy of care is the personal touch that is fundamental to
            overall well-being. Whether working one-on-one with a patient,
            teaching, or mentoring, my goal is evidence-based, compassionate
            care that empowers individuals to reclaim their quality of life.
          </p>
          <p className={s.philosophyBy}>— Dr. Rebecca G. Stephenson, PT, DPT</p>
        </div>
      </div>
    </section>
  );
}

function BookSpotlight() {
  return (
    <section className={s.bookSection}>
      <div className={s.bookWrap}>
        <div className={s.bookCover}>
          <ResponsiveImage
            avifSrcSet={bookAvif}
            webpSrcSet={bookWebp}
            src={bookCover}
            sizes="(max-width: 599px) 40vw, 160px"
            alt="The Physical Therapist's Guide to Women's Pelvic, Perinatal, and Reproductive Health"
            width={640}
            height={914}
          />
        </div>
        <div>
          <p className={s.bookKicker}>Lead Author · Routledge, 2025</p>
          <h3 className={s.bookTitle}>
            The definitive clinical reference for pelvic health
          </h3>
          <p className={s.bookBody}>
            Dr. Stephenson is lead author of this landmark textbook —
            evidence-based care across the full lifespan, for pelvic health
            specialists. Available in print and digital editions.
          </p>
          <Button variant="onBand" size="sm" iconRight={<span>→</span>}>
            View on VitalSource
          </Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote:
        "After my C-section, Rebecca’s support made a meaningful difference in my recovery. She helped me rebuild strength and confidence, always with knowledge, patience, and care.",
      name: "Alexandra",
      category: "Pregnancy & postpartum",
    },
    {
      quote:
        "Rebecca goes so far beyond just treating pelvic floor issues — her whole approach is rooted in quality of life. I don’t just feel like my problems are managed; I feel truly well.",
      name: "Ari",
      category: "Pelvic floor therapy",
    },
  ];
  return (
    <section className={s.testimonialsSection}>
      <div className={s.wrap}>
        <SectionHead eyebrow="In patients’ words" title="Care that people remember" center />
        <div className="card-grid">
          <ul className="card-grid__list">
            {t.map((x) => (
              <li key={x.name}>
                <Testimonial quote={x.quote} name={x.name} category={x.category} />
              </li>
            ))}
          </ul>
        </div>
        <p className={s.testimonialsNote}>
          Authentic experiences shared by patients, with permission and without
          compensation.
        </p>
      </div>
    </section>
  );
}

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <PageSeo
        description="Board-certified pelvic health physical therapy in South Natick, MA. One-on-one care for pregnancy, postpartum, pelvic pain, oncology rehab, and more."
        path="/"
        businessJsonLd
      />
      <Hero />
      <Services />
      <Bio />
      <TrustBar />
      <WCSCallout />
      <Philosophy />
      <BookSpotlight />
      <Testimonials />
      <section className={s.ctaSection}>
        <div className={s.wrap}>
          <CTABand
            tone="gradient"
            eyebrow="Ready to take the first step?"
            title="Start your journey to better health"
            description="Schedule an initial evaluation — a private, 60-minute visit where we listen, assess, and build a plan together."
            leafSrc={leafLeaves}
          >
            <Button variant="onBand" size="lg" onClick={() => navigate("/contact")}>
              Book a Consultation
            </Button>
            <Button
              variant="onBand"
              size="lg"
              style={{
                background: "transparent",
                color: "#fff",
                borderColor: "rgba(255,255,255,.45)",
              }}
            >
              508-740-0663
            </Button>
          </CTABand>
        </div>
      </section>
    </div>
  );
}
