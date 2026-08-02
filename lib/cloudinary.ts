import { getCldImageUrl } from "next-cloudinary";

/**
 * Builds an absolute Cloudinary delivery URL for a public ID. Used where a
 * plain string URL is required (e.g. OpenGraph metadata) instead of the
 * `<CldImage>` component.
 */
export function getCloudinaryUrl(
  publicId: string,
  options: { width?: number; height?: number; quality?: number | "auto" } = {}
): string {
  const { width = 1200, height = 630, quality = "auto" } = options;

  return getCldImageUrl({
    src: publicId,
    width,
    height,
    quality,
    crop: "fill",
    gravity: "auto",
  });
}
