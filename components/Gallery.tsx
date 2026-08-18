import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryShowcase } from "@/components/GalleryShowcase";
import { GALLERY_IMAGES, GALLERY_SECTION } from "@/constants/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="bg-navy py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            light
            className="mx-auto"
            eyebrow={GALLERY_SECTION.eyebrow}
            heading={GALLERY_SECTION.heading}
            headingAccent={GALLERY_SECTION.headingAccent}
            description={GALLERY_SECTION.description}
          />
        </Reveal>

        <Reveal delay={80} className="mt-12 sm:mt-14">
          <GalleryShowcase images={GALLERY_IMAGES} />
        </Reveal>
      </Container>
    </section>
  );
}
