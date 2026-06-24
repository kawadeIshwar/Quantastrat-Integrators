"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MapPin, Clock, Briefcase, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { JOBS, JOB_CATEGORIES, JOB_LOCATIONS, type Job } from "@/lib/jobs";

const PER_PAGE = 6;

export default function JobsBoard() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [loc, setLoc] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return JOBS.filter((j) => {
      const matchQ = !ql ||
        j.title.toLowerCase().includes(ql) ||
        j.skills.some((s) => s.toLowerCase().includes(ql)) ||
        j.location.toLowerCase().includes(ql);
      const matchCat = cat === "All" || j.category === cat;
      const matchLoc = loc === "All" || j.location.toLowerCase().includes(loc.toLowerCase());
      return matchQ && matchCat && matchLoc;
    });
  }, [q, cat, loc]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  return (
    <section className="relative py-20">
      <div className="container-x">
        {/* Search bar */}
        <div className="relative mx-auto max-w-2xl">
          <div className="flex items-center gap-3 rounded-2xl border border-orange-100/60 bg-white px-5 shadow-card transition-shadow focus-within:shadow-card-hover">
            <Search className="h-5 w-5 text-brand-orange" />
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Search by job title, skill or city..."
              className="w-full bg-transparent py-4 text-base text-brand-ink placeholder:text-gray-400 focus:outline-none"
              aria-label="Search jobs"
            />
            {q && (
              <button onClick={() => { setQ(""); setPage(1); }} className="text-xs font-medium text-gray-400 hover:text-brand-orange">
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(JOB_CATEGORIES as readonly string[]).map((c) => (
            <button
              key={c}
              onClick={() => { setCat(c); setPage(1); }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                cat === c
                  ? "bg-gradient-to-r from-brand-orange to-brand-deep text-white shadow-glow-sm"
                  : "border border-orange-100/60 bg-white text-gray-600 hover:border-brand-orange/40 hover:text-brand-orange"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Location filter + results count */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-500">Location:</span>
            <div className="flex flex-wrap gap-1.5">
              {(JOB_LOCATIONS as readonly string[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLoc(l); setPage(1); }}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    loc === l
                      ? "bg-brand-orange/10 text-brand-orange border border-brand-orange/30"
                      : "border border-orange-100/60 bg-white text-gray-500 hover:text-brand-orange hover:border-brand-orange/30"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <span className="text-sm font-medium text-gray-500">
            {filtered.length} role{filtered.length === 1 ? "" : "s"} found
          </span>
        </div>

        {/* Job grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {slice.map((j) => (
            <JobCard key={j.slug} job={j} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 rounded-3xl border border-orange-100/60 bg-white p-14 text-center shadow-card">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange/10">
              <Search className="h-7 w-7 text-brand-orange" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-ink">No matching roles</h3>
            <p className="mt-2 text-gray-500">Try clearing filters or contact us — new roles open every week.</p>
            <button
              onClick={() => { setQ(""); setCat("All"); setLoc("All"); setPage(1); }}
              className="btn-primary mt-6"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage(Math.max(1, current - 1))}
              disabled={current === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100/60 bg-white text-gray-500 transition-all hover:border-brand-orange hover:text-brand-orange disabled:opacity-40 disabled:hover:border-orange-100/60 disabled:hover:text-gray-500"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: pages }).map((_, i) => {
              const n = i + 1;
              const active = n === current;
              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`h-10 w-10 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-br from-brand-orange to-brand-deep text-white shadow-glow-sm"
                      : "border border-orange-100/60 bg-white text-gray-600 hover:border-brand-orange hover:text-brand-orange"
                  }`}
                >
                  {n}
                </button>
              );
            })}
            <button
              onClick={() => setPage(Math.min(pages, current + 1))}
              disabled={current === pages}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100/60 bg-white text-gray-500 transition-all hover:border-brand-orange hover:text-brand-orange disabled:opacity-40 disabled:hover:border-orange-100/60 disabled:hover:text-gray-500"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100/60 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-brand-orange to-brand-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> {job.category}
          </div>
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-brand-orange/10">
            <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange" />
          </div>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-brand-ink transition-colors group-hover:text-brand-orange">
          {job.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500 leading-relaxed">{job.description}</p>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand-orange" /> {job.location}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-orange" /> {job.experience}</span>
            <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-brand-orange" /> {job.type}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {job.skills.slice(0, 4).map((s) => (
              <span key={s} className="rounded-lg border border-orange-100/60 bg-brand-cream px-2.5 py-1 text-[11px] font-medium text-gray-600">
                {s}
              </span>
            ))}
            {job.skills.length > 4 && (
              <span className="rounded-lg border border-orange-100/60 bg-brand-cream px-2.5 py-1 text-[11px] font-medium text-brand-orange">
                +{job.skills.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
