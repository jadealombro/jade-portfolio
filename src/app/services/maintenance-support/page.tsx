import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = buildMetadata({
  title: "Maintenance & Support",
  description:
    "Ongoing WordPress maintenance and support — updates, troubleshooting, performance monitoring, and reliable long-term care for your site.",
  path: "/services/maintenance-support",
});

const whatItIncludes = [
  "Regular WordPress core, theme, and plugin updates",
  "Performance and uptime monitoring",
  "Bug fixes and troubleshooting",
  "Incremental improvements and feature additions",
  "Content and configuration updates",
  "Backup management and security monitoring",
  "A reliable point of contact who knows the site",
];

const bestFitFor = [
  "Sites Jade built that need ongoing care after launch",
  "Businesses that want a developer who already knows their setup",
  "Teams without in-house development capacity for regular maintenance",
  "Sites with complex functionality that requires careful, knowledgeable upkeep",
  "Businesses making small improvements over time rather than large one-off projects",
];

const relatedProjects = projects.filter((p) =>
  ["example-maintenance-support"].includes(p.slug)
);

export default function MaintenanceSupportPage() {
  return (
    <>
      <div style={{ paddingTop: "120px", paddingBottom: "5rem", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/services" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", fontWeight: 500 }}>
              ← Services
            </Link>
          </div>
          <p style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
            Maintenance & Support
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1.5rem",
              maxWidth: "680px",
            }}
          >
            Reliable ongoing support for WordPress sites
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "54ch", marginBottom: "2rem" }}>
            After launch, sites need care. I provide ongoing support for WordPress sites — handling updates, improvements, and troubleshooting so the site stays in good shape over time.
          </p>
          <Button href="/contact" size="lg">Talk about support</Button>
        </div>
      </div>

      <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "700px" }}>
            <SectionHeading label="The service" heading="What ongoing support looks like" />
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
              A WordPress site isn&apos;t finished at launch. WordPress itself updates regularly, plugins need attention, things break, and businesses want to make improvements over time. Without someone managing this, sites accumulate technical debt, security risks, and problems that become harder to fix the longer they&apos;re ignored.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
              I provide ongoing support that keeps sites updated, secure, and in good working order — and handles the smaller improvements and fixes that come up over time without needing to start a new project every time.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
              Support works best for sites I&apos;ve built, where I know exactly how everything is structured and can work efficiently. In some cases I can also take on support for sites built by others — it depends on the setup.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr" }} className="two-col">
            <div>
              <SectionHeading label="What's included" heading="What support can cover" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {whatItIncludes.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading label="Best fit" heading="Who this works well for" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {bestFitFor.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="container-site">
            <SectionHeading label="Examples" heading="Related projects" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }}>
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-site">
          <div style={{ maxWidth: "540px" }}>
            <h2 style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-ink)", margin: "0 0 1.25rem" }}>
              Looking for reliable ongoing support?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2rem" }}>
              Tell me about your site and what kind of support you&apos;re looking for. I&apos;ll let you know if it&apos;s a good fit and what the arrangement would look like.
            </p>
            <Button href="/contact" size="lg">Get in touch</Button>
          </div>
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
