import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";

const traits = [
  {
    title: "Collaborative\nand clear",
    description:
      "You'll always know where the project stands. I ask the right questions before making assumptions.",
  },
  {
    title: "Thoughtful\nand detail-oriented",
    description:
      "Structure, performance, usability — the details that make a site work well over time.",
  },
  {
    title: "Practical\nand business-minded",
    description:
      "I think about how the site serves the business, not just how it looks on a screen.",
  },
  {
    title: "Reliable\nand responsive",
    description:
      "I follow through on what I commit to. If something changes, I'll say so.",
  },
];

export default function HowJadeWorks() {
  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
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
              Working style
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "var(--color-ink)",
                margin: 0,
              }}
            >
              How I work
            </h2>
          </div>
        </MotionReveal>

        <StaggerReveal
          stagger={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          {traits.map((trait) => (
            <div key={trait.title}>
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  backgroundColor: "var(--color-accent)",
                  marginBottom: "1.25rem",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  margin: "0 0 0.875rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.005em",
                  whiteSpace: "pre-line",
                }}
              >
                {trait.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "var(--color-ink-secondary)",
                  margin: 0,
                  maxWidth: "none",
                }}
              >
                {trait.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
