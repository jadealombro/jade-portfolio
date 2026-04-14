import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "example-business-website",
    name: "Example Business Website",
    typeLabel: "Custom WordPress Website",
    summary: "A tailored business website designed to present services clearly and support a stronger online presence.",
    featured: true,
    overview:
      "A local professional services company needed a website that reflected the quality of their work — something polished, easy to navigate, and manageable without ongoing developer support.",
    client: "Professional Services Business",
    scope: [
      "Custom WordPress theme development",
      "Page structure and content hierarchy planning",
      "Contact and inquiry form setup",
      "Performance and SEO optimization",
      "CMS training and handoff",
    ],
    highlights: [
      "Built around the client's content and brand, not adapted from a generic template",
      "Clean and fast — no bloated page builder code",
      "Client can manage all content independently after launch",
      "Clear service presentation that improved conversion on initial inquiries",
    ],
    testimonial: {
      quote:
        "Jade took the time to really understand what our business needed before building anything. The result was a site that feels like us and works exactly the way we needed it to.",
      author: "Client Name",
      role: "Owner",
      company: "Business Name",
    },
    images: [],
    liveUrl: undefined,
  },
  {
    slug: "example-woocommerce-store",
    name: "Example WooCommerce Store",
    typeLabel: "WooCommerce Development",
    summary: "A custom ecommerce build focused on a smoother customer experience and a more manageable backend.",
    featured: true,
    overview:
      "An established product-based business needed to move their online store to WooCommerce. The existing setup was difficult to manage and wasn't converting well. The goal was a cleaner storefront with a better checkout experience and a backend the team could actually use.",
    client: "Product Business",
    scope: [
      "WooCommerce setup and configuration",
      "Custom product and category structure",
      "Checkout flow improvements",
      "Payment gateway and shipping integration",
      "Order management and fulfillment setup",
    ],
    highlights: [
      "Simplified product management made it easier for the team to update inventory",
      "Cleaner checkout reduced drop-off",
      "Fully mobile-responsive product pages and cart",
      "Integrated with existing shipping and payment providers",
    ],
    testimonial: {
      quote:
        "The new store is so much easier to manage. The checkout is cleaner and our customers have commented that it's simpler to use. Worth every bit of the investment.",
      author: "Client Name",
      role: "Founder",
      company: "Business Name",
    },
    images: [],
    liveUrl: undefined,
  },
  {
    slug: "example-wordpress-redesign",
    name: "Example WordPress Redesign",
    typeLabel: "WordPress Redesign",
    summary: "A rebuild that improved structure, presentation, and long-term maintainability.",
    featured: true,
    overview:
      "A growing business had outgrown their original website. The existing site was slow, hard to update, and no longer reflected the quality of the business. A full redesign and rebuild was the right solution.",
    client: "Growing Business",
    scope: [
      "Full site audit and planning",
      "New page structure and navigation design",
      "Custom WordPress theme rebuild",
      "Content migration and cleanup",
      "Performance optimization",
    ],
    highlights: [
      "Significant performance improvement — faster page loads across all devices",
      "New structure made the site easier to navigate for visitors",
      "Client team could manage content without assistance after training",
      "Better SEO baseline out of the gate",
    ],
    testimonial: {
      quote:
        "Our old site was embarrassing — we'd been putting off the rebuild for too long. Jade made the process organized and manageable, and the result was exactly what we needed.",
      author: "Client Name",
      role: "Director",
      company: "Business Name",
    },
    images: [],
    liveUrl: undefined,
  },
  {
    slug: "example-maintenance-support",
    name: "Example Maintenance & Support",
    typeLabel: "Website Support & Maintenance",
    summary: "Ongoing support focused on reliability, updates, and thoughtful improvements over time.",
    featured: false,
    overview:
      "A client with an established WordPress site needed a reliable developer for ongoing support — someone who knew the codebase, understood the business, and could handle updates and improvements without creating new problems.",
    client: "Established Business",
    scope: [
      "Core, theme, and plugin updates",
      "Regular performance and security checks",
      "Bug fixes and troubleshooting",
      "Incremental feature additions",
      "Content and configuration updates",
    ],
    highlights: [
      "No more scrambling when something breaks",
      "Site stayed up to date, secure, and performing well",
      "Small improvements added over time without needing a full project",
      "Reliable point of contact who already understood the setup",
    ],
    images: [],
    liveUrl: undefined,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
