const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-[22px] py-3 text-[0.95rem]',
  lg: 'px-7 py-[15px] text-base',
};

const VARIANTS = {
  primary:
    'bg-indigo-700 text-white shadow-brand hover:bg-indigo-600 hover:shadow-brand-strong hover:-translate-y-0.5 active:translate-y-0 active:bg-indigo-900 active:shadow-sm',
  gradient:
    'bg-gradient-brand-spicy text-white shadow-brand-strong hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-16px_rgba(74,52,115,0.6)] active:translate-y-0 active:scale-[0.99]',
  secondary:
    'bg-transparent text-ink-700 border border-line-strong hover:border-indigo-700 hover:text-indigo-700 hover:bg-indigo-100 active:scale-[0.985]',
  ghost: 'bg-transparent text-indigo-700 hover:bg-indigo-100',
  onBand: 'bg-white text-iris-500 hover:-translate-y-0.5 hover:shadow-md',
  link: 'bg-transparent text-iris-600 p-0 rounded-none shadow-none underline-offset-2 hover:underline',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  iconRight,
  iconLeft,
  fullWidth = false,
  onClick,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'relative overflow-hidden inline-flex items-center justify-center gap-2 font-semibold leading-tight rounded-sm border border-transparent whitespace-nowrap transition duration-[220ms] ease-[var(--ease-out)]',
    fullWidth ? 'flex w-full' : 'inline-flex',
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    SIZES[size],
    VARIANTS[variant],
    className,
  ].join(' ');

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {iconLeft}
      {children}
      {iconRight}
    </span>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={disabled ? undefined : onClick} className={classes} {...rest}>
      {inner}
    </button>
  );
}
