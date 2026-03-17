// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Welcome",
    badgeOuter: "LeadFlow CRM is live",
    titleBefore: "Power your team's",
    titleHighlight: "Client Relationships",
    titleAfter: "with absolute clarity.",
    subtitle:
      "LeadFlow helps your team organize clients, track deals, log activity, and collaborate securely—all in one internal CRM workspace.",
    primaryCta: { label: "Access Your CRM", href: "/auth#signin" },
    secondaryCta: { label: "Explore Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadFlow CRM dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Powered by industry-trusted platforms",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Lock", name: "Postgres" },
      { icon: "Users", name: "Drizzle" },
      { icon: "Sparkle", name: "OpenAI" },
      { icon: "Mail", name: "SendGrid" },
      { icon: "Blocks", name: "Shadcn" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "LeadFlow Advantage",
    heading: "Internal CRM Built For Teams",
    description:
      "LeadFlow centralizes your client management, notes, deals, and communication so your internal team works smarter and faster.",
    items: [
      {
        icon: "Users",
        title: "Full Client Visibility",
        description:
          "Every client, contact, and deal at your fingertips. View relationships, history, and status—all in one place.",
      },
      {
        icon: "Handshake",
        title: "Frictionless Deal Tracking",
        description:
          "Track opportunities from prospect to closed/won. See pipeline and outcomes by owner, stage, or timeline.",
      },
      {
        icon: "NotebookPen",
        title: "Actionable Activity History",
        description:
          "Log notes, capture every interaction, and maintain full audit trails for compliance and collaboration.",
      },
      {
        icon: "ShieldCheck",
        title: "Secure & Multi-Tenant",
        description:
          "Data separated by company, guarded by roles, governed by modern security best practices.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything You Need To Manage Clients",
    subtitle:
      "LeadFlow brings best-in-class features for internal CRM: persistence, permissioning, reporting, and more—built for clarity, speed, and reliability.",
    items: [
      {
        icon: "Building2",
        title: "Clients & Companies",
        description: "All client profiles, contacts, status, and key info—easily referenced and up-to-date.",
      },
      {
        icon: "Contact2",
        title: "Contacts Directory",
        description: "Track decision makers, partners, and associated contacts for each client.",
      },
      {
        icon: "TrendingUp",
        title: "Deals & Opportunities",
        description: "Progress, value, stages, and ownership—manage every opportunity with ease.",
      },
      {
        icon: "Note",
        title: "Notes & Activities",
        description: "Quick-add notes, activity log, and full audit trail by user, time, and action.",
      },
      {
        icon: "Layers",
        title: "Multi-Tenant Security",
        description: "All data is company-scoped by tenant. No cross-account access by default.",
      },
      {
        icon: "Award",
        title: "Role-Based Access",
        description: "Manager/admin can manage data, users have view-only access—always clear permissions.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "How LeadFlow Works",
    heading: "Internal Team, Secure Workspace",
    subtitle:
      "Onboard staff, assign roles, and work with your company’s data—no outside access. Every record is protected and controlled with robust access guards.",
    items: [
      {
        title: "Company Account Structure",
        description:
          "Multi-tenant isolation ensures only your team sees your company’s data. Perfect for internal tools.",
        pro: false,
      },
      {
        title: "Clear Roles & Permissions",
        description:
          "Assign admin, manager, and user roles. Managers control clients, contacts, deals, and notes.",
        pro: false,
      },
      {
        title: "Full Data Lifecycle",
        description:
          "Create, update, archive (not delete) all records. Past data never lost—archived for compliance.",
        pro: false,
      },
      {
        title: "Always-On Security",
        description: "Sessions, permissions, and validation enforced everywhere.",
        pro: true,
      },
    ],
  },

  // ── Testimonials/Why LeadFlow ────────────────────────────────────────────
  testimonials: {
    eyebrow: "Why LeadFlow",
    heading: "Built For Internal Teams",
    reviews: [
      {
        image: "/team1.jpg",
        name: "Chirag Dodiya",
        role: "Lead Engineer",
        comment:
          "LeadFlow streamlined how our staff manage client data and track deals—fast onboarding, always secure.",
        rating: 5.0,
      },
      {
        image: "/team2.jpg",
        name: "Elizabeth Moore",
        role: "Product Designer",
        comment:
          "The internal focus means everything is built for clarity, auditability, and data safety.",
        rating: 4.9,
      },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet The LeadFlow Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Product Owner", "Lead Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "David",
        lastName: "Diaz",
        positions: ["Platform Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
    ],
  },

  // ── Pricing (Internal Use) ───────────────────────────────────────────────
  pricing: {
    eyebrow: "Internal Use Only",
    heading: "LeadFlow For Company Staff",
    subtitle: "LeadFlow is designed and maintained for internal teams—no external access, no public signup. Secure, compliant, and centrally managed for your company.",
    priceSuffix: "",
    plans: [
      {
        title: "Company Access",
        popular: true,
        price: 0,
        description: "LeadFlow is exclusive to authorized company staff and is not available for public sale.",
        buttonText: "Log In To LeadFlow",
        benefits: [
          "Secure internal CRM",
          "Multi-tenant data safety",
          "Role-based access",
          "Audit logging",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Reach The LeadFlow Team",
    description:
      "Submit questions or support requests for your company workspace. Admins and authorized staff only.",
    mailtoAddress: "hi@chirag.co",
    info: {
      address: { label: "Our office", value: "LeadFlow HQ • Remote / Mumbai" },
      phone: { label: "Main", value: "" },
      email: { label: "Email", value: "hi@chirag.co" },
      hours: { label: "Support", value: ["Mon-Fri", "10AM - 7PM IST"] },
    },
    formSubjects: [
      "Workspace Access",
      "Support",
      "Feature Request",
      "Security",
      "Other",
    ],
    formSubmitLabel: "Contact LeadFlow",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "LeadFlow FAQ",
    heading: "Internal CRM, Answered",
    items: [
      {
        question: "Is LeadFlow only for internal company use?",
        answer: "Yes. LeadFlow is purposely designed for staff—no public signup or external CRM sales.",
      },
      {
        question: "Who can see company data?",
        answer: "Only staff members associated with your company account. All access is tenant-scoped and permissioned.",
      },
      {
        question: "Can I invite people outside my company?",
        answer: "No, only admins/managers on your account may add colleagues via secure invite.",
      },
      {
        question: "Is my data safe and separated?",
        answer: "Yes. Every tenant/company's data is completely separated and secured with role-based guards.",
      },
      {
        question: "Can I remove/archive clients and deals?",
        answer: "Clients and deals can be archived (not deleted) for audit and compliance.",
      },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "LeadFlow",
    columns: [
      {
        heading: "Get in touch",
        links: [
          { label: "hi@chirag.co", href: "mailto:hi@chirag.co" },
          { label: "Github", href: "https://github.com/leoMirandaa" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Contact", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Security",
        links: [
          { label: "Internal Use", href: "#pricing" },
          { label: "Role-Based", href: "#services" },
        ],
      },
    ],
    copyright: "© 2026 LeadFlow CRM",
    attribution: { label: "Built with Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "LeadFlow",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#services", label: "How it works" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "CRM Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "LeadFlow CRM preview" },
    features: [
      {
        title: "Client Management",
        description: "Organize and find all company clients in one place.",
      },
      {
        title: "Deals & Opportunities",
        description: "Full pipeline tracking for every deal and opportunity.",
      },
      {
        title: "Contacts Directory",
        description: "Associate decision makers and partners to every client.",
      },
    ],
    signInLabel: "Log in",
    signUpLabel: "Request Access",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/leoMirandaa", ariaLabel: "View on Github" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}