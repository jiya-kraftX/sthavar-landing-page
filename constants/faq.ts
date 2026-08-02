import type { FaqItem } from "@/types";

export const FAQ_SECTION = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  ctaLabel: "Book Your Private Site Visit",
} as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "why-sea-facing",
    question: "Why should I invest in a Sea Facing Villa in Dapoli?",
    answer:
      "Sea-facing properties are naturally limited in supply and are in high demand, making them attractive for both lifestyle and long-term appreciation.",
  },
  {
    id: "good-investment",
    question: "Is Dapoli a good property investment?",
    answer:
      "Dapoli is witnessing increased infrastructure development, improved connectivity through NH66, tourism growth, and growing demand for premium coastal homes.",
  },
  {
    id: "na-plots",
    question: "What are NA Plots?",
    answer:
      "NA (Non-Agricultural) plots are legally approved for residential development, offering greater convenience for buyers planning future construction.",
  },
  {
    id: "clear-title-land",
    question: "What is Clear Title Land?",
    answer:
      "Clear title land refers to property with undisputed legal ownership, ensuring a transparent purchase process.",
  },
  {
    id: "seven-twelve-records",
    question: "What are 7/12 Property Records?",
    answer:
      "The 7/12 extract is an important land record in Maharashtra that helps verify ownership and land details. Sapphire assists buyers throughout the documentation process.",
  },
  {
    id: "rental-income",
    question: "Can I earn rental income from my property?",
    answer:
      "Yes. All villas and rowhouses can be professionally managed by Sthavar Group for short-term holiday rentals, creating passive income opportunities.",
  },
];
