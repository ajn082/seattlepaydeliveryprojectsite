import { site } from "../config/site";

// Edit public wording here. Longer research, worker, and privacy passages live
// in this same content directory. Layout components contain no research claims.
export const copy = {
  home: {
    title: `${site.name} | Workers’ earnings`,
    description:
      "Independent, student-led research on Seattle delivery pay. Explore the evidence or share your experience in the worker survey.",
    eyebrow: "Independent research · Seattle, Washington",
    hourStatement: ["Delivery time.", "Waiting time."],
    headline: "Did Seattle’s delivery-pay law actually improve",
    headlineEmphasis: "workers’ earnings?",
    introduction:
      "We’re studying what changed across workers’ full hours online, and listening to the people doing the deliveries.",
    issueTitle: "The delivery is only part of the working day.",
    issueBody:
      "Pay per offer tells one story. Earnings across all the time a worker is logged in can tell another. Time spent waiting for the next order matters, too.",
    issueLink: "Understand the difference",
    evidenceTitle: "The evidence needs a closer look.",
    evidenceIntro:
      "Two important studies approach the same policy from different directions. Their results need to be read alongside their methods.",
    topicsTitle: "What does better pay look like in practice?",
    topicsIntro:
      "We’re looking at the whole picture, combining published research with workers’ self-reported experiences.",
    invitationTitle:
      "You do the work. Your experience belongs in the research.",
    invitationBody:
      "Currently delivering food through apps in Seattle and aged 18 or older? Share what the work looks like for you.",
    involvementTitle: "Help the research reach the people it’s about.",
    involvementBody:
      "Students, community groups, researchers, and local organizations can help more workers hear about the study.",
    progressTitle: "Research in progress. Transparency throughout.",
    progressBody:
      "The worker survey is open. This project has not published findings or policy recommendations. We’ll share the methods and limitations alongside any future results.",
  },
  research: {
    title: "The Research",
    description:
      "Understand Seattle’s delivery-pay ordinance, the existing evidence, the worker survey, and the limits of this independent research.",
    headline: "A better understanding of delivery pay.",
    introduction:
      "Start with a clear question. Examine the evidence. Keep workers’ experiences at the center.",
    question:
      "To what extent has Seattle’s App-Based Worker Minimum Payment Ordinance increased hourly earnings for app-based food-delivery workers since January 2024?",
  },
  workers: {
    title: "For Delivery Workers",
    description:
      "Currently delivering food through apps in Seattle? Learn about eligibility and voluntary participation, then take the worker survey.",
    headline: "Delivered food in Seattle?",
    headlineEmphasis: "Share your experience.",
    introduction:
      "Help independent research understand what delivery work pays across all your hours online.",
  },
  involved: {
    title: "Get Involved",
    description:
      "Help with respectful worker outreach, share the Seattle Delivery Pay Project, or inquire about supporting practical research costs.",
    headline: "Good research starts with reaching people.",
    introduction:
      "Help delivery workers hear about the study. Bring local knowledge. Make the evidence more useful.",
    paths: [
      {
        id: "volunteer",
        label: "For students & volunteers",
        title: "Put the study within reach.",
        body: "Seattle-area students and other interested volunteers can help share approved materials and suggest outreach locations or language needs.",
        details: [
          "Seek permission before posting or distributing approved flyers.",
          "Share the verified survey with relevant groups.",
          "Let workers decide freely, without interrupting a delivery.",
        ],
        note: "Any outreach stipend would depend on funding and confirmed terms. No compensation is currently promised. Outreach stipends are separate from survey participation.",
        action: "Email about volunteering",
        subject: "Volunteering with Seattle Delivery Pay Project",
      },
      {
        id: "partner",
        label: "For organizations & researchers",
        title: "Connect the research to your community.",
        body: "Worker associations, community organizations, campus groups, businesses, faculty, and researchers can help share the study or discuss an outreach collaboration.",
        details: [
          "Share the project summary below and the survey link.",
          "Offer advice on respectful, accessible recruitment.",
          "Contact the researcher before representing a formal partnership.",
        ],
        note: "A collaboration inquiry is not an endorsement. No organizational affiliations or partnerships are claimed.",
        action: "Email about collaboration",
        subject: "Collaboration with Seattle Delivery Pay Project",
      },
      {
        id: "support",
        label: "For potential supporters",
        title: "Help cover the practical costs.",
        body: "Potential research costs include approved flyer printing, transportation, and outreach stipends for student distributors. Contact the researcher to discuss a specific contribution.",
        details: [
          "Discuss what is needed before committing support.",
          "Agree on any funding terms in advance.",
          "Keep the research question and conclusions independent.",
        ],
        note: "This is a sponsorship inquiry, not a donation checkout. No charitable status, tax deductibility, grant award, or fiscal sponsorship is claimed.",
        action: "Email about research support",
        subject: "Supporting Seattle Delivery Pay Project research costs",
      },
    ],
    summary: `${site.name} is an independent, student-led economics study of Seattle’s delivery-pay law and workers’ earnings across their full time online. Adults currently delivering food through apps in Seattle are invited to take a voluntary survey. The project combines published evidence with workers’ experiences and has not yet published findings.`,
  },
  updates: {
    title: "Updates & Findings",
    description:
      "Follow genuine progress on the Seattle Delivery Pay Project. Data collection is underway; project findings have not been published.",
    headline: "The work, as it happens.",
    introduction:
      "A record of what’s underway, what’s known, and what comes next.",
    findingsTitle: "Findings will come with the full context.",
    findingsBody:
      "When analysis is complete and ready to share, results will include the sample, methods, definitions, and limitations. Observations will be distinguished from any policy recommendations.",
  },
  privacy: {
    title: "Participation & Privacy",
    description:
      "What the worker survey asks, how to avoid sharing identifying information, and which project privacy practices still need confirmation.",
    headline: "Know what you’re sharing.",
    introduction:
      "Participation is your choice. Here is what is verified, and what still needs to be confirmed.",
  },
  footer: {
    statement: "Independent research on what Seattle delivery work pays.",
    credit: "Independent economics research",
  },
};

export const topics = [
  {
    title: "Pay per delivery",
    body: "What workers report about platform pay and how it has changed.",
  },
  {
    title: "Earnings across online time",
    body: "Hourly earnings including tips, before work-related expenses.",
  },
  {
    title: "Tips & order availability",
    body: "How incumbent workers describe changes since January 2024.",
  },
  {
    title: "The time between orders",
    body: "Waiting and utilization in the published evidence, rather than a direct survey measure.",
  },
  {
    title: "Working across apps",
    body: "How often workers report having several delivery apps open at once.",
  },
  {
    title: "Different working lives",
    body: "Hours worked, optional demographics, and whether delivery is a primary income.",
  },
];

export const evidence = [
  {
    source: "ols" as const,
    label: "The city’s platform records",
    title: "A broad view of work after the law.",
    body: "Seattle OLS examines records from five large platforms during the first 18 months after implementation and reports growth in completed offers over its year-over-year comparison.",
    limitation:
      "All records are post-ordinance. This is not a causal before-and-after comparison.",
    link: "Read the OLS research",
  },
  {
    source: "nber" as const,
    label: "An, Garin & Kovak",
    title: "A closer look at incumbent workers.",
    body: "The working paper compares Seattle workers with workers elsewhere in Washington. For highly attached incumbent drivers in its sample, fewer completed tasks offset higher task pay, leaving monthly earnings approximately unchanged.",
    limitation:
      "A result for this studied sample cannot be generalized to every Seattle worker or to citywide order volume.",
    link: "Read the working paper",
  },
];
