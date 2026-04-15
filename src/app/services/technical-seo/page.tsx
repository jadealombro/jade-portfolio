import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Technical SEO",
  description:
    "Technical SEO for WordPress sites — proper structure, performance, metadata, and crawlability built in from the start or audited and fixed after the fact.",
  path: "/services/technical-seo",
});

const whatItCovers = [
  "Semantic HTML structure with correct heading hierarchy (H1–H6)",
  "Meta titles and descriptions optimized for every page",
  "Open Graph and social sharing metadata",
  "XML sitemap generation and robots.txt configuration",
  "Canonical tags to prevent duplicate content issues",
  "Schema markup for business, services, and reviews",
  "Image alt text and file naming",
  "Page speed and Core Web Vitals improvements",
  "Internal linking structure review",
  "Redirect setup and broken link resolution",
];

const notIncluded = [
  "Content writing or keyword strategy — that's a separate discipline",
  "Link building or off-page SEO",
  "Ongoing monthly SEO management (I can refer you to a specialist for that)",
];

const whenItHelps = [
  "You have a new site and want it indexed and crawlable from day one",
  "Your existing site isn't showing up in search the way it should",
  "You've been told you have technical SEO issues but don't know what they are",
  "You want a one-time audit with clear, actionable fixes",
  "You're rebuilding or redesigning and want SEO handled properly during the build",
];

export default function TechnicalSeoPage() {
  return (
    <>
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ marginBottom: "1.5rem" }}>
              <Link href="/services" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", fontWeight: 500 }}>
                ← Services
              </Link>
            </div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              Technical SEO
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
              A site Google can actually read and rank
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", marginBottom: "2.5rem" }}>
              Technical SEO is the foundation that makes everything else work. I make sure your WordPress site is structured, tagged, and configured the way search engines expect.
            </p>
            <Button href="/contact" size="lg">Ask about SEO</Button>
          </MotionReveal>
        </div>
      </header>

      {/* What it is */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ maxWidth: "700px" }}>
              <SectionHeading label="The service" heading="What technical SEO actually means" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                Good SEO starts before anyone writes a word of content. It starts with how the site is built — the structure of the HTML, the way pages are linked together, how fast things load, and whether search engines can crawl and understand what they find.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                Technical SEO is not about keyword stuffing or chasing algorithm tricks. It&apos;s about making sure the foundations are correct — semantic markup, clean metadata, proper canonical tags, a working sitemap, fast load times, and a site structure that makes sense to both users and crawlers.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                Every WordPress site I build includes solid technical SEO from the start. I also offer standalone audits and fixes for existing sites that have gaps.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* What it covers */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "1fr" }} className="two-col">
            <MotionReveal>
              <SectionHeading label="What's covered" heading="Areas I work on" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {whatItCovers.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>

            <div>
              <MotionReveal delay={0.1}>
                <SectionHeading label="Good to know" heading="What's not included" />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
                  {notIncluded.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-muted)", flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                      <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <SectionHeading label="When to use this" heading="When technical SEO helps most" />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {whenItHelps.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                      <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in vs audit */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <SectionHeading label="Two ways to work together" heading="Built-in or bolted on" />
          </MotionReveal>
          <StaggerReveal
            stagger={0.1}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
              gap: "1px",
              backgroundColor: "var(--color-border)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            {[
              {
                label: "New build",
                title: "Built in from the start",
                body: "When I build your WordPress site, technical SEO is part of the default scope — not an afterthought. Every page gets proper metadata, the structure is semantic, Core Web Vitals are considered from the first line of code, and the sitemap is configured before launch.",
              },
              {
                label: "Existing site",
                title: "Audit and fix",
                body: "If your site is already live and you're not sure what's wrong, I can run a technical audit — review the current state, identify specific issues, and either document them for your team or fix them directly. You get a clear picture of what's holding the site back and what to do about it.",
              },
            ].map(({ label, title, body }) => (
              <div key={label} style={{ backgroundColor: "var(--color-background)", padding: "2.5rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.75rem" }}>
                  {label}
                </p>
                <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 500, color: "var(--color-ink)", margin: "0 0 0.875rem", letterSpacing: "-0.01em" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)" }}>
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
                maxWidth: "22ch",
              }}
            >
              Want your site found the right way?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Tell me about your site and what you&apos;re trying to improve. I&apos;ll let you know what I can do and how I&apos;d approach it.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Ask about SEO</Button>
              <Button href="/services/wordpress-website-development" variant="secondary" size="lg">View WordPress development</Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .two-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
