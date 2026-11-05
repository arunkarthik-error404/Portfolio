# Deploying to Vercel

1. Push this repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo. Framework preset: Next.js (auto-detected). No env vars needed.
3. After the first deploy, set `site.url` and `person.links.site` in `lib/content.ts` to the real domain, then redeploy.
4. Contact form: submit once and click the activation link FormSubmit emails to the address in `site.formEndpoint`.
5. Optional: set `site.gaId` in `lib/content.ts` to enable Google Analytics.
