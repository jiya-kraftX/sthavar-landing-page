import type { AmenityItem, OfferingCard } from "@/types";

export const ABOUT = {
  eyebrow: "About Us",
  heading: "We Don't Just Build Premium Sea-Facing Homes.",
  headingAccent: "We Curate Generational Legacies.",
  paragraphs: [
    "At Sthavar Group, we believe a property should appreciate in more ways than one. It should appreciate in value and become an asset that serves generations.",
    "From helping you choose the right sea-facing property in Dapoli to assisting with plotting consultancy, legal documentation, clear title verification, 7/12 records, financing, interior design, rental management, and long-term property care, we remain your partner well beyond the day you receive your keys.",
    "Every home at Sapphire is designed to deliver what today's discerning buyer seeks — breathtaking and uninterrupted sea views, privacy, and enduring value.",
    "For investors, Sthavar Group offers something equally compelling. Our integrated hospitality and rental management services enable owners to transform their holiday homes into income-generating assets through professionally managed stays, ensuring your investment continues to work even when you're away.",
    "Sapphire by Sthavar Group has been built for families, entrepreneurs, professionals and global investors seeking more than a second home. Whether you are searching for a Sea Facing Villa in Dapoli, a Luxury Villa in Dapoli, a Sea Facing Rowhouse, or Clear Title Land for long-term investment, Sapphire offers you to own one of the most desirable coastal addresses in Western India. We're here to stay so you can simply enjoy yours forever.",
  ],
  ctaLabel: "Schedule Your Private Site Visit",
} as const;

export const ABOUT_SERVICES: OfferingCard[] = [
  {
    id: "plotting-consultancy",
    icon: "compass",
    title: "Plotting Consultancy",
    description: "Expert guidance in choosing the right sea-facing plot for your vision.",
  },
  {
    id: "legal-documentation",
    icon: "file-text",
    title: "Legal Documentation",
    description: "Transparent, end-to-end paperwork handled with complete diligence.",
  },
  {
    id: "clear-title",
    icon: "shield-check",
    title: "Clear Title Verification",
    description: "Every parcel is verified for undisputed, transparent ownership.",
  },
  {
    id: "financing",
    icon: "coins",
    title: "Financing Assistance",
    description: "Support in structuring financing options tailored to you.",
  },
  {
    id: "rental-management",
    icon: "handshake",
    title: "Rental Management",
    description: "Professionally managed stays that keep your investment working.",
  },
  {
    id: "long-term-care",
    icon: "sparkle",
    title: "Long-Term Property Care",
    description: "Ongoing care so your home stays as pristine as day one.",
  },
];

export const ABOUT_AMENITIES: AmenityItem[] = [
  { icon: "buildings", label: "Clubhouse" },
  { icon: "pool", label: "Swimming Pool" },
  { icon: "map-trifold", label: "Pickleball Court" },
  { icon: "barbell", label: "Fully Equipped Gym" },
  { icon: "mountains", label: "Landscaped Open Spaces" },
  { icon: "wave", label: "Private Swimming Pool*" },
];
