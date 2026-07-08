import { Card } from '../core/Card';
<<<<<<< HEAD
import { ResponsiveImage } from '../core/ResponsiveImage';
import type { ExternalLink, ServiceImage, SpecializedTreatment } from '../../data/services';
import leafLeaves from '../../assets/leaf-leaves.png';
import leafMark from '../../assets/leaf-mark.png';
import s from './ServiceArticle.module.css';
=======
import type { ExternalLink, ServiceImage, SpecializedTreatment } from '../../data/services';
import leafLeaves from '../../assets/leaf-leaves.png';
import leafMark from '../../assets/leaf-mark.png';
>>>>>>> feature/new_service_page_layout

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
<<<<<<< HEAD
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
=======
    <article
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '88px 40px 0',
      }}
    >
      {/* Intro pitch */}
      <p
        style={{
          margin: '0 0 48px',
          fontSize: '1.1rem',
          lineHeight: 1.75,
          color: 'var(--text-body)',
        }}
      >
        {intro}
      </p>

      {/* Inset photo */}
      {insetImage && (
        <div
          style={{
            margin: '0 0 48px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <img
            src={insetImage.src}
            alt={insetImage.alt}
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Authority paragraph + external link */}
      <div style={{ margin: '0 0 48px' }}>
        <p style={{ margin: '0 0 14px', lineHeight: 1.7, color: 'var(--text-body)' }}>
          {mainBody}
        </p>
        {externalLink && (
          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
            }}
          >
            {externalLink.before}
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '2px' }}
            >
>>>>>>> feature/new_service_page_layout
              {externalLink.label}
            </a>
            {externalLink.after}
          </p>
        )}
      </div>

<<<<<<< HEAD
      {specializedTreatments && specializedTreatments.length > 0 && (
        <div className={s.treatments}>
          <Card tone="tint" padding="32px" leaf leafSrc={leafLeaves}>
            <p className={`ds-eyebrow ${s.treatmentsEyebrow}`}>Specialized treatments</p>
            <ul className={s.treatmentsList}>
              {specializedTreatments.map((t) => (
                <li key={t.label} className={s.treatmentItem}>
                  <img src={leafMark} alt="" aria-hidden="true" className={s.treatmentLeaf} width={18} height={18} />
                  <span className={s.treatmentText}>
=======
      {/* Specialized treatments */}
      {specializedTreatments && specializedTreatments.length > 0 && (
        <div style={{ margin: '0 0 48px' }}>
          <Card tone="tint" padding="32px" leaf leafSrc={leafLeaves}>
            <p className="ds-eyebrow" style={{ margin: '0 0 20px' }}>
              Specialized treatments
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {specializedTreatments.map((t) => (
                <li
                  key={t.label}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                >
                  <img
                    src={leafMark}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: '18px',
                      height: '18px',
                      objectFit: 'contain',
                      marginTop: '3px',
                      flexShrink: 0,
                      opacity: 0.65,
                    }}
                  />
                  <span style={{ lineHeight: 1.55, color: 'var(--text-body)' }}>
>>>>>>> feature/new_service_page_layout
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

<<<<<<< HEAD
      <p className={s.closer}>{closer}</p>
=======
      {/* Closer */}
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontSize: '1.08rem',
          lineHeight: 1.75,
          color: 'var(--text-body)',
        }}
      >
        {closer}
      </p>
>>>>>>> feature/new_service_page_layout
    </article>
  );
}
