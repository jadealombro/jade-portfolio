import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "WordPress Development", href: "/services/wordpress-website-development" },
    { label: "WooCommerce Development", href: "/services/woocommerce-development" },
    { label: "Maintenance & Support", href: "/services/maintenance-support" },
    { label: "All Services", href: "/services" },
  ],
  Explore: [
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-surface)",
        paddingBlock: "4rem 2.5rem",
        marginTop: "0",
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ maxWidth: "320px" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                textDecoration: "none",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Jade Alombro
            </Link>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-ink-secondary)",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "none",
              }}
            >
              Web developer specializing in WordPress. Custom business websites, WooCommerce development, and ongoing site support.
            </p>
            <div style={{ marginTop: "1.75rem" }}>
              <Link
                href="/contact"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-background)",
                  backgroundColor: "var(--color-ink)",
                  textDecoration: "none",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  display: "inline-block",
                }}
              >
                Start a project
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: "1rem",
                }}
              >
                {group}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-ink-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--color-muted)",
              margin: 0,
              maxWidth: "none",
            }}
          >
            &copy; {year} Jade Alombro. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--color-muted)",
              margin: 0,
              maxWidth: "none",
            }}
          >
            jadealombro.com
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
