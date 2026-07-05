import { SectionEyebrow } from './SectionEyebrow';
import { Card } from '../core/Card';
import type { ExpectStep } from '../../data/services';

interface ExpectStepsProps {
  title: string;
  steps: ExpectStep[];
}

/**
 * "Your First Visit" as an ordered sequence. The numbers are semantic here —
 * the visit really does proceed conversation → assessment → plan — so an
 * <ol> with visible numerals carries information, not decoration.
 */
export function ExpectSteps({ title, steps }: ExpectStepsProps) {
  return (
    <section className="svc-section--tight">
      <div className="svc-wrap--narrow">
        <SectionEyebrow>What to expect</SectionEyebrow>
        <h2 className="svc-h2">{title}</h2>
        {/* role="list" restores list semantics that Safari/VoiceOver drops with list-style:none */}
        <ol
          role="list"
          style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
        >
          {steps.map((step, i) => (
            <li key={step.label}>
              <Card tone="surface" padding="24px 28px" radius="md">
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--fs-h4)',
                      fontWeight: 'var(--fw-semibold)',
                      color: 'var(--brand)',
                      lineHeight: 1,
                      minWidth: '2ch',
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 style={{ margin: '0 0 6px', fontSize: 'var(--fs-h5)' }}>{step.label}</h3>
                    <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--lh-relaxed)', maxWidth: '58ch' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
