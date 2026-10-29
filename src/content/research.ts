import { site } from "../config/site";

export const research = {
  policy: [
    "Seattle’s App-Based Worker Minimum Payment Ordinance (SMC 8.37) took effect on January 13, 2024. For covered offers, the minimum is the greater of a time-and-mileage calculation or a minimum amount per offer.",
    "This is an offer-based payment standard. It should not be read as a conventional hourly wage guaranteed for every hour a worker is logged into an app. Rates change over time; the official compensation schedule is the source for current amounts.",
  ],
  definitions: [
    {
      term: "Engaged time",
      definition:
        "Time spent fulfilling an accepted offer, from acceptance to completion, subject to the ordinance’s coverage rules.",
    },
    {
      term: "Online time",
      definition:
        "Time logged into an app and available for work, including engaged time and time between offers. Time on several apps can overlap.",
    },
    {
      term: "Hourly earnings",
      definition:
        "Earnings divided by a stated measure of time. This survey asks about full online time, including tips and before work expenses.",
    },
    {
      term: "Tips",
      definition:
        "Customer payments to a worker in addition to platform pay. Keep them separate when a source reports base payment only.",
    },
    {
      term: "Order volume",
      definition:
        "The number of offers or deliveries in a specified period. A worker’s orders and citywide completed offers are different measures.",
    },
    {
      term: "Worker utilization",
      definition:
        "The share of online time spent fulfilling offers. It helps explain why engaged-hour and online-hour measures differ.",
    },
  ],
  mechanisms: [
    "A higher payment for each delivery is one part of a larger economic picture. Customer demand, platform fees, tips, order frequency, the number of available workers, and waiting time may all affect earnings.",
    "These are mechanisms to investigate, not conclusions about every Seattle delivery worker. The project’s question remains open to evidence of improvement, persistent problems, and differences between workers.",
  ],
  comparison:
    "Both sources report higher pay per task or engaged-time pay, but they do not estimate the same outcome for the same workers. OLS describes broad post-law platform records; the working paper compares incumbent workers across locations around implementation. Growth in overall offers can coexist with fewer tasks for a particular group of incumbent workers.",
  surveyIntro:
    "The current Tally survey invites adults who currently deliver food through apps in Seattle. It asks about:",
  surveyTopics: [
    "Usual weekly work hours and whether delivery is a primary income.",
    "The platform used most and how often several delivery apps are open together.",
    "Typical hourly earnings across full time online, including tips but before work costs, in ranges.",
    "For workers active before January 2024, perceived changes in platform pay, tips, order availability, and overall hourly earnings.",
    "Optional demographics, additional comments, and an optional earnings/time screenshot.",
  ],
  surveyNote:
    "The questionnaire does not directly measure waiting time or utilization. Those topics belong to the broader review of published evidence. Its current hourly-earnings question uses ranges, not exact pay records.",
  methods: [
    {
      title: "Recruitment & participation",
      body: "The intended approach is voluntary recruitment through outreach and sharing by relevant groups. Recruitment channels actually used will be documented with any published analysis. This is not a random sample of Seattle workers.",
    },
    {
      title: "Selection & coverage",
      body: "Workers choose whether to respond. People reached through particular locations or groups may differ from workers who are not reached. The survey targets current food-delivery workers and does not cover everyone working through an app.",
    },
    {
      title: "Recall & measurement",
      body: "Comparisons with before January 2024 rely on workers’ recollections. Earnings are self-reported, and overlapping app time complicates comparisons with platform records. Optional screenshots do not remove these limitations.",
    },
    {
      title: "What the survey can establish",
      body: "Responses can describe the participating workers’ experiences and suggest questions for further study. On their own, they cannot establish citywide causal effects or a representative average for all Seattle delivery workers.",
    },
  ],
  about: `${site.name} is an independent, student-led economics research initiative led by ${site.researcher}. It combines a review of existing evidence with an original worker survey to make the policy question understandable and support evidence-informed protections for delivery workers.`,
  advocacy:
    "The commitment is to workers’ economic well-being and honest research. Recommendations, if developed, will follow the evidence and be presented separately from empirical findings.",
};
