import type { ReactNode } from 'react';
import leafMark from '../../assets/leaf-mark.png';

interface SectionEyebrowProps {
  children: ReactNode;
}

/**
 * The signature "leaf-tick" eyebrow that opens every major service-page
 * section, giving the long scroll a consistent visual spine.
 */
export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <p className="svc-eyebrow ds-eyebrow">
      <img className="svc-eyebrow__leaf" src={leafMark} alt="" aria-hidden="true" />
      {children}
    </p>
  );
}
