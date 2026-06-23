const BACKGROUNDS = {
  tint: 'bg-indigo-100 text-ink-700',
  linen: 'bg-linen text-ink-700',
  plum: 'bg-plum-600 text-[#F4F0FC]',
};

export function CredentialBand({ items = [], variant = 'tint', title, description, children, className = '', ...rest }) {
  return (
    <div className={`w-full py-9 sm:py-[60px] ${BACKGROUNDS[variant]} ${className}`} {...rest}>
      <div className="container-site">
        {title && <h2 className="m-0 mb-2.5 text-[clamp(1.4rem,2.5vw,2rem)]">{title}</h2>}
        {description && <p className="m-0 mb-8 opacity-90">{description}</p>}

        {children ? (
          children
        ) : (
          <div className="grid gap-8 text-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5">
                {item.icon && <div className="text-[32px]">{item.icon}</div>}
                <p className="m-0 font-semibold text-[0.95rem]">{item.label}</p>
                {item.detail && <p className="m-0 text-[0.85rem] opacity-75">{item.detail}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
