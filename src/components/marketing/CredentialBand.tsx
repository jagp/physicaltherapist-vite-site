import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type CredentialBandVariant = 'tint' | 'linen' | 'plum';

export interface CredentialItem {
  icon?: ReactNode;
  label: string;
  detail?: string;
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
  tint: { background: 'var(--indigo-100)', color: 'var(--text-body)' },
  linen: { background: 'var(--linen)', color: 'var(--text-body)' },
  plum: { background: 'var(--plum-600)', color: 'var(--text-on-brand-soft)' },
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
  return (
    <div
      style={{
        width: '100%',
        padding: 'clamp(36px, 5vw, 60px) 0',
        ...backgrounds[variant],
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px' }}>
        {title && <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>{title}</h2>}
        {description && <p style={{ margin: '0 0 32px', color: 'inherit', opacity: 0.88 }}>{description}</p>}

        {children ? (
          children
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {items.map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                {item.icon && <div style={{ fontSize: '32px' }}>{item.icon}</div>}
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>{item.label}</p>
                {item.detail && <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.75 }}>{item.detail}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
