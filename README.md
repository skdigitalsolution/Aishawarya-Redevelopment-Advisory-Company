# Aishwarya Redevelopment Advisory Company

An in-place upgrade of the existing React 18 + Vite website. Tailwind CSS v4, React Router DOM 6, Lucide React and Framer Motion. Existing originals and earlier reusable components remain in the project.

## Local setup

Use Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

Vite development runs at http://127.0.0.1:5173. The runner configuration loader and WebAssembly esbuild alias avoid native filesystem restrictions in this Windows environment. `package-lock.json` records the install.

## Pages

Home `/`; About `/about-us`; Founder `/founder-leadership`; Services `/services`; Society Redevelopment `/society-redevelopment`; Self-Redevelopment `/self-redevelopment`; Land Banking `/land-banking`; Process `/redevelopment-process`; Projects `/projects`; Knowledge `/knowledge-centre`; Contact `/contact-us`. Each knowledge guide has `/knowledge-centre/:slug`. Privacy, terms and 404 pages are included. Old `/about`, `/process`, `/contact` and `/testimonials` URLs redirect.

The homepage has ten sections in the requested order: hero, company, founder, expertise, process, why choose, projects, readiness, testimonials/FAQ, contact.

## Forms

No backend or EmailJS credentials were found. Contact and readiness forms validate before preparing an email/WhatsApp draft. No success claim is made on draft preparation. The visitor sends from the chosen external app. Readiness always uses this handoff. Editing fields invalidates the draft. No form values are stored in localStorage or sent during tests.

For optional EmailJS sending, copy `.env.example` to `.env.local` and set all three keys. The template must accept `from_name`, `reply_to`, `phone`, `subject`, `message`, `to_email` and optionally the individual field names. Set and verify the recipient in the EmailJS template itself. Restrict allowed origins in EmailJS. A configured contact form reports success only after the EmailJS request resolves; errors preserve the entered values. Readiness remains a handoff. Client-side public keys are public by design; never place private API secrets in VITE variables.

## Content and provenance

Company and founder copy is grounded in the supplied director DOCX, company-profile PPTX, 20-service brochure, land banking PPTX and provided artwork. The original company emblem and founder photograph are used. Profile illustrations are labeled conceptual. Experience counters are attributed to the client leadership profile, not presented as an independent audit. Unsupported guarantees from source copy were omitted.

No approved project sheets, image permissions, completion records or testimonial approvals were supplied. Public project and testimonial arrays are empty with polished publishing states. Earlier sample identities have been removed from public data. Existing legacy components are retained but the new routes do not render them. The 20-service brochure is used as the primary service inventory; the director introduction contains a different 20-item list requiring client reconciliation if desired.

Knowledge guides are educational, include official MahaRERA/BMC/Co-operation Department resources, and avoid site-specific legal or financial conclusions. A precise office street address was not supplied, so no map pin is asserted. The confirmed contact area is Goregaon, Mumbai.

## Deployment and direct refreshes

Build output is `dist`. The host must serve existing files normally and return `/index.html` for application routes. `public/_redirects` supports Netlify/Cloudflare Pages; `vercel.json` supports Vercel. For Nginx use `try_files $uri $uri/ /index.html;`. Vite dev and preview support route fallback. Set a real canonical domain and social sharing image after hosting is chosen. Do not expose private client documents with a deployment.

## Verification

`npm test` checks content integrity, nav destinations, service categories, document stages, article slugs, required fields, email/mobile/number validation and handoff encoding. Browser QA covers route rendering, desktop/mobile navigation, process/FAQ controls, forms and horizontal overflow. No real enquiries are sent during QA.

## Existing GitHub repository integration

The original GitHub history, workflow, illustrations and legacy source modules are retained. `npm run build:pages` uses the repository subpath, adjusts client asset URLs and creates `404.html` for GitHub Pages SPA fallback. The workflow uses that command. Normal `npm run build` retains root hosting for Sites. The old Tailwind v3 PostCSS configuration is preserved as `docs/legacy/postcss.config.js.txt`; the current application uses the Tailwind v4 Vite plugin. Generated dependencies are no longer tracked.
