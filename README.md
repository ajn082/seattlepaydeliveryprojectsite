# Seattle Delivery Pay Project

A static website for independent student-led research on Seattle delivery pay. Built with Astro 7, TypeScript, and native CSS. There is no server application, custom survey database, analytics, account system, or payment integration.

## Run locally

Use **Node 24**. From the root of a checkout of this repository:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Astro, normally **http://127.0.0.1:4321**. `npm ci` is needed after extracting the source archive or on a new computer; the current working folder already has dependencies installed.

```sh
npm run check          # Types, content, configuration
npm run build          # Static output plus page/link/anchor checks
npm run preview        # Serve the built dist/ folder locally
npm run dev:stop       # Stop this project's background development server
npm run preview:stop   # Stop this project's background preview server
npm run assets:generate # Regenerate the original sharing image
npm run check:release  # Fails until the required public-launch inputs are complete
```

The built `dist/` folder is portable static output. Serve it over HTTP rather than opening its HTML files with `file://`. A future host should serve each route’s `index.html` and use `404.html` for unmatched routes.

## GitHub Pages

The deployment workflow is `.github/workflows/deploy.yml`. In the repository's **Settings > Pages**, the publishing source must be **GitHub Actions**. It checks and builds the site with Node 24 on pushes to `main`, then publishes only after `npm run check:release` succeeds. The workflow can also be started from the Actions tab.

The expected public address is **https://ajn082.github.io/seattlepaydeliveryprojectsite/**. The workflow sets `SITE_BASE_PATH=/seattlepaydeliveryprojectsite`; Astro and the shared URL helpers use this prefix for internal links and assets. Local development keeps its usual root address.

To verify the Pages build locally:

```sh
SITE_BASE_PATH=/seattlepaydeliveryprojectsite npm run build
npm run check:release
```

The release check deliberately fails while survey response access, retention/deletion, or participation/privacy review is unconfirmed. Complete those factual settings in `src/config/site.ts` before publication. Do not invent practices or remove the check to obtain a deployment.

For a future custom domain, update `canonicalUrl` in `src/config/site.ts`, remove the repository prefix from the workflow's `SITE_BASE_PATH`, and configure the domain in GitHub Pages. Shared links, canonical URLs, social images, and the sitemap use these settings.

## Where to edit

| File or directory              | Purpose                                                                                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `src/config/site.ts`           | Project identity, public email, survey URL, volunteer/flyer destinations, canonical domain, status, review date, and privacy terms |
| `src/content/copy.ts`          | Main page headings, introductions, evidence summaries, investigation topics, involvement pathways, and shareable summary           |
| `src/content/research.ts`      | Policy explanation, definitions, methods, limitations, and project background                                                      |
| `src/content/participation.ts` | Worker participation and privacy language                                                                                          |
| `src/content/sources.ts`       | Direct source URLs, publication dates, publishers, and source notes                                                                |
| `src/content/updates/*.md`     | Dated, genuine updates; the Updates page renders them automatically, newest first                                                  |
| `src/styles/global.css`        | Color, typography, layout, responsive rules, focus, reduced motion, and print styles                                               |
| `src/scripts/story-motion.ts`  | GSAP story sequences, scroll triggers, reduced-motion handling, and cleanup                                                        |
| `scripts/generate-social.ts`   | Original typographic sharing artwork; outputs `public/social-card.svg` and `.png`                                                  |

The routes in `src/pages/` compose these content files. Keep research claims and substantial copy in the content directory. Shared components handle repeated survey links, navigation, citations, status, and the time explainer.

### Change the survey destination

Edit `surveyUrl` in `src/config/site.ts`. Every survey CTA reads that setting. A `null` survey URL renders a visible configuration notice instead of a dead button. All survey links open directly in the same tab.

### Add an update

Create a new Markdown file in `src/content/updates/`, with an ISO date and truthful content:

```md
---
title: A factual title for an actual development
date: 2026-11-01
category: Project update
---

Describe only work that actually happened. This is a formatting example, not a project milestone to publish.
```

No page-layout changes are needed. Do not create entries for planned milestones as though they have happened.

## Before public launch

- Confirm **who can access responses and optional uploads**, and **how long they will be kept and how they will be deleted**. Fill `responseAccess` and `retention` in the site configuration and review every participation/privacy passage.
- Review actual Tally settings, access, provider terms, optional uploads, and the live questionnaire. The website deliberately avoids promising complete anonymity. It never changes the form or submits test responses.
- Have the school supervisor review research, consent, and privacy language where appropriate. No institutional relationship or ethics approval is claimed.
- After the review is complete, set `survey.privacyConfirmed` to `true`. This is a manual assertion that the review happened; it does not itself change Tally or establish a privacy policy.
- `canonicalUrl` is configured as `https://ajn082.github.io/seattlepaydeliveryprojectsite/`. It includes the repository path. Canonical tags, the absolute sharing-image URL, and the sitemap preserve this prefix. Update it if a custom domain is added.
- Review the chosen hosting provider’s request logging and add accurate hosting details to the privacy notice.
- Recheck official sources, live survey eligibility and estimated duration, public contact email, and the current project status; update `reviewedAt` only after review.
- Run `npm run check`, `npm run build`, and `npm run check:release` before publication. Repeat the mobile and keyboard review after material design changes.
- Publish only after explicit authorization. Publication uses the GitHub Actions workflow and requires the release check to pass.

If the public URL or privacy review is unconfirmed, pages contain `noindex, nofollow` and `robots.txt` disallows crawling. These are indexing instructions, **not access control**. The configured public URL and confirmed privacy settings now permit indexing; an unfinished copy should remain local.

The volunteer form and flyer are **optional** for Phase 1. Email inquiries work now. A configured `volunteerUrl` replaces the volunteer email action. A configured `flyerUrl` makes an approved flyer download appear. Leave them `null` until real, reviewed destinations exist. No report PDF, QR code, survey results, or later-phase feature is fabricated.

## Research and design choices

- Five primary pages plus Participation & Privacy and a 404 page.
- Warm paper `#F6F3EC`, near-black `#191919`, lilac `#C6ADE8` with deep lilac `#73518F` for readable accent text; heavier ink rules, square buttons with crisp offset shadows, and a campaign-poster treatment.
- Both **Take the survey** and **Get involved** appear in the header, hero, and footer. Below 768px, a fixed two-action bar keeps them reachable while the compact header carries the wordmark and menu. Bottom spacing and safe-area padding protect page content.
- Source Serif 4 and IBM Plex Sans are self-hosted through Fontsource. Copies of their SIL Open Font Licenses are included in `public/licenses/` and the built site. No visitor requests to Google Fonts are added.
- The time graphic is an original schematic, not data. It compares engaged time with broader online time and explicitly says its blocks are not to scale.
- The OLS report and NBER paper are presented with their methods and limits. This project’s survey is separate from published findings.
- The current survey invites adults currently delivering food through apps in Seattle and estimates 1–2 minutes. Its hourly earnings question includes tips and excludes work costs. It does not directly measure waiting time.
- JavaScript handles mobile menu dismissal and copying the shareable summary. GSAP, ScrollTrigger, and SplitText are bundled only on Home, Research, and Get Involved. The opening issue title reveals by line, the time explainer unfolds in stages, and the hour statement travels with scrolling. Later homepage sections have distinct motion: evidence sheets hinge inward, lilac shutters uncover the stationary topic grid, the worker invitation's background expands from its center, and the involvement poster sweeps in sideways. Later section headings and the closing update stay still. Split headings on the involvement page reflow with their width and fonts. Native scrolling is preserved; there are no pinned reading sections, scroll hijacking, auto-looping marquees, or fake data animations.
- The hero leads with the research question on a full-width lilac field (`#B89AE9`) that continues through the homepage header. Its emphasis has a rolling letter wave and rocking paper highlight, paired with a simple ink illustration of a delivery car and bag over a moving paper burst and halftone texture. The primary hero and header buttons use ink with paper lettering. Relevant phone/time and delivery-bag stickers appear farther down the homepage. The artwork is illustrative, not participant photography or measured data. Original transparent assets, placements, and generation prompts are documented in `ASSET_NOTES.md`; Astro builds smaller WebP versions automatically.
- There is no Pause motion option. The 12-second hero sequence stops offscreen and in a hidden tab, and is disabled for reduced motion and print. Participation buttons stay stationary. The heading retains its full accessible name independently of the decorative letter spans. No browser storage is used.
- `prefers-reduced-motion` and print mode return the story to its static layout with uncovered topic copy. Topic shutters only cover noninteractive explanatory cells. Participation controls remain unmasked and stationary during the story animations. Content, navigation, both actions, and the native mobile menu remain usable without JavaScript; the optional copy button stays hidden.

See `VERIFICATION.md` for the completed checks and their limits.
