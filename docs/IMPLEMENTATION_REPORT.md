# Website development update - 5 November 2026

## Completed

- Added a separate seven-slide activity carousel immediately below the existing homepage hero/statistics section. Fade transitions, gentle zoom, six-second autoplay, arrows, dots, manual pause, hover/focus pause, hidden-tab pause, touch swipe and reduced-motion support.
- Added 25 optimized WebP crops from supplied profile artwork. The image mapping was written before extraction/placement. No full PDF page is used as a photograph; no random stock photographs or separate gallery added.
- Expanded Services into the 20 areas listed in the founder document, in six categories. Each has an image, introduction, scope, how Aishwarya helps, why it matters, related links and consultation link. Five additional practical guides cover readiness, PMC selection, proposal comparison, budget management and member updates.
- Kept the original brochure data and all its existing service link destinations through legacy anchors. The detailed directory now follows the latest founder-document list; confirm the final catalogue if the two client lists should be published separately.
- Updated Founder & Leadership with the original photograph, five areas of experience, professional journey, values, leadership approach, a clearly identified editorial summary of the founder principle, and consultation CTA. No new experience counters added pending permission.
- Expanded Land Banking with brokerage, three investment categories, a three-check due-diligence accordion, a small review slider and a ten-field landowner/agent enquiry form.
- Kept the eight-stage redevelopment interaction, adding relevant images, activities and a clear description of advisory support on the detailed page.
- Added matched imagery and detailed explanations to About, Society Redevelopment, Self-Redevelopment, Why Choose and Society Assessment. Kept existing homepage section order.
- Added an approved-testimonial carousel ready for future records. Empty state remains because no approved reviews were supplied; star ratings now require an actual supplied rating.
- Kept project empty states. No invented project names, locations, results or testimonials; no before/after comparison because matching verified photographs were not supplied.
- Reused the working EmailJS / explicit email-and-WhatsApp handoff system for land enquiries. No external messages were sent during testing.

## Approved design preservation

Byte hashes match the pre-edit snapshot for HeroSection, Navbar, NavDropdown, MobileMenu, BrandLogo and ContactSection. Global index.css is unchanged. The home, stats, company, founder and contact data blocks match the committed baseline; only the requested Why Choose descriptions were updated in shared content. Hero background, heading, arrangement, buttons, colours, height, logo position, statistics design and contact presentation are preserved.

## Source review and image quality

All 27 PDF pages were rendered and visually reviewed alongside embedded PPTX images. All text in the founder DOCX and the six land-banking slides was extracted and reviewed. The company PPTX has 28 slides, while the supplied PDF has 27 pages. The original separate scene photographs are not available; the 25 website assets are optimized crops from the embedded presentation artwork, labelled as illustrations. They are not evidence of actual company events, staff or completed projects. No founder face was replaced or generated.

## Validation

- Production build and GitHub Pages subpath build passed.
- Existing tests passed; added tests for the 20 detailed service records, legacy anchors, image assets, related links, land-field validation and encoded handoffs.
- Browser checks: 13 routes at 1440px, 768px and 390px (39 page/viewport combinations); no horizontal overflow, broken local images or page JavaScript exceptions.
- Browser interactions passed: slider arrows/dots, autoplay, hover and hidden-tab pause, manual pause, reduced motion, touch swipe, desktop dropdown hover/Escape/outside click, mobile navigation, process expansion, land validation and draft preparation, and the 404 page.
- Local GitHub Pages preview verified the repository subpath, direct inner-page reloads, service hashes and asset paths.
- Browser access to the existing Google Fonts stylesheet was blocked by this environment's network restrictions. Fonts/configuration were preserved; this is not a local asset or JavaScript failure.
- No real EmailJS send, email message or WhatsApp message was sent. When not configured, the form prepares a draft and requires the visitor to choose an external handoff; it does not claim receipt.

## Client information still needed

1. Permission to publish the founder-document figures: 10 years, 100+ societies, 200+ title/legal investigations and 500+ CTS workflows. Existing approved homepage counters are unchanged; these are not independently verified.
2. Actual land-parcel photographs and verified listing information, if listings should be published.
3. Verified case-study names, locations, company role, status, dates and original photographs with publication rights.
4. Approved testimonial text, society/client identity and permission; actual rating only if supplied.
5. Original separate high-resolution images for the roughly 25 scenes, if available. Several embedded crops are appropriate only at card or half-page sizes.
6. Full confirmed office address. Existing +91 9137304005, sachin.aishwaryaredevelopment@gmail.com and Goregaon office details were preserved. Some source material refers to Borivali West and other contact/location wording; no conflicting address was substituted.
7. Final confirmation of the service catalogue, because the earlier brochure and latest founder document use different twenty-item lists.
8. EmailJS environment configuration if direct delivery is required. Never commit private credentials. Existing explicit handoff remains available.

## Delivery

Local code only. No GitHub commit, push or deployment was performed for this update. See IMAGE_MAPPING.md for the image inventory and intended service/page placement.
## Later requested update: light, full-height inner-page covers

The shared PageHero now fills the visible screen below the unchanged 96px navbar. It uses the existing architectural image at full brightness, an ivory readability gradient and navy headings instead of the dark overlay. This applies to inner pages, including articles and policies; the separately implemented approved homepage hero is unchanged. Mobile uses a light text backing and permits extra height when content needs it.

## Later requested update: contextual covers and inner-page motion

The shared inner-page cover now chooses a relevant company-profile image for each route and each educational article instead of reusing the homepage skyline. Cover text and breadcrumbs are centered on a light panel. Gentle image entrance/parallax, scroll reveals and image/card hover treatments are limited to inner pages. Homepage hero and navigation remain unchanged. Reduced-motion support disables the added motion.
