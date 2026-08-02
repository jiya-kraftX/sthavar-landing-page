import type { OfferingCard } from "@/types";

export const WHY_SAPPHIRE = {
  eyebrow: "Why Sapphire",
  heading: "Why Sapphire by Sthavar Group?",
  paragraphs: [
    "Sapphire has been created by the Sthavar Group who believe property should represent permanence and stability. Unlike conventional developments, Sapphire brings to you premium gated community living at sea-facing residences.",
    "With transparent legal processes and clear title documentation we inspire curated ownership. Our hospitality services are based on the foundations of long-term appreciation.",
    "At Sthavar Group, we believe every property should become a legacy.",
  ],
  ctaLabel: "Explore the Sapphire Catalogue",
} as const;

export const WHY_SAPPHIRE_OFFERINGS: OfferingCard[] = [
  {
    id: "sea-facing-villas",
    icon: "wave",
    title: "Sea Facing Villas",
    description: "Uninterrupted sea views from breathtaking, privately owned villas.",
  },
  {
    id: "rowhouses",
    icon: "house-line",
    title: "Rowhouses",
    description: "Elegant sea-facing rowhouses designed for family living.",
  },
  {
    id: "na-land",
    icon: "map-trifold",
    title: "NA Land",
    description: "NA-approved plots ready for your future construction plans.",
  },
  {
    id: "clear-titles",
    icon: "shield-check",
    title: "Clear Titles",
    description: "Undisputed legal ownership backed by transparent documentation.",
  },
  {
    id: "hospitality",
    icon: "handshake",
    title: "Hospitality",
    description: "Integrated hospitality services built on long-term appreciation.",
  },
  {
    id: "rental-management",
    icon: "coins",
    title: "Rental Management",
    description: "Turn your holiday home into a professionally managed asset.",
  },
  {
    id: "luxury-amenities",
    icon: "buildings",
    title: "Luxury Amenities",
    description: "Clubhouse, pool, pickleball court, gym and landscaped grounds.",
  },
  {
    id: "transparent-documentation",
    icon: "file-text",
    title: "Transparent Documentation",
    description: "Every process, from title to keys, kept fully transparent.",
  },
];
