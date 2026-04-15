import Link from "next/link";
import { CSSProperties } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: CSSProperties;
}

const base: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-sans)",
  fontWeight: 500,
  letterSpacing: "0.01em",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
  borderRadius: "9999px",
};

const variants: Record<string, CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-ink)",
    color: "var(--color-background)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-ink)",
    border: "1px solid var(--color-border)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-ink-secondary)",
    border: "none",
  },
};

const sizes: Record<string, CSSProperties> = {
  sm: { fontSize: "0.8125rem", padding: "0.5rem 1rem" },
  md: { fontSize: "0.875rem", padding: "0.625rem 1.375rem" },
  lg: { fontSize: "0.9375rem", padding: "0.8125rem 1.75rem" },
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  type = "button",
  disabled,
  style,
}: ButtonProps) {
  const combinedStyle: CSSProperties = {
    ...base,
    ...variants[variant],
    ...sizes[size],
    ...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}),
    ...style,
  };

  if (href) {
    return (
      <Link href={href} style={combinedStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={combinedStyle}>
      {children}
    </button>
  );
}
