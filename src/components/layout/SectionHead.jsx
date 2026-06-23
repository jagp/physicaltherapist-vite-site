export function SectionHead({ eyebrow, title, lede, center = false }) {
  return (
    <div className={`max-w-[680px] mb-[46px] ${center ? 'text-center mx-auto' : 'text-left'}`}>
      <p className="ds-eyebrow m-0 mb-3.5">{eyebrow}</p>
      <h2 className="m-0 text-[clamp(28px,3.4vw,42px)]">{title}</h2>
      {lede && <p className="mt-3.5 text-ink-500 text-[1.08rem]">{lede}</p>}
    </div>
  );
}
