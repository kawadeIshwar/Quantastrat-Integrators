"use client";

import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Factory,
  Building2,
  Timer,
  UserCheck,
} from "lucide-react";
import { JOBS, JOB_CATEGORIES, JOB_LOCATIONS, type Job } from "@/lib/jobs";

const PER_PAGE = 6;

/* ─── Filter option sets ─── */
const INDUSTRIES = ["All Industries", "IT", "Non-IT", "Manufacturing", "Leadership"] as const;
const POSITIONS = ["All Positions", ...Array.from(new Set(JOBS.map((j) => j.title)))] as const;
const LOCATIONS = ["All Locations", ...JOB_LOCATIONS.filter((l) => l !== "All")] as const;
const EXPERIENCES = ["All Experience", "0-3 years", "3-6 years", "4-7 years", "5-8 years", "6-9 years", "7-10 years", "8-12 years", "10-15 years", "12-18 years"] as const;
const EMPLOYMENT_TYPES = ["All Types", "Full-time", "Contract", "Hybrid", "Remote"] as const;

const POPULAR_SEARCHES = [
  "Production Engineer",
  "Quality Engineer",
  "Mechanical Engineer",
  "Design Engineer",
  "Plant Manager",
  "HR Executive",
];

/* ─── Dropdown component ─── */
type DropdownProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
};

function FilterDropdown({ icon, label, value, options, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative flex-1 min-w-[160px]">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center gap-2.5 rounded-xl border bg-white px-4 py-3 text-left transition-all duration-200 ${open
          ? "border-brand-orange shadow-md"
          : "border-gray-200 hover:border-gray-300 shadow-sm"
          }`}
      >
        <span className="text-gray-400 flex-shrink-0">{icon}</span>
        <span className="flex-1 min-w-0">
          <span className="block text-xs font-semibold text-gray-800 leading-tight">{label}</span>
          <span className="block text-[11px] text-gray-400 leading-tight truncate">{value}</span>
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+6px)] z-50 w-full min-w-[200px] max-h-60 overflow-y-auto rounded-xl border border-gray-200 bg-white py-1 shadow-lg animate-in fade-in slide-in-from-top-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${value === opt
                ? "bg-brand-orange/10 text-brand-orange font-medium"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main board ─── */
export default function JobsBoard() {
  const [q, setQ] = useState("");
  const [industry, setIndustry] = useState("All Industries");
  const [position, setPosition] = useState("All Positions");
  const [loc, setLoc] = useState("All Locations");
  const [exp, setExp] = useState("All Experience");
  const [empType, setEmpType] = useState("All Types");
  const [page, setPage] = useState(1);

  const resetPage = useCallback(() => setPage(1), []);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return JOBS.filter((j) => {
      const matchQ =
        !ql ||
        j.title.toLowerCase().includes(ql) ||
        j.skills.some((s) => s.toLowerCase().includes(ql)) ||
        j.location.toLowerCase().includes(ql);
      const matchIndustry =
        industry === "All Industries" || j.category === industry;
      const matchPosition =
        position === "All Positions" || j.title === position;
      const matchLoc =
        loc === "All Locations" ||
        j.location.toLowerCase().includes(loc.toLowerCase());
      const matchExp =
        exp === "All Experience" || j.experience === exp;
      const matchType =
        empType === "All Types" || j.type === empType;
      return matchQ && matchIndustry && matchPosition && matchLoc && matchExp && matchType;
    });
  }, [q, industry, position, loc, exp, empType]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const handlePopularSearch = (term: string) => {
    setQ(term);
    setPage(1);
  };

  return (
    <section className="relative pt-[45px] pb-20">
      <div className="container-x">
        {/* ── Search panel ── */}
        <div className="mx-auto max-w-7xl">
          {/* Top orange line accent */}
          <div className="h-1 rounded-t-2xl bg-gradient-to-r from-brand-orange to-brand-deep" />

          <div className="rounded-b-2xl border border-t-0 border-gray-200/80 bg-white px-6 py-6 shadow-lg md:px-8 md:py-8">
            {/* Search input + button */}
            <div className="flex items-center gap-3">
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 transition-all focus-within:border-brand-orange focus-within:bg-white focus-within:shadow-sm">
                <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <input
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value);
                    resetPage();
                  }}
                  placeholder="Search by job title, skill, company or location"
                  className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  aria-label="Search jobs"
                />
                {q && (
                  <button
                    onClick={() => {
                      setQ("");
                      resetPage();
                    }}
                    className="text-xs font-medium text-gray-400 hover:text-brand-orange whitespace-nowrap"
                  >
                    Clear
                  </button>
                )}
              </div>
              <button
                className="flex-shrink-0 rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-brand-deep hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                Search Jobs
              </button>
            </div>

            {/* Filter dropdowns */}
            <div className="mt-5 flex flex-wrap gap-3">
              <FilterDropdown
                icon={<Factory className="h-4 w-4" />}
                label="Industry"
                value={industry}
                options={INDUSTRIES}
                onChange={(v) => { setIndustry(v); resetPage(); }}
              />
              <FilterDropdown
                icon={<UserCheck className="h-4 w-4" />}
                label="Position"
                value={position}
                options={POSITIONS}
                onChange={(v) => { setPosition(v); resetPage(); }}
              />
              <FilterDropdown
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value={loc}
                options={LOCATIONS}
                onChange={(v) => { setLoc(v); resetPage(); }}
              />
              <FilterDropdown
                icon={<Timer className="h-4 w-4" />}
                label="Experience"
                value={exp}
                options={EXPERIENCES}
                onChange={(v) => { setExp(v); resetPage(); }}
              />
              <FilterDropdown
                icon={<Building2 className="h-4 w-4" />}
                label="Employment Type"
                value={empType}
                options={EMPLOYMENT_TYPES}
                onChange={(v) => { setEmpType(v); resetPage(); }}
              />
            </div>

            {/* Popular Searches */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 mr-1">
                Popular Searches:
              </span>
              {POPULAR_SEARCHES.map((term) => (
                <button
                  key={term}
                  onClick={() => handlePopularSearch(term)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-all duration-200 hover:border-brand-orange/40 hover:text-brand-orange hover:bg-brand-orange/5"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mx-auto mt-8 max-w-7xl flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            {filtered.length} role{filtered.length === 1 ? "" : "s"} found
          </span>
          {(industry !== "All Industries" ||
            position !== "All Positions" ||
            loc !== "All Locations" ||
            exp !== "All Experience" ||
            empType !== "All Types" ||
            q) && (
              <button
                onClick={() => {
                  setQ("");
                  setIndustry("All Industries");
                  setPosition("All Positions");
                  setLoc("All Locations");
                  setExp("All Experience");
                  setEmpType("All Types");
                  resetPage();
                }}
                className="text-xs font-medium text-brand-orange hover:underline"
              >
                Clear all filters
              </button>
            )}
        </div>

        {/* Job grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              onClick={() => {
                setQ("");
                setIndustry("All Industries");
                setPosition("All Positions");
                setLoc("All Locations");
                setExp("All Experience");
                setEmpType("All Types");
                resetPage();
              }}
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
                  className={`h-10 w-10 rounded-xl text-sm font-medium transition-all duration-200 ${active
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
