import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type CredentialBandVariant = "tint" | "linen" | "plum";

export interface CredentialItem {
  label: string;
  detail?: string;
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
              listStyle: "none",
              margin: 0,
              padding: 0,
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
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
