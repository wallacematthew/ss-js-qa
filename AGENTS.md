# Repository Guidelines

## Project Structure & Module Organization
- Monorepo via pnpm workspaces.
- Apps:
  - `apps/vanilla` — Vite + JS (entry `src/main.js`, build → `dist/`).
  - `apps/react` — Next.js (pages in `pages/`).
  - `apps/vue` — Vite + Vue (entry `src/main.js`).
  - `apps/angular` — Angular CLI (standalone components, routing).
- Root config: `.eslintrc.json`, `.prettierrc.json`, `.eslintignore`, `.prettierignore`, `pnpm-workspace.yaml`.

## Build, Test, and Development Commands
- Install (root): `pnpm install`.
- Vanilla: `pnpm dev:vanilla`, `pnpm build:vanilla`, `pnpm test:vanilla`, `pnpm coverage:vanilla`.
- React: `pnpm dev:react`, `pnpm build:react`, `pnpm test:react`.
- Vue: `pnpm dev:vue`, `pnpm build:vue`, `pnpm test:vue`.
- Angular: `pnpm dev:angular`, `pnpm build:angular`, `pnpm test:angular`.
- Lint/Format: root `pnpm run lint`, `pnpm run format:check`; per-app `pnpm -F <pkg> run lint`.

## Coding Style & Naming Conventions
- JavaScript ESM; 2-space indent; ~100 char width; semicolons; single quotes.
- Files: `kebab-case.js`; variables/functions `camelCase`; classes `PascalCase`.
- Keep modules small/pure; UI logic in view/entry files.

## Testing Guidelines
- Vanilla/React/Vue: Vitest. Place `*.test.js`/`*.spec.js` near code or under `tests/`.
- Angular: `ng test` (Karma + Jasmine) with `test:ci` for headless runs.
- Aim for meaningful coverage on core utilities; avoid implementation-detail tests.

## Commit & Pull Request Guidelines
- Conventional Commits (e.g., `feat: add navbar`, `fix: handle null inputs`).
- PRs: clear description, linked issues (`Closes #123`), screenshots for UI when relevant.
- CI runs for visibility; you may merge without waiting for all checks.

## Deployment (Netlify)
- Configure each site in the Netlify UI (no root config file):
  - Vanilla: Base `apps/vanilla`, build `npm run build`, publish `dist`, Node `20`.
  - React: Base `apps/react`, build `npm run build`, publish `.next`, enable Next.js plugin.
  - Vue: Base `apps/vue`, build `npm run build`, publish `dist`.
  - Angular: Base `apps/angular`, build `npm run build`, publish `dist/ss-angular-qa/browser`.
- Push to `main` to deploy; Deploy Previews are optional but helpful.
