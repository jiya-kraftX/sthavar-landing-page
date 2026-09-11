"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { VIDEO_HERO_SRC } from "@/constants/video";

/**
 * Full-screen cinematic video section shown above the Hero. Purely visual —
 * no heading, copy, or buttons other than the minimal sound control. Until
 * VIDEO_HERO_SRC is set this is a clean Sapphire Blue (bg-navy) screen; once
 * set, the video autoplays MUTED (browsers block autoplay with audio, which
 * would otherwise leave the video stuck paused on its first frame) and
 * loops; visitors can opt into audio via the control.
 *
 * `muted` is intentionally an UNCONTROLLED, static JSX attribute (only used
 * to seed autoplay) — it is never re-rendered with a different value, so
 * React never re-touches the DOM `muted` property after mount. All audio
 * state after that is owned exclusively by the video element itself via
 * `videoRef`, mutated directly inside the click handler, with React state
 * (`muted`) updated only afterwards, purely to drive the icon/aria-label.
 *
 * Stacking: the video sits at z-0 directly on the Sapphire Blue (bg-navy)
 * background — that background is only ever a fallback behind the video,
 * never an opaque layer over it. The sound control is the only thing above
 * the video (z-10).
 */
export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      // Unmute: clear every flag a browser might still be honoring — all
      // synchronously, inside this click handler (the user gesture).
      video.muted = false;
      video.defaultMuted = false;
      video.removeAttribute("muted");
      video.volume = 1;
      video.play().catch(() => {
        // A user click just triggered this, so play() should resolve; if a
        // browser still refuses, the state below still reflects reality.
      });
    } else {
      video.muted = true;
    }

    // Reflect the element's real state, read back after the mutation above.
    setMuted(video.muted);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-navy">
      {VIDEO_HERO_SRC ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 z-0 h-full w-full object-cover"
            aria-hidden
          >
            <source src={VIDEO_HERO_SRC} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={toggleMuted}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute bottom-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-navy/40 text-white backdrop-blur-sm transition-colors hover:border-gold-light hover:text-gold-light sm:bottom-8 sm:right-8"
          >
            <Icon name={muted ? "speaker-slash" : "speaker-high"} className="h-5 w-5" />
          </button>
        </>
      ) : null}
    </section>
  );
}
