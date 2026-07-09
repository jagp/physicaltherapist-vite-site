/**
 * Contact form delivery.
 *
 * Single seam for sending a consultation request. It POSTs the form data to the
 * `/api/contact` Cloudflare Pages Function (see `functions/api/contact.ts`),
 * which emails the practice. Recipients and the email body live server-side so
 * they never ship in the client bundle. The call site (Contact page) only cares
 * about the returned {@link SendResult}.
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

/**
 * Deliver a consultation request by POSTing to the `/api/contact` Pages Function.
 *
 * Resolves `ok: true` only when the server confirms the email was accepted. Any
 * network failure or non-OK response resolves `ok: false` with a user-facing
 * message, so the form can show an honest error rather than a false success.
 */
export async function sendContactMessage(data: ContactMessage): Promise<SendResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = (await res.json().catch(() => null)) as SendResult | null;
    if (res.ok && result?.ok) {
      return { ok: true };
    }
    return {
      ok: false,
      error:
        result?.error ?? 'Something went wrong. Please try again or email us directly.',
    };
  } catch {
    return {
      ok: false,
      error: 'Could not send your message. Please check your connection and try again.',
    };
  }
}
