import { useState } from 'react';
import { PageSeo } from '../components/PageSeo';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/core/Button';
import s from './Faq.module.css';

const faqs: Array<[string, string]> = [
  [
    'What happens at the first visit?',
    'A private, 60-minute evaluation: a thorough conversation about your history and goals and — only with your consent — a physical assessment of your posture, breathing, and pelvic-floor muscle function. We discuss every step before proceeding.',
  ],
  [
    'Do I have to have an internal exam?',
    'Never mandatory. An internal assessment (vaginal or rectal) is the clinical gold standard for evaluating pelvic-floor strength, coordination, and tension, but we can learn a great deal externally and only proceed with your full consent.',
  ],
  [
    'What should I wear to my appointment?',
    'Comfortable, loose-fitting clothing you can move easily in — yoga pants or sweatpants are ideal. No special athletic gear is needed.',
  ],
  [
    'Can I come to therapy during my period?',
    'Absolutely. Menstruation doesn’t interfere with your evaluation or treatment — and noticing how symptoms shift across your cycle can be clinically useful. If you’d be more comfortable rescheduling, that’s completely fine too.',
  ],
  [
    'Do you treat men?',
    'Yes. Pelvic health is human health — I treat all genders across the lifespan for pelvic-floor dysfunction, bladder and bowel issues, and chronic pelvic pain.',
  ],
  [
    'What conditions do you treat?',
    'Pelvic-floor and bladder health (leakage, urgency, frequency, prolapse), pregnancy and postpartum recovery, chronic pelvic pain and sexual health, lymphedema and cancer rehabilitation, osteoporosis and bone health, and menopause and midlife changes.',
  ],
  [
    'What are your qualifications?',
    'I’m Dr. Rebecca G. Stephenson, a Board-Certified Pelvic & Women’s Health Clinical Specialist (PWCS) and Certified Lymphedema Therapist (CLT) with over 45 years of clinical experience, including years at Brigham and Women’s Hospital and Massachusetts General Hospital.',
  ],
  [
    'What is a board-certified PWCS?',
    'The Pelvic & Women’s Health Clinical Specialist (PWCS) credential is the highest level of board certification in pelvic and women’s health, awarded by the American Board of Physical Therapy Specialists. It requires thousands of hours of direct clinical practice and a comprehensive national exam covering pelvic health across the lifespan.',
  ],
  [
    'What does treatment actually involve?',
    'After your evaluation we build a personalized plan — usually a mix of hands-on manual therapy, targeted exercise, breathing and neuromuscular retraining, and plain-language education so you understand your own body. We move at your pace and adjust as you progress.',
  ],
  [
    'How many sessions will I need?',
    'Everyone is different. Many patients see meaningful improvement in 4–6 visits; more complex or chronic conditions may need longer-term care. We create your plan together after the first evaluation.',
  ],
  [
    'How do I book, and is there any paperwork?',
    'You can request an initial evaluation online or call the clinic at 508-740-0663 — we’ll be in touch within one business day. Visits are by appointment, and we email secure digital intake forms ahead of time so you can complete them before you arrive.',
  ],
  [
    'Where are you located?',
    'A private practice at 8 Pleasant St, Unit 8E, South Natick, Massachusetts — small by design, so you’re never just a time slot. The space is calm, private, and built for one-on-one care.',
  ],
  [
    'Is my visit private and confidential?',
    'Yes. Every session is one-on-one in a private, quiet room. Boutique-style care means your time, your comfort, and your privacy come first.',
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
