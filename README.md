# Liam Kinnally — Portfolio

Personal portfolio built with Astro, TypeScript, and Tailwind CSS.

## Local development

Requires Node.js 22.12+.

```bash
npm install
npm run dev
```

Then open the local URL printed by Astro.

## Production build

```bash
npm run build
```

## Deployment

This site is intended to deploy on Vercel from the `main` branch of this repository.
Vercel detects Astro automatically, so no custom build configuration is required.

Production domain:

`https://liamkinnally.com`

The custom domain should be added to the Vercel project after the initial deployment succeeds.

## Before publishing

- Replace the stylized evaluation graphic with a real NBA project chart when ready.
- Add LinkedIn once you want it in the nav/footer.
- Add a resume PDF to `public/resume.pdf` and link it from the hero when ready.
