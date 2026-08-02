import { Button } from "@/components/ui/Button";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/constants/images";
import { WHY_SAPPHIRE, WHY_SAPPHIRE_OFFERINGS } from "@/constants/whySapphire";

export function WhySapphire() {
  return (
    <section id="why-sapphire" className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <CloudinaryImage
        src={IMAGES.whySapphireBackdrop.publicId}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        fallbackVariant="compact"
        fallbackClassName="absolute inset-0 opacity-0"
      />
      <div className="absolute inset-0 bg-linear-to-b from-navy via-navy/95 to-navy" aria-hidden />

      <Container className="relative z-10">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            align="center"
            light
            eyebrow={WHY_SAPPHIRE.eyebrow}
            heading={WHY_SAPPHIRE.heading}
          />
          <div className="flex max-w-3xl flex-col gap-4">
            {WHY_SAPPHIRE.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-white/70">
                {paragraph}
              </p>
            ))}
          </div>
          <Button href="#contact" variant="primary">
            {WHY_SAPPHIRE.ctaLabel}
          </Button>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_SAPPHIRE_OFFERINGS.map((offering, index) => (
            <Reveal key={offering.id} delay={index * 70}>
              <InfoCard
                tone="glass"
                icon={offering.icon}
                title={offering.title}
                description={offering.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
