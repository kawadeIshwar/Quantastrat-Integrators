import { Compass, Target, Sparkles, ShieldCheck, Users, Globe2, Heart, FileCheck, Lightbulb } from "lucide-react";
import IndiaMap from "./IndiaMap";

const VALUES = [
  { Icon: ShieldCheck, t: "Integrity", d: "We act with honesty, transparency, and accountability in every relationship." },
  { Icon: Users, t: "Partnership", d: "We build long-term partnerships based on trust, collaboration, and shared success." },
  { Icon: Sparkles, t: "Excellence", d: "We continuously improve our processes to deliver exceptional outcomes for our clients and candidates." },
  { Icon: Heart, t: "People First", d: "We believe people are the foundation of every successful organization." },
  { Icon: FileCheck, t: "Compliance", d: "We uphold the highest standards of statutory compliance, ethical practices, and professional responsibility." },
  { Icon: Lightbulb, t: "Innovation", d: "We embrace technology and modern workforce practices to create smarter hiring solutions." }
];

const TIMELINE = [
  { y: "2019", t: "alabty Recruitment Services Founded", d: "Established with the vision of delivering quality recruitment solutions and building long-term client relationships." },
  { y: "2019", t: "Rapid Job Solutions Founded", d: "Focused on connecting skilled professionals with growing businesses across multiple industries." },
  { y: "2024", t: "Strategic Merger", d: "The merger of alabty Recruitment Services and Rapid Job Solutions created QuantaStrat Integrators Pvt. Ltd., combining expertise, experience, and capabilities under one organization." },
  { y: "Today", t: "Growing Across India", d: "Delivering integrated workforce solutions across Recruitment, Staffing, Payroll Management, Compliance, and HR Support for businesses nationwide." },
];

export default function About() {
  return (
    <>
      {/* Our Story */}
      <section className="relative py-14">
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">The Foundation of Quantastrat</div>
            <h2 className="heading-lg font-bold text-brand-ink">
              Two Successful Journeys.{" "}
              <span className="text-gradient-orange">One Unified Vision.</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Every successful organization is built on great people, and every great partnership begins with trust.{" "}
                <span className="text-brand-orange">Quantastrat Integrators Pvt. Ltd.</span> was established through the strategic merger of{" "}
                <span className="text-blue-600">alabty Recruitment Services</span> and{" "}
                <span className="text-blue-600">Rapid Job Solutions</span>, bringing together years of recruitment expertise, industry relationships, and workforce management experience under one unified brand.
              </p>
              <p>
                This integration enabled us to expand beyond traditional recruitment by offering end-to-end workforce solutions, including staffing, payroll management, statutory compliance, and HR support. Today, Quantastrat continues to help businesses build stronger teams while simplifying workforce management across India's growing industrial landscape.
              </p>
            </div>
          </div>

          {/* Merger Flow Illustration */}
          <div className="flex flex-col items-center select-none">

            {/* Row 1 — two source companies */}
            <div className="flex w-full justify-between gap-4">
              {/* alabty */}
              <div className="relative flex flex-1 flex-col items-center">
                <div className="w-full rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-4 shadow-lg shadow-orange-100 text-center">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 shadow-md shadow-orange-200">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <p className="text-xs font-semibold text-brand-ink leading-tight">alabty<br />Recruitment Services</p>
                  <span className="mt-1 inline-block rounded-full bg-orange-100 px-2 py-0.5 text-[10px] text-brand-orange font-medium">Est. 2019</span>
                </div>
              </div>

              {/* Rapid Job */}
              <div className="relative flex flex-1 flex-col items-center">
                <div className="w-full rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-4 shadow-lg shadow-orange-100 text-center">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 shadow-md shadow-orange-200">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>
                  </div>
                  <p className="text-xs font-semibold text-brand-ink leading-tight">Rapid Job<br />Solutions</p>
                  <span className="mt-1 inline-block rounded-full bg-orange-100 px-2 py-0.5 text-[10px] text-brand-orange font-medium">Est. 2019</span>
                </div>
              </div>
            </div>

            {/* Converging arrows — single SVG */}
            <svg className="w-full" height="64" viewBox="0 0 400 64" preserveAspectRatio="none">
              {/* Left line: centre of left card → bottom centre */}
              <line x1="100" y1="0" x2="200" y2="56" stroke="#f97316" strokeWidth="2" strokeDasharray="6,4" />
              {/* Right line: centre of right card → bottom centre */}
              <line x1="300" y1="0" x2="200" y2="56" stroke="#f97316" strokeWidth="2" strokeDasharray="6,4" />
              {/* Single arrowhead at convergence point */}
              <polygon points="193,52 207,52 200,64" fill="#f97316" />
            </svg>

            {/* Strategic Merger node */}
            <div className="z-10 flex flex-col items-center">
              <div className="relative flex items-center gap-3 rounded-2xl border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 px-6 py-3 shadow-lg shadow-orange-100">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 shadow-md shadow-orange-200">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                </div>
                <div>
                  <p className="text-xs text-orange-400 font-medium">2024</p>
                  <p className="text-sm font-bold text-brand-ink">Strategic Merger</p>
                </div>
              </div>
            </div>

            {/* Vertical arrow down */}
            <svg className="w-full" height="52" viewBox="0 0 400 52">
              <line x1="200" y1="0" x2="200" y2="42" stroke="#f97316" strokeWidth="2" strokeDasharray="6,4" />
              <polygon points="193,40 207,40 200,52" fill="#f97316" />
            </svg>

            {/* QIPL result node */}
            <div className="w-full rounded-2xl border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 p-5 text-center shadow-lg shadow-orange-100">
              <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-amber-500 shadow-md shadow-orange-200">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <p className="text-base font-black text-brand-ink tracking-wide">QuantaStrat Integrators</p>
              <p className="text-sm text-brand-orange font-semibold">Pvt. Ltd.</p>
            </div>

            {/* Services strip */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Recruitment", "Staffing", "Payroll", "Compliance", "HR Support"].map((s) => (
                <span key={s} className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-brand-orange shadow-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — Our Journey */}
      <section className="relative py-14">
        <div className="container-x">
          <div className="text-center">
            <div className="mx-auto w-fit eyebrow mb-5">Our journey</div>
            <h2 className="heading-lg mx-auto max-w-3xl font-bold text-brand-ink">
              Milestones{" "}
              <span className="text-gradient-orange">along the way.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep" />
                <div className="text-3xl font-bold text-gradient-orange">{t.y}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-brand-ink">{t.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative py-14 bg-brand-cream">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-10 shadow-card transition-all duration-300 hover:shadow-card-hover">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep" />
              <div className="flex items-center gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10">
                  <Compass className="h-7 w-7 text-brand-orange" />
                </div>
                <h2 className="font-display text-3xl font-bold text-brand-ink">Why We Exist</h2>
              </div>
              <p className="mt-6 text-gray-600 leading-relaxed">
                We believe every successful business begins with the right people. Our purpose is to help organizations build stronger teams through reliable workforce solutions while enabling professionals to build meaningful careers.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-10 shadow-card transition-all duration-300 hover:shadow-card-hover">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-deep to-brand-orange" />
              <div className="flex items-center gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10">
                  <Target className="h-7 w-7 text-brand-orange" />
                </div>
                <h2 className="font-display text-3xl font-bold text-brand-ink">Our Vision</h2>
              </div>
              <p className="mt-6 text-gray-600 leading-relaxed">
                To become India's most trusted workforce solutions partner by delivering exceptional talent, operational excellence, and long-term value to businesses across the manufacturing and industrial ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values (position 4) */}
      <section className="relative overflow-hidden py-14 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="container-x relative">
          <div className="text-center">
            <div className="mx-auto w-fit eyebrow mb-5">Core values</div>
            <h2 className="heading-lg mx-auto max-w-3xl font-bold text-brand-ink">
              The principles that shape{" "}
              <span className="text-gradient-orange">every engagement.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.t} className="group relative overflow-hidden rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-7 shadow-lg shadow-orange-100 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-orange-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 shadow-md shadow-orange-200">
                    <v.Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-ink">{v.t}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Together Across India */}
      <section className="relative pt-14 pb-14 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">Industry Presence</div>
            <h2 className="heading-lg font-bold text-brand-ink">
              Growing Together{" "}
              <span className="text-gradient-orange">Across India</span>
            </h2>
            <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
              Today, Quantastrat Integrators proudly partners with businesses across India's manufacturing, engineering, Oil & Gas, EPC/EPCM, industrial automation, and infrastructure sectors. As we continue to grow, our commitment remains the same—delivering dependable workforce solutions built on trust, expertise, and long-term partnerships.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-4">
            <IndiaMap />
          </div>
        </div>
      </section>
    </>
  );
}
