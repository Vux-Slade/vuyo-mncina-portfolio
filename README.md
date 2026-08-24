# Vuyo Mncina — Portfolio

A personal portfolio site built with React + Vite, ready to deploy on Vercel.

## Before you publish

Everything below lives in **one file**: `src/data/content.js`. You shouldn't need to touch any component code.

1. **Profile photo** — drop an image into `public/images/` (e.g. `vuyo.jpg`), then set:
   ```js
   photo: "/images/vuyo.jpg",
   ```
   in the `profile` object.

2. **Contact links** — replace the placeholders in the `contact` object:
   ```js
   email: "your.email@example.com",
   github: "https://github.com/your-username",
   linkedin: "https://linkedin.com/in/your-profile",
   ```

3. **Project links** — once DonorConnect / OppHub have a repo or live URL, fill in `links.repo` / `links.live` for each project.

4. **Affiliations / achievements** — add new entries by copying the shape of an existing object in the `affiliations` or `achievements` arrays.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

- **Via Git**: push this repo to GitHub/GitLab/Bitbucket, then import it in Vercel. Framework preset "Vite" is auto-detected — no config needed (build command `npm run build`, output directory `dist`).
- **Via CLI**: `npx vercel` from this folder.

## Structure

```
src/
  data/content.js        all editable copy lives here
  components/            one component + stylesheet per section
  hooks/useReveal.js     scroll-reveal animation hook
```
