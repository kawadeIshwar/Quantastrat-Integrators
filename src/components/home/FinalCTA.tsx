import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-4xl bg-cta-gradient p-12 md:p-20">
          {/* Decorative circles */}
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full border border-white/10" />
          <div aria-hidden className="pointer-events-none absolute right-20 bottom-10 h-32 w-32 rounded-full bg-white/5" />

          <h2 className="heading-xl relative max-w-4xl font-bold text-white">
            Looking for the Right Talent or the Right Opportunity?
          </h2>
          <p className="relative mt-6 max-w-2xl text-white/80 md:text-lg">
            Whether you&apos;re scaling teams or scaling careers — we&apos;ll connect you to the right people, faster.
          </p>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-orange shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
              Hire Talent <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/careers" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10">
              <Briefcase className="h-4 w-4" /> Explore Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
