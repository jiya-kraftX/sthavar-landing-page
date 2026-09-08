import type { ContactDetail } from "@/types";

// No prefilled text: a wa.me `?text=` param always appears as a message sent
// from the visitor, not the owner. The welcome message ("Hi, welcome to
// Sapphire. How can we help you?") should instead be configured as a
// greeting message / auto-reply on the owner's WhatsApp Business account, so
// it genuinely comes from the business side once the chat opens.
const WHATSAPP_HREF = "https://wa.me/917249394599";

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
