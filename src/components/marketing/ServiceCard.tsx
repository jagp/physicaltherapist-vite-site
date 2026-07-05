import type { AnchorHTMLAttributes, CSSProperties, MouseEventHandler } from 'react';
import s from './ServiceCard.module.css';

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
  return (
    <div className={`${s.svc} ${dark ? s.dark : s.light}`} style={style} {...rest}>
      <div className={s.iconBox}>
        {icon && <img src={icon} alt={iconAlt} width={48} height={48} />}
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.desc}>{description}</p>
      <a href={href} onClick={onClick} className={s.link}>
        {linkLabel} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
