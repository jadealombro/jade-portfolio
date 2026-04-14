interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.04em",
        padding: "0.3rem 0.75rem",
        borderRadius: "100px",
        backgroundColor: variant === "accent" ? "var(--color-accent-light)" : "var(--color-surface)",
        color: variant === "accent" ? "var(--color-accent)" : "var(--color-ink-secondary)",
        border: "1px solid",
        borderColor: variant === "accent" ? "transparent" : "var(--color-border)",
      }}
    >
      {children}
    </span>
  );
}
