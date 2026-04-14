import Link from "next/link";
import type { Project } from "@/lib/types";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-background)",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      className="project-card"
    >
      {/* Image area */}
      <div
        style={{
          aspectRatio: featured ? "16/10" : "4/3",
          backgroundColor: "var(--color-surface)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.images.length > 0 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.images[0]}
            alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-border) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--color-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Project image
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: featured ? "1.5rem" : "1.25rem" }}>
        <div style={{ marginBottom: "0.625rem" }}>
          <Tag>{project.typeLabel}</Tag>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: featured ? "1.3125rem" : "1.125rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            margin: "0 0 0.375rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--color-ink-secondary)",
            margin: 0,
            lineHeight: 1.55,
            maxWidth: "none",
          }}
        >
          {project.summary}
        </p>
        <div
          style={{
            marginTop: "1rem",
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "var(--color-accent)",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
          }}
        >
          View project
          <span aria-hidden="true">→</span>
        </div>
      </div>

      <style>{`
        .project-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          border-color: var(--color-muted);
        }
      `}</style>
    </Link>
  );
}
