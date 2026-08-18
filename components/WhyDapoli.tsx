import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyDapoliShowcase } from "@/components/WhyDapoliShowcase";
import { WHY_DAPOLI, WHY_DAPOLI_GALLERY, WHY_DAPOLI_HIGHLIGHTS } from "@/constants/whyDapoli";

export function WhyDapoli() {
  return (
    <section id="why-dapoli" className="bg-cream py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow={WHY_DAPOLI.eyebrow}
            heading={WHY_DAPOLI.heading}
            headingAccent={WHY_DAPOLI.headingAccent}
            description={WHY_DAPOLI.paragraphs[0]}
          />
        </Reveal>
      </Container>

      <div className="mt-12 sm:mt-14">
        <WhyDapoliShowcase images={WHY_DAPOLI_GALLERY} highlights={WHY_DAPOLI_HIGHLIGHTS} />
      </div>
    </section>
  );
}
