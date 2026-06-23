export function ServiceCard({ icon, iconAlt = '', title, description, href = '#', linkLabel = 'Learn more', onClick, className = '', ...rest }) {
  return (
    <div
      className={`group flex flex-col h-full bg-white border border-line rounded-md shadow-md p-7 transition duration-[220ms] ease-[var(--ease-out)] hover:-translate-y-[3px] hover:shadow-lg hover:border-indigo-700/30 ${className}`}
      {...rest}
    >
      <div className="w-[72px] h-[72px] mb-[18px] flex items-center justify-center bg-indigo-100 rounded-md">
        {icon && <img src={icon} alt={iconAlt} className="w-12 h-12 object-contain" />}
      </div>
      <h3 className="text-[1.2rem] m-0 mb-[9px] text-ink-900">{title}</h3>
      <p className="m-0 mb-4 text-ink-500 text-[0.96rem] flex-1">{description}</p>
      <a
        href={href}
        onClick={onClick}
        className="inline-flex items-center gap-[5px] text-iris-600 font-body font-semibold text-[0.9rem] no-underline transition-[gap] duration-[220ms] ease-[var(--ease-out)] group-hover:gap-[9px]"
      >
        {linkLabel} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
