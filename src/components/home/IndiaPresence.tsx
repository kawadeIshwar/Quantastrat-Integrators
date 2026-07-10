"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Factory, Droplets, Building, Car, Cpu, Wrench, Zap, Package,
} from "lucide-react";

/* ─── Industry palette ─────────────────────────────────────── */
const IND_META: Record<string, { Icon: React.ElementType; color: string }> = {
  Manufacturing:              { Icon: Factory,  color: "#ff6b00" },
  "Oil & Gas":                { Icon: Droplets, color: "#0ea5e9" },
  "EPC & EPCM":               { Icon: Building, color: "#8b5cf6" },
  Automotive:                 { Icon: Car,      color: "#10b981" },
  "Industrial Automation":    { Icon: Cpu,      color: "#f59e0b" },
  Engineering:                { Icon: Wrench,   color: "#ec4899" },
  "Electrical & Electronics": { Icon: Zap,      color: "#06b6d4" },
  "Industrial Equipment":     { Icon: Package,  color: "#84cc16" },
};

/* ─── Regional hubs ─────────────────────────────────────────── */
// coordinates: [longitude, latitude]
const HUBS = [
  {
    id: "bengaluru",
    name: "Bengaluru",
    role: "HQ · South India Hub",
    coordinates: [77.6, 12.97] as [number, number],
    industries: ["Manufacturing", "Industrial Automation", "Engineering", "Electrical & Electronics"],
  },
  {
    id: "pune",
    name: "Pune",
    role: "West India Hub",
    coordinates: [73.86, 18.52] as [number, number],
    industries: ["Automotive", "Manufacturing", "Engineering", "Industrial Equipment"],
  },
  {
    id: "mumbai",
    name: "Mumbai",
    role: "Financial Capital",
    coordinates: [72.88, 19.08] as [number, number],
    industries: ["EPC & EPCM", "Oil & Gas", "Engineering"],
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    role: "Gujarat Industrial Corridor",
    coordinates: [72.57, 23.03] as [number, number],
    industries: ["Manufacturing", "Industrial Equipment", "Automotive", "EPC & EPCM"],
  },
  {
    id: "delhi-ncr",
    name: "Delhi NCR",
    role: "North India Hub",
    coordinates: [77.1, 28.7] as [number, number],
    industries: ["Manufacturing", "Engineering", "Industrial Automation", "Electrical & Electronics"],
  },
  {
    id: "chennai",
    name: "Chennai",
    role: "South East Hub",
    coordinates: [80.28, 13.08] as [number, number],
    industries: ["Automotive", "Manufacturing", "Electrical & Electronics", "Engineering"],
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    role: "Telangana Industrial Hub",
    coordinates: [78.48, 17.38] as [number, number],
    industries: ["Industrial Automation", "Manufacturing", "EPC & EPCM"],
  },
  {
    id: "kolkata",
    name: "Kolkata",
    role: "East India Hub",
    coordinates: [88.36, 22.57] as [number, number],
    industries: ["Manufacturing", "Engineering", "Industrial Equipment"],
  },
  {
    id: "jamshedpur",
    name: "Jamshedpur",
    role: "Steel & Heavy Engineering",
    coordinates: [86.19, 22.8] as [number, number],
    industries: ["Manufacturing", "Engineering", "EPC & EPCM"],
  },
  {
    id: "vizag",
    name: "Visakhapatnam",
    role: "East Coast Industrial Hub",
    coordinates: [83.3, 17.7] as [number, number],
    industries: ["Oil & Gas", "Manufacturing", "EPC & EPCM"],
  },
  {
    id: "ludhiana",
    name: "Ludhiana",
    role: "Punjab Industrial Belt",
    coordinates: [75.86, 30.9] as [number, number],
    industries: ["Automotive", "Industrial Equipment", "Manufacturing"],
  },
  {
    id: "surat",
    name: "Surat",
    role: "Diamond & Textile Belt",
    coordinates: [72.84, 21.19] as [number, number],
    industries: ["Manufacturing", "Industrial Equipment"],
  },
];

type Hub = typeof HUBS[number];

/* ─── Lazy-load the heavy map (avoids SSR issues) ──────────── */
const MapChart = dynamic(() => import("./IndiaMapChart"), { ssr: false, loading: () => <MapSkeleton /> });

function MapSkeleton() {
  return (
    <div className="flex h-[480px] w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-orange-200 border-t-brand-orange" />
    </div>
  );
}

export default function IndiaPresence() {
  const [active, setActive] = useState<Hub>(HUBS[0]);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf6] via-orange-50/30 to-[#fffaf6] pointer-events-none" />

      <div className="container-x relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4">Pan India Presence</span>
          <h2 className="heading-lg font-bold text-brand-ink mt-4">
            Industry presence across{" "}
            <span className="text-gradient-orange">every growth corridor</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            From automotive belts to oil &amp; gas basins — our recruiters are embedded
            in India&apos;s most industrially active regions, delivering the right talent
            where it&apos;s needed most.
          </p>
        </div>

        {/* Main layout: Map + Sidebar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] items-start">

          {/* ── MAP ── */}
          <div className="relative flex items-center justify-center min-h-[480px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-72 w-72 rounded-full bg-brand-orange/8 blur-3xl" />
            </div>
            <MapChart hubs={HUBS} activeId={active.id} onSelect={setActive} />
          </div>

          {/* ── SIDEBAR ── */}
          <div className="flex flex-col gap-4">
            {/* Active hub card */}
            <div className="rounded-3xl border border-orange-200 bg-white shadow-card overflow-hidden">
              <div className="bg-gradient-to-r from-brand-orange to-brand-deep px-6 py-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200 mb-1">
                  Selected Region
                </div>
                <h3 className="text-xl font-bold text-white">{active.name}</h3>
                <p className="text-sm text-orange-100 mt-0.5">{active.role}</p>
              </div>

              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Industries we serve here
                </p>
                <div className="flex flex-col gap-3">
                  {active.industries.map((ind) => {
                    const meta = IND_META[ind];
                    if (!meta) return null;
                    const { Icon, color } = meta;
                    return (
                      <div key={ind} className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: color + "18" }}
                        >
                          <Icon className="h-4 w-4" style={{ color }} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{ind}</span>
                        <div className="ml-auto h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Hub quick-nav pills */}
            <div className="rounded-3xl border border-orange-100/60 bg-white p-5 shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Jump to region
              </p>
              <div className="flex flex-wrap gap-2">
                {HUBS.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setActive(hub)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                      active.id === hub.id
                        ? "bg-brand-orange text-white shadow-glow-sm"
                        : "border border-orange-100 bg-orange-50 text-gray-600 hover:border-brand-orange hover:text-brand-orange"
                    }`}
                  >
                    {hub.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry legend */}
            <div className="rounded-3xl border border-orange-100/60 bg-white p-5 shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Industry legend
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(IND_META).map(([name, { color }]) => (
                  <div key={name} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-[11px] text-gray-500 leading-tight">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "12+", v: "Industrial Hubs" },
            { k: "8", v: "Core Industries" },
            { k: "30+", v: "Cities Covered" },
            { k: "Pan India", v: "Talent Reach" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-orange-100/80 bg-white p-5 text-center shadow-card"
            >
              <div className="text-2xl font-bold text-gradient-orange">{s.k}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-gray-500">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
