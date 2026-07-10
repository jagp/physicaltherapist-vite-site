import { useEffect, useState } from "react";
import { PageSeo } from "../components/PageSeo";
import { PageHeader } from "../components/PageHeader";
import { Card } from "../components/core/Card";
import { Input } from "../components/core/Input";
import { Button } from "../components/core/Button";
import { sendContactMessage } from "../lib/contact";
import leafLeaves from "../assets/leaf-leaves.png";
import s from "./Contact.module.css";

const emptyForm = { name: "", email: "", phone: "", message: "" };

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Contact CTAs across the site route here via navigate('/contact'). React
  // Router preserves scroll position across route changes, so a CTA clicked at
  // the bottom of a long page would otherwise land the visitor at the bottom of
  // this page. Reset to the top on mount so they arrive at the form directly.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const update =
    (field: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const result = await sendContactMessage(form);
    setSubmitting(false);
    if (result.ok) {
      setSent(true);
    } else {
      setError(
        result.error ??
          "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  return (
    <div>
      <PageSeo
        title="Contact"
        description="Schedule your pelvic health evaluation with Stephenson Physical Therapy in South Natick, MA."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Start your journey to better health"
        lede="Schedule an initial evaluation — a private, 60-minute visit where we listen, assess, and build a plan together."
      />
      <section className={s.section}>
        <div className={s.grid}>
          <Card tone="surface" padding="36px">
            {sent ? (
              <div className={s.sent}>
                <img
                  src={leafLeaves}
                  alt=""
                  className={s.sentLeaf}
                  width={400}
                  height={976}
                />
                <h3 className={s.sentTitle}>Thank you</h3>
                <p className={s.sentBody}>
                  We'll be in touch within one business day to schedule your
                  visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.pair}>
                  <Input
                    label="Full name"
                    placeholder="Jane Doe"
                    required
                    value={form.name}
                    onChange={update("name")}
                  />
                  <Input
                    label="Phone"
                    placeholder="(508) 000-0000"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  value={form.email}
                  onChange={update("email")}
                />
                <Input
                  label="How can we help?"
                  multiline
                  rows={5}
                  placeholder="Share as much or as little as you like."
                  hint="Everything you share is confidential."
                  value={form.message}
                  onChange={update("message")}
                />
                {error && (
                  <p className={s.formError} role="alert">
                    {error}
                  </p>
                )}
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  fullWidth
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Request a Consultation"}
                </Button>
              </form>
            )}
          </Card>
          <div>
            <Card
              tone="plum"
              padding="32px"
              leaf
              leafSrc={leafLeaves}
              className={s.visitCard}
            >
              <h3 className={s.visitTitle}>Visit the practice</h3>
              <p className={s.visitLine}>
                8 Pleasant St, Unit 8E
                <br />
                South Natick, MA 01760
              </p>
              <p className={s.visitPhone}>508-740-0663</p>
              <p className={s.visitLast}>rstephensonpt@gmail.com</p>
            </Card>
            <Card tone="cream" padding="24px">
              <p className={s.hoursTitle}>By appointment</p>
              <p className={s.hoursBody}>
                New patients welcome. We'll find a time that works for you.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
