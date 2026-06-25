import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type CTABandTone = 'brand' | 'plum' | 'gradient';

export interface CTABandProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  /** Background treatment. @default "brand" */
  tone?: CTABandTone;
  /** Show leaf watermark. @default true */
  leaf?: boolean;
  leafSrc?: string;
  /** Action buttons — use <Button variant="onBand" />. */
  children?: ReactNode;
  style?: CSSProperties;
}

const backgrounds: Record<CTABandTone, string> = {
  brand: 'var(--brand-gradient)',
  plum: 'var(--plum-600)',
  gradient: 'var(--brand-gradient-spicy)',
};

export function CTABand({
  eyebrow,
  title,
  description,
  tone = 'brand',
  leaf = true,
  leafSrc,
  children,
  style,
  ...rest
}: CTABandProps) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: backgrounds[tone],
        color: '#fff',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        padding: 'clamp(36px, 5vw, 60px)',
        ...style,
      }}
      {...rest}
    >
      {leaf && leafSrc && (
        <img
          src={leafSrc}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-30px',
            right: '24px',
            height: '180px',
            opacity: 0.12,
            filter: 'grayscale(1) brightness(8)',
            transform: 'rotate(8deg)',
            pointerEvents: 'none',
          }}
        />
      )}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '36px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: '46ch' }}>
          {eyebrow && (
            <p
              style={{
                margin: '0 0 10px',
                fontFamily: 'var(--font-ui)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,.8)',
              }}
            >
              {eyebrow}
            </p>
          )}
          <h2 style={{ margin: '0 0 10px', color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>{title}</h2>
          {description && <p style={{ margin: 0, color: 'rgba(255,255,255,.88)' }}>{description}</p>}
        </div>
        {children && <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>{children}</div>}
      </div>
    </div>
  );
}
