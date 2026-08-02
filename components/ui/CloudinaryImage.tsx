"use client";

import { useState } from "react";
import { CldImage, type CldImageProps } from "next-cloudinary";
import { Icon } from "@/components/ui/Icon";
import type { IconKey } from "@/types";
import { cn } from "@/utils/cn";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type FallbackVariant = "panel" | "compact";

interface CloudinaryImageProps extends Omit<CldImageProps, "onError"> {
  fallbackClassName?: string;
  fallbackIcon?: IconKey;
  fallbackVariant?: FallbackVariant;
}

/**
 * Wraps CldImage with a designed placeholder. Without a configured cloud
 * name, next-cloudinary throws during render, so we never mount it in that
 * case — every image in the app renders this placeholder until real assets
 * are uploaded and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set. A missing
 * public ID on a configured cloud instead fails client-side and swaps to
 * the same placeholder via onError.
 */
export function CloudinaryImage({
  className,
  fallbackClassName,
  fallbackIcon = "image",
  fallbackVariant = "panel",
  alt,
  fill,
  ...props
}: CloudinaryImageProps) {
  const [failed, setFailed] = useState(!CLOUD_NAME);

  if (failed) {
    const isDecorative = alt === "";

    return (
      <div
        role={isDecorative ? undefined : "img"}
        aria-hidden={isDecorative || undefined}
        aria-label={isDecorative ? undefined : alt || "Placeholder image"}
        className={cn(
          "flex items-center justify-center bg-linear-to-br from-navy via-navy-light to-navy-dark",
          fallbackVariant === "panel" && "flex-col gap-2",
          fill && "absolute inset-0",
          fallbackClassName ?? className
        )}
      >
        <Icon
          name={fallbackIcon}
          className={cn(
            "text-gold-light/60",
            fallbackVariant === "panel" ? "h-8 w-8" : "h-1/2 w-1/2"
          )}
        />
        {fallbackVariant === "panel" ? (
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-gold-light/50">
            Image Coming Soon
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <CldImage
      className={className}
      alt={alt}
      fill={fill}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
