import { CSSProperties } from "react";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  headingTag?: "h1" | "h2" | "h3";
  /** "display" = antigravity-scale (5–7rem). "section" = standard (2–3rem). */
  size?: "display" | "section";
}

export default function SectionHeading({
  label,
  heading,
  subheading,
  align = "left",
  headingTag: Tag = "h2",
  size = "section",
}: SectionHeadingProps) {
  const isDisplay = size === "display";

  const containerStyle: CSSProperties = {
    textAlign: align,
    maxWidth: align === "center" ? "720px" : undefined,
    marginInline: align === "center" ? "auto" : undefined,
    marginBottom: isDisplay ? "clamp(2rem, 4vw, 4rem)" : "3rem",
  };

  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
    marginBottom: isDisplay ? "1.25rem" : "0.75rem",
  };

  const headingStyle: CSSProperties = isDisplay
    ? {
        fontFamily: "var(--font-display), Georgia, serif",
        fontSize: "clamp(3rem, 7vw, 6.5rem)",
        fontWeight: 500,
        lineHeight: 1.05,
        letterSpacing: "-0.01em",
        color: "var(--color-ink)",
        margin: subheading ? "0 0 1.5rem" : "0",
      }
    : {
        fontFamily: "var(--font-display), Georgia, serif",
        fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        color: "var(--color-ink)",
        margin: subheading ? "0 0 1rem" : "0",
      };

  const subheadingStyle: CSSProperties = {
    fontSize: isDisplay ? "clamp(1rem, 1.5vw, 1.125rem)" : "1.0625rem",
    lineHeight: 1.65,
    color: "var(--color-ink-secondary)",
    margin: 0,
    maxWidth: align === "center" ? "none" : isDisplay ? "52ch" : "56ch",
  };

  return (
    <div style={containerStyle}>
      {label && <span style={labelStyle}>{label}</span>}
      <Tag style={headingStyle}>{heading}</Tag>
      {subheading && <p style={subheadingStyle}>{subheading}</p>}
    </div>
  );
}
