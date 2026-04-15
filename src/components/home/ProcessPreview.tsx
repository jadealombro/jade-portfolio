import Link from "next/link";
import MotionReveal from "@/components/ui/MotionReveal";

const steps = [
  { number: "01", label: "Discovery" },
  { number: "02", label: "Planning" },
  { number: "03", label: "Design direction" },
  { number: "04", label: "Build" },
  { number: "05", label: "Review" },
  { number: "06", label: "Launch" },
  { number: "07", label: "Handoff & support" },
];

export default function ProcessPreview() {
  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        <MotionReveal>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            <div>
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
                How it works
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
                The process
              </h2>
            </div>
            <Link
              href="/process"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-ink)",
                textDecoration: "none",
                borderBottom: "1px solid currentColor",
                paddingBottom: "2px",
                opacity: 0.6,
                whiteSpace: "nowrap",
                alignSelf: "flex-end",
                marginBottom: "0.5rem",
              }}
            >
              See in detail →
            </Link>
          </div>
        </MotionReveal>

        {/* Steps as a horizontal scrolling row */}
        <MotionReveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
              borderTop: "1px solid var(--color-border)",
            }}
            className="process-steps"
          >
            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{
                  padding: "1.75rem 1.25rem 1.5rem",
                  borderLeft: i === 0 ? "none" : "1px solid var(--color-border)",
                  borderTop: i === 0 ? `2px solid var(--color-accent)` : "none",
                  marginTop: i === 0 ? "-1px" : "0",
                  position: "relative",
                }}
              >
                {i !== 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      backgroundColor: "transparent",
                    }}
                  />
                )}
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "var(--color-muted)",
                    margin: "0 0 0.625rem",
                    maxWidth: "none",
                    letterSpacing: "0.06em",
                  }}
                >
                  {step.number}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(0.875rem, 1.2vw, 1.0625rem)",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    margin: 0,
                    maxWidth: "none",
                    lineHeight: 1.3,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-steps {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
