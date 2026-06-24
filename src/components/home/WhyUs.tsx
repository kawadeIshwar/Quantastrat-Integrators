import { Check } from "lucide-react";

const POINTS = [
  { title: "Verified candidates", desc: "Background, skill and reference checks on every shortlist." },
  { title: "Fast hiring", desc: "First curated shortlist in under 7 days for most roles." },
  { title: "Compliance support", desc: "Statutory, payroll and contract compliance handled end-to-end." },
  { title: "Industry expertise", desc: "Specialist recruiters with 8+ years average domain experience." },
  { title: "PAN India network", desc: "Active sourcing across 30+ cities and remote talent hubs." }
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />

      <div className="container-x relative grid items-start gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="eyebrow mb-5">Why Quantastrat</div>
          <h2 className="heading-lg font-bold text-brand-ink">
            An unfair advantage in{" "}
            <span className="text-gradient-orange">hiring.</span>
          </h2>
          <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
            We combine deep market intelligence, structured assessments and a relentless candidate experience to deliver outcomes — not just CVs.
          </p>
        </div>

        <ul className="space-y-4 lg:col-span-7">
          {POINTS.map((p, i) => (
            <li key={p.title} className="group flex items-start gap-5 rounded-2xl border border-orange-100/60 bg-brand-cream p-6 shadow-card transition-all duration-300 hover:shadow-card-hover">
              <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm">
                <Check className="h-4 w-4 text-white" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-brand-ink group-hover:text-brand-orange transition-colors">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
              <div className="hidden text-2xl font-bold text-orange-100 md:block">0{i + 1}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
