import Link from "next/link";
import {
  Factory, Droplets, Building, Car, Cpu, Wrench, Zap, Package
} from "lucide-react";

const INDUSTRIES = [
  { Icon: Factory, label: "Manufacturing", slug: "manufacturing" },
  { Icon: Droplets, label: "Oil & Gas", slug: "oil-gas" },
  { Icon: Building, label: "EPC & EPCM", slug: "epc" },
  { Icon: Car, label: "Automotive & Auto Components", slug: "automotive" },
  { Icon: Cpu, label: "Industrial Automation", slug: "industrial-automation" },
  { Icon: Wrench, label: "Engineering", slug: "engineering" },
  { Icon: Zap, label: "Electrical & Electronics", slug: "electrical-electronics" },
  { Icon: Package, label: "Industrial Equipment", slug: "industrial-equipment" }
];

export default function Industries() {
  return (
    <section className="relative py-16">
      <div className="container-x text-center">
        <h2 className="heading-lg mx-auto max-w-3xl font-bold text-brand-ink">
          Deep domain expertise across{" "}
          <span className="text-gradient-orange">high-growth industries.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-600">From silicon to shop-floor, we deliver specialised talent at scale across the sectors driving India&apos;s next decade.</p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {INDUSTRIES.map((it) => (
            <Link key={it.label} href={`/services/${it.slug}`} className="group flex flex-col items-center gap-4 rounded-3xl border border-orange-100/60 bg-white px-5 py-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-deep/10 transition-colors group-hover:from-brand-orange group-hover:to-brand-deep">
                <it.Icon className="h-6 w-6 text-brand-orange transition-colors group-hover:text-white" />
              </div>
              <span className="text-sm font-semibold text-brand-ink">{it.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
