import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import s from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "gradient"
  | "secondary"
  | "ghost"
  | "onBand"
  | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "type"
> {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** Size. @default "md" */
  size?: ButtonSize;
  /** Render as an anchor when set. */
  href?: string;
  /** Anchor target (only applies when `href` is set), e.g. "_blank". */
  target?: string;
  /** Anchor rel (only applies when `href` is set). Defaults to a safe value for `target="_blank"`. */
  rel?: string;
  /** Native button type. @default "button" */
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Icon element rendered before the label. */
  iconLeft?: ReactNode;
  /** Icon element rendered after the label (e.g. an arrow). */
  iconRight?: ReactNode;
  /** Stretch to fill container width. @default false */
  fullWidth?: boolean;
  /** One-off inline overrides (kept for page-level tweaks). */
  style?: CSSProperties;
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  iconRight,
  iconLeft,
  fullWidth = false,
  onClick,
  children,
  style,
  ...rest
}: ButtonProps) {
  const cls = [
    s.btn,
    s[size],
    s[variant],
    fullWidth && s.fullWidth,
    disabled && s.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <span className={s.inner}>
      {iconLeft}
      {children}
      {iconRight}
    </span>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={cls}
        style={style}
        aria-disabled={disabled || undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cls}
      style={style}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {inner}
    </button>
  );
}
