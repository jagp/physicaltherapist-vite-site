import leafLeaves from '../../assets/leaf-leaves.png';

const BACKGROUNDS = {
  brand: 'bg-gradient-brand',
  plum: 'bg-plum-600',
  gradient: 'bg-gradient-brand-spicy',
};

export function CTABand({ eyebrow, title, description, tone = 'brand', leaf = true, leafSrc = leafLeaves, children, className = '', ...rest }) {
  return (
    <div
      className={`relative overflow-hidden text-white rounded-xl shadow-lg p-9 sm:p-[60px] ${BACKGROUNDS[tone]} ${className}`}
      {...rest}
    >
      {leaf && (
        <img
          src={leafSrc}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-[30px] right-6 h-[180px] rotate-[8deg]"
          style={{ opacity: 0.12, filter: 'grayscale(1) brightness(8)' }}
        />
      )}
      <div className="relative flex flex-wrap items-center justify-between gap-9">
        <div className="max-w-[46ch]">
          {eyebrow && <p className="m-0 mb-2.5 font-body font-bold uppercase tracking-[0.16em] text-[0.78rem] text-white/80">{eyebrow}</p>}
          <h2 className="m-0 mb-2.5 text-white text-[clamp(1.6rem,3vw,2.4rem)]">{title}</h2>
          {description && <p className="m-0 text-white/90">{description}</p>}
        </div>
        {children && <div className="flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}
