import leafLeaves from '../../assets/leaf-leaves.png';

export function PageHeader({ eyebrow, title, lede }) {
  return (
    <section className="relative overflow-hidden bg-linen border-b border-line">
      <img
        src={leafLeaves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-5 right-10 h-[150px] opacity-[0.08]"
        style={{ filter: 'grayscale(1) brightness(0)' }}
      />
      <div className="container-site relative py-[72px]">
        <p className="ds-eyebrow m-0 mb-3.5">{eyebrow}</p>
        <h1 className="m-0 text-[clamp(34px,4vw,52px)] max-w-[18ch]">{title}</h1>
        {lede && <p className="mt-[18px] text-ink-500 text-[1.13rem] max-w-[60ch]">{lede}</p>}
      </div>
    </section>
  );
}
