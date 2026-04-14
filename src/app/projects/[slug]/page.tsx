import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: "120px", paddingBottom: "4rem", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ marginBottom: "1.25rem" }}>
            <Link href="/projects" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", fontWeight: 500 }}>
              ← All projects
            </Link>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Tag>{project.typeLabel}</Tag>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1.25rem",
              maxWidth: "700px",
            }}
          >
            {project.name}
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "54ch", margin: 0 }}>
            {project.summary}
          </p>
        </div>
      </div>

      {/* Main image placeholder */}
      {project.images.length === 0 && (
        <div
          style={{
            height: "400px",
            background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-border) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <span style={{ fontSize: "0.8125rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>
            Project images coming soon
          </span>
        </div>
      )}

      {/* Project overview */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr" }} className="project-layout">
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1rem" }}>
                Project overview
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "1.5rem" }}>
                {project.overview}
              </p>

              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1rem" }}>
                Client
              </p>
              <p style={{ fontSize: "1rem", color: "var(--color-ink-secondary)", marginBottom: "2rem" }}>{project.client}</p>
            </div>

            <div>
              {/* Scope */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1rem" }}>
                  Scope of work
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {project.scope.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                      <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-secondary)", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1rem" }}>
                  Highlights
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: "0.875rem 1.125rem",
                        backgroundColor: "var(--color-accent-light)",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "0.9375rem",
                        color: "var(--color-ink-secondary)",
                        lineHeight: 1.5,
                        borderLeft: "2px solid var(--color-accent)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional images */}
      {project.images.length > 1 && (
        <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="container-site">
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "2rem" }}>
              Screenshots
            </p>
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))" }}>
              {project.images.slice(1).map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`${project.name} screenshot ${i + 2}`}
                  style={{ width: "100%", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}
        >
          <div className="container-site">
            <figure style={{ margin: 0, maxWidth: "640px" }}>
              <blockquote
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.3125rem)",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--color-ink)",
                  margin: "0 0 1.5rem",
                  padding: 0,
                }}
              >
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-ink)", margin: "0 0 0.125rem", maxWidth: "none" }}>
                  {project.testimonial.author}
                </p>
                {(project.testimonial.role || project.testimonial.company) && (
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", margin: 0, maxWidth: "none" }}>
                    {[project.testimonial.role, project.testimonial.company].filter(Boolean).join(", ")}
                  </p>
                )}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-site">
          <div style={{ maxWidth: "540px" }}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                margin: "0 0 1.25rem",
              }}
            >
              Have a similar project in mind?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2rem" }}>
              Tell me what you&apos;re trying to build and I&apos;ll follow up with questions and next steps.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Start a project</Button>
              <Button href="/projects" variant="secondary" size="lg">More projects</Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .project-layout { grid-template-columns: 1fr 1fr !important; align-items: start; }
        }
      `}</style>
    </>
  );
}
