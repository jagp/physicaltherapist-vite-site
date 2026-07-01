import type { ReactNode } from 'react';
import leafLeaves from '../assets/leaf-leaves.png';

export function PageHeader({ eyebrow, title, lede }: { eyebrow?: ReactNode; title?: ReactNode; lede?: ReactNode }) {
  return (
    <section style={{ background: 'var(--linen)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      <img
        src={leafLeaves}
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', top: '-20px', right: '40px', height: '150px', opacity: 0.08, filter: 'grayscale(1) brightness(0)' }}
      />
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: 'clamp(48px, 8vw, 72px) var(--gutter)', position: 'relative' }}>
        <p className="ds-eyebrow" style={{ margin: '0 0 14px' }}>{eyebrow}</p>
        <h1 style={{ margin: 0, fontSize: 'clamp(34px,4vw,52px)', maxWidth: '18ch' }}>{title}</h1>
        {lede && <p style={{ marginTop: '18px', color: 'var(--text-muted)', fontSize: '1.13rem', maxWidth: '60ch' }}>{lede}</p>}
      </div>
    </section>
  );
}
