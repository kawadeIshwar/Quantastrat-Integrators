import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Overview />
      <Services />
      <Industries />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
