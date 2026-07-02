import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/core/Button';
import { Card } from '../components/core/Card';
import { CTABand } from '../components/marketing/CTABand';
import { ServiceHero } from '../components/marketing/ServiceHero';
import { ServiceArticle } from '../components/marketing/ServiceArticle';
import { Breadcrumb } from '../components/marketing/Breadcrumb';
import { ConditionsSection } from '../components/marketing/ConditionsSection';
import { ServiceFaq } from '../components/marketing/ServiceFaq';
import { ServiceFeature } from '../components/marketing/ServiceFeature';
import { ExpectSteps } from '../components/marketing/ExpectSteps';
import { RelatedServices } from '../components/marketing/RelatedServices';
import { SectionEyebrow } from '../components/marketing/SectionEyebrow';
import { services, type ServiceSection } from '../data/services';
import leafLeaves from '../assets/leaf-leaves.png';

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
              <SectionEyebrow>{section.title}</SectionEyebrow>
              <p style={{ margin: 0, lineHeight: 'var(--lh-relaxed)', maxWidth: '58ch' }}>{section.body}</p>
            </Card>
          </div>
        </section>
      );
    default:
      return null;
  }
}

export function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const c = service.content;

  if (c) {
    return (
      <div style={{ background: 'var(--cream)' }}>
        <div className="svc-wrap" style={{ paddingTop: 'var(--space-8)' }}>
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: service.title },
            ]}
          />
        </div>
        <ServiceHero
          eyebrow={service.title}
          headline={c.headline}
          claim={c.claim}
          image={c.heroImage}
          imageSide={c.heroImageSide}
        />
        <ServiceArticle
          intro={c.intro}
          insetImage={c.insetImage}
          mainBody={c.mainBody}
          externalLink={c.externalLink}
          specializedTreatments={c.specializedTreatments}
          closer={c.closer}
        />
        {c.sections?.map((section, i) => renderSection(section, i))}
        <RelatedServices currentSlug={service.slug} slugs={c.relatedSlugs} />
        <section style={{ padding: '88px 40px 104px' }}>
          <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
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
      <PageHeader eyebrow="What we offer" title={service.title} lede={service.desc} />
      <section style={{ padding: '88px 0 104px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <Card tone="surface" padding="40px">
            <img
              src={service.icon}
              alt=""
              style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '20px' }}
            />
            <h3 style={{ margin: '0 0 12px', fontSize: '1.4rem' }}>Detailed page coming soon</h3>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 28px' }}>
              We're putting together a full overview of our {service.title.toLowerCase()} care. In the
              meantime, reach out and we'll answer any questions directly.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
