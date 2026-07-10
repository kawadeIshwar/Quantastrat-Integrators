import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  title: "Quantastrat Integrators — Connecting Businesses with Exceptional Talent",
  description:
    "Premium recruitment and staffing solutions across IT, Non-IT, Manufacturing and Enterprise sectors. PAN India coverage with rigorous vetting and fast hiring.",
  keywords: [
    "Recruitment",
    "Staffing",
    "IT Hiring",
    "RPO",
    "Executive Search",
    "Manufacturing Hiring",
    "Quantastrat",
    "PAN India Hiring"
  ],
  metadataBase: new URL("https://quantastrat.com"),
  openGraph: {
    title: "Quantastrat Integrators",
    description:
      "Connecting Businesses with Exceptional Talent across India and beyond.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Fix hydration mismatch caused by browser extensions (Grammarly, Google Translate, etc.)
          injecting <span> tags into <a> elements before React hydrates.
          This script runs synchronously before React, removing those injected nodes.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.querySelectorAll('a > span:not([class]):not([id])').forEach(function(s) {
                  while (s.firstChild) s.parentNode.insertBefore(s.firstChild, s);
                  s.remove();
                });
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ScrollToTop />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
