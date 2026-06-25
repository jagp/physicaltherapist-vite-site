import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

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

const palettes: Record<BadgeTone, { solid: string; tint: string; ink: string }> = {
  brand: { solid: 'var(--indigo-700)', tint: 'var(--indigo-100)', ink: 'var(--indigo-700)' },
  accent: { solid: 'var(--teal-500)', tint: 'var(--teal-100)', ink: 'var(--teal-700)' },
  plum: { solid: 'var(--plum-600)', tint: 'var(--plum-100)', ink: 'var(--plum-700)' },
  indigo: { solid: 'var(--indigo-600)', tint: 'var(--indigo-100)', ink: 'var(--indigo-700)' },
  neutral: { solid: 'var(--ink-700)', tint: 'var(--linen)', ink: 'var(--ink-700)' },
};

const sizes: Record<BadgeSize, CSSProperties> = {
  sm: { padding: '3px 9px', fontSize: '0.7rem' },
  md: { padding: '5px 12px', fontSize: '0.78rem' },
};

export function Badge({ tone = 'brand', variant = 'soft', size = 'md', children, style, ...rest }: BadgeProps) {
  const palette = palettes[tone];
  const variants: Record<BadgeVariant, CSSProperties> = {
    soft: { background: palette.tint, color: palette.ink, border: '1px solid transparent' },
    solid: { background: palette.solid, color: '#fff', border: '1px solid transparent' },
    outline: { background: 'transparent', color: palette.ink, border: `1px solid ${palette.solid}` },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-ui)',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
