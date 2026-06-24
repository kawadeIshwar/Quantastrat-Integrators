import type { Metadata } from "next";
import { Sparkles, Users, MapPin, TrendingUp } from "lucide-react";
import GradientOrbs from "@/components/ui/GradientOrbs";
import JobsBoard from "@/components/careers/JobsBoard";

export const metadata: Metadata = {
  title: "Current Openings — Quantastrat Integrators",
  description: "Explore open roles across IT, Non-IT, Manufacturing and Leadership with leading enterprises across India."
};

const STATS = [
  { Icon: Sparkles, value: "50+", label: "Active Roles" },
  { Icon: Users, value: "500+", label: "Clients Hiring" },
  { Icon: MapPin, value: "30+", label: "Cities" },
  { Icon: TrendingUp, value: "98%", label: "Offer Rate" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero-gradient pt-36 pb-20">
        <GradientOrbs />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] dot-pattern opacity-30" />
        {/* Decorative rings */}
        <div aria-hidden className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-brand-orange/10" />
        <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full border border-brand-orange/5" />

        <div className="container-x relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-fit eyebrow mb-6">Careers at Quantastrat</div>
            <h1 className="heading-xl font-bold text-brand-ink">
              Find Your Next{" "}
              <span className="text-gradient-orange">Career Move.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
              Join India&apos;s fastest-growing recruitment network. We connect exceptional professionals 
              with leading enterprises across IT, Non-IT, Manufacturing and Leadership roles.
            </p>
          </div>

          {/* Stats row */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="group rounded-2xl border border-orange-100/60 bg-white/80 backdrop-blur-sm p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-deep">
                  <s.Icon className="h-4.5 w-4.5 text-white" />
                </div>
                <div className="font-display text-2xl font-bold text-brand-ink">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Board */}
      <JobsBoard />
    </>
  );
}
