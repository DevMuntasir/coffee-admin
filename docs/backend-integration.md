# Adding business functionality later

The UI currently performs no API requests or persistent writes. `baseApi` configures RTK Query with `VITE_API_BASE_URL` (default `/api`), its reducer/middleware, cache tag names, and query listeners. Authentication headers, cookies, refresh-token flows, and endpoint URLs must follow the actual backend contract; none are fabricated here.

For a new feature, define request/response types near that feature, then use `baseApi.injectEndpoints` in `features/<feature>/api/<feature>-api.ts`. Export generated hooks from that module. Replace the feature's preview fixture adapter with a container that loads the query and passes typed data to presentation components. Handle loading, empty, and error states explicitly. Mutations should invalidate the relevant cache tags and show feedback only after the backend confirms success.

For example, once the orders contract is known, add `features/orders/api/orders-api.ts`, `features/orders/types/order.ts`, and a query-owning container. Existing shared `DataTable<T>` accepts domain-specific row types and column renderers, so it does not require a redesign when preview data is removed.

Use the typed Redux hooks from `app/hooks.ts` only in application composition. If a future feature needs Redux hooks, move the hook contract to an appropriate shared store boundary without importing `app` from `shared`. Prefer RTK Query's generated hooks for server data.

Use URL search parameters for shareable list filters and pagination. Keep temporary form edits close to their form. Add a global domain slice only for client state that genuinely spans multiple screens, such as an explicitly requested in-progress checkout. Avoid duplicating server data in a slice.

Before shipping payment, authentication, stock, or financial reporting behavior, replace preview controls with their requested workflows and add tests for actual domain rules and failure paths.
