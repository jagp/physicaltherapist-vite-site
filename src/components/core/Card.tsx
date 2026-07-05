import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import s from './Card.module.css';

export type CardTone = 'surface' | 'cream' | 'linen' | 'tint' | 'plum' | 'brand' | 'gradient';
export type CardRadius = 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Background treatment. @default "surface" */
  tone?: CardTone;
  /** Lift + shadow on hover. @default false */
  hover?: boolean;
  /** Show a faint leaf-mark watermark in the corner. @default false */
  leaf?: boolean;
  /** Path to the leaf watermark image. */
  leafSrc?: string;
  /** Corner radius. @default "md" */
  radius?: CardRadius;
  /** CSS padding (a dynamic VALUE, so it stays inline). @default "28px" */
  padding?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const radiusClass: Record<CardRadius, string> = { sm: s.rSm, md: s.rMd, lg: s.rLg, xl: s.rXl };

export function Card({
  tone = 'surface',
  hover = false,
  leaf = false,
  leafSrc,
  radius = 'md',
  padding = '28px',
  style,
  children,
  className,
  ...rest
}: CardProps) {
  const isDark = tone === 'plum' || tone === 'brand' || tone === 'gradient';
  const isGrad = tone === 'gradient';

  const cls = [
    s.card,
    s[tone],
    radiusClass[radius],
    hover && s.hover,
    hover && (isGrad ? s.toneGrad : isDark ? s.toneDark : s.toneLight),
    className, // caller classes merge, never clobber the tone classes
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls} style={{ padding, ...style }} {...rest}>
      {leaf && leafSrc && (
        <img
          src={leafSrc}
          alt=""
          aria-hidden="true"
          className={isDark ? `${s.leaf} ${s.leafDark}` : s.leaf}
        />
      )}
      <div className={s.cardInner}>{children}</div>
    </div>
  );
}
