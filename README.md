# inthehiggsfield.github.io

Personal site for Johnathan Shirley: about, blog, and projects, with an original cyberpunk theme. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

Requires Node.js 22 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Write a blog post

Add a Markdown file to `src/content/blog/`:

```md
---
title: "My essay"
description: "One-sentence summary shown in the post list."
pubDate: 2026-11-14
tags: ["life"]
draft: false
---

Essay text here.
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup on GitHub: the repository must be named `inthehiggsfield.github.io`, and under
**Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.

## Layout

- `src/styles/global.css`: colors, fonts, neon/glitch effects
- `src/layouts/Base.astro`: page shell (head, nav, footer)
- `src/components/`: Terminal, page header, nav, footer
- `src/pages/`: one file per route
- `src/assets/photos/`: photos (location data stripped; Astro serves optimized WebP)
- `public/`: files served as-is (resume PDF, favicon)
