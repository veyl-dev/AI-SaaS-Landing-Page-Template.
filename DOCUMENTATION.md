# Neura Template Documentation

## Package structure
- Public pages: `index.html`, `features.html`, `pricing.html`, `about.html`, `contact.html`, `faq.html`
- AI workspace dashboard: `admin/index.html`
- Dashboard assets: `admin/admin.css`, `admin/admin.js`
- Public assets: `assets/css/styles.css`, `assets/js/config.js`, `assets/js/main.js`

## Preview
Open the root `index.html` or `admin/index.html` directly in a modern browser. No npm install, build command, or framework is required. Keep the supplied folder structure intact so relative asset paths continue to work.

## AI workspace dashboard views
The dashboard includes Overview, Playground, Models, Knowledge base, API keys, Usage & billing, API logs, Integrations, and Settings.

- **Overview:** sample AI request volume, token usage, latency, estimated cost, usage chart, model mix, and recent API requests.
- **Playground:** prompt composer, model selector, temperature slider, output-token selector, sample prompts, and simulated example responses.
- **Models:** model cards with provider, context window, and model type examples.
- **Knowledge base:** document-ingestion UI preview.
- **API keys:** masked sample keys and security guidance.
- **Usage & billing:** sample token consumption, estimated spend, and model breakdown.
- **API logs:** searchable request history and CSV export.
- **Integrations:** illustrative provider and service cards.
- **Settings:** workspace preferences saved in localStorage for this browser preview.

All dashboard records and metrics are fictional preview data. The playground does not call an AI API; responses are simulated in the browser. Model cards do not establish live provider connectivity. File upload, vector search, API-key generation, authentication, billing, and integrations require a real backend.

## Customize the public website
Edit `assets/js/config.js`:
- `brand` and `tagline`
- `contactEndpoint` — optional HTTPS endpoint that accepts a JSON POST
- `checkout.starter`, `checkout.pro`, and `checkout.team` — hosted checkout URLs
- `social` — social profile URLs
- `footerNote` — footer copyright text

The template does not include a payment gateway. Use hosted checkout from a payment provider and verify all payment events server-side.

## Customize the AI workspace
- Change the dashboard layout and content in `admin/index.html`.
- Change its dark theme, colors, spacing, typography, and responsive breakpoints in `admin/admin.css`.
- Edit the demo prompt responses and sample request records in `admin/admin.js`.
- Connect your own authenticated API endpoints for real model calls and usage data. Never expose provider credentials in browser JavaScript.

## Production integration and security
This is a static front-end UI. It does not include authentication, admin roles, a database, billing, AI model calls, file ingestion, vector search, or live integrations. Before production use:
1. Implement secure sign-in and server-side session handling.
2. Enforce authorization on every protected API endpoint; hiding dashboard links is not access control.
3. Store users, API keys, subscriptions, messages, documents, and usage data in a server-side database.
4. Route model requests through a protected backend and keep provider secrets in server-side environment variables.
5. Implement document parsing, embeddings, and vector retrieval if enabling knowledge-base features.
6. Connect billing through a payment provider; verify webhook signatures on the server.
7. Add privacy policy, terms, cookie disclosures, and any required compliance pages.
8. Test keyboard navigation, screen sizes, forms, and all backend error states.

## Deployment
Upload the project folder to any static hosting provider. No compilation is required. Use HTTPS when configuring contact, checkout, or API endpoints.