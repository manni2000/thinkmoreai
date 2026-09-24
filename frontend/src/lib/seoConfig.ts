/**
 * Central SEO configuration for ThinkMoreAI.
 *
 * Each route gets a UNIQUE title, description, canonical URL and a
 * targeted keyword set (short-tail + long-tail) so search engines can
 * rank each page for the queries it actually serves — instead of every
 * page competing with the same generic meta.
 *
 * Keyword strategy:
 *  - Short keywords: high-volume, broad intent (e.g. "AI agency", "web development").
 *  - Long-tail keywords: lower-volume, high-intent phrases that convert
 *    (e.g. "AI automation agency for startups in India").
 */

export const SITE_URL = "https://www.thinkmoreai.com";
export const SITE_NAME = "ThinkmoreAI";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/thinkmoreai.webp`;

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  /** Short-tail, broad keywords. */
  shortKeywords: string[];
  /** Long-tail, high-intent keywords. */
  longKeywords: string[];
}

/** Brand-wide keywords appended to every page. */
const globalShortKeywords = [
  "AI agency",
  "AI solutions",
  "ThinkMoreAI",
  "digital agency India",
  "AI automation",
];

const globalLongKeywords = [
  "AI powered digital solutions for businesses",
  "affordable AI automation agency in India",
  "AI development company for startups and small businesses",
];

export const SEO_PAGES: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "ThinkmoreAI - AI Digital Solutions, Automation & Business Growth",
    description:
      "ThinkMoreAI designs and builds web and mobile applications, AI assistants, workflow automation, data analytics, SEO and digital growth systems around business goals.",
    shortKeywords: [
      "AI company",
      "web development",
      "app development",
      "website design",
      "AI chatbots",
      "workflow automation",
      "data analytics",
      "SEO services",
      "digital marketing",
      "business growth",
      "website development",
      "mobile app development",
      "AI chatbot development",
      "business automation",
      "SEO services",
      "digital marketing services",
      "software development",
      "social media management",
      "video editing services",
      "AI solutions for startups",
      "AI solutions for small businesses",
      "AI solutions for enterprises",
    ],
    longKeywords: [
      "AI digital solutions and business services company",
      "hire an AI agency for web and mobile app development",
      "AI automation and digital marketing for business growth",
      "custom AI software development company in India",
    ],
  },

  about: {
    path: "/about",
    title: "About ThinkmoreAI - AI Agency Built for Business Growth",
    description:
      "Learn about ThinkMoreAI — an AI-first agency helping startups, founders and small businesses grow with practical AI automation, custom software and measurable execution.",
    shortKeywords: [
      "about ThinkMoreAI",
      "AI agency",
      "AI company India",
      "AI consulting",
    ],
    longKeywords: [
      "AI agency for startups and small businesses",
      "AI first digital agency in India",
      "practical AI implementation and business growth consulting",
    ],
  },

  services: {
    path: "/services",
    title: "AI Services - Web, Apps, Automation, Analytics & SEO | ThinkmoreAI",
    description:
      "Explore ThinkMoreAI services: AI-powered web development, iOS & Android apps, AI chatbots, workflow automation, data analytics, SEO optimization, social media and video editing.",
    shortKeywords: [
      "AI services",
      "web development services",
      "mobile app development",
      "AI chatbot services",
      "SEO optimization",
      "data analytics services",
      "social media management",
      "video editing services",
    ],
    longKeywords: [
      "AI web and mobile app development services",
      "custom AI chatbot and workflow automation services",
      "technical SEO and digital marketing services for startups",
      "business data analytics and predictive insights services",
    ],
  },

  portfolio: {
    path: "/portfolio",
    title: "Portfolio - AI, Web, App & Automation Projects | ThinkmoreAI",
    description:
      "Explore ThinkMoreAI's public concept demos and work samples across SaaS, e-commerce, mobile products, research and digital experiences.",
    shortKeywords: [
      "AI portfolio",
      "web development portfolio",
      "app development projects",
      "case studies",
    ],
    longKeywords: [
      "AI and web development portfolio and case studies",
      "examples of AI automation and SaaS product concepts",
    ],
  },

  process: {
    path: "/process",
    title: "Our Process - How ThinkmoreAI Delivers AI Projects",
    description:
      "Discover ThinkMoreAI's delivery process — understand, design, build and improve — for turning business goals into working AI and software systems.",
    shortKeywords: [
      "development process",
      "AI project delivery",
      "software workflow",
    ],
    longKeywords: [
      "how an AI agency delivers software projects step by step",
      "AI product design and development process",
    ],
  },

  faq: {
    path: "/faq",
    title: "FAQ - AI Services, Pricing & Delivery | ThinkmoreAI",
    description:
      "Answers to common questions about ThinkMoreAI's AI services, pricing, delivery, data security, maintenance and how startups and businesses can get started.",
    shortKeywords: [
      "AI agency FAQ",
      "AI services pricing",
      "AI project questions",
    ],
    longKeywords: [
      "frequently asked questions about AI development services",
      "how much does AI automation and software development cost",
    ],
  },

  team: {
    path: "/team",
    title: "Our Team - The People Behind ThinkmoreAI",
    description:
      "Meet the ThinkMoreAI team across engineering, data, marketing strategy and project delivery, building AI-driven products, automation and growth systems.",
    shortKeywords: ["ThinkMoreAI team", "AI experts", "development team"],
    longKeywords: [
      "meet the AI and software development team at ThinkMoreAI",
    ],
  },

  contact: {
    path: "/contact",
    title: "Contact ThinkmoreAI - Book a Free AI Discovery Call",
    description:
      "Get in touch with ThinkMoreAI. Book a free discovery call to discuss your web, app, AI automation, analytics or marketing project and get a tailored plan.",
    shortKeywords: [
      "contact ThinkMoreAI",
      "hire AI agency",
      "AI discovery call",
      "get a quote",
    ],
    longKeywords: [
      "book a free AI consultation and discovery call",
      "contact an AI agency for a project quote in India",
    ],
  },

  earn: {
    path: "/earn",
    title: "Earn With Us - Refer a Project, Earn 10% Commission | ThinkmoreAI",
    description:
      "Refer any web, app, AI or automation project to ThinkMoreAI and earn a flat 10% commission on the client's first payout. No skills, no investment, no risk — anyone can join.",
    shortKeywords: [
      "referral program",
      "earn commission",
      "refer and earn",
      "affiliate program",
    ],
    longKeywords: [
      "earn 10 percent commission by referring software projects",
      "referral program for students freelancers and agencies",
      "make money referring web and app development projects",
    ],
  },

  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy | ThinkmoreAI",
    description:
      "Read ThinkMoreAI's privacy policy to understand how we collect, use, protect and handle your personal data with confidentiality and security.",
    shortKeywords: ["privacy policy", "data protection"],
    longKeywords: ["ThinkMoreAI privacy policy and data handling practices"],
  },

  terms: {
    path: "/terms-of-service",
    title: "Terms of Service | ThinkmoreAI",
    description:
      "Read the terms of service governing the use of ThinkMoreAI's website and services.",
    shortKeywords: ["terms of service", "terms and conditions"],
    longKeywords: ["ThinkMoreAI terms of service and conditions of use"],
  },
};

/** Build a comma-separated keyword string (short + long + global). */
export function buildKeywords(page: PageSeo): string {
  return [
    ...page.shortKeywords,
    ...page.longKeywords,
    ...globalShortKeywords,
    ...globalLongKeywords,
  ].join(", ");
}

/** Build the absolute canonical URL for a page. */
export function canonicalFor(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
