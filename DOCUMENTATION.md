# Neura Template Documentation

## Structure
```
.
├── index.html
├── features.html
├── pricing.html
├── about.html
├── contact.html
├── faq.html
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── config.js
│       └── main.js
├── scripts/smoke-test.mjs
└── .github/workflows/
```

## Configuration
Edit `assets/js/config.js`:
- `brand`, `tagline`: shared brand identity.
- `contactEndpoint`: optional HTTPS endpoint receiving a JSON POST with name, email, topic, and message.
- `newsletterEndpoint`: reserved for a future newsletter integration.
- `checkout.starter/pro/team`: hosted checkout URLs. Connect these to your payment provider; this template does not process payments.
- `social`: your social profile URLs.
- `footerNote`: shared footer note.

Never place private API keys or secrets in browser JavaScript. Use a server-side endpoint for secrets and privileged operations.

## Design system
The CSS custom properties at the top of `assets/css/styles.css` control background, surfaces, borders, text, accent colors, and fonts. The layout includes desktop, tablet, and mobile breakpoints, plus a reduced-motion fallback.

## Interactions
- Mobile navigation toggles and updates `aria-expanded`.
- Reveal animations use IntersectionObserver with a fallback.
- Pricing toggle switches the displayed sample Pro price.
- Contact form validates required fields and email type in the browser. Without an endpoint it displays a demo-mode message; with a valid HTTPS endpoint it sends JSON.
- FAQ uses native `details` and `summary` elements.

## Deployment
Upload the repository root to a static hosting provider. No build command is needed. Ensure the host serves `index.html` as the default document and preserves relative asset paths.

## Before production
1. Replace the fictional Neura brand, story, and all sample copy.
2. Confirm price, plan, privacy, and performance claims are accurate.
3. Configure hosted checkout and contact endpoints.
4. Add your privacy policy, terms, cookie notice, and legally required disclosures.
5. Review font licensing and any external resources used by your deployment.
6. Test all pages and form flows on real mobile devices and desktop browsers.

## Accessibility
Semantic landmarks, visible focus styles, keyboard-operable links/buttons, labels, form status region, FAQ disclosure elements, and reduced-motion support are included. Validate against your own content and target accessibility standard before sale.