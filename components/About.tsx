import { Button } from "@/components/ui/Button";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT, ABOUT_AMENITIES, ABOUT_SERVICES } from "@/constants/about";
import { IMAGES } from "@/constants/images";

export function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-[0_32px_64px_-32px_rgba(11,28,44,0.35)]">
              <CloudinaryImage
                src={IMAGES.about.publicId}
                alt={IMAGES.about.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right" className="flex flex-col gap-6">
            <SectionHeading
              eyebrow={ABOUT.eyebrow}
              heading={ABOUT.heading}
              headingAccent={ABOUT.headingAccent}
            />
            <div className="flex flex-col gap-4">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-navy/70">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <Button href="#contact" variant="primary">
                {ABOUT.ctaLabel}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-serif text-2xl text-navy">A Partnership Beyond the Keys</h3>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <InfoCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-serif text-2xl text-navy">Signature Amenities</h3>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {ABOUT_AMENITIES.map((amenity, index) => (
              <Reveal key={amenity.label} delay={index * 60}>
                <InfoCard icon={amenity.icon} title={amenity.label} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
