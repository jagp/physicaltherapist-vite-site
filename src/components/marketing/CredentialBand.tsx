import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import leafLeaves from "../../assets/leaf-leaves.png";

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

const backgrounds: Record<CredentialBandVariant, CSSProperties> = {
  tint: { background: "var(--brand-soft)", color: "var(--text-body)" },
  linen: { background: "var(--linen)", color: "var(--text-body)" },
  plum: {
    background: "var(--bg)",
    // Faint top glow so the honors block reads as its own band even between
    // two deep-plum sections.
    backgroundImage:
      "radial-gradient(130% 150% at 50% -30%, rgba(102,51,153,.5), transparent 60%)",
    color: "var(--text-light)",
  },
};

// The brand leaf reused as a mask, not an <img>: the silhouette is filled by
// whatever color sits behind it, so the motif can be tinted (white on plum,
// brand-purple on light) without shipping recolored art.
function LeafMark({ dark }: { dark: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        flexShrink: 0,
        width: "26px",
        height: "56px",
        background: dark ? "var(--text-light)" : "var(--brand)",
        opacity: dark ? 0.7 : 0.55,
        WebkitMaskImage: `url(${leafLeaves})`,
        maskImage: `url(${leafLeaves})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
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
  const dark = variant === "plum";

  return (
    <div
      style={{
        width: "100%",
        padding: "clamp(40px, 5vw, 56px) 0",
        ...backgrounds[variant],
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 40px" }}>
        {title && (
          <h2 style={{ margin: "0 0 10px", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            {title}
          </h2>
        )}
        {description && (
          <p style={{ margin: "0 0 32px", color: "inherit", opacity: 0.88 }}>
            {description}
          </p>
        )}

        {children ? (
          children
        ) : (
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "26px",
            }}
          >
            {items.map((item) => (
              <li
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 1 260px",
                  minWidth: 0,
                }}
              >
                <LeafMark dark={dark} />
                <div style={{ minWidth: 0 }}>
                  {item.category && (
                    <p
                      style={{
                        margin: "0 0 6px",
                        fontFamily: "var(--font-ui)",
                        fontSize: "0.64rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: dark ? "var(--attention)" : "var(--brand)",
                      }}
                    >
                      {item.category}
                    </p>
                  )}
                  <p
                    style={{
                      margin: "0 0 5px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "1.14rem",
                      lineHeight: 1.16,
                      letterSpacing: "-0.01em",
                      color: dark ? "#fff" : "var(--ink-900)",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.detail && (
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.78rem",
                        lineHeight: 1.35,
                        color: dark
                          ? "rgba(239,235,255,.58)"
                          : "var(--text-muted)",
                      }}
                    >
                      {item.detail}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
