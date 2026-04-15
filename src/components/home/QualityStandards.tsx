import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";

const standards = [
  {
    title: "Clean, maintainable builds",
    description: "Code that's organized, readable, and built to last — not patched together or dependent on bloated dependencies.",
  },
  {
    title: "Performance-conscious development",
    description: "Fast-loading pages built with performance in mind from the start, not optimized as an afterthought.",
  },
  {
    title: "SEO-friendly structure",
    description: "Semantic markup, proper heading hierarchy, clean URLs, and metadata that gives the site a strong foundation for search.",
  },
  {
    title: "Thoughtful UX details",
    description: "Attention to how visitors move through the site — navigation, calls to action, mobile experience, and accessibility.",
  },
  {
    title: "Scalable solutions",
    description: "Builds that make it easy to grow — adding pages, products, or functionality without needing to start over.",
  },
];

export default function QualityStandards() {
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
              Standards
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "var(--color-ink)",
                margin: "0 0 1.25rem",
              }}
            >
              Built with quality in mind
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.65,
                color: "var(--color-ink-secondary)",
                margin: 0,
                maxWidth: "52ch",
              }}
            >
              Every project is approached with attention to clean implementation, maintainable structure, performance, and usability.
            </p>
          </div>
        </MotionReveal>

        <StaggerReveal
          stagger={0.08}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1px",
            backgroundColor: "var(--color-border)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}
        >
          {standards.map((s) => (
            <div
              key={s.title}
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--color-background)",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "var(--color-accent)",
                  marginBottom: "1.125rem",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  margin: "0 0 0.5rem",
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--color-ink-secondary)",
                  margin: 0,
                  maxWidth: "none",
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
