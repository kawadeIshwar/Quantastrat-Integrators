export type Job = {
  slug: string;
  title: string;
  location: string;
  experience: string;
  type: "Full-time" | "Contract" | "Hybrid" | "Remote";
  category: "IT" | "Non-IT" | "Manufacturing" | "Leadership";
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedAt: string;
};

export const JOBS: Job[] = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    location: "Bengaluru, IN (Hybrid)",
    experience: "6-9 years",
    type: "Full-time",
    category: "IT",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    description:
      "Build and scale high-traffic consumer products at one of India's fastest growing fintech startups.",
    responsibilities: [
      "Design and ship end-to-end features across web and services",
      "Own product reliability, observability and performance",
      "Mentor mid-level engineers and raise the team's technical bar"
    ],
    requirements: [
      "Strong TypeScript across React and Node",
      "Production experience with AWS and relational databases",
      "Track record of shipping consumer-facing products at scale"
    ],
    postedAt: "2025-04-22"
  },
  {
    slug: "data-platform-lead",
    title: "Data Platform Lead",
    location: "Hyderabad, IN",
    experience: "8-12 years",
    type: "Full-time",
    category: "IT",
    skills: ["Spark", "Airflow", "Snowflake", "AWS", "Python"],
    description: "Lead the next-gen data platform powering analytics, ML and decision systems.",
    responsibilities: [
      "Architect the data lakehouse and orchestration layer",
      "Drive data quality, lineage and governance practices",
      "Partner with analytics and ML teams across the org"
    ],
    requirements: ["Spark/Snowflake at scale", "Strong leadership of 6+ engineers", "Modern data-stack mindset"],
    postedAt: "2025-05-02"
  },
  {
    slug: "plant-operations-manager",
    title: "Plant Operations Manager",
    location: "Pune, IN",
    experience: "10-15 years",
    type: "Full-time",
    category: "Manufacturing",
    skills: ["Lean", "Six Sigma", "EHS", "Production Planning"],
    description: "Run a 350-people plant for a leading auto-components manufacturer.",
    responsibilities: ["Own plant P&L and OEE metrics", "Drive Lean / TPM programs", "Champion EHS and compliance"],
    requirements: ["Auto components / discrete manufacturing background", "Six Sigma Black Belt preferred", "Strong people leadership"],
    postedAt: "2025-04-30"
  },
  {
    slug: "vp-sales-enterprise",
    title: "VP — Sales (Enterprise SaaS)",
    location: "Mumbai, IN",
    experience: "12-18 years",
    type: "Full-time",
    category: "Leadership",
    skills: ["Enterprise Sales", "GTM", "ARR Growth", "Team Building"],
    description: "Build and scale the enterprise GTM engine for a fast-growing B2B SaaS leader.",
    responsibilities: ["Own ARR targets across India & SEA", "Build & coach a regional sales org", "Partner with marketing & product on GTM"],
    requirements: ["Enterprise SaaS sales leadership", "Quota-carrying history >$10M ARR", "Track record of building teams"],
    postedAt: "2025-05-10"
  },
  {
    slug: "compliance-specialist",
    title: "Compliance Specialist",
    location: "Gurgaon, IN",
    experience: "4-7 years",
    type: "Full-time",
    category: "Non-IT",
    skills: ["Labour Law", "PF/ESI", "Audits", "Contract Management"],
    description: "Drive statutory and labour-law compliance across a large contingent workforce.",
    responsibilities: ["End-to-end PF, ESI, PT, LWF compliance", "Vendor & client audits", "Process improvements"],
    requirements: ["Hands-on with statutory compliance", "Industry experience in staffing/EPC", "Strong stakeholder communication"],
    postedAt: "2025-05-05"
  },
  {
    slug: "ml-engineer",
    title: "ML Engineer",
    location: "Remote, IN",
    experience: "3-6 years",
    type: "Remote",
    category: "IT",
    skills: ["Python", "PyTorch", "MLOps", "AWS Sagemaker"],
    description: "Productionise ML systems for recommendation and ranking at consumer scale.",
    responsibilities: ["Train and deploy ranking models", "Own feature store and pipelines", "Drive A/B testing rigour"],
    requirements: ["Modern PyTorch", "MLOps with Sagemaker / equivalent", "Strong product mindset"],
    postedAt: "2025-05-12"
  },
  {
    slug: "supply-chain-lead",
    title: "Supply Chain Lead",
    location: "Chennai, IN",
    experience: "7-10 years",
    type: "Full-time",
    category: "Manufacturing",
    skills: ["S&OP", "Procurement", "SAP", "Logistics"],
    description: "Run S&OP and procurement for a multi-plant industrial group.",
    responsibilities: ["S&OP cadence and forecasting", "Strategic sourcing & cost-out", "Logistics partner management"],
    requirements: ["S&OP at multi-plant scale", "Strong SAP fluency", "Lean / TOC mindset"],
    postedAt: "2025-04-18"
  },
  {
    slug: "talent-acquisition-partner",
    title: "Talent Acquisition Partner (RPO)",
    location: "Bengaluru, IN",
    experience: "5-8 years",
    type: "Contract",
    category: "Non-IT",
    skills: ["Tech Hiring", "Stakeholder Mgmt", "ATS", "Sourcing"],
    description: "Embedded RPO partner for a high-growth global SaaS leader.",
    responsibilities: ["Own end-to-end tech hiring", "Stakeholder partnership with EMs", "Pipeline & funnel metrics"],
    requirements: ["Strong tech hiring track record", "Embedded RPO experience preferred", "Modern sourcing toolkit"],
    postedAt: "2025-05-08"
  }
];

export const JOB_CATEGORIES = ["All", "IT", "Non-IT", "Manufacturing", "Leadership"] as const;
export const JOB_LOCATIONS = ["All", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Mumbai", "Gurgaon", "Remote"] as const;
