# Repository Guidelines

## Project Structure & Module Organization
- Monorepo via pnpm workspaces.
- Apps:
  - `apps/vanilla` — Vite + JS (entry: `src/main.js`, build → `dist/`).
  - `apps/react` — Next.js skeleton (`pages/` routes).
  - `apps/vue` — Vite + Vue skeleton (`src/main.js`).
  - `apps/angular` — placeholder (to be scaffolded).
- Root config: `.eslintrc.json`, `.prettierrc.json`, `.eslintignore`, `.prettierignore`, `pnpm-workspace.yaml`.

## Build, Test, and Development Commands
- Install: `pnpm install` (root).
- Vanilla dev/build: `pnpm dev:vanilla`, `pnpm build:vanilla`, preview inside app.
- Tests (vanilla): `pnpm test:vanilla`, coverage `pnpm coverage:vanilla`.
- Lint/Format (root): `pnpm run lint`, `pnpm run format:check`.

## Coding Style & Naming Conventions
- JavaScript ESM (`type: module`). Indentation: 2 spaces; width: ~100; semicolons on; single quotes.
- Files: `kebab-case.js`; functions/vars `camelCase`; classes `PascalCase`.
- Keep modules small and pure; DOM-only in app entry or dedicated view files.

## Testing Guidelines
- Framework: Vitest. Place tests as `*.test.js` in `tests/` or beside source.
- Target behavior over implementation; use simple, deterministic inputs.
- Coverage target: aim for 80%+ line/branch on core utils; exclude trivial glue.

## Commit & Pull Request Guidelines
- Conventional Commits (e.g., `feat: add navbar`, `fix: handle null inputs`).
- Keep PRs focused; include a clear description, linked issues (`Closes #123`), and screenshots for UI.
- Ensure `npm run lint` and `npm test` are clean before opening.

## Deployment (Netlify)
- Each app has its own `netlify.toml` under its base dir.
- Vanilla site: Base `apps/vanilla`, build `npm run build`, publish `dist`, Node `20`.
- Push to `main` to trigger deploy; enable Deploy Previews on PRs.
