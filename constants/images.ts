import type { ImageAsset } from "@/types";

/**
 * Cloudinary public IDs. Swap these for real assets uploaded to the
 * `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` account — folder structure mirrors
 * the section each image belongs to.
 */
export const IMAGES = {
  hero: {
    publicId: "sapphire/hero/hero-banner-main",
    alt: "Sapphire by Sthavar Group luxury sea-facing villa in Dapoli at golden hour",
    width: 1920,
    height: 1080,
  },
  about: {
    publicId: "sapphire/about/villa-exterior-pool",
    alt: "Sea-facing villa exterior with private swimming pool at Sapphire, Dapoli",
    width: 1200,
    height: 1400,
  },
  whyDapoli: {
    publicId: "sapphire/dapoli/coastline-aerial",
    alt: "Aerial view of Dapoli's pristine coastline and hills",
    width: 1600,
    height: 1000,
  },
  whySapphireBackdrop: {
    publicId: "sapphire/property/clubhouse-dusk",
    alt: "Sapphire clubhouse and landscaped grounds at dusk",
    width: 1600,
    height: 1200,
  },
  contactMap: {
    publicId: "sapphire/contact/dapoli-location-preview",
    alt: "Map preview of Sapphire's project location in Dapoli, Ratnagiri District",
    width: 1200,
    height: 900,
  },
  logo: {
    publicId: "sapphire/brand/sthavar-logo-mark",
    alt: "Sthavar Group logo",
    width: 160,
    height: 48,
  },
} as const satisfies Record<string, ImageAsset>;
