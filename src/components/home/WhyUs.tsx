import { Check } from "lucide-react";

const POINTS = [
  { title: "Manufacturing Hiring Expertise", desc: "Specialized recruiters with deep knowledge of plant operations, supply chain, and engineering roles across manufacturing sectors." },
  { title: "PAN India Recruitment Network", desc: "Local presence across Tier 1, 2 and 3 cities enabling rapid talent mobilization and regional hiring at scale." },
  { title: "Payroll Accuracy", desc: "Zero-error payroll processing with automated calculations, timely disbursements, and complete audit trails for financial compliance." },
  { title: "Statutory Compliance Support", desc: "End-to-end management of PF, ESI, PT, and other statutory requirements ensuring 100% regulatory adherence and risk mitigation." },
  { title: "Dedicated Account Managers", desc: "Single point of contact for all workforce needs with proactive communication, strategic planning, and personalized service delivery." }
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />

      <div className="container-x relative grid items-start gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="heading-lg font-bold text-brand-ink">
            Why Businesses Choose{" "}
            <span className="text-gradient-orange">QIPL?</span>
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
