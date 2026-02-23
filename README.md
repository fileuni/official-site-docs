# official-site-docs

Public Starlight documentation site for FileUni.

## Overview

- This repository owns docs rendering, docs theme, and docs navigation.
- Documentation pages are versioned in `src/content/docs`.
- Chinese docs use the `zh-cn` locale folder to align with Starlight locale routing.
- Theme mode switch (light/dark) and locale switch are provided by Starlight UI.

## Key Paths

- `astro.config.mjs`: Starlight site configuration, locales, sidebar, and edit links.
- `wrangler.toml`: Cloudflare Pages/Workers deployment configuration.
- `src/content.config.ts`: Astro content collections with Starlight docs schema.
- `src/content/docs`: English documentation pages (root locale).
- `src/content/docs/zh-cn`: Simplified Chinese documentation pages.
- `src/assets/logo-light.svg` and `src/assets/logo-dark.svg`: Docs site logos.

## Interactions And Responsibilities

- `official-site-docs` is responsible for docs build and docs deploy output.
- `official-site-private` is responsible for private product website and account workflows.
- `official-site-private` links to `https://docs.fileuni.com` and does not embed docs build artifacts.

## Constraints

- Keep docs slugs stable to avoid broken inbound links from product pages.
- Use Starlight frontmatter schema-compatible metadata for all docs pages.
- Do not commit secrets, tokens, keys, or private endpoints.

## Build And Deploy

- Local dev: `bun run dev`
- Build: `bun run build`
- Cloudflare deploy: `bun run deploy:cf`
