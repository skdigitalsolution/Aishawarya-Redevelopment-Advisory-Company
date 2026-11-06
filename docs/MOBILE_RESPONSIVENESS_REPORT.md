# Mobile and tablet responsiveness report — 6 November 2026

## Scope and desktop preservation

Reviewed all 11 main routes, all 10 Knowledge Centre articles, Privacy, Terms and the 404 route in rendered Chromium. This continues the existing project; no routes, copy, submission endpoints, fonts, videos, source images or desktop layouts were replaced. Responsive visual corrections are limited to widths below 1280px, with most phone rules below 768px.

Before/after measurements of the navbar, main heading geometry/font and full document height match exactly for all 11 core pages at 1280, 1440 and 1920px. Desktop component markup and animation style remain intact, aside from non-visual class markers and behaviour fixes for navigation/slider lifecycle.

## Pages reviewed

| Page | Result |
|---|---|
| Home | Smaller responsive phone heading, full-width phone CTAs, unclipped two-column company pillars, tablet service grid, balanced slider controls |
| About Us | Banner, text/image stacking, values, footer checked |
| Founder & Leadership | Portrait, content, workflow and headings checked |
| Services | Image/text sections, service links, cards and workflow checked; phone service index links have larger tap areas |
| Society Redevelopment | Topic cards, slider, guides and consultation form checked |
| Self-Redevelopment | Full chart, mobile image viewer and readable step alternative |
| Land Banking | Categories, review slider, accordion and enquiry form checked |
| Redevelopment Process | Step buttons and popup details checked; assessment validation preserved |
| Projects & Case Studies | Existing honest empty state and conceptual illustration preserved |
| Knowledge Centre | Resource cards and all ten article routes checked |
| Contact Us | Persistent phone/tablet labels, 16px fields, larger field/button targets and honest draft handoff |

## Components updated

- New `src/responsive.css`: phone/tablet-only wrapping, spacing, grid, form, navigation, slider and footer corrections.
- `MobileMenu.jsx`: background scroll lock and inert content, cleanup on close/Escape/navigation, automatic close when resizing to desktop, current-page indication.
- `ImageSlider.jsx`: pauses autoplay and neighbour-image preloading outside the viewport; retains hidden-tab/hover/focus/reduced-motion safeguards. Phone controls use a balanced second row for dots.
- `SelfRedevelopmentWorkflow.jsx` and new `WorkflowPreview.jsx` / CSS: original full workflow image preserved; phone/tablet tap opens a full-screen modal with 100–400% zoom, reset, scroll/pan and close/Escape/focus return. Native browser pinch zoom is not disabled. Desktop original-image link remains unchanged.
- Mobile-only readable workflow steps repeat the original stage names, without changing the chart or inventing new timings.
- Small class markers in ExpertiseSection, ExecutionSupport and WhatsAppButton; stylesheet import in main.jsx.

## Issues fixed

- Company pillar text was internally clipped at 320–430px even though the whole page did not overflow. Changed only phone pillars from four columns to two.
- Homepage phone heading was 41.6px and dominated the narrow text panel. It now scales from 32–40px with existing font, colours and typing animation.
- Tablet construction-support text had an internal clipped heading at 1024px. Tablet arrangement now gives it sufficient width.
- Compact form styles overrode intended input sizing. Phone/tablet inputs now genuinely compute to 16px and at least 48px high. Previously visually hidden labels are visible, including removal of the screen-reader clip path.
- Mobile navigation did not lock background scrolling or close after changing to desktop width. Both behaviours are fixed and cleaned up.
- Workflow had only a new-tab image link. Mobile/tablet now have an in-site full-screen zoom/pan view plus a collapsed, readable step list.
- Slider timers ran while the section was outside the viewport. An IntersectionObserver now suspends them and adjacent-image preloading.
- Phone footer links/services are grouped in two compact columns between full-width brand and contact blocks. Safe-area-aware WhatsApp positioning and banner credits avoid overlap.

## Browser and functional validation

- 99 main-route/viewport combinations: 11 pages at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px. Final audit found no horizontal overflow, internally clipped text or page JavaScript exceptions.
- 39 additional checks: ten articles, Privacy, Terms and 404 at 320, 768 and 1440px.
- Touch-enabled 320px Chrome emulation: menu navigation, diagram zoom/pan, close, contact form and footer.
- Menu Escape/cleanup verified on all 11 routes; resize-to-desktop releases the scroll lock.
- Contact validation and correct WhatsApp/email draft handoff; society, land and readiness error states; 16px mobile input computation. No external submission was sent.
- Slider arrows and touch swipe, autoplay while visible and pause outside the viewport.
- Phone requests only the portrait hero MP4. Existing poster/reduced-motion behaviour retained.
- Workflow image fit, full-screen bounds, zoom/reset, panning, focus restoration and eleven readable stages checked.
- `npm run build`, `npm run build:pages`, `npm test` passed. GitHub Pages asset-prefix handling is preserved.

## Limits and remaining information

Browser checks used Chromium desktop/mobile emulation, not physical iPhone/iPad or Safari devices. Zoom controls and image panning were tested; native multi-touch pinch should receive a physical-device check. No separate portrait workflow artwork was supplied, so the original diagram is kept and enlarged instead. Existing unverified project/testimonial placeholders and pending client details remain unchanged.

No GitHub push or deployment was performed.
