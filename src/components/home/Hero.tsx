"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

/* Each line clips upward independently */
function HeroLine({
  children,
  delay,
  outlined = false,
}: {
  children: React.ReactNode;
  delay: number;
  outlined?: boolean;
}) {
  return (
    <div style={{ overflow: "hidden", lineHeight: 0 }}>
      <motion.span
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
        style={{
          display: "block",
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(3.75rem, 10.5vw, 10rem)",
          fontWeight: 500,
          lineHeight: 0.92,
          letterSpacing: "-0.01em",
          fontStyle: outlined ? "italic" : "normal",
          color: "var(--color-ink)",
          paddingBottom: "0.12em",
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Atmospheric glow — centred behind text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          maxWidth: "900px",
          maxHeight: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(61,90,76,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-site"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          WordPress Developer
        </motion.p>

        {/* Display headline */}
        <div style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
          <HeroLine delay={0.18}>Custom WordPress</HeroLine>
          <HeroLine delay={0.3}>websites</HeroLine>
          <HeroLine delay={0.42} outlined>for business.</HeroLine>
        </div>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            lineHeight: 1.65,
            color: "var(--color-ink-secondary)",
            margin: "0 auto clamp(2rem, 3vw, 2.75rem)",
            maxWidth: "44ch",
          }}
        >
          I&apos;m Jade Alombro. I build custom business websites with WordPress — reliable, maintainable, and built around the way your business actually works.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78, ease }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--color-background)",
              backgroundColor: "var(--color-ink)",
              textDecoration: "none",
              padding: "0.75rem 1.75rem",
              borderRadius: "var(--radius-sm)",
              letterSpacing: "-0.01em",
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
            }}
          >
            Start a project
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
        className="scroll-hint"
      >
        <span
          style={{
            fontSize: "0.625rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            fontWeight: 600,
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: "1px",
            height: "48px",
            backgroundColor: "var(--color-border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "var(--color-accent)",
            }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 580px) {
          .scroll-hint { display: none; }
        }
      `}</style>
    </section>
  );
}
