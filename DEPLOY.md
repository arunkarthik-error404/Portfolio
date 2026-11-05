# Deploying to Vercel

1. Push this repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo. Framework preset: Next.js (auto-detected). No env vars needed.
3. After the first deploy, set `site.url` and `person.links.site` in `lib/content.ts` to the real domain, then redeploy.
4. Contact form: create an API key at [resend.com](https://resend.com) and add `RESEND_API_KEY` in Vercel → Settings → Environment Variables, then redeploy. Optional: `CONTACT_TO_EMAIL` (defaults to `person.email`) and `CONTACT_FROM_EMAIL` (defaults to Resend's `onboarding@resend.dev` sender, which can only deliver to your Resend account email).
5. Optional: set `site.gaId` in `lib/content.ts` to enable Google Analytics.
