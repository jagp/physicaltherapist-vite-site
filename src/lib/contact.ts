/**
 * Contact form delivery.
 *
 * Single seam for sending a consultation request. Today it generates an email
 * client-side via a `mailto:` draft (no backend required). When the Cloudflare
 * email Worker is ready, swap ONLY the body of `sendContactMessage` to POST the
 * payload to that endpoint — the call site (Contact page) does not change.
 */

/** Recipients for consultation requests: primary (Rebecca) and CC (site manager). */
export const CONTACT_EMAILS = {
  primary: 'rstephensonpt@gmail.com',
  cc: 'for.jbot@gmail.com',
};

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface SendResult {
  ok: boolean;
  /** Present when ok === false; a user-facing reason. */
  error?: string;
}

/** Build the standard subject + body for a consultation request. */
function composeEmail(data: ContactMessage): { subject: string; body: string } {
  const subject = `New consultation request — ${data.name}`;
  const body = [
    'A new consultation request came in through the website contact form.',
    '',
    `Name:  ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone?.trim() || '(not provided)'}`,
    '',
    'How can we help?',
    data.message?.trim() || '(no message provided)',
  ].join('\n');
  return { subject, body };
}

/**
 * Deliver a consultation request.
 *
 * Interim (React-only) implementation: opens the visitor's mail client with a
 * pre-filled draft addressed to {@link CONTACT_EMAIL}. Because a `mailto:` draft
 * cannot be confirmed as sent, this resolves `ok: true` once the draft is opened.
 *
 * FUTURE (Cloudflare email Worker): replace the body with
 *   const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
 *   return { ok: res.ok, error: res.ok ? undefined : 'Something went wrong.' };
 */
export async function sendContactMessage(data: ContactMessage): Promise<SendResult> {
  const { subject, body } = composeEmail(data);
  const to = `${CONTACT_EMAILS.primary},${CONTACT_EMAILS.cc}`;
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (typeof window === 'undefined') {
    // SSG/prerender guard — never runs during a real submit.
    return { ok: false, error: 'Email can only be sent from the browser.' };
  }

  window.location.href = href;
  return { ok: true };
}
