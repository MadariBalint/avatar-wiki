# Avatar Wiki

A responsive, content-rich Avatar universe wiki built as a frontend portfolio project with React, Vite, Tailwind CSS, React Router, and Markdown-powered article pages.

**Live demo:** https://avatar-wiki.vercel.app/

## Why This Project

Avatar Wiki is designed to show more than a static landing page. It demonstrates how I structure a real frontend application around reusable components, dynamic content, responsive navigation, search, routing, and a maintainable content model.

The app presents characters, Na'vi, humans, flora, fauna, RDA technology, vehicles, weapons, locations, games, movies, books, and comics in a wiki-style interface inspired by the Avatar franchise.

## Highlights

- **107 Markdown article pages** loaded dynamically from `public/content`
- **100+ optimized WebP assets** organized by category
- **Data-driven pages** powered by JSON collections for characters, fauna, flora, locations, franchise entries, affiliations, and RDA items
- **Client-side routing** with dedicated category pages and dynamic article routes
- **Wiki-style internal links** using `[[Article Name]]` syntax resolved into real app routes
- **Responsive header and mobile menu** with locked body scroll while the menu is open
- **Search autocomplete** with exact, prefix, and partial matching
- **Animated page transitions** using Motion
- **Reusable info boxes** for different article types
- **Daily featured entries** selected with deterministic date-based hashing
- **Vercel deployment** with SPA routing support

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4
- Motion
- React Markdown
- Remark GFM
- Lucide React
- ESLint
- Prettier
- Vercel

## Core Frontend Work

### Dynamic Wiki Architecture

The app loads multiple JSON datasets, merges them into one indexed content source, and uses that source for search, article metadata, category pages, and document titles.

Article pages are loaded from Markdown files based on the current route slug. This keeps long-form content separate from UI code and makes the project easier to expand.

### Internal Link Resolution

Markdown articles can use wiki-style links such as:

```md
[[Jake Sully]]
```

The app resolves those labels against a generated wiki index and converts valid matches into React Router links.

### Search Experience

The header search builds records from the combined wiki data and ranks results by:

1. Exact matches
2. Starts-with matches
3. Includes matches

This makes common searches feel fast and predictable without needing a backend service.

### Responsive UI

The layout adapts across desktop, tablet, and mobile screens with:

- Sticky navigation
- Collapsible mobile menu
- Mobile search panel
- Category grids
- Responsive article layouts
- Floating scroll-to-top control

## Project Structure

```txt
src/
  components/       Reusable UI components and article info boxes
  pages/            Route-level pages for home, categories, and articles
  utils/            Helpers for search data, wiki links, dates, images, and scroll behavior
  assets/           App logos and category icons

public/
  content/          Markdown article content
  data/             JSON collections used by the app
  images/           Optimized wiki images grouped by category
  fonts/            Custom font assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

Format the project:

```bash
npm run format
```
