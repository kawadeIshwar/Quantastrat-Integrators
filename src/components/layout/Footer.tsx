import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-brand-orange via-brand-deep to-brand-orange" />

      <div className="bg-brand-ink">
        <div className="container-x grid gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-orange to-brand-deep">
                <span className="font-display text-lg font-bold text-white">Q</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-semibold tracking-wide text-white">QUANTASTRAT</span>
                <span className="text-[10px] font-medium tracking-[0.3em] text-brand-orange">INTEGRATORS</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Quantastrat Integrators is a premium recruitment and staffing partner connecting enterprises with exceptional talent across IT, Non-IT, manufacturing and beyond.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  aria-label="social link"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:text-brand-orange"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li><Link className="transition-colors hover:text-brand-orange" href="/about">About Us</Link></li>
              <li><Link className="transition-colors hover:text-brand-orange" href="/services">Services</Link></li>
              <li><Link className="transition-colors hover:text-brand-orange" href="/careers">Openings</Link></li>
              <li><Link className="transition-colors hover:text-brand-orange" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>Permanent Hiring</li>
              <li>Contract Staffing</li>
              <li>RPO &amp; Executive Search</li>
              <li>Payroll &amp; Compliance</li>
              <li>IT / Non-IT / Manufacturing</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-orange" />Pan India · HQ Bengaluru, IN</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-orange" />hello@quantastrat.com</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-orange" />+91 80000 00000</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div aria-hidden className="mx-auto h-px w-[92%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-gray-500 md:flex-row">
            <p>© {new Date().getFullYear()} Quantastrat Integrators. All rights reserved.</p>
            <p className="flex items-center gap-4">
              <Link href="#" className="transition-colors hover:text-brand-orange">Privacy</Link>
              <Link href="#" className="transition-colors hover:text-brand-orange">Terms</Link>
              <Link href="#" className="transition-colors hover:text-brand-orange">Cookies</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
