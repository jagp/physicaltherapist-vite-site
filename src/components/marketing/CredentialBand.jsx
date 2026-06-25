import React from "react";

/**
 * CredentialBand — soft-colored full-width band showcasing credentials, trust markers, or key stats.
 * Variants: tint (soft indigo), linen (warm cream), plum (aubergine).
 * Renders a centered grid of credential items (icon + label) or custom content.
 *
 * Each item: { icon?, label, detail?, href? }. When `href` is set, the item
 * becomes a link to its third-party authority page (opens in a new tab) —
 * turning a self-described credential into one a visitor can verify.
 *
 * Tailwind-based conversion.
 */
export function CredentialBand({
  items = [],
  variant = "tint",
  title,
  description,
  children,
  className,
  ...rest
}) {
  const variants = {
    tint: "bg-brand-soft text-ink-700",
    linen: "bg-linen text-ink-700",
    plum: "bg-plum-600 text-white/88",
  };

  return (
    <div
      className={`w-full py-8 sm:py-12 ${variants[variant]} ${className || ""}`.trim()}
      {...rest}
    >
      <div className="max-w-[1180px] mx-auto px-10">
        {title && (
          <h2 className="text-2xl sm:text-4xl font-bold mb-2.5 leading-tight">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-base mb-8 opacity-88">{description}</p>
        )}

        {children ? (
          children
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {items.map((item, i) => {
              const itemClass = "flex flex-col items-center gap-2.5";
              const content = (
                <>
                  {item.icon && <div className="text-4xl">{item.icon}</div>}
                  <p className="font-bold text-base m-0">{item.label}</p>
                  {item.detail && (
                    <p className="text-sm opacity-75 m-0">{item.detail}</p>
                  )}
                </>
              );
              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${itemClass} no-underline text-inherit rounded-lg transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current`}
                >
                  {content}
                </a>
              ) : (
                <div key={i} className={itemClass}>
                  {content}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Stephenson PT trust bar — the six credentials with the best mix of
 * unique / widespread / authority / linkability. Each `href` is a verified
 * third-party authority page, so every claim is externally checkable.
 *
 * Usage: <CredentialBand variant="tint" items={STEPHENSON_TRUST_ITEMS} />
 */
export const STEPHENSON_TRUST_ITEMS = [
  {
    // Authority anchor. ABPTS renamed the specialty "Pelvic & Women's Health"
    // (credential: PWCS) in Sep 2025 — was formerly "WCS".
    label: "Board-Certified Specialist",
    detail: "Pelvic & Women's Health PT (PWCS)",
    href: "https://www.aptapelvichealth.org/pwcs",
  },
  {
    // Widespread brand. NOTE: past role (2006–2017) — links to the hospital
    // brand, not a personal page.
    label: "Brigham & Women's Hospital",
    detail: "Women's Health PT Coordinator",
    href: "https://www.brighamandwomens.org/",
  },
  {
    // Current/ongoing role; carries the Mass General brand + educator angle.
    label: "MGH Institute of Health Professions",
    detail: "Faculty · Adjunct Clinical Assistant Professor",
    href: "https://www.mghihp.edu/list/pt-faculty-directory",
  },
  {
    // Unique anchor. Verified Routledge title (the guidance file's title is wrong).
    label: "Lead Author",
    detail: "Routledge clinical textbook, 2025",
    href: "https://www.routledge.com/The-Physical-Therapists-Guide-to-Womens-Pelvic-Perinatal-and-Reproductive-Health/Stephenson-Cathcart/p/book/9781630917869",
  },
  {
    // National APTA honor — third-party-verifiable distinction.
    label: "Lucy Blair Service Award",
    detail: "American Physical Therapy Association",
    href: "https://www.apta.org/apta-and-you/honors-awards/lucy-blair-service-award",
  },
  {
    // The Academy of Pelvic Health's highest honor — specialty-specific prestige.
    label: "Elizabeth Noble Award",
    detail: "Academy of Pelvic Health's highest honor",
    href: "https://www.aptapelvichealth.org/awards/",
  },
];
