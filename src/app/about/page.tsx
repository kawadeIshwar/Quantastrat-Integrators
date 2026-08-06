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
        title={<>Built on Experience. Driven by <span className="text-gradient-orange">Partnership.</span></>}
        description="Quantastrat Integrators Pvt. Ltd. was established with a vision to redefine workforce solutions by combining deep recruitment expertise with operational excellence. Today, we partner with businesses across India to deliver recruitment, staffing, payroll, compliance, and HR solutions that help organizations grow with confidence."
      />
      <About />
    </>
  );
}
