import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Jade Alombro — a WordPress developer focused on custom business websites, clear communication, and practical, maintainable builds.",
  path: "/about",
});

const traits = [
  {
    title: "Collaborative and clear",
    description:
      "I keep clients informed throughout the project, ask questions before making assumptions, and make sure everyone has a clear picture of where things stand.",
  },
  {
    title: "Thoughtful and detail-oriented",
    description:
      "I pay attention to structure, performance, and usability — not just the visual surface. The details that don't always get noticed are often the ones that make a site work well over time.",
  },
  {
    title: "Practical and business-minded",
    description:
      "I approach every project with the business goals in mind, not just the design brief. A good website should support real operations and real outcomes.",
  },
  {
    title: "Reliable and responsive",
    description:
      "I follow through on what I commit to, communicate honestly if something changes, and try to make the process straightforward for clients who have many other things to manage.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div style={{ paddingTop: "120px", paddingBottom: "5rem", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "1.25rem",
            }}
          >
            About
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1.75rem",
              maxWidth: "700px",
            }}
          >
            WordPress developer focused on practical, well-built websites
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "var(--color-ink-secondary)",
              maxWidth: "56ch",
              marginBottom: "2rem",
            }}
          >
            I&apos;m Jade Alombro. I build custom WordPress websites and WooCommerce solutions for businesses that need something reliable, maintainable, and tailored to the way they actually work.
          </p>
          <Button href="/contact" size="lg">Start a project</Button>
        </div>
      </div>

      {/* What I do */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "680px" }}>
            <SectionHeading label="Specialization" heading="What I do" />
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
              WordPress is the core of my work. I build custom business websites that go beyond generic templates — sites with thoughtful structure, clean implementation, and the flexibility to grow alongside the business that uses them.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
              I also build and improve WooCommerce stores, develop custom functionality and plugins, set up API integrations, and provide ongoing maintenance and support for sites after launch.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
              WordPress is my specialty, but it&apos;s not the only tool in my kit. If a project calls for something beyond WordPress, I&apos;ll say so — and I can help evaluate what the right approach looks like.
            </p>
          </div>
        </div>
      </section>

      {/* How I approach projects */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <SectionHeading label="Approach" heading="How I approach client work" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "2rem" }}>
            {traits.map((trait) => (
              <div key={trait.title}>
                <div style={{ width: "28px", height: "2px", backgroundColor: "var(--color-accent)", marginBottom: "1rem" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
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
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", margin: 0, maxWidth: "none" }}>
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication + process */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr" }} className="about-two-col">
            <div>
              <SectionHeading label="Communication" heading="How I communicate" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                I believe that good development work depends on good communication. Before starting any project, I take time to understand what the business actually needs — not just what&apos;s been requested on the surface.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                Throughout a project, I give clear timelines, flag anything that might affect scope or schedule early, and invite feedback at each stage rather than just delivering at the end.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                At handoff, I make sure the client knows how to manage their site and has everything they need to move forward independently.
              </p>
            </div>
            <div>
              <SectionHeading label="Standards" heading="Development standards" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { title: "Clean, maintainable code", desc: "I write code that can be understood, updated, and built on — by me or by another developer." },
                  { title: "Performance-conscious", desc: "Fast load times and efficient implementation are built in from the start, not bolted on." },
                  { title: "SEO-friendly structure", desc: "Proper heading hierarchy, semantic HTML, and metadata give every site a strong technical SEO foundation." },
                  { title: "Accessible and responsive", desc: "Every site is built to work well across devices and to meet reasonable accessibility standards." },
                ].map((item) => (
                  <li key={item.title} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-accent)", marginTop: "0.625rem", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)", margin: "0 0 0.25rem", maxWidth: "none" }}>{item.title}</p>
                      <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--color-ink-secondary)", margin: 0, maxWidth: "none" }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI workflow */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "640px" }}>
            <SectionHeading label="Workflow" heading="A modern workflow, used thoughtfully" />
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
              I use AI tools where they genuinely help — for exploring approaches, working through problems faster, and improving certain parts of the development process. It&apos;s a useful part of a modern workflow when applied with judgment.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
              AI doesn&apos;t replace careful implementation, quality decisions, or the practical knowledge that comes from building real projects. Every decision that goes into the site is still made by me, with long-term maintainability and the client&apos;s actual needs in mind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-site">
          <div style={{ maxWidth: "540px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                margin: "0 0 1.25rem",
              }}
            >
              Interested in working together?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2rem" }}>
              Tell me about your project and I&apos;ll follow up with any questions before we get started.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Start a project</Button>
              <Button href="/projects" variant="secondary" size="lg">View projects</Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .about-two-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
