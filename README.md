# Kyrylo Yurchenko — Portfolio

![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-EN%20%2F%20DE-6366f1)
![License](https://img.shields.io/badge/license-MIT-22c55e)

Personal portfolio website built with Vue 3 and TypeScript. Showcases projects, skills, and contact information — available in English and German.

**Live site:** [kyrylostyle.github.io/portfolio](https://kyrylostyle.github.io/portfolio/)

---

## Features

- **EN / DE language switcher** — auto-detects browser language, persists selection in `localStorage`
- **Scroll-reveal animations** — powered by `IntersectionObserver`, respects `prefers-reduced-motion`
- **Sticky navigation** — with mobile hamburger menu and CV download button
- **Contact form** — Formspree integration with loading, success, and error states
- **Fully typed** — strict TypeScript throughout, including i18n schema enforcement at compile time
- **Bundled assets** — no external CDN dependencies, all icons and images bundled at build time
- **GitHub Pages deployment** — one-command deploy via `gh-pages`

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Vue 3 (Composition API) |
| Language | TypeScript (strict mode) |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Icons | @iconify/vue |
| i18n | vue-i18n 10 |
| Form backend | Formspree |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0`
- **npm** `>=10`

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/KyryloStyle/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server starts at `http://localhost:5173/portfolio/`.

---

## Environment Variables

No `.env` file is required. The only external integration is the Formspree endpoint, hardcoded in the contact composable.

| Location | Constant | Purpose |
|----------|----------|---------|
| `src/composables/useContactForm.ts` | `ENDPOINT` | Formspree form submission URL |

To point to a different form, update the `ENDPOINT` constant in that file.

---

## Project Structure

```
src/
├── assets/
│   ├── avatar.jpg              # Profile photo
│   ├── main.css                # Tailwind directives + global base styles
│   └── projects/               # Project screenshot images
├── components/
│   ├── layout/
│   │   ├── NavBar.vue          # Sticky nav with language switcher and CV download
│   │   └── AppFooter.vue       # Footer with back-to-top button
│   ├── sections/
│   │   ├── HeroSection.vue     # Landing screen
│   │   ├── AboutSection.vue    # Skills, education, languages
│   │   ├── ProjectsSection.vue # Project grid
│   │   └── ContactSection.vue  # Contact form and direct links
│   └── ui/
│       ├── SectionWrapper.vue  # Scroll-reveal wrapper using IntersectionObserver
│       └── ProjectCard.vue     # Reusable project card component
├── composables/
│   └── useContactForm.ts       # Form state machine (idle / loading / success / error)
├── data/
│   └── index.ts                # Non-translatable data: skills, languages, project meta
├── i18n/
│   ├── index.ts                # createI18n instance and setLocale() helper
│   ├── types.ts                # MessageSchema interface — the translation contract
│   └── locales/
│       ├── en.ts               # English translations
│       └── de.ts               # German translations
├── App.vue                     # Root component, syncs <html lang> with active locale
└── main.ts                     # Application entry point
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Type-check with `vue-tsc`, then build for production |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish to GitHub Pages |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run format` | Format `src/` with Prettier |

---

## Deployment

The site deploys to GitHub Pages via the `gh-pages` branch.

```bash
npm run deploy
```

This type-checks the project, builds the `dist/` folder, and pushes it to the `gh-pages` branch. GitHub Pages serves from that branch automatically.

> **CV file:** place your CV at `public/cv.pdf` before building. The Download CV buttons link to `/portfolio/cv.pdf`.

---

## Adding a New Language

1. Create `src/i18n/locales/fr.ts` implementing `MessageSchema` from `src/i18n/types.ts`
2. Register it in `src/i18n/index.ts`:
   ```ts
   import fr from './locales/fr'

   // extend the union type
   export type SupportedLocale = 'en' | 'de' | 'fr'

   // add to messages
   messages: { en, de, fr }
   ```
3. Add `'fr'` to the `locales` array in `src/components/layout/NavBar.vue`

No other changes required. TypeScript will surface any missing translation keys at compile time.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## License

MIT © Kyrylo Yurchenko
