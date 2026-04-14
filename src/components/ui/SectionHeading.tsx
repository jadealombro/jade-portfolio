import { CSSProperties } from "react";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  headingTag?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  label,
  heading,
  subheading,
  align = "left",
  headingTag: Tag = "h2",
}: SectionHeadingProps) {
  const containerStyle: CSSProperties = {
    textAlign: align,
    maxWidth: align === "center" ? "640px" : undefined,
    marginInline: align === "center" ? "auto" : undefined,
    marginBottom: "3rem",
  };

  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
    marginBottom: "0.75rem",
  };

  const headingStyle: CSSProperties = {
    fontFamily: "var(--font-fraunces), Georgia, serif",
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    color: "var(--color-ink)",
    margin: "0 0 1rem",
  };

  const subheadingStyle: CSSProperties = {
    fontSize: "1.0625rem",
    lineHeight: 1.65,
    color: "var(--color-ink-secondary)",
    margin: 0,
    maxWidth: align === "center" ? "none" : "56ch",
  };

  return (
    <div style={containerStyle}>
      {label && <span style={labelStyle}>{label}</span>}
      <Tag style={headingStyle}>{heading}</Tag>
      {subheading && <p style={subheadingStyle}>{subheading}</p>}
    </div>
  );
}
