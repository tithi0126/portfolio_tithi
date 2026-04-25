# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Architecture

**Stack:** React 18 + Vite + Tailwind CSS + TypeScript (JSX)

**Core Libraries:**
- **Routing:** React Router DOM (BrowserRouter with Routes/Route pattern)
- **Animation:** GSAP (ScrollTrigger for scroll-based animations), Framer Motion (component animations)
- **3D Graphics:** React Three Fiber + Drei
- **Smooth Scroll:** Lenis
- **State Management:** Zustand (see `src/store/useSoundStore.js` for audio state)

**Structure:**
- `src/App.jsx` - Main app with routing (Home page + Playlist route)
- `src/main.jsx` - Entry point
- `src/components/*.jsx` - All UI components
- `src/store/*.js` - Zustand stores
- `public/` - Static assets (images, audio files)

**Key Patterns:**
- **Magnetic component** (`src/components/Magnetic.jsx`): Wrapper that adds magnetic hover effect to buttons/links using Framer Motion
- **CustomCursor**: Custom cursor with spring physics following mouse position
- **Lenis smooth scroll**: Configured in Home component with 1.2s duration
- **Section color transitions**: GSAP ScrollTrigger changes body background based on `data-color` attribute on sections
- **Audio system**: Zustand store manages playback; songs stored in `public/Hobby/Singing/`

**Styling:**
- Tailwind CSS with custom config (`tailwind.config.js`)
- Custom theme: dark (`#0a0a0a`) / light (`#f5f5f5`) backgrounds, lime accent (`#e4ff00`)
- Fonts: Inter (sans), PP Neue Montreal (display)
- Global styles in `src/index.css`
