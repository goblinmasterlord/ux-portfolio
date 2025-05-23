# Project Documentation

This document provides an overview of the UX Portfolio website project, its structure, and key components. It is intended to help with ongoing development and maintenance.

## Project Overview

The project is a personal UX portfolio website built with React and Vite. It features a light, modern aesthetic inspired by top UX agencies like clay.global. Key technologies include Tailwind CSS for styling, Lucide icons, and custom fonts (Geist for display and Inter for body text). The site emphasizes clean design, strong typography, smooth transitions, and a professional feel.

## Project Structure

The project follows a standard React project structure:

- **`public/`**: Contains static assets that are served directly.
- **`src/`**: Contains the main source code for the application.
    - **`assets/`**: Stores static assets like images and SVGs.
        - **`projects/`**: Contains assets specific to individual project pages.
    - **`components/`**: Houses reusable UI components used throughout the application.
        - **`project/`**: Contains components specific to project display.
        - `AiSection.jsx`
        - `CreativeHero.jsx`
        - `ErrorBoundary.jsx`
        - `Navigation.jsx`
        - `PageTransition.jsx`
        - `ProtectedContact.jsx`
        - `RefinedHobbyProjects.jsx`
        - `ResultCard.jsx`
        - `ScrollToTop.jsx`
        - `ServiceCard.jsx`
        - `SimplifiedContactSection.jsx`
    - **`hooks/`**: Contains custom React hooks for reusable logic.
        - `useEnhancedScrollAnimation.js`
        - `useScrollAnimation.js`
    - **`pages/`**: Defines the different pages or views of the website.
        - **`projects/`**: Contains individual project detail pages.
            - `everprove.jsx`
            - `loccocity.jsx`
            - `paynance.jsx`
        - `Contact.jsx`
        - `Home.jsx`
    - `App.jsx`: The main application component that sets up routing and global layout.
    - `main.jsx`: The entry point of the React application, responsible for rendering the `App` component.
    - `index.css`: Contains global styles, Tailwind CSS imports, and custom CSS utility classes.
    - `App.css`: Contains additional CSS for `App.jsx` (potentially legacy or component-specific).
- **`tailwind.config.js`**: Configuration file for Tailwind CSS, including custom themes, colors, fonts, and animations.
- **`vite.config.js`**: Configuration file for Vite.
- **`package.json`**: Lists project dependencies and scripts.
- **`index.html`**: The main HTML file where the React application is mounted.

## Key Technologies and Libraries

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server for modern web projects.
- **React Router DOM**: For handling client-side routing.
- **Framer Motion**: For creating animations and transitions.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide Icons**: Library for SVG icons.
- **Fonts**:
    - **Geist** (Display) - Modern, personality-filled typeface by Vercel
    - **Inter** (Body/Sans-serif) - Highly readable typeface optimized for UI

## Styling and Theming

- **Global Styles**: Defined in `src/index.css`. This file imports fonts from Google Fonts, sets up Tailwind CSS, and defines custom utility classes and component styles.
- **Tailwind CSS**: Heavily used for styling. The configuration in `tailwind.config.js` defines custom colors, fonts (Geist, Inter), box shadows, drop shadows, keyframe animations, and animation utilities.
- **Color Palette**: The `tailwind.config.js` defines an extensive color palette. The primary background is `#FFFFFF` (light mode), with `primary` text color as `#1E293B`.
- **Animations**: Custom keyframe animations (`float-slow`, `float-medium`, `pulse-slow`, `rotate-slow`, `bounce-subtle`) are defined in `tailwind.config.js` and applied through utility classes.

## Font Implementation

The project uses a modern font pairing:
- **Geist**: Used for headings and display text (imported from Google Fonts)
- **Inter**: Used for body text and UI elements (imported from Google Fonts)

Both fonts are imported via Google Fonts CDN in `index.css` and configured in `tailwind.config.js`.

## Routing and Navigation

- **Routing**: Handled by `react-router-dom`. Routes are defined in `src/App.jsx` within the `AnimatedRoutes` component.
- **Navigation**: The `src/components/Navigation.jsx` component handles the main site navigation.
- **Page Transitions**: `src/components/PageTransition.jsx` and `AnimatePresence` from Framer Motion are used to animate transitions between pages.

## Important Components

- **`App.jsx`**: Core application component, sets up routing using `BrowserRouter`, `Routes`, and `Route`. It also includes `ScrollToTop` and a main layout div.
- **`Navigation.jsx`**: Manages site navigation.
- **`PageTransition.jsx`**: Wraps page components to provide animated transitions.
- **`CreativeHero.jsx`**: Key component for the homepage hero section.
- **`RefinedHobbyProjects.jsx`**: Displays personal projects section with scroll animations (flickering issue fixed).
- **Project Pages (`src/pages/projects/`)**: Individual pages for showcasing specific UX projects (Everprove, Paynance, LoccoCity).
- **Custom Hooks**:
    - `useEnhancedScrollAnimation.js`: Provides enhanced scroll-triggered animations
    - `useScrollAnimation.js`: Basic scroll animation hook

## Recent Fixes and Improvements

### Font Update (Latest)
- Replaced Cabinet Grotesk and Satoshi with modern Geist + Inter pairing
- Updated font imports in `index.css` to use Google Fonts
- Updated `tailwind.config.js` font family configuration

### Animation Flickering Fix (Latest)
- Fixed flickering issue in personal projects section caused by dual animation observers
- Simplified animation approach in `RefinedHobbyProjects.jsx` by using single `useInView` observer
- Removed conflicting `useEnhancedScrollAnimation` usage that was creating race conditions
- Cleaned up unused imports to reduce linting errors

### Personal Projects Section Redesign (Latest)
- **Restructured projects into two categories**: AI-focused projects and client sites
- **Enhanced project cards** with expandable functionality showing detailed features
- **Compact card design** with improved image sizing and better visual hierarchy
- **Creative tech stack section** with floating logos on a beautiful blur background
- **Improved animations** with staggered entrance effects and hover interactions
- **Mobile-responsive design** with optimized layouts for all screen sizes

## Development Notes

1. **Animation Performance**: The project uses Framer Motion extensively. Care should be taken to avoid dual animation observers that can cause flickering.
2. **Font Loading**: Fonts are loaded via Google Fonts CDN which provides good performance and reliability.
3. **Responsive Design**: All components are built with mobile-first responsive design using Tailwind CSS breakpoints.
4. **Code Quality**: The project includes ESLint configuration. Some prop validation warnings remain but do not affect functionality.

This documentation should serve as a good starting point for understanding the project. Further details can be added as development progresses. 