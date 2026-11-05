# Typography-only update

- Playfair Display retained for page, section and editorial headings; responsive sizing and balanced wrapping.
- Manrope for body text, cards, navigation, forms, buttons, FAQs and footer. Card and section heading weights standardized to 600.
- Original Inter retained inside the approved homepage hero, including its buttons, labels and counters. The hero heading remains its original Playfair Display size, weight and position.
- Typography-only CSS overrides; existing content, component structure, colours, images, section layout and motion rules are unchanged. The hero receives only a typography isolation class.
- Three locally hosted Latin variable font files (about 109 KiB total), retained OFL licences, two preload hints and optional display for Manrope. No external font stylesheet or new package required.
- Navigation remains compact so the approved desktop header layout fits. Body and form text use readable responsive sizes; inputs are 16px to avoid mobile input zoom.

## Validation

- npm run build, npm run build:pages and npm test passed.
- 36 page/viewport checks at desktop, tablet and mobile sizes: no horizontal overflow, fonts loaded and no JavaScript errors.
- Exact before/after comparison of hero text font family, size, weight, line height, tracking, wrapping and rectangles at 1440, 1280, 768 and 390px: zero differences.
- Screenshot review of homepage, service text and mobile contact form.
- Existing source file changes are limited to the main font token, stylesheet import, hero isolation class and font loading links.

No GitHub push or deployment performed. Existing privacy copy still refers to Google Fonts; content was left unchanged as specifically requested, while font loading is now local.
