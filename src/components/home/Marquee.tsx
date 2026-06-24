const LOGOS = ["TATA", "Reliance", "Infosys", "HDFC", "Wipro", "Mahindra", "ITC", "Larsen & Toubro", "Adani", "Bajaj"];

export default function Marquee() {
  return (
    <section className="relative border-y border-orange-100 bg-white py-10">
      <div className="container-x mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
        <span>Trusted by industry leaders</span>
        <span className="hidden md:block">PAN India · 500+ Enterprises</span>
      </div>
      <div className="container-x flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {LOGOS.map((l) => (
          <span key={l} className="font-display text-xl font-semibold text-gray-300">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
