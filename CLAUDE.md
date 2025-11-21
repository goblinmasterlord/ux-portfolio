# UX Portfolio - Project Context

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Project Structure
```
src/
  components/
    home/
      Hero.jsx            # Creative, interactive hero section
      ProjectsShowcase.jsx # Main project gallery (Bento/Grid)
      Services.jsx        # Services offered (Staggered list)
      HobbyProjects.jsx   # Experimental projects (Grid)
      TechStack.jsx       # Magnetic icon grid
    Navigation.jsx        # Main nav with hash scrolling
    Footer.jsx           
  pages/
    Home.jsx              # Landing page
    Contact.jsx           # Contact page
    ProjectDetail.jsx     # Dynamic project page template
  assets/                 # Images and static assets
```

## Design System
- **Theme**: Premium Dark (`#0a0a0a`)
- **Typography**: 
  - Headings: `Fraunces` (Serif, Bold, Display)
  - Body: `Inter` (Sans-serif, Clean)
  - Accents: `JetBrains Mono` (Technical details)
- **Colors**:
  - Background: `bg-background` (#050505)
  - Surface: `bg-surface` (#0a0a0a)
  - Primary Text: `text-primary` (#ffffff)
  - Secondary Text: `text-secondary` (#a1a1aa)
  - Accents: Blue, Purple, Emerald (Gradients)

## Animation Guidelines (Critical)
1.  **Scroll Triggers**: Use `viewport={{ once: true }}` for ALL scroll animations to prevent flickering.
2.  **Locking**: For complex grids (like HobbyProjects), use `useAnimation` + `useEffect` to manually lock the animation state once triggered.
3.  **Easing**: Use "Luxury" easing: `[0.2, 0.8, 0.2, 1]`.
4.  **Performance**: Animate `transform` and `opacity` only. Avoid animating layout properties like `height` or `width` if possible (use scale instead).

## Component Rules
-   **Hero**: Must be bold, asymmetrical, and interactive. No generic layouts.
-   **Cards**: 
    -   Images must be high quality.
    -   Text overlays must be readable (Darken background on hover).
    -   Interactions should be subtle (Scale, Sheen).
-   **Navigation**: Handles cross-page scrolling via URL hashes.

## Recent Changes
-   **Hero**: Redesigned with "Deconstructed Typography" and mouse interaction.
-   **Animations**: Overhauled to remove flickering. Implemented "Focus & Scale" effect.
-   **Services**: Added new premium Services component.
-   **Hobby Projects**: Recreated with robust animation locking.
