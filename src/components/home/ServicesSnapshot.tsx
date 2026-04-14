import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "WordPress Website Development",
    href: "/services/wordpress-website-development",
    description:
      "Custom business websites built around your content, goals, and the way your business works — not adapted from a generic template.",
  },
  {
    title: "WooCommerce Development",
    href: "/services/woocommerce-development",
    description:
      "Ecommerce experiences built with WooCommerce, with attention to usability, structure, product management, and maintainability.",
  },
  {
    title: "Maintenance & Support",
    href: "/services/maintenance-support",
    description:
      "Ongoing support for websites that need updates, improvements, troubleshooting, and reliable long-term care.",
  },
];

export default function ServicesSnapshot() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container-site">
        <SectionHeading
          label="What I help with"
          heading="Services"
          subheading="I specialize in custom WordPress work for businesses that need a site that is both professional and practical."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1px",
            backgroundColor: "var(--color-border)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}
        >
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              style={{
                backgroundColor: "var(--color-background)",
                padding: "2rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "background-color 0.2s ease",
              }}
              className="service-card"
            >
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.1875rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  margin: 0,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: "var(--color-ink-secondary)",
                  margin: 0,
                  maxWidth: "none",
                  flex: 1,
                }}
              >
                {service.description}
              </p>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-accent)",
                  marginTop: "0.25rem",
                }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <p
          style={{
            marginTop: "1.75rem",
            fontSize: "0.9375rem",
            color: "var(--color-ink-secondary)",
            lineHeight: 1.6,
          }}
        >
          I also help with custom functionality, plugins, API integrations, rebuilds, and other technical needs where WordPress requires a more tailored approach.{" "}
          <Link href="/services" style={{ color: "var(--color-ink)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Explore all services
          </Link>
        </p>

        <style>{`
          .service-card:hover { background-color: var(--color-accent-light) !important; }
        `}</style>
      </div>
    </section>
  );
}
