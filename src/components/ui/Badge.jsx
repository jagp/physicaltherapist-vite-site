const TONES = {
  brand: { soft: 'bg-indigo-100 text-indigo-700', solid: 'bg-indigo-700 text-white', outline: 'text-indigo-700 border border-indigo-700' },
  accent: { soft: 'bg-iris-100 text-iris-700', solid: 'bg-iris-500 text-white', outline: 'text-iris-700 border border-iris-500' },
  plum: { soft: 'bg-plum-100 text-plum-700', solid: 'bg-plum-600 text-white', outline: 'text-plum-700 border border-plum-600' },
  slate: { soft: 'bg-slate-100 text-slate-700', solid: 'bg-slate-600 text-white', outline: 'text-slate-700 border border-slate-600' },
  indigo: { soft: 'bg-indigo-100 text-indigo-700', solid: 'bg-indigo-600 text-white', outline: 'text-indigo-700 border border-indigo-600' },
  neutral: { soft: 'bg-linen text-ink-700', solid: 'bg-ink-700 text-white', outline: 'text-ink-700 border border-ink-700' },
  success: { soft: 'bg-success-tint text-success', solid: 'bg-success text-white', outline: 'text-success border border-success' },
  warning: { soft: 'bg-warning-tint text-warning', solid: 'bg-warning text-white', outline: 'text-warning border border-warning' },
  danger: { soft: 'bg-danger-tint text-danger', solid: 'bg-danger text-white', outline: 'text-danger border border-danger' },
};

const SIZES = {
  sm: 'px-[9px] py-[3px] text-[0.7rem]',
  md: 'px-3 py-[5px] text-[0.78rem]',
};

export function Badge({ tone = 'brand', variant = 'soft', size = 'md', children, className = '', ...rest }) {
  const classes = [
    'inline-flex items-center gap-1.5 font-semibold leading-tight tracking-[0.01em] rounded-full whitespace-nowrap',
    SIZES[size],
    TONES[tone][variant],
    className,
  ].join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
