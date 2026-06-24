import Link from "next/link";
import GradientOrbs from "@/components/ui/GradientOrbs";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-32">
      <GradientOrbs />
      <div className="container-x relative z-10 text-center">
        <div className="font-display text-[180px] font-semibold leading-none text-gradient-orange md:text-[260px]">404</div>
        <h1 className="mt-2 font-display text-3xl font-semibold text-gray-900 md:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-gray-600">The page you&apos;re looking for has moved or doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
