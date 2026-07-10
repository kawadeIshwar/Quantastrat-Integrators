import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Briefcase, Clock, MapPin, Check } from "lucide-react";
import { JOBS } from "@/lib/jobs";
import GradientOrbs from "@/components/ui/GradientOrbs";
import JobDetailContent from "./JobDetailContent";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const job = JOBS.find((j) => j.slug === params.slug);
  if (!job) return { title: "Job not found — Quantastrat" };
  return {
    title: `${job.title} — Quantastrat Careers`,
    description: job.description
  };
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = JOBS.find((j) => j.slug === params.slug);
  if (!job) return notFound();

  const crm = process.env.NEXT_PUBLIC_CRM_APPLY_URL || "https://crm.example.com/apply";
  const applyUrl = `${crm}?job=${encodeURIComponent(job.slug)}`;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-hero-gradient pt-32">
        <GradientOrbs />
        <div className="container-x relative z-10">
          <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-brand-orange">
            <ArrowLeft className="h-4 w-4" /> All openings
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-brand-orange/20 bg-brand-orange/5 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-brand-orange">{job.category}</span>
            <span className="rounded-full border border-brand-orange/20 bg-brand-orange/5 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-brand-orange">{job.type}</span>
          </div>
          <h1 className="heading-xl mt-6 max-w-4xl font-bold text-brand-ink">{job.title}</h1>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-orange" /> {job.location}</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-brand-orange" /> {job.experience}</span>
            <span className="inline-flex items-center gap-2"><Briefcase className="h-4 w-4 text-brand-orange" /> {job.type}</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={applyUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Apply Now <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-orange-100/60 bg-white p-8 shadow-card md:p-10">
              <h2 className="font-display text-2xl font-bold text-brand-ink">About the role</h2>
              <p className="mt-3 text-gray-600">{job.description}</p>

              <h3 className="mt-10 font-display text-xl font-semibold text-brand-ink">Responsibilities</h3>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl font-semibold text-brand-ink">Requirements</h3>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <JobDetailContent job={job} applyUrl={applyUrl} />
          </aside>
        </div>
      </section>
    </>
  );
}
