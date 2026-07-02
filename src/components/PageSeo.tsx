import { SITE } from '../lib/serviceJsonLd';

interface PageSeoProps {
  /** Page-specific part of the title; site name is appended automatically. */
  title?: string;
  description: string;
  /** Path from the site root, e.g. "/about". Defaults to "/". */
  path?: string;
}

/**
 * Per-page <head> basics for the static pages (Home/About/Services/FAQ/
 * Contact). Service detail pages use the richer ServiceSeo instead. React 19
 * hoists these into <head>; under SSG they land in each page's static HTML.
 */
export function PageSeo({ title, description, path = '/' }: PageSeoProps) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const canonical = `${SITE.url}${path === '/' ? '' : path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </>
  );
}
