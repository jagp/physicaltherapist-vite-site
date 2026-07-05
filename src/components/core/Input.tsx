import type { CSSProperties, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import s from './Input.module.css';

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

export function Input({ label, hint, error, multiline = false, rows = 4, id, required = false, style, ...rest }: InputProps) {
  const fieldId = id || (label ? 'fld-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);

  const controlCls = [s.control, multiline && s.multiline, error && s.invalid].filter(Boolean).join(' ');

  return (
    <div className={s.field}>
      {label && (
        <label htmlFor={fieldId} className={s.label}>
          {label}
          {required && <span className={s.req}>*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          id={fieldId}
          className={controlCls}
          rows={rows}
          required={required}
          style={style}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          className={controlCls}
          required={required}
          style={style}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {(hint || error) && <span className={error ? `${s.hint} ${s.hintError}` : s.hint}>{error || hint}</span>}
    </div>
  );
}
