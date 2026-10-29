import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { site, indexingReady, publicUrl } from "../src/config/site.ts";
import { withBase, withoutBase } from "../src/utils/urls.ts";

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
const base = (process.env.SITE_BASE_PATH || "/").replace(/\/+$/, "");
const checkBase = (path, route) => {
  assert(
    !base || path === base || path.startsWith(`${base}/`),
    `${route}: internal destination escapes the configured base: ${path}`,
  );
};
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
      anchor.includes(`href="${withBase("/get-involved")}"`),
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
    const parsed = new URL(href, "https://local.invalid" + withBase(route));
    checkBase(parsed.pathname, route);
    const path = withoutBase(parsed.pathname).replace(/\/$/, "") || "/";
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
  for (const element of html.matchAll(/<(?:img|script|link)\b[^>]*>/g)) {
    const asset = element[0].match(/\b(?:src|href)="([^"]+)"/)?.[1];
    if (!asset?.startsWith("/")) continue;
    const parsed = new URL(asset, "https://local.invalid");
    checkBase(parsed.pathname, route);
    await stat(join(root, decodeURIComponent(withoutBase(parsed.pathname))));
  }
  assert.equal(
    html.includes("home-header"),
    route === "/",
    `${route}: homepage header styling must follow the route beneath the base`,
  );
  if (site.canonicalUrl) {
    assert(
      html.includes(
        `property="og:image" content="${publicUrl("/social-card.png")}"`,
      ),
      `${route}: sharing image must retain the site's URL prefix`,
    );
  }
  if (!indexingReady) assert.match(html, /noindex, nofollow/);
}
if (site.canonicalUrl) {
  const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
  for (const route of routes.filter((route) => route !== "/404")) {
    assert(
      sitemap.includes(`<loc>${publicUrl(route)}</loc>`),
      `${route}: sitemap must retain the site's URL prefix`,
    );
  }
}
await stat(join(root, "social-card.png"));
await stat(join(root, "favicon.svg"));
console.log(
  `Build checks passed: ${pages.size} pages, ${links} links, all internal anchors and configured survey CTAs.`,
);
