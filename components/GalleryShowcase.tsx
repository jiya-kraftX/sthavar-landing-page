"use client";

import type { CSSProperties } from "react";
import { A11y, EffectCoverflow, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { GalleryImage } from "@/types";
import "swiper/css";
import "swiper/css/effect-coverflow";

interface GalleryShowcaseProps {
  images: GalleryImage[];
}

const TRANSITION_MS = 800;
const TRANSITION_EASE = "cubic-bezier(0.25, 1, 0.5, 1)";

// Every slide shares this exact aspect ratio, so the coverflow stack reads
// as one consistent deck of cards rather than mismatched frames.
const CARD_ASPECT = "aspect-4/5";

export function GalleryShowcase({ images }: GalleryShowcaseProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div style={{ perspective: "1200px" }}>
      <Swiper
        // Swiper only reads effect/speed/loop at instance creation, not on
        // prop updates — and useReducedMotion's SSR-safe snapshot is always
        // `false` on first paint, correcting a moment later on the client.
        // Keying on the resolved value forces a fresh instance so a reduced-
        // motion client never ends up stuck with the coverflow tilt it
        // briefly (and only internally) mounted with.
        key={reducedMotion ? "reduced" : "full"}
        modules={[EffectCoverflow, Keyboard, A11y]}
        effect={reducedMotion ? "slide" : "coverflow"}
        centeredSlides
        slidesPerView="auto"
        loop={!reducedMotion}
        speed={reducedMotion ? 0 : TRANSITION_MS}
        grabCursor
        slideToClickedSlide
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        coverflowEffect={{
          rotate: 32,
          stretch: 0,
          depth: 260,
          modifier: 1,
          scale: 0.86,
          slideShadows: false,
        }}
        style={
          {
            "--swiper-wrapper-transition-timing-function": TRANSITION_EASE,
            paddingBlock: "2.5rem",
          } as CSSProperties
        }
        className="[&_.swiper-slide]:opacity-60 [&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-800 [&_.swiper-slide-active]:opacity-100"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={image.publicId}
            className="w-[72vw]! sm:w-[46vw]! lg:w-[30vw]!"
          >
            <div
              className={`relative w-full ${CARD_ASPECT} overflow-hidden rounded-3xl shadow-[0_32px_64px_-24px_rgba(0,0,0,0.55)]`}
            >
              <CloudinaryImage
                src={image.publicId}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 72vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/80 via-navy/10 to-transparent"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
                  {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-lg text-white sm:text-xl">{image.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
