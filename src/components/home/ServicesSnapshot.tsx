import Link from "next/link";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";

const services = [
  {
    title: "WordPress Website Development",
    href: "/services/wordpress-website-development",
    description:
      "Custom business websites built around your content, goals, and the way your business works.",
  },
  {
    title: "WooCommerce Development",
    href: "/services/woocommerce-development",
    description:
      "Ecommerce built with WooCommerce — usable, structured, and manageable.",
  },
  {
    title: "Maintenance & Support",
    href: "/services/maintenance-support",
    description:
      "Ongoing support for sites that need updates, improvements, and reliable long-term care.",
  },
  {
    title: "Hosting",
    href: "/services/hosting",
    description:
      "Managed WordPress hosting with site care included — updates, backups, and minor upkeep on a yearly plan.",
  },
];

export default function ServicesSnapshot() {
  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        {/* Headline */}
        <MotionReveal>
          <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
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
              What I help with
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
              Services
            </h2>
          </div>
        </MotionReveal>

        {/* Service rows — editorial list style */}
        <StaggerReveal
          stagger={0.1}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "2rem",
                paddingBlock: "clamp(1.5rem, 3vw, 2.5rem)",
                borderTop: "1px solid var(--color-border)",
                textDecoration: "none",
                color: "inherit",
              }}
              className="service-row"
            >
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "baseline", flex: 1, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-muted)",
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                    width: "1.5rem",
                  }}
                >
                  0{i + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      color: "var(--color-ink)",
                      margin: "0 0 0.375rem",
                      lineHeight: 1.2,
                      letterSpacing: "-0.005em",
                      transition: "color 0.2s ease",
                    }}
                    className="service-title"
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.55,
                      color: "var(--color-ink-secondary)",
                      margin: 0,
                      maxWidth: "46ch",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  color: "var(--color-muted)",
                  flexShrink: 0,
                  marginTop: "0.25rem",
                  transition: "transform 0.25s ease, color 0.2s ease",
                }}
                className="service-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
          {/* Final border */}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </StaggerReveal>

        <MotionReveal delay={0.3}>
          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.9375rem",
              color: "var(--color-ink-secondary)",
              lineHeight: 1.6,
            }}
          >
            Also: custom plugins, API integrations, rebuilds, and other technical needs.{" "}
            <Link href="/services" style={{ color: "var(--color-ink)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>
              All services
            </Link>
          </p>
        </MotionReveal>
      </div>

      <style>{`
        .service-row:hover .service-title { color: var(--color-accent); }
        .service-row:hover .service-arrow { transform: translate(4px, 0); color: var(--color-accent); }
      `}</style>
    </section>
  );
}
