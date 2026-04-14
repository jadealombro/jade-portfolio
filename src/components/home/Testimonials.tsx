import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container-site">
        <SectionHeading
          label="Client feedback"
          heading="What clients say"
          subheading="A few words from clients I've worked with."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.5rem",
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
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.0625rem",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--color-ink)",
                  margin: "0 0 1.5rem",
                  padding: 0,
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
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-muted)",
                      margin: 0,
                      maxWidth: "none",
                    }}
                  >
                    {[t.role, t.company].filter(Boolean).join(", ")}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
