"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "clamp(3rem, 8vw, 6rem)",
        paddingTop: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "70vw",
          height: "70vw",
          maxWidth: "900px",
          maxHeight: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(61,90,76,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          WordPress Developer
        </motion.p>

        {/* Massive headline — split into two lines for drama */}
        <div style={{ overflow: "hidden", marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(3.25rem, 9vw, 8.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
              margin: 0,
            }}
          >
            Custom WordPress
          </motion.h1>
        </div>

        <div
          style={{
            overflow: "hidden",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            display: "flex",
            alignItems: "baseline",
            gap: "clamp(0.5rem, 1.5vw, 1.25rem)",
            flexWrap: "wrap",
          }}
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease }}
            style={{
              display: "block",
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(3.25rem, 9vw, 8.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
            }}
          >
            websites
          </motion.span>
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease }}
            style={{
              display: "block",
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(3.25rem, 9vw, 8.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "transparent",
              WebkitTextStroke: "2px var(--color-ink)",
            }}
          >
            for business.
          </motion.span>
        </div>

        {/* Supporting text + CTAs side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: "900px",
          }}
          className="hero-bottom"
        >
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.65,
              color: "var(--color-ink-secondary)",
              margin: 0,
              maxWidth: "48ch",
            }}
          >
            I&apos;m Jade Alombro. I build custom business websites with WordPress — reliable, maintainable, and built around the way your business actually works. From full builds to WooCommerce, maintenance, and custom functionality.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--color-background)",
                backgroundColor: "var(--color-ink)",
                textDecoration: "none",
                padding: "0.75rem 1.625rem",
                borderRadius: "var(--radius-sm)",
                letterSpacing: "-0.01em",
                transition: "background-color 0.2s ease",
              }}
            >
              View projects
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--color-ink-secondary)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.2s ease",
              }}
            >
              Start a project
              <span aria-hidden="true" style={{ fontSize: "1.1em" }}>→</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
        aria-hidden="true"
        className="scroll-indicator"
      >
        <span
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            fontWeight: 500,
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "var(--color-border)",
            position: "relative",
          }}
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "var(--color-accent)",
              transformOrigin: "top",
            }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @media (min-width: 900px) {
          .hero-bottom { grid-template-columns: 1fr 1fr !important; align-items: end; }
        }
        @media (max-width: 640px) {
          .scroll-indicator { display: none; }
        }
      `}</style>
    </section>
  );
}
