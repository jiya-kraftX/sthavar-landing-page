import type { IconKey } from "./navigation";

export interface ImageAsset {
  publicId: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryImage extends ImageAsset {
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
