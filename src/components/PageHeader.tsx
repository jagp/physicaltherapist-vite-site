import type { ReactNode } from 'react';
import leafLeaves from '../assets/leaf-leaves.png';
import s from './PageHeader.module.css';

export function PageHeader({ eyebrow, title, lede }: { eyebrow?: ReactNode; title?: ReactNode; lede?: ReactNode }) {
  return (
    <section className={s.header}>
      <img src={leafLeaves} alt="" aria-hidden="true" className={s.leaf} width={400} height={976} />
      <div className={s.wrap}>
        <p className={`ds-eyebrow ${s.eyebrow}`}>{eyebrow}</p>
        <h1 className={s.title}>{title}</h1>
        {lede && <p className={s.lede}>{lede}</p>}
      </div>
    </section>
  );
}
