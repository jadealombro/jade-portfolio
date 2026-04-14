import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      className="section-padding"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container-site">
        <div style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
              margin: "0 0 1.25rem",
            }}
          >
            Looking for a website that fits your business better?
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "var(--color-ink-secondary)",
              margin: "0 0 2.25rem",
            }}
          >
            If you need a custom WordPress website, WooCommerce solution, or ongoing support, I&apos;d love to hear more about your project.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              View projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
