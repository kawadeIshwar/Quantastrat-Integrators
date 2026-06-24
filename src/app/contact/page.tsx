import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Quantastrat Integrators",
  description: "Talk to our recruitment specialists. We respond within one business day."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build your next team."
        description="Whether you're hiring one specialist or scaling a 100-person program — our team responds within one business day."
      />
      <ContactSection />
    </>
  );
}
