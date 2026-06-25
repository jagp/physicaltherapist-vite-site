import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type StatCardTone = 'surface' | 'plum';

export interface StatCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /** The large number or short value, e.g. "40+" or "WCS". */
  value?: ReactNode;
  /** Supporting label below the value. */
  label?: ReactNode;
  /** @default "surface" */
  tone?: StatCardTone;
  /** Accent color for the number (surface tone only). @default "var(--brand)" */
  accent?: string;
  style?: CSSProperties;
}

const hoverCSS = `
  .spt-stat{ transition:transform var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-soft),background var(--dur) var(--ease-soft),color var(--dur) var(--ease-soft) }
  .spt-stat.is-light:hover{ transform:translateY(-3px); background:color-mix(in srgb,var(--_bg) 90%,var(--plum-700)); box-shadow:inset 1px 0 0 0 var(--hover-edge),var(--shadow-lg) }
  .spt-stat.is-dark:hover{ transform:translateY(-3px); background:color-mix(in srgb,var(--_bg) 90%,var(--indigo-100)); box-shadow:inset 1px 0 0 0 var(--hover-edge),var(--shadow-lg) }
`;

let injected = false;
function ensureHoverCSS() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'stat-card');
  style.textContent = hoverCSS;
  document.head.appendChild(style);
  injected = true;
}

export function StatCard({ value, label, tone = 'surface', accent = 'var(--brand)', style, ...rest }: StatCardProps) {
  ensureHoverCSS();
  const dark = tone === 'plum';

  return (
    <div
      className={'spt-stat ' + (dark ? 'is-dark' : 'is-light')}
      style={{
        ['--_bg' as string]: dark ? 'var(--plum-600)' : 'var(--surface)',
        background: dark ? 'var(--plum-600)' : 'var(--surface)',
        border: dark ? '1px solid rgba(255,255,255,.1)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        boxShadow: dark ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        padding: '22px 20px',
        textAlign: 'center',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '2rem',
          lineHeight: 1,
          color: dark ? '#fff' : accent,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: '7px',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.8rem',
          color: dark ? 'rgba(244,240,252,.78)' : 'var(--text-muted)',
          lineHeight: 1.35,
        }}
      >
        {label}
      </div>
    </div>
  );
}
