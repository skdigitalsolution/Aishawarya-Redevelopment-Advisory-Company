# Aishwarya Redevelopment Advisory — Editorial React Website

A component-based React + Vite website with an editorial, light, image-led visual language inspired by the **layout principles** of the user-supplied Imperial Study Abroad reference. Original Aishwarya branding, images, writing and content are used. This is not a source-code clone of the reference site.

## Setup

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Hostinger: upload the **contents of** `dist/` to `public_html`. The supplied `public/.htaccess` is copied into `dist` and supports React Router browser refreshes on Apache.

## Component structure

- `src/components/` — reusable Navbar, Brand, Footer, ContactForm, Accordion, Reveal, StatCounter, PageHero, ServiceIcon, SectionHeading.
- `src/sections/` — 10 standalone homepage sections, each in its own component.
- `src/pages/` — Home, About, Services, Redevelopment, LandAdvisory, Contact.
- `src/data/site.js` — company contact, image references, services, process and FAQs.
- `src/hooks/` — reusable count-up hook.
- `public/images/` — original client-uploaded images, plus images extracted from client-provided PPTX (optimized as WebP).

## Interactions

Responsive off-canvas mobile menu; tabbed services; 8-stage process selector; FAQ accordion; animated scroll reveals; entrance/page transitions; count-up figures; gentle hero zoom; hover animations; WhatsApp lead form.

## Important content decisions

- Founder headshot and company presentation photographs are supplied by the client.
- The visual storytelling images from the client presentation are illustrative. They are **not** labeled as completed projects or claimed to be Aishwarya's own completed buildings.
- No fake testimonials, project names, awards or fabricated project counts have been inserted.
- Founder-profile figures (10+ years, 100+ societies, 200+ title reviews, 500+ CTS workflows) are drawn from the documents **and should be verified by the client before publication**.
- Contact uses the company profile number +91 9137304005 and provided Gmail; contact variants across client materials should be reconciled before launch.
- Consultation form uses a WhatsApp prefilled message. **There is no backend, database or email delivery.** A user must send the message in WhatsApp. Configure backend/API for direct submissions.
- No guarantee of construction deadlines, corpus funds, results or project returns is made.

## Customization

Brand colors and spacing: `src/styles.css`.
Content: `src/data/site.js` and individual components.
Images: `public/images/` and `src/data/site.js`.
Routes: `src/App.jsx`.
