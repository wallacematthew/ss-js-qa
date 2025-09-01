# SS JS QA — MVP Monorepo

[![CI](https://github.com/wallacematthew/ss-js-qa/actions/workflows/ci.yml/badge.svg)](https://github.com/wallacematthew/ss-js-qa/actions/workflows/ci.yml)

Monorepo hosting minimal MVP apps to validate SearchStax UI kits across frameworks.

## Quick Start
- Install (root): `pnpm install`
- Vanilla dev: `pnpm dev:vanilla` → http://localhost:5173
- Vanilla build: `pnpm build:vanilla` → outputs to `apps/vanilla/dist/`
- Vanilla tests: `pnpm test:vanilla` / coverage: `pnpm coverage:vanilla`
- React dev: `pnpm dev:react` (Next.js)
- Vue dev: `pnpm dev:vue`

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
- Node: `20` (set in site UI)

Deploy now: [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fwallacematthew%2Fss-js-qa)

Live sites
- Vanilla: https://ss-js-qa.netlify.app
- React: https://ss-react-qa.netlify.app/
- Vue: https://ss-vue-qa.netlify.app/
- Angular (placeholder app): https://ss-angular-qa.netlify.app/

## Contributing
See `AGENTS.md` for structure, scripts, linting, tests, and PR guidelines.

## PR & Deploy Previews
- Typical flow: create a branch, push, open a PR to `main`.
- CI: runs builds for all apps; quality checks (format/lint/tests) run but are non‑blocking.
- Deploy Previews: Netlify posts a preview link per app on every PR:
  - ss-js-qa (vanilla)
  - ss-react-qa (Next.js)
  - ss-vue-qa (Vue)
  - ss-angular-qa (Angular)
- Merge policy: no branch protection required; feel free to merge once you’re satisfied with the previews.
