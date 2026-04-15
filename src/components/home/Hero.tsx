"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const rotatingPhrases = [
  "does the work.",
  "gets noticed.",
  "earns its keep.",
];

function HeroLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
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
          color: "var(--color-ink)",
          paddingBottom: "0.12em",
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

function RotatingPhrase({ phrase, visible }: { phrase: string; visible: boolean }) {
  const words = phrase.split(" ");
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.span
          key={phrase}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          style={{ display: "block" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.45, ease }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setStarted(true), 2200);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [started]);

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
      {/* Atmospheric glow */}
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
          background: "radial-gradient(circle, rgba(61,90,76,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1, width: "100%" }}>
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
          A freelance developer who builds websites that work.
        </motion.p>

        {/* Display headline */}
        <div style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
          <HeroLine delay={0.18}>Your website that</HeroLine>

          {/* Rotating line — min-height holds space for one line */}
          <div
            style={{
              minHeight: "clamp(3.45rem, 9.66vw, 9.2rem)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3.75rem, 10.5vw, 10rem)",
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "var(--color-accent)",
              paddingBottom: "0.12em",
            }}
          >
            <RotatingPhrase phrase={rotatingPhrases[index]} visible={started} />
          </div>
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
          I&apos;m Jade Alombro. Let&apos;s create something great together — reach out and tell me about your project.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78, ease }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
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
              padding: "0.75rem 1.75rem",
              borderRadius: "9999px",
              letterSpacing: "-0.01em",
            }}
          >
            Let&apos;s work together
          </Link>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "var(--color-accent)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              borderBottom: "1px solid var(--color-accent)",
              paddingBottom: "2px",
            }}
          >
            View projects
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
            style={{ position: "absolute", inset: 0, backgroundColor: "var(--color-accent)" }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 580px) {
          .scroll-hint { display: none; }
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
    </section>
  );
}
