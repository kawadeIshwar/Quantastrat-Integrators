import Link from "next/link";
import { ArrowUpRight, Briefcase, Sparkles, TrendingUp, Users, Clock } from "lucide-react";
import GradientOrbs from "@/components/ui/GradientOrbs";

const STATS = [
  { icon: TrendingUp, value: "500+", label: "Enterprise Clients" },
  { icon: Users, value: "1,20,000", label: "Vetted Candidates" },
  { icon: Clock, value: "28 days", label: "Avg. Time-to-Hire" }
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-hero-gradient">
      <GradientOrbs />
      {/* Decorative grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] dot-pattern opacity-40" />

      <div className="container-x relative z-10 pb-12 pt-24 md:pb-16 md:pt-32">
        <div className="eyebrow mb-6 md:mb-8">
          <Sparkles className="h-3.5 w-3.5" />
          Premium Recruitment & Staffing — PAN India
        </div>

        <h1 className="heading-xl max-w-4xl font-bold text-brand-ink md:max-w-5xl">
          Connecting Businesses<br className="hidden lg:block" /> with{" "}
          <span className="text-gradient-orange">Exceptional Talent.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:mt-8 md:max-w-2xl md:text-xl">
          Quantastrat Integrators delivers reliable recruitment and staffing solutions across
          <span className="font-semibold text-brand-ink"> IT, Non-IT, Manufacturing</span> and enterprise sectors — engineered
          for speed, quality and compliance.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
          <Link href="/careers" className="btn-primary">
            <Briefcase className="h-4 w-4" /> View Open Roles
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stat cards - responsive grid */}
        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-card backdrop-blur-sm transition-all hover:shadow-card-hover md:px-6 md:py-5">
                <div className="absolute right-3 top-3 rounded-xl bg-brand-orange/5 p-1.5 md:right-4 md:top-4 md:p-2">
                  <s.icon className="h-4 w-4 text-brand-orange md:h-5 md:w-5" />
                </div>
                <div className="text-2xl font-bold text-gradient-orange md:text-3xl">{s.value}</div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-gray-500 md:text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
