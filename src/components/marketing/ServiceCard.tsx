import type { AnchorHTMLAttributes, CSSProperties, MouseEventHandler } from 'react';

export interface ServiceCardProps extends Omit<AnchorHTMLAttributes<HTMLDivElement>, 'style' | 'onClick'> {
  /** Path to the service line icon (PNG). */
  icon?: string;
  iconAlt?: string;
  title?: string;
  description?: string;
  href?: string;
  /** Link text. @default "Learn more" */
  linkLabel?: string;
  /** Use the dark (on `--bg`) treatment. @default false */
  dark?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  style?: CSSProperties;
}

const hoverCSS = `
  .spt-svc{ transition:transform var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-soft),background var(--dur) var(--ease-soft) }
  .spt-svc.is-light:hover{ transform:translateY(-3px); background:color-mix(in srgb,var(--_bg) 90%,var(--brand)); box-shadow:inset 1px 0 0 0 var(--hover-edge),var(--shadow-lg) }
  .spt-svc.is-dark:hover{  transform:translateY(-3px); background:color-mix(in srgb,var(--_bg) 68%,var(--brand-light)); box-shadow:inset 1px 0 0 0 var(--hover-edge),var(--shadow-lg) }
  .spt-svc:hover .spt-svc-link{ gap:9px }
  .spt-svc-link{ transition:gap var(--dur) var(--ease-out) }
`;

let injected = false;
function ensureHoverCSS() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'service-card');
  style.textContent = hoverCSS;
  document.head.appendChild(style);
  injected = true;
}

export function ServiceCard({
  icon,
  iconAlt = '',
  title,
  description,
  href = '#',
  linkLabel = 'Learn More',
  dark = false,
  onClick,
  style,
  ...rest
}: ServiceCardProps) {
  ensureHoverCSS();

  const cardBg = dark ? 'color-mix(in srgb, var(--bg) 58%, var(--brand))' : 'var(--surface)';
  const iconBg = dark ? 'rgba(255,255,255,.09)' : 'var(--surface-tint)';
  const headColor = dark ? 'rgba(255,255,255,.94)' : 'var(--text-heading)';
  const descColor = dark ? 'rgba(255,255,255,.62)' : 'var(--text-muted)';
  const linkColor = dark ? 'rgba(255,255,255,.55)' : 'var(--text-link)';
  const borderCol = dark ? 'rgba(255,255,255,.1)' : 'var(--border)';

  return (
    <div
      className={`spt-svc ${dark ? 'is-dark' : 'is-light'}`}
      style={{
        ['--_bg' as string]: cardBg,
        display: 'flex',
        flexDirection: 'column',
        background: cardBg,
        border: `1px solid ${borderCol}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: dark ? 'none' : 'var(--shadow-md)',
        padding: '28px',
        height: '100%',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          marginBottom: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: iconBg,
          borderRadius: 'var(--radius-md)',
        }}
      >
        {icon && <img src={icon} alt={iconAlt} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />}
      </div>
      <h3 style={{ fontSize: '1.2rem', margin: '0 0 9px', color: headColor }}>{title}</h3>
      <p style={{ margin: '0 0 16px', color: descColor, fontSize: '0.96rem', flex: 1 }}>{description}</p>
      <a
        href={href}
        onClick={onClick}
        className="spt-svc-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          color: linkColor,
          fontFamily: 'var(--font-ui)',
          fontWeight: 600,
          fontSize: '0.9rem',
          textDecoration: 'none',
        }}
      >
        {linkLabel} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
