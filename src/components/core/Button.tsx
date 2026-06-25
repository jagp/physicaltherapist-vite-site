import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'gradient' | 'secondary' | 'ghost' | 'onBand' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'type'> {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** Size. @default "md" */
  size?: ButtonSize;
  /** Render as an anchor when set. */
  href?: string;
  /** Native button type. @default "button" */
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  /** Icon element rendered before the label. */
  iconLeft?: ReactNode;
  /** Icon element rendered after the label (e.g. an arrow). */
  iconRight?: ReactNode;
  /** Stretch to fill container width. @default false */
  fullWidth?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

const sizes: Record<ButtonSize, CSSProperties> = {
  sm: { padding: '8px 16px', fontSize: '0.875rem' },
  md: { padding: '12px 22px', fontSize: '0.95rem' },
  lg: { padding: '15px 28px', fontSize: '1rem' },
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--text-on-brand)',
    boxShadow: 'var(--shadow-brand)',
  },
  gradient: {
    background: 'var(--brand-gradient-spicy)',
    backgroundSize: '160% 160%',
    backgroundPosition: '0% 50%',
    color: 'var(--text-on-brand)',
    boxShadow: 'var(--shadow-brand-strong)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'var(--border-strong)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand)',
  },
  onBand: {
    background: 'var(--white)',
    color: 'var(--accent)',
  },
  link: {
    background: 'transparent',
    color: 'var(--text-link)',
    padding: 0,
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'visible',
  },
};

const hoverCSS = `
  .spt-btn{ -webkit-tap-highlight-color:transparent; }
  .spt-btn::before{ content:''; position:absolute; inset:0; border-radius:inherit;
    background:linear-gradient(120deg, transparent 30%, rgba(255,255,255,.28) 50%, transparent 70%);
    transform:translateX(-130%); transition:transform var(--dur-slow) var(--ease-out); pointer-events:none; z-index:0; }
  .spt-btn-primary:hover, .spt-btn-gradient:hover{ transform:translateY(-2px); }
  .spt-btn-primary:hover::before, .spt-btn-gradient:hover::before{ transform:translateX(130%); }
  .spt-btn-primary:hover{ background:var(--brand-hover); box-shadow:inset 1px 0 0 0 var(--hover-edge), var(--shadow-brand-strong); }
  .spt-btn-primary:active{ transform:translateY(0); background:var(--brand-active); box-shadow:var(--shadow-sm); }
  .spt-btn-gradient:hover{ background-position:100% 50%; box-shadow:inset 1px 0 0 0 var(--hover-edge), 0 22px 48px -16px rgba(74,52,115,.6); }
  .spt-btn-gradient:active{ transform:translateY(0) scale(.99); }
  .spt-btn-secondary:hover{ border-color:var(--brand); color:var(--brand); background:var(--brand-soft); box-shadow:inset 1px 0 0 0 var(--hover-edge); }
  .spt-btn-secondary:active{ transform:scale(.985); }
  .spt-btn-ghost:hover{ background:var(--brand-soft); box-shadow:inset 1px 0 0 0 var(--hover-edge); }
  .spt-btn-onBand:hover{ transform:translateY(-2px); box-shadow:inset 1px 0 0 0 var(--hover-edge), var(--shadow-md); }
  .spt-btn-onBand:hover::before{ transform:translateX(130%); }
  .spt-btn-link{ background-image:linear-gradient(var(--text-link),var(--text-link)); background-size:0% 1.5px; background-repeat:no-repeat; background-position:0 100%; transition:background-size var(--dur) var(--ease-out); }
  .spt-btn-link:hover{ background-size:100% 1.5px; }
`;

let injected = false;
function ensureHoverCSS() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'button');
  style.textContent = hoverCSS;
  document.head.appendChild(style);
  injected = true;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  iconRight,
  iconLeft,
  fullWidth = false,
  onClick,
  children,
  style,
  ...rest
}: ButtonProps) {
  ensureHoverCSS();

  const base: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    lineHeight: 1.1,
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.5 : 1,
    transition:
      'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-soft), background var(--dur) var(--ease-soft), border-color var(--dur) var(--ease-soft), color var(--dur) var(--ease-soft)',
    ...sizes[size],
  };

  const cls = `spt-btn spt-btn-${variant}`;
  const mergedStyle: CSSProperties = { ...base, ...variantStyles[variant], ...style };

  const inner = (
    <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      {iconLeft}
      {children}
      {iconRight}
    </span>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={cls} style={mergedStyle} aria-disabled={disabled || undefined}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cls}
      style={mergedStyle}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {inner}
    </button>
  );
}
