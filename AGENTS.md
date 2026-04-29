# AGENTS.md

This file is read by AI agents in future sessions to understand the project architecture, conventions, and non-obvious decisions.

## Project Overview

Restaurant website template built with TanStack Start and deployed on Netlify. All sections — hero, menu, delivery form, branch map, and reviews — live in a single route (`src/routes/index.tsx`). The template is intentionally self-contained so it is easy to customise by editing one file.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms (serverless, no backend) |
| Maps | OpenStreetMap embedded iframes (no API key) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
public/
  delivery-form.html   # Static Netlify Forms registration skeleton (NEVER delete or rename)
  placeholder.png      # Generic placeholder image
src/
  routes/
    __root.tsx         # Root layout: sets <title>, imports styles.css
    index.tsx          # Entire restaurant homepage (all sections + data arrays)
    products/          # Scaffold remnant — safe to delete if unused
  data/
    products.ts        # Scaffold remnant — safe to delete if unused
  styles.css           # Tailwind CSS 4 entry point + body reset
  router.tsx           # TanStack Router setup
netlify.toml           # Build command, publish dir (dist/client), dev port
vite.config.ts         # TanStack Start + Netlify Vite plugins + Tailwind
README.md              # User-facing setup guide
AGENTS.md              # This file
```

## Key Architectural Decisions

### Single-file page
All restaurant sections and their data are co-located in `src/routes/index.tsx`. This makes the template easy to hand off without hunting across multiple files. When the site grows (e.g. a dedicated `/menu` route), extract sections into `src/components/`.

### Netlify Forms — static skeleton pattern
TanStack Start renders via React, so Netlify's build scanner never sees React-rendered form elements. A static HTML file at `public/delivery-form.html` mirrors the delivery form fields with `netlify` and `netlify-honeypot` attributes. The React form POSTs to `/delivery-form.html` with `Content-Type: application/x-www-form-urlencoded`. **Do not remove or rename `public/delivery-form.html`** without updating the React form's fetch URL and the `form-name` hidden field.

### OpenStreetMap iframes for branch maps
Maps are rendered with `<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=...">`. No API key is required. Replace `bbox` coordinates in the `branches` array with real locations. The `key={selected.id}` prop on the iframe forces a React remount on branch switch, triggering an iframe reload.

### Colour tokens
The amber-gold brand colour `#c8860a` is applied via inline `style` props rather than a Tailwind custom token. If the brand colour changes frequently, promote it to a CSS custom property in `src/styles.css`.

### No global state
All interactive state (active menu tab, selected branch, form fields, submit status) is local `useState`. No Zustand store is needed at this scale.

## Data Arrays (all in `src/routes/index.tsx`)

| Variable | Purpose |
|----------|---------|
| `menuCategories` | Tabbed menu — each entry has `name` (tab label) and `items[]` |
| `branches` | Location cards + map embed URLs |
| `reviews` | Guest testimonial cards |

## Conventions

- **Routing**: File-based via TanStack Router. Add new pages as files under `src/routes/`.
- **Naming**: Components PascalCase, utilities camelCase, route files kebab-case.
- **Styling**: Tailwind utility classes + inline `style` for dynamic/brand values.
- **TypeScript**: Strict mode. Use `type` keyword for type-only imports.
- **Forms**: Always maintain a matching static skeleton in `public/` for any Netlify Form.
- **No build artifacts**: Never commit `dist/` or `.tanstack/` folders.

## Development Commands

```bash
npm run dev      # Vite dev server on localhost:3000
npm run build    # Production build → dist/client
```

## Environment Variables

No environment variables are required for the base template. If AI features are added later, set one of: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or `GEMINI_API_KEY`.
