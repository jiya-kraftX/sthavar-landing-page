import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/constants/images";
import { WHY_DAPOLI, WHY_DAPOLI_FEATURES } from "@/constants/whyDapoli";

// Phosphor icons don't share identical optical weight — these two read
// visually smaller than "road" and "airplane" at the same box size, so we
// compensate to keep all four feature icons looking the same size.
const ICON_SIZE_OVERRIDES: Record<string, string> = {
  tourism: "h-7 w-7",
  "investment-growth": "h-7 w-7",
};

export function WhyDapoli() {
  return (
    <section id="why-dapoli" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left" className="flex flex-col gap-6 lg:order-1">
            <SectionHeading
              eyebrow={WHY_DAPOLI.eyebrow}
              heading={WHY_DAPOLI.heading}
              headingAccent={WHY_DAPOLI.headingAccent}
            />
            <div className="flex flex-col gap-4">
              {WHY_DAPOLI.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-navy/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:order-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[0_32px_64px_-32px_rgba(11,28,44,0.35)]">
              <CloudinaryImage
                src={IMAGES.whyDapoli.publicId}
                alt={IMAGES.whyDapoli.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 rounded-3xl border-l-4 border-gold bg-cream px-8 py-7">
          <div className="flex flex-col gap-3">
            {WHY_DAPOLI.closingParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-navy/75">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_DAPOLI_FEATURES.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 80}>
              <InfoCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconClassName={ICON_SIZE_OVERRIDES[feature.id]}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
