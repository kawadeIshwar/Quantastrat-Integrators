export default function GradientOrbs({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-32 -left-24 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-orange-200/30 to-amber-100/15 blur-[80px]" />
      <div className="absolute top-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-orange-100/40 to-orange-50/15 blur-[80px]" />
      <div className="absolute -bottom-20 left-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-t from-amber-100/25 to-orange-50/10 blur-[80px]" />
    </div>
  );
}
