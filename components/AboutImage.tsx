"use client";

import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ImageAsset } from "@/types";

interface AboutImageProps {
  image: ImageAsset;
}

const REVEAL_MS = 1000;
const REVEAL_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

// A top-to-bottom mask reveal, triggered once the image scrolls into view:
// the frame starts clipped down to a sliver at its top edge and opens
// downward to its full height, with a gentle scale-settle alongside it.
export function AboutImage({ image }: AboutImageProps) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const revealed = reducedMotion || inView;

  return (
    <div
      ref={ref}
      className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-[0_40px_80px_-28px_rgba(44,30,22,0.4)] ring-1 ring-gold/20"
    >
      <CloudinaryImage
        src={image.publicId}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
        style={
          reducedMotion
            ? undefined
            : {
                clipPath: revealed ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                transform: `scale(${revealed ? 1 : 1.08})`,
                transition: `clip-path ${REVEAL_MS}ms ${REVEAL_EASE}, transform ${REVEAL_MS}ms ${REVEAL_EASE}`,
              }
        }
      />
    </div>
  );
}
