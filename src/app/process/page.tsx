import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Process",
  description:
    "A clear, collaborative process from discovery to launch and handoff. Learn how Jade Alombro approaches WordPress development projects.",
  path: "/process",
});

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Before anything gets designed or built, I take time to understand the business — what it does, who it serves, how it operates, and what the site needs to accomplish. This includes reviewing any existing site, understanding content requirements, and identifying any constraints or must-haves. Good discovery prevents problems later and leads to much better results.",
    outcomes: [
      "Clear picture of the project goals and requirements",
      "Understanding of the target audience and visitor needs",
      "Identification of any technical considerations or constraints",
      "Agreed scope of work",
    ],
  },
  {
    number: "02",
    title: "Planning",
    description:
      "With a clear understanding of the project, I put together a concrete plan — the sitemap, content structure, functionality requirements, and a realistic timeline. This gives both sides a shared reference point and makes sure nothing important gets missed before work begins.",
    outcomes: [
      "Agreed sitemap and page structure",
      "Content plan and requirements list",
      "Functionality specifications",
      "Project timeline with milestones",
    ],
  },
  {
    number: "03",
    title: "Design direction",
    description:
      "I work through the visual and structural direction for the site — layout, typography, color, and the overall presentation of content. This might involve style reference boards or initial layout sketches, depending on the project. The goal is to establish a clear direction before development begins, so that feedback happens at the right stage.",
    outcomes: [
      "Agreed visual and layout direction",
      "Typography and color decisions",
      "Key page layout patterns established",
      "Design reviewed and approved before build",
    ],
  },
  {
    number: "04",
    title: "Build",
    description:
      "With planning and design direction locked in, development begins. I build the site in WordPress — custom theme development, content structure setup, functionality implementation, and any integrations or plugins needed. I work through the full build systematically, keeping the development environment accessible for review throughout.",
    outcomes: [
      "Fully built WordPress site in staging environment",
      "All content and functionality implemented",
      "Integrations and third-party tools connected",
      "CMS configured for easy content management",
    ],
  },
  {
    number: "05",
    title: "Review and refinement",
    description:
      "Once the build is complete, I walk you through the site and open it for a structured review period. Feedback is collected, prioritized, and addressed. This isn't unlimited revisions — it's a focused review to make sure the site meets the agreed requirements and feels right before launch.",
    outcomes: [
      "Structured walkthrough of the complete site",
      "Client feedback collected and addressed",
      "Final refinements implemented",
      "Site signed off and ready for launch",
    ],
  },
  {
    number: "06",
    title: "Launch",
    description:
      "With everything approved, the site goes live. This involves the technical steps of moving from staging to the live domain — DNS configuration, SSL, redirects if needed, and a final check across devices and browsers before declaring it done.",
    outcomes: [
      "Site live on the correct domain with SSL",
      "Redirects and domain configuration complete",
      "Final cross-device and cross-browser check",
      "Site confirmed working correctly in production",
    ],
  },
  {
    number: "07",
    title: "Handoff and support",
    description:
      "After launch, I walk you through how to manage the site — how to update content, add pages, manage products if relevant, and handle everyday tasks without needing a developer. I answer any questions and make sure the handoff is complete. Ongoing support is available for sites that need it beyond the initial handoff.",
    outcomes: [
      "CMS training and walkthrough",
      "Documentation for key tasks",
      "All credentials and access transferred",
      "Ongoing support available if needed",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: "120px", paddingBottom: "5rem", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <p style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
            Process
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1.5rem",
              maxWidth: "680px",
            }}
          >
            A clear process from planning to launch
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "54ch", margin: 0 }}>
            Good work comes from a thoughtful process. I keep projects organized, collaborative, and focused on what matters most at each stage.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section style={{ paddingBlock: "5rem" }}>
        <div className="container-site">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  paddingBlock: "3.5rem",
                  borderTop: "1px solid var(--color-border)",
                }}
                className="process-step"
              >
                {/* Step number + title */}
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-muted)", letterSpacing: "0.06em", margin: "0 0 0.5rem", maxWidth: "none" }}>
                    Step {step.number}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                      fontWeight: 600,
                      color: "var(--color-ink)",
                      margin: 0,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.25,
                    }}
                  >
                    {step.title}
                  </h2>
                </div>

                {/* Content */}
                <div>
                  <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "2rem" }}>
                    {step.description}
                  </p>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.875rem", maxWidth: "none" }}>
                      Outcomes
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                          <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.15rem", fontSize: "0.875rem" }}>✓</span>
                          <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.5 }}>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Final border */}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "540px" }}>
            <h2 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-ink)", margin: "0 0 1.25rem" }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2rem" }}>
              Tell me about your project and we&apos;ll start from the beginning — with a proper discovery process.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Start a project</Button>
              <Button href="/projects" variant="secondary" size="lg">View projects</Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .process-step { grid-template-columns: 1fr 2fr !important; align-items: start; }
        }
      `}</style>
    </>
  );
}
