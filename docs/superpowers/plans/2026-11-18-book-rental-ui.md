# Book Rental UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the UI-only screens of a paid book-rental site in neobrutalism style (white / yellow / black).

**Architecture:** Vite + React SPA with React Router. Presentational components in `src/components/ui/` (neobrutalism primitives) and `src/components/` (domain pieces). Pages read static fixtures from `src/data/`. No API, auth, or state logic.

**Tech Stack:** Vite, React 18, React Router 6, Tailwind CSS 3, JavaScript (JSX).

**Spec:** `docs/superpowers/specs/2026-11-18-book-rental-ui-design.md`

## Global Constraints

- White background, yellow accent `#FFD93D`, black `#0A0A0A` for text and borders.
- Borders 2–3px solid black; hard shadow `4px 4px 0 0 #0A0A0A`, no blur; small radius (<= 6px).
- Interactive elements translate by the shadow offset on hover/active and drop the shadow.
- Vietnamese UI copy only. Rental statuses exactly: `Chờ duyệt`, `Đang mượn`, `Quá hạn`, `Đã trả`.
- Durations: 3, 7, 14 days. Responsive from 360px; navbar collapses to a menu button.
- No MSW, no fetch, no auth state, no filter/search behaviour (visual only).

## Review Focus

- Book with a very long title / description must not break card or detail layout (truncate / wrap).
- Unknown `/books/:id` shows a "Không tìm thấy sách" page, not a blank screen.
- Unknown route shows a 404 page with link home.
- Empty rentals list shows an empty state with link to `/books`.
- 360px width: no horizontal scroll on any page.

## File Structure

- `src/main.jsx`, `src/App.jsx` — entry, routes, layout with Navbar/Footer
- `src/index.css` — Tailwind directives and base font
- `tailwind.config.js` — tokens (colors, `shadow-brutal`, font)
- `src/data/books.js`, `src/data/rentals.js` — fixtures
- `src/components/ui/{Button,Card,Input,Select,Badge,Dialog}.jsx`
- `src/components/{Navbar,Footer,BookCard,StatusBadge,RentPanel,RentalItem}.jsx`
- `src/pages/{Home,Books,BookDetail,Login,Register,MyRentals,NotFound}.jsx`

---

### Task 1: Scaffold, theme, and UI primitives

**Files:**
- Create: Vite project at repo root, `tailwind.config.js`, `src/index.css`, `src/components/ui/*.jsx`, `src/pages/Kit.jsx` (temporary preview route `/kit`)

**Interfaces:**
- Produces: `Button({variant: 'primary'|'secondary'|'ghost', as?, ...props})`, `Card({className, children})`, `Input({label, error?, ...props})`, `Select({label, options: {value,label}[], ...props})`, `Badge({tone: 'yellow'|'black'|'white'|'red'|'green', children})`, `Dialog({open, onClose, title, children})`. Tailwind: colors `brand` (yellow), `ink` (black); `shadow-brutal`, `shadow-brutal-sm`.

- [ ] **Step 1:** Scaffold with `npm create vite@latest . -- --template react`, install `react-router-dom`, `tailwindcss@3 postcss autoprefixer`, init Tailwind with content globs for `index.html` and `src/**/*.{js,jsx}`.
- [ ] **Step 2:** Define theme tokens in `tailwind.config.js` and a retro/grotesk font (Google Fonts "Space Grotesk" via `index.html`) in `index.css`.
- [ ] **Step 3:** Implement the six primitives per Global Constraints; Dialog closes on backdrop click and Escape.
- [ ] **Step 4:** Add temporary `/kit` page rendering every primitive and variant.
- [ ] **Step 5:** Run `npm run dev` and `npm run build`; expected: build succeeds, `/kit` shows hard shadows and hover shift.
- [ ] **Step 6:** Commit `feat: scaffold project, theme and ui primitives`.

### Task 2: Fixtures, layout, and domain components

**Files:**
- Create: `src/data/books.js`, `src/data/rentals.js`, `src/components/{Navbar,Footer,BookCard,StatusBadge,RentPanel,RentalItem}.jsx`, `src/App.jsx` layout and routes

**Interfaces:**
- Consumes: Task 1 primitives.
- Produces: `books: Book[]` where `Book = {id, title, author, category, description, pricePerDay, cover, featured}` (~20 items, 5+ categories, include one very long title); `categories: string[]`; `rentals: Rental[]` where `Rental = {id, bookId, days, total, status, dueDate|null}` covering all four statuses; `BookCard({book})` links to `/books/:id`; `StatusBadge({status})`; `RentPanel({book})` (duration Select 3/7/14, total = pricePerDay × days, Rent button opens Dialog summary; confirm navigates to `/my-rentals`); `RentalItem({rental, book})`; `Navbar` (links Sách, Của tôi, Đăng nhập/Đăng ký; mobile menu button toggling links); `Footer`.

- [ ] **Step 1:** Write fixtures per the interface; covers are generated placeholders (colored blocks with title initial), no remote images.
- [ ] **Step 2:** Build components; RentPanel total updates when duration changes.
- [ ] **Step 3:** Wire `App.jsx` with Navbar/Footer layout and routes for all pages (pages stubbed until later tasks).
- [ ] **Step 4:** Verify at 360px that Navbar collapses and toggles; `npm run build` passes.
- [ ] **Step 5:** Commit `feat: fixtures, layout and domain components`.

### Task 3: Home, Catalogue, Detail pages

**Files:**
- Create: `src/pages/{Home,Books,BookDetail,NotFound}.jsx`; modify `src/App.jsx` for `*` route

**Interfaces:**
- Consumes: `books`, `categories`, `BookCard`, `RentPanel`.
- Produces: pages at `/`, `/books`, `/books/:id`, `*`.

- [ ] **Step 1:** Home: yellow hero with CTA to `/books`, featured books (`featured` flag), 3-step "how it works".
- [ ] **Step 2:** Books: search Input and category chips (visual only, non-functional), responsive grid (1/2/3/4 columns).
- [ ] **Step 3:** BookDetail: cover, meta, description, RentPanel; unknown id renders "Không tìm thấy sách" with link back; NotFound page for unknown routes.
- [ ] **Step 4:** Verify Review Focus items (long title, unknown id, unknown route, 360px) in the browser.
- [ ] **Step 5:** Commit `feat: home, catalogue, detail and 404 pages`.

### Task 4: Auth and My Rentals pages, cleanup

**Files:**
- Create: `src/pages/{Login,Register,MyRentals}.jsx`; delete `src/pages/Kit.jsx` and its route

**Interfaces:**
- Consumes: `Input`, `Button`, `Card`, `rentals`, `RentalItem`.

- [ ] **Step 1:** Login (email, password) and Register (name, email, password, confirm) in a centered Card; submit navigates to `/` with no validation. Show the Input `error` style statically on one Register field so the error state is visible in the UI.
- [ ] **Step 2:** MyRentals: list `RentalItem` for all fixtures; empty state with link to `/books` when list is empty (check by temporarily passing `[]`).
- [ ] **Step 3:** Remove `/kit` page and route.
- [ ] **Step 4:** Run `npm run build` and click through every route at desktop and 360px widths; expected: no console errors, no horizontal scroll.
- [ ] **Step 5:** Commit `feat: auth and my-rentals pages`.

---

## Self-review notes
Spec pages (Home, Catalogue, Detail, Login, Register, My rentals) map to Tasks 3–4; components and theme to Tasks 1–2; mobile, statuses, durations in Global Constraints and verified in Tasks 2–4. Task names and signatures are consistent across tasks. UI-only scope means verification is build plus manual browser checks rather than unit tests.
