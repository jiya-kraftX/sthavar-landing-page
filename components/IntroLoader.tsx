"use client";

import { useEffect, useState } from "react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { IMAGES } from "@/constants/images";
import { cn } from "@/utils/cn";

const LOADER_DURATION_MS = 5000;
const FADE_DURATION_MS = 300;
const COUNTDOWN_START = 5;

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_START);

  useEffect(() => {
    const tick = setInterval(() => {
      setSecondsLeft((seconds) => (seconds > 1 ? seconds - 1 : 1));
    }, 1000);

    const startFade = setTimeout(() => setFading(true), LOADER_DURATION_MS - FADE_DURATION_MS);
    const hide = setTimeout(() => setVisible(false), LOADER_DURATION_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(startFade);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      className={cn(
        "fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 bg-navy px-6 transition-opacity ease-out",
        fading ? "opacity-0" : "opacity-100"
      )}
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
    >
      <CloudinaryImage
        src={IMAGES.logo.publicId}
        alt="Sthavar Group Logo"
        width={384}
        height={384}
        quality="auto:best"
        priority
        className="h-20 w-20 animate-pulse rounded-full object-cover sm:h-24 sm:w-24"
        fallbackClassName="h-20 w-20 rounded-full border border-gold/40 sm:h-24 sm:w-24"
        fallbackVariant="compact"
        fallbackIcon="sparkle"
      />
      <span aria-hidden className="font-serif text-5xl font-semibold leading-none text-gold sm:text-6xl">
        {secondsLeft}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
        Sthavar Group
      </span>
      <span className="sr-only">Loading, please wait</span>
    </div>
  );
}
