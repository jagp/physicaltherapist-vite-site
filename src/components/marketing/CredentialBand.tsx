import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export type CredentialBandVariant = "tint" | "linen" | "plum";

export interface CredentialItem {
  label: string;
  detail?: string;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  /** When set, the item becomes a link to a third-party authority page
   *  (opens in a new tab) — turning a self-described credential into one a
   *  visitor can verify. */
=======
>>>>>>> Stashed changes
  href?: string;
=======
>>>>>>> Stashed changes
}

export interface CredentialBandProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  items?: CredentialItem[];
<<<<<<< Updated upstream
  /** Background treatment. @default "tint" */
  variant?: CredentialBandVariant;
  title?: string;
  description?: string;
  /** Custom content (overrides items grid). */
=======
  variant?: CredentialBandVariant;
  title?: string;
  description?: string;
>>>>>>> Stashed changes
  children?: ReactNode;
  style?: CSSProperties;
}

const backgrounds: Record<CredentialBandVariant, CSSProperties> = {
  tint: { background: "var(--brand-soft)", color: "var(--text-body)" },
  linen: { background: "var(--linen)", color: "var(--text-body)" },
  plum: { background: "var(--plum-600)", color: "rgba(255,255,255,.88)" },
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
const ribbonCSS = `
  .spt-ribbon-link { text-decoration:none; color:inherit; outline:none; }
  .spt-ribbon-link:focus-visible { outline:2px solid currentColor; outline-offset:4px; border-radius:4px; }
  .spt-ribbon-badge { transition:all var(--dur) var(--ease-out); cursor:pointer; }
  .spt-ribbon-badge:hover { transform:translateY(-2px); }
  .spt-ribbon-badge:hover .spt-ribbon-bg { filter:brightness(1.1); }
`;

let injected = false;
function ensureRibbonCSS() {
  if (injected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.setAttribute("data-spt", "credential-band");
  style.textContent = ribbonCSS;
>>>>>>> Stashed changes
  document.head.appendChild(style);
  injected = true;
}

=======
>>>>>>> Stashed changes
export function CredentialBand({
  items = [],
  variant = "tint",
  title,
  description,
  children,
  style,
  ...rest
}: CredentialBandProps) {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  ensureCardCSS();
=======
  ensureRibbonCSS();
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  const dark = variant === "plum";

  return (
    <div
      style={{
        width: "100%",
        padding: "clamp(28px, 4vw, 40px) 0",
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
          <ul
            style={{
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
              listStyle: "none",
              margin: 0,
              padding: 0,
>>>>>>> Stashed changes
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "baseline",
              rowGap: "10px",
            }}
          >
            {items.map((item, i) => (
              <li
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                }}
              >
                {i > 0 && (
                  <span aria-hidden="true" style={{ opacity: 0.4 }}>
                    ·
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: dark ? "rgba(255,255,255,.94)" : "var(--ink-900)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                  {item.detail && (
                    <span
                      style={{
                        fontWeight: 500,
                        color: dark
                          ? "rgba(255,255,255,.62)"
                          : "var(--text-muted)",
                      }}
                    >
                      {" "}
                      · {item.detail}
                    </span>
                  )}
<<<<<<< Updated upstream

                  {/* Text content */}
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: dark
                          ? "rgba(255,255,255,.94)"
                          : "var(--ink-900)",
                        lineHeight: 1.2,
>>>>>>> Stashed changes
                      }}
                    >
                      {item.label}
                    </p>
                    {item.detail && (
                      <p
                        style={{
<<<<<<< Updated upstream
                          margin: 0,
                          fontSize: "0.775rem",
                          color: dark
                            ? "rgba(255,255,255,.58)"
                            : "var(--text-muted)",
                          lineHeight: 1.4,
=======
                          margin: "3px 0 0",
                          fontSize: "0.75rem",
                          color: dark
                            ? "rgba(255,255,255,.64)"
                            : "var(--text-muted)",
                          lineHeight: 1.3,
>>>>>>> Stashed changes
                        }}
                      >
                        {item.detail}
                      </p>
                    )}
                  </div>
<<<<<<< Updated upstream
                </>
=======
                </div>
>>>>>>> Stashed changes
              );

              return item.href ? (
                <a
                  key={i}
<<<<<<< Updated upstream
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
=======
                  className="spt-ribbon-link spt-ribbon-badge"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    borderRadius: "4px",
                    border: dark
                      ? "1px solid rgba(255,255,255,.16)"
                      : "1px solid var(--border)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="spt-ribbon-bg"
                    style={{
                      width: "100%",
                      background: bgColor,
                      backdropFilter: "blur(4px)",
                      display: "flex",
                    }}
                  >
                    {ribbonContent}
                  </div>
                </a>
              ) : (
                <div
                  key={i}
                  className="spt-ribbon-badge"
                  style={{
                    display: "flex",
                    borderRadius: "4px",
                    border: dark
                      ? "1px solid rgba(255,255,255,.16)"
                      : "1px solid var(--border)",
                  }}
                >
                  <div
                    className="spt-ribbon-bg"
                    style={{
                      width: "100%",
                      background: bgColor,
                      backdropFilter: "blur(4px)",
                      display: "flex",
                    }}
                  >
                    {ribbonContent}
                  </div>
>>>>>>> Stashed changes
                </div>
              );
            })}
          </div>
=======
                </span>
              </li>
            ))}
          </ul>
>>>>>>> Stashed changes
        )}
      </div>
    </div>
  );
}
<<<<<<< Updated upstream

// The curated credential data lives in a sibling module so this file
// only exports the component, keeping Vite Fast Refresh working:
//   import { stephensonTrustItems } from './CredentialBand.data';
=======
>>>>>>> Stashed changes
