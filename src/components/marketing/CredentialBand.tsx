import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
export type CredentialBandVariant = "tint" | "linen" | "plum";

export interface CredentialItem {
  icon?: ReactNode;
  year?: string;
  label: string;
  detail?: string;
  /** When set, the item becomes a link to a third-party authority page
   *  (opens in a new tab) — turning a self-described credential into one a
   *  visitor can verify. */
  href?: string;
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
  /** Custom content (overrides items grid). */
  children?: ReactNode;
  style?: CSSProperties;
}

const backgrounds: Record<CredentialBandVariant, CSSProperties> = {
  tint: { background: "var(--brand-soft)", color: "var(--text-body)" },
  linen: { background: "var(--linen)", color: "var(--text-body)" },
  plum: { background: "var(--plum-600)", color: "rgba(255,255,255,.88)" },
};

// Pseudo-classes can't live in inline styles, so card and link hover/focus states are
// injected once via a <style> tag.
const cardCSS = `
  .spt-cred-link { text-decoration:none; color:inherit; border-radius:var(--radius-md); outline:none; }
  .spt-cred-link:focus-visible { outline:2px solid currentColor; outline-offset:4px; }
  .spt-cred-card { transition:transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-soft), background var(--dur) var(--ease-soft); }
  .spt-cred-card:hover { transform:translateY(-3px); box-shadow:inset 1px 0 0 0 var(--hover-edge), var(--shadow-lg); }
  .spt-cred-card-dark:hover { background:rgba(255,255,255,.13) !important; }
  .spt-cred-card-light:hover { background:var(--brand-soft) !important; }
`;

let injected = false;
function ensureCardCSS() {
  if (injected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.setAttribute("data-spt", "credential-band");
  style.textContent = cardCSS;
  document.head.appendChild(style);
  injected = true;
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
  ensureCardCSS();
  const dark = variant === "plum";

  return (
    <div
      style={{
        width: "100%",
        padding: "clamp(36px, 5vw, 60px) 0",
        ...backgrounds[variant],
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 40px" }}>
        {title && (
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            }}
          >
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {items.map((item, i) => {
              const cardBase: CSSProperties = {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "24px 16px",
                borderRadius: "var(--radius-md)",
                cursor: "default",
              };

              const cardStyle: CSSProperties = dark
                ? {
                    ...cardBase,
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(255,255,255,.12)",
                  }
                : {
                    ...cardBase,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-xs)",
                  };

              const cardClass = `spt-cred-card ${
                dark ? "spt-cred-card-dark" : "spt-cred-card-light"
              }`;

              const cardContent = (
                <>
                  <div
                    style={{
                      minHeight: "1.5rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                      fontWeight: 600,
                      color: dark ? "rgba(255,255,255,.90)" : "var(--brand)",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                      marginBottom: "10px",
                    }}
                  >
                    {item.year}
                  </div>

                  {item.icon && (
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        color: dark
                          ? "rgba(255,255,255,.72)"
                          : "var(--brand)",
                        marginBottom: "12px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                  )}

                  <div style={{ width: "80%", maxWidth: "180px" }}>
                    <p
                      style={{
                        margin: "0 0 5px",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: dark
                          ? "rgba(255,255,255,.88)"
                          : "var(--text-body)",
                        lineHeight: 1.35,
                      }}
                    >
                      {item.label}
                    </p>
                    {item.detail && (
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.775rem",
                          color: dark
                            ? "rgba(255,255,255,.58)"
                            : "var(--text-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.detail}
                      </p>
                    )}
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={i}
                  className={`${cardClass} spt-cred-link`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={cardStyle}
                >
                  {cardContent}
                </a>
              ) : (
                <div key={i} className={cardClass} style={cardStyle}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// The curated credential data lives in a sibling module so this file
// only exports the component, keeping Vite Fast Refresh working:
//   import { stephensonTrustItems } from './CredentialBand.data';
