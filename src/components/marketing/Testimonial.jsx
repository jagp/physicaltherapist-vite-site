export function Testimonial({ quote, name, role, category, rating = 5, className = '', ...rest }) {
  return (
    <figure className={`flex flex-col gap-3.5 h-full m-0 bg-white border border-line rounded-md shadow-md p-7 ${className}`} {...rest}>
      <div className="flex gap-1" aria-label={`${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`w-[9px] h-[9px] rounded-full ${i < rating ? 'bg-iris-500' : 'bg-iris-100'}`} />
        ))}
      </div>
      <blockquote className="m-0 font-display text-[1.08rem] leading-relaxed text-ink-700 flex-1">{quote}</blockquote>
      <figcaption className="flex flex-col gap-1">
        <b className="font-body text-[0.95rem] text-ink-900">{name}</b>
        {role && <span className="font-body text-[0.82rem] text-ink-500">{role}</span>}
        {category && (
          <span className="mt-1 self-start font-body text-[0.72rem] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
            {category}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
