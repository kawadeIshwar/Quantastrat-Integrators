"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Openings" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${scrolled
              ? "border-orange-100 bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(255,107,0,0.08)]"
              : "border-transparent bg-transparent"
            }`}
        >
          <Logo />
          <nav className="hidden items-center gap-0.5 md:flex">
            {NAV.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${active
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "text-gray-600 hover:bg-orange-50 hover:text-brand-orange"
                    }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn-primary hidden md:inline-flex">
              Hire Talent <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-gray-700 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="container-x md:hidden">
          <div className="mt-3 overflow-hidden rounded-3xl border border-orange-100 bg-white p-4 shadow-lg">
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="block rounded-2xl px-4 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-brand-orange"
                >
                  {n.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-2 justify-center">
                Hire Talent <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
