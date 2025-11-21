# CLAUDE.md - Project Context Guide

## Project Overview
**UX Portfolio** is a personal portfolio website built with **React** and **Vite**. It features a modern, high-end aesthetic with smooth animations and a focus on UX/UI design.
- **Theme**: Light mode default, clean, professional.
- **Inspiration**: clay.global, high-end agency sites.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v3.4)
- **Animations**: Framer Motion (v11)
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **Linting**: ESLint

## Development Commands
- `npm run dev`: Start development server (Port 3000)
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Project Structure
- `src/components`: Reusable UI components.
  - `project/`: Components specific to project case studies.
- `src/pages`: Route components.
  - `projects/`: Individual case study pages (Everprove, Paynance, LoccoCity).
- `src/hooks`: Custom hooks (`useScrollAnimation`, `useEnhancedScrollAnimation`).
- `src/assets`: Static assets (images, SVGs).
- `src/index.css`: Global styles, Tailwind imports, Font imports.

## Styling & Design System
- **Tailwind Config**: Custom colors and fonts defined in `tailwind.config.js`.
- **Colors**:
  - Background: `#FFFFFF`
  - Primary Text: `#1E293B` (Slate 800)
  - Accents: `#5B7FFF`, `#6366F1` (Indigo), `#8B5CF6` (Violet)
- **Fonts**:
  - **Display**: Geist Sans (Google Fonts)
  - **Body**: Inter (Google Fonts)
- **Animations**: Custom Tailwind animations (`float-slow`, `pulse-slow`) + Framer Motion.

## Critical Development Guidelines
1.  **Mobile-First**: Always ensure designs work on mobile. Use Tailwind breakpoints (`md:`, `lg:`).
2.  **Animations**:
    - Use **Framer Motion** for complex element transitions.
    - **Avoid Dual Observers**: Do not use multiple intersection observers on the same element to prevent flickering. Use `useInView` or the provided custom hooks carefully.
    - **Performance**: Be mindful of heavy animations on scroll.
3.  **Fonts**: Use the defined font families (`font-display`, `font-sans`). Do not introduce new fonts without updating `index.css` and `tailwind.config.js`.
4.  **Images**: Store images in `src/assets` or `public/images`. Use optimized formats where possible.
5.  **Routing**: Add new pages to `App.jsx` within `<AnimatedRoutes>`.

## Key Components
- `CreativeHero.jsx`: Main homepage hero.
- `RefinedHobbyProjects.jsx`: Showcase of personal projects (AI & Client work).
- `PageTransition.jsx`: Wrapper for page transition animations.
- `Navigation.jsx`: Main navbar.

## Design Patterns
- **Project Pages**:
  - **Hero**: Full-screen image with overlay, centered title/subtitle.
  - **Challenge Section**: "Broken Grid" layout (1-2-3 column spans) with large numbering.
  - **Aspects Section**: Alternating grid (Image/Text) with glassmorphism cards.
  - **Typography**: `Fraunces` for display headings, `Inter` for body.

## Recent Changes (Context)
- **Creative Overhaul**: Redesigned Everprove, Paynance, and Loccocity with unique but consistent themes.
- **Standardization**: Unified "Challenge" sections across all projects to use the "Broken Grid" pattern.
- **Fixes**: Resolved layout issues in Paynance (narrow columns) and Loccocity (broken journey section).
- **Theme**: Shifted to a dark, premium aesthetic for project pages.
