import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import s from './Badge.module.css';

export type BadgeTone = 'brand' | 'accent' | 'plum' | 'indigo' | 'neutral';
export type BadgeVariant = 'soft' | 'solid' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Color family. @default "brand" */
  tone?: BadgeTone;
  /** Fill style. @default "soft" */
  variant?: BadgeVariant;
  /** @default "md" */
  size?: BadgeSize;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Badge({ tone = 'brand', variant = 'soft', size = 'md', children, style, ...rest }: BadgeProps) {
  return (
    <span className={`${s.badge} ${s[size]} ${s[tone]} ${s[variant]}`} style={style} {...rest}>
      {children}
    </span>
  );
}
