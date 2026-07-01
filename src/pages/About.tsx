import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/core/Card';
import { Button } from '../components/core/Button';
import { CredentialBand } from '../components/marketing/CredentialBand';
import { stephensonTrustItems } from '../components/marketing/CredentialBand.data';
import { CTABand } from '../components/marketing/CTABand';
import { useBreakpoint } from '../hooks/useMediaQuery';
import headshot2 from '../assets/headshot-2.jpg';
import leafLeaves from '../assets/leaf-leaves.png';

const experience: Array<[string, string]> = [
  ['Brigham & Women’s Hospital', 'Built and led pelvic & women’s health physical therapy'],
  ['Massachusetts General Hospital', 'Clinical specialist, pelvic & women’s health'],
  ['MGH Institute of Health Professions', 'Faculty — doctorate of physical therapy'],
  ['Academy of Pelvic Health', 'Board-certified Women’s Health Clinical Specialist (WCS)'],
  ['Taylor & Francis, 2025', 'Lead author — landmark clinical textbook'],
];

export function About() {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useBreakpoint();
  return (
    <div>
      <PageHeader eyebrow="About" title="Four decades of compassionate, expert care" />
      <section style={{ padding: '72px 0' }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 var(--gutter)', display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '.8fr 1.2fr', gap: isTablet ? '32px' : '50px', alignItems: 'start' }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src={headshot2} alt="Dr. Rebecca Stephenson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: '1.13rem', color: 'var(--text-body)', marginTop: 0 }}>
              Rebecca G. Stephenson, PT, DPT, MS, CLT, WCS, is a Board-Certified Women's &amp; Pelvic Health Clinical Specialist treating all genders. Her care blends deep clinical expertise with a personal, compassionate approach.
            </p>
            <Card tone="tint" padding="26px" style={{ marginTop: '8px' }}>
              <h4 style={{ margin: '0 0 8px', fontSize: '1.2rem' }}>What is a Board-Certified WCS?</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                A Women's Health Clinical Specialist holds the highest board certification in pelvic and women's health — earned through thousands of supervised clinical hours and a rigorous national exam. Only a small percentage of physical therapists achieve it.
              </p>
            </Card>
            <div style={{ marginTop: '32px' }}>
              {experience.map(([when, what], i) => (
                <div
                  key={when}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
                    gap: isMobile ? '4px' : '24px',
                    padding: '18px 0',
                    borderTop: '1px solid var(--border)',
                    borderBottom: i === experience.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--brand)' }}>{when}</div>
                  <div style={{ color: 'var(--text-body)' }}>{what}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CredentialBand
        variant="tint"
        items={stephensonTrustItems}
        title="Credentials & Recognition"
      />
      <section style={{ padding: '72px 0 104px' }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <CTABand
            eyebrow="Work with Rebecca"
            title="Compassionate care, built around you"
            description="Schedule a private, 60-minute first visit at our South Natick practice."
            leafSrc={leafLeaves}
          >
            <Button variant="onBand" size="lg" onClick={() => navigate('/contact')}>
              Book a Consultation
            </Button>
          </CTABand>
        </div>
      </section>
    </div>
  );
}
