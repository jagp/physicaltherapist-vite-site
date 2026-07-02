import { Card } from '../core/Card';
import { SectionEyebrow } from './SectionEyebrow';
import type { ConditionGroup } from '../../data/services';
import leafLeaves from '../../assets/leaf-leaves.png';
import leafMark from '../../assets/leaf-mark.png';

interface ConditionsSectionProps {
  title?: string;
  groups: ConditionGroup[];
}

/**
 * "Conditions We Treat" as an editorial index rather than a keyword grid:
 * grouped headings + a leaf-ticked two-column list inside a soft tint panel.
 * Long-tail SEO coverage that still reads as considered care.
 */
export function ConditionsSection({ title = 'Conditions I treat', groups }: ConditionsSectionProps) {
  return (
    <section className="svc-section--tight">
      <div className="svc-wrap">
        <Card tone="tint" padding="clamp(32px, 4vw, 56px)" radius="lg" leaf leafSrc={leafLeaves}>
          <SectionEyebrow>What I treat</SectionEyebrow>
          <h2 style={{ margin: '0 0 var(--space-8)', fontSize: 'var(--fs-h3)', maxWidth: '20ch' }}>{title}</h2>
          <div className="svc-cond-groups">
            {groups.map((group, gi) => (
              <div key={group.heading ?? gi}>
                {group.heading && <p className="svc-cond-group__heading">{group.heading}</p>}
                <ul className="svc-cond-list">
                  {group.items.map((item) => (
                    <li key={item.label} className="svc-cond-item">
                      <img className="svc-cond-item__leaf" src={leafMark} alt="" aria-hidden="true" />
                      <span>
                        <strong style={{ fontWeight: 'var(--fw-semibold)' }}>{item.label}</strong>
                        {item.desc && (
                          <span style={{ color: 'var(--text-muted)' }}> — {item.desc}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
