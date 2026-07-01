import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/core/Button';
import { Card } from '../components/core/Card';
import { services } from '../data/services';

export function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <div>
      <PageHeader eyebrow="What we offer" title={service.title} lede={service.desc} />
      <section style={{ padding: '88px 0 104px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <Card tone="surface" padding="40px">
            <img src={service.icon} alt="" style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '20px' }} />
            <h3 style={{ margin: '0 0 12px', fontSize: '1.4rem' }}>Detailed page coming soon</h3>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 28px' }}>
              We're putting together a full overview of our {service.title.toLowerCase()} care. In the meantime, reach out and we'll
              answer any questions directly.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Book a Consultation
              </Button>
              <Button variant="secondary" size="lg" onClick={() => navigate('/services')}>
                Back to Services
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
