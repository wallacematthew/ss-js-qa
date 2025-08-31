# SS JS QA — MVP App

[![CI](https://github.com/wallacematthew/ss-js-qa/actions/workflows/ci.yml/badge.svg)](https://github.com/wallacematthew/ss-js-qa/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/ss-js-qa/deploys)

Minimal Vite JS app to validate SearchStax Vanilla JS UI kit and docs. Deployed via Netlify with Deploy Previews for PRs.

## Quick Start
- Install: `npm i`
- Dev: `npm run dev` → http://localhost:5173
- Build: `npm run build` → outputs to `dist/`
- Preview: `npm run preview`

## Routes
- `#/` — Home (SearchStax mount placeholder)
- `#/financial-aid` — Financial Aid
- `#/graduate-programs` — Graduate Programs
- `#/undergraduate-programs` — Undergraduate Programs
- `#/contact` — Contact (SearchStax mount placeholder)

## Deploy (Netlify)
- Build command: `npm run build`
- Publish directory: `dist`
- Node: `20` (configured in `netlify.toml`)

Deploy now: [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fwallacematthew%2Fss-js-qa)

Live site: https://ss-js-qa.netlify.app

Update the Netlify badge after creating the site:
- Replace `your-site-id` with the site badge UUID (Netlify → Site settings → General → Status badges).

## Contributing
See `AGENTS.md` for structure, scripts, linting, tests, and PR guidelines.
