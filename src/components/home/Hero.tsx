"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Atmospheric background element */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(61,90,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "760px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "1.5rem",
            }}
          >
            WordPress Developer
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              margin: "0 0 1.75rem",
            }}
          >
            Custom WordPress websites built for real business needs
          </h1>

          {/* Supporting copy */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.65,
              color: "var(--color-ink-secondary)",
              marginBottom: "1rem",
              maxWidth: "56ch",
            }}
          >
            I&apos;m Jade Alombro, a web developer specializing in WordPress. I build custom business websites that are reliable, easy to work with, and tailored to the way your business actually operates.
          </p>

          {/* Secondary line */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "var(--color-muted)",
              marginBottom: "2.5rem",
              maxWidth: "52ch",
            }}
          >
            From custom WordPress builds to WooCommerce, maintenance, integrations, and custom functionality — websites that do more than just look good.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button href="/projects" size="lg">
              View projects
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Start a project
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, var(--color-background))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
