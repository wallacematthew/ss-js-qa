# Repository Guidelines

## Project Structure & Module Organization
- App code in `src/` (entry: `src/main.js`).
- Static HTML/CSS at project root (`index.html`, `styles.css`).
- Tests in `tests/` (unit examples live here). 
- Build output in `dist/` (generated). Netlify reads from `dist/`.
- Config: `netlify.toml`, `.eslintrc.json`, `.prettierrc.json`, `.eslintignore`, `.prettierignore`.

## Build, Test, and Development Commands
- `npm i`: install dependencies.
- `npm run dev`: Vite dev server with HMR.
- `npm run build`: production build to `dist/`.
- `npm run preview`: serve the built app locally.
- `npm test`: run Vitest once. `npm run test:watch` to watch. `npm run coverage` for report.
- `npm run lint` / `npm run lint:fix`: ESLint check/fix. `npm run format` to apply Prettier.

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
- Netlify uses `netlify.toml`: build `npm run build`, publish `dist`, Node `20`.
- Push to default branch to trigger deploy; use environment vars via Netlify UI (never commit secrets).
