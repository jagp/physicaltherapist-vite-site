import type { CSSProperties, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type SharedProps = {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; turns the control red and replaces the hint. */
  error?: string;
  /** Render a <textarea> instead of <input>. @default false */
  multiline?: boolean;
  /** Rows when multiline. @default 4 */
  rows?: number;
  required?: boolean;
  style?: CSSProperties;
};

export type InputProps = SharedProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'required'> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style' | 'required' | 'rows'>;

let injected = false;
function ensureFocusCSS() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-spt', 'input');
  style.textContent = `
    .spt-input:focus{border-color:var(--brand);box-shadow:0 0 0 3px var(--focus-ring)}
    .spt-input::placeholder{color:var(--text-faint)}
  `;
  document.head.appendChild(style);
  injected = true;
}

export function Input({ label, hint, error, multiline = false, rows = 4, id, required = false, style, ...rest }: InputProps) {
  ensureFocusCSS();

  const fieldId = id || (label ? 'fld-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);

  const controlStyle: CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-ui)',
    fontSize: '1rem',
    color: 'var(--text-body)',
    background: 'var(--white)',
    border: `1.5px solid ${error ? 'var(--danger)' : 'var(--border-strong)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: multiline ? '12px 14px' : '11px 14px',
    lineHeight: 1.5,
    outline: 'none',
    transition: 'border-color var(--dur) var(--ease-soft), box-shadow var(--dur) var(--ease-soft)',
    resize: multiline ? 'vertical' : undefined,
    ...style,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}
        >
          {label}
          {required && <span style={{ color: 'var(--danger)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          id={fieldId}
          className="spt-input"
          rows={rows}
          required={required}
          style={controlStyle}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          className="spt-input"
          required={required}
          style={controlStyle}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
