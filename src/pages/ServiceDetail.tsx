import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/core/Button';
import { Card } from '../components/core/Card';
import { CTABand } from '../components/marketing/CTABand';
import { ServiceHero } from '../components/marketing/ServiceHero';
import { ServiceArticle } from '../components/marketing/ServiceArticle';
<<<<<<< HEAD
import { Breadcrumb } from '../components/marketing/Breadcrumb';
=======
<<<<<<< Updated upstream
import { services } from '../data/services';
=======
>>>>>>> feature/new_service_page_layout
import { ConditionsSection } from '../components/marketing/ConditionsSection';
import { ServiceFaq } from '../components/marketing/ServiceFaq';
import { ServiceFeature } from '../components/marketing/ServiceFeature';
import { ExpectSteps } from '../components/marketing/ExpectSteps';
import { RelatedServices } from '../components/marketing/RelatedServices';
import { SectionEyebrow } from '../components/marketing/SectionEyebrow';
import { ServiceSeo } from '../components/ServiceSeo';
import { services, type ServiceSection } from '../data/services';
<<<<<<< HEAD
import leafLeaves from '../assets/leaf-leaves.png';
import s from './ServiceDetail.module.css';

/** Render a single composable content block by its discriminated `kind`. */
function renderSection(section: ServiceSection, key: number) {
  switch (section.kind) {
    case 'conditions':
      return <ConditionsSection key={key} title={section.title} groups={section.groups} />;
    case 'faq':
      return <ServiceFaq key={key} title={section.title} items={section.items} />;
    case 'feature':
      return (
        <ServiceFeature
          key={key}
          title={section.title}
          body={section.body}
          image={section.image}
          imageSide={section.imageSide}
        />
      );
    case 'expect':
      return <ExpectSteps key={key} title={section.title} steps={section.steps} />;
    case 'callout':
      return (
        <section key={key} className="svc-section--tight">
          <div className="svc-wrap--narrow">
            <Card
              tone={section.tone === 'brand' ? 'brand' : 'tint'}
              padding="clamp(28px, 4vw, 44px)"
              radius="lg"
            >
              <SectionEyebrow light={section.tone === 'brand'}>{section.title}</SectionEyebrow>
              <p className={s.calloutBody}>{section.body}</p>
            </Card>
          </div>
        </section>
      );
    default:
      return null;
  }
}
=======
>>>>>>> Stashed changes
import leafLeaves from '../assets/leaf-leaves.png';
>>>>>>> feature/new_service_page_layout

export function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
<<<<<<< HEAD
  const service = services.find((svc) => svc.slug === slug);
=======
  const service = services.find((s) => s.slug === slug);
>>>>>>> feature/new_service_page_layout

  if (!service) return <Navigate to="/services" replace />;

  const c = service.content;

  if (c) {
    return (
<<<<<<< HEAD
      <div className={s.page}>
        <ServiceSeo service={service} />
        <ServiceHero
          eyebrow={service.title}
=======
<<<<<<< Updated upstream
      <div style={{ background: 'var(--cream)' }}>
=======
      <div className={s.page}>
        <ServiceSeo service={service} />
>>>>>>> Stashed changes
        <ServiceHero
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Services', to: '/services' },
            { label: service.title },
          ]}
>>>>>>> feature/new_service_page_layout
          headline={c.headline}
          claim={c.claim}
          image={c.heroImage}
          imageSide={c.heroImageSide}
<<<<<<< HEAD
          breadcrumb={
            <Breadcrumb
              items={[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: service.title },
              ]}
            />
          }
=======
>>>>>>> feature/new_service_page_layout
        />
        <ServiceArticle
          intro={c.intro}
          insetImage={c.insetImage}
          mainBody={c.mainBody}
          externalLink={c.externalLink}
          specializedTreatments={c.specializedTreatments}
          closer={c.closer}
        />
<<<<<<< HEAD
        {c.sections?.map((section, i) => renderSection(section, i))}
        <RelatedServices currentSlug={service.slug} slugs={c.relatedSlugs} />
        <section className={s.ctaSection}>
          <div className={s.ctaWrap}>
=======
        <section style={{ padding: '88px 40px 104px' }}>
          <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
>>>>>>> feature/new_service_page_layout
            <CTABand
              tone="gradient"
              eyebrow={c.cta.phrase}
              title="Ready to start?"
              leafSrc={leafLeaves}
            >
              <Button variant="onBand" size="lg" onClick={() => navigate('/contact')}>
                {c.cta.button}
              </Button>
            </CTABand>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <ServiceSeo service={service} />
      <PageHeader eyebrow="What we offer" title={service.title} lede={service.desc} />
      <section className={s.soonSection}>
        <div className={s.soonWrap}>
          <Card tone="surface" padding="40px">
<<<<<<< HEAD
            <img src={service.icon} alt="" className={s.soonIcon} width={64} height={64} />
            <h3 className={s.soonTitle}>Detailed page coming soon</h3>
            <p className={s.soonBody}>
=======
            <img
              src={service.icon}
              alt=""
              style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '20px' }}
            />
            <h3 style={{ margin: '0 0 12px', fontSize: '1.4rem' }}>Detailed page coming soon</h3>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 28px' }}>
>>>>>>> feature/new_service_page_layout
              We're putting together a full overview of our {service.title.toLowerCase()} care. In the
              meantime, reach out and we'll answer any questions directly.
            </p>
            <div className={s.soonActions}>
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Book a Consultation
              </Button>
              <Button variant="secondary" size="lg" onClick={() => navigate('/services')}>
                Back to Services
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
