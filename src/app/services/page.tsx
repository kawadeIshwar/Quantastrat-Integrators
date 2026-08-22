import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ServicesContent from "@/components/services/ServicesContent";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services — Quantastrat Integrators",
  description: "Manufacturing recruitment, permanent hiring, contract staffing, payroll & compliance, non-IT recruitment, executive search, and RPO — workforce solutions built around your business."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Workforce Solutions Built Around Your Business."
        description="With a strong focus on manufacturing and engineering talent, we provide flexible workforce solutions aligned with your business requirements."
      />
      <ServicesContent />
      <FinalCTA />
    </>
  );
}
