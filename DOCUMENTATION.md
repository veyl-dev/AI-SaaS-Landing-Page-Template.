# Neura Template Documentation

## Structure
- Public pages: `index.html`, `features.html`, `pricing.html`, `about.html`, `contact.html`, `faq.html`
- Admin dashboard demo: `admin/index.html`
- Public styles/scripts: `assets/css/styles.css`, `assets/js/config.js`, `assets/js/main.js`
- Admin dashboard styles and interactions are embedded in `admin/index.html`.

## Admin dashboard demo
Open `admin/index.html`. The sidebar switches between Overview, Users, Subscriptions, AI usage, Website content, Messages, and Settings. The demo includes searchable sample users, CSV exports, mark-as-read message interactions, and local preview settings/content saved with localStorage.

All dashboard records and analytics are sample data. The content editor does not update the public HTML or publish changes. The UI is intentionally presented as a preview, not as a secure admin system.

## Connect a real backend
Before production use, implement server-side authentication and authorization, enforce admin roles on every API request, and connect each dashboard view to protected endpoints. Use a database for users, subscriptions, messages, and usage records. Connect billing through a trusted payment provider and verify webhook signatures server-side. Store secrets only in server-side environment variables. Never rely on hidden UI elements or client-side checks for access control.

## Public website configuration
Edit `assets/js/config.js`: `brand`, `tagline`, `contactEndpoint`, `checkout.starter/pro/team`, `social`, and `footerNote`. Contact and checkout integrations require your own endpoints/hosted URLs; the template does not process payments.

## Deployment
Upload the repository root to a static host. No build command is required. Ensure relative paths are preserved so `admin/index.html` can load its assets and link back to the public pages.

## Before production
1. Replace fictional Neura copy, metrics, prices, and customer records.
2. Configure hosted checkout and contact endpoints.
3. Add privacy policy, terms, and required disclosures.
4. Implement secure authentication, admin authorization, APIs, and persistent storage.
5. Test all pages and admin flows on desktop and mobile.
