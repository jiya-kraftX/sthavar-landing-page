import type { ContactDetail } from "@/types";

export const CONTACT_SECTION = {
  eyebrow: "Contact",
  heading: "Begin Your Sapphire Journey",
  description:
    "Reach out to our team to schedule a private site visit or learn more about available residences.",
} as const;

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: "buildings",
    label: "Corporate Office",
    value: "518, Mastermind V, Royal Palms Estate, Goregaon East, Mumbai – 400065",
  },
  {
    icon: "map-pin",
    label: "Project Location",
    value: "Dapoli, Ratnagiri District, Maharashtra",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+91 97697 34866",
    href: "tel:+919769734866",
  },
  {
    icon: "envelope",
    label: "Email",
    value: "connect@sthavargroup.com",
    href: "mailto:connect@sthavargroup.com",
  },
];
