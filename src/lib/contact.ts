/**
 * Contact form delivery.
 *
 * Sends a consultation request via EmailJS (https://www.emailjs.com) — a
 * client-side email service, so no backend or serverless function is required.
 * The recipient address lives in the EmailJS *template* (configured in their
 * dashboard), never in this bundle. Credentials come from build-time env vars
 * (see `.env.example`); the EmailJS public key is safe to expose client-side.
 */

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

// EmailJS credentials — public by design (the public key is meant to ship in the
// client bundle; the service/template IDs are non-sensitive). We read the
// `VITE_*` build-time env var when present, but fall back to the live account's
// values so the form works with zero deploy-time config. Overriding via env stays
// possible for a future reuse of this codebase against a different EmailJS account.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xe6rrsk';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_eg62ikg';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'QxOscM8cPSoV5xAna';

/**
 * Deliver a consultation request via EmailJS.
 *
 * Resolves `ok: true` only when EmailJS accepts the send; any missing config or
 * network/API failure resolves `ok: false` with a user-facing message, so the
 * form shows an honest error rather than a false success.
 */
export async function sendContactMessage(data: ContactMessage): Promise<SendResult> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return { ok: false, error: 'Email is not configured yet. Please email us directly.' };
  }

  try {
    // Dynamic import keeps the EmailJS SDK (and its browser globals) out of the
    // SSG/prerender pass and the initial bundle — it loads only on submit.
    const { default: emailjs } = await import('@emailjs/browser');
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        // These keys must match the {{variables}} in the EmailJS template.
        name: data.name,
        email: data.email,
        phone: data.phone?.trim() || '(not provided)',
        message: data.message?.trim() || '(no message provided)',
        reply_to: data.email,
      },
      { publicKey: PUBLIC_KEY },
    );
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: 'Something went wrong sending your message. Please try again or email us directly.',
    };
  }
}
