import { Card } from '../core/Card';
import { ResponsiveImage } from '../core/ResponsiveImage';
import type { ExternalLink, ServiceImage, SpecializedTreatment } from '../../data/services';
import leafLeaves from '../../assets/leaf-leaves.png';
import leafMark from '../../assets/leaf-mark.png';
import s from './ServiceArticle.module.css';

interface ServiceArticleProps {
  intro: string;
  insetImage?: ServiceImage;
  mainBody: string;
  externalLink?: ExternalLink;
  specializedTreatments?: SpecializedTreatment[];
  closer: string;
}

export function ServiceArticle({
  intro,
  insetImage,
  mainBody,
  externalLink,
  specializedTreatments,
  closer,
}: ServiceArticleProps) {
  return (
    <article className={s.article}>
      <p className={s.intro}>{intro}</p>

      {insetImage && (
        <div className={s.inset}>
          {insetImage.avifSrcSet && insetImage.webpSrcSet ? (
            <ResponsiveImage
              avifSrcSet={insetImage.avifSrcSet}
              webpSrcSet={insetImage.webpSrcSet}
              src={insetImage.src}
              sizes="(max-width: 767px) 100vw, 620px"
              alt={insetImage.alt}
              width={insetImage.width ?? 1240}
              height={insetImage.height ?? 930}
              className={s.insetImg}
            />
          ) : (
            <img src={insetImage.src} alt={insetImage.alt} className={s.insetImg} />
          )}
        </div>
      )}

      <div className={s.authority}>
        <p className={s.authorityBody}>{mainBody}</p>
        {externalLink && (
          <p className={s.authorityLink}>
            {externalLink.before}
            <a href={externalLink.url} target="_blank" rel="noopener noreferrer">
              {externalLink.label}
            </a>
            {externalLink.after}
          </p>
        )}
      </div>

      {specializedTreatments && specializedTreatments.length > 0 && (
        <div className={s.treatments}>
          <Card tone="tint" padding="32px" leaf leafSrc={leafLeaves}>
            <p className={`ds-eyebrow ${s.treatmentsEyebrow}`}>Specialized treatments</p>
            <ul className={s.treatmentsList}>
              {specializedTreatments.map((t) => (
                <li key={t.label} className={s.treatmentItem}>
                  <img src={leafMark} alt="" aria-hidden="true" className={s.treatmentLeaf} width={18} height={18} />
                  <span className={s.treatmentText}>
                    <strong>{t.label}</strong>
                    {' — '}
                    {t.desc}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      <p className={s.closer}>{closer}</p>
    </article>
  );
}
