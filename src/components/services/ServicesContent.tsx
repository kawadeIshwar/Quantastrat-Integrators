"use client";

import { useState } from "react";
import {
  UserCheck, FileSignature, ShieldCheck, Cpu, Wrench, Workflow, Crown, Factory,
  Check, ChevronDown, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    Icon: UserCheck,
    title: "Permanent Hiring",
    overview: "Full-time hiring for IC, mid-management and leadership roles across functions.",
    scope: ["Role calibration & market mapping", "Structured assessment design", "Curated shortlists in 7 days", "Offer negotiation & joining support"],
    benefits: ["Reduced time-to-hire", "Higher offer acceptance", "Quality-of-hire scoring"]
  },
  {
    Icon: FileSignature,
    title: "Contract Staffing",
    overview: "Flexible workforce models for time-bound projects, peak demand and specialised programs.",
    scope: ["Fast bench mobilisation", "Compliance & on-payroll management", "Performance management", "Conversion to FTE"],
    benefits: ["No long-term commitment", "Statutory compliance handled", "Quick ramp-up"]
  },
  {
    Icon: ShieldCheck,
    title: "Payroll & Compliance",
    overview: "End-to-end payroll, statutory and labour-law compliance for contingent workforce.",
    scope: ["Monthly payroll", "PF, ESI, PT, LWF, gratuity", "Contracts & invoicing", "Audit-ready reporting"],
    benefits: ["Zero compliance risk", "Single point of accountability", "Real-time dashboards"]
  },
  {
    Icon: Cpu,
    title: "IT Staffing",
    overview: "Engineering, data, cloud, security, product and design hiring at scale.",
    scope: ["Java, .NET, Node, Python, Go", "Data, ML, AI, MLOps", "AWS, Azure, GCP, DevOps", "Mobile, Frontend, QA"],
    benefits: ["Pre-vetted technical talent", "Skill-tested via assessments", "Niche-skill specialists"]
  },
  {
    Icon: Wrench,
    title: "Non-IT Staffing",
    overview: "Sales, ops, finance, HR, marketing and shared services hiring.",
    scope: ["BFSI & Fintech", "Healthcare & Pharma", "Retail & Consumer", "Shared services & GCC"],
    benefits: ["Domain-specialist recruiters", "Cultural-fit assessment", "Geographic reach"]
  },
  {
    Icon: Workflow,
    title: "RPO",
    overview: "Embedded recruitment teams operating as an extension of your TA function.",
    scope: ["Dedicated sourcing teams", "Branded candidate experience", "ATS integration", "Quarterly business reviews"],
    benefits: ["3x hiring velocity", "Predictable cost-per-hire", "Scales up and down"]
  },
  {
    Icon: Crown,
    title: "Executive Search",
    overview: "Confidential search for C-suite, board and senior leadership mandates.",
    scope: ["Discreet market mapping", "Bespoke research", "Multi-stakeholder calibration", "Onboarding support"],
    benefits: ["Confidentiality assured", "Diverse leadership slates", "Long-tenure outcomes"]
  },
  {
    Icon: Factory,
    title: "Manufacturing Hiring",
    overview: "Plant, supply chain, quality, R&D and engineering hiring across geographies.",
    scope: ["Plant leadership & operations", "EHS & quality", "R&D and product engineering", "Supply chain & procurement"],
    benefits: ["Industry-deep recruiters", "Multi-location coverage", "ITI to leadership coverage"]
  }
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Deep-dive into role, team and success metrics. Calibrate market and budget." },
  { n: "02", t: "Source", d: "Multi-channel sourcing across our 120k+ network, referrals and active outreach." },
  { n: "03", t: "Assess", d: "Structured interviews, skill assessments and reference checks." },
  { n: "04", t: "Present", d: "Curated shortlist with detailed profiles and assessment notes." },
  { n: "05", t: "Close", d: "Offer guidance, negotiation support and joining ownership." },
  { n: "06", t: "Care", d: "Post-joining check-ins for the first 90 days. Replacement guarantee." }
];

const FAQS = [
  { q: "How fast can you deliver shortlists?", a: "For most roles, our first curated shortlist lands within 5—7 working days of role calibration." },
  { q: "Do you support PAN India hiring?", a: "Yes — we actively source across 30+ Indian cities and remote talent hubs across the country." },
  { q: "What is your replacement policy?", a: "We offer a free replacement guarantee within 90 days of joining for permanent hires, subject to engagement terms." },
  { q: "Can you embed a team within our HR?", a: "Absolutely. Our RPO model places dedicated recruiters inside your team — branded and scaled to your needs." }
];

export default function ServicesContent() {
  return (
    <>
      <section className="relative py-24">
        <div className="container-x">
          <div className="eyebrow mb-5">Service offerings</div>
          <h2 className="heading-lg max-w-3xl font-bold text-brand-ink">Built to flex with <span className="text-gradient-orange">how you hire.</span></h2>

          <div className="mt-14 space-y-10">
            {SERVICES.map((s) => (
              <article key={s.title} className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-8 shadow-card transition-all duration-300 hover:shadow-card-hover md:p-12">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep" />
                <div className="grid gap-10 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm">
                      <s.Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-bold text-brand-ink">{s.title}</h3>
                    <p className="mt-3 text-gray-600">{s.overview}</p>
                  </div>
                  <div className="md:col-span-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-gray-400">Scope of work</div>
                    <ul className="mt-4 space-y-2.5">
                      {s.scope.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-gray-400">Key benefits</div>
                    <ul className="mt-4 space-y-2.5">
                      {s.benefits.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                          {x}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="mt-6 inline-flex items-center gap-1 text-sm text-brand-orange transition-colors hover:text-brand-deep">
                      Request a proposal <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24">
        <div className="container-x">
          <div className="eyebrow mb-5">Our hiring process</div>
          <h2 className="heading-lg max-w-3xl font-bold text-brand-ink">A repeatable, <span className="text-gradient-orange">transparent workflow.</span></h2>

          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            {PROCESS.map((p) => (
              <div key={p.n} className="group relative h-full overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="font-display text-5xl font-bold text-orange-100 group-hover:text-gradient-orange">{p.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold text-brand-ink">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-5">FAQ</div>
            <h2 className="heading-lg font-bold text-brand-ink">Common questions, <span className="text-gradient-orange">clearly answered.</span></h2>
            <p className="mt-6 max-w-md text-gray-600">
              Can&apos;t find what you&apos;re looking for? Our team replies within one business day.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Talk to us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-orange-100/60 rounded-3xl border border-orange-100/60 bg-white shadow-card">
              {FAQS.map((f, i) => (
                <Accordion key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Accordion({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <li>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left transition-colors hover:bg-orange-50"
      >
        <span className="font-display text-lg font-medium text-brand-ink">{q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-brand-orange transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-gray-600">{a}</p>
        </div>
      )}
    </li>
  );
}
