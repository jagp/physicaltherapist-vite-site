import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface TestimonialProps extends Omit<HTMLAttributes<HTMLElement>, 'style'> {
  quote?: ReactNode;
  name?: string;
  role?: string;
  /** Category tag, e.g. "Postpartum recovery". */
  category?: string;
  /** Filled stars out of 5. @default 5 */
  rating?: number;
  style?: CSSProperties;
}

const hoverCSS = `
  .spt-tmnl{ --_bg:var(--surface); transition:transform var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-soft),background var(--dur) var(--ease-soft),color var(--dur) var(--ease-soft) }
  .spt-tmnl:hover{ transform:translateY(-3px); background:color-mix(in srgb,var(--_bg) 90%,var(--plum-700)); color:color-mix(in srgb,var(--text-body) 80%,var(--plum-700)); box-shadow:inset 1px 0 0 0 var(--hover-edge),var(--shadow-lg) }
`;

let injected = false;
function ensureHoverCSS() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'testimonial');
  style.textContent = hoverCSS;
  document.head.appendChild(style);
  injected = true;
}

export function Testimonial({ quote, name, role, category, rating = 5, style, ...rest }: TestimonialProps) {
  ensureHoverCSS();

  return (
    <figure
      className="spt-tmnl"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-md)',
        padding: '28px',
        margin: 0,
        height: '100%',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', gap: '2px' }} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: '1.05rem',
              lineHeight: 1,
              color: i < rating ? '#F5A623' : 'var(--border-strong)',
            }}
          >
            ★
          </span>
        ))}
      </div>
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontSize: '1.08rem',
          lineHeight: 1.5,
          color: 'var(--text-body)',
          flex: 1,
        }}
      >
        {quote}
      </blockquote>
      <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <b style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', color: 'var(--text-heading)' }}>{name}</b>
        {role && <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{role}</span>}
        {category && (
          <span
            style={{
              marginTop: '4px',
              alignSelf: 'flex-start',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'var(--indigo-700)',
              background: 'var(--indigo-100)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
            }}
          >
            {category}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
