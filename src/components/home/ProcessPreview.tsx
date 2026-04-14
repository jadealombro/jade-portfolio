import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

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
    <section className="section-padding" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container-site">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          <SectionHeading
            label="How it works"
            heading="A clear process from planning to launch"
            subheading="Good work comes from a thoughtful process. I keep projects organized, collaborative, and focused on what matters most."
          />
          <Link
            href="/process"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-ink)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-ink)",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
              marginTop: "0.5rem",
            }}
          >
            See the full process →
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0",
            overflowX: "auto",
            paddingBottom: "0.5rem",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                flex: "0 0 auto",
                minWidth: "140px",
                padding: "1.5rem 1.25rem",
                borderLeft: "1px solid var(--color-border)",
                borderTop: i === 0 ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
                position: "relative",
              }}
            >
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "var(--color-accent)",
                  }}
                />
              )}
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-muted)",
                  margin: "0 0 0.5rem",
                  maxWidth: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {step.number}
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                  margin: 0,
                  maxWidth: "none",
                  lineHeight: 1.3,
                }}
              >
                {step.label}
              </p>
            </div>
          ))}
          {/* Cap right border */}
          <div style={{ flex: "0 0 1px", borderLeft: "1px solid var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
