export function Input({ label, hint, error, multiline = false, rows = 4, id, required = false, className = '', ...rest }) {
  const fieldId = id || (label ? 'fld-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);

  const fieldClasses = [
    'w-full font-body text-base text-ink-700 bg-white rounded-sm px-3.5 outline-none transition duration-[220ms] ease-[var(--ease-out)] placeholder:text-ink-300',
    'focus:border-indigo-700 focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-indigo-500)_55%,transparent)]',
    multiline ? 'py-3 resize-y' : 'py-[11px]',
    error ? 'border-[1.5px] border-danger' : 'border-[1.5px] border-line-strong',
    className,
  ].join(' ');

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={fieldId} className="font-body text-sm font-semibold text-ink-900">
          {label}
          {required && <span className="ml-[3px] text-danger">*</span>}
        </label>
      )}
      {multiline ? (
        <textarea id={fieldId} rows={rows} className={fieldClasses} {...rest} />
      ) : (
        <input id={fieldId} className={fieldClasses} {...rest} />
      )}
      {(hint || error) && <span className={`font-body text-[0.8rem] ${error ? 'text-danger' : 'text-ink-500'}`}>{error || hint}</span>}
    </div>
  );
}
