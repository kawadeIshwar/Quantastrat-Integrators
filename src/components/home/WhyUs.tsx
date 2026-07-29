import { ElementType } from "react";
import { Factory, MapPin, DollarSign, ShieldCheck, Handshake } from "lucide-react";

const POINTS = [
  {
    Icon: Factory,
    title: "Manufacturing Hiring Expertise",
    desc: "Specialized recruitment for manufacturing, engineering, production, quality, and plant operations.",
  },
  {
    Icon: MapPin,
    title: "PAN India Recruitment Network",
    desc: "Delivering workforce solutions across India's major industrial and manufacturing hubs.",
  },
  {
    Icon: DollarSign,
    title: "Payroll & Compliance Excellence",
    desc: "End-to-end payroll processing and statutory compliance with complete regulatory accuracy.",
  },
  {
    Icon: ShieldCheck,
    title: "Statutory Compliance Support",
    desc: "Managing PF, ESI, PT, labour law compliance, and statutory requirements with confidence.",
  },
  {
    Icon: Handshake,
    title: "Dedicated Client Partnership",
    desc: "A dedicated workforce partner focused on long-term business success and responsive support.",
  },
];


function WhyCard({ Icon, title, desc, index }: { Icon: ElementType; title: string; desc: string; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-orange-100/70 bg-brand-cream p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-orange to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <span className="text-4xl font-black text-orange-100 transition-colors group-hover:text-orange-200">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-display text-base font-semibold text-brand-ink transition-colors group-hover:text-brand-orange">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-orange-200/25 blur-[120px]" />

      <div className="container-x relative">
        {/* Top label */}
        <div className="flex flex-col items-center text-center">
          <h2 className="mt-3 font-display text-4xl font-bold leading-snug text-brand-ink md:text-5xl lg:whitespace-nowrap">
            Why Businesses Choose{" "}
            <span className="text-gradient-orange">QIPL?</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            We combine deep market intelligence, structured assessments and a relentless candidate experience to deliver outcomes — not just CVs.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.slice(0, 3).map(({ Icon, title, desc }, i) => (
            <WhyCard key={title} Icon={Icon} title={title} desc={desc} index={i} />
          ))}
        </div>

        {/* Row 2 — last 2 cards, centered */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto w-full">
          {POINTS.slice(3).map(({ Icon, title, desc }, i) => (
            <WhyCard key={title} Icon={Icon} title={title} desc={desc} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
