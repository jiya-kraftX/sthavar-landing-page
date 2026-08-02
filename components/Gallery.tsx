import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES, GALLERY_SECTION } from "@/constants/gallery";
import { cn } from "@/utils/cn";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow={GALLERY_SECTION.eyebrow}
            heading={GALLERY_SECTION.heading}
            headingAccent={GALLERY_SECTION.headingAccent}
            description={GALLERY_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal
              key={image.publicId}
              delay={index * 60}
              className={cn(image.featured && "col-span-2 row-span-2")}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                <CloudinaryImage
                  src={image.publicId}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/70 via-navy/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
