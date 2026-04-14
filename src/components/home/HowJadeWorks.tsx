import SectionHeading from "@/components/ui/SectionHeading";

const traits = [
  {
    title: "Collaborative and clear",
    description:
      "I keep you informed at each stage, ask the right questions before making assumptions, and make sure you always know where the project stands.",
  },
  {
    title: "Thoughtful and detail-oriented",
    description:
      "I pay attention to the details that matter — not just visuals, but structure, performance, usability, and the way the site holds up over time.",
  },
  {
    title: "Practical and business-minded",
    description:
      "I think about how the site serves the business. The goal isn't just a polished site — it's something that supports real operations and real goals.",
  },
  {
    title: "Reliable and responsive",
    description:
      "I take the work seriously, communicate honestly, and follow through on what I commit to. If something changes, I'll tell you.",
  },
];

export default function HowJadeWorks() {
  return (
    <section className="section-padding" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container-site">
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr" }} className="how-grid">
          <div>
            <SectionHeading
              label="Working style"
              heading="How I work"
              subheading="I bring a mix of technical depth, practical thinking, and clear communication to each project. My goal is not just to deliver a polished website — but to create something that serves the business well and supports the people who need to use it."
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
              gap: "2rem",
            }}
          >
            {traits.map((trait) => (
              <div key={trait.title}>
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    backgroundColor: "var(--color-accent)",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    margin: "0 0 0.625rem",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
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
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .how-grid { grid-template-columns: 1fr 2fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}
