// Astro supplies BASE_URL in built pages; Node checks use the same build input.
const basePath = () =>
  (import.meta.env?.BASE_URL ?? process.env.SITE_BASE_PATH ?? "/").replace(
    /\/+$/,
    "",
  );

export function withBase(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${basePath()}${path}`;
}

export function withoutBase(pathname: string) {
  const base = basePath();
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    return pathname.slice(base.length) || "/";
  }
  return pathname;
}
