import { SiteVisitButton } from "@/components/SiteVisitButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { HERO, HERO_VIDEO_SRC } from "@/constants/hero";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy"
    >
      {HERO_VIDEO_SRC ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}
      {/*
        Legibility + mood layer. Sits above the video (once HERO_VIDEO_SRC is
        set) exactly as it does now over the plain navy background — a soft
        depth gradient in navy tones plus a whisper of gold, so the Hero never
        reads as a flat, empty placeholder while the final video is pending.
      */}
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_25%,var(--color-navy-light)_0%,var(--color-navy)_55%,var(--color-navy-dark)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(45%_60%_at_15%_60%,rgba(212,175,55,0.10)_0%,transparent_70%)]"
        aria-hidden
      />

      <Container className="relative z-10 pt-24 pb-20">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="font-serif text-4xl uppercase leading-[1.1] tracking-[0.04em] text-white sm:text-5xl lg:text-6xl">
              {HERO.kicker}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-light sm:text-base">
              {HERO.headline}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {HERO.subheadline}
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <SiteVisitButton variant="primary">
              {HERO.primaryCtaLabel}
            </SiteVisitButton>
            <Button href="#why-sapphire" variant="ghost">
              {HERO.secondaryCtaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex h-11 w-11 animate-bounce items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-gold-light hover:text-gold-light"
      >
        <Icon name="chevron-down" className="h-5 w-5" />
      </a>
    </section>
  );
}
