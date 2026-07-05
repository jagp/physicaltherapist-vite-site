import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import s from './StatCard.module.css';

export type StatCardTone = 'surface' | 'plum';

export interface StatCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /** The large number or short value, e.g. "40+" or "PWCS". */
  value?: ReactNode;
  /** Supporting label below the value. */
  label?: ReactNode;
  /** @default "surface" */
  tone?: StatCardTone;
  /** Accent color for the number (surface tone only). @default "var(--brand)" */
  accent?: string;
  style?: CSSProperties;
}

export function StatCard({ value, label, tone = 'surface', accent = 'var(--brand)', style, ...rest }: StatCardProps) {
  const dark = tone === 'plum';
  return (
    <div
      className={`${s.stat} ${dark ? s.dark : s.light}`}
      style={{ ['--_ink' as string]: accent, ...style }}
      {...rest}
    >
      <div className={s.value}>{value}</div>
      <div className={s.label}>{label}</div>
    </div>
  );
}
