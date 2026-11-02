# Restaurant POS — React UI

The existing restaurant POS HTML template has been converted into a standalone React + TypeScript application. The original HTML and assets in the parent folder are preserved. Work in this folder for all future application development.

## Run

Requires Node.js 22.12+ (Node 24 LTS recommended) and npm.

```sh
cd react-app
npm install
npm run dev
```

Open the local URL printed by Vite. `/` opens the dashboard. Active screens use lazy-loaded routes. Supported legacy `.html` links redirect to their corresponding React routes; `index.htm` is an alias of the dashboard.

```sh
npm run typecheck
npm test
npm run test:e2e
npm run build
npm run preview
npm run format:check
```

Browser checks use installed Google Chrome on Windows. On other systems, run `npx playwright install chromium` once. The browser suite starts and stops its own Vite server. The production output is `dist/`; configure the web server to rewrite application paths to `/index.html` for direct route visits.

## Scope

This is the UI conversion phase: existing screen content, static sample data, responsive layouts, navigation, theme switching, dropdown previews, tabs, and dialog previews. Forms prevent submission. Saving, deletion, login, checkout, payment, filtering, export, drag-and-drop, calculations, and other business operations are intentionally not connected. The interface identifies itself as a preview; sample data is not live.

React renders native TSX components. There are no iframes, runtime HTML parsers, HTML injection, Bootstrap styles/scripts, jQuery, DataTables, Select2, or ApexCharts dependencies. Shared Tailwind styles and shadcn-style source components replace them. Small SVG/CSS charts reproduce the dashboard's demo chart types without an imperative chart library. The original locally hosted Lucide icon font is isolated behind `Icon`; new application chrome uses `lucide-react`.

## Structure

```text
src/
  app/                   # Composition root: providers, routes, store, navigation, layouts
  features/
    administration/
    auth/
    billing/
    customers/
    dashboard/
    kitchen/
    menu/
    orders/
    pos/
    reports/
    reservations/
    settings/
      pages/             # Thin, lazy-loaded route components
      components/        # Screen sections and individual dialogs
      fixtures/          # Typed source table samples, where relevant
  shared/
    api/                 # RTK Query base API, without speculative endpoints
    components/
      ui/                # Owned shadcn/Radix primitives
    lib/                 # Pure utilities
    types/               # Shared presentation contracts
  styles/                # Tailwind v4 theme and template-specific presentation
```

`components.json` configures the shadcn CLI to add components to `src/shared/components/ui`. `Button` uses CVA and Radix Slot; dialogs use Radix Dialog with focus management and Escape dismissal. `Select` is an accessible native select adapter. Shared `DataTable<T>` accepts typed columns, rows, and stable row IDs; `PreviewDataTable` adapts static HTML samples to it without defining imaginary backend models.

See [architecture and conventions](docs/architecture.md), [screen inventory](docs/screen-inventory.md), and [backend integration](docs/backend-integration.md).

# coffee-admin
