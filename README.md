# Jacob — Skate & Streetwear E-Commerce

A full-featured online shop for skate fashion and streetwear, built with React 18 and TypeScript.

## Features

- **Product catalog** — browse Collections, Accessories, Hardgoods with item detail pages
- **Shopping cart** — add/remove items, currency selector
- **User auth flows** — login, user menu, and account management UI
- **Search** — site-wide product search
- **Dark/light theme** — toggle with persistent preference
- **Instagram feed** — embedded social integration
- **Sponsored pros** — athlete spotlight section
- **Responsive layout** — mobile-first with FontAwesome icons

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Routing | React Router DOM |
| Icons | FontAwesome (brands + solid) |
| Bundler | Create React App (webpack) |
| Testing | Jest + React Testing Library |

## Getting Started

```bash
npm install
npm start
```

App runs at `http://localhost:3000`.

```bash
npm test      # run tests
npm run build # production build
```

## Project Structure

```
src/
├── components/
│   ├── Cart.tsx
│   ├── Collections.tsx
│   ├── ItemDetails.tsx
│   ├── Search.tsx
│   ├── ThemeToggle.tsx
│   ├── UserLogin.tsx
│   └── ...
├── styles/
│   ├── HomePage.css
│   ├── ThemeToggle.css
│   └── ...
└── index.tsx
```
