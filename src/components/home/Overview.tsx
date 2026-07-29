import { Zap, Users, Award, MapPin, FileCheck } from "lucide-react";

const CARDS = [
  { Icon: Zap, title: "Fast Hiring", desc: "Delivering qualified candidates quickly through streamlined sourcing, rigorous screening, and an efficient recruitment process." },
  { Icon: Users, title: "Skilled Talent Pool", desc: "Access to a diverse network of skilled professionals across manufacturing, engineering and non-IT." },
  { Icon: Award, title: "Industry Expertise", desc: "Dedicated recruitment specialists with in-depth understanding of manufacturing, engineering, industrial operations, and technical hiring." },
  { Icon: MapPin, title: "PAN India Support", desc: "Delivering workforce solutions across India's major industrial hubs with consistent quality and responsive client support." },
  { Icon: FileCheck, title: "Payroll & Compliance", desc: "Comprehensive payroll administration and statutory compliance management, ensuring accurate processing and complete regulatory adherence." }
];

const MINI_STATS = [
  { k: "5+", v: "Years of Industry Experience" },
  { k: "1000+", v: "Successful Placements" },
  { k: "8+", v: "Core Industries Served" }
];

export default function Overview() {
  return (
    <section className="relative py-16">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="heading-md font-bold text-brand-ink">
            Your Strategic Workforce Partner for{" "}
            <span className="text-gradient-orange">Manufacturing &amp; Engineering Excellence</span>
          </h2>
          <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
            Quantastrat Integrators partners with manufacturing and engineering organizations to deliver end-to-end workforce solutions. From specialized recruitment and contract staffing to payroll management and statutory compliance, we help businesses build productive, compliant, and future-ready teams.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {MINI_STATS.map((s) => (
              <div key={s.v} className="rounded-2xl border border-orange-100/80 bg-white p-4 shadow-card">
                <div className="text-lg font-bold text-gradient-orange">{s.k}</div>
                <div className="mt-1 text-[9px] font-medium uppercase tracking-widest text-gray-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          {/* 2-col grid: first 4 cards in pairs, 5th card spans full width */}
          <div className="grid gap-5 sm:grid-cols-2">
            {CARDS.map((c, i) => (
              <div
                key={c.title}
                className={`group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover${i === 4 ? " sm:col-span-2" : ""}`}
              >
                {/* Top gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10">
                    <c.Icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-ink">{c.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.desc}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
