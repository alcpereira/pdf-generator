# CV PDF Generator

An AI-ready, multi-config CV generator that creates professional PDFs from TypeScript configurations.

## Features

- **Type-Safe Configs** - Full TypeScript support with autocomplete and validation
- **Multiple CVs** - Create different versions for different jobs
- **Privacy First** - Personal configs are gitignored by default
- **AI-Friendly** - Clear structure with JSDoc documentation for AI assistants
- **Simple CLI** - Easy PDF generation with customizable options
- **Hot Reload** - Live preview in browser with instant updates

## Quick Start

### Prerequisites

Make sure you have the correct version of Node.js installed. You can use a node version manager that supports `.node-version` file such as [`fnm`](https://github.com/Schniz/fnm).

This project uses [pnpm](https://pnpm.io/) as the package manager, managed via [Corepack](https://nodejs.org/api/corepack.html). Corepack comes bundled with recent Node.js versions and ensures everyone uses the same `pnpm` version as specified in `package.json`.

If you haven't already, enable Corepack:

```sh
corepack enable
```

You do not need to install pnpm globally. Corepack will automatically use the correct version.

### Installation

```sh
# Install dependencies
pnpm install
```

### Create Your CV

```sh
# 1. Copy the base template
cp configs/base.config.ts configs/my-cv.config.ts

# 2. Edit your config file
# Open configs/my-cv.config.ts in your editor

# 3. (Optional) Add your profile picture
# Place your photo at: src/assets/profile.jpeg

# 4. Generate PDF
pnpm pdf --config my-cv
```

Your PDF will be saved as `output.pdf` and automatically opened.

## Usage

### Generate PDF

```sh
# Use specific config
pnpm pdf --config my-cv

# Custom output filename
pnpm pdf --config my-cv --output "John_Doe_Resume.pdf"

# Don't auto-open PDF
pnpm pdf --config my-cv --no-open

# Custom scale (default 0.8)
pnpm pdf --config my-cv --scale 0.75
```

### Development Mode

Preview your CV in the browser with hot reload:

```sh
pnpm dev
```

Open http://localhost:5173 to see live updates as you edit your config.

## Multiple CVs

Need different versions for different jobs? Just copy and edit:

```sh
# Your master CV
cp configs/base.config.ts configs/john-doe.config.ts

# Tailored for FAANG interview
cp configs/john-doe.config.ts configs/faang-2024.config.ts

# Tailored for startup role
cp configs/john-doe.config.ts configs/startup-role.config.ts
```

All `*.config.ts` files (except `base.config.ts`) are automatically gitignored for privacy.

## Configuration Structure

Each CV config is a TypeScript file with full type safety:

```typescript
import { CVConfig } from "../src/types/cv.types";

export const config: CVConfig = {
  // Required sections
  header: {
    name: "Your Name",
    resume: ["Professional headline", "Summary of experience"]
  },

  profile: {
    shouldDisplayProfileImage: true,
    lines: ["Location", "Phone", "Email"],
    links: [
      { type: "LinkedIn", link: "linkedin.com/in/you" },
      { type: "GitHub", link: "github.com/you" }
    ]
  },

  // Optional sections
  workExperience: [...],
  projects: [...],
  technical: [...],
  languages: [...],
  education: [...]
};

export default config;
```

See [configs/README.md](./configs/README.md) for detailed usage instructions.

## Documentation

- **[AI Guide](./docs/AI_GUIDE.md)** - Quick reference for AI assistants editing CVs
- **[Schema Reference](./docs/SCHEMA.md)** - Complete field documentation
- **[Configs README](./configs/README.md)** - User instructions for CV configs
- **[Type Definitions](./src/types/cv.types.ts)** - Full TypeScript types with JSDoc

## Git Safety

Your personal CV data is protected:

- All `configs/*.config.ts` files are gitignored (except `base.config.ts`)
- Generated PDFs are gitignored
- Profile pictures are gitignored

To version control your CV in git, edit `configs/.gitignore`:

```gitignore
# Uncomment to track specific files:
# !my-cv.config.ts
```

## Built With

- **React** + **Vite** - Fast development and building
- **TypeScript** - Type safety and great DX
- **Puppeteer** - High-quality PDF generation
- **Zod** - Runtime validation
- **Commander** - CLI interface

## Project Structure

```
cv-generator/
├── configs/              # Your CV configurations
│   ├── base.config.ts   # Template (committed)
│   └── *.config.ts      # Your CVs (gitignored)
├── src/
│   ├── types/           # TypeScript definitions
│   ├── utils/           # Config loader & validation
│   ├── components/      # React components
│   └── App.tsx
├── docs/                # Documentation
└── pdf.ts              # PDF generation CLI
```

## Contributing

Contributions are welcome! Here's a quick guide for writing commit messages:

1. **Start with a type**: Use `fix:`, `feat:`, `docs:`, etc., to indicate the nature of the change
2. **Add a brief description**: Follow the type with a concise summary of the change (2-4 words)
3. **Optional details**: Use a blank line to separate the summary from a longer description if needed
4. **Reference issues**: Include issue numbers or tags if applicable

See [Conventional Commits](https://www.conventionalcommits.org/) for more details.

## License

MIT - See [LICENSE](./LICENSE) file for details.
