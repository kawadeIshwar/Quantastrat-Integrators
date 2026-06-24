import { Star } from "lucide-react";

const QUOTES = [
  {
    quote: "Quantastrat consistently delivers high-quality engineering talent in record time. They feel like an extension of our TA team.",
    name: "Aarav Mehta",
    role: "VP Engineering, Fintech Unicorn"
  },
  {
    quote: "From plant floor to leadership, their manufacturing practice has helped us scale across three states with zero compliance issues.",
    name: "Priya Iyer",
    role: "CHRO, Manufacturing Major"
  },
  {
    quote: "The most consultative recruitment partner we've worked with. Honest market data, fast shortlists, exceptional candidate experience.",
    name: "Rohit Khanna",
    role: "Director — Talent, SaaS Company"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-brand-cream to-white">
      <div className="container-x text-center">
        <div className="mx-auto w-fit eyebrow mb-5">Loved by talent leaders</div>
        <h2 className="heading-lg mx-auto max-w-3xl font-bold text-brand-ink">
          What our partners{" "}
          <span className="text-gradient-orange">say about us.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3 text-left">
          {QUOTES.map((q) => (
            <article
              key={q.name}
              className="group relative overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Top gradient accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange via-brand-deep to-brand-orange" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-700">&ldquo;{q.quote}&rdquo;</p>
              <div className="mt-8 flex items-center gap-3 border-t border-orange-50 pt-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-deep font-display text-sm font-bold text-white">
                  {q.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">{q.name}</div>
                  <div className="text-xs text-gray-500">{q.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
