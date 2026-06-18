# Förderverein Kloster Nordalbanien

Website of the *Förderverein Kloster Nordalbanien* – a Swiss non-profit association (in formation, seat in the Canton of Zug) that collects donations in Switzerland and channels them, earmarked and verified, to people in Northern Albania through the sisters of the convent "Mutter der Barmherzigkeit" in Shkodra.

The site is a single-page marketing homepage plus legal pages (Impressum, Datenschutz), built as a statically exported [Next.js](https://nextjs.org) app and styled with [Tailwind CSS](https://tailwindcss.com) v4.

## Tech stack

- **Next.js 16** (App Router) with `output: "export"` – produces a fully static site
- **React 19**
- **Tailwind CSS v4** – design tokens live in the `@theme` block of [`app/globals.css`](app/globals.css)
- **TypeScript**

## Getting started

Install dependencies and start the dev server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command      | Description                                |
| ------------ | ------------------------------------------ |
| `yarn dev`   | Start the development server               |
| `yarn build` | Build and export the static site to `out/` |
| `yarn start` | Serve the production build                 |
| `yarn lint`  | Run ESLint                                 |

## Project structure

```
app/
  layout.tsx            Root layout, fonts (Fraunces + Source Sans 3), metadata
  globals.css           Tailwind import + @theme design tokens + animations
  page.tsx              Homepage, composed from section components
  impressum/page.tsx    Impressum (legal notice)
  datenschutz/page.tsx  Datenschutzerklärung (privacy policy)
src/
  components/
    elements/           Reusable building blocks (button, container, eyebrow, …)
    sections/           Page sections (hero, about, help, support, footer, …)
  lib/
    with-base-path.ts   Prefixes asset/links with BASE_PATH for sub-path hosting
```

## Deployment / base path

`yarn build` emits a static site into `out/`, deployable to any static host
(e.g. GitHub Pages). When hosting under a sub-path, set the `BASE_PATH`
environment variable at build time; [`next.config.ts`](next.config.ts) wires it
into `basePath`/`assetPrefix`, and [`src/lib/with-base-path.ts`](src/lib/with-base-path.ts)
prefixes internal links accordingly. Hosting at the domain root
(`klosternordalbanien.ch`) needs no `BASE_PATH`.

## Before going live

A few values in the current content are placeholders and must be confirmed:

- **Donation IBAN** – [`src/components/sections/support.tsx`](src/components/sections/support.tsx) still shows the `CH00…` placeholder.
- **Vorstand / association details** – names, UID and registry entry in [`app/impressum/page.tsx`](app/impressum/page.tsx) are filled in after the founding assembly (18 June 2026).
- Review the **Impressum** and **Datenschutzerklärung** legal text for accuracy.

Contact e-mail: `info@klosternordalbanien.ch`
