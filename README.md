# gdsc_nus

A React + TypeScript project bootstrapped with Vite.

## Tech stack

- React 18
- TypeScript
- Vite (dev server & build)

## Prerequisites

- Node.js ≥ 18
- Package manager: Yarn (via Corepack) or npm

If `yarn` isn't available:

```bash
corepack enable
corepack prepare yarn@stable --activate
```

## Getting started

### 1) Install dependencies

```bash
# with yarn
yarn

# or with npm
npm install
```

### 2) Run the dev server

```bash
# yarn
yarn dev

# npm
npm run dev
```

Open the printed URL (usually http://localhost:5173).

### 3) Build for production

```bash
# yarn
yarn build

# npm
npm run build
```

The production files will be in the `dist/` folder.

### 4) Preview the production build (local)

```bash
# yarn
yarn preview

# npm
npm run preview
```

This serves the `dist/` output locally to verify the build.

## Common scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Project structure

```
gdsc_nus/
  index.html
  package.json
  tsconfig.json
  vite.config.ts
  src/
    main.tsx
    App.tsx
    assets/
```

## Environment variables (optional)

Vite exposes variables prefixed with `VITE_`.

- Create a `.env` file in the project root:

```bash
VITE_API_BASE_URL=https://api.example.com
```

- Use in code: `import.meta.env.VITE_API_BASE_URL`

## Troubleshooting

- **Port already in use**: `yarn dev --port 5174` (or `npm run dev -- --port 5174`)
- **Install errors on macOS (Apple Silicon)**: ensure Homebrew/Node paths are set and Node ≥ 18.
- **Blank page after build** (when hosting at a subpath): set `base` in `vite.config.ts` to your subpath.

## Deployment

The `dist/` folder is static. You can deploy it to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any static host.

---

