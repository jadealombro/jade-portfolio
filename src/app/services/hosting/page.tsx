import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "WordPress Hosting",
  description:
    "Managed WordPress hosting for clients who want their site looked after — yearly packages that include plugin updates, backups, and minor site upkeep.",
  path: "/services/hosting",
});

const included = [
  "Managed WordPress hosting on reliable, fast infrastructure",
  "Plugin, theme, and core updates kept current",
  "Regular site backups — so nothing is ever truly lost",
  "Minor site updates on your behalf — adding new pages, updating content, publishing posts you send over",
  "Basic uptime monitoring so issues get caught early",
  "A single point of contact who already knows your site",
];

const notIncluded = [
  "Writing or creating post content — you provide it, I publish it",
  "Large feature builds or redesigns (those are scoped separately)",
  "Development work beyond routine maintenance and minor updates",
];

const goodFitFor = [
  "Clients who want their site fully managed after launch",
  "Businesses that don't have time to keep WordPress updated and backed up",
  "Teams that occasionally need small updates made without spinning up a full project",
  "Anyone who wants one person responsible for keeping the site running well",
];

export default function HostingPage() {
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
              Hosting
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
              Managed hosting with site care included
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", marginBottom: "2.5rem" }}>
              A yearly hosting package that keeps your WordPress site running, updated, and backed up — with minor upkeep handled so you don&apos;t have to think about it.
            </p>
            <Button href="/contact" size="lg">Ask about hosting</Button>
          </MotionReveal>
        </div>
      </header>

      {/* What it is */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ maxWidth: "700px" }}>
              <SectionHeading label="The service" heading="More than just hosting" />
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                Most hosting plans give you server space and leave the rest to you. This is different. When you host with me, your site is actively looked after — WordPress stays updated, backups run regularly, and small updates get handled without you needing to open a ticket or spin up a new project.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.25rem" }}>
                If you have a new blog post to publish, a team member to add, or a page that needs updating — send it over and I&apos;ll take care of it. I don&apos;t write the content, but I handle everything else.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", margin: 0 }}>
                Hosting packages are billed yearly and work best for sites I&apos;ve built — though I can evaluate other setups on a case-by-case basis.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* What's included / not included */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "1fr" }} className="two-col">
            <MotionReveal>
              <SectionHeading label="What's included" heading="Everything in the yearly package" />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {included.map((item) => (
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

                <SectionHeading label="Best fit for" heading="Who this works well for" />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {goodFitFor.map((item) => (
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

      {/* How it works callout */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1px",
                backgroundColor: "var(--color-border)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
              }}
              className="hosting-steps"
            >
              {[
                { step: "01", title: "You provide content", body: "Write a post, take a photo, update your team list — send it over however works for you." },
                { step: "02", title: "I handle the publishing", body: "I log into your site, make the update, and confirm when it's done. No instructions needed beyond what you send." },
                { step: "03", title: "Site stays in good shape", body: "Meanwhile, updates run, backups happen, and your site stays secure and fast without you having to think about it." },
              ].map(({ step, title, body }) => (
                <div key={step} style={{ backgroundColor: "var(--color-background)", padding: "2rem 2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-muted)", letterSpacing: "0.06em", flexShrink: 0, paddingTop: "0.25rem" }}>{step}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "1.125rem", fontWeight: 500, color: "var(--color-ink)", margin: "0 0 0.5rem", letterSpacing: "-0.01em" }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--color-ink-secondary)", margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
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
              Want your site fully looked after?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Get in touch and tell me about your site. I&apos;ll let you know if hosting is a good fit and what the package would look like.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Ask about hosting</Button>
              <Button href="/services/maintenance-support" variant="secondary" size="lg">View maintenance &amp; support</Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .two-col { grid-template-columns: 1fr 1fr !important; }
          .hosting-steps { grid-template-columns: 1fr 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
