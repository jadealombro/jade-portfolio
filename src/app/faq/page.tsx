import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import MotionReveal from "@/components/ui/MotionReveal";
import { faqItems } from "@/data/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Common questions about WordPress development, WooCommerce, maintenance, process, and what it's like to work with Jade Alombro.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              FAQ
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
              Frequently asked questions
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", margin: 0 }}>
              Common questions about the work, the process, and what it&apos;s like to work together.
            </p>
          </MotionReveal>
        </div>
      </header>

      {/* FAQ accordion */}
      <section style={{ paddingBlock: "clamp(4rem, 8vw, 6rem)" }}>
        <div className="container-site" style={{ maxWidth: "860px" }}>
          <MotionReveal>
            <FaqAccordion items={faqItems} />
          </MotionReveal>
        </div>
      </section>

      {/* Still have questions */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderTop: "1px solid var(--color-border)" }}>
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
                maxWidth: "18ch",
              }}
            >
              Still have questions?
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Reach out and ask directly. I&apos;m happy to answer anything not covered here.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--color-background)",
                backgroundColor: "var(--color-ink)",
                textDecoration: "none",
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
                letterSpacing: "-0.01em",
              }}
            >
              Get in touch
            </Link>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
