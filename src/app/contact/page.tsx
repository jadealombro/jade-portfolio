import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a WordPress project with Jade Alombro. Share your project details and I'll follow up with questions and next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: "120px", paddingBottom: "5rem", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <p style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
            Contact
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1.5rem",
              maxWidth: "640px",
            }}
          >
            Tell me about your project
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "52ch", margin: 0 }}>
            Use the form below to share what you&apos;re working on. You don&apos;t need to have everything figured out — a general sense of what you need is a great starting point.
          </p>
        </div>
      </div>

      {/* Form section */}
      <section style={{ paddingBlock: "5rem" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "1fr", alignItems: "start" }} className="contact-grid">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <div style={{ position: "sticky", top: "100px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                      marginBottom: "0.875rem",
                    }}
                  >
                    What happens next
                  </p>
                  <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {[
                      "I personally review every inquiry — usually within 1–2 business days.",
                      "I&apos;ll follow up with any clarifying questions before scheduling a call.",
                      "We&apos;ll have a short conversation to make sure the project is a good fit.",
                      "If everything lines up, we&apos;ll move into discovery and planning.",
                    ].map((step, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            backgroundColor: "var(--color-accent-light)",
                            color: "var(--color-accent)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "0.1rem",
                          }}
                        >
                          {i + 1}
                        </span>
                        <span
                          style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--color-ink-secondary)" }}
                          dangerouslySetInnerHTML={{ __html: step }}
                        />
                      </li>
                    ))}
                  </ol>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Good to know
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {[
                      "Early-stage inquiries are welcome — you don't need a final brief.",
                      "Project details are helpful but don't need to be perfect.",
                      "I'll ask questions to fill in the gaps before we get started.",
                    ].map((note) => (
                      <li key={note} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.15rem", fontSize: "0.8rem" }}>✓</span>
                        <span style={{ fontSize: "0.875rem", lineHeight: 1.55, color: "var(--color-ink-secondary)" }}>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 3fr 2fr !important; }
        }
      `}</style>
    </>
  );
}
