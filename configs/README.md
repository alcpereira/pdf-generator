# CV Configs

This directory contains your CV configuration files. Each config is a TypeScript file that defines your CV data.

## ⚠️ Important: Mock Data Fallback

**`base.config.ts` contains MOCK DATA and serves as a FALLBACK template.**

This file uses placeholder information (fake names, companies, emails) to show you what a completed CV looks like. **DO NOT use this file directly for real job applications!**

You'll see console warnings when using `base.config.ts` - this is intentional to remind you to create your own config file.

## Quick Start

### 1. Copy the template

```bash
cp configs/base.config.ts configs/john-doe.config.ts
```

### 2. Edit your copy

Your file is automatically gitignored, so your personal data stays private. Use any editor or ask an AI assistant to help modify it.

**Replace all mock data**:

- Change "Alex Johnson" to your real name
- Update email from "example.com" to your real email
- Replace "TechCorp Inc.", "DataSoft Solutions", etc. with your actual employers
- Update all locations, dates, and achievements with real information

### 3. Generate PDF

```bash
pnpm pdf --config your-name
```

The PDF will be saved as `output.pdf` by default. You can specify a custom filename:

```bash
pnpm pdf --config your-name --output "John_Doe_Resume.pdf"
```

## Multiple CVs

Need different versions for different jobs? Just copy again:

```bash
# Your master CV
cp configs/base.config.ts configs/john-doe.config.ts

# Tailored for FAANG interview
cp configs/john-doe.config.ts configs/faang-2024.config.ts
# (Edit to emphasize systems design, algorithms, etc.)

# Tailored for startup role
cp configs/john-doe.config.ts configs/startup-role.config.ts
# (Edit to emphasize MVP building, versatility, etc.)
```

All `*.config.ts` files (except `base.config.ts`) are gitignored by default.

## File Structure

Each config file exports a `CVConfig` object with the following structure:

```typescript
{
  header: {
    name: "Your Name",
    resume: ["Professional headline", "Brief summary"]
  },
  profile: {
    shouldDisplayProfileImage: true,
    lines: ["Location", "Phone", "Email"],
    links: [
      { type: "LinkedIn", link: "linkedin.com/in/you" },
      { type: "GitHub", link: "github.com/you" }
    ]
  },
  // Optional sections:
  workExperience: [...],
  projects: [...],
  technical: [...],
  languages: [...],
  education: [...]
}
```

## Type Safety

All config files are TypeScript with full type checking. Your editor will provide:

- Autocomplete for all fields
- Inline documentation (hover over any field)
- Type errors if something is wrong

See `src/types/cv.types.ts` for detailed type definitions.

## Git Tracking (Optional)

By default, all your personal CV configs are gitignored for privacy.

Want to version control your CV? Edit `configs/.gitignore`:

```gitignore
# Default: Ignore all configs except templates
*.config.ts
!base.config.ts
!mock.config.ts

# Uncomment to track specific files:
# !your-name.config.ts
```

## Help

- **Type definitions**: See `src/types/cv.types.ts` for all available fields
- **AI editing guide**: See `docs/AI_GUIDE.md` (coming soon)
- **Schema reference**: See `docs/SCHEMA.md` (coming soon)
- **Issues**: https://github.com/your-repo/cv-generator/issues
