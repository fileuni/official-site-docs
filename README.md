# official-site-docs

This repository hosts the FileUni documentation site built with Astro + Starlight.

## Features

- Starlight docs site
- Multi-language support (`English` + `简体中文`)
- Dark / light theme switch (built-in Starlight UI)
- "Edit this page" links to this public repository
- Static generation output for Cloudflare Pages Git deployment

## Local development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Build output directory: `dist`

## Cloudflare Pages deployment (Git)

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `bun install && bun run build`
- Build output directory: `dist`
- Node.js version: `20` (recommended)

## Custom domain

Bind the custom domain in Cloudflare Pages project settings:

- `docs.fileuni.com`

This repository is public. Do not commit secrets, private keys, tokens, or private endpoints.
