import type { ReactNode } from 'react';
import type { ServiceImage } from '../../data/services';

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
  ensureHeroCSS();
  const isLeft = imageSide === 'left';

  return (
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
        </div>
      </div>
    </section>
  );
}
