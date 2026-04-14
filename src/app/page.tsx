import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import HowJadeWorks from "@/components/home/HowJadeWorks";
import Testimonials from "@/components/home/Testimonials";
import ProcessPreview from "@/components/home/ProcessPreview";
import QualityStandards from "@/components/home/QualityStandards";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Jade Alombro — WordPress Developer",
  description:
    "Custom WordPress websites, WooCommerce development, and ongoing site support for businesses that need more than a template.",
  openGraph: {
    title: "Jade Alombro — WordPress Developer",
    description:
      "Custom WordPress websites, WooCommerce development, and ongoing site support for businesses that need more than a template.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />
      <ServicesSnapshot />
      <HowJadeWorks />
      <Testimonials />
      <ProcessPreview />
      <QualityStandards />
      <FinalCTA />
    </>
  );
}
