import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ProjectsContent from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects — Quantastrat Integrators",
  description:
    "Digital transformation, CAD, smart engineering, software capability, and sector solutions — Quantastrat Integrators project and engineering services.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our projects"
        title="Engineering & Digital Project Capabilities."
        description="From intelligent 3D modelling and digital transformation to multi-discipline engineering support — built for complex, large-scale project environments."
      />
      <ProjectsContent />
    </>
  );
}
