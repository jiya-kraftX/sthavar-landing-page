import { AmenityShowcase } from "@/components/AmenityShowcase";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_AMENITIES, AMENITIES_SECTION } from "@/constants/about";

export function SignatureAmenities() {
  return (
    <section id="amenities" className="bg-navy py-24 sm:py-28">
      <Container>
        <Reveal className="text-center">
          <SectionHeading
            align="center"
            light
            className="mx-auto"
            eyebrow={AMENITIES_SECTION.eyebrow}
            heading={AMENITIES_SECTION.heading}
          />
        </Reveal>
      </Container>

      {/* Same wider max-width treatment as the Why Dapoli image, rather
          than the standard Container, so both full-width visuals match. */}
      <div className="mx-auto mt-12 w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <AmenityShowcase amenities={ABOUT_AMENITIES} />
      </div>
    </section>
  );
}
