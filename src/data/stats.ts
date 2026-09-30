import { clientBrands } from "@/data/clients";

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: 4,
    suffix: "",
    label: "Regions",
    description: "US, UK, Gulf and India client engagements managed concurrently",
  },
  {
    value: clientBrands.length,
    suffix: "+",
    label: "Brands & clients",
    description: "International eCommerce and retail brands delivered for",
  },
  {
    value: 6,
    suffix: "",
    label: "Delivery workstreams",
    description: "Programme, data, governance, stakeholder, ops and reporting",
  },
  {
    value: 12,
    suffix: "+",
    label: "Core competencies",
    description: "From risk governance to release and rollout management",
  },
];
