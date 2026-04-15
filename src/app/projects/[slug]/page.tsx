import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";
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
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <div style={{ marginBottom: "1.5rem" }}>
              <Link href="/projects" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", fontWeight: 500, letterSpacing: "0.02em" }}>
                ← All projects
              </Link>
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <Tag>{project.typeLabel}</Tag>
            </div>
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
              {project.name}
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", margin: 0 }}>
              {project.summary}
            </p>
          </MotionReveal>
        </div>
      </header>

      {/* Hero image */}
      {project.images.length > 0 ? (
        <MotionReveal>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/8",
              overflow: "hidden",
              borderBottom: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="100vw"
              priority
            />
          </div>
        </MotionReveal>
      ) : null}

      {/* Project overview */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "1fr" }} className="project-layout">
            <MotionReveal>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1rem" }}>
                Overview
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--color-ink-secondary)", marginBottom: "2rem" }}>
                {project.overview}
              </p>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.625rem" }}>
                Client
              </p>
              <p style={{ fontSize: "1rem", color: "var(--color-ink-secondary)", margin: 0 }}>{project.client}</p>

              {project.liveUrl && (
                <div style={{ marginTop: "2rem" }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--color-accent)",
                      paddingBottom: "2px",
                    }}
                  >
                    Visit live site →
                  </a>
                </div>
              )}
            </MotionReveal>

            <div>
              <MotionReveal delay={0.1}>
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
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container-site">
            <MotionReveal>
              <figure style={{ margin: 0, maxWidth: "640px" }}>
                <blockquote
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
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
            </MotionReveal>
          </div>
        </section>
      )}

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
                maxWidth: "20ch",
              }}
            >
              Have a similar project in mind?
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", marginBottom: "2.5rem" }}>
              Tell me what you&apos;re trying to build and I&apos;ll follow up with questions and next steps.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" size="lg">Start a project</Button>
              <Button href="/projects" variant="secondary" size="lg">More projects</Button>
            </div>
          </MotionReveal>
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
