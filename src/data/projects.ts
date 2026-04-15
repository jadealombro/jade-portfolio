import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "lou-shapiro",
    name: "Lou Shapiro, Esq.",
    typeLabel: "Custom WordPress Website",
    summary:
      "A polished website for a high-profile criminal defense attorney in Los Angeles — built to convey authority and generate qualified inquiries.",
    featured: true,
    overview:
      "Louis J. Shapiro is a Certified Criminal Law Specialist and Super Lawyer based in Century City, LA. His practice covers everything from DUI and drug offenses to white-collar crime and federal cases. The site needed to match his reputation — credible, sophisticated, and immediately trustworthy to prospective clients facing serious legal situations.",
    client: "Louis J. Shapiro, Esq.",
    scope: [
      "Custom WordPress theme development",
      "Practice area page structure and content hierarchy",
      "Attorney profile and credentials presentation",
      "Media and press appearances section",
      "Contact and consultation inquiry forms",
      "Mobile-responsive layout",
      "SEO optimization for Los Angeles criminal defense keywords",
    ],
    highlights: [
      "Dark navy and gold design reinforces the authority and seriousness the practice demands",
      "Practice area pages clearly separate core specialties from secondary services",
      "Media credentials (Today Show, NBC, ET) integrated to build trust early",
      "Optimized for local search in the Century City / Los Angeles area",
    ],
    images: ["/images/projects/lou-shapiro.jpg"],
    liveUrl: "https://loushapiro.com/",
  },
  {
    slug: "allied-law",
    name: "Allied Law",
    typeLabel: "Custom WordPress Website",
    summary:
      "A professional website for a Surrey and Vancouver criminal defense and immigration law firm — clear, trustworthy, and built to convert first-contact visitors.",
    featured: true,
    overview:
      "Allied Law is a dual-practice firm serving clients across the Lower Mainland in British Columbia. They handle everything from impaired driving and drug charges to refugee claims and federal immigration appeals. Their site needed to speak to people in stressful situations — clearly, quickly, and without legal jargon getting in the way.",
    client: "Allied Law",
    scope: [
      "Custom WordPress website design and development",
      "Multi-practice-area structure (criminal law, immigration, public interest)",
      "Free consultation booking flow",
      "Service area targeting for Metro Vancouver",
      "Mobile-first responsive layout",
      "Performance and SEO optimization",
    ],
    highlights: [
      "Clean, modern design that builds trust without feeling cold or corporate",
      "Clear service breakdowns for criminal law and immigration under one unified site",
      "Prominent consultation CTA reduced friction for first-time visitors reaching out",
      "Optimized for searches across Vancouver, Surrey, Burnaby, and surrounding areas",
    ],
    images: ["/images/projects/allied-law.jpg"],
    liveUrl: "https://alliedlaw.ca/",
  },
  {
    slug: "elexia-naturals",
    name: "Elexia Naturals",
    typeLabel: "WooCommerce Development",
    summary:
      "A WooCommerce store for a Malaysian natural skincare brand — clean, product-forward, and built for an international customer base.",
    featured: true,
    overview:
      "Elexia Naturals is a homegrown Malaysian skincare and wellness brand built around premium, chemical-free formulations. Starting from a goat farm outside Kuala Lumpur, the brand grew into a multi-category product line that needed a storefront matching its premium positioning — something that felt luxurious without being overcomplicated to manage.",
    client: "Elexia Naturals",
    scope: [
      "WooCommerce setup and configuration",
      "Multi-category product structure (essentials, baby, blends, gift sets, bundles)",
      "Custom product pages and variation display",
      "Hero slider and brand-forward homepage layout",
      "Shipping, currency, and checkout configuration",
      "Blog and content section integration",
      "Mobile-responsive storefront",
    ],
    highlights: [
      "Product catalogue organized clearly across seven categories including baby and travel lines",
      "Brand aesthetic — turquoise accents, clean typography — consistently carried across all pages",
      "Gift set and bundle pages structured to increase average order value",
      "Customer-facing FAQ and ingredient transparency content built into the product flow",
    ],
    images: ["/images/projects/elexia-naturals.jpg"],
    liveUrl: "https://elexianaturals.com/",
  },
  {
    slug: "ann-nastasia-nepssy",
    name: "Ann Nastasia Nepssy",
    typeLabel: "Custom WordPress Website",
    summary:
      "A warm, credentialed website for a registered psychotherapist in Ontario — designed to feel safe and approachable from the very first visit.",
    featured: false,
    overview:
      "Ann Nastasia Nepssy is a registered psychotherapist and addictions counsellor in Ontario, specializing in anxiety, trauma, and addiction. Her clients often arrive at the site in vulnerable moments — the site needed to feel genuinely welcoming while clearly communicating her qualifications and making it easy to take the next step toward booking.",
    client: "Ann Nastasia Nepssy, RP",
    scope: [
      "Custom WordPress website design and development",
      "Service and therapeutic modality pages",
      "Therapist credentials and registration display (OAMHP, CRPO)",
      "Session booking and contact flow",
      "Client testimonials integration",
      "FAQ section covering therapy, fees, and scheduling",
      "Mobile-responsive, accessibility-conscious layout",
    ],
    highlights: [
      "Warm earth tones and botanical imagery create a calming first impression",
      "Credentials and professional registrations displayed clearly to build confidence",
      "Flexible scheduling and student discount details prominently surfaced",
      "FAQ section addresses common hesitations about starting therapy",
    ],
    images: ["/images/projects/ann-nastasia-nepssy.jpg"],
    liveUrl: "https://annnastasianepssy.com/",
  },
  {
    slug: "siam-tenga",
    name: "Siam Tenga",
    typeLabel: "WooCommerce Development",
    summary:
      "A bilingual WooCommerce store for the official Tenga and Iroha distributor in Thailand — clean, product-forward, and built around trust and authenticity.",
    featured: false,
    overview:
      "Siam Tenga is the official authorized distributor of Tenga and Iroha products in Thailand. With a wide range of SKUs across multiple product lines and a bilingual Thai/English customer base, they needed a professional storefront that communicated authenticity and made browsing and buying straightforward.",
    client: "Siam Tenga",
    scope: [
      "WooCommerce setup and product catalogue configuration",
      "Multi-line product structure (Cup, Egg, Geo, Spinner, Flip, Iroha, accessories)",
      "Bilingual storefront (Thai and English) with language toggle",
      "Trust and authenticity badge integration",
      "Promotional pricing and sale display",
      "Free shipping threshold and cart logic",
      "Mobile-responsive layout",
    ],
    highlights: [
      "Product catalogue spans 8+ distinct product lines with clear categorization",
      "Bilingual navigation and product descriptions serve both Thai and English-speaking customers",
      "Authenticity and origin messaging ('100% Authentic — Made in Japan') built into the storefront design",
      "Promotional pricing and clearance sections integrated without cluttering the main catalogue",
    ],
    images: ["/images/projects/siam-tenga.jpg"],
    liveUrl: "https://siamtenga.com/",
  },
  {
    slug: "preptrackr",
    name: "PrEP Trackr",
    typeLabel: "Web App / PWA",
    summary:
      "A privacy-first health tracking PWA for people on PrEP — logs doses, monitors protection status, and manages testing schedules from any phone browser.",
    featured: false,
    overview:
      "PrEP Trackr is a free, private web application built for people taking PrEP (Pre-Exposure Prophylaxis) — a daily medication that significantly reduces HIV transmission risk. The app needed to handle sensitive health data with care, work seamlessly on mobile without requiring an app store download, and present complex medication adherence information in a way that felt clear and calm.",
    client: "Personal Project",
    scope: [
      "Progressive Web App (PWA) design and development",
      "Daily dose logging with calendar interface",
      "Real-time protection status calculation based on adherence history",
      "Testing schedule management with 90-day reminders",
      "Lab results documentation with PDF attachment support",
      "Push notification system for pill supply and refill alerts",
      "Privacy-first architecture — no data selling, account-based storage",
    ],
    highlights: [
      "Works on iPhone and Android from the browser — no App Store download required",
      "Color-coded calendar makes adherence history immediately readable at a glance",
      "Real-time protection status gives users meaningful feedback based on actual dosing patterns",
      "Push notifications for 14, 7, and 3-pill refill thresholds reduce the risk of running out",
    ],
    images: ["/images/projects/preptrackr.jpg"],
    liveUrl: "https://preptrackr.app/",
  },
  {
    slug: "tenga-thailand",
    name: "Tenga Thailand",
    typeLabel: "WooCommerce Development",
    summary:
      "A bilingual WooCommerce store for the official Thai distributor of a Japanese wellness brand — clean, discreet, and optimized for same-day order fulfillment.",
    featured: false,
    overview:
      "Tenga Thailand is the official Thai distributor for Tenga, a premium Japanese wellness brand. The business needed an e-commerce store that felt modern and trustworthy, supported Thai and English audiences, and could handle fast order fulfillment — with same-day shipping as a key selling point.",
    client: "Tenga Thailand",
    scope: [
      "WooCommerce setup and product catalogue configuration",
      "Bilingual site structure (Thai and English)",
      "Product category pages with hover interactions",
      "Shipping rules and same-day fulfillment logic",
      "Secure payment gateway integration",
      "Trust signal and brand authenticity messaging",
      "FAQ and shipping information pages",
    ],
    highlights: [
      "Clean, modern design reduces stigma and positions products as legitimate wellness items",
      "Same-day shipping eligibility clearly surfaced at checkout to reduce cart abandonment",
      "Secure payment and Japanese brand authenticity messaging built into the purchase flow",
      "Streamlined navigation works across Thai and English-speaking customers",
    ],
    images: ["/images/projects/tenga-thailand.jpg"],
    liveUrl: "https://thaitenga.com/",
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
