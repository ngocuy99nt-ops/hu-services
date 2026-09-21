import type { Translation } from "./vi";

export const en = {
  header: {
    nav: [
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
    ],
    quote: "Get a Quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageGroup: "Choose language",
    switchToVietnamese: "Switch language to Vietnamese",
    switchToEnglish: "Switch language to English",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  hero: {
    availability: "Now accepting new projects",
    title: "We build digital products",
    titleAccent: "that move businesses forward",
    description:
      "Websites, business systems, automation, and AI solutions — designed, developed, and deployed from end to end.",
    cta: "Start a Project",
    trustItems: [
      "Custom Development",
      "Source Code Handover",
      "Responsive & SEO Ready",
      "Deployment & Support",
    ],
  },
  services: {
    eyebrow: "Solutions",
    title: "What HU can build",
    description:
      "Websites, management systems, and automation solutions designed around real business requirements.",
    cards: [
      {
        number: "01",
        category: "Business websites",
        title: "Professional websites for businesses",
        description:
          "Modern, responsive, and performance-focused websites built to present your brand and services while converting visitors into customers.",
        items: ["Company websites", "Landing pages", "Multilingual websites", "Lead capture forms"],
      },
      {
        number: "02",
        category: "Business systems",
        title: "Web Application & Management System",
        description:
          "Systems built around the way your business actually operates instead of forcing your team into a generic template.",
        items: ["Order management", "Inventory management", "CRM", "Dashboards & reports"],
      },
      {
        number: "03",
        category: "AI & Automation",
        title: "AI-powered workflow automation",
        description:
          "AI and automation solutions that reduce manual work, process documents, and connect data across multiple systems.",
        items: ["Document OCR", "AI Document Processing", "Workflow Automation", "RAG & Knowledge Search"],
      },
    ],
  },
  whyUs: {
    eyebrow: "Why HU",
    title: "Working principles, not marketing claims",
    cards: [
      {
        title: "Source Code Ownership",
        description: "You own the complete source code after delivery — with no lock-in or dependency on closed platforms.",
      },
      {
        title: "Performance Focus",
        description: "Speed and system performance are addressed at the architecture stage, not patched in later.",
      },
      {
        title: "Transparent Development",
        description: "Progress is communicated clearly at every stage — no black box during development.",
      },
      {
        title: "Scalable Architecture",
        description: "Architecture is designed to grow with your operations instead of requiring a rebuild from scratch.",
      },
      {
        title: "Security First",
        description: "Data validation, access control, and error handling are treated as requirements, not options.",
      },
      {
        title: "After-launch Support",
        description: "Ongoing support helps keep the system stable as it operates and evolves in the real world.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "A clear process, not a black box",
    description: "Six steps take every project from an idea to a working system in production.",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description: "We understand the real problem, current workflow, and business goals before proposing a solution.",
      },
      {
        number: "02",
        title: "Proposal",
        description: "Scope, technical architecture, and roadmap are agreed on clearly before development begins.",
      },
      {
        number: "03",
        title: "UI / UX",
        description: "Interfaces and user flows are designed for a clear, efficient end-user experience.",
      },
      {
        number: "04",
        title: "Development",
        description: "Features are built incrementally with clean, maintainable code and continuous review.",
      },
      {
        number: "05",
        title: "QA & Deployment",
        description: "Real-world scenarios are tested thoroughly before a safe production deployment.",
      },
      {
        number: "06",
        title: "Support",
        description: "After launch, we monitor operations, resolve issues, and improve the system as it grows.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Investment matched to the project",
    description: "No misleading fixed prices — every project is estimated against its actual scope.",
    cta: "Get a Project Estimate",
    tiers: [
      {
        name: "Business Website",
        price: "Contact for a quote",
        description: "Company websites, landing pages, and product or service presentation websites.",
        features: ["Brand-aligned design", "Responsive & basic SEO", "Source code handover"],
        highlighted: false,
      },
      {
        name: "Web Application",
        price: "Project-based quote",
        description: "Business systems, CRM, inventory or order management, and custom internal applications.",
        features: ["Workflow-aligned architecture", "Permissions & reporting", "Post-launch support"],
        highlighted: true,
      },
      {
        name: "Automation",
        price: "Project-based quote",
        description: "Workflow automation, API integrations, notification systems, and data processing.",
        features: ["Current workflow assessment", "Existing system integration", "Operational monitoring"],
        highlighted: false,
      },
      {
        name: "AI Solution",
        price: "Project-based quote",
        description: "AI, OCR, document processing, and Knowledge/RAG systems for specific business needs.",
        features: ["Use-case assessment", "Real-data implementation", "Result-driven optimization"],
        highlighted: false,
      },
    ],
  },
  about: {
    eyebrow: "About HU",
    title: "We do not just build products that run.",
    titleAccent: "We build products businesses can rely on for the long term.",
    description:
      "HU Web Services turns business requirements into digital products that are clear, stable, and ready to evolve.",
    descriptionSecondary:
      "From websites and management systems to automation and AI, every solution starts with a real problem — not a framework or technology.",
    principles: [
      {
        number: "01",
        title: "Understand the problem before writing code",
        paragraphs: [
          "We begin by understanding the workflow, the people using it, and the problem to solve before choosing a technical approach.",
        ],
      },
      {
        number: "02",
        title: "Clarity at every stage",
        paragraphs: [
          "Scope, progress, and implementation are communicated clearly to reduce surprises and misaligned expectations.",
        ],
      },
      {
        number: "03",
        title: "Built to keep evolving",
        paragraphs: [
          "A product should do more than work on delivery day.",
          "We prioritize maintainability, scalability, and the ability to evolve as the business changes.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Have an idea? Let’s build something useful.",
    description: "Tell me briefly what you are building, and I will help identify the right technical direction.",
    channels: { zalo: "Chat on Zalo", phone: "Phone" },
    form: {
      successTitle: "Your request has been sent!",
      successDescription: "Thank you for reaching out. I will reply using the contact details you provided as soon as possible.",
      sendAnother: "Send another request",
      name: "Full name",
      namePlaceholder: "Your name",
      contact: "Phone or Email",
      contactPlaceholder: "Phone number or you@company.com",
      service: "Service of interest",
      servicePlaceholder: "Choose a service",
      budget: "Estimated budget",
      budgetPlaceholder: "Choose a budget range",
      message: "Project description",
      messagePlaceholder: "Briefly describe the problem or system you need...",
      submitting: "Sending...",
      submit: "Request a consultation",
      error: "Unable to send your request. Please try again.",
      serviceOptions: [
        { value: "web-development", label: "Web Development" },
        { value: "business-systems", label: "Business Systems" },
        { value: "automation", label: "Automation" },
        { value: "ai-solutions", label: "AI Solutions" },
        { value: "other", label: "Other" },
      ],
      budgetOptions: [
        { value: "under-20m", label: "Under VND 20 million" },
        { value: "20m-50m", label: "VND 20–50 million" },
        { value: "50m-150m", label: "VND 50–150 million" },
        { value: "over-150m", label: "Over VND 150 million" },
        { value: "unsure", label: "Not sure yet" },
      ],
    },
  },
  footer: {
    description:
      "Design, development, and deployment of websites, business systems, automation, and AI solutions — from end to end.",
    servicesTitle: "Services",
    services: ["Web Development", "Business Systems", "Automation", "AI Solutions"],
    navigationTitle: "Navigation",
    contact: "Contact",
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
} satisfies Translation;
