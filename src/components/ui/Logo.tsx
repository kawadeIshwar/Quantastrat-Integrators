import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Quantastrat Integrators home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm">
        <span className="font-display text-lg font-bold text-white">Q</span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-wide text-gray-900">QUANTASTRAT</span>
          <span className="text-[10px] font-medium tracking-[0.3em] text-brand-orange">INTEGRATORS</span>
        </span>
      )}
    </Link>
  );
}
