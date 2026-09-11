import { VIDEO_HERO_SRC } from "@/constants/video";

/**
 * Full-screen cinematic video section shown above the Hero. Purely visual —
 * no heading, copy, or buttons. Until VIDEO_HERO_SRC is set this is a clean
 * Sapphire Blue (bg-navy) screen; once set, the video autoplays unmuted and
 * loops.
 */
export function VideoHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-navy">
      {VIDEO_HERO_SRC ? (
        <video
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={VIDEO_HERO_SRC} type="video/mp4" />
        </video>
      ) : null}
    </section>
  );
}
