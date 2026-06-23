import leafLeaves from '../../assets/leaf-leaves.png';

const TONES = {
  surface: 'bg-white text-ink-700 border border-line shadow-md',
  cream: 'bg-cream text-ink-700 border border-line shadow-xs',
  linen: 'bg-linen text-ink-700 border border-line shadow-xs',
  tint: 'bg-indigo-100 text-ink-700 border border-transparent shadow-xs',
  plum: 'bg-plum-600 text-[#F4F0FC] border border-white/10 shadow-brand',
  brand: 'bg-indigo-700 text-[#F4F0FC] border border-white/8 shadow-brand',
  gradient: 'bg-gradient-brand-spicy text-[#F4F0FC] border border-white/12 shadow-brand',
};

const RADII = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

const DARK_TONES = new Set(['plum', 'brand', 'gradient']);

export function Card({
  tone = 'surface',
  hover = false,
  leaf = false,
  leafSrc = leafLeaves,
  radius = 'md',
  padding = '28px',
  className = '',
  style,
  children,
  ...rest
}) {
  const isDark = DARK_TONES.has(tone);

  const classes = [
    'relative overflow-hidden',
    RADII[radius],
    TONES[tone],
    hover ? 'transition duration-[220ms] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-lg hover:border-indigo-700/40' : '',
    className,
  ].join(' ');

  return (
    <div className={classes} style={{ padding, ...style }} {...rest}>
      {leaf && (
        <img
          src={leafSrc}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-[22px] -right-[18px] h-[120px] rotate-[8deg]"
          style={{ opacity: isDark ? 0.12 : 0.08, filter: isDark ? 'grayscale(1) brightness(8)' : 'grayscale(1) brightness(0)' }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
