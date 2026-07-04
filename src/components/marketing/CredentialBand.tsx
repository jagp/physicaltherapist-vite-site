import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

/* ⚠️ TEMPORARY BUILD SHIM — not the real component.
   The committed CredentialBand.tsx on `feature/new_credentials_comoponent`
   contains unresolved merge-conflict markers (card-grid vs ribbon designs).
   This neutral placeholder only preserves the shared type surface + a plain
   render so the app compiles for service-page verification on
   `feature/seo-service-template`. Replace with the real, conflict-resolved
   CredentialBand at branch integration. Left uncommitted intentionally. */

export type CredentialBandVariant = 'tint' | 'linen' | 'plum';

export interface CredentialItem {
  icon?: ReactNode;
  year?: string;
  label: string;
  detail?: string;
  /** When set, the item links to a third-party authority page (new tab). */
  href?: string;
}

export interface CredentialBandProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  items?: CredentialItem[];
  /** Background treatment. @default "tint" */
  variant?: CredentialBandVariant;
  title?: string;
  description?: string;
  /** Custom content (overrides items grid). */
  children?: ReactNode;
  style?: CSSProperties;
}

const backgrounds: Record<CredentialBandVariant, CSSProperties> = {
  tint: { background: 'var(--brand-soft)', color: 'var(--text-body)' },
  linen: { background: 'var(--linen)', color: 'var(--text-body)' },
  plum: { background: 'var(--plum-600)', color: 'rgba(255,255,255,.88)' },
};

export function CredentialBand({
  items = [],
  variant = 'tint',
  title,
  description,
  children,
  style,
  ...rest
}: CredentialBandProps) {
  const dark = variant === 'plum';

  return (
    <div
      style={{ width: '100%', padding: 'clamp(36px, 5vw, 60px) 0', ...backgrounds[variant], ...style }}
      {...rest}
    >
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        {title && <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>{title}</h2>}
        {description && <p style={{ margin: '0 0 32px', opacity: 0.88 }}>{description}</p>}
        {children ?? (
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
              margin: 0,
              padding: 0,
              listStyle: 'none',
            }}
          >
            {items.map((item, i) => {
              const inner = (
                <>
                  {item.year && <strong style={{ marginRight: '8px', color: dark ? '#fff' : 'var(--brand)' }}>{item.year}</strong>}
                  <span>{item.label}</span>
                  {item.detail && <span style={{ opacity: 0.7 }}> — {item.detail}</span>}
                </>
              );
              return (
                <li
                  key={i}
                  style={{
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: dark ? '1px solid rgba(255,255,255,.16)' : '1px solid var(--border)',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
