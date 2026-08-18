import { AboutImage } from "@/components/AboutImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT, ABOUT_SERVICES } from "@/constants/about";
import { IMAGES } from "@/constants/images";

export function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <AboutImage image={IMAGES.about} />

          <Reveal direction="right" className="flex flex-col gap-6">
            <SectionHeading
              eyebrow={ABOUT.eyebrow}
              heading={ABOUT.heading}
              headingAccent={ABOUT.headingAccent}
            />
            <div className="flex flex-col gap-4">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-espresso/70">
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
            <h3 className="font-serif text-2xl text-espresso">A Partnership Beyond the Keys</h3>
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
      </Container>
    </section>
  );
}
