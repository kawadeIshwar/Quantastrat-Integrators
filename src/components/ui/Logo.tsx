import Link from "next/link";
import Image from "next/image";

export default function Logo({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Quantastrat Integrators home">
      <Image
        src="/logo.png"
        alt="Quantastrat Integrators Logo"
        className={`${compact ? "h-9 w-9" : "h-10 w-auto"} ${dark ? "brightness-0 invert" : ""}`}
        width={compact ? 36 : 180}
        height={compact ? 36 : 40}
      />
    </Link>
  );
}
