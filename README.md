# Luxury Restaurant

A polished single-page restaurant landing site built with React and Vite. This project showcases a luxury restaurant experience with a responsive hero, menu, specials, reservation section, testimonials, and elegant branding.

Live demo: https://luxury-restaurant-lyart.vercel.app/

## Project Overview

This app is a modern React SPA powered by Vite. It is designed as a luxury restaurant landing page with reusable section components and responsive styling.

### What it includes

- Responsive hero section with restaurant branding and CTA
- Menu and specials showcase
- Reservation area for guest booking entry
- Testimonials section for social proof
- Site footer with contact and branding details

## Installation

1. Clone the repository

```bash
git clone https://github.com/Hicham-Mek/luxury-retaurent.git
cd luxury-retaurent
```

2. Install dependencies

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, typically `http://localhost:5173`.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Usage

The app entry points are:

- `src/main.jsx` - mounts the React app into the `#root` element
- `src/App.jsx` - composes the main page layout and includes the primary sections

Reusable UI sections live in `src/components/`:

- `Navbar.jsx`
- `Hero.jsx`
- `Menu.jsx`
- `Specials.jsx`
- `Reservation.jsx`
- `Testimonials.jsx`
- `Footer.jsx`

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint
- `@vitejs/plugin-react`

## Project Structure

- `index.html` � application shell and initial HTML
- `src/main.jsx` � React renderer
- `src/App.jsx` � top-level app composition
- `src/components/` � landing page sections
- `src/index.css` � global styles
- `src/App.css` � component styles

## Deployment

This project is ready for deployment to Vercel
