import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Custom WordPress development, WooCommerce solutions, and ongoing site support. Jade Alombro builds reliable, maintainable websites for businesses.",
  path: "/services",
});

const mainServices = [
  {
    title: "WordPress Website Development",
    href: "/services/wordpress-website-development",
    description:
      "Custom business websites built from the ground up in WordPress — structured around your content, goals, and the way your business works. Not adapted from a generic template.",
    details: [
      "Custom WordPress theme development",
      "Page and content structure planning",
      "Inquiry and contact form setup",
      "CMS configuration and training",
      "Performance and SEO optimization",
    ],
  },
  {
    title: "WooCommerce Development",
    href: "/services/woocommerce-development",
    description:
      "Ecommerce experiences built with WooCommerce — from initial setup to custom product structures, checkout flow improvements, and third-party integrations.",
    details: [
      "WooCommerce store setup and configuration",
      "Custom product and category structure",
      "Checkout flow and UX improvements",
      "Payment gateway and shipping integration",
      "Inventory and order management setup",
    ],
  },
  {
    title: "Maintenance & Support",
    href: "/services/maintenance-support",
    description:
      "Reliable ongoing support for WordPress sites — updates, troubleshooting, performance monitoring, and incremental improvements handled by someone who actually knows the site.",
    details: [
      "Core, plugin, and theme updates",
      "Performance and uptime monitoring",
      "Bug fixes and troubleshooting",
      "Incremental feature additions",
      "Content and configuration updates",
    ],
  },
  {
    title: "Hosting",
    href: "/services/hosting",
    description:
      "Managed WordPress hosting on a yearly plan — with plugin updates, regular backups, and minor site upkeep included so the site stays in good shape without you having to think about it.",
    details: [
      "Managed WordPress hosting",
      "Plugin, theme, and core updates",
      "Regular site backups",
      "Publishing content you provide",
      "Uptime monitoring",
    ],
  },
  {
    title: "Technical SEO",
    href: "/services/technical-seo",
    description:
      "The foundational SEO work that makes your site readable and rankable — semantic HTML, proper metadata, Core Web Vitals, sitemaps, schema markup, and more. Built into every new site I build, or applied as a standalone audit and fix.",
    details: [
      "Semantic HTML structure and heading hierarchy",
      "Meta titles, descriptions, and Open Graph tags",
      "XML sitemap and robots.txt configuration",
      "Schema markup for business and services",
      "Page speed and Core Web Vitals improvements",
    ],
  },
];

const supporting = [
  "Custom plugin development",
  "API and third-party integrations",
  "Site rebuilds and improvements",
  "Performance optimization",
  "SEO-friendly implementation",
  "Custom functionality and post types",
  "AI-assisted workflow where useful",
  "Broader development support when needed",
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              Services
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
              Custom WordPress work for businesses that need more than a template
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", marginBottom: "2.5rem" }}>
              I specialize in custom WordPress development — from building new business websites to improving and supporting existing ones.
            </p>
            <Button href="/contact" size="lg">Start a project</Button>
          </MotionReveal>
        </div>
      </header>

      {/* Main services */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <SectionHeading label="Main services" heading="What I specialize in" />
          </MotionReveal>
          <StaggerReveal
            stagger={0.1}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              backgroundColor: "var(--color-border)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            {mainServices.map((service) => (
              <div key={service.href} style={{ backgroundColor: "var(--color-background)", padding: "2.5rem" }}>
                <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr" }} className="service-row">
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                        fontWeight: 500,
                        color: "var(--color-ink)",
                        margin: "0 0 0.875rem",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </h2>
                    <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "1.75rem" }}>
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-accent)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.375rem" }}
                    >
                      Learn more →
                    </Link>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {service.details.map((d) => (
                      <li key={d} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--color-accent)", fontSize: "0.875rem", marginTop: "0.1rem", flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.5 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Supporting capabilities */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <SectionHeading
              label="Also available"
              heading="Supporting capabilities"
              subheading="Beyond the core services, I can also help with a range of related needs — depending on the project."
            />
          </MotionReveal>
          <StaggerReveal
            stagger={0.06}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))",
              gap: "0.75rem",
            }}
          >
            {supporting.map((item) => (
              <div
                key={item}
                style={{
                  padding: "1rem 1.25rem",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.9rem",
                  color: "var(--color-ink-secondary)",
                  lineHeight: 1.4,
                }}
              >
                {item}
              </div>
            ))}
          </StaggerReveal>
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
                maxWidth: "22ch",
              }}
            >
              Not sure which service fits your needs?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Reach out and describe what you&apos;re working on. I&apos;ll ask a few questions and help figure out the right approach.
            </p>
            <Button href="/contact" size="lg">Get in touch</Button>
          </MotionReveal>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .service-row { grid-template-columns: 3fr 2fr !important; align-items: start; }
        }
      `}</style>
    </>
  );
}
