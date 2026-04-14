export default function Intro() {
  return (
    <section style={{ paddingBlock: "5rem 4rem", borderTop: "1px solid var(--color-border)" }}>
      <div className="container-site">
        <div style={{ maxWidth: "700px" }}>
          <p
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              lineHeight: 1.55,
              fontWeight: 400,
              color: "var(--color-ink)",
              margin: "0 0 1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            I work with businesses that need a website built with more care, flexibility, and technical thought than a generic setup can offer.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "var(--color-ink-secondary)",
              margin: 0,
            }}
          >
            My focus is on creating websites that support real business goals, feel polished and professional, and remain practical to manage over time. WordPress is my specialty — but I can also work beyond WordPress when a project calls for a broader solution.
          </p>
        </div>
      </div>
    </section>
  );
}
