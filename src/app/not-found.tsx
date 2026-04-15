import Link from "next/link";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          marginBottom: "1.5rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 500,
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          color: "var(--color-ink)",
          margin: "0 0 1.25rem",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontSize: "1.0625rem",
          lineHeight: 1.65,
          color: "var(--color-ink-secondary)",
          maxWidth: "36ch",
          marginBottom: "2.5rem",
        }}
      >
        That page doesn&apos;t exist. It may have moved, or the URL might be off.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Button href="/" size="lg">Go home</Button>
        <Button href="/contact" variant="secondary" size="lg">Get in touch</Button>
      </div>
      <Link
        href="/projects"
        style={{
          marginTop: "2rem",
          fontSize: "0.875rem",
          color: "var(--color-muted)",
          textDecoration: "none",
        }}
      >
        Or browse my work →
      </Link>
    </div>
  );
}
