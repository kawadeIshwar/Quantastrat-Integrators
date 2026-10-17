"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  DraftingCompass,
  HardHat,
  Building2,
  Sparkles,
  ShieldCheck,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

/* ──────────────────────────── DATA ──────────────────────────── */

/* ── Engineering Services: scope tiles ── */
const SCOPE_TILES = [
  "Studies & concept screening",
  "Front-end engineering design",
  "Detailed & residual engineering",
  "Project management consultancy",
  "Construction & field support",
  "Commissioning support",
];

/* ── Engineering Services: discipline cards ── */
interface Discipline {
  icon: typeof Cpu;
  title: string;
  description: string;
  bullets: string[];
}

const DISCIPLINES: Discipline[] = [
  {
    icon: Cpu,
    title: "Process Engineering",
    description:
      "Process design, simulation, hydraulics, equipment sizing, and safety-study support from concept through commissioning.",
    bullets: [
      "Debottlenecking studies and process simulations",
      "Steady-state, dynamic, and multiphase hydraulics",
      "Flow assurance and surge analysis",
      "Equipment process design and sizing calculations",
      "Relief systems, flare design, PFDs and P&IDs",
      "NPSH calculations and process data sheets",
      "Pre-commissioning and commissioning assistance",
      "Line, pump, control valve, TCV, PCV and PSV calculations",
      "HAZOP, HAZID, and SIL documentation and participation",
    ],
  },
  {
    icon: DraftingCompass,
    title: "Mechanical & HVAC",
    description:
      "Mechanical equipment engineering, procurement support, fabrication detail, and HVAC design.",
    bullets: [
      "Static, rotating, and packaged equipment sizing and selection",
      "Heat exchangers and fired heaters",
      "Pressure vessels, columns, and tanks to ASME VIII Divisions 1 & 2 and API 650 & 620",
      "Equipment design, handling, drawings, and specifications",
      "Rotating equipment data sheets and procurement support",
      "Fabrication drawings and bills of quantities",
      "Mechanical data sheets",
      "Material requisitions, technical bid evaluation, and vendor follow-up",
      "HVAC design",
    ],
  },
  {
    icon: HardHat,
    title: "Piping & Pipelines",
    description:
      "Piping engineering, plant layout, modelling, drawings, material take-offs, and review.",
    bullets: [
      "Material and route selection",
      "Pipe routing, layout, and special support design",
      "Stress, vibration, leakage, and integrity analysis",
      "3D modelling in SP3D, PDS, PDMS, and E3D",
      "General arrangement drawings and isometrics",
      "Material, support, insulation, and painting take-offs",
      "Key plans, plot plans, unit plot plans, and line modelling",
      "Equipment modelling, nozzle orientation, and model reviews",
      "Pipeline route optimization and material grade selection",
      "Pipeline design calculations, integrity, and mothballing",
      "Pipeline alignment sheets and AutoCAD/MicroStation drawings",
    ],
  },
  {
    icon: Building2,
    title: "Civil & Structural",
    description:
      "Design-basis development for industrial structures, buildings, foundations, and site infrastructure.",
    bullets: [
      "Pipe and cable racks, conveyor galleries, trestles, and platforms",
      "Steel-framed buildings, superstructures, sheds, turbine houses, and workshops",
      "Stack-supporting structures, switchyards, and transmission-line towers",
      "Project specifications and design basis",
      "Pile, conventional, equipment, machinery, tank, and silo foundations",
      "Reinforced concrete structures",
      "Roads, paving, grading, and drainage",
      "Cable and pipe trenches, retaining structures, dykes, walls, gates, fencing, and tunnels",
    ],
  },
  {
    icon: Cpu,
    title: "Instrumentation & Control",
    description:
      "Instrument engineering, control-system interfaces, drawings, specifications, and commissioning documentation.",
    bullets: [
      "Project specifications, design basis, instrument index, and control philosophy",
      "Execution drawings, instrument elevation plans, and junction-box terminations",
      "Interlock logic, instrument hook-ups, cause-and-effect, and fire-and-gas drawings",
      "DCS, PLC, SCADA, and MCC interfaces",
      "Cable-tray/trench layouts, cable schedules, and system/field earthing",
      "Control-valve, orifice-plate, and relief-valve sizing",
      "Instrument requisitions, construction scopes, FAT/SAT procedures, vendor-package reviews, and as-builts",
    ],
  },
  {
    icon: Sparkles,
    title: "Electrical Engineering",
    description:
      "Electrical studies, specifications, layouts, protection selection, and project documentation.",
    bullets: [
      "Project specifications and design basis",
      "Load-flow studies and supply changeover schemes",
      "HV/LV switchgear, MCC, motors, transformers, UPS, and distribution specifications",
      "Switchyard, transformer, switchgear, and MCC room layouts",
      "Lighting, power and control cables, cable trays, and earthing materials",
      "Cable routing, trench, lightning protection, and lighting layouts",
      "Battery room layouts, UPS selection, floor openings, and equipment foundations",
      "Feeder, motor, and transformer protection-relay selection",
      "Civil, machinery, and instrumentation interfaces",
      "Vendor drawing review, SCADA I/O lists, cable schedules, and as-built documentation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Technical Safety & HSE",
    description:
      "Process safety, loss prevention, fire protection, environmental, and risk-management studies.",
    bullets: [
      "Process safety and design",
      "Loss-prevention and firewater-network studies",
      "Fire and gas and clean-agent system design",
      "PHA, HAZOP, E-HAZOP, SIL, and alarm rationalization",
      "Environmental and risk-assessment studies",
      "Flare radiation and dispersion studies",
      "Safety risk assessment and risk management",
    ],
  },
];

/* ── Digital, CAD & Smart Engineering ── */
const DIGITAL_CARDS = [
  {
    title: "Digital transformation",
    description:
      "Laser-scan point-cloud modelling, reality modelling, retrofit studies, 4D construction simulation, digitization, asset management, and global workshare implementation.",
  },
  {
    title: "3D & 2D CAD",
    description:
      "Intelligent and non-intelligent equipment, piping, structural, electrical, and instrumentation models. General arrangements, nozzle/platform drawings, isometrics, support drawings, MTOs, line/instrument lists, and clash reports. As-built models, walkthroughs, and visualization.",
  },
  {
    title: "Model conversion & as-builts",
    description:
      "PDS-to-SmartPlant 3D conversion using customized utilities, data validation, and reference-data conversion. Point-cloud inputs are processed with expert support into SmartPlant 3D models. Site surveys, data analysis, mark-ups, and as-built updates preserve field records.",
  },
  {
    title: "Smart engineering",
    description:
      "AI implementation, automated quality checks, and adoption of intelligent tools within engineering workflows. Design-review files, 30%, 60%, and 90% model reviews, walkthroughs, review-comment analysis, and clash checks.",
  },
];

const FEATURE_BANDS = [
  {
    Icon: BriefcaseBusiness,
    title: "Project management",
    description:
      "Planning, scheduling, cost estimation, subcontract management, procurement support, vendor expediting, and site supervision.",
  },
  {
    Icon: Users,
    title: "Domain & SME support",
    description:
      "Subject-matter expertise for IT companies from pre-sale through solutioning, development, validation, and testing across oil and gas, banking, healthcare, pharma, retail, and manufacturing.",
  },
  {
    Icon: DraftingCompass,
    title: "Training & development",
    description:
      "Industry-ready training in SP3D, AVEVA E3D, AutoCAD Plant 3D, and PDMS, plus customized piping, process, infrastructure, telecom, electrical, and subsea engineering programs. Practical learning from industry-experienced professionals bridges academic learning and industrial needs.",
  },
];

/* ── Software Capability ── */
const SOFTWARE_MATRIX = [
  {
    discipline: "Process & Safety",
    tools:
      "Aspen HYSYS, Aspen Flare System Analyser, PIPENET, PIPESIM, FLARESIM, SPPID, PHAST, AutoCAD, MicroStation",
  },
  {
    discipline: "Piping & Mechanical",
    tools:
      "CAESAR II, PV Elite, HAP, Mathcad, SP3D, PDMS, PDS, ArcGIS, AutoCAD, MicroStation",
  },
  {
    discipline: "Instrumentation, Telecom & Electrical",
    tools:
      "INSTRUCAL, INTOOLS, ETAP, DIALux, SP3D, SPI, SPEL, PDMS, PDS, SPE, AutoCAD, MicroStation",
  },
  {
    discipline: "Civil & Structural",
    tools:
      "STAAD.Pro, SACS, Revit, MAT 3D, Foundation 3D, SP3D, PDMS, PDS, AutoCAD, MicroStation",
  },
  {
    discipline: "Project Management",
    tools: "Primavera, Microsoft Project, SAP, Microsoft tools, in-house tools",
  },
];

/* ── Business Sectors ── */
const SECTORS = [
  "Oil & Gas",
  "Petrochemical",
  "Industrial Infrastructure",
  "Automation & Control",
  "Power",
  "Chemical",
  "Pharmaceutical",
  "Mining & Metals",
  "Manufacturing",
  "Engineering",
  "EPC / EPCM",
];

/* ──────────────────────────── COMPONENT ──────────────────────────── */

export default function ProjectsContent() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — Engineering Services
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-14">
        <div className="container-x">
          {/* Header row with scope tiles on the right */}
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_.9fr]">
            {/* Left: Heading */}
            <div className="max-w-3xl">
              <div className="eyebrow mb-5">Engineering services</div>
              <h2 className="heading-lg max-w-3xl font-bold text-brand-ink">
                Engineering support across the{" "}
                <span className="text-gradient-orange">project lifecycle.</span>
              </h2>
              <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
                Independent core engineering support for owner/operators and EPC
                organizations across oil and gas, power, chemical,
                pharmaceutical, mining, metals, and industrial infrastructure.
              </p>
            </div>

            {/* Right: Scope tiles */}
            <div className="grid grid-cols-2 gap-3">
              {SCOPE_TILES.map((tile) => (
                <div
                  key={tile}
                  className="flex items-center justify-center rounded-2xl border border-orange-100/60 bg-white px-4 py-3.5 text-center text-sm font-medium text-brand-ink shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-brand-orange/30"
                >
                  {tile}
                </div>
              ))}
            </div>
          </div>

          {/* Discipline cards grid */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DISCIPLINES.map((d) => (
              <article
                key={d.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Top accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Icon */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm">
                  <d.icon className="h-5 w-5 text-white" />
                </div>

                {/* Title & description */}
                <h3 className="mt-6 font-display text-xl font-bold text-brand-ink">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {d.description}
                </p>

                {/* Bullet list */}
                <ul className="mt-5 space-y-2 border-t border-orange-100/60 pt-5">
                  {d.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm leading-5 text-gray-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-orange" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — Digital, CAD & Smart Engineering
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-14 bg-brand-cream/60">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr]">
            {/* Left: Image placeholder — gradient placeholder since we don't have the image */}
            <div className="overflow-hidden rounded-3xl border border-orange-100/60 bg-white shadow-card">
              <div className="aspect-[4/3] h-full w-full bg-gradient-to-br from-brand-orange/10 via-brand-cream to-brand-deep/10 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm mb-4">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-500">Engineering Models & Digital Assets</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div className="max-w-3xl">
                <div className="eyebrow mb-5">
                  Digital, CAD &amp; smart engineering
                </div>
                <h2 className="heading-lg max-w-3xl font-bold text-brand-ink">
                  Transform engineering data into{" "}
                  <span className="text-gradient-orange">
                    usable intelligence.
                  </span>
                </h2>
                <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
                  Digital engineering services connect existing asset
                  information, intelligent models, drawings, reviews, and
                  modernized delivery workflows.
                </p>
              </div>

              {/* 4 mini cards in 2×2 grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {DIGITAL_CARDS.map((card) => (
                  <article
                    key={card.title}
                    className="group rounded-2xl border border-orange-100/60 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <h3 className="font-display text-base font-semibold text-brand-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* 3 feature bands below */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {FEATURE_BANDS.map((band) => (
              <article
                key={band.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-brand-deep opacity-0 transition-opacity group-hover:opacity-100" />
                <band.Icon className="h-6 w-6 text-brand-orange" />
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-ink">
                  {band.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {band.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — Software Capability
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-14 bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow mb-5">Software capability</div>
            <h2 className="heading-lg max-w-3xl font-bold text-brand-ink">
              Tools that support{" "}
              <span className="text-gradient-orange">
                disciplined delivery.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
              Cross-platform capability across widely used engineering, design,
              analysis, and project-management environments.
            </p>
          </div>

          {/* Software rows — clean divider style */}
          <div className="mt-12 divide-y divide-orange-100/60 border-y border-orange-100/60">
            {SOFTWARE_MATRIX.map((row) => (
              <div
                key={row.discipline}
                className="grid gap-2 py-6 md:grid-cols-[.35fr_.65fr] transition-colors duration-200 hover:bg-orange-50/30"
              >
                <h3 className="font-display text-sm font-bold text-brand-ink">
                  {row.discipline}
                </h3>
                <p className="text-sm leading-7 text-gray-600">{row.tools}</p>
              </div>
            ))}
          </div>

          {/* Business Sectors — combined beneath Software */}
          <div className="mt-16">
            <div className="eyebrow mb-5">Business sectors</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-orange to-brand-deep px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:shadow-card hover:scale-105"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — Start a Conversation
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-4xl bg-cta-gradient p-8 sm:p-12 md:p-20 text-center">
            {/* Decorative circles */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full border border-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-20 bottom-10 h-32 w-32 rounded-full bg-white/5"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6">
                Start a conversation
              </div>
              <h2 className="mx-auto max-w-3xl text-[26px] font-bold leading-tight text-white sm:text-[32px] md:text-[40px] lg:text-5xl">
                Build the right team. Advance the right project.
              </h2>
              <p className="mx-auto relative mt-5 max-w-2xl text-sm text-white/80 md:text-lg leading-7">
                Talk with Quantastrat Integrators about recruitment, workforce,
                engineering, digital transformation, or training requirements.
              </p>
              <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-orange shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl sm:px-7 sm:py-3.5"
                >
                  Discuss your requirement{" "}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:px-7 sm:py-3"
                >
                  Explore openings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
