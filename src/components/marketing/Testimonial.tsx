import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import s from './Testimonial.module.css';

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

export function Testimonial({ quote, name, role, category, rating = 5, style, ...rest }: TestimonialProps) {
  return (
    <figure className={s.tmnl} style={style} {...rest}>
      <div className={s.stars} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? `${s.star} ${s.starOn}` : s.star}>
            ★
          </span>
        ))}
      </div>
      <blockquote className={s.quote}>{quote}</blockquote>
      <figcaption className={s.who}>
        <b className={s.name}>{name}</b>
        {role && <span className={s.role}>{role}</span>}
        {category && <span className={s.category}>{category}</span>}
      </figcaption>
    </figure>
  );
}
