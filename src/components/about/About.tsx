import { Compass, Target, Sparkles, ShieldCheck, Users, Globe2 } from "lucide-react";

const VALUES = [
  { Icon: ShieldCheck, t: "Integrity", d: "We do the right thing — for clients, candidates and colleagues." },
  { Icon: Sparkles, t: "Excellence", d: "Crafted process, rigorous evaluation, exceptional outcomes." },
  { Icon: Users, t: "People First", d: "Careers, not transactions. Partnerships, not vendor relationships." },
  { Icon: Globe2, t: "Reach", d: "PAN India sourcing engines across 30+ cities and remote hubs." }
];

const TIMELINE = [
  { y: "2018", t: "Founded", d: "Quantastrat Integrators founded with a vision to modernise staffing." },
  { y: "2020", t: "RPO Practice", d: "Launched embedded RPO model for high-growth startups & MNCs." },
  { y: "2022", t: "Manufacturing Vertical", d: "Specialist desk for plants, supply chain and engineering hiring." },
  { y: "2024", t: "PAN India Scale", d: "500+ enterprise clients, 30+ cities, 120,000+ vetted candidates." }
];

export default function About() {
  return (
    <>
      {/* Mission / Vision */}
      <section className="relative py-28">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-10 shadow-card transition-all duration-300 hover:shadow-card-hover">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
              <Compass className="h-7 w-7 text-brand-orange" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-brand-ink">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To make hiring radically simple for ambitious enterprises — combining the depth of specialist recruiters
              with the precision of modern technology and the warmth of human consulting.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-10 shadow-card transition-all duration-300 hover:shadow-card-hover">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-deep to-brand-orange" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
              <Target className="h-7 w-7 text-brand-orange" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-brand-ink">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To be India&apos;s most trusted talent partner — the firm enterprises call when the role matters,
              and the firm professionals trust when the next move matters.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "500+", l: "Enterprise Clients" },
            { v: "1,20,000", l: "Vetted Candidates" },
            { v: "30+", l: "Cities Covered" },
            { v: "98%", l: "Offer Acceptance" }
          ].map((s) => (
            <div key={s.l} className="rounded-3xl border border-orange-100/60 bg-white p-8 shadow-card text-center">
              <div className="font-display text-4xl font-bold text-gradient-orange">{s.v}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-28 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="container-x relative">
          <div className="text-center">
            <div className="mx-auto w-fit eyebrow mb-5">Core values</div>
            <h2 className="heading-lg mx-auto max-w-3xl font-bold text-brand-ink">
              The principles that shape{" "}
              <span className="text-gradient-orange">every engagement.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.t} className="group relative h-full overflow-hidden rounded-3xl border border-orange-100/60 bg-brand-cream p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep">
                  <v.Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-ink">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-28">
        <div className="container-x">
          <div className="text-center">
            <div className="mx-auto w-fit eyebrow mb-5">Our journey</div>
            <h2 className="heading-lg mx-auto max-w-3xl font-bold text-brand-ink">
              Milestones{" "}
              <span className="text-gradient-orange">along the way.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {TIMELINE.map((t) => (
              <div key={t.y} className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep" />
                <div className="text-3xl font-bold text-gradient-orange">{t.y}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-brand-ink">{t.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India coverage */}
      <section className="relative overflow-hidden py-28 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">Geographic presence</div>
            <h2 className="heading-lg font-bold text-brand-ink">
              PAN India coverage.{" "}
              <span className="text-gradient-orange">Local intelligence.</span>
            </h2>
            <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
              From Bengaluru and Hyderabad to Pune, Chennai, Mumbai, Gurgaon and beyond — we run active sourcing engines across India&apos;s
              top talent markets and emerging tier-2 hubs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {["Bengaluru", "Hyderabad", "Pune", "Chennai", "Mumbai", "Gurgaon", "Noida", "Kolkata", "Ahmedabad"].map((c) => (
                <span key={c} className="rounded-xl border border-orange-100/60 bg-brand-cream px-3 py-2 text-center text-sm font-medium text-brand-ink shadow-card">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-orange-100/60 bg-gradient-to-b from-orange-50 to-white p-6 shadow-card">
            <svg viewBox="0 0 200 240" className="h-full w-full" aria-hidden>
              <defs>
                <linearGradient id="ind" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FF8A3D" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E85D04" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M100 10 C 130 30, 160 60, 165 110 C 168 150, 145 200, 110 225 C 90 232, 75 215, 70 195 C 60 170, 35 160, 30 130 C 25 95, 55 50, 100 10 Z"
                fill="url(#ind)"
                stroke="rgba(255,107,0,0.6)"
                strokeWidth="1"
              />
              {[
                [98, 130], [115, 90], [80, 160], [130, 150], [60, 95], [120, 200], [70, 50], [140, 110]
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="3" fill="#FF6B00" />
                  <circle cx={x} cy={y} r="8" fill="#FF6B00" opacity="0.15" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
