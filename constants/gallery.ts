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
    publicId: "dusk_at_sea_level_nesmcz",
    title: "Dusk at Sea Level",
    alt: "Sapphire villa exterior at dusk with sea views",
    width: 1200,
    height: 1200,
    featured: true,
  },
  {
    publicId: "living_room_interior_txj3vw",
    title: "Living Room Interior",
    alt: "Living room interior of a Sapphire sea-facing villa",
    width: 800,
    height: 800,
  },
  {
    publicId: "private_swimming_pool_g2ti4n",
    title: "Private Swimming Pool",
    alt: "Private swimming pool at a Sapphire residence",
    width: 800,
    height: 800,
  },
  {
    publicId: "clubhouse_ftoq69",
    title: "Clubhouse",
    alt: "Sapphire clubhouse interior lounge",
    width: 800,
    height: 800,
  },
  {
    publicId: "pickleball_unirbv",
    title: "Pickleball Court",
    alt: "Pickleball court within the Sapphire community",
    width: 800,
    height: 800,
    featured: true,
  },
  {
    publicId: "seaview_negexu",
    title: "Sea View",
    alt: "Uninterrupted sea view from a Sapphire villa balcony",
    width: 800,
    height: 800,
  },
  {
    publicId: "landscape_open_spaces_gdzyyu",
    title: "Landscaped Open Spaces",
    alt: "Landscaped open spaces across the Sapphire community",
    width: 800,
    height: 800,
  },
  {
    publicId: "seafacing_rowhouse_xvhmxe",
    title: "Sea-Facing Rowhouse",
    alt: "Sea facing rowhouse facade at Sapphire",
    width: 800,
    height: 800,
  },
];
