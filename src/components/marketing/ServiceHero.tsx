import type { ReactNode } from 'react';
import type { ServiceImage } from '../../data/services';
<<<<<<< Updated upstream

const heroCSS = `
  @media (max-width: 768px) {
    .spt-hero-grid { grid-template-columns: 1fr !important; }
    .spt-hero-img { order: -1 !important; aspect-ratio: 4/3 !important; }
    .spt-hero-txt { order: 1 !important; }
    .spt-hero-fade { background: linear-gradient(to bottom, transparent 55%, var(--cream) 100%) !important; }
  }
`;

let heroInjected = false;
function ensureHeroCSS() {
  if (heroInjected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'service-hero');
  style.textContent = heroCSS;
  document.head.appendChild(style);
  heroInjected = true;
}
=======
import { Breadcrumb, type Crumb } from './Breadcrumb';
import { ResponsiveImage } from '../core/ResponsiveImage';
import s from './ServiceHero.module.css';
>>>>>>> Stashed changes

interface ServiceHeroProps {
  headline: ReactNode;
  claim: ReactNode;
  image: ServiceImage;
  imageSide?: 'left' | 'right';
  crumbs?: Crumb[];
}

export function ServiceHero({
  headline,
  claim,
  image,
  imageSide = 'left',
  crumbs,
}: ServiceHeroProps) {
  ensureHeroCSS();
  const isLeft = imageSide === 'left';

  return (
<<<<<<< Updated upstream
    <section style={{ background: 'var(--cream)', paddingTop: '72px', paddingBottom: '72px' }}>
      <div
        className="spt-hero-grid"
        style={{
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {/* Image column */}
        <div
          className="spt-hero-img"
          style={{
            position: 'relative',
            aspectRatio: '5/4',
            overflow: 'hidden',
            order: isLeft ? -1 : 1,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Fade toward the text side */}
          <div
            className="spt-hero-fade"
            style={{
              position: 'absolute',
              inset: 0,
              background: isLeft
                ? 'linear-gradient(to right, transparent 50%, var(--cream) 100%)'
                : 'linear-gradient(to left, transparent 50%, var(--cream) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Text column */}
        <div
          className="spt-hero-txt"
          style={{ order: isLeft ? 1 : -1 }}
        >
          {eyebrow && (
            <p className="ds-eyebrow" style={{ margin: '0 0 12px' }}>
              {eyebrow}
            </p>
          )}
          <h1
            style={{
              margin: '0 0 16px',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: 'var(--text-heading)',
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: '1.18rem',
              lineHeight: 1.55,
              color: 'var(--text-muted)',
              maxWidth: '38ch',
            }}
          >
            {claim}
          </p>
=======
    <section className={s.hero}>
      <div className={`${s.grid} ${imageSide === 'left' ? s.imgLeft : s.imgRight}`}>
        <div className={s.media}>
          {image.avifSrcSet && image.webpSrcSet ? (
            <ResponsiveImage
              avifSrcSet={image.avifSrcSet}
              webpSrcSet={image.webpSrcSet}
              src={image.src}
              sizes="(max-width: 767px) 100vw, 66vw"
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
          {crumbs && <Breadcrumb items={crumbs} />}
          <h1 className={s.headline}>{headline}</h1>
          <p className={s.claim}>{claim}</p>
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
}
