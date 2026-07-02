import type { ReactNode } from 'react';
import leafMark from '../../assets/leaf-mark.png';

interface SectionEyebrowProps {
  children: ReactNode;
  /** Light-on-dark variant for brand/plum/gradient surfaces. */
  light?: boolean;
}

/**
 * The signature "leaf-tick" eyebrow that opens every major service-page
 * section, giving the long scroll a consistent visual spine.
 */
export function SectionEyebrow({ children, light = false }: SectionEyebrowProps) {
  return (
    <p
      className="svc-eyebrow ds-eyebrow"
      style={light ? { color: 'var(--text-on-brand-soft)' } : undefined}
    >
      <img
        className="svc-eyebrow__leaf"
        src={leafMark}
        alt=""
        aria-hidden="true"
        style={light ? { filter: 'grayscale(1) brightness(8)' } : undefined}
      />
      {children}
    </p>
  );
}
