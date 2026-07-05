import { SectionEyebrow } from './SectionEyebrow';
import type { ServiceImage } from '../../data/services';

interface ServiceFeatureProps {
  title: string;
  body: string;
  image?: ServiceImage;
  imageSide?: 'left' | 'right';
}

/**
 * Boutique feature block for offerings unique to one service (e.g. a
 * pregnancy-only "Home Visits" spread). Mirrors the hero's signature
 * image-into-cream dissolve, on the opposite side for rhythm.
 */
export function ServiceFeature({ title, body, image, imageSide = 'right' }: ServiceFeatureProps) {
  const isLeft = imageSide === 'left';

  return (
    <section className="svc-section--tight">
      <div className="svc-wrap">
        <div className="svc-feature">
          {image && (
            <div className="svc-feature__media" style={{ order: isLeft ? -1 : 1 }}>
              <img src={image.src} alt={image.alt} />
              <div
                className={`svc-feature__fade ${isLeft ? 'svc-feature__fade--left' : 'svc-feature__fade--right'}`}
              />
            </div>
          )}
          <div style={{ order: isLeft ? 1 : -1 }}>
            <SectionEyebrow>Only here</SectionEyebrow>
            <h2 className="svc-h2" style={{ marginBottom: 'var(--space-4)' }}>{title}</h2>
            <p style={{ margin: 0, lineHeight: 'var(--lh-relaxed)', maxWidth: '52ch' }}>{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
