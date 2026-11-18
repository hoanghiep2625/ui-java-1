# Book Rental Site (UI only) — Design

Date: 2026-11-18

## Intent and why
Frontend UI for a paid book-rental site, user side only. Readers browse a
catalogue, view a book, rent it for a period with a per-day fee, and see
their rentals. The user wants the screens first; all logic (auth, API,
stock, status changes) comes later. Admin/librarian tooling exists elsewhere.

Style: neobrutalism (neobrutalism.com) with a retro feel — thick black
borders, hard offset shadows (no blur), flat colour, small radius, elements
shift on hover/active. Palette: white background, yellow accent, black ink.

## Goals
- Pixel-complete, consistent screens for: Home, Catalogue, Book detail,
  Login, Register, My rentals.
- Reusable neobrutalism components (Button, Card, Input, Select, Badge,
  Dialog, Navbar, BookCard, StatusBadge).
- Navigation between pages works (React Router). Mobile friendly from 360px,
  navbar collapses to a menu button.
- Structured so logic can be plugged in later without redesigning screens.

## Non-goals (for now)
- Any real or mocked logic: no MSW, no API calls, no auth state, no stock,
  no rental creation, no search/filter behaviour beyond visual controls.
- Admin/librarian screens, payment gateway, i18n (Vietnamese copy only).

## Anti-goals
- A generic Bootstrap/Material look with a yellow coat of paint.
- Screens that only look right with one specific data shape.

## Constraints
- React + Tailwind CSS + React Router, Vite. Repo root is empty.
- Components hand-written in neobrutalism style (no full shadcn install).

## Approaches considered
Mock API options (MSW / mockapi.io / json-server) were discussed; the user
chose MSW, then narrowed scope to UI only, so data layer is deferred. Screens
read from a static `src/data/` fixtures file (about 20 books, a few rentals
in each status) passed in as props, which makes swapping in MSW or a real API
later a small change.

## Design

### Pages / routes
- `/` Home: yellow hero with hard shadow, featured books, how-it-works steps.
- `/books` Catalogue: search input and category chips (visual only), grid of
  BookCards.
- `/books/:id` Detail: cover, title, author, category, description,
  price/day, rent panel (duration 3/7/14 select, total price display, Rent
  button opening a summary Dialog; confirm just closes it / goes to
  `/my-rentals`).
- `/login`, `/register`: forms with input, error and disabled styles shown
  as UI states; submit navigates onward without validation logic.
- `/my-rentals`: list of rentals with StatusBadge covering `Chờ duyệt`,
  `Đang mượn`, `Quá hạn`, `Đã trả`; shows cover, title, days, total, due date.

### Theme
Tailwind tokens: white bg, yellow accent (~#FFD93D), black (#0A0A0A) for
borders and text, shadow utility like `4px 4px 0 0 #000`; interactive
elements translate by the shadow offset on hover/active.

### Structure
`src/components/ui/`, `src/components/`, `src/pages/`, `src/data/`
(fixtures), `src/App.jsx` routes.

## Left to the builder
Exact yellow shade, fonts, cover imagery (placeholders vs. stock URLs),
empty/loading/error visuals, JS vs. TS, seed titles.
