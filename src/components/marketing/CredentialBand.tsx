import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type CredentialBandVariant = "tint" | "linen" | "plum";

export interface CredentialItem {
  icon?: ReactNode;
  year?: string;
  label: string;
  detail?: string;
  href?: string;
}

export interface CredentialBandProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  items?: CredentialItem[];
  variant?: CredentialBandVariant;
  title?: string;
  description?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const backgrounds: Record<CredentialBandVariant, CSSProperties> = {
  tint: { background: "var(--brand-soft)", color: "var(--text-body)" },
  linen: { background: "var(--linen)", color: "var(--text-body)" },
  plum: { background: "var(--plum-600)", color: "rgba(255,255,255,.88)" },
};

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
  ensureRibbonCSS();
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
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              alignItems: "stretch",
            }}
          >
            {items.map((item, i) => {
              const bgColor = dark
                ? "rgba(255,255,255,.14)"
                : "rgba(147,51,234,.12)";

              const ribbonContent = (
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    padding: "16px 18px",
                    flex: "0 0 auto",
                    minWidth: 0,
                  }}
                >
                  {/* Year accent — small prominent label */}
                  {item.year && (
                    <div
                      style={{
                        flexShrink: 0,
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: dark
                          ? "rgba(255,255,255,.92)"
                          : "var(--brand)",
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                        minWidth: "40px",
                        textAlign: "center",
                      }}
                    >
                      {item.year}
                    </div>
                  )}

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
                      }}
                    >
                      {item.label}
                    </p>
                    {item.detail && (
                      <p
                        style={{
                          margin: "3px 0 0",
                          fontSize: "0.75rem",
                          color: dark
                            ? "rgba(255,255,255,.64)"
                            : "var(--text-muted)",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={i}
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
