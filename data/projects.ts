export type Project = {
  slug: string;
  name: string;
  category: string[];
  description: string;
  technologies: string[];
  features: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "multi-vendor-ecommerce",
    name: "Multi-Vendor E-Commerce Platform",
    category: ["React", "Next.js", "Enterprise"],
    description: "Scalable multi-role commerce experience with product discovery, checkout, dashboards and SEO-ready routing.",
    technologies: ["Next.js", "TypeScript", "Redux", "React Hook Form", "Zod", "REST APIs", "RTL", "Tailwind CSS"],
    features: ["App Router", "SSR / SSG / ISR", "Protected routes", "Admin / Vendor / Customer RBAC", "Search and filtering", "Cart and checkout", "SEO metadata and sitemap"],
    accent: "from-blue-500/25 via-violet-500/10 to-transparent"
  },
  {
    slug: "wonder-mover",
    name: "Wonder Mover — Shipping & Logistics",
    category: ["React", "Enterprise"],
    description: "Operations platform for bookings, jobs, quotations, maps and logistics workflows.",
    technologies: ["React.js", "TypeScript", "GraphQL", "Apollo Client", "Firebase", "Google Maps", "Mantine UI"],
    features: ["Booking workflow", "Multi-step forms", "Distance calculation", "Firebase auth / Firestore", "GraphQL queries and mutations", "Context API"],
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent"
  },
  {
    slug: "ai-desktop-assistant",
    name: "AI Desktop Assistant",
    category: ["React", "AI"],
    description: "Cross-platform conversational desktop experience powered by Gemini with a responsive chat-first interface.",
    technologies: ["React.js", "TypeScript", "Tauri", "Gemini API", "Context API", "React Query"],
    features: ["AI conversation", "Markdown rendering", "Real-time chat", "Theme switching", "Lazy loading", "Efficient rendering"],
    accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent"
  },
  {
    slug: "assignex",
    name: "Assignex",
    category: ["Next.js", "Enterprise"],
    description: "Academic problem-solving and submission platform with progression, analytics, leaderboards and achievements.",
    technologies: ["Next.js", "TypeScript", "Mantine UI", "REST APIs"],
    features: ["Module unlocking", "Handouts", "File uploads", "Submission history", "Analytics", "Leaderboards", "Achievements"],
    accent: "from-emerald-400/20 via-cyan-500/10 to-transparent"
  },
  {
    slug: "right-to-care",
    name: "Right to Care",
    category: ["React", "Enterprise"],
    description: "Offline-first client and operations management system designed for reliable field workflows.",
    technologies: ["React.js", "Redux Toolkit", "RTK Query", "IndexedDB", "Service Workers"],
    features: ["Offline storage", "Sync workflow", "Lead tracking", "Bookings", "Transport management", "Driver tracking", "Billing dashboards"],
    accent: "from-amber-400/20 via-orange-500/10 to-transparent"
  },
  {
    slug: "gert-sibande",
    name: "Gert Sibande",
    category: ["React", "Enterprise"],
    description: "Inventory and booking management platform with RBAC, payments, invoices and reporting.",
    technologies: ["React.js", "Redux Toolkit", "RTK Query", "HTML", "CSS"],
    features: ["RBAC", "Booking management", "Payments", "Invoices", "Inventory", "Reporting"],
    accent: "from-sky-400/20 via-indigo-500/10 to-transparent"
  },
  {
    slug: "ubuntu-social",
    name: "Ubuntu Social Media Platform",
    category: ["Next.js", "React"],
    description: "Interactive social experience with real-time engagement, profiles, media and live chat.",
    technologies: ["Next.js", "Redux", "REST APIs", "Socket.io"],
    features: ["Authentication", "Profiles", "Content sharing", "Media uploads", "Live chat", "Personalized feeds"],
    accent: "from-pink-400/15 via-purple-500/10 to-transparent"
  },
  {
    slug: "pv-group",
    name: "PV Group — Construction Builder Portfolio",
    category: ["Next.js"],
    description: "Visual project showcase with dynamic gallery filtering and performance-focused presentation.",
    technologies: ["Next.js", "Context API", "REST APIs", "Bootstrap 5"],
    features: ["Project gallery", "Filtering", "Categorization", "Responsive UI", "Performance optimization"],
    accent: "from-stone-300/15 via-slate-500/10 to-transparent"
  },
  {
    slug: "nike-store",
    name: "NIKE Store",
    category: ["React"],
    description: "Early React e-commerce project built to explore product listings and global state management.",
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    features: ["Product listings", "Dynamic state", "Responsive UI"],
    accent: "from-red-400/15 via-orange-500/10 to-transparent"
  }
];