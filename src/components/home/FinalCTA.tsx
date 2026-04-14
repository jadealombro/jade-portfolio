import MotionReveal from "@/components/ui/MotionReveal";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      style={{
        paddingBlock: "clamp(6rem, 12vw, 11rem)",
        borderTop: "1px solid var(--color-border)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background accent glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-5%",
          width: "60vw",
          height: "60vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(61,90,76,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <MotionReveal>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s work together
          </p>
        </MotionReveal>

        {/* Giant statement */}
        <MotionReveal delay={0.08}>
          <h2
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(2.75rem, 8vw, 7.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
              margin: "0 0 clamp(2rem, 4vw, 3.5rem)",
              maxWidth: "14ch",
            }}
          >
            Looking for a website that fits your business better?
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.18}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.65,
              color: "var(--color-ink-secondary)",
              marginBottom: "2.5rem",
              maxWidth: "46ch",
            }}
          >
            If you need a custom WordPress website, WooCommerce solution, or ongoing support — I would love to hear about your project.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.26}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button href="/contact" size="lg">Start a project</Button>
            <Button href="/projects" variant="secondary" size="lg">View projects</Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
