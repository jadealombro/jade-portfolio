import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProjects, getAllProjects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Custom WordPress websites, WooCommerce stores, and development projects by Jade Alombro. Browse the portfolio.",
  path: "/projects",
});

export default function ProjectsPage() {
  const featured = getFeaturedProjects();
  const all = getAllProjects();
  const remaining = all.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: "120px", paddingBottom: "5rem", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <p style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.25rem" }}>
            Work
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1.25rem",
              maxWidth: "640px",
            }}
          >
            Projects
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "54ch", margin: 0 }}>
            Custom WordPress websites, WooCommerce solutions, and ongoing site support for businesses that need something thoughtful and dependable.
          </p>
        </div>
      </div>

      {/* Featured projects */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              marginBottom: "2rem",
            }}
          >
            Featured
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Remaining projects */}
      {remaining.length > 0 && (
        <section className="section-padding">
          <div className="container-site">
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                marginBottom: "2rem",
              }}
            >
              More work
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {remaining.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
