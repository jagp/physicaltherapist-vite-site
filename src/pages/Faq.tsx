import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/core/Button';

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
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '22px 4px',
          textAlign: 'left',
          fontFamily: 'var(--font-display)',
          fontSize: '1.12rem',
          fontWeight: 600,
          color: 'var(--ink-900)',
        }}
      >
        {q}
        <span style={{ color: 'var(--brand)', fontSize: '1.4rem', lineHeight: 1, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s ease' }}>+</span>
      </button>
      {open && <p style={{ margin: '0 4px 22px', color: 'var(--text-muted)', maxWidth: '70ch' }}>{a}</p>}
    </div>
  );
}

export function Faq() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);
  return (
    <div>
      <PageHeader eyebrow="Before your first visit" title="Frequently asked questions" lede="Honest answers about what to expect — consent-forward, never rushed." />
      <section style={{ padding: '72px 0 104px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
          {faqs.map(([q, a], i) => (
            <FAQItem key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
          <div style={{ borderTop: '1px solid var(--border)', marginBottom: '40px' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Still have a question?</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
