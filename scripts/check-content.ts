import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { site } from "../src/config/site";
import { sources } from "../src/content/sources";

const checkHttps = (value: string, label: string) =>
  assert.equal(new URL(value).protocol, "https:", `${label} must use HTTPS`);
assert(site.name.trim(), "Project identity is required");
assert.match(
  site.contactEmail,
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  "A public contact email is required",
);
assert.match(site.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
for (const [key, value] of Object.entries(sources))
  checkHttps(value.url, `Source ${key}`);
for (const key of ["surveyUrl", "volunteerUrl", "canonicalUrl"] as const) {
  if (site[key]) checkHttps(site[key]!, key);
}
if (site.flyerUrl && !site.flyerUrl.startsWith("/"))
  checkHttps(site.flyerUrl, "Flyer URL");
for (const name of await readdir(
  new URL("../src/content/updates/", import.meta.url),
)) {
  if (!name.endsWith(".md")) continue;
  const content = await readFile(
    new URL(`../src/content/updates/${name}`, import.meta.url),
    "utf8",
  );
  assert.match(content, /^---\n[\s\S]*?title: .+/, "Updates require a title");
  assert.match(
    content,
    /\ndate: \d{4}-\d{2}-\d{2}\n/,
    "Updates require a dated frontmatter entry",
  );
}
const missing = [
  !site.canonicalUrl && "final canonical domain",
  !site.surveyUrl && "survey URL",
  !site.survey.responseAccess && "response and upload access terms",
  !site.survey.retention && "response and upload retention/deletion terms",
  !site.survey.privacyConfirmed && "confirmed participation/privacy review",
].filter(Boolean);
if (process.argv.includes("--release")) {
  assert.equal(
    missing.length,
    0,
    `Not ready for public release: ${missing.join("; ")}`,
  );
} else if (missing.length) {
  console.log(
    `Local review build. Before publication, complete: ${missing.join("; ")}.`,
  );
}
console.log("Content and configuration checks passed.");
