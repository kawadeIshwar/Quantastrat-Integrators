# Quantastrat Integrators — Premium Recruitment Website

A premium, motion-rich Next.js website for **Quantastrat Integrators** — a recruitment & staffing brand. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP and Lenis smooth scrolling.

## ✨ Features

- **Cinematic Home** — hero with split-text reveal, floating stat cards, mouse-reactive glow, parallax sections, sticky storytelling, infinite marquees, 3D tilt service cards, animated testimonials and a bold final CTA.
- **About** — mission/vision, animated stats counters, values grid, scroll-driven timeline and India coverage visual.
- **Services** — 8 services with scope/benefits, animated hiring process, glassy FAQ accordion.
- **Careers** — searchable, filterable, paginated jobs board with category & location filters and a polished detail page that deep-links to your CRM apply URL.
- **Contact** — premium contact form with floating labels, validation states, embedded map, and a working Nodemailer API route (`/api/contact`).
- **Global polish** — sticky blur navbar with active underline, animated mobile menu, custom cursor (desktop), scroll progress bar, premium dark footer, custom 404, sitemap & robots, SEO metadata everywhere.
- **Smooth scrolling** — Lenis-powered buttery scroll, Framer Motion scroll-linked transforms, prefers-reduced-motion respected.

## 🧱 Tech Stack

- Next.js 14 (App Router) · TypeScript · React 18
- Tailwind CSS 3 (custom brand theme + animations)
- Framer Motion · GSAP (available) · Lenis smooth scroll
- Lucide React icons
- Nodemailer (SMTP) for the contact form

## 🎨 Brand

| Token | Value |
| --- | --- |
| Orange | `#FF6B00` |
| Deep Orange | `#E85D04` |
| Black | `#0A0A0A` |
| Light Grey | `#F5F5F5` |
| Display font | Sora |
| Body font | Inter |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (optional for SMTP)
cp .env.example .env.local
# edit .env.local with your SMTP and CRM apply URL

# 3. Run the dev server
npm run dev
# → http://localhost:3000
```

### Production

```bash
npm run build
npm start
```

## ⚙️ Environment Variables

Defined in `.env.example`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
SMTP_FROM="Quantastrat <noreply@quantastrat.com>"
CONTACT_TO=hello@quantastrat.com

# Where "Apply Now" on a job redirects (CRM)
NEXT_PUBLIC_CRM_APPLY_URL=https://crm.example.com/apply
```

If SMTP isn't configured the API still accepts submissions and logs them server-side (dev-friendly).

## 🗂️ Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts        # Nodemailer SMTP endpoint
│   ├── about/page.tsx
│   ├── careers/
│   │   ├── page.tsx                # Jobs board
│   │   └── [slug]/page.tsx         # Job detail (static generated)
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── layout.tsx                  # Root layout + providers + nav/footer
│   ├── page.tsx                    # Home
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── about/About.tsx
│   ├── careers/JobsBoard.tsx
│   ├── common/PageHero.tsx
│   ├── contact/ContactSection.tsx
│   ├── home/                       # Hero, Overview, Services, Industries, WhyUs, Testimonials, FinalCTA, Marquee
│   ├── layout/                     # Navbar, Footer
│   ├── providers/SmoothScrollProvider.tsx
│   ├── services/ServicesContent.tsx
│   └── ui/                         # AnimatedText, Counter, CustomCursor, GradientOrbs, Logo, MagneticButton, Reveal, ScrollProgress
└── lib/jobs.ts                     # Sample jobs data (replace with CMS/API)
```

## 📝 Customisation

- **Jobs** — replace `src/lib/jobs.ts` with a fetch from your ATS / CMS / API. The page uses `generateStaticParams`, so any data source works.
- **Apply URL** — set `NEXT_PUBLIC_CRM_APPLY_URL`. The job slug is appended as `?job=<slug>`.
- **Logo** — swap `src/components/ui/Logo.tsx` with your finalised SVG/PNG.
- **Brand colours** — edit `tailwind.config.ts` → `theme.extend.colors.brand`.

## ♿ Accessibility & Performance

- Semantic HTML throughout, ARIA labels on interactive icons
- `prefers-reduced-motion` honored globally
- Touch / coarse-pointer devices skip the custom cursor
- Fonts loaded via `next/font` (Sora + Inter) with `display: swap`
- Lazy-loaded map iframe; mask-based marquees for perf

## 📦 Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint |

## 📄 License

© Quantastrat Integrators. All rights reserved.
