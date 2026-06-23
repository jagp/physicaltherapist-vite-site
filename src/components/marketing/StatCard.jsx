export function StatCard({ value, label, tone = 'surface', accent = 'var(--color-indigo-700)', className = '', ...rest }) {
  const dark = tone === 'plum';
  return (
    <div
      className={`text-center rounded-md p-[22px_20px] ${dark ? 'bg-plum-600 border border-white/10 shadow-md' : 'bg-white border border-line shadow-xs'} ${className}`}
      {...rest}
    >
      <div className="font-display font-semibold text-2xl leading-none" style={{ color: dark ? '#fff' : accent }}>
        {value}
      </div>
      <div className={`mt-[7px] font-body text-[0.8rem] leading-snug ${dark ? 'text-[#F4F0FC]/78' : 'text-ink-500'}`}>{label}</div>
    </div>
  );
}
