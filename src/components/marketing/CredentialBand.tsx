import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import leafLeaves from "../../assets/leaf-leaves.png";
import s from "./CredentialBand.module.css";

export type CredentialBandVariant = "tint" | "linen" | "plum";

export interface CredentialItem {
  /** Small uppercase kicker above the name (e.g. "National Honor"). */
  category?: string;
  /** The honor or credential name — the line that carries the weight. */
  label: string;
  /** Supporting line: issuing body and year. */
  detail?: string;
}

export interface CredentialBandProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  items?: CredentialItem[];
  /** Background treatment. @default "tint" */
  variant?: CredentialBandVariant;
  title?: string;
  description?: string;
  /** Custom content (overrides the honors row). */
  children?: ReactNode;
  style?: CSSProperties;
}

export function CredentialBand({
  items = [],
  variant = "tint",
  title,
  description,
  children,
  style,
  ...rest
}: CredentialBandProps) {
  return (
    <div
      className={`${s.band} ${s[variant]}`}
      style={{ ["--_leaf-url" as string]: `url(${leafLeaves})`, ...style }}
      {...rest}
    >
      <div className={s.wrap}>
        {title && <h2 className={s.title}>{title}</h2>}
        {description && <p className={s.desc}>{description}</p>}

        {children ? (
          children
        ) : (
          <ul className={s.list}>
            {items.map((item) => (
              <li key={item.label} className={s.item}>
                <span aria-hidden="true" className={s.leafMark} />
                <div className={s.itemBody}>
                  {item.category && <p className={s.category}>{item.category}</p>}
                  <p className={s.label}>{item.label}</p>
                  {item.detail && <p className={s.detail}>{item.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
