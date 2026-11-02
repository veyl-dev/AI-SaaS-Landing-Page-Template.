# Neura Template Documentation

## Package structure
- Public pages: `index.html`, `features.html`, `pricing.html`, `about.html`, `contact.html`, `faq.html`
- Admin dashboard: `admin/index.html`
- Dashboard assets: `admin/admin.css`, `admin/admin.js`
- Public assets: `assets/css/styles.css`, `assets/js/config.js`, `assets/js/main.js`

## Preview
Open the root `index.html` or `admin/index.html` directly in a modern browser. No npm install, build command, or framework is required. Keep the supplied folder structure intact so relative asset paths continue to work.

## Admin dashboard views
The sidebar provides Overview, Customers, Plans & billing, AI activity, Inbox, Integrations, and Settings. The dashboard includes responsive navigation, searchable sample customer rows, CSV downloads, sample inbox messages with read-state interaction, and local browser settings.

All dashboard records and metrics are fictional preview data. Integration cards are illustrative and do not connect to third-party services. The settings preview is stored in localStorage and does not update the public website.

## Customize the public website
Edit `assets/js/config.js`:
- `brand` and `tagline`
- `contactEndpoint` — optional HTTPS endpoint that accepts a JSON POST
- `checkout.starter`, `checkout.pro`, and `checkout.team` — hosted checkout URLs
- `social` — social profile URLs
- `footerNote` — footer copyright text

The template does not include a payment gateway. Use hosted checkout from a payment provider and verify all payment events server-side.

## Customize the admin dashboard
- Change the HTML layout and labels in `admin/index.html`.
- Change colors, spacing, typography, and responsive breakpoints in `admin/admin.css`. The dashboard uses the same CSS variables and visual language as the public website.
- Replace the example arrays in `admin/admin.js` with API responses from your own application.
- Replace demo CSV data with real authorized data only after implementing protected server-side access.

## Production integration and security
This is a static front-end UI. It does not include authentication, admin roles, a database, billing, AI model calls, or live integrations. Before production use:
1. Implement secure sign-in and server-side session handling.
2. Enforce authorization on every protected API endpoint; hiding dashboard links is not access control.
3. Store users, subscriptions, messages, and usage data in a server-side database.
4. Connect billing through a payment provider; verify webhook signatures on the server.
5. Keep provider secrets in server-side environment variables, never in browser JavaScript.
6. Add privacy policy, terms, cookie disclosures, and any required compliance pages.
7. Test keyboard navigation, screen sizes, forms, and all backend error states.

## Deployment
Upload the project folder to any static hosting provider. No compilation is required. Use HTTPS when configuring contact or checkout endpoints.
