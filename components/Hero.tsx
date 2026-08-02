import { Button } from "@/components/ui/Button";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { HERO } from "@/constants/hero";
import { IMAGES } from "@/constants/images";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy"
    >
      <CloudinaryImage
        src={IMAGES.hero.publicId}
        alt={IMAGES.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        fallbackVariant="panel"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-navy/40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy/30" aria-hidden />

      <Container className="relative z-10 pt-24 pb-20">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
            {HERO.kicker}
          </span>
          <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {HERO.headline}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {HERO.subheadline}
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" variant="primary">
              {HERO.primaryCtaLabel}
            </Button>
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
