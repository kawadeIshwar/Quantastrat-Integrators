import Link from "next/link";
import { ArrowUpRight, Briefcase, Database, MapPin, Users } from "lucide-react";

const STATS = [
  { icon: Database, value: "28,00,000+", label: "Candidate Database" },
  { icon: Users, value: "78+", label: "Active Clients" },
  { icon: MapPin, value: "PAN India", label: "Hiring Network" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 -top-48 h-[42rem] w-[42rem] rounded-full bg-orange-300/25 blur-[120px]" />
        <div className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-amber-200/30 blur-[110px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-orange-200/20 blur-[100px]" />
      </div>

      {/* Decorative pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[5] dot-pattern opacity-25"
      />

      {/* Account for fixed navbar (~72px) so content is truly centred */}
      <div className="container-x relative flex min-h-[100svh] items-center pt-[calc(72px+3.5rem)] pb-14 md:pt-[calc(72px+4rem)] md:pb-16 lg:pt-[calc(72px+5rem)] lg:pb-20">
        <div className="w-full">
          {/* Heading — uses font-display + tight tracking from scratch, no conflicting heading-xl */}
          <div className="max-w-5xl">
            <h1
              className="font-display font-bold leading-[1.05] tracking-tight text-brand-ink"
              style={{ fontSize: "clamp(2rem, 8vw, 5.125rem)" }}
            >
              Recruitment, Staffing,{" "}
              <span>
                Payroll &amp;{" "}
                <span className="text-gradient-orange">Compliance</span>
              </span>
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-gray-600"
               style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>
              Helping manufacturing and engineering companies build
              high-performing teams through specialised{" "}
              <span className="font-semibold text-brand-ink">
                recruitment, staffing, payroll management,
              </span>{" "}
              and statutory compliance.
            </p>

            {/* CTA buttons — stacked on mobile, inline from sm */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center sm:w-auto"
              >
                <Briefcase className="h-4 w-4 shrink-0" />
                Hire Talent
              </Link>

              <Link
                href="/careers"
                className="btn-ghost group w-full justify-center sm:w-auto"
              >
                Explore Openings
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Stats — single column on xs, 3-col from sm */}
          <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/75 p-5 shadow-card backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-orange/20 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-amber-100 ring-1 ring-brand-orange/15">
                    <Icon className="h-5 w-5 text-brand-orange" />
                  </div>

                  <div>
                    <p className="text-xl font-bold leading-none text-gradient-orange sm:text-2xl">
                      {value}
                    </p>
                    <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                      {label}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-card-shine opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}