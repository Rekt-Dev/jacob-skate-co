# Jacob Skate Co.

Full-stack e-commerce storefront for a skate fashion brand. Built from scratch with React 18 and TypeScript — no UI framework dependencies. Features a full-viewport hero carousel, product grid, cart management, and a dark-mode-first design system.

## Features

- Full-viewport hero carousel with progress bar, dot navigation, and pause-on-hover
- Product grid with hover overlays and item detail routing
- Shopping cart with add/remove and running total
- Account and login flow
- Dark/light theme toggle
- Responsive across mobile, tablet, and desktop
- Custom CSS design system — zero component libraries

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript |
| Routing | React Router v6 |
| State | React hooks (useState, useCallback, useEffect) |
| Styling | Custom CSS with CSS variables |
| Icons | FontAwesome 6 |

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
  components/    # 30+ UI components — Header, Cart, Collections, ItemDetails, etc.
  assets/        # Product images, brand assets
  index.css      # Global reset and CSS variables
```
