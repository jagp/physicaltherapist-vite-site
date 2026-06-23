import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader.jsx';
import { Button } from '../components/ui/Button.jsx';

const FAQS = [
  ['What happens at the first visit?', 'A private, 60-minute evaluation: a thorough conversation about your history and goals and — only with your consent — a physical assessment. We discuss every step before proceeding.'],
  ['Do I have to have an internal exam?', 'Never mandatory. An internal assessment is the clinical gold standard, but we can learn a great deal externally and only proceed with your full consent.'],
  ['Do you treat men?', 'Yes. Pelvic health is human health — I treat all genders for pelvic-floor dysfunction, bladder and bowel issues, and chronic pelvic pain.'],
  ['How many sessions will I need?', 'Everyone is different. Many patients see meaningful improvement in 4–6 visits; more complex conditions may need longer-term care.'],
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-t border-line">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 bg-none border-none cursor-pointer py-[22px] px-1 text-left font-display text-[1.12rem] font-semibold text-ink-900"
      >
        {q}
        <span className={`text-indigo-700 text-[1.4rem] leading-none transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <p className="mx-1 mb-[22px] text-ink-500 max-w-[70ch]">{a}</p>}
    </div>
  );
}

export default function FAQPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);
  return (
    <div>
      <PageHeader eyebrow="Before your first visit" title="Frequently asked questions" lede="Honest answers about what to expect — consent-forward, never rushed." />
      <section className="py-[72px] pb-[104px]">
        <div className="max-w-[820px] mx-auto px-10">
          {FAQS.map(([q, a], i) => (
            <FAQItem key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
          <div className="border-t border-line mb-10" />
          <div className="text-center">
            <p className="text-ink-500 mb-4">Still have a question?</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
