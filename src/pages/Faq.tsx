import { useState } from 'react';
import { PageSeo } from '../components/PageSeo';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/core/Button';
import s from './Faq.module.css';

const faqs: Array<[string, string]> = [
  [
    'What happens at the first visit?',
    'A private, 60-minute evaluation: a thorough conversation about your history and goals and — only with your consent — a physical assessment. We discuss every step before proceeding.',
  ],
  [
    'Do I have to have an internal exam?',
    'Never mandatory. An internal assessment is the clinical gold standard, but we can learn a great deal externally and only proceed with your full consent.',
  ],
  [
    'Do you treat men?',
    'Yes. Pelvic health is human health — I treat all genders for pelvic-floor dysfunction, bladder and bowel issues, and chronic pelvic pain.',
  ],
  [
    'How many sessions will I need?',
    'Everyone is different. Many patients see meaningful improvement in 4–6 visits; more complex conditions may need longer-term care.',
  ],
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={s.item}>
      <button onClick={onToggle} className={s.q} aria-expanded={open}>
        {q}
        <span className={open ? `${s.plus} ${s.plusOpen}` : s.plus} aria-hidden="true">
          +
        </span>
      </button>
      {open && <p className={s.a}>{a}</p>}
    </div>
  );
}

export function Faq() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);
  return (
    <div>
      <PageSeo
        title="FAQ"
        description="Answers about your first visit, internal exams, what to wear, and how pelvic health physical therapy works."
        path="/faq"
      />
      <PageHeader eyebrow="Before your first visit" title="Frequently asked questions" lede="Honest answers about what to expect — consent-forward, never rushed." />
      <section className={s.section}>
        <div className={s.wrap}>
          {faqs.map(([q, a], i) => (
            <FAQItem key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
          <div className={s.endRule} />
          <div className={s.still}>
            <p className={s.stillLede}>Still have a question?</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
