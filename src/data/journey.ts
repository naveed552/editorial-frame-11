export interface JourneyStep {
  year: string;
  role: string;
  org: string;
  summary: string;
  detail: string;
}

export const journey: JourneyStep[] = [
  {
    year: "01",
    role: "Machine Learning Intern",
    org: "Data Science Internship",
    summary: "Learning how models turn into decisions, not just accuracy scores.",
    detail:
      "Built and evaluated classification models using Python, XGBoost and Random Forest. First exposure to translating a data problem into something a business could actually act on — the seed for later work bridging technical delivery and stakeholder outcomes.",
  },
  {
    year: "02",
    role: "Social Media Volunteer",
    org: "NGO, Community Outreach",
    summary: "Communication is a deliverable too.",
    detail:
      "Managed social media presence for a non-profit, planning content and coordinating with volunteers on a schedule. Reinforced that clear, consistent communication is what keeps any initiative — technical or not — moving forward.",
  },
  {
    year: "03",
    role: "Technical Project Manager",
    org: "eCommerce Delivery, Data Migration & Governance",
    summary: "Multiple concurrent programmes, one accountable owner.",
    detail:
      "Leading eCommerce delivery and data migration programmes end to end for international clients across the US, UK, Gulf and India. Own risk tracking, delivery governance, release planning and stakeholder communication across concurrent workstreams — turning scattered moving parts into predictable delivery.",
  },
];
