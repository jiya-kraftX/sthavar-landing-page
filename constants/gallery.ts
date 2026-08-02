import type { GalleryImage } from "@/types";

export const GALLERY_SECTION = {
  eyebrow: "Gallery",
  heading: "A Glimpse Inside",
  headingAccent: "Sapphire.",
  description:
    "A preview of the villas, residences, and grounds that make Sapphire a coastal address like no other.",
} as const;

/**
 * Cloudinary public IDs for the gallery grid. Swap these for real assets
 * once uploaded — the `featured` flag controls which tiles render larger
 * in the bento-style layout.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    publicId: "sapphire/gallery/villa-exterior-dusk",
    alt: "Sapphire villa exterior at dusk with sea views",
    width: 1200,
    height: 1200,
    featured: true,
  },
  {
    publicId: "sapphire/gallery/living-room-interior",
    alt: "Living room interior of a Sapphire sea-facing villa",
    width: 800,
    height: 800,
  },
  {
    publicId: "sapphire/gallery/private-pool",
    alt: "Private swimming pool at a Sapphire residence",
    width: 800,
    height: 800,
  },
  {
    publicId: "sapphire/gallery/clubhouse-interior",
    alt: "Sapphire clubhouse interior lounge",
    width: 800,
    height: 800,
  },
  {
    publicId: "sapphire/gallery/pickleball-court",
    alt: "Pickleball court within the Sapphire community",
    width: 800,
    height: 800,
    featured: true,
  },
  {
    publicId: "sapphire/gallery/sea-view-balcony",
    alt: "Uninterrupted sea view from a Sapphire villa balcony",
    width: 800,
    height: 800,
  },
  {
    publicId: "sapphire/gallery/landscaped-grounds",
    alt: "Landscaped open spaces across the Sapphire community",
    width: 800,
    height: 800,
  },
  {
    publicId: "sapphire/gallery/rowhouse-facade",
    alt: "Sea facing rowhouse facade at Sapphire",
    width: 800,
    height: 800,
  },
];
