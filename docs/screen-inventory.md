# Screen inventory

The active application screens have native React routes. `index.htm` duplicates `index.html` and redirects to `/dashboard`. The legacy table and coupon screens have been retired; add-ons are retained in source but hidden from the interface.

| HTML source                   | React route               | Feature          | Layout    |
| ----------------------------- | ------------------------- | ---------------- | --------- |
| `audit-report.html`           | `/audit-report`           | `reports`        | workspace |
| `categories.html`             | `/categories`             | `menu`           | workspace |
| `customer-report.html`        | `/customer-report`        | `reports`        | workspace |
| `customer.html`               | `/customer`               | `customers`      | workspace |
| `delivery-settings.html`      | `/delivery-settings`      | `settings`       | workspace |
| `earning-report.html`         | `/earning-report`         | `reports`        | workspace |
| `email-verification.html`     | `/email-verification`     | `auth`           | auth      |
| `forgot-password.html`        | `/forgot-password`        | `auth`           | auth      |
| `index.html`                  | `/dashboard`              | `dashboard`      | workspace |
| `integrations-settings.html`  | `/integrations-settings`  | `settings`       | workspace |
| `invoice-details.html`        | `/invoice-details`        | `billing`        | workspace |
| `invoices.html`               | `/invoices`               | `billing`        | workspace |
| `items.html`                  | `/items`                  | `menu`           | workspace |
| `kanban-view.html`            | `/kanban-view`            | `orders`         | workspace |
| `kitchen.html`                | `/kitchen`                | `kitchen`        | workspace |
| `login.html`                  | `/login`                  | `auth`           | auth      |
| `notifications-settings.html` | `/notifications-settings` | `settings`       | workspace |
| `order-report.html`           | `/order-report`           | `reports`        | workspace |
| `orders.html`                 | `/orders`                 | `orders`         | workspace |
| `otp.html`                    | `/otp`                    | `auth`           | auth      |
| `payment-settings.html`       | `/payment-settings`       | `settings`       | workspace |
| `payments.html`               | `/payments`               | `billing`        | workspace |
| `pos.html`                    | `/pos`                    | `pos`            | workspace |
| `print-settings.html`         | `/print-settings`         | `settings`       | workspace |
| `register.html`               | `/register`               | `auth`           | auth      |
| `reservations.html`           | `/reservations`           | `reservations`   | workspace |
| `reset-password.html`         | `/reset-password`         | `auth`           | auth      |
| `role-permission.html`        | `/role-permission`        | `administration` | workspace |
| `sales-report.html`           | `/sales-report`           | `reports`        | workspace |
| `store-settings.html`         | `/store-settings`         | `settings`       | workspace |
| `tax-settings.html`           | `/tax-settings`           | `settings`       | workspace |
| `users.html`                  | `/users`                  | `administration` | workspace |
