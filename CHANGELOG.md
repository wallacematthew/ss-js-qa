# Changelog

## [0.2.0](https://github.com/wallacematthew/ss-js-qa/compare/ss-js-qa-v0.1.0...ss-js-qa-v0.2.0) (2025-09-01)


### Features

* **angular:** scaffold Angular app via CLI; add routes and pages to match MVP; add Netlify config; build verified ([2e8f185](https://github.com/wallacematthew/ss-js-qa/commit/2e8f185ccd626d886d394edf0c2ef0bbb34511ae))
* **app:** add simple hash router and sample pages (home, financial aid, graduate programs, undergraduate programs, contact); update layout and styles ([bbb6bdf](https://github.com/wallacematthew/ss-js-qa/commit/bbb6bdfab215b81f55ab8c909621712d1e4b80a8))
* **react:** add custom 404 page; chore(scripts): add root test/dev/build scripts for all apps ([d4def69](https://github.com/wallacematthew/ss-js-qa/commit/d4def69f7cfeef6ac9e1f9459488bb7d53b2a4d6))
* **react:** align layout/styles and home content with vanilla app for parity ([bb829c9](https://github.com/wallacematthew/ss-js-qa/commit/bb829c9b4bf863e0cfedc8ed4cbaec3545354fe3))
* **search:** add /search route/page in all apps with placeholder mount (searchstax-root) and nav links ([ade3d61](https://github.com/wallacematthew/ss-js-qa/commit/ade3d6164d5f404e1a6a4166ef3575e1d37e5707))
* standardize page titles across apps (vanilla/vue/react/angular) and add title smoke tests for vanilla/vue/react ([558e3b6](https://github.com/wallacematthew/ss-js-qa/commit/558e3b6d9591b425cf2e58b6f757b0248558c660))


### Bug Fixes

* **angular/netlify:** publish dist/ss-angular-qa/browser (Angular v18 output) and place _redirects in browser folder ([8815865](https://github.com/wallacematthew/ss-js-qa/commit/881586545cf585e0ca754641a622f0dea70b23d3))
* **angular:** override Netlify default 404 with minimal redirect to home to avoid overlay content ([bc66474](https://github.com/wallacematthew/ss-js-qa/commit/bc66474b3c066475bc716df7af1d2afb12afc1d7))
* **angular:** remove default starter template; use clean header/router/footer layout only ([c3e2690](https://github.com/wallacematthew/ss-js-qa/commit/c3e26909e60ef32d7f790df9ca5386aa19897cca))
* **netlify:** add SPA redirects via _redirects for vanilla/vue/angular to prevent 404s on client routes ([247e7f5](https://github.com/wallacematthew/ss-js-qa/commit/247e7f571b4b188121cb748999cb83f1d0f02032))
* **react:** replace internal &lt;a&gt; with next/link on home cards and 404 page to satisfy Next lint ([fd5a487](https://github.com/wallacematthew/ss-js-qa/commit/fd5a487da6521583796c450e9d3d801eb7cdc909))
* **vue:** switch to SFC App.vue so templates compile in production; keep mount diagnostics ([3b0fa21](https://github.com/wallacematthew/ss-js-qa/commit/3b0fa21ae1008b8b0e9b7535bc3dea6f274e4b97))
