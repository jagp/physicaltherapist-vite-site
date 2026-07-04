import type { ReactNode } from 'react';
import type { ServiceImage } from '../../data/services';
import s from './ServiceHero.module.css';

interface ServiceHeroProps {
  headline: ReactNode;
  claim: ReactNode;
  image: ServiceImage;
  imageSide?: 'left' | 'right';
  eyebrow?: ReactNode;
}

export function ServiceHero({
  headline,
  claim,
  image,
  imageSide = 'left',
  eyebrow,
}: ServiceHeroProps) {
  return (
    <section className={s.hero}>
      <div className={`${s.grid} ${imageSide === 'left' ? s.imgLeft : s.imgRight}`}>
        <div className={s.media}>
          {/* intrinsic 1448x1086 (5:4-ish); srcset pipeline lands in Task 8 */}
          <img src={image.src} alt={image.alt} width={1448} height={1086} fetchPriority="high" />
          <div className={s.fade} aria-hidden="true" />
        </div>
        <div className={s.txt}>
          {eyebrow && <p className={`ds-eyebrow ${s.eyebrow}`}>{eyebrow}</p>}
          <h1 className={s.headline}>{headline}</h1>
          <p className={s.claim}>{claim}</p>
        </div>
      </div>
    </section>
  );
}
