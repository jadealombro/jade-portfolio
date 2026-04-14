import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="section-padding" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container-site">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <SectionHeading
            label="Selected work"
            heading="Projects"
            subheading="A few examples of the kinds of websites and solutions I build for businesses that need something thoughtful, custom, and dependable."
          />
          <Link
            href="/projects"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-ink)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-ink)",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
              marginTop: "0.5rem",
            }}
          >
            See all projects →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
