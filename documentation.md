# Project Documentation

Personal portfolio of Márton (Marci) Mocsonoky: product, UX and AI. React 18 + Vite, Tailwind CSS 3, framer-motion 11, Lenis for smooth scrolling. Deployed on Vercel (`vercel.json` rewrites every path to the SPA).

## Design system

Editorial "spec sheet" look: warm paper, ink, one electric accent.

- **Colours** (`src/index.css` `:root`, exposed in `tailwind.config.js`): `paper`, `paper-2`, `ink`, `ink-2`, `mute`, `signal` (the only accent — use sparingly), `signal-soft`, `line` / `line-inv` hairlines.
- **Type** (self-hosted via `@fontsource`, imported in `src/main.jsx`):
  - Geist Variable (`font-sans`) for everything, set `font-medium` with tight tracking for headings.
  - Instrument Serif italic (`.serif-accent`) only for single accent words.
  - Geist Mono (`.label`) for metadata.
  - Fluid sizes: `text-display-xl/l/m/s`, `text-lead`, `text-label`.
- **Layout helpers** (`src/index.css`): `.shell` (side gutters), `.grid-12` (4 cols mobile, 12 from `md`), `.link-draw`, `.label`. Section spacing `pt-section` / `py-section`.
- **Motion:** easing curves in `src/lib/motion.js`; `MotionConfig reducedMotion="user"` is set globally and a CSS rule flattens transitions for reduced motion.

## Structure

- `src/App.jsx` — router, Lenis init, page transitions (ink curtain), scroll reset/restoration, global `Nav`, `Footer` and `CursorLabel`.
- `src/lib/scroll.js` — the single Lenis instance and helpers: `scrollToTarget`, `resetScroll`, `stopScroll` / `startScroll`. Always scroll through these, never `window.scrollTo` directly from pages.
- `src/hooks/useSectionNav.js` — jump to a home section (`work`, `services`, `lab`, `contact`) from any page.
- `src/data/projects.js` — `caseStudies` (order drives the home index and "next case study"), `labProjects`, `links`.
- `src/components/site/` — global pieces: `Nav`, `Footer`, `ContactBlock` (email revealed on click), `PageTransition`, `CursorLabel` (pill that follows the pointer over any `data-cursor="…"` element), `Reveal` / `RevealText`, `SectionLabel`, `ArrowLink`, `Clock`.
- `src/components/home/` — home sections: `Hero` (`TokenHeadline` streams the headline like model output; `DiffusionPortrait` denoises the photo on a canvas), `Approach`, `WorkIndex` (sticky project index), `Services`, `Toolkit`, `Lab`.
- `src/components/case/` — case-study kit; see `src/components/case/README.md`.
- `src/pages/` — `Home`, `Contact`, and `projects/*` (one file per case study, each built from the kit).

## Rules of thumb

- Don't put `overflow-hidden` on page wrappers: it breaks `position: sticky` (the body already uses `overflow-x: clip`).
- New case study: add it to `caseStudies`, create a page from the kit, add the route in `App.jsx`.
- Images: keep them ≤ 2000px on the long side and compressed; screenshots live in `src/assets/projects/` or `public/images/`.
