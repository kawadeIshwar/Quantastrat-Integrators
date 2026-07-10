"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center"
      aria-label="Quantastrat Integrators home"
      suppressHydrationWarning
    >
      <img
        src="/logo.png"
        alt="Quantastrat Integrators Logo"
        className="h-10 w-auto"
        width={180}
        height={40}
        suppressHydrationWarning
      />
    </Link>
  );
}
