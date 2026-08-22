"use client";

import { useState, useId } from "react";
import {
  Factory, UserCheck, FileSignature, ShieldCheck, Briefcase, Search, Workflow,
  Check, ChevronDown, ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { Accordion } from "./Accordion";
import type { LucideIcon } from "lucide-react";

/* ──────────────────────────── DATA ──────────────────────────── */

interface Service {
  number: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  scope: string[];
  clientValue: string;
  cta: string;
  ctaHref: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    Icon: Factory,
    title: "Manufacturing Recruitment",
    description: "Specialized recruitment for manufacturing, engineering, plant operations, and industrial functions.",
    scope: [
      "Production & Operations",
      "Quality & Design",
      "Maintenance & Engineering",
      "R&D & Product Engineering",
      "Supply Chain & Procurement",
      "Sales, HR & Administration for Manufacturing Organizations",
      "Plant & Technical Leadership"
    ],
    clientValue: "Industry-focused recruitment expertise for identifying skilled professionals who understand manufacturing environments and operational requirements.",
    cta: "Discuss Your Hiring Requirement →",
    ctaHref: "/contact"
  },
  {
    number: "02",
    Icon: UserCheck,
    title: "Permanent Hiring",
    description: "End-to-end recruitment for permanent technical, professional, management, and leadership positions.",
    scope: [
      "Requirement Understanding",
      "Role & Profile Mapping",
      "Talent Sourcing",
      "Candidate Screening",
      "Interview Coordination",
      "Offer & Negotiation Support",
      "Joining Follow-up"
    ],
    clientValue: "A structured recruitment process designed to help businesses identify and hire the right talent for long-term roles.",
    cta: "Discuss Your Hiring Requirement →",
    ctaHref: "/contact"
  },
  {
    number: "03",
    Icon: FileSignature,
    title: "Contract Staffing",
    description: "Flexible workforce solutions for project-based requirements, business expansion, peak workloads, and specialized manpower needs.",
    scope: [
      "Workforce Planning",
      "Candidate Sourcing & Screening",
      "Onboarding & Documentation",
      "Payroll Administration",
      "Statutory Compliance",
      "Attendance & Workforce Coordination",
      "Employee Support",
      "Contract Completion / Conversion Support"
    ],
    clientValue: "Scale your workforce efficiently while reducing the administrative burden of managing contract employees.",
    cta: "Discuss Staffing Requirements →",
    ctaHref: "/contact"
  },
  {
    number: "04",
    Icon: ShieldCheck,
    title: "Payroll & Compliance",
    description: "End-to-end payroll administration and statutory compliance support for a compliant and efficiently managed workforce.",
    scope: [
      "Monthly Payroll Processing",
      "Attendance & Leave Inputs",
      "PF / EPF Management",
      "ESIC Management",
      "Professional Tax",
      "Labour Law Compliance",
      "Statutory Returns & Records",
      "Payroll Reports",
      "Employee Documentation",
      "Full & Final Settlement Support"
    ],
    clientValue: "Accurate payroll processing and structured compliance management that helps businesses reduce administrative complexity and maintain regulatory discipline.",
    cta: "Discuss Payroll & Compliance →",
    ctaHref: "/contact"
  },
  {
    number: "05",
    Icon: Briefcase,
    title: "Non-IT Recruitment",
    description: "Recruitment solutions for business, commercial, operational, and support functions across industries.",
    scope: [
      "Sales & Business Development",
      "Finance & Accounts",
      "Human Resources",
      "Administration",
      "Customer Support",
      "Operations",
      "Supply Chain",
      "Shared Services"
    ],
    clientValue: "Access specialized recruitment support for the business functions that keep your organization running efficiently.",
    cta: "Discuss Your Hiring Requirement →",
    ctaHref: "/contact"
  },
  {
    number: "06",
    Icon: Search,
    title: "Executive Search",
    description: "Confidential search solutions for senior management, functional leadership, plant leadership, and critical business roles.",
    scope: [
      "Leadership Requirement Mapping",
      "Market Intelligence",
      "Confidential Candidate Identification",
      "Executive Screening",
      "Stakeholder Coordination",
      "Offer & Negotiation Support",
      "Joining & Transition Support"
    ],
    clientValue: "A focused and confidential approach to identifying leadership talent for roles where experience, capability, and cultural alignment matter.",
    cta: "Discuss Executive Hiring →",
    ctaHref: "/contact"
  },
  {
    number: "07",
    Icon: Workflow,
    title: "Recruitment Process Outsourcing (RPO)",
    description: "Dedicated recruitment support that works as an extension of your internal HR or Talent Acquisition team.",
    scope: [
      "Dedicated Recruitment Team",
      "Candidate Sourcing",
      "Screening & Assessment Coordination",
      "Interview Management",
      "Recruitment MIS & Reporting",
      "Hiring Pipeline Management",
      "Recruitment Process Coordination",
      "Scalable Hiring Support"
    ],
    clientValue: "Extend your recruitment capacity with a dedicated team aligned to your hiring process, priorities, and business goals.",
    cta: "Discuss RPO Requirements →",
    ctaHref: "/contact"
  }
];

const PROCESS = [
  { n: "01", t: "Understand", d: "Understand your workforce requirement, business environment, role expectations, and timelines." },
  { n: "02", t: "Source", d: "Identify relevant talent through targeted sourcing, our recruitment network, referrals, and industry channels." },
  { n: "03", t: "Assess", d: "Screen and evaluate candidates based on skills, experience, role requirements, and organizational fit." },
  { n: "04", t: "Select", d: "Present qualified candidates and support the interview, selection, and offer process." },
  { n: "05", t: "Onboard", d: "Support documentation, joining coordination, and onboarding requirements." },
  { n: "06", t: "Support", d: "Continue supporting the workforce through staffing coordination, payroll, compliance, and client engagement where applicable." }
];

const SUPPORT_CATEGORIES = [
  "Manufacturing",
  "Engineering",
  "Oil & Gas",
  "EPC / EPCM",
  "Automotive & Auto Components",
  "Industrial Automation",
  "Electrical & Electronics",
  "Industrial Equipment"
];

const FAQS = [
  { q: "What types of positions do you recruit for?", a: "We support hiring across engineering, manufacturing, plant operations, quality, production, maintenance, supply chain, sales, HR, finance, administration, leadership, and other business functions." },
  { q: "Do you provide PAN India recruitment support?", a: "Yes. We support recruitment and workforce requirements across major industrial and business locations in India." },
  { q: "Do you provide payroll and statutory compliance services?", a: "Yes. Our payroll and compliance services cover payroll processing, statutory requirements, employee documentation, reporting, and related workforce administration." },
  { q: "Can you manage contract employees on our behalf?", a: "Yes. Our contract staffing solutions can include sourcing, onboarding, payroll administration, statutory compliance, attendance coordination, and ongoing workforce support." },
  { q: "Can QuantaStrat provide an RPO team?", a: "Yes. We can provide dedicated recruitment support aligned with your internal HR or Talent Acquisition processes and hiring requirements." }
];

/* ──────────────────────── SERVICE CARD ──────────────────────── */

function ServiceCard({
  service,
  isOpen,
  onToggle
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const panelId = `service-panel-${id}`;
  const triggerId = `service-trigger-${id}`;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover">
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep" />

      {/* Clickable header */}
      <button
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-8 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-inset md:p-10"
      >
        <div className="flex items-start gap-5 md:gap-6">
          {/* Icon */}
          <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm">
            <service.Icon className="h-6 w-6 text-white" />
          </div>
          {/* Title area */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-bold tracking-wide text-brand-orange/60">{service.number}</span>
            </div>
            <h3 className="mt-1 font-display text-xl font-bold text-brand-ink md:text-2xl">{service.title}</h3>
            <p className="mt-2 max-w-2xl text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
        {/* Expand indicator */}
        <div className="mt-1 flex-shrink-0">
          <div className={`flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 transition-all duration-300 ${isOpen ? "bg-brand-orange border-brand-orange" : "bg-white"}`}>
            <ChevronDown className={`h-5 w-5 transition-all duration-300 ${isOpen ? "rotate-180 text-white" : "text-brand-orange"}`} />
          </div>
        </div>
      </button>

      {/* Expandable detail area */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="grid transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-orange-100/60 px-8 pb-8 pt-6 md:px-10 md:pb-10">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left: Scope of Work */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Scope of Work</div>
                <ul className="mt-4 space-y-2.5">
                  {service.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Client Value */}
              <div className="flex flex-col">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Client Value</div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">{service.clientValue}</p>
                <div className="mt-auto pt-6">
                  <Link
                    href={service.ctaHref}
                    className="btn-primary inline-flex"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ──────────────────────── MAIN COMPONENT ──────────────────────── */

export default function ServicesContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* ───── Service Offerings ───── */}
      <section className="relative py-24">
        <div className="container-x">
          <div className="eyebrow mb-5">Service offerings</div>
          <h2 className="heading-lg max-w-3xl font-bold text-brand-ink">
            Solutions for Every <span className="text-gradient-orange">Workforce Need.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            From critical engineering hires to workforce management and compliance, our services are designed to support businesses across the complete employee lifecycle.
          </p>

          <div className="mt-14 space-y-5">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── How We Deliver ───── */}
      <section className="relative py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="container-x relative">
          <div className="eyebrow mb-5">How we deliver</div>
          <h2 className="heading-lg max-w-3xl font-bold text-brand-ink">
            A Structured Approach to <span className="text-gradient-orange">Workforce Solutions.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            Our approach combines business understanding, specialized sourcing, structured evaluation, and ongoing workforce support to deliver reliable outcomes.
          </p>

          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="font-display text-5xl font-bold text-orange-100 transition-colors duration-300 group-hover:text-brand-orange">{p.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold text-brand-ink">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Who We Support ───── */}
      <section className="relative py-16">
        <div className="container-x text-center">
          <div className="eyebrow mx-auto mb-5">Industries</div>
          <h2 className="heading-md mx-auto max-w-3xl font-bold text-brand-ink">
            Supporting Businesses Across Key <span className="text-gradient-orange">Industrial & Business Functions</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {SUPPORT_CATEGORIES.map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full border border-orange-100/80 bg-white px-5 py-2.5 text-sm font-medium text-brand-ink shadow-soft transition-all duration-300 hover:border-brand-orange/40 hover:shadow-card"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
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
