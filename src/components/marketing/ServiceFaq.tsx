import { useId, useState } from 'react';
import { SectionEyebrow } from './SectionEyebrow';
import type { FaqItem } from '../../data/services';

interface ServiceFaqProps {
  title?: string;
  items: FaqItem[];
}

/**
 * Per-service FAQ as a quiet hairline accordion. Questions render in the
 * static HTML (SEO: answers are crawlable even while visually collapsed);
 * the same items feed the FAQPage JSON-LD via serviceJsonLd.
 */
export function ServiceFaq({ title = 'Common questions', items }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="svc-section--tight">
      <div className="svc-wrap--narrow">
        <SectionEyebrow>Good to know</SectionEyebrow>
        <h2 style={{ margin: '0 0 var(--space-8)', fontSize: 'var(--fs-h3)', maxWidth: '20ch' }}>{title}</h2>
        <div>
          {items.map((item, i) => {
            const open = openIndex === i;
            const qId = `${baseId}-q-${i}`;
            const aId = `${baseId}-a-${i}`;
            return (
              <div key={item.q} className="svc-faq-item" data-open={open}>
                <button
                  type="button"
                  className="svc-faq-q"
                  id={qId}
                  aria-expanded={open}
                  aria-controls={aId}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {item.q}
                  <span className="svc-faq-icon" aria-hidden="true" />
                </button>
                <div id={aId} role="region" aria-labelledby={qId} className="svc-faq-a">
                  <p className="svc-faq-a-inner">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
