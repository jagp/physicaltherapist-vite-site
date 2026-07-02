import type { ServiceInfo } from '../data/services';

/** Site-wide constants for structured data. Single source: docs/key-facts.md. */
export const SITE = {
  url: 'https://stephensonpt.com',
  name: 'Stephenson Physical Therapy',
  practitioner: 'Rebecca Stephenson',
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

  const business = {
    '@type': 'MedicalBusiness',
    '@id': `${SITE.url}/#practice`,
    name: SITE.name,
    url: SITE.url,
    address: { '@type': 'PostalAddress', ...SITE.address },
    founder: { '@type': 'Person', name: SITE.practitioner },
  };

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
