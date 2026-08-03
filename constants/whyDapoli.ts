import type { FeatureCard } from "@/types";

export const WHY_DAPOLI = {
  eyebrow: "Why Dapoli?",
  heading: "Some Destinations Change Your Destiny.",
  headingAccent: "Dapoli is one of them.",
  paragraphs: [
    "Nestled between the seas and the hills, Dapoli is one of Maharashtra's most sought-after coastal destinations where pristine beaches, and a slower pace of life create the perfect setting for a luxury home.",
    "From the golden shores to vibrant seafood festivals, historic temples, coastal trails, and authentic Konkani culture, Dapoli offers a lifestyle that is enriching and exclusive.",
    "What makes Dapoli truly exceptional is its future. With transformative infrastructure projects like NH66, the proposed Ratnagiri Airport, upcoming Direct Jetty Service, and growing tourism, Dapoli Property Investment is rapidly emerging as one of India's most compelling coastal land investment opportunities.",
  ],
  closingParagraphs: [
    "Sapphire by Sthavar Group, a premium collection of Sea Facing Villas in Dapoli, Sea Facing Rowhouses, and NA-approved coastal land investments will be your best investment.",
    "For buyers looking for a Second Home Near Mumbai or a Second Home Near Pune, Dapoli offers the perfect balance of accessibility, privacy, natural beauty and long-term growth.",
  ],
} as const;

export const WHY_DAPOLI_FEATURES: FeatureCard[] = [
  {
    id: "nh66",
    icon: "road",
    title: "NH66",
    description: "Enhanced connectivity through the NH66 highway corridor.",
  },
  {
    id: "ratnagiri-airport",
    icon: "airplane",
    title: "Ratnagiri Airport",
    description: "Improved accessibility with the upcoming Ratnagiri Airport.",
  },
  {
    id: "tourism",
    icon: "compass",
    title: "Tourism",
    description: "Growing coastal tourism across the Konkan region.",
  },
  {
    id: "investment-growth",
    icon: "trend-up",
    title: "Investment Growth",
    description: "Rising interest in Dapoli's coastal land investment.",
  },
];
