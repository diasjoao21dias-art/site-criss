# Nutri GlowUp - Supplement Product Showcase

## Overview

Nutri GlowUp is a Brazilian supplement e-commerce showcase website. It's a single-page application that displays fitness/nutrition products with a dark, modern UI. The site is primarily a static product catalog — payments are handled via external links rather than built-in checkout. The backend serves product data from an in-memory store (seeded with hardcoded data), and the frontend renders it with scroll animations and a polished dark theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently only has a Home page and a 404 page
- **State/Data Fetching**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Animations**: Framer Motion for scroll reveals, hover effects, and hero section animations
- **Styling**: Tailwind CSS with CSS variables for theming. Dark theme by default with a green primary color (fitness branding). Custom fonts: Montserrat (display) and Open Sans (body)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx
- **API Pattern**: RESTful JSON API under `/api/` prefix
- **Routes**: Defined in `server/routes.ts`, currently two endpoints:
  - `GET /api/products` — list all products
  - `GET /api/products/:id` — get a single product by ID
- **Storage**: In-memory storage (`MemStorage` class) with hardcoded seed data. No actual database reads/writes happen despite the schema being defined. The `IStorage` interface exists for future swapping to a real database.
- **Dev Server**: Vite dev server is mounted as middleware in development for HMR
- **Production**: Client is built to `dist/public`, server is bundled with esbuild to `dist/index.cjs`

### Shared Layer (`shared/`)
- **Schema** (`shared/schema.ts`): Drizzle ORM table definitions for PostgreSQL, used primarily for TypeScript type inference (`Product`, `InsertProduct`). The `products` table has: id, name, description, price (text), imageUrl, paymentLink, category.
- **Routes** (`shared/routes.ts`): API route definitions with Zod response schemas, shared between frontend and backend for type safety. Includes a `buildUrl` helper for URL parameter substitution.

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL (`drizzle.config.ts`)
- **Current State**: Schema is defined but the app uses in-memory storage. The database infrastructure (PostgreSQL via `DATABASE_URL`) is expected but not actively used for data. The `db:push` script exists for pushing schema to a real database.
- **Migration**: Drizzle Kit configured to output migrations to `./migrations`

### Build System
- **Dev**: `tsx server/index.ts` runs the TypeScript server directly
- **Build**: Custom build script (`script/build.ts`) that runs Vite for the client and esbuild for the server, bundling select dependencies to reduce cold start times
- **Production**: `node dist/index.cjs`

### Key Design Decisions
1. **In-memory storage over database**: The app is a product showcase with static data. Using `MemStorage` keeps it simple while the `IStorage` interface allows easy migration to PostgreSQL later.
2. **Shared route/schema definitions**: Both frontend and backend import from `shared/` to ensure type consistency without code duplication.
3. **Price as text**: Prices are stored as formatted strings (e.g., "R$ 199,90") since there's no checkout/calculation logic — they're display-only.
4. **External payment links**: No payment processing is built in. Each product has a `paymentLink` field pointing to an external checkout.
5. **Portuguese (Brazilian) content**: All UI text, product names, and descriptions are in Brazilian Portuguese.

## External Dependencies

- **PostgreSQL**: Required via `DATABASE_URL` environment variable. Currently referenced by Drizzle config but not actively queried (in-memory storage is used instead). Will be needed if storage is migrated to a real database.
- **Unsplash**: Product images are loaded from Unsplash CDN URLs.
- **Google Fonts**: Montserrat, Open Sans, DM Sans, Fira Code, Geist Mono, and Architects Daughter are loaded from Google Fonts CDN.
- **Transparent Textures**: A carbon fiber texture pattern is loaded from transparenttextures.com for the hero background.
- **No authentication**: The app has no user authentication or authorization.
- **No payment processing**: Payments are handled entirely through external links.