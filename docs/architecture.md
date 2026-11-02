# Architecture and conventions

The dependency direction is `app → features → shared`. Shared modules cannot import features or the application composition root. Features must not import another feature's internal components; coordination belongs in `app`. Import the exact module you need rather than introducing broad barrel exports.

The workspace sidebar follows the original template: a 62px icon minibar and a 214px category panel, with a 58px store header. Its six categories, original icons, local Instrument Sans fonts, store images, and profile image are preserved. Category selection is local layout state, while direct route visits select the corresponding category automatically. Collapsing the panel reduces the combined width to 130px. Below 992px, the same component appears inside the mobile navigation dialog.

## Responsibilities

- `app` composes the router, Redux provider, global error boundary, layouts, navigation, and theme synchronization.
- A feature `pages` component composes its screen sections and preview provider. Each route is lazy-loaded independently.
- Feature `components` render screen sections. Each preview dialog has its own component; aggregation files only compose those dialogs.
- Feature `fixtures` contain typed, static table samples. They are presentation data, not domain entities or server state.
- `shared/components/ui` owns visual primitives and accessible Radix adapters. `shared/components` contains composed, domain-independent UI.
- `shared/api/base-api.ts` owns HTTP transport and cache configuration. Feature-specific endpoints will be injected from the owning feature.

SOLID is applied through small responsibilities and composition. For example, `DataTable<T>` does not know about customers or invoices; new row types and column renderers extend it through props. Components depend on explicit, narrow TypeScript props. UI primitives can be substituted without changing feature data. There are no repository classes, service containers, or generic domain abstractions before a real backend requires them.

## Naming

| Item                              | Convention                               | Example                                         |
| --------------------------------- | ---------------------------------------- | ----------------------------------------------- |
| Directories                       | lowercase or kebab-case                  | `features/menu`, `shared/components/ui`         |
| Feature components/pages          | PascalCase files and symbols             | `CategoriesPage.tsx`, `CategoriesHeaderSection` |
| Shared/infrastructure files       | kebab-case; PascalCase component symbols | `data-table.tsx`, `DataTable`                   |
| Hooks                             | `use` prefix, camelCase symbols          | `useAppSelector`                                |
| Functions/variables/configuration | camelCase                                | `createAppStore`, `navigation`                  |
| Types/interfaces                  | PascalCase, no `I` prefix                | `PreviewTableModel`, `DataColumn<T>`            |
| True scalar constants             | UPPER_SNAKE_CASE                         | `DEFAULT_PAGE_SIZE` when needed                 |
| Routes                            | descriptive kebab-case                   | `/invoice-details`, `/sales-report`             |
| API endpoint names                | action + domain noun                     | `getOrders`, `updateOrder` when implemented     |

Use named exports for shared components, hooks, and utilities. Route page components use default exports for `React.lazy`. Use `import type` for type-only dependencies. Avoid `any`, non-null assertions in production code, prop mutation, hidden side effects, direct DOM manipulation, and speculative abstractions.

## State ownership

| State                                | Owner                                                                |
| ------------------------------------ | -------------------------------------------------------------------- |
| Mobile navigation visibility         | Local `useState` in the application layout                           |
| Dialog visibility and active tab     | Route-scoped context; resets on route changes                        |
| Cross-screen theme preference        | Small typed Redux UI slice                                           |
| Future remote data                   | RTK Query; never duplicate query responses in regular slices         |
| Future shareable filters/page/search | URL search parameters                                                |
| Future form edits                    | Local state or a form library when validation complexity warrants it |

No network request is made by the current UI. Do not put static fixtures into Redux or introduce cart/auth slices until those workflows are requested.

## Styling and accessibility

Use Tailwind utilities and the shared CSS variables in `globals.css`. Prefer component variants to repeated conditional class strings, and use `cn` to merge class names. Additional CSS should describe visual template features rather than reintroduce a second utility framework. Primitive styles are owned in source, following the shadcn model.

Dialogs use accessible titles, descriptions, focus trapping, and keyboard dismissal. Icon-only controls have accessible labels. Navigation uses real router links, current-page state, and a skip link. Tables use header cells and stable row identities. A native select retains keyboard behavior. Motion respects reduced-motion preferences.

## Migration provenance

`page-manifest.json` maps each source HTML page to its route and feature. `scripts/migrate-template.py` was the one-time migration utility; the running application never reads it or the original HTML. The generated TSX is now the maintained source. Re-running the script overwrites migrated feature components and fixtures, so use it only for a deliberate fresh migration before manual edits, then run the formatter and validation suite.

`migration-classes.json` is a frequency inventory from migration, not a runtime stylesheet or a claim that every source class needs a rule. Tailwind handles utility classes; semantic presentation is defined in `globals.css`. Original HTML files are retained as the reference for future visual refinements.
