import { CVConfig } from "../src/types/cv.types";

/**
 * Base CV Template - MOCK DATA FALLBACK
 *
 * ⚠️  WARNING: THIS FILE CONTAINS MOCK DATA FOR DEMONSTRATION PURPOSES ONLY
 *
 * This is a FALLBACK configuration with placeholder information. You should
 * create your own config file instead of using this directly.
 *
 * 🤖 FOR AI ASSISTANTS:
 * - This is MOCK DATA - a fallback template, not meant for production use
 * - Copy this file to create a new CV (e.g., cp configs/base.config.ts configs/john-doe.config.ts)
 * - All fields have JSDoc documentation in src/types/cv.types.ts
 * - Sections are optional except header and profile
 * - See docs/AI_GUIDE.md for common editing tasks
 *
 * 👤 FOR USERS:
 * - cp configs/base.config.ts configs/your-name.config.ts
 * - Edit your copy with REAL information (your file is gitignored by default)
 * - pnpm pdf --config your-name
 */

console.warn(`
╔═══════════════════════════════════════════════════════════╗
║  ⚠️  WARNING: YOU ARE USING MOCK DATA (FALLBACK)         ║
╚═══════════════════════════════════════════════════════════╝

This is the BASE FALLBACK configuration with placeholder data.
🚫 DO NOT use this for real job applications!

To create your own CV:
  1. cp configs/base.config.ts configs/john-doe.config.ts
  2. Edit configs/john-doe.config.ts with your real information
  3. pnpm pdf --config john-doe

See configs/README.md for more details.
`);

export const config = {
  header: {
    name: "Alex Johnson",
    resume: [
      "Senior Full Stack Engineer with 3+ years of experience building scalable web applications.",
      "Specialized in TypeScript, React, and Node.js with a strong focus on performance and user experience.",
      "Passionate about clean code, system architecture, and mentoring junior developers.",
    ],
  },

  profile: {
    image: {
      display: false,
      circular: true,
      border: true,
    },
    contact: {
      location: {
        value: "San Francisco, CA, USA",
        display: true,
        showIcon: false, // Override theme default (true) for location
      },
      nationality: {
        value: "American",
        display: true,
        showIcon: false, // Override theme default (true) for nationality
      },
      phone: {
        value: "+1 (555) 123-4567",
        display: true,
        // showIcon: uses theme default (true)
      },
      email: {
        value: "alex.johnson@example.com",
        display: true,
        // showIcon: uses theme default (true)
      },
    },
    links: [
      {
        type: "LinkedIn",
        url: "https://linkedin.com/in/alexjohnson",
        // showIcon: uses theme default (true)
      },
      {
        type: "GitHub",
        url: "https://github.com/alexjohnson",
        // showIcon: uses theme default (true)
      },
      {
        type: "Twitter",
        url: "https://x.com/alexjohnson",
        // showIcon: uses theme default (true)
      },
      {
        type: "Website",
        url: "https://alexjohnson.dev",
        label: "Portfolio",
        // showIcon: uses theme default (true)
      },
    ],
  },

  workExperience: [
    {
      position: "Senior Full Stack Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Remote",
      years: "2022 - Present",
      bubbles: [
        "TypeScript",
        "React",
        "React Native",
        "Node.js",
        "GraphQL",
        "Redux",
        "AWS",
        "Docker",
      ],
      lines: [
        {
          text: "Led development of a microservices architecture serving 5M+ daily active users, resulting in 40% improvement in system reliability and 25% reduction in infrastructure costs.",
          bulletPoint: true,
        },
        {
          text: "Architected and implemented a real-time notification system using WebSockets and Redis, handling 100k+ concurrent connections with sub-100ms latency.",
          bulletPoint: true,
        },
        {
          text: "Mentored a team of 5 junior developers, conducting code reviews and establishing best practices that reduced bug reports by 35%.",
          bulletPoint: true,
        },
        {
          text: "Spearheaded migration from JavaScript to TypeScript across 50+ repositories, improving developer productivity and catching 200+ potential runtime errors.",
          bulletPoint: true,
        },
      ],
    },
  ],

  projects: [
    {
      name: "Real-time Analytics Dashboard",
      duration: "4 months project",
      bubbles: [
        "React",
        "TypeScript",
        "WebSocket",
        "D3.js",
        "Node.js",
        "MongoDB",
      ],
      lines: [
        {
          text: "Built a real-time analytics dashboard for monitoring system performance and user behavior across multiple services.",
          bulletPoint: false,
        },
        {
          text: "Implemented WebSocket connections for live data streaming, displaying metrics with sub-second latency using D3.js visualizations.",
          bulletPoint: true,
        },
        {
          text: "Designed aggregation pipelines in MongoDB to process millions of events per hour with efficient indexing strategies.",
          bulletPoint: true,
        },
        {
          text: "Created customizable widgets and dashboards with drag-and-drop functionality, improving user engagement by 50%.",
          bulletPoint: true,
        },
      ],
    },
    {
      name: "E-commerce Platform with Payment Integration",
      duration: "6 months project",
      bubbles: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
      lines: [
        {
          text: "Developed a full-stack e-commerce platform with product catalog, shopping cart, and secure payment processing.",
          bulletPoint: false,
        },
        {
          text: "Integrated Stripe Payment Intents API with SCA compliance, supporting multiple currencies and payment methods.",
          bulletPoint: true,
        },
        {
          text: "Implemented server-side rendering with Next.js for optimal SEO and performance, achieving 95+ Lighthouse scores.",
          bulletPoint: true,
        },
        {
          text: "Built an admin dashboard for inventory management, order processing, and sales analytics with role-based access control.",
          bulletPoint: true,
        },
      ],
    },
  ],

  technical: [
    {
      category: "Languages",
      bubbles: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "HTML/CSS"],
    },
    {
      category: "Frontend",
      bubbles: [
        "React",
        "Next.js",
        "Vue.js",
        "React Native",
        "Tailwind CSS",
        "Redux",
        "Webpack",
      ],
    },
    {
      category: "Backend",
      bubbles: [
        "Node.js",
        "Express",
        "NestJS",
        "Django",
        "Flask",
        "GraphQL",
        "REST APIs",
      ],
    },
    {
      category: "Databases",
      bubbles: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "TypeORM"],
    },
    {
      category: "DevOps & Cloud",
      bubbles: [
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "Jenkins",
        "GitHub Actions",
        "Terraform",
      ],
    },
    {
      category: "Tools",
      bubbles: ["Git", "Linux", "Nginx", "Jest", "Cypress", "Figma", "Jira"],
    },
  ],

  languages: [
    { language: "English", abbreviation: "EN", level: "Native" },
    { language: "Spanish", abbreviation: "ES", level: "Professional" },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      location: "Boston, MA, USA",
      years: "2013 - 2017",
    },
  ],
} satisfies CVConfig;

export default config;
