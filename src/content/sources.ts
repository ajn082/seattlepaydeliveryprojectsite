export const sources = {
  ordinance: {
    title: "App-Based Worker Minimum Payment Ordinance",
    publisher: "Seattle Office of Labor Standards",
    date: "Effective January 13, 2024",
    url: "https://www.seattle.gov/laborstandards/ordinances/app-based-worker-ordinances/app-based-worker-minimum-payment-ordinance",
    note: "SMC 8.37. Official explanation, compensation schedule, rules, and worker resources.",
  },
  ols: {
    title:
      "An Analysis of the First Eighteen Months for App-Based Delivery Workers",
    publisher: "Seattle Office of Labor Standards",
    date: "April 2026",
    url: "https://www.seattle.gov/laborstandards/ordinances/app-based-worker-ordinances/app-based-worker-research",
    note: "Records from five large platforms, January 15, 2024 to June 29, 2025. All records are from after the ordinance took effect.",
  },
  nber: {
    title:
      "Delivering Higher Pay? The Impacts of a Task-Level Pay Standard in the Gig Economy",
    publisher: "Yuan An, Andrew Garin, and Brian K. Kovak",
    date: "December 2025",
    url: "https://www.nber.org/papers/w34545",
    note: "NBER Working Paper 34545. Cross-platform data and a comparison of incumbent Seattle delivery workers with workers elsewhere in Washington.",
  },
  rights: {
    title: "App-Based Worker Ordinances",
    publisher: "Seattle Office of Labor Standards",
    date: "Official resource; reviewed October 27, 2026",
    url: "https://www.seattle.gov/laborstandards/ordinances/app-based-worker-ordinances",
    note: "Official notices of rights and resources about covered app-based work.",
  },
  languages: {
    title: "Worker rights resources in other languages",
    publisher: "Seattle Office of Labor Standards",
    date: "Official resource; reviewed October 27, 2026",
    url: "https://www.seattle.gov/laborstandards/resources-and-language-access/languages",
    note: "Find translated notices under App-Based Worker Protections. The project survey is currently in English.",
  },
  factSheet: {
    title: "App-Based Worker Minimum Payment Fact Sheet",
    publisher: "Seattle Office of Labor Standards",
    date: "Official PDF; reviewed October 27, 2026",
    url: "https://www.seattle.gov/documents/Departments/LaborStandards/ABWMP_FactSheet_contrast_ADA.pdf",
    note: "A concise official explanation of the ordinance and covered workers’ rights.",
  },
  tallyPrivacy: {
    title: "Tally privacy notice",
    publisher: "Tally",
    date: "Provider policy; reviewed October 27, 2026",
    url: "https://tally.so/help/privacy-policy",
    note: "Information about the third-party provider that hosts the survey.",
  },
} satisfies Record<
  string,
  { title: string; publisher: string; date: string; url: string; note: string }
>;

export type SourceId = keyof typeof sources;
