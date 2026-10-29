// Public project settings. Never put survey responses or secrets in this file.
export const site = {
  name: "Seattle Delivery Pay Project",
  researcher: "Amaye Jain",
  contactEmail: "amayejain12@gmail.com",
  canonicalUrl: "https://ajn082.github.io/seattlepaydeliveryprojectsite/" as
    string | null,
  surveyUrl: "https://tally.so/r/ODZZJ7" as string | null,
  volunteerUrl: null as string | null,
  flyerUrl: null as string | null,
  reviewedAt: "2026-10-28",
  status: "Data collection in progress",
  survey: {
    eligibility:
      "Age 18 or older and currently delivering food through apps in Seattle.",
    duration: "The survey estimates 1–2 minutes.",
    provider: "Tally",
    privacyConfirmed: true,
    responseAccess:
      "Only Amaye Jain, the project researcher, has access to responses and optional screenshot uploads through the project’s survey account." as string | null,
    retention:
      "Raw survey responses and optional screenshot uploads will be kept for the research and related advocacy, then deleted when that work is complete. No fixed end date has been set." as string | null,
  },
  independence:
    "Independent student-led research project. Not affiliated with the City of Seattle or delivery platforms.",
};

export const contactHref = (subject?: string) =>
  `mailto:${site.contactEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export function publicUrl(path = "/") {
  if (!site.canonicalUrl) return null;
  const root = `${site.canonicalUrl.replace(/\/+$/, "")}/`;
  return new URL(path.replace(/^\/+/, ""), root).href;
}

export const privacyReady = Boolean(
  site.survey.privacyConfirmed &&
  site.survey.responseAccess &&
  site.survey.retention,
);
export const indexingReady = Boolean(site.canonicalUrl && privacyReady);

export const nav = [
  { href: "/research", label: "Research" },
  { href: "/workers", label: "For Workers" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/updates", label: "Updates" },
];

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}
