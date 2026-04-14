import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        <MotionReveal>
          <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "0.875rem",
              }}
            >
              Client feedback
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "var(--color-ink)",
                margin: 0,
              }}
            >
              What clients say
            </h2>
          </div>
        </MotionReveal>

        <StaggerReveal
          stagger={0.12}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {testimonials.map((t, i) => (
            <figure
              key={i}
              style={{
                margin: 0,
                padding: "2rem",
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--color-ink)",
                  margin: "0 0 1.5rem",
                  padding: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    margin: "0 0 0.125rem",
                    maxWidth: "none",
                  }}
                >
                  {t.author}
                </p>
                {(t.role || t.company) && (
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", margin: 0, maxWidth: "none" }}>
                    {[t.role, t.company].filter(Boolean).join(", ")}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
