import { SITE, buildBusinessJsonLd, jsonLdString } from '../lib/serviceJsonLd';

interface PageSeoProps {
  /** Page-specific part of the title; site name is appended automatically. */
  title?: string;
  description: string;
  /** Path from the site root, e.g. "/about". Defaults to "/". */
  path?: string;
  /** Emit the MedicalBusiness JSON-LD entity (enable on the home page). */
  businessJsonLd?: boolean;
}

/**
 * Per-page <head> basics for the static pages (Home/About/Services/FAQ/
 * Contact). Service detail pages use the richer ServiceSeo instead. React 19
 * hoists these into <head>; under SSG they land in each page's static HTML.
 */
export function PageSeo({ title, description, path = '/', businessJsonLd = false }: PageSeoProps) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  // Root canonical keeps its trailing slash so it matches the sitemap entry.
  const canonical = path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      {businessJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(buildBusinessJsonLd()) }}
        />
      )}
    </>
  );
}
