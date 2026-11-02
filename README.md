# Neura — AI SaaS Website & AI Workspace Dashboard HTML Template

A responsive HTML5 template for AI products, SaaS startups, and software businesses. Neura combines a distinctive marketing website with a dedicated AI product workspace interface. Built with semantic HTML, custom CSS, and vanilla JavaScript—no build step or framework required.

## Public website
- `index.html` — marketing homepage
- `features.html` — feature overview
- `pricing.html` — pricing cards and billing-period toggle
- `about.html` — company story and values
- `contact.html` — contact form UI with optional HTTPS endpoint
- `faq.html` — frequently asked questions

## AI workspace dashboard
Open `admin/index.html`. Included views:
- AI usage overview with requests, tokens, latency, and estimated cost
- Interactive AI playground with model selector, prompt composer, temperature control, and simulated responses
- Model library for OpenAI, Anthropic, Google, and open-source examples
- Knowledge base interface for document and data-source workflows
- API key management preview and security guidance
- Usage and billing metrics with model-level token breakdown
- API request logs with search and CSV export
- Integration showcase and workspace settings
- Responsive dark interface with violet and cyan AI-product styling

## Quick start
1. Download and extract the ZIP.
2. Open `index.html` to preview the public website.
3. Open `admin/index.html` to preview the AI workspace.
4. Edit `assets/js/config.js` to configure public-site brand text, contact endpoint, hosted checkout links, and social URLs.
5. Replace demo content and sample data before launch.
6. Upload the project folder to your preferred static host.

## Customization
- Public site styles: `assets/css/styles.css`
- Public site settings: `assets/js/config.js`
- Public site interactions: `assets/js/main.js`
- AI workspace markup: `admin/index.html`
- AI workspace styles: `admin/admin.css`
- AI workspace interactions and sample data: `admin/admin.js`

## Important scope
This download is a **front-end HTML template**, not a complete SaaS application. Dashboard metrics, model usage, API logs, and responses are illustrative. The playground demonstrates the chat flow with simulated sample responses; it does not call a real AI provider. There is no real login, authentication, authorization, database, payment processing, AI inference, file ingestion, vector search, or live integration. API keys and settings are preview examples only. Connect protected server-side APIs and authentication before using real customer information. Never put secret API keys in client-side files.

See [DOCUMENTATION.md](DOCUMENTATION.md) for implementation notes and [CODESTER-LISTING.md](CODESTER-LISTING.md) for suggested marketplace copy.