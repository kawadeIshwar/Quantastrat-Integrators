import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Users, Building2, TrendingUp, MapPin } from "lucide-react";
import GradientOrbs from "@/components/ui/GradientOrbs";
import JobsBoard from "@/components/careers/JobsBoard";

export const metadata: Metadata = {
  title: "Current Openings — Quantastrat Integrators",
  description: "Explore open roles across IT, Non-IT, Manufacturing and Leadership with leading enterprises across India."
};

const STATS = [
  { Icon: Briefcase,  value: "50+",       label: "Open Opportunities", sub: "Active Roles" },
  { Icon: Users,      value: "500+",      label: "Hiring Partners",    sub: "Across Industries" },
  { Icon: Building2,  value: "PAN India", label: "Recruitment Coverage", sub: "Across Key Cities" },
  { Icon: TrendingUp, value: "98%",       label: "Offer Acceptance",   sub: "Rate" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero-gradient pt-40 pb-0 md:pt-48">
        <GradientOrbs />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] dot-pattern opacity-30" />
        {/* Decorative rings */}
        <div aria-hidden className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-brand-orange/10" />
        <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full border border-brand-orange/5" />

        <div className="container-x relative z-10">
          {/* Split hero: text left, image right */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-6">
            {/* Left – Text content */}
            <div className="flex-1 max-w-xl lg:max-w-[540px] text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight font-bold text-brand-ink">
                Find Your Next{" "}
                <span className="text-gradient-orange">Career Move.</span>
              </h1>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Explore career opportunities across manufacturing, engineering,
                industrial and business functions.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span className="font-medium">Pune-focused hiring</span>
                <span className="text-gray-300">•</span>
                <span>PAN India opportunities</span>
              </div>
            </div>

            {/* Right – Hero image */}
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden rounded-3xl lg:rounded-none lg:rounded-tl-[3rem]">
                <Image
                  src="/careers-hero-collage.jpg"
                  alt="Professionals across manufacturing, engineering and business roles"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Soft fade on the left edge so it blends into the background */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-[#FFF3E8]/80 via-transparent to-transparent lg:block hidden"
                />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="relative z-10 mx-auto mt-8 mb-8 grid grid-cols-2 gap-6 md:grid-cols-4 max-w-5xl">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="group relative flex items-center gap-3 rounded-xl border border-orange-100/60 bg-white/90 backdrop-blur-sm px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-brand-orange/30 overflow-hidden"
              >
                {/* Orange left accent */}
                <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-brand-orange to-brand-deep opacity-60 group-hover:opacity-100 transition-opacity" />
                {/* Icon */}
                <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/10 group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-brand-deep transition-all duration-300">
                  <s.Icon className="h-4 w-4 text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <div className="font-display text-lg font-bold text-brand-ink leading-tight">{s.value}</div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500 leading-tight">{s.label}</div>
                </div>
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
