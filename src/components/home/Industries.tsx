import Link from "next/link";
import {
  Factory, Droplets, Building, Car, Cpu, Wrench, Zap, Package
} from "lucide-react";

const INDUSTRIES = [
  { Icon: Factory,   label: "Manufacturing",               slug: "manufacturing" },
  { Icon: Droplets,  label: "Oil & Gas",                   slug: "oil-gas" },
  { Icon: Building,  label: "EPC & EPCM",                  slug: "epc" },
  { Icon: Car,       label: "Automotive & Auto Components", slug: "automotive" },
  { Icon: Cpu,       label: "Industrial Automation",        slug: "industrial-automation" },
  { Icon: Wrench,    label: "Engineering",                  slug: "engineering" },
  { Icon: Zap,       label: "Electrical & Electronics",     slug: "electrical-electronics" },
  { Icon: Package,   label: "Industrial Equipment",         slug: "industrial-equipment" },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-brand-orange py-14">
      {/* Warm light overlay top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[22rem] w-[22rem] rounded-full bg-white/10 blur-[90px]"
      />
      {/* Warm light overlay bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-[18rem] w-[18rem] rounded-full bg-amber-900/20 blur-[80px]"
      />

      <div className="container-x relative">
        {/* Header — centered */}
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-snug text-white md:text-4xl">
            Deep domain expertise across{" "}
            <span className="text-brand-ink">high-growth industries.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-orange-100">
            From silicon to shop-floor — specialised talent at scale across the sectors driving India&apos;s next decade.
          </p>
        </div>

        {/* Industry pills grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {INDUSTRIES.map((it) => (
            <Link
              key={it.label}
              href={`/services/${it.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 transition-colors group-hover:bg-white">
                <it.Icon className="h-5 w-5 text-white transition-colors group-hover:text-brand-orange" />
              </div>
              <span className="text-sm font-medium leading-tight text-white">
                {it.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
