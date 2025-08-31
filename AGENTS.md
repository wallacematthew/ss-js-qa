# Repository Guidelines

## Project Structure & Module Organization
- Source lives in `src/` (libraries, helpers) and executable scripts in `scripts/`.
- Tests go in `tests/` with subfolders like `tests/unit/` and `tests/e2e/`.
- Shared test data in `fixtures/` and non-code assets in `assets/`.
- Config lives at the root (e.g., `.eslintrc.*`, `.prettierrc`, `tsconfig.json`, `vitest.config.ts`/`jest.config.js`).

## Build, Test, and Development Commands
- `npm i`: installs dependencies.
- `npm test`: runs the test suite once.
- `npm run test:watch`: reruns tests on file changes.
- `npm run coverage`: generates coverage report (e.g., `coverage/`).
- `npm run lint` / `npm run format`: lints and formats code.
- If missing, add these scripts to `package.json` and use `pnpm`/`yarn` equivalents if preferred.

## Coding Style & Naming Conventions
- Use TypeScript when possible (`.ts`/`.tsx`); otherwise `.js` with JSDoc.
- Indentation: 2 spaces; line width: 100–120 chars; semicolons required.
- Naming: files `kebab-case.ts`; classes `PascalCase`; variables/functions `camelCase`.
- Run Prettier for formatting and ESLint for quality. Example: `npm run lint && npm run format`.

## Testing Guidelines
- Framework: Vitest or Jest; prefer fast, isolated unit tests.
- Test files: `*.test.ts` next to source or in `tests/**`. Example: `src/math/add.ts` → `tests/unit/math/add.test.ts`.
- Aim for meaningful coverage (e.g., 80%+ by line and branch); avoid testing implementation details.
- Use deterministic fixtures; avoid network or real filesystem in unit tests.

## Commit & Pull Request Guidelines
- Use Conventional Commits (e.g., `feat: add URL validator`, `fix: handle null inputs`).
- Keep commits focused; include brief rationale in the body when non-obvious.
- PRs must include: clear description, linked issues (`Closes #123`), test evidence (output or screenshots), and notes on breaking changes.
- Keep CI green; run `npm test` and `npm run lint` locally before opening PRs.

## Security & Configuration Tips
- Never commit secrets; use `.env.local` and provide `.env.example`.
- Validate user input and sanitize file paths/URLs.
- Review dependency updates for risk; pin critical versions when needed.
