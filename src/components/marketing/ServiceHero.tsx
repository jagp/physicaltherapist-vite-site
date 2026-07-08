import type { ReactNode } from 'react';
import type { ServiceImage } from '../../data/services';
import { ResponsiveImage } from '../core/ResponsiveImage';
import s from './ServiceHero.module.css';

interface ServiceHeroProps {
  headline: ReactNode;
  claim: ReactNode;
  image: ServiceImage;
  imageSide?: 'left' | 'right';
  eyebrow?: ReactNode;
  /** Breadcrumb trail floated over the image (top corner on the image side). */
  breadcrumb?: ReactNode;
}

export function ServiceHero({
  headline,
  claim,
  image,
  imageSide = 'left',
  eyebrow,
  breadcrumb,
}: ServiceHeroProps) {
  return (
    <section className={s.hero}>
      {breadcrumb && (
        <div className={`${s.crumbs} ${imageSide === 'left' ? s.crumbsLeft : s.crumbsRight}`}>
          {breadcrumb}
        </div>
      )}
      <div className={`${s.grid} ${imageSide === 'left' ? s.imgLeft : s.imgRight}`}>
        <div className={s.media}>
          {image.avifSrcSet && image.webpSrcSet ? (
            <ResponsiveImage
              avifSrcSet={image.avifSrcSet}
              webpSrcSet={image.webpSrcSet}
              src={image.src}
              sizes="(max-width: 767px) 100vw, 50vw"
              alt={image.alt}
              width={image.width ?? 1448}
              height={image.height ?? 1086}
              priority
            />
          ) : (
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} fetchPriority="high" />
          )}
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
