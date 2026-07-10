import Link from "next/link";
import { ArrowUpRight, Briefcase, Database, Users, MapPin } from "lucide-react";

const STATS = [
  { icon: Database, value: "28,00,000+", label: "Candidate Database" },
  { icon: Users, value: "78", label: "Active Clients" },
  { icon: MapPin, value: "PAN India", label: "Hiring Network" }
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-hero-gradient">
      {/* ── Rich ambient background ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-orange-300/25 via-amber-200/15 to-transparent blur-[120px]" />
        <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-orange-200/30 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-t from-amber-200/20 to-transparent blur-[90px]" />
      </div>

      {/* ── Decorative dot grid ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] dot-pattern opacity-30" />

      {/* ── Main content ── */}
      <div className="container-x relative z-10 py-28 md:py-36 lg:py-40">

        {/* ── HEADLINE — full width so it gets maximum space ── */}
        <h1 className="heading-xl font-bold text-brand-ink max-w-6xl">
          Recruitment, Staffing, Payroll<br className="hidden lg:block" /> &amp;{" "}
          <span className="text-gradient-orange">Compliance for Modern Manufacturing Enterprises.</span>
        </h1>

        {/* ── Sub-copy ── */}
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-600 md:text-xl">
          Helping manufacturing and engineering companies build high-performing teams through specialised{" "}
          <span className="font-semibold text-brand-ink">recruitment, contract staffing, payroll management,</span> and statutory compliance.
        </p>

        {/* ── Bottom row: CTAs left + stat cards right ── */}
        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              <Briefcase className="h-4 w-4" /> Hire Talent
            </Link>
            <Link href="/careers" className="btn-ghost">
              Explore Openings <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* ── Stat cards row ── */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{ animationDelay: `${i * 0.15}s` }}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/70 bg-white/80 px-6 py-4 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-col sm:items-start sm:gap-2 sm:min-w-[150px]"
              >
                {/* Icon bubble */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-deep/5 ring-1 ring-brand-orange/20 transition-colors group-hover:from-brand-orange/20 group-hover:to-brand-deep/10">
                  <s.icon className="h-4 w-4 text-brand-orange" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient-orange leading-none">{s.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">{s.label}</div>
                </div>
                {/* Subtle shine */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-card-shine" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
