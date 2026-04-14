"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="container-site">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo / brand */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Jade Alombro
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 450,
                    color: active ? "var(--color-ink)" : "var(--color-ink-secondary)",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    transition: "color 0.2s ease",
                    borderBottom: active ? "1px solid var(--color-ink)" : "1px solid transparent",
                    paddingBottom: "2px",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-background)",
                backgroundColor: "var(--color-ink)",
                textDecoration: "none",
                padding: "0.5rem 1.125rem",
                borderRadius: "var(--radius-sm)",
                letterSpacing: "0.01em",
                transition: "background-color 0.2s ease",
              }}
            >
              Start a project
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--color-ink)",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--color-ink)",
                transition: "opacity 0.25s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--color-ink)",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--color-background)",
            borderTop: "1px solid var(--color-border)",
            padding: "1.5rem",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "1rem",
                    fontWeight: active ? 500 : 400,
                    color: active ? "var(--color-ink)" : "var(--color-ink-secondary)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--color-background)",
                backgroundColor: "var(--color-ink)",
                textDecoration: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-sm)",
                display: "inline-block",
                marginTop: "0.5rem",
                width: "fit-content",
              }}
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex; }
        }
      `}</style>
    </header>
  );
}
