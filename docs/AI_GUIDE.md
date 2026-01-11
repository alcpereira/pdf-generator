# AI Editing Guide

Quick reference for AI assistants editing CV configurations.

## File to Edit

`configs/your-cv.config.ts`

All CV configs are TypeScript files in the `configs/` directory.

## Common Tasks

### 1. Add Work Experience

Add a new entry to the `workExperience` array:

```typescript
workExperience: [
  {
    position: "Senior Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Remote",
    years: "2020 - Present",
    bubbles: ["React", "TypeScript", "Node.js", "AWS"],
    lines: [
      {
        text: "Led team of 5 engineers building customer-facing dashboard",
        bulletPoint: true,
      },
      {
        text: "Reduced API response time by 60% through optimization",
        bulletPoint: true,
      },
    ],
  },
  // ... other experiences
];
```

### 2. Add Technical Skills

Add or modify categories in the `technical` array:

```typescript
technical: [
  {
    category: "Languages",
    bubbles: ["TypeScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frameworks",
    bubbles: ["React", "Node.js", "Django", "Flask"],
  },
  {
    category: "Tools & Platforms",
    bubbles: ["AWS", "Docker", "Kubernetes", "PostgreSQL"],
  },
];
```

### 3. Add Project

Add a new entry to the `projects` array:

```typescript
projects: [
  {
    name: "E-commerce Platform",
    duration: "6 months project",
    bubbles: ["React", "Node.js", "PostgreSQL", "Stripe"],
    lines: [
      {
        text: "Built full-stack e-commerce platform with payment integration",
        bulletPoint: false,
      },
      {
        text: "Implemented inventory management system",
        bulletPoint: true,
      },
      {
        text: "Achieved 99.9% uptime over 6 months",
        bulletPoint: true,
      },
    ],
  },
];
```

### 4. Update Contact Information

Modify the `profile` section:

```typescript
profile: {
  shouldDisplayProfileImage: true,
  lines: [
    "San Francisco, CA",
    "American",
    "+1 (555) 123-4567",
    "john.doe@email.com"
  ],
  links: [
    { type: "LinkedIn", link: "linkedin.com/in/johndoe" },
    { type: "GitHub", link: "github.com/johndoe" },
    { type: "Website", link: "johndoe.dev" }
  ]
}
```

### 5. Add Education

Add an entry to the `education` array:

```typescript
education: [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    years: "2015-2019",
  },
];
```

### 6. Add Language

Add an entry to the `languages` array:

```typescript
languages: [
  { language: "English", abbreviation: "EN", level: "Native" },
  { language: "Spanish", abbreviation: "ES", level: "Professional" },
  { language: "French", abbreviation: "FR", level: "Intermediate" },
];
```

### 7. Remove Section

To hide a section, make it an empty array or omit it:

```typescript
// Option 1: Empty array
projects: [];

// Option 2: Remove the property entirely
// Just delete the projects line
```

### 8. Tailor CV for Specific Job

When tailoring a CV:

1. **Copy the file first:**

   ```bash
   cp configs/john-doe.config.ts configs/google-swe-2024.config.ts
   ```

2. **Emphasize relevant experience:**

   - Reorder work experience to highlight most relevant roles
   - Add more detail to relevant bullet points
   - Add relevant technologies to bubbles arrays

3. **Update professional summary:**
   ```typescript
   header: {
     name: "John Doe",
     resume: [
       "Senior Software Engineer specializing in distributed systems",
       "8 years experience building scalable backend services",
       "Passionate about system design and performance optimization"
     ]
   }
   ```

## Generate PDF

After editing:

```bash
# Generate PDF with default name (output.pdf)
pnpm pdf --config your-cv

# Generate PDF with custom name
pnpm pdf --config your-cv --output "John_Doe_Resume.pdf"

# Generate without auto-opening
pnpm pdf --config your-cv --no-open
```

## Type Safety

All configs have full TypeScript type checking. Your editor will show:

- **Autocomplete** for all fields
- **Documentation** on hover
- **Errors** if structure is wrong

See `src/types/cv.types.ts` for complete type definitions.

## Tips for AI Assistants

1. **Always preserve structure** - Don't remove required fields (header, profile)
2. **Use bulletPoint wisely** - `true` adds a bullet, `false` shows plain text
3. **Keep bubbles concise** - Short technology names work best (e.g., "React" not "React.js Framework")
4. **Years format** - Use "YYYY - Present" or "YYYY - YYYY" format
5. **Professional tone** - Use action verbs and quantify achievements

## Complete Schema Reference

See [SCHEMA.md](./SCHEMA.md) for detailed documentation of all available fields.
