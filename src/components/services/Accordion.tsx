"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
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
