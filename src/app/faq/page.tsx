import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
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
      <div style={{ paddingTop: "120px", paddingBottom: "5rem", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <p style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
            FAQ
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1.5rem",
              maxWidth: "640px",
            }}
          >
            Frequently asked questions
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "52ch", margin: 0 }}>
            Common questions about the work, the process, and what it&apos;s like to work together.
          </p>
        </div>
      </div>

      {/* FAQ accordion */}
      <section style={{ paddingBlock: "4rem 5rem" }}>
        <div className="container-site" style={{ maxWidth: "800px" }}>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Still have questions */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-surface)" }}
      >
        <div className="container-site">
          <div style={{ maxWidth: "480px" }}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                margin: "0 0 1rem",
              }}
            >
              Still have questions?
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "1.75rem" }}>
              Reach out and ask directly. I&apos;m happy to answer anything not covered here.
            </p>
            <Link
              href="/contact"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-background)",
                backgroundColor: "var(--color-ink)",
                textDecoration: "none",
                padding: "0.625rem 1.375rem",
                borderRadius: "var(--radius-sm)",
                display: "inline-block",
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
