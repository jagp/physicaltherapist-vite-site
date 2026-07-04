import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import s from './CTABand.module.css';

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
    <div className={`${s.band} ${s[tone]}`} style={style} {...rest}>
      {leaf && leafSrc && (
        <img src={leafSrc} alt="" aria-hidden="true" className={s.leaf} width={400} height={976} />
      )}
      <div className={s.inner}>
        <div className={s.copy}>
          {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
          <h2 className={s.title}>{title}</h2>
          {description && <p className={s.desc}>{description}</p>}
        </div>
        {children && <div className={s.actions}>{children}</div>}
      </div>
    </div>
  );
}
