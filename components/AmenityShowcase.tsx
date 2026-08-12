"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type MouseEvent } from "react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { useInView } from "@/hooks/useInView";
import type { AmenityItem } from "@/types";
import { cn } from "@/utils/cn";

const IMAGE_LEAVE_MS = 220;
const IMAGE_ENTER_MS = 600;
const TEXT_LEAVE_MS = 160;
const TEXT_ENTER_MS = 300;
const SELECTOR_STAGGER_MS = 120;
const AUTOPLAY_MS = 5000;

type TransitionPhase = "idle" | "leaving" | "reset" | "entering";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

function getVisibilitySnapshot() {
  return document.hidden;
}

function getVisibilityServerSnapshot() {
  return false;
}

interface AmenityShowcaseProps {
  amenities: AmenityItem[];
}

function getImageStyle(phase: TransitionPhase): CSSProperties {
  const base: CSSProperties = {
    transitionProperty: "opacity, filter",
    transitionTimingFunction: "ease-out",
  };

  switch (phase) {
    case "leaving":
      return { ...base, opacity: 0, filter: "blur(16px)", transitionDuration: `${IMAGE_LEAVE_MS}ms` };
    case "reset":
      return { ...base, opacity: 0, filter: "blur(16px)", transitionDuration: "0ms" };
    case "entering":
    case "idle":
    default:
      return { ...base, opacity: 1, filter: "blur(0px)", transitionDuration: `${IMAGE_ENTER_MS}ms` };
  }
}

function getTextStyle(phase: TransitionPhase): CSSProperties {
  const base: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "ease-out",
  };

  switch (phase) {
    case "leaving":
      return { ...base, opacity: 0, transform: "translateY(-12px)", transitionDuration: `${TEXT_LEAVE_MS}ms` };
    case "reset":
      return { ...base, opacity: 0, transform: "translateY(12px)", transitionDuration: "0ms" };
    case "entering":
    case "idle":
    default:
      return { ...base, opacity: 1, transform: "translateY(0)", transitionDuration: `${TEXT_ENTER_MS}ms` };
  }
}

function getAutoplayFillStyle(paused: boolean): CSSProperties {
  return {
    animationName: "amenity-autoplay",
    animationDuration: `${AUTOPLAY_MS}ms`,
    animationTimingFunction: "linear",
    animationFillMode: "forwards",
    animationPlayState: paused ? "paused" : "running",
  };
}

function CornerFrame() {
  const bracket = "absolute h-6 w-6 stroke-gold sm:h-8 sm:w-8 motion-safe:animate-[amenity-frame-draw_620ms_ease-out]";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-3 sm:inset-4">
      <svg viewBox="0 0 32 32" fill="none" className={cn(bracket, "left-0 top-0")}>
        <path d="M1 15 V1 H15" strokeWidth="2" strokeLinecap="round" strokeDasharray="28" />
      </svg>
      <svg viewBox="0 0 32 32" fill="none" className={cn(bracket, "right-0 top-0 -scale-x-100")}>
        <path d="M1 15 V1 H15" strokeWidth="2" strokeLinecap="round" strokeDasharray="28" />
      </svg>
      <svg viewBox="0 0 32 32" fill="none" className={cn(bracket, "left-0 bottom-0 -scale-y-100")}>
        <path d="M1 15 V1 H15" strokeWidth="2" strokeLinecap="round" strokeDasharray="28" />
      </svg>
      <svg viewBox="0 0 32 32" fill="none" className={cn(bracket, "right-0 bottom-0 -scale-100")}>
        <path d="M1 15 V1 H15" strokeWidth="2" strokeLinecap="round" strokeDasharray="28" />
      </svg>
    </div>
  );
}

interface AmenitySelectorButtonProps {
  amenity: AmenityItem;
  index: number;
  isActive: boolean;
  reducedMotion: boolean;
  autoplayPaused: boolean;
  onSelect: (index: number) => void;
  onAutoplayComplete: () => void;
}

function AmenitySelectorButton({
  amenity,
  index,
  isActive,
  reducedMotion,
  autoplayPaused,
  onSelect,
  onAutoplayComplete,
}: AmenitySelectorButtonProps) {
  const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!reducedMotion) {
      const rect = event.currentTarget.getBoundingClientRect();
      setRipple({ x: event.clientX - rect.left, y: event.clientY - rect.top, key: Date.now() });
    }
    onSelect(index);
  };

  return (
    <button
      type="button"
      aria-pressed={isActive}
      aria-label={`View ${amenity.label}`}
      onClick={handleClick}
      className={cn(
        "group relative flex min-w-28 flex-col items-start gap-2 overflow-hidden rounded-2xl px-4 py-3 text-left transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        isActive
          ? "opacity-100"
          : "opacity-60 hover:-translate-y-1 hover:opacity-90 motion-reduce:hover:translate-y-0"
      )}
    >
      {ripple ? (
        <span
          key={ripple.key}
          aria-hidden
          onAnimationEnd={() => setRipple(null)}
          className="pointer-events-none absolute -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-gold/40 motion-safe:animate-[amenity-ripple_600ms_ease-out]"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ) : null}

      <span
        className={cn(
          "text-xs font-semibold tracking-[0.2em]",
          isActive ? "text-gold-dark" : "text-navy/40 group-hover:text-navy/60"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <Icon
        name={amenity.icon}
        className={cn(
          "h-6 w-6 transition-colors duration-300",
          isActive
            ? "text-gold-dark motion-safe:animate-[amenity-icon-pulse_380ms_ease-out]"
            : "text-navy/50 group-hover:text-navy/70"
        )}
      />
      <span
        className={cn("text-sm font-medium leading-snug", isActive ? "text-navy" : "text-navy/60")}
      >
        {amenity.label}
      </span>
      <span aria-hidden className="block h-0.5 w-full overflow-hidden rounded-full bg-navy/10">
        {isActive ? (
          reducedMotion ? (
            <span className="block h-full w-full rounded-full bg-gold" />
          ) : (
            <span
              onAnimationEnd={onAutoplayComplete}
              className="block h-full rounded-full bg-gold"
              style={getAutoplayFillStyle(autoplayPaused)}
            />
          )
        ) : null}
      </span>
    </button>
  );
}

export function AmenityShowcase({ amenities }: AmenityShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [interacting, setInteracting] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const documentHidden = useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    getVisibilityServerSnapshot
  );
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>();
  const autoplayPaused = documentHidden || interacting || !inView;
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const frames = useRef<number[]>([]);

  useEffect(
    () => () => {
      timeouts.current.forEach(clearTimeout);
      frames.current.forEach(cancelAnimationFrame);
    },
    []
  );

  const selectAmenity = (index: number) => {
    if (index === activeIndex || phase !== "idle") return;

    if (reducedMotion) {
      setActiveIndex(index);
      return;
    }

    setPhase("leaving");

    const toReset = setTimeout(() => {
      setActiveIndex(index);
      setPhase("reset");

      const firstFrame = requestAnimationFrame(() => {
        const secondFrame = requestAnimationFrame(() => {
          setPhase("entering");

          const toIdle = setTimeout(() => setPhase("idle"), IMAGE_ENTER_MS);
          timeouts.current.push(toIdle);
        });
        frames.current.push(secondFrame);
      });
      frames.current.push(firstFrame);
    }, IMAGE_LEAVE_MS);

    timeouts.current.push(toReset);
  };

  const active = amenities[activeIndex];
  const advanceToNext = () => selectAmenity((activeIndex + 1) % amenities.length);

  return (
    <div
      ref={sectionRef}
      className="mt-8 flex flex-col gap-8"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setInteracting(false);
        }
      }}
    >
      <div
        aria-label="Signature amenities"
        className="flex gap-2 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] sm:gap-4 lg:justify-between lg:overflow-visible lg:pb-0"
      >
        {amenities.map((amenity, index) => (
          <Reveal key={amenity.id} delay={index * SELECTOR_STAGGER_MS} className="shrink-0">
            <AmenitySelectorButton
              amenity={amenity}
              index={index}
              isActive={index === activeIndex}
              reducedMotion={reducedMotion}
              autoplayPaused={autoplayPaused}
              onSelect={selectAmenity}
              onAutoplayComplete={advanceToNext}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={amenities.length * SELECTOR_STAGGER_MS + 80}>
        <div>
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-[0_32px_64px_-32px_rgba(11,28,44,0.35)] lg:aspect-21/9">
            <CloudinaryImage
              src={active.image.publicId}
              alt={active.image.alt}
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
              style={getImageStyle(phase)}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-navy/60 to-transparent"
            />
            <CornerFrame key={activeIndex} />
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 lg:hidden">
            {amenities.map((amenity, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={amenity.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`View ${amenity.label}`}
                  onClick={() => selectAmenity(index)}
                  className="p-1"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "block h-1.5 overflow-hidden rounded-full bg-navy/15 transition-[width] duration-300 ease-out",
                      isActive ? "w-6" : "w-1.5"
                    )}
                  >
                    {isActive ? (
                      reducedMotion ? (
                        <span className="block h-full w-full rounded-full bg-gold" />
                      ) : (
                        <span
                          className="block h-full rounded-full bg-gold"
                          style={getAutoplayFillStyle(autoplayPaused)}
                        />
                      )
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 overflow-hidden" aria-live="polite">
            <div style={getTextStyle(phase)}>
              <h4 className="font-serif text-xl text-navy sm:text-2xl">{active.label}</h4>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy/65 sm:text-base">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
