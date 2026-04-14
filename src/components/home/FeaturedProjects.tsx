import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import MotionReveal, { StaggerReveal } from "@/components/ui/MotionReveal";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 10vw, 9rem)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        {/* Section label + link */}
        <MotionReveal>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "0.875rem",
                }}
              >
                Selected work
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                Projects
              </h2>
            </div>
            <Link
              href="/projects"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-ink)",
                textDecoration: "none",
                borderBottom: "1px solid currentColor",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
                alignSelf: "flex-end",
                marginBottom: "0.5rem",
                opacity: 0.6,
                transition: "opacity 0.2s ease",
              }}
            >
              See all →
            </Link>
          </div>
        </MotionReveal>

        <StaggerReveal
          stagger={0.12}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
