# Responsive hero video and typing update — 6 November 2026

## Changed files

- `src/sections/HeroSection.jsx`: replaces only the background layer; adds a word-by-word heading/paragraph reveal and a delayed fade/upward entrance for existing CTAs. Wording, fonts, layout classes, badge and statistics remain intact.
- `src/components/common/HeroBackgroundVideo.jsx`: one responsive video, poster underlay, autoplay/muted/inline/loop settings, ready fade, resize handling, visibility pause and motion/data safeguards.
- `src/components/common/TypingText.jsx`: native inline words preserve font kerning and occupied space. Heading timing follows 55ms per character equivalent; paragraph uses a quicker 45ms word stagger. Accessible complete text is available without repeated screen-reader announcements.
- `src/components/common/hero-video.css`: scoped fade, mobile object positioning, keyboard focus visibility and reduced-motion support.
- `public/videos/aishwarya-hero-desktop.mp4`: original 1920×1080 H.264, 18.08 seconds, 9,745,081 bytes.
- `public/videos/aishwarya-hero-mobile.mp4`: original 720×1280 H.264, 40.2 seconds, 5,214,410 bytes.
- `public/images/hero-desktop-poster.webp` and `hero-mobile-poster.webp`: frames extracted at 0.5 seconds, at native aspect ratio.

## Playback and design

Both supplied MP4s already contain H.264 video and fast-start metadata (`moov` before `mdat`). Files are copied byte-for-byte, preserving quality without unnecessary encoding or a new video library. Below 768px only the portrait video is selected; larger screens select only the landscape video. Resizing releases the old source. A poster remains behind playback and is also used if autoplay fails, playback errors, reduced motion or reduced data is enabled. Playback pauses outside the hero and when the tab is hidden. A short opacity blend to the opening poster softens the source loop boundary.

The existing stable ivory readability gradients and navy/gold text are retained because these are the actual approved colours. The videos remain visible on the open side of the hero. No dynamic colour changes, redesigned buttons, text-size changes or statistics animations were introduced. No typing cursor was added to avoid clutter or changes to wrapping.

## Checks

- Original heading, paragraph, CTA position and hero height matched saved pre-change measurements at 1440px, 768px and 390px after fonts loaded. Typing reserves all space and does not move the heading.
- Desktop/mobile playback verified. Single-variant initial downloads, mute/loop/inline settings, hidden controls, text completion, no horizontal overflow, off-screen pause/resume, reduced-motion and save-data suppression verified.
- Autoplay-denial and failed-request simulations retained a loaded poster.
- Loop blending/restart, tab-visibility pause/resume, live resize and live reduced-motion changes passed.
- Page JavaScript error list was empty.
- Production and GitHub Pages builds, existing tests and repository-subpath video/poster smoke checks passed.
- All previously existing source files except HeroSection are byte-unchanged. The navbar, company logo, other pages and existing stylesheets were not modified.

Local implementation only. No GitHub push or deployment performed.
