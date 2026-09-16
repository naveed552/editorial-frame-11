import ecommerceDelivery from "@/assets/ecommerce-delivery.jpg";
import dataMigration from "@/assets/data-migration.jpg";
import deliveryGovernance from "@/assets/delivery-governance.jpg";
import globalStakeholders from "@/assets/global-stakeholders.jpg";
import serviceStability from "@/assets/service-stability.jpg";
import projectVisibility from "@/assets/project-visibility.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-delivery",
    title: "Global eCommerce Delivery",
    category: "Program Management",
    tags: ["PROGRAM MANAGEMENT", "ECOMMERCE"],
    year: "2025",
    client: "Codilar Technologies",
    description: "Leading multiple concurrent eCommerce projects end to end — from scoping and planning through launch — ensuring alignment with business objectives and on-time execution across international accounts.",
    coverImage: ecommerceDelivery,
    images: [ecommerceDelivery],
  },
  {
    id: "data-migration",
    title: "Enterprise Data Migration",
    category: "Data & Systems",
    tags: ["DATA MIGRATION", "DATA MANAGEMENT"],
    year: "2024",
    client: "Codilar Technologies",
    description: "Planning and executing large-scale data migration and data management initiatives for platform transitions — mapping legacy data, validating integrity, and ensuring zero-loss cutovers for enterprise clients.",
    coverImage: dataMigration,
    images: [dataMigration],
  },
  {
    id: "delivery-governance",
    title: "Delivery Governance Framework",
    category: "Process & Governance",
    tags: ["RISK TRACKING", "GOVERNANCE"],
    year: "2024",
    client: "Codilar Technologies",
    description: "Building structured delivery governance across concurrent projects: risk registers, escalation paths, milestone reviews, and status cadences that keep stakeholders informed and delivery predictable.",
    coverImage: deliveryGovernance,
    images: [deliveryGovernance],
  },
  {
    id: "global-stakeholders",
    title: "International Stakeholder Management",
    category: "Client Engagement",
    tags: ["STAKEHOLDER MANAGEMENT", "CLIENT RELATIONS"],
    year: "2023",
    client: "Codilar Technologies",
    description: "Managing stakeholder communication for international clients across the US, UK, and Gulf regions — aligning expectations across time zones, running steering discussions, and building long-term client trust.",
    coverImage: globalStakeholders,
    images: [globalStakeholders],
  },
  {
    id: "service-stability",
    title: "Rollout Stability & Support",
    category: "Operations",
    tags: ["SERVICE STABILITY", "SYSTEM ROLLOUTS"],
    year: "2023",
    client: "Codilar Technologies",
    description: "Safeguarding service stability during system rollouts — coordinating go-live readiness, hypercare support, and incident triage so new platform releases land without disruption to live business.",
    coverImage: serviceStability,
    images: [serviceStability],
  },
  {
    id: "project-visibility",
    title: "Project Visibility & Reporting",
    category: "Process & Governance",
    tags: ["REPORTING", "COLLABORATION"],
    year: "2022",
    client: "Codilar Technologies",
    description: "Enhancing project visibility through standardized dashboards and reporting rituals — fostering collaboration between engineering, QA, and client teams and enabling data-driven delivery decisions.",
    coverImage: projectVisibility,
    images: [projectVisibility],
  },
];
