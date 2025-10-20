# Copilot Instructions for EventSite

## Project Overview
EventSite is a Vite-powered React application for event discovery and user interaction. The codebase is organized for modularity and maintainability, with clear separation between features, components, assets, and configuration files.

## Architecture & Key Patterns
- **Entry Point:** `src/main.tsx` bootstraps the React app.
- **Pages:** Main UI screens are in `src/` (e.g., `Homepage.tsx`, `landingpage.tsx`, `eventsearch.tsx`).
- **Components:** Reusable UI elements are in `src/components/` (e.g., `ContactLink.tsx`, `NavLink.tsx`, SVG icon components).
- **Features:** Larger UI modules (side navigation, user panel) are in `src/features/`.
- **Assets:** Images and SVGs are in `src/assets/` and subfolders.
- **Styling:** CSS files are colocated with their respective components/pages.

## Developer Workflows
- **Build:** Use Vite (`npm run build`) for production builds.
- **Dev Server:** Start with `npm run dev` for hot-reloading.
- **Type Checking:** TypeScript is enforced via `tsconfig.json` and related configs.
- **Linting:** ESLint is configured via `eslint.config.js`.

## Conventions & Patterns
- **Component Structure:** Prefer function components and hooks. Example: `src/components/ContactLink.tsx`.
- **SVG Icons:** Use React components for SVGs in `src/components/icons/`.
- **Feature Modules:** Place larger UI modules in `src/features/` for separation of concerns.
- **Routing:** (If present) Check `main.tsx` or top-level components for routing logic.
- **CSS:** Use simple CSS files, imported directly into TSX files.

## Integration Points
- **External Libraries:** Vite, React, TypeScript, ESLint.
- **No backend integration detected in current codebase.**

## Examples
- To add a new page, create a TSX file in `src/`, import it in `main.tsx`, and add navigation via `src/components/NavLink.tsx`.
- To add a new icon, create a React component in `src/components/icons/` and import where needed.

## References
- `src/main.tsx` — App entry point
- `src/components/` — Reusable UI elements
- `src/features/` — Major UI modules
- `vite.config.ts`, `tsconfig*.json` — Build and type configs

---
**Update this file as project conventions evolve.**
