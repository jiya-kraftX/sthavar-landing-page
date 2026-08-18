"use client";

import { useEffect, useState } from "react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { FeatureCard, ImageAsset } from "@/types";
import { cn } from "@/utils/cn";

interface WhyDapoliShowcaseProps {
  images: ImageAsset[];
  highlights: FeatureCard[];
}

const CYCLE_MS = 5000;
const REVEAL_MS = 900;
const BOX_STAGGER_MS = 140;

interface PanImageProps {
  image: ImageAsset;
  reducedMotion: boolean;
}

// Mounted fresh (via a `key` on the caller) every time the active image
// changes, so each cycle gets its own clean left-to-right wipe: fully
// clipped at first paint, then released toward full width a frame later.
function PanImage({ image, reducedMotion }: PanImageProps) {
  const [revealed, setRevealed] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setRevealed(true));
    });
    return () => cancelAnimationFrame(raf1);
  }, [reducedMotion]);

  const style = reducedMotion
    ? undefined
    : {
        transform: `scale(1.05) translateX(${revealed ? "0%" : "-2%"})`,
        clipPath: revealed ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        transition: `clip-path ${REVEAL_MS}ms ease-out, transform ${REVEAL_MS}ms ease-out`,
      };

  return (
    <CloudinaryImage
      src={image.publicId}
      alt={image.alt}
      fill
      sizes="94vw"
      className="object-cover"
      style={style}
    />
  );
}

export function WhyDapoliShowcase({ images, highlights }: WhyDapoliShowcaseProps) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scrollReveal, setScrollReveal] = useState(0);

  // Cycles to the next image every CYCLE_MS once the showcase has been
  // seen, and — like the Amenities autoplay — keeps running on its own
  // regardless of hover, click, or where the user scrolls to afterward.
  useEffect(() => {
    if (!inView || reducedMotion || images.length <= 1) return;
    const id = setInterval(() => {
      setActiveImageIndex((i) => (i + 1) % images.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [inView, reducedMotion, images.length]);

  // A genuinely scroll-driven reveal for the frame itself (distinct from
  // PanImage's per-cycle wipe below): as the frame scrolls up from the
  // bottom of the viewport into a comfortable reading position, a
  // clip-path opens it left-to-right in direct sync with scroll position
  // — not a fixed-duration transition, but tied continuously to how far
  // scrolled it currently is, and reversible if the user scrolls back up.
  useEffect(() => {
    if (reducedMotion) return;

    const frame = ref.current;
    if (!frame) return;

    let ticking = false;

    const compute = () => {
      const rect = frame.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 0.85;
      const end = viewportHeight * 0.45;
      const raw = (start - rect.top) / (start - end);
      setScrollReveal(Math.min(1, Math.max(0, raw)));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion, ref]);

  // Triggers well before the grid is actually on screen (root expanded
  // 220px past the viewport bottom) so the staggered cascade below has
  // time to finish playing out by the time the user actually scrolls to
  // it, instead of waiting until it's already visible to even start.
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({
    threshold: 0,
    rootMargin: "0px 0px 220px 0px",
  });

  const activeImage = images[activeImageIndex] ?? images[0];
  const effectiveScrollReveal = reducedMotion ? 1 : scrollReveal;

  return (
    <div className="flex flex-col gap-12 sm:gap-14">
      {/* Its own wider max-width (rather than the shared Container's) so
          the photo reads as noticeably larger/more dominant than the rest
          of the section — capped, so it can never exceed the viewport. */}
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div
          ref={ref}
          className="relative aspect-16/8 w-full overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-28px_rgba(44,30,22,0.35)] ring-1 ring-gold/25 sm:aspect-16/6 lg:aspect-32/9"
          style={{
            clipPath: `inset(0 ${(1 - effectiveScrollReveal) * 100}% 0 0)`,
            transition: reducedMotion ? undefined : "clip-path 80ms linear",
          }}
        >
          {inView && activeImage ? (
            <PanImage key={activeImageIndex} image={activeImage} reducedMotion={reducedMotion} />
          ) : null}
        </div>
      </div>

      <Container>
        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const revealed = reducedMotion || gridInView;
            return (
              <div
                key={item.id}
                className={cn(
                  "transition-all duration-700 ease-out",
                  revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{
                  transitionDelay:
                    gridInView && !reducedMotion ? `${index * BOX_STAGGER_MS}ms` : "0ms",
                }}
              >
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-pebble bg-white p-6 shadow-[0_16px_36px_-28px_rgba(44,30,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_40px_-24px_rgba(44,30,22,0.35)]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bronze/15 text-bronze transition-transform duration-300 group-hover:scale-105">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-lg text-espresso/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-espresso">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-espresso/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
