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

      <div className="container-x relative z-10 pb-16 pt-32">
        <div className="eyebrow mb-8">
          <Sparkles className="h-3.5 w-3.5" />
          Premium Recruitment & Staffing — PAN India
        </div>

        <h1 className="heading-xl max-w-5xl font-bold text-brand-ink">
          Connecting Businesses<br className="hidden lg:block" /> with{" "}
          <span className="text-gradient-orange">Exceptional Talent.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
          Quantastrat Integrators delivers reliable recruitment and staffing solutions across
          <span className="font-semibold text-brand-ink"> IT, Non-IT, Manufacturing</span> and enterprise sectors — engineered
          for speed, quality and compliance.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/careers" className="btn-primary">
            <Briefcase className="h-4 w-4" /> View Open Roles
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stat cards */}
        <div className="mt-20 hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-6 py-5 shadow-card backdrop-blur-sm transition-all hover:shadow-card-hover">
                <div className="absolute right-4 top-4 rounded-xl bg-brand-orange/5 p-2">
                  <s.icon className="h-5 w-5 text-brand-orange" />
                </div>
                <div className="text-3xl font-bold text-gradient-orange">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
