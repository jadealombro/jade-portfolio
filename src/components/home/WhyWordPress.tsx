import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";

const reasons = [
  {
    title: "You own it completely",
    body: "No monthly platform fees, no vendor lock-in. Your site, your content, your data — hosted wherever you choose.",
  },
  {
    title: "Easy for you to manage",
    body: "WordPress has a straightforward editing interface. You can update content, add pages, and publish posts without touching any code.",
  },
  {
    title: "Built to last",
    body: "WordPress has been around since 2003 and powers over 40% of the web. It has a vast ecosystem of developers, tools, and long-term support behind it.",
  },
  {
    title: "Grows with your business",
    body: "From a simple service site to a full ecommerce store, WordPress scales. You're not boxed in by what the platform allows.",
  },
];

export default function WhyWordPress() {
  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gap: "clamp(3rem, 6vw, 5rem)",
            gridTemplateColumns: "1fr",
          }}
          className="why-wp-grid"
        >
          {/* Left: heading + context */}
          <MotionReveal>
            <div style={{ maxWidth: "420px" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                }}
              >
                Why WordPress
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--color-ink)",
                  margin: "0 0 1.25rem",
                }}
              >
                You don&apos;t need to know what WordPress is — but here&apos;s why it matters
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "var(--color-ink-secondary)",
                  margin: 0,
                }}
              >
                Most clients come to me wanting a website, not a specific platform. WordPress is simply the tool I use to build it — and it happens to be the right one for most business sites.
              </p>
            </div>
          </MotionReveal>

          {/* Right: reasons grid */}
          <StaggerReveal
            stagger={0.08}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
              gap: "2rem",
              alignContent: "start",
            }}
          >
            {reasons.map((r) => (
              <div key={r.title}>
                <div
                  style={{
                    width: "24px",
                    height: "2px",
                    backgroundColor: "var(--color-accent)",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    margin: "0 0 0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--color-ink-secondary)",
                    margin: 0,
                  }}
                >
                  {r.body}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .why-wp-grid { grid-template-columns: 2fr 3fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}
