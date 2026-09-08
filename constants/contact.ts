import type { ContactDetail } from "@/types";

const WHATSAPP_GREETING = "Hi, welcome to Sapphire by Sthavar! How can we help you?";
const WHATSAPP_HREF = `https://wa.me/917249394599?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

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
    icon: "whatsapp",
    label: "WhatsApp",
    value: "+91 72493 94599",
    href: WHATSAPP_HREF,
  },
  {
    icon: "envelope",
    label: "Email",
    value: "connect@sthavargroup.com",
    href: "mailto:connect@sthavargroup.com",
  },
];
