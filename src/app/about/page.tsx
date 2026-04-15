import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Jade Alombro is a WordPress developer based in Montreal with over a decade of experience building custom websites for small businesses, ecommerce brands, and law firms.",
  path: "/about",
});

const traits = [
  {
    title: "Collaborative\nand clear",
    description:
      "I keep clients informed throughout the project, ask questions before making assumptions, and make sure everyone has a clear picture of where things stand.",
  },
  {
    title: "Thoughtful\nand detail-oriented",
    description:
      "I pay attention to structure, performance, and usability — not just the visual surface. The details that don't always get noticed are often the ones that make a site work well over time.",
  },
  {
    title: "Practical\nand business-minded",
    description:
      "I approach every project with the business goals in mind, not just the design brief. A good website should support real operations and real outcomes.",
  },
  {
    title: "Reliable\nand responsive",
    description:
      "I follow through on what I commit to, communicate honestly if something changes, and try to make the process straightforward for clients who have many other things to manage.",
  },
];

const standards = [
  { title: "Clean, maintainable code", desc: "I write code that can be understood, updated, and built on — by me or by another developer." },
  { title: "Performance-conscious", desc: "Fast load times and efficient implementation are built in from the start, not bolted on." },
  { title: "SEO-friendly structure", desc: "Proper heading hierarchy, semantic HTML, and metadata give every site a strong technical SEO foundation." },
  { title: "Accessible and responsive", desc: "Every site is built to work well across devices and to meet reasonable accessibility standards." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              About
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
              WordPress developer with over a decade of real client work
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", margin: "0 0 2.5rem" }}>
              I&apos;m Jade Alombro — based in Montreal, building custom WordPress websites and WooCommerce solutions for businesses that need something reliable, well-built, and actually maintained.
            </p>
            <Button href="/contact" size="lg">Start a project</Button>
          </MotionReveal>
        </div>
      </header>

      {/* Background */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ maxWidth: "680px" }}>
              <SectionHeading label="Background" heading="How I got here" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                I studied computer science and first got into CMS development through Joomla. After graduating, I landed a job where the team used WordPress — and it stuck. That was 2011. I&apos;ve been working in WordPress ever since, across a range of clients, project types, and technical challenges.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                Over the years I&apos;ve worked with small businesses, ecommerce brands, and law firms — clients who needed more than a template, and who wanted someone who could understand what their site actually needed to do.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                Today I take on a small number of projects at a time — a mix of new builds, WooCommerce work, and ongoing support for existing clients. I&apos;d rather do fewer things well than spread too thin.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Who I work with */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ maxWidth: "680px" }}>
              <SectionHeading label="Clients" heading="Who I work with" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                Most of my clients are small to mid-sized businesses — law firms that need a professional, trustworthy presence; ecommerce brands that need a WooCommerce store that&apos;s actually usable; and service businesses that need a site that works hard without being difficult to maintain.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                What they tend to have in common: they know what their business needs, they want a developer who listens, and they don&apos;t want to manage a complicated back-and-forth to get there.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* How I approach projects */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <SectionHeading label="Approach" heading="How I approach client work" />
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
                <div style={{ width: "28px", height: "2px", backgroundColor: "var(--color-accent)", marginBottom: "1.25rem" }} />
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
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", margin: 0, maxWidth: "none" }}>
                  {trait.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Communication + standards */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "1fr" }} className="about-two-col">
            <MotionReveal>
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
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <SectionHeading label="Standards" heading="Development standards" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {standards.map((item) => (
                  <li key={item.title} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-accent)", marginTop: "0.625rem", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)", margin: "0 0 0.25rem", maxWidth: "none" }}>{item.title}</p>
                      <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--color-ink-secondary)", margin: 0, maxWidth: "none" }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* AI workflow */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ maxWidth: "640px" }}>
              <SectionHeading label="Workflow" heading="On using AI tools" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                I use AI tools as part of my workflow — no hedging about it. They&apos;re genuinely useful — for exploring approaches, moving faster on certain tasks, catching things I might have missed, and working through problems more efficiently. Used well, they raise the quality and pace of the work.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                But AI doesn&apos;t replace the judgment that comes from building real projects over many years. It doesn&apos;t know your business, understand your users, or make the decisions that determine whether a site is actually good. Every architectural choice, implementation decision, and quality call is still made by me.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                I think the honest position is this: AI is a capable tool in the hands of someone who knows what they&apos;re doing, and a liability in the hands of someone who doesn&apos;t. The craft still matters. The experience still matters. The tools just move things forward faster when the foundation is solid.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

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
              Interested in working together?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Tell me about your project and I&apos;ll follow up with any questions before we get started.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Start a project</Button>
              <Button href="/projects" variant="secondary" size="lg">View projects</Button>
            </div>
          </MotionReveal>
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
