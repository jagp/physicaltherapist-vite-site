import { Link } from 'react-router-dom';
import { SectionEyebrow } from './SectionEyebrow';
import { services } from '../../data/services';

interface RelatedServicesProps {
  /** Slug of the current service (always excluded). */
  currentSlug: string;
  /** Explicit slugs to show; defaults to the first three siblings. */
  slugs?: string[];
}

/**
 * Cross-links to sibling services — internal-linking SEO plus a natural
 * "not quite what you need?" exit path that keeps visitors on the site.
 */
export function RelatedServices({ currentSlug, slugs }: RelatedServicesProps) {
  const related = (
    slugs
      ? slugs.map((s) => services.find((svc) => svc.slug === s)).filter((svc) => svc !== undefined)
      : services.filter((svc) => svc.slug !== currentSlug)
  )
    .filter((svc) => svc.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="svc-section--tight">
      <div className="svc-wrap">
        <SectionEyebrow>Explore more care</SectionEyebrow>
        <h2 style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--fs-h4)' }}>Related services</h2>
        <div className="svc-related-grid">
          {related.map((svc) => (
            <Link key={svc.slug} to={`/services/${svc.slug}`} className="svc-related-card">
              <img src={svc.icon} alt="" aria-hidden="true" />
              <span>
                <strong style={{ display: 'block', fontWeight: 'var(--fw-semibold)', marginBottom: '2px' }}>
                  {svc.title}
                </strong>
                <span style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>{svc.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
