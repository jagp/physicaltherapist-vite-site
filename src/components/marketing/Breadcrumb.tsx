import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export interface Crumb {
  label: string;
  /** Omit on the current (last) page. */
  to?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

/**
 * Accessible breadcrumb trail. Rendered as a labeled <nav> landmark; the
 * current page is the last item and carries aria-current. Also the source
 * of the BreadcrumbList structured data (built separately in serviceJsonLd).
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="svc-crumbs">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Fragment key={item.label}>
            {i > 0 && (
              <span className="svc-crumbs__sep" aria-hidden="true">
                ›
              </span>
            )}
            {isLast || !item.to ? (
              <span className="svc-crumbs__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
