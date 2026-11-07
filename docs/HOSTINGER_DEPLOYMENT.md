# Hostinger deployment

The React source stays in `src/`, original assets in `public/`, and existing GitHub Pages deployment stays unchanged. No source-folder reorganization is required.

## Ready-to-upload package

`hostinger-upload.zip` contains the production files at the archive root. Extract it directly inside your domain's `public_html` using Hostinger File Manager. Back up the existing website first. Ensure `index.html`, `.htaccess`, `assets/`, `fonts/`, `images/` and `videos/` are directly inside `public_html`, not in another nested folder. Keep `.htaccess`: it enables direct visits and refreshes on React routes.

Only upload this production package or the contents of `hostinger/public_html/`. Do not upload `src/`, `node_modules/`, `.git/`, `.env*`, audit reports, or company documents.

## Rebuild after future edits

From the project folder:

```sh
npm ci
npm test
npm run build:hostinger
```

Upload the newly generated `hostinger/public_html/` contents. The supplied ZIP is a snapshot; rebuild and repackage it after changes. Normal `npm run build` and `npm run build:pages` remain available.

This configuration targets a domain root on Hostinger Apache/LiteSpeed web hosting, not a subdirectory or Hostinger Website Builder. No Node server is required for the uploaded static files. Existing video assets are retained even where no longer used, to preserve other website references.

SEO uses the deployed domain automatically unless `VITE_SITE_ORIGIN` is set before building. If using EmailJS, configure its allowed domain and public settings before building. Without configuration, the existing email/WhatsApp draft handoff remains available; it does not silently send forms.

After upload, check Home, About, Services, Projects category links, a knowledge article, and Contact. Refresh inner pages, check mobile navigation and images, and test form validation. Sending an actual enquiry requires a deliberate user submission. If old files appear, clear Hostinger/browser cache. Hosting credentials, DNS and live server verification are separate from preparing this package.
