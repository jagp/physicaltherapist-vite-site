import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/core/Card';
import { Input } from '../components/core/Input';
import { Button } from '../components/core/Button';
import leafLeaves from '../assets/leaf-leaves.png';

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Start your journey to better health"
        lede="Schedule an initial evaluation — a private, 60-minute visit where we listen, assess, and build a plan together."
      />
      <section style={{ padding: '72px 0 104px' }}>
        <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '50px', alignItems: 'start' }}>
          <Card tone="surface" padding="36px">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <img src={leafLeaves} alt="" style={{ height: '56px', marginBottom: '16px' }} />
                <h3 style={{ margin: '0 0 8px' }}>Thank you</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>We'll be in touch within one business day to schedule your visit.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Full name" placeholder="Jane Doe" required />
                  <Input label="Phone" placeholder="(508) 000-0000" />
                </div>
                <Input label="Email" type="email" placeholder="you@email.com" required />
                <Input label="How can we help?" multiline rows={5} placeholder="Share as much or as little as you like." hint="Everything you share is confidential." />
                <Button variant="primary" size="lg" type="submit" fullWidth>
                  Request a Consultation
                </Button>
              </form>
            )}
          </Card>
          <div>
            <Card tone="plum" padding="32px" leaf leafSrc={leafLeaves} style={{ marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 16px', color: '#fff' }}>Visit the practice</h3>
              <p style={{ margin: '0 0 6px', color: 'rgba(244,240,252,.9)' }}>
                8 Pleasant St, Unit 8E
                <br />
                South Natick, MA 01760
              </p>
              <p style={{ margin: '14px 0 6px', color: 'rgba(244,240,252,.9)' }}>508-740-0663</p>
              <p style={{ margin: 0, color: 'rgba(244,240,252,.9)' }}>rgspt1@gmail.com</p>
            </Card>
            <Card tone="cream" padding="24px">
              <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 6px' }}>By appointment</p>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>New patients welcome. We'll find a time that works for you.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
