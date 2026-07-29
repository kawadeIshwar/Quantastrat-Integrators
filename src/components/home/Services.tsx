import {
  UserCheck, FileSignature, ShieldCheck, Factory, Workflow, Crown, Wrench, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { Icon: Factory, title: "Manufacturing Recruitment", desc: "Plants, supply chain, R&D and engineering talent." },
  { Icon: UserCheck, title: "Permanent Hiring", desc: "End-to-end search for full-time leadership and IC roles." },
  { Icon: FileSignature, title: "Contract Staffing", desc: "Flexible workforce with fast ramp-up and compliance." },
  { Icon: ShieldCheck, title: "Payroll & Compliance", desc: "Statutory, payroll and compliance handled end-to-end." },
  { Icon: Crown, title: "Executive Search", desc: "Confidential, board-level and C-suite mandates." },
  { Icon: Workflow, title: "Recruitment Process\nOutsourcing", desc: "Embedded recruitment teams that scale with you." },
  { Icon: Wrench, title: "Non-IT Recruitment", desc: "Sales, ops, finance, HR and shared services." }
];

type Service = typeof SERVICES[number];

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-orange-100/60 bg-brand-cream p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep">
          <s.Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-display text-lg font-semibold text-brand-ink whitespace-pre-line">{s.title}</h3>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{s.desc}</p>
    </div>
  );
}


export default function Services() {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      {/* Subtle background pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="heading-lg max-w-2xl font-bold text-brand-ink">
              Services built for{" "}
              <span className="text-gradient-orange">every hiring need.</span>
            </h2>
          </div>
          <Link href="/services" className="btn-ghost">
            Explore all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>

        {/* Row 2 — 3 cards, centered and slightly wider */}
        <div className="mt-5 grid gap-5 sm:grid-cols-3 max-w-4xl mr-auto w-full">
          {SERVICES.slice(4).map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
