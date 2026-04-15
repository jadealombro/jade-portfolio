"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerSolid = scrolled || menuOpen;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: headerSolid ? "var(--color-background)" : "transparent",
          backdropFilter: headerSolid ? "blur(8px)" : "none",
          borderBottom: headerSolid ? "1px solid var(--color-border)" : "1px solid transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="container-site">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
            {/* Logo */}
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                position: "relative",
                zIndex: 60,
              }}
            >
              Jade Alombro
            </Link>

            {/* Desktop nav */}
            <nav
              className="desktop-nav"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
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
                className="jade-cta-btn"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-background)",
                  backgroundColor: "var(--color-button)",
                  textDecoration: "none",
                  padding: "0.5rem 1.125rem",
                  borderRadius: "9999px",
                  letterSpacing: "0.01em",
                }}
              >
                Start a project
              </Link>
            </nav>

            {/* Hamburger button */}
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
                justifyContent: "center",
                gap: "5px",
                position: "relative",
                zIndex: 60,
              }}
            >
              <span style={{
                display: "block", width: "22px", height: "1.5px",
                backgroundColor: "var(--color-ink)",
                transition: "transform 0.25s ease",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block", width: "22px", height: "1.5px",
                backgroundColor: "var(--color-ink)",
                transition: "opacity 0.25s ease",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: "22px", height: "1.5px",
                backgroundColor: "var(--color-ink)",
                transition: "transform 0.25s ease",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "var(--color-background)",
              display: "flex",
              flexDirection: "column",
              paddingTop: "64px",
              overflowY: "auto",
            }}
            className="mobile-menu-overlay"
          >
            <div className="container-site" style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: "2.5rem", paddingBottom: "3rem" }}>
              <nav aria-label="Mobile navigation" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {navLinks.map((link, i) => {
                  const active = pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.06 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        style={{
                          display: "block",
                          fontFamily: "var(--font-display), Georgia, serif",
                          fontSize: "clamp(2rem, 8vw, 3rem)",
                          fontWeight: 500,
                          lineHeight: 1.15,
                          letterSpacing: "-0.01em",
                          color: active ? "var(--color-ink)" : "var(--color-ink-secondary)",
                          textDecoration: "none",
                          paddingBlock: "0.625rem",
                          borderBottom: "1px solid var(--color-border)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  style={{ marginTop: "2.5rem" }}
                >
                  <Link
                    href="/contact"
                    className="jade-cta-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--color-background)",
                      backgroundColor: "var(--color-button)",
                      textDecoration: "none",
                      padding: "0.875rem 2rem",
                      borderRadius: "9999px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Start a project
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        .mobile-menu-overlay { display: flex !important; }
        @media (min-width: 769px) {
          .mobile-menu-overlay { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .jade-cta-btn {
          transition: background-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
        }
        .jade-cta-btn:hover {
          background-color: var(--color-button-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(61, 90, 76, 0.28);
        }
      `}</style>
    </>
  );
}
