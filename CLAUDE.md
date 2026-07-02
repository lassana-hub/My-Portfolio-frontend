# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio site built with React 19 + Vite + Tailwind CSS v4. All site copy is in French.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured in this repository.

## Architecture

**Single-page, section-based layout.** `src/App.jsx` renders `Navbar` plus a fixed sequence of full-page `<section>` components from `src/sections/` (Hero, About, Projects, Experience, Testimonials, Contact), each mounted as a static stack inside `<main>`. Navigation (`src/layout/Navbar.jsx`) uses plain in-page anchor links (`#about`, `#projects`, etc.) matching each section's `id`, not a router — there is no React Router or similar in this project.

**Path alias:** `@` resolves to `src/` (configured in `vite.config.js`). Use `@/sections/...`, `@/components/...`, `@/layout/...` imports rather than relative paths.

**Styling is Tailwind v4 with CSS-first theming**, not a tailwind.config.js. All design tokens (colors, radius) are defined as CSS custom properties inside `@theme` in `src/index.css`, e.g. `--color-primary`, `--color-background`, `--color-muted-foreground`. Reference them via Tailwind utility classes (`bg-primary`, `text-muted-foreground`) — don't hardcode hex values in components. Reusable visual effects (`.glass`, `.glass-strong`, `.glow-text`, `.glow-border`) and keyframe animations (`fade-in`, `marquee`, animated border) are also defined in `src/index.css` under `@layer components` / `@layer utilities`. Custom animation-delay utility classes (`.animation-delay-100` through `.animation-delay-800`) exist there too instead of using Tailwind's arbitrary-value delay syntax — prefer the existing classes for consistency.

**Components vs sections:** `src/components/` holds small reusable UI primitives (`Button`, `AnimatedBorderButton`); `src/sections/` holds the large, page-specific composed blocks rendered directly by `App.jsx`. Section components tend to define their content as local data arrays (e.g. `highlights` in `About.jsx`) mapped into repeated markup blocks, rather than pulling from external data files — follow this pattern for similar list-driven content.

**Icons:** both `lucide-react` and `react-icons` (specifically `react-icons/fa6`) are used across the codebase — check existing imports in a file before picking which icon library to use for consistency.
