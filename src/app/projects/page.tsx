import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
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
      <header style={{ paddingTop: "130px", paddingBottom: "clamp(4rem, 8vw, 6rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              Work
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
              Projects
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.65, color: "var(--color-ink-secondary)", maxWidth: "44ch", margin: 0 }}>
              Custom WordPress websites, WooCommerce solutions, and ongoing site support for businesses that need something thoughtful and dependable.
            </p>
          </MotionReveal>
        </div>
      </header>

      {/* Featured projects */}
      <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <MotionReveal>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "2.5rem" }}>
              Featured
            </p>
          </MotionReveal>
          <StaggerReveal
            stagger={0.12}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Remaining projects */}
      {remaining.length > 0 && (
        <section style={{ paddingBlock: "clamp(5rem, 10vw, 9rem)" }}>
          <div className="container-site">
            <MotionReveal>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "2.5rem" }}>
                More work
              </p>
            </MotionReveal>
            <StaggerReveal
              stagger={0.1}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {remaining.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </StaggerReveal>
          </div>
        </section>
      )}
    </>
  );
}
