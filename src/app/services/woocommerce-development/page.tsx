import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = buildMetadata({
  title: "WooCommerce Development",
  description:
    "WooCommerce stores and ecommerce solutions built for businesses that need a reliable, manageable, and well-structured online shop.",
  path: "/services/woocommerce-development",
});

const commonNeeds = [
  "Setting up a new WooCommerce store from scratch",
  "Improving or rebuilding an existing store that isn't performing well",
  "Custom product structures that don't fit default WooCommerce behavior",
  "Better checkout and cart experiences to reduce drop-off",
  "Connecting the store to shipping providers, payment gateways, or other tools",
  "Making the store backend easier for the team to manage day-to-day",
];

const approach = [
  "Start by understanding the product catalog, customer journey, and business goals — before building anything",
  "Build store structure that makes sense for the specific products and selling model",
  "Focus on the checkout experience as a conversion point, not an afterthought",
  "Ensure the backend is as easy to manage as possible for the team doing inventory and orders",
  "Integrate payment, shipping, and other tools the business relies on",
  "Test across devices to make sure the shopping experience holds up",
];

const relatedProjects = projects.filter((p) =>
  ["elexia-naturals", "siam-tenga", "tenga-thailand"].includes(p.slug)
);

export default function WooCommercePage() {
  return (
    <>
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ marginBottom: "1.5rem" }}>
              <Link href="/services" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", fontWeight: 500 }}>
                ← Services
              </Link>
            </div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              WooCommerce Development
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
              WooCommerce stores built to sell — and easy to manage
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", marginBottom: "2.5rem" }}>
              I build and improve WooCommerce stores for businesses that need a practical ecommerce setup — one that works for customers and is manageable for the team running it.
            </p>
            <Button href="/contact" size="lg">Start a project</Button>
          </MotionReveal>
        </div>
      </header>

      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ maxWidth: "700px" }}>
              <SectionHeading label="The service" heading="WooCommerce development in practice" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                WooCommerce is a powerful platform when it&apos;s configured properly for the business using it. When it&apos;s not, it becomes a source of frustration — confusing product setups, clunky checkouts, and a backend that takes more time to manage than it should.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                I work with businesses to build or improve WooCommerce stores that fit the way they actually sell. That means the right product structure, a checkout that doesn&apos;t get in the customer&apos;s way, and a backend that the team can manage without needing a developer for everyday tasks.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                When a project needs custom behavior that WooCommerce doesn&apos;t handle out of the box, I can build the functionality to support it — without relying on heavy plugins that add more complexity than they solve.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "1fr" }} className="two-col">
            <MotionReveal>
              <SectionHeading label="Common needs" heading="What businesses usually need" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {commonNeeds.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <SectionHeading label="My approach" heading="How I build WooCommerce stores" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {approach.map((item) => (
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
                maxWidth: "20ch",
              }}
            >
              Have a WooCommerce project in mind?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Tell me about your store and what you&apos;re trying to improve or build. I&apos;ll follow up with questions and a sense of how I can help.
            </p>
            <Button href="/contact" size="lg">Start a project</Button>
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
