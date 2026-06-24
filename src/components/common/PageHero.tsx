import GradientOrbs from "@/components/ui/GradientOrbs";

export default function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[50svh] items-center overflow-hidden bg-hero-gradient pt-32">
      <GradientOrbs />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] dot-pattern opacity-30" />
      <div className="container-x relative z-10 pb-12">
        <div className="eyebrow mb-6">{eyebrow}</div>
        <h1 className="heading-xl max-w-5xl font-bold text-brand-ink">{title}</h1>
        {description && (
          <p className="mt-7 max-w-2xl text-lg text-gray-600 leading-relaxed md:text-xl">{description}</p>
        )}
      </div>
    </section>
  );
}
