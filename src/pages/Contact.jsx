import { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Input } from '../components/ui/Input.jsx';
import { Card } from '../components/ui/Card.jsx';
import leafLeaves from '../assets/leaf-leaves.png';

const INITIAL_FORM = { name: '', phone: '', email: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | error

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Start your journey to better health"
        lede="Schedule an initial evaluation — a private, 60-minute visit where we listen, assess, and build a plan together."
      />
      <section className="py-[72px] pb-[104px]">
        <div className="container-site grid gap-[50px] items-start" style={{ gridTemplateColumns: '1.1fr .9fr' }}>
          <Card tone="surface" padding="36px">
            {status === 'sent' ? (
              <div className="text-center py-10">
                <img src={leafLeaves} alt="" className="h-14 mb-4 mx-auto" />
                <h3 className="m-0 mb-2">Thank you</h3>
                <p className="text-ink-500 m-0">We'll be in touch within one business day to schedule your visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
                <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <Input label="Full name" placeholder="Jane Doe" required value={form.name} onChange={handleChange('name')} />
                  <Input label="Phone" placeholder="(508) 000-0000" value={form.phone} onChange={handleChange('phone')} />
                </div>
                <Input label="Email" type="email" placeholder="you@email.com" required value={form.email} onChange={handleChange('email')} />
                <Input
                  label="How can we help?"
                  multiline
                  rows={5}
                  placeholder="Share as much or as little as you like."
                  hint="Everything you share is confidential."
                  value={form.message}
                  onChange={handleChange('message')}
                />
                {status === 'error' && (
                  <p className="text-danger text-sm m-0">Something went wrong sending your request — please try again or call us directly.</p>
                )}
                <Button variant="primary" size="lg" type="submit" fullWidth disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Request a Consultation'}
                </Button>
              </form>
            )}
          </Card>
          <div>
            <Card tone="plum" padding="32px" leaf className="mb-5">
              <h3 className="m-0 mb-4 text-white">Visit the practice</h3>
              <p className="m-0 mb-1.5 text-[#F4F0FC]/90">
                8 Pleasant St, Unit 8E
                <br />
                South Natick, MA 01760
              </p>
              <p className="mt-3.5 mb-1.5 text-[#F4F0FC]/90">508-740-0663</p>
              <p className="m-0 text-[#F4F0FC]/90">rgspt1@gmail.com</p>
            </Card>
            <Card tone="cream" padding="24px">
              <p className="font-body font-semibold text-ink-900 m-0 mb-1.5">By appointment</p>
              <p className="text-ink-500 m-0">New patients welcome. We'll find a time that works for you.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
