import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import About from "@/components/about/About";

export const metadata: Metadata = {
  title: "About — Quantastrat Integrators",
  description: "Mission, vision and values behind Quantastrat Integrators — a trusted recruitment and staffing partner with PAN India coverage."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Quantastrat"
        title="A people business, engineered like a tech company."
        description="We blend rigorous process, deep market intelligence and human-first consulting to build teams that compound value for India's most ambitious companies."
      />
      <About />
    </>
  );
}
