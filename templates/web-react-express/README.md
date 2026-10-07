# Web Template

This template is a single-port web application. The frontend is built with Vite and React, and the backend is an Express server that serves both `/api/*` routes and the compiled frontend from `frontend/dist`.

## Project Layout

- `frontend/`: React, Vite, Tailwind, Vitest, and frontend tests.
- `backend/`: Express, SQLite runtime helpers, backend Vitest tests, and Playwright E2E tests.
- `backend/src/app.js`: Express app, `/api/health`, static frontend hosting, and SPA fallback.
- `backend/src/index.js`: Backend process entrypoint.

## Prerequisites

- Node.js and npm.
- A shell environment that can install npm dependencies in both `frontend` and `backend`.

## Install Dependencies

Install each package independently:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Build and Run

The production-style runtime is backend-led. Build the frontend first, then start the backend:

```bash
cd frontend
npm run build

cd ../backend
npm run start
```

The backend listens on `PORT` when set, otherwise it uses the template port configured by ARC. After startup, the backend serves the compiled frontend and API routes from the same origin.

Health check:

```bash
curl http://127.0.0.1:<port>/api/health
```

## Development Commands

Backend development server:

```bash
cd backend
npm run dev
```

Frontend development server:

```bash
cd frontend
npm run dev
```

The Vite dev server proxies `/api` to the configured backend port.

## Tests

Frontend unit/integration tests:

```bash
cd frontend
npm run test
```

Backend unit/integration tests:

```bash
cd backend
npm run test
```

Backend E2E tests use Playwright and live under `backend/test-e2e`:

```bash
cd backend
npm run test:e2e
```

Run backend Vitest tests followed by E2E tests:

```bash
cd backend
npm run test:all
```

## Database Notes

- Runtime database helpers live under `backend/src/database`.
- The default database file is `database.db`, unless `ARC_DB_FILE` or `DATABASE_FILE` is set.
- Test helpers create isolated SQLite files under `.arc-test-db`.
- ARC generates per-table `schema/*.sql` and one `seed.sql`, validates them, and injects a fixed runtime bootstrap. Do not implement schema or fixtures in the connection helpers.
- Every initialization applies the same validated schema and seeds. `npm run db:seed` is a compatibility command with no separate fixture logic.
- Unit/Integration tests use `createTestDatabaseHarness()` for isolation and scenario-specific setup.
- `npm run db:prepare:e2e` resets the database selected by `ARC_DB_FILE` and runs the normal bootstrap. ARC sets an isolated path before calling it; browser tests need no SQL setup or test harness imports.
