import type { ServiceInfo } from '../data/services';

/** Site-wide constants for structured data. Single source: docs/key-facts.md. */
export const SITE = {
  url: 'https://stephensonpt.com',
  name: 'Stephenson Physical Therapy',
  practitioner: 'Rebecca Stephenson',
  telephone: '+1-508-740-0663',
  address: {
    streetAddress: '8 Pleasant St Unit 8E',
    addressLocality: 'South Natick',
    addressRegion: 'MA',
    postalCode: '01760',
    addressCountry: 'US',
  },
} as const;

export function canonicalFor(slug: string): string {
  return `${SITE.url}/services/${slug}`;
}

/** Resolve a possibly root-relative asset path to an absolute URL (OG scrapers require full URLs). */
export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE.url}${path}`;
}

/** Serialize JSON-LD safely for inline <script> embedding. */
export function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** The practice entity, shared by service pages and the home page. */
export function buildBusinessJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE.url}/#practice`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.telephone,
    address: { '@type': 'PostalAddress', ...SITE.address },
    founder: { '@type': 'Person', name: SITE.practitioner },
  };
}

export function titleFor(service: ServiceInfo): string {
  return service.content?.seo?.title ?? `${service.title} | ${SITE.name}`;
}

export function descriptionFor(service: ServiceInfo): string {
  return service.content?.seo?.metaDescription ?? service.desc;
}

/**
 * Build the page's full structured-data graph: MedicalWebPage (about a
 * MedicalBusiness), BreadcrumbList, and — when the service declares a
 * `faq` section — FAQPage. Emitted as one @graph so crawlers get a single
 * coherent entity set per page.
 */
export function buildServiceJsonLd(service: ServiceInfo): object {
  const canonical = service.content?.seo?.canonical ?? canonicalFor(service.slug);

  const { '@context': _ctx, ...business } = buildBusinessJsonLd() as Record<string, unknown>;

  const webPage = {
    '@type': 'MedicalWebPage',
    '@id': canonical,
    url: canonical,
    name: titleFor(service),
    description: descriptionFor(service),
    about: { '@id': business['@id'] },
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: canonical },
    ],
  };

  const graph: object[] = [business, webPage, breadcrumb];

  const faqSections = service.content?.sections?.filter((s) => s.kind === 'faq') ?? [];
  const faqItems = faqSections.flatMap((s) => s.items);
  if (faqItems.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
