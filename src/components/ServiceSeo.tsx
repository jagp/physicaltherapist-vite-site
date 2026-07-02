import type { ServiceInfo } from '../data/services';
import { buildServiceJsonLd, canonicalFor, descriptionFor, titleFor } from '../lib/serviceJsonLd';

interface ServiceSeoProps {
  service: ServiceInfo;
}

/**
 * Per-service <head> surface: title, meta description, canonical, Open
 * Graph, and the JSON-LD graph. React 19 hoists title/meta/link into
 * <head> natively (client and server render alike), so under SSG these
 * land in the static HTML. The JSON-LD script renders in place — valid
 * for crawlers anywhere in the document.
 */
export function ServiceSeo({ service }: ServiceSeoProps) {
  const title = titleFor(service);
  const description = descriptionFor(service);
  const canonical = service.content?.seo?.canonical ?? canonicalFor(service.slug);
  const ogImage = service.content?.seo?.ogImage ?? service.content?.heroImage.src;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceJsonLd(service)) }}
      />
    </>
  );
}
