import type { IconKey } from "./navigation";

export interface ImageAsset {
  publicId: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Cache-busting asset version. Cloudinary marks versioned delivery URLs
   * (`/v<n>/<publicId>`) as `immutable`, so when an asset is re-uploaded under
   * the SAME public ID, browsers/CDNs that already cached it keep serving the
   * old file. Bump this number whenever you replace the image in Cloudinary and
   * every visitor gets a fresh URL. Omit it for assets that never change.
   */
  version?: number;
}

export interface GalleryImage extends ImageAsset {
  title: string;
  featured?: boolean;
}

export interface FeatureCard {
  id: string;
  icon: IconKey;
  title: string;
  description: string;
}

export interface AmenityItem {
  id: string;
  icon: IconKey;
  label: string;
  description: string;
  image: ImageAsset;
}

export interface OfferingCard {
  id: string;
  icon: IconKey;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactDetail {
  icon: IconKey;
  label: string;
  value: string;
  href?: string;
}

export interface StatItem {
  value: string;
  label: string;
}
