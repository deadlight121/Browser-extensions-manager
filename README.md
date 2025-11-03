Browser Extensions Manager

A small React application for managing "extensions":
- Responsive card grid with CSS Modules

- All / Active / Inactive filter tabs

- Active toggle switch with correct UX — switch animates first, then card exits (Framer Motion + exit delay)

- Remove button to delete cards

- Dark / Light theme switcher via data-theme + CSS variables

- Smooth enter/exit animations (Framer Motion)

- Built with Vite + React

Features:

- State management with React hooks
- Delayed card exit so switch animation plays before removal
- CSS variables for theming
- Modular component structure
  

Project Architecture

Extensions — main logic container: holds items, filter, and handlers (toggle, remove)
Handles animation delay so switch click is visible before the card disappears

ExtensionCard — presentational component

ThemeButton — toggles theme; theme is applied globally via data-theme on <body>
