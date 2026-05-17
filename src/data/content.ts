export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
] as const;

export const heroStats = [
  { value: "15+", title: "Years combined delivery", subtitle: "Enterprise & public sector" },
  { value: "99.9%", title: "Uptime target", subtitle: "Managed infrastructure" },
  { value: "24/7", title: "Operational support", subtitle: "Mission-critical systems" },
] as const;

export const operationalPillars = [
  {
    title: "Security-first delivery",
    description:
      "Role-based access, audit trails, data-privacy-aware architecture, and documented handover on every engagement.",
    icon: "shield",
  },
  {
    title: "Managed infrastructure",
    description:
      "Hosting bundles with monitoring, backups, uptime targets, and SLA options for business and government tiers.",
    href: "/solutions#hosting",
    icon: "server",
  },
  {
    title: "Automation with governance",
    description:
      "Structured workflows and AI-assisted processes that stay compliant — not shadow IT experiments.",
    icon: "workflow",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Scope assessment, stakeholder alignment, and fit qualification for your agency or business.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "System design, role mapping, security model, and documentation plan before build begins.",
  },
  {
    step: "03",
    title: "Build & deploy",
    description: "Iterative delivery with testing, training materials, and structured turnover packages.",
  },
  {
    step: "04",
    title: "Operate",
    description: "Hosting, retainers, monitoring, and long-term evolution — we stay after go-live.",
  },
] as const;

export const faqs = [
  {
    question: "Who is Websleek best suited for?",
    answer:
      "Philippine government agencies, LGUs, GOCCs, and SMEs that need documented, secure systems — not one-off websites from vendors who disappear after launch. We filter for clients who value accountability and long-term partnership.",
  },
  {
    question: "How do you approach government procurement?",
    answer:
      "We provide procurement-ready documentation, project methodology, redacted case studies, and speak the language evaluators expect: audit trails, role-based access, data integrity, and operational continuity.",
  },
  {
    question: "Do you offer ongoing support after deployment?",
    answer:
      "Yes. Every system and website can include retainer tiers — Basic Care, Managed Ops, or Systems Partner — covering updates, monitoring, improvements, and compliance assistance.",
  },
] as const;

export const differentiators = [
  {
    title: "Government-ready by default",
    description:
      "Documentation, audit trails, role-based access, and data-privacy-aware design built into every engagement.",
    icon: "shield",
  },
  {
    title: "Custom systems without enterprise friction",
    description:
      "Faster delivery than large vendors, more structured than freelancers — scoped for Philippine agencies and SMEs.",
    icon: "zap",
  },
  {
    title: "Long-term partner, not project vendor",
    description:
      "Hosting, support, and system evolution retainers that keep your operations running after go-live.",
    icon: "handshake",
  },
] as const;

export const solutions = [
  {
    id: "opscore",
    name: "OpsCore™",
    tagline: "Business System",
    audience: "SMEs & non-complex offices",
    modules: [
      "Inventory Management",
      "Sales / POS",
      "Purchasing & Receiving",
      "Basic Reports",
      "User Roles & Logs",
    ],
    highlight: "Fast to sell, easy to scope, upgrade-friendly",
    color: "websleek-green",
  },
  {
    id: "govflow",
    name: "GovFlow™",
    tagline: "Management System",
    audience: "Government agencies & LGUs",
    modules: [
      "Request → Approval → Action workflows",
      "Asset / Inventory tracking",
      "Audit trail & logs",
      "Role-based permissions",
      "Exportable reports",
      "Documentation package",
    ],
    highlight: "Built for government language and evaluation criteria",
    color: "websleek-blue",
  },
  {
    id: "gov-website",
    name: "Gov-Ready Website",
    tagline: "Platform",
    audience: "Official digital presence",
    modules: [
      "Secure hosting",
      "Admin documentation",
      "Structured content",
      "Accessibility-ready layout",
      "Ongoing support option",
    ],
    highlight: "Official digital presence infrastructure — not just a brochure site",
    color: "websleek-teal",
  },
] as const;

export const footerCompanyLinks = [
  { label: "About", path: "/about" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Industries", path: "/industries" },
  { label: "Contact", path: "/contact" },
] as const;

export const footerServiceLinks = [
  { label: "Server Hosting & Management", path: "/services/server-hosting" },
  { label: "POS Systems", path: "/services/pos-systems" },
  { label: "Website Design & Development", path: "/services/website-design" },
  { label: "IT Support & Maintenance", path: "/services/it-support" },
] as const;

export const industries = [
  {
    name: "Retail & Trading",
    pain: "Manual inventory, spreadsheet chaos, slow reporting",
    outcome: "Unified stock, sales, and purchasing in one system",
  },
  {
    name: "Clinics & Healthcare",
    pain: "Appointment tracking, records scattered across tools",
    outcome: "Structured workflows with role-based access and logs",
  },
  {
    name: "Service Companies",
    pain: "Inventory or appointment overload without a single source of truth",
    outcome: "A system that grows with your operations — not another spreadsheet",
  },
] as const;

export const hostingBundles = [
  {
    tier: "Standard",
    includes: ["Website hosting", "Email", "Backups"],
    for: "SMEs & brochure sites",
  },
  {
    tier: "Business",
    includes: ["Website + system hosting", "Monitoring", "Priority support"],
    for: "Growing businesses with active systems",
  },
  {
    tier: "Government",
    includes: ["Hosting + uptime SLA", "Logs & audit support", "Documented escalation"],
    for: "Agencies requiring operational continuity",
  },
] as const;

export const retainerTiers = [
  { name: "Basic Care", items: ["Updates", "Backups", "Monitoring"] },
  { name: "Managed Ops", items: ["Monthly fixes", "Improvements", "Priority queue"] },
  { name: "Systems Partner", items: ["Roadmap planning", "Priority support", "Compliance help"] },
] as const;

export const govCapabilities = [
  "Government Systems Experience",
  "Procurement-Ready Documentation",
  "Project Methodology",
  "Data Privacy & Security Practices",
  "Redacted Case Studies",
] as const;

export const govTerms = [
  "Audit Trail",
  "Role-Based Access",
  "Data Integrity",
  "Operational Continuity",
  "Documentation & Turnover",
] as const;

export const caseStudies = [
  {
    sector: "Local Government Unit",
    title: "Workflow digitization for a regional office",
    summary:
      "Request-to-approval workflows with audit trails and exportable reports — entry point for expanded system rollout.",
    tags: ["GovFlow", "Audit Trail", "Documentation"],
  },
  {
    sector: "Retail & Trading",
    title: "Inventory and POS consolidation",
    summary:
      "Replaced spreadsheet tracking with OpsCore modules for inventory, sales, and purchasing — fewer errors, faster reporting.",
    tags: ["OpsCore", "Inventory", "SME"],
  },
  {
    sector: "Government Agency",
    title: "Official website + secure hosting",
    summary:
      "Gov-ready website platform with structured content, admin documentation, and ongoing support retainer.",
    tags: ["Website", "Hosting", "Retainer"],
  },
] as const;
