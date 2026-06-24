import { Zap, Users, Award, MapPin } from "lucide-react";

const CARDS = [
  { Icon: Zap, title: "Fast Hiring", desc: "Streamlined sourcing and screening cut your time-to-hire by up to 50%." },
  { Icon: Users, title: "Skilled Talent Pool", desc: "120,000+ pre-vetted professionals across IT, Non-IT and Manufacturing." },
  { Icon: Award, title: "Industry Expertise", desc: "Specialist recruiters with deep domain knowledge across 8+ industries." },
  { Icon: MapPin, title: "PAN India Support", desc: "Local presence across Tier 1, 2 and 3 cities with rapid mobilization." }
];

const MINI_STATS = [
  { k: "98%", v: "Offer Acceptance" },
  { k: "<7d", v: "First Shortlist" },
  { k: "24/7", v: "Account Ops" }
];

export default function Overview() {
  return (
    <section className="relative py-28">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-6">Who we are</div>
          <h2 className="heading-lg font-bold text-brand-ink">
            A staffing partner engineered for{" "}
            <span className="text-gradient-orange">modern enterprises.</span>
          </h2>
          <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
            We combine rigorous vetting, technology-led sourcing and human-first consulting to deliver people who
            actually move your business forward. From single hires to enterprise programs, we build teams that compound value.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {MINI_STATS.map((s) => (
              <div key={s.v} className="rounded-2xl border border-orange-100/80 bg-white p-4 shadow-card">
                <div className="text-2xl font-bold text-gradient-orange">{s.k}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-gray-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {CARDS.map((c, i) => (
              <div key={c.title} className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                {/* Top gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10">
                  <c.Icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.desc}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-orange-200/60 to-transparent" />
                <div className="mt-4 text-[11px] font-medium uppercase tracking-widest text-gray-400">0{i + 1} / 04</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
