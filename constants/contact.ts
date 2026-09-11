import type { ContactDetail } from "@/types";

// No prefilled text: a wa.me `?text=` param always appears as a message sent
// from the visitor, not the owner. The welcome message ("Hi, welcome to
// Sapphire. How can we help you?") should instead be configured as a
// greeting message / auto-reply on the owner's WhatsApp Business account, so
// it genuinely comes from the business side once the chat opens.
const WHATSAPP_HREF = "https://wa.me/919769734866";

// Official Google Maps link for the project — Blue Breeze Project at Harnai
// Beach, Dapoli (Mumbai–Karwar Coastal Highway, opposite Palande Vithal
// Mandir / Harnai Beach, At & Post Harnai, Dapoli, Maharashtra 415713).
// Every project-location link/redirect on the site should point here.
export const PROJECT_MAP_LINK = "https://maps.app.goo.gl/5Sgj8JECN6Gpv8JK8?g_st=ic";

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
    value: "Harnai Beach, Dapoli, Maharashtra 415713",
    href: PROJECT_MAP_LINK,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "+91 97697 34866",
    href: WHATSAPP_HREF,
  },
  {
    icon: "envelope",
    label: "Email",
    value: "connect@sthavargroup.com",
    href: "mailto:connect@sthavargroup.com",
  },
];
