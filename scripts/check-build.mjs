import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { site, indexingReady } from "../src/config/site.ts";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const routes = [
  "/",
  "/research",
  "/workers",
  "/get-involved",
  "/updates",
  "/privacy",
  "/404",
];
const pages = new Map();
for (const route of routes) {
  const filename =
    route === "/404"
      ? "404.html"
      : route === "/"
        ? "index.html"
        : `${route.slice(1)}/index.html`;
  pages.set(route, await readFile(join(root, filename), "utf8"));
}
const titles = new Set();
let links = 0;
for (const [route, html] of pages) {
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `${route}: one H1 required`,
  );
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${route}: unique title required`);
  titles.add(title);
  assert.match(html, /<meta\s+name="description"\s+content="[^"]+"/);
  assert(
    !html.includes('href="#"') && !html.includes("javascript:"),
    `${route}: no dead or unsafe links`,
  );
  assert(
    html.includes(site.independence),
    `${route}: independence statement missing`,
  );
  const involvementLinks = [
    ...html.matchAll(/<a\b[^>]*class="[^"]*involvement-link[^>]*>/g),
  ];
  assert(
    involvementLinks.length >= 3,
    `${route}: Get involved must be available in the header, footer, and mobile action bar`,
  );
  assert(
    involvementLinks.every(([anchor]) =>
      anchor.includes('href="/get-involved"'),
    ),
    `${route}: Get involved must lead to its real page`,
  );
  for (const anchor of html.matchAll(/<a\b[^>]*>/g)) {
    const href = anchor[0].match(/\bhref="([^"]*)"/)?.[1];
    assert(href, `${route}: link without destination`);
    links++;
    if (anchor[0].includes("survey-link"))
      assert.equal(
        href,
        site.surveyUrl,
        `${route}: survey destination is not centralized`,
      );
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const parsed = new URL(href, "https://local.invalid" + route);
    const path = parsed.pathname.replace(/\/$/, "") || "/";
    const destination = pages.get(path);
    if (destination) {
      if (parsed.hash)
        assert(
          destination.includes(
            `id="${decodeURIComponent(parsed.hash.slice(1))}"`,
          ),
          `${route}: missing anchor ${href}`,
        );
    } else {
      assert(!parsed.hash, `${route}: unknown page ${href}`);
      await stat(join(root, decodeURIComponent(path)));
    }
  }
  if (!indexingReady) assert.match(html, /noindex, nofollow/);
}
await stat(join(root, "social-card.png"));
await stat(join(root, "favicon.svg"));
console.log(
  `Build checks passed: ${pages.size} pages, ${links} links, all internal anchors and configured survey CTAs.`,
);
