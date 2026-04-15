import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = buildMetadata({
  title: "WordPress Website Development",
  description:
    "Custom WordPress websites built for businesses that need more than a template. Reliable, maintainable, and structured around your business goals.",
  path: "/services/wordpress-website-development",
});

const forWho = [
  "Businesses launching a new website",
  "Companies that have outgrown their current site",
  "Organizations that need a custom structure, not a generic theme",
  "Teams that need to manage content independently after launch",
  "Businesses that want a site built around their goals, not adapted from a template",
];

const whatToExpect = [
  "A discovery process that starts with understanding your business before touching any design or code",
  "A custom WordPress build tailored to your content, pages, and the way you work",
  "Clean, performant code — no bloated page builders or unnecessary plugins",
  "A CMS setup that makes sense for your team to manage",
  "SEO-friendly structure from day one",
  "A handoff that leaves you with a site you can actually use and maintain",
];

const relatedProjects = projects.filter((p) =>
  ["lou-shapiro", "allied-law", "ann-nastasia-nepssy"].includes(p.slug)
);

export default function WordPressDevelopmentPage() {
  return (
    <>
      {/* Header */}
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ marginBottom: "1.5rem" }}>
              <Link href="/services" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", fontWeight: 500 }}>
                ← Services
              </Link>
            </div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              WordPress Website Development
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "var(--color-ink)",
                margin: "0 0 1.75rem",
              }}
            >
              Custom WordPress websites built around your business
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", marginBottom: "2.5rem" }}>
              I build custom WordPress websites for businesses that need something tailored — a site that reflects the quality of the work, is easy to manage, and built to last.
            </p>
            <Button href="/contact" size="lg">Start a project</Button>
          </MotionReveal>
        </div>
      </header>

      {/* What this is */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ maxWidth: "700px" }}>
              <SectionHeading label="The service" heading="What WordPress website development means in practice" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                A custom WordPress website isn&apos;t about picking a theme and filling in the blanks. It&apos;s about building a site that fits the way a specific business actually operates — with the right pages, the right structure, the right content relationships, and the right tools for the team managing it.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                I build from scratch — not from a page builder, not from a template that needs to be bent into shape. The result is cleaner, faster, easier to maintain, and better suited to the business it was built for.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                This includes everything from initial planning and design direction through development, testing, and a thorough handoff — so the site works well from day one and stays that way.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Who it's for + what to expect */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "1fr" }} className="two-col">
            <MotionReveal>
              <SectionHeading label="Who this is for" heading="A good fit if..." />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {forWho.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <SectionHeading label="What you can expect" heading="How the process works" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {whatToExpect.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container-site">
            <MotionReveal>
              <SectionHeading label="Examples" heading="Related projects" />
            </MotionReveal>
            <StaggerReveal
              stagger={0.12}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }}
            >
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} featured />
              ))}
            </StaggerReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)" }}>
        <div className="container-site">
          <MotionReveal>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "var(--color-ink)",
                margin: "0 0 1.5rem",
                maxWidth: "18ch",
              }}
            >
              Ready to build something better?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Tell me about your project and I&apos;ll get back to you with questions and next steps.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Start a project</Button>
              <Button href="/process" variant="secondary" size="lg">See the process</Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .two-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
