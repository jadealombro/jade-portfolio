import MotionReveal from "@/components/ui/MotionReveal";

export default function Intro() {
  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        <MotionReveal>
          <p
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(1.625rem, 3.5vw, 2.625rem)",
              lineHeight: 1.35,
              fontWeight: 500,
              color: "var(--color-ink)",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.025em",
              maxWidth: "820px",
            }}
          >
            I work with businesses that need a website built with more care, flexibility, and technical thought than a generic setup can offer.
          </p>
        </MotionReveal>
        <MotionReveal delay={0.15}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "var(--color-ink-secondary)",
              margin: 0,
              maxWidth: "52ch",
            }}
          >
            WordPress is my specialty — but I can also work beyond WordPress when a project calls for a broader solution.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
