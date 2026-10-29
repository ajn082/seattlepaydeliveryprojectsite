# Verification

Initial checks completed locally on October 27, 2026; the latest hero motion revision was checked on October 28, 2026, using the bundled Node 24.19.0 runtime. The site has not been deployed and the live Tally form has not been changed or submitted during testing.

## Build and content

- Astro/TypeScript check: **0 errors, 0 warnings, 0 hints**.
- Production build: **7 HTML pages**, including the custom 404.
- Static integrity check: **204 links**, with valid internal routes/anchors, a single configured survey destination, and Get Involved actions in every header, footer, and mobile action bar.
- Direct production requests: Home, Research, Workers, Get Involved, Updates, Privacy, robots.txt, and sitemap.xml returned **200**; an unknown route returned **404**.
- The original 1200 × 630 sharing PNG and typographic favicon are present in the static build.
- Final npm dependency audit: **0 reported vulnerabilities**. This is an advisory check, not a claim that all software is vulnerability-free.
- Release-readiness check deliberately fails while the final domain, access terms, retention/deletion terms, and privacy confirmation are missing. The local site remains usable for review.

## Browser review

All six content pages were checked at **320px, 375px, 768px, 1024px, and 1280px**. An additional reflow check covered **640px**. No horizontal overflow was found. The 640px test represents the layout space of a 1280px viewport at 200% zoom; native browser zoom was not exposed by the in-app testing browser, so this is a zoom-equivalent reflow check rather than a claim of native 200% zoom verification.

The homepage, worker participation page, research page, involvement page, and updates page were visually reviewed. The homepage and worker survey CTAs appear within the initial mobile screen. The privacy page was checked for its explicit pending terms.

Keyboard checks covered the skip link, visible focus, opening the mobile navigation with Enter, and closing it with Escape while returning focus to its control. The copy-summary button produced its success status. A direct survey CTA opened the real Tally survey, including its eligibility and participation text; **no response was submitted**.

Heading sequences do not skip levels, each page has one H1, and every page has a unique title and description. Reduced-motion CSS removes transitions. Navigation, content, survey links, and native mobile menu disclosure do not depend on JavaScript; the optional copy button has a selectable-text fallback.

## Campaign styling and scroll revision

- The header and hero now present both participation paths. On narrow screens a fixed action bar preserves both actions throughout scrolling. Button text fits at every tested width.
- The mobile Get Involved action was clicked and opened its actual page; keyboard menu behavior and focus return still work.
- The opening title retains its line reveal. The hour statement retains up to 156px of desktop travel (52px on mobile), rotating arrow, and growing rule. The time bracket grows from 0.02 toward 1; schematic proportions stay fixed.
- Later sections now use distinct motion: inward-hinging evidence sheets, staggered lilac shutters over stationary topic copy, a center-expanding invitation background, and a sideways involvement poster. Later section headings and the closing update remain still. Normal scrolling observed the topic covers progress to zero, the invitation background grow to full height, and the involvement fill and headline enter horizontally.
- Responsive checks of the varied motion covered 320px, 375px, 640px, 768px, 1024px, and 1280px without horizontal or button overflow. The worker and involvement buttons and mobile actions remain untransformed. Only the opening issue heading is split on the homepage; its accessible name is preserved. Topic borders and copy remain stationary beneath the shutters.
- A dedicated Lighthouse diagnostic ran the actual updated production script in a temporary browser with reduced motion enabled: **34 story and headline targets remained untransformed**, **no split-line wrappers were created**, **all six topic shutters remained open**, the pause control was absent, the script was loaded, and both mobile actions remained present. No OS preference was changed.
- Animation code is excluded from Workers, Updates, Privacy, and the 404 page. The native scroll position and static content remain usable without it.

## Illustrated hero and headline — October 28, 2026

- The research question is the main message. The vague recurring slogan was removed from the hero, footer, page title, and sharing image; the time explainer now uses “Delivery time. Waiting time.”
- The headline emphasis uses a rolling letter wave and rocking highlight. A simple, character-free ink drawing of a delivery car and bag moves above a lilac paper backplate. Phone/time and delivery-bag cutouts provide section-specific imagery. All three generated PNGs have real transparency; their built WebP versions are approximately 52kB, 20kB, and 26kB respectively.
- The full research question is preserved as the H1's accessible name. Decorative spans and images are hidden from assistive technology. The page has no Pause motion control, as requested. Reduced motion and print skip the ambient sequence; playback also stops offscreen and in hidden tabs.
- Responsive checks covered 320px, 375px, 640px, 768px, 1024px, 1280px, and 1440px without horizontal page or button overflow. Highlight text fits its box. Hero participation actions remain visible within the tested 812px-tall viewport, including above the fixed action dock at mobile widths. The hero image loaded at every width. Mobile sticker placements were visually reviewed.
- Normal-motion observation captured seven headline letters actively transformed during the wave. The full question remained the H1's accessible name, and the pause control was absent at every tested width. The mobile bag sticker cleared its heading by approximately 22px.

## Mobile Lighthouse

Lighthouse 13.6.0 was run against the local production build with its default mobile simulation. These are local lab measurements, not real-world field performance or an INP measurement.

| Page        | Performance | Accessibility | Best practices | SEO | LCP  | CLS   | Blocking time |
| ----------- | ----------- | ------------- | -------------- | --- | ---- | ----- | ------------- |
| Home        | 100         | 100           | 100            | 63  | 0.8s | 0.013 | 5.5ms         |
| For Workers | 100         | 100           | 100            | 63  | 0.8s | 0.002 | 0ms           |

The Home measurement was repeated with the illustrated hero and animated headline running; Workers does not load the story animation script and its earlier measurement is retained. The SEO score reflects the **intentional indexing block** on this unfinished local review build. The robots directives remain restrictive until the final domain and complete privacy review are configured. An automated accessibility score does not replace a full assistive-technology audit, and removing a pause control is not a claim of conformance for continuous motion.

Measured contrast ratios for the principal pairs:

| Pair                       | Ratio   |
| -------------------------- | ------- |
| Near-black on paper        | 15.87:1 |
| Muted body text on paper   | 6.12:1  |
| Deep lilac on paper        | 5.74:1  |
| Near-black on lilac        | 8.83:1  |
| Near-black on lilac hover  | 7.10:1  |

The lilac revision replaces the earlier warm accent throughout the UI, favicon, and sharing image. Lilac fills use near-black text; accent text uses a deeper lilac to keep contrast on paper. Focus outlines contrast at 5.74:1 against paper and 3.19:1 against lilac.

## Editing behavior

Checks ran in an **isolated scratch copy**, leaving the delivered site's configuration and content unchanged:

1. Changing one survey URL changed every rendered survey CTA across all pages.
2. Adding one dated Markdown update rendered the new title and body automatically, in newest-first order, without changing page layouts.
3. Setting the survey URL to null removed active survey CTAs and displayed a configuration notice on every page.

Test URLs and test updates are absent from the delivered source and build.

## Before publication

Confirm response/upload access, retention and deletion, survey settings, the final domain, and the chosen host's request logging. Review participation language with the supervisor where appropriate. Optional volunteer-form and flyer destinations remain unconfigured; real email inquiry actions work instead. Full instructions are in `README.md`.
