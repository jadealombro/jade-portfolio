import SectionHeading from "@/components/ui/SectionHeading";

const standards = [
  {
    title: "Clean, maintainable builds",
    description: "Code that's organized, readable, and built to last — not patched together or dependent on bloated dependencies.",
  },
  {
    title: "Performance-conscious development",
    description: "Fast-loading pages built with performance in mind from the start, not optimized as an afterthought.",
  },
  {
    title: "SEO-friendly structure",
    description: "Semantic markup, proper heading hierarchy, clean URLs, and metadata that gives the site a strong foundation for search.",
  },
  {
    title: "Thoughtful UX details",
    description: "Attention to how visitors move through the site — navigation, calls to action, mobile experience, and accessibility.",
  },
  {
    title: "Scalable solutions",
    description: "Builds that make it easy to grow — adding pages, products, or functionality without needing to start over.",
  },
];

export default function QualityStandards() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container-site">
        <SectionHeading
          label="Standards"
          heading="Built with quality in mind"
          subheading="Every project is approached with attention to clean implementation, maintainable structure, performance, and usability. I aim to create websites that not only look professional but also work well over time."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {standards.map((s) => (
            <div
              key={s.title}
              style={{
                padding: "1.5rem",
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  margin: "0 0 0.5rem",
                  lineHeight: 1.35,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--color-ink-secondary)",
                  margin: 0,
                  maxWidth: "none",
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
