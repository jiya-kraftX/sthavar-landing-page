import type { FeatureCard, ImageAsset } from "@/types";
import { IMAGES } from "@/constants/images";

// Cycled back-to-back in the Why Dapoli showcase. The three besides the
// aerial shot reuse the same real, already-uploaded Cloudinary assets as
// the Gallery section (same public IDs) rather than inventing new ones.
export const WHY_DAPOLI_GALLERY: ImageAsset[] = [
  IMAGES.whyDapoli,
  {
    publicId: "dusk_at_sea_level_nesmcz",
    alt: "Sapphire villa exterior at dusk with sea views",
    width: 1200,
    height: 1200,
  },
  {
    publicId: "seaview_negexu",
    alt: "Uninterrupted sea view from a Sapphire villa balcony",
    width: 800,
    height: 800,
  },
  {
    publicId: "seafacing_rowhouse_xvhmxe",
    alt: "Sea facing rowhouse facade at Sapphire",
    width: 800,
    height: 800,
  },
];

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

// Six highlight boxes for the Why Dapoli showcase. Each is grounded in
// wording already present in WHY_DAPOLI's paragraphs above — nothing here
// introduces a new claim, distance, or statistic.
export const WHY_DAPOLI_HIGHLIGHTS: FeatureCard[] = [
  {
    id: "coastal-living",
    icon: "wave",
    title: "Coastal Living",
    description: "Pristine beaches and a slower pace of life define Dapoli.",
  },
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
  {
    id: "natural-greenery",
    icon: "mountains",
    title: "Natural Greenery",
    description: "Lush hills and open landscapes surround every home.",
  },
];
