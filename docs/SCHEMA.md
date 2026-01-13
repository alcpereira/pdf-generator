# CV Configuration Schema Reference

Complete reference for all fields in the CV configuration.

## Root Configuration

```typescript
interface CVConfig {
  header: Header; // Required
  profile: Profile; // Required
  workExperience?: WorkExperience[];
  projects?: Project[];
  technical?: TechnicalCategory[];
  languages?: Language[];
  education?: Education[];
}
```

---

## Header (Required)

Displays at the top of the CV with name and professional summary.

```typescript
interface Header {
  name: string;
  resume: string[];
}
```

**Fields:**

- `name` (string, required) - Full name of the candidate
- `resume` (string[], required) - Professional summary lines (2-3 recommended)

**Example:**

```typescript
header: {
  name: "Jane Smith",
  resume: [
    "Senior Full-Stack Developer with 10 years experience",
    "Specialized in React, Node.js, and cloud architecture",
    "Led teams of 5-10 engineers on enterprise projects"
  ]
}
```

---

## Profile (Required)

Sidebar section with contact information and links.

```typescript
interface Profile {
  shouldDisplayProfileImage: boolean;
  lines: string[];
  links: ProfileLink[];
}
```

**Fields:**

- `shouldDisplayProfileImage` (boolean, required) - Show profile photo
- `lines` (string[], required) - Contact info lines (location, phone, email, etc.)
- `links` (ProfileLink[], required) - Social/professional links

**ProfileLink:**

```typescript
interface ProfileLink {
  type: string; // "LinkedIn", "GitHub", "Twitter", "Website", etc.
  link: string; // URL or username
}
```

**Example:**

```typescript
profile: {
  shouldDisplayProfileImage: true,
  lines: [
    "New York, NY",
    "American",
    "+1 (555) 123-4567",
    "jane.smith@email.com"
  ],
  links: [
    { type: "LinkedIn", link: "linkedin.com/in/janesmith" },
    { type: "GitHub", link: "github.com/janesmith" },
    { type: "Website", link: "janesmith.dev" }
  ]
}
```

---

## Work Experience (Optional)

Employment history section.

```typescript
interface WorkExperience {
  position: string;
  company: string;
  location: string;
  type: string;
  years: string;
  bubbles: string[];
  lines: TextLine[];
}
```

**Fields:**

- `position` (string) - Job title
- `company` (string) - Company name
- `location` (string) - City, State/Country
- `type` (string) - "Remote", "Hybrid", "On-site"
- `years` (string) - Time period (e.g., "2020 - Present")
- `bubbles` (string[]) - Technologies/skills used
- `lines` (TextLine[]) - Responsibilities and achievements

**TextLine:**

```typescript
interface TextLine {
  text: string;
  bulletPoint: boolean; // true = show bullet, false = plain text
}
```

**Example:**

```typescript
workExperience: [
  {
    position: "Senior Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Remote",
    years: "2020 - Present",
    bubbles: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    lines: [
      {
        text: "Led development of customer analytics dashboard serving 10K+ users",
        bulletPoint: true,
      },
      {
        text: "Reduced API response time by 60% through caching and optimization",
        bulletPoint: true,
      },
      {
        text: "Mentored 3 junior engineers and conducted code reviews",
        bulletPoint: true,
      },
    ],
  },
];
```

---

## Projects (Optional)

Side projects, portfolio items, or significant project work.

```typescript
interface Project {
  name: string;
  duration: string;
  bubbles: string[];
  lines: TextLine[];
}
```

**Fields:**

- `name` (string) - Project name (can be empty if duration is the header)
- `duration` (string) - Timeframe or project length
- `bubbles` (string[]) - Technologies used
- `lines` (TextLine[]) - Project description

**Example:**

```typescript
projects: [
  {
    name: "Real-time Chat Application",
    duration: "3 months project",
    bubbles: ["WebSocket", "React", "Redis", "Docker"],
    lines: [
      {
        text: "Built scalable real-time messaging platform",
        bulletPoint: false,
      },
      {
        text: "Implemented end-to-end encryption for secure messaging",
        bulletPoint: true,
      },
      {
        text: "Deployed on AWS with auto-scaling support",
        bulletPoint: true,
      },
    ],
  },
];
```

---

## Technical Skills (Optional)

Technical skills grouped by category.

```typescript
interface TechnicalCategory {
  category: string;
  bubbles: string[];
}
```

**Fields:**

- `category` (string) - Category name
- `bubbles` (string[]) - Skills in this category

**Example:**

```typescript
technical: [
  {
    category: "Languages",
    bubbles: ["TypeScript", "Python", "Go", "Java", "SQL"],
  },
  {
    category: "Frontend",
    bubbles: ["React", "Vue.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    bubbles: ["Node.js", "Django", "FastAPI", "GraphQL"],
  },
  {
    category: "DevOps & Cloud",
    bubbles: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    category: "Databases",
    bubbles: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
];
```

---

## Languages (Optional)

Spoken/written language proficiencies.

```typescript
interface Language {
  language: string;
  abbreviation: string;
  level: string;
}
```

**Fields:**

- `language` (string) - Language name
- `abbreviation` (string) - Two-letter code (e.g., "EN", "ES")
- `level` (string) - Proficiency level

**Common Levels:**

- "Native"
- "Fluent"
- "Professional"
- "Intermediate"
- "Basic"

**Example:**

```typescript
languages: [
  { language: "English", abbreviation: "EN", level: "Native" },
  { language: "Spanish", abbreviation: "ES", level: "Professional" },
  { language: "Mandarin", abbreviation: "ZH", level: "Intermediate" },
];
```

---

## Education (Optional)

Academic background and certifications.

```typescript
interface Education {
  degree: string;
  school: string;
  location: string;
  years: string;
}
```

**Fields:**

- `degree` (string) - Degree or certification name
- `school` (string) - Institution name
- `location` (string) - City, State/Country
- `years` (string) - Years attended or graduation year

**Example:**

```typescript
education: [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    years: "2015-2019",
  },
  {
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    location: "Online",
    years: "2022",
  },
];
```

---

## Complete Example

```typescript
import { CVConfig } from "../src/types/cv.types";

export const config: CVConfig = {
  header: {
    name: "Jane Smith",
    resume: [
      "Senior Full-Stack Developer with 10 years experience",
      "Specialized in React, Node.js, and cloud architecture",
    ],
  },

  profile: {
    shouldDisplayProfileImage: true,
    lines: ["New York, NY", "+1 (555) 123-4567", "jane.smith@email.com"],
    links: [
      { type: "LinkedIn", link: "linkedin.com/in/janesmith" },
      { type: "GitHub", link: "github.com/janesmith" },
    ],
  },

  workExperience: [
    {
      position: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Remote",
      years: "2020 - Present",
      bubbles: ["React", "TypeScript", "Node.js"],
      lines: [{ text: "Led team of 5 engineers", bulletPoint: true }],
    },
  ],

  technical: [
    {
      category: "Languages",
      bubbles: ["TypeScript", "Python", "Go"],
    },
  ],

  languages: [{ language: "English", abbreviation: "EN", level: "Native" }],

  education: [
    {
      degree: "BS in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      years: "2015-2019",
    },
  ],
};

export default config;
```

---

## Type Definitions

Full type definitions with JSDoc are available in:

**`src/types/cv.types.ts`**

Import types in your config:

```typescript
import { CVConfig } from "../src/types/cv.types";
```

---

## Validation

All configs are validated using Zod schemas. Validation errors will show:

- Field path (e.g., `header.name`)
- Error message
- Location in config file

See `src/utils/validate.ts` for validation logic.
