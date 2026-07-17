# Portfolio

Full-stack engineer portfolio. Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Prerequisites

Node.js is **not currently installed** on this machine. Install the LTS from
https://nodejs.org (or via a version manager) before running the commands below.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where to edit content

All content is placeholder text marked with `// TODO` comments. Edit these files:

| Area | File |
| --- | --- |
| Top bar / name / nav links | `src/components/Navbar.tsx` |
| Hero headline & intro | `src/components/sections/Hero.tsx` |
| Bio & tech stack | `src/components/sections/About.tsx` |
| **Projects** (URLs, stack, descriptions) | `src/components/sections/Projects.tsx` |
| Experience timeline | `src/components/sections/Experience.tsx` |
| Contact links (email, GitHub) | `src/components/sections/Contact.tsx` |
| Footer | `src/components/sections/Footer.tsx` |

## Brand color

The primary navy `#08143b` is defined as the `navy` color in `tailwind.config.ts`
and used as the top bar background. Adjust shades there if needed.
