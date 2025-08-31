# SS JS QA — MVP Monorepo

Monorepo hosting minimal MVP apps to validate SearchStax UI kits across frameworks.

## Quick Start
- Install (root): `pnpm install`
- Vanilla dev: `pnpm dev:vanilla` → http://localhost:5173
- Vanilla build: `pnpm build:vanilla` → outputs to `apps/vanilla/dist/`
- Vanilla tests: `pnpm test:vanilla` / coverage: `pnpm coverage:vanilla`

## Routes (Vanilla)
- `#/` — Home (SearchStax mount placeholder)
- `#/financial-aid` — Financial Aid
- `#/graduate-programs` — Graduate Programs
- `#/undergraduate-programs` — Undergraduate Programs
- `#/contact` — Contact (SearchStax mount placeholder)

## Structure
- `apps/vanilla` — Vite + JS (current working app)
- `apps/react` — Next.js (skeleton)
- `apps/vue` — Vite + Vue (skeleton)
- `apps/angular` — Angular (placeholder)

## Deploy (Netlify)
- For vanilla site: set Base directory to `apps/vanilla`.
- Build command: `npm run build` (Netlify runs in app base).
- Publish directory: `dist`
- Node: `20` (set in app `netlify.toml`)

Deploy now: [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fwallacematthew%2Fss-js-qa)

Live vanilla site: https://ss-js-qa.netlify.app

## Contributing
See `AGENTS.md` for structure, scripts, linting, tests, and PR guidelines.
