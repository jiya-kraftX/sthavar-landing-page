"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

const LOADER_TOTAL_MS = 6000;

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const hide = setTimeout(() => setVisible(false), LOADER_TOTAL_MS);
    return () => clearTimeout(hide);
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
      className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-navy px-6"
    >
      <div className="relative h-[45vh] max-h-80 w-[80vw] max-w-sm">
        <Image
          src="/logos/sthavar-logo-english.png"
          alt="Sthavar Group"
          fill
          priority
          sizes="(min-width: 640px) 24rem, 80vw"
          className={cn(
            "object-contain opacity-0",
            reducedMotion
              ? "animate-[intro-logo-1-reduced_3000ms_ease-out_forwards]"
              : "animate-[intro-logo-1_3000ms_ease-out_forwards]"
          )}
        />
        <Image
          src="/logos/sthavar-logo-hindi.png"
          alt="स्थावर ग्रुप"
          fill
          priority
          sizes="(min-width: 640px) 24rem, 80vw"
          className={cn(
            "object-contain opacity-0",
            reducedMotion
              ? "animate-[intro-logo-2-reduced_3000ms_ease-out_3000ms_forwards]"
              : "animate-[intro-logo-2_3000ms_ease-out_3000ms_forwards]"
          )}
        />
      </div>
      <span className="sr-only">Loading, please wait</span>
    </div>
  );
}
