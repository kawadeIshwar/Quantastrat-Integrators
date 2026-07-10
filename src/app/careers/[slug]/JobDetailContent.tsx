"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Job } from "@/lib/jobs";

export default function JobDetailContent({ job, applyUrl }: { job: Job; applyUrl: string }) {
  const [postedDate, setPostedDate] = useState("");

  useEffect(() => {
    setPostedDate(new Date(job.postedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" }));
  }, [job.postedAt]);

  return (
    <div className="sticky top-32 rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card">
      <div className="text-xs uppercase tracking-[0.25em] text-gray-400">Quick details</div>
      <ul className="mt-4 space-y-3 text-sm text-gray-700">
        <li className="flex justify-between"><span className="text-gray-500">Location</span><span>{job.location}</span></li>
        <li className="flex justify-between"><span className="text-gray-500">Experience</span><span>{job.experience}</span></li>
        <li className="flex justify-between"><span className="text-gray-500">Type</span><span>{job.type}</span></li>
        <li className="flex justify-between"><span className="text-gray-500">Posted</span><span>{postedDate}</span></li>
      </ul>

      <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-400">Key skills</div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {job.skills.map((s) => (
          <span key={s} className="rounded-full border border-orange-100/60 bg-brand-cream px-2.5 py-1 text-[11px] font-medium text-gray-600">{s}</span>
        ))}
      </div>

      <a href={applyUrl} target="_blank" rel="noreferrer" className="btn-primary mt-7 w-full justify-center">
        Apply Now <ArrowUpRight className="h-4 w-4" />
      </a>
      <p className="mt-3 text-center text-[11px] text-gray-400">You&apos;ll be redirected to our secure applicant portal.</p>
    </div>
  );
}
