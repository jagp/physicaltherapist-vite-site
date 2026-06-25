import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

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
  /** CSS padding. @default "28px" */
  padding?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const tones: Record<CardTone, CSSProperties> = {
  surface: { background: 'var(--surface)', color: 'var(--text-body)', border: '1px solid var(--border)' },
  cream: { background: 'var(--cream)', color: 'var(--text-body)', border: '1px solid var(--border)' },
  linen: { background: 'var(--linen)', color: 'var(--text-body)', border: '1px solid var(--border)' },
  tint: { background: 'var(--indigo-100)', color: 'var(--text-body)', border: '1px solid transparent' },
  plum: { background: 'var(--plum-600)', color: 'var(--text-on-brand-soft)', border: '1px solid rgba(255,255,255,.1)' },
  brand: { background: 'var(--brand)', color: 'var(--text-on-brand-soft)', border: '1px solid rgba(255,255,255,.08)' },
  gradient: { background: 'var(--brand-gradient-spicy)', color: 'var(--text-on-brand-soft)', border: '1px solid rgba(255,255,255,.12)' },
};

const radii: Record<CardRadius, string> = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
};

const cardBgVars: Record<string, string> = {
  surface: 'var(--surface)',
  cream: 'var(--cream)',
  linen: 'var(--linen)',
  tint: 'var(--indigo-100)',
  plum: 'var(--plum-600)',
  brand: 'var(--brand)',
};

const hoverCSS = `
  .spt-card-h{ transition:transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-soft), background var(--dur) var(--ease-soft), color var(--dur) var(--ease-soft); }
  .spt-card-h:hover{ transform:translateY(-4px); box-shadow:inset 1px 0 0 0 var(--hover-edge), var(--shadow-lg); }
  .spt-card-h.is-light:hover{ background:color-mix(in srgb, var(--_cardbg) 90%, var(--plum-700)); color:color-mix(in srgb, currentColor 80%, var(--plum-700)); }
  .spt-card-h.is-dark:hover{ background:color-mix(in srgb, var(--_cardbg) 90%, var(--indigo-100)); color:color-mix(in srgb, currentColor 80%, var(--indigo-100)); }
  .spt-card-h.is-grad:hover{ filter:brightness(1.06); }
`;

let injected = false;
function ensureHoverCSS() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'card');
  style.textContent = hoverCSS;
  document.head.appendChild(style);
  injected = true;
}

export function Card({
  tone = 'surface',
  hover = false,
  leaf = false,
  leafSrc,
  radius = 'md',
  padding = '28px',
  style,
  children,
  ...rest
}: CardProps) {
  if (hover) ensureHoverCSS();

  const isDark = tone === 'plum' || tone === 'brand' || tone === 'gradient';
  const isGrad = tone === 'gradient';
  const cardBgVar = cardBgVars[tone];

  const hoverClass = hover ? 'spt-card-h ' + (isGrad ? 'is-grad' : isDark ? 'is-dark' : 'is-light') : undefined;

  return (
    <div
      className={hoverClass}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radii[radius],
        padding,
        ...(cardBgVar ? ({ '--_cardbg': cardBgVar } as CSSProperties) : {}),
        boxShadow: isDark ? 'var(--shadow-brand)' : tone === 'surface' ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        ...tones[tone],
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
            top: '-22px',
            right: '-18px',
            height: '120px',
            opacity: isDark ? 0.12 : 0.08,
            filter: isDark ? 'grayscale(1) brightness(8)' : 'grayscale(1) brightness(0)',
            transform: 'rotate(8deg)',
            pointerEvents: 'none',
          }}
        />
      )}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
