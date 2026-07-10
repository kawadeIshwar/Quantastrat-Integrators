import { Compass, Target, Sparkles, ShieldCheck, Users, Globe2, Heart, FileCheck, Lightbulb } from "lucide-react";

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
  { y: "Today", t: "Growing Across India", d: "Delivering integrated workforce solutions across Recruitment, Staffing, Payroll Management, Compliance, and HR Support for businesses nationwide." }
];

export default function About() {
  return (
    <>
      {/* Our Story */}
      <section className="relative py-28">
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">The Foundation of QuantaStrat</div>
            <h2 className="heading-lg font-bold text-brand-ink">
              Two Successful Journeys.{" "}
              <span className="text-gradient-orange">One Unified Vision.</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Every successful organization is built on great people, and every great partnership begins with trust. QuantaStrat Integrators Pvt. Ltd. was established through the strategic merger of alabty Recruitment Services and Rapid Job Solutions, bringing together years of recruitment expertise, industry relationships, and workforce management experience under one unified brand.
              </p>
              <p>
                This integration enabled us to expand beyond traditional recruitment by offering end-to-end workforce solutions, including staffing, payroll management, statutory compliance, and HR support. Today, QuantaStrat continues to help businesses build stronger teams while simplifying workforce management across India's growing industrial landscape.
              </p>
            </div>
          </div>

          {/* Timeline Illustration */}
          <div className="space-y-4">
            {[
              { id: 1, title: "alabty Recruitment Services Founded", desc: "Established with the vision of delivering quality recruitment solutions and building long-term client relationships." },
              { id: 2, title: "Rapid Job Solutions Founded", desc: "Focused on connecting skilled professionals with growing businesses across multiple industries." },
              { id: 3, title: "Strategic Merger", desc: "The merger of alabty Recruitment Services and Rapid Job Solutions created QuantaStrat Integrators Pvt. Ltd., combining expertise, experience, and capabilities under one organization." },
              { id: 4, title: "Growing Across India", desc: "Delivering integrated workforce solutions across Recruitment, Staffing, Payroll Management, Compliance, and HR Support for businesses nationwide." }
            ].map((item) => (
              <div key={item.id} className="group relative flex items-start gap-4 rounded-2xl border border-orange-100/60 bg-gradient-to-b from-orange-50 to-white p-5 shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-orange text-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-brand-ink text-base">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative py-28">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-10 shadow-card transition-all duration-300 hover:shadow-card-hover">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
              <Compass className="h-7 w-7 text-brand-orange" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-brand-ink">Why We Exist</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe every successful business begins with the right people. Our purpose is to help organizations build stronger teams through reliable workforce solutions while enabling professionals to build meaningful careers.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-10 shadow-card transition-all duration-300 hover:shadow-card-hover">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-deep to-brand-orange" />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
              <Target className="h-7 w-7 text-brand-orange" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-brand-ink">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become India's most trusted workforce solutions partner by delivering exceptional talent, operational excellence, and long-term value to businesses across the manufacturing and industrial ecosystem.
            </p>
          </div>
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
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
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

      {/* Growing Together Across India */}
      <section className="relative overflow-hidden py-28 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">Industry Presence</div>
            <h2 className="heading-lg font-bold text-brand-ink">
              Growing Together{" "}
              <span className="text-gradient-orange">Across India</span>
            </h2>
            <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
              Today, QuantaStrat Integrators proudly partners with businesses across India's manufacturing, engineering, Oil & Gas, EPC/EPCM, industrial automation, and infrastructure sectors. As we continue to grow, our commitment remains the same—delivering dependable workforce solutions built on trust, expertise, and long-term partnerships.
            </p>
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
