import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Quantastrat Integrators",
  description: "Permanent hiring, contract staffing, RPO, executive search, payroll & compliance, IT, Non-IT and manufacturing recruitment."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="End-to-end staffing for every stage of growth."
        description="From a single specialist hire to embedded RPO programs and executive search — Quantastrat delivers across the full hiring lifecycle."
      />
      <ServicesContent />
    </>
  );
}
