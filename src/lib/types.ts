export interface Project {
  slug: string;
  name: string;
  typeLabel: string;
  summary: string;
  featured: boolean;
  overview: string;
  client: string;
  scope: string[];
  highlights: string[];
  testimonial?: Testimonial;
  images: string[];
  liveUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceCard {
  title: string;
  slug: string;
  summary: string;
  icon: string;
}
