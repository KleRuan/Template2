# Bella Tavola – Restaurant Template

A production-ready restaurant website template built with TanStack Start and deployed on Netlify. It serves as a starting point for any restaurant or food-service business — swap out the copy, colours, and menu data to make it your own.

## Features

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen landing with calls-to-action for menu browsing and delivery ordering |
| **Menu** | Tabbed category browser (Starters / Mains / Desserts) with item cards |
| **Delivery Form** | Contact form powered by Netlify Forms — no backend required |
| **Locations / Map** | Branch selector with embedded OpenStreetMap iframes |
| **Reviews** | Guest testimonial cards with star ratings |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19) |
| Routing | TanStack Router v1 (file-based) |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Forms | Netlify Forms (serverless, no backend) |
| Maps | OpenStreetMap embedded iframes |
| Deployment | [Netlify](https://netlify.com) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm

### Install & run locally

```bash
npm install
npm run dev        # starts Vite dev server on http://localhost:3000
```

> **Netlify Forms** do not process submissions in local dev. Deploy a preview branch to test form submissions end-to-end.

### Production build

```bash
npm run build
```

The output is placed in `dist/client` (configured in `netlify.toml`).

## Customisation Guide

### 1. Restaurant name & branding

- `src/routes/index.tsx` → update `Bella Tavola` strings and the `style` colour `#c8860a` (amber gold).
- `src/routes/__root.tsx` → update the `<title>` tag.

### 2. Menu data

Edit the `menuCategories` array at the top of `src/routes/index.tsx`.

### 3. Branch locations

Edit the `branches` array in `src/routes/index.tsx`. Replace `mapUrl` values with OpenStreetMap export embed URLs for your actual addresses.

### 4. Reviews

Edit the `reviews` array in `src/routes/index.tsx`.

### 5. Delivery form fields

If you add or rename form fields, also update `public/delivery-form.html` to keep the Netlify form registration in sync.

## Deployment

Push to your Netlify-linked Git repository. Netlify automatically:

1. Runs `vite build`
2. Scans `public/delivery-form.html` and registers the **delivery** form
3. Deploys the site globally

Form submissions appear in the Netlify dashboard under **Forms**.
