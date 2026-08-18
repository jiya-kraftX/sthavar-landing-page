import { ContactMap } from "@/components/ContactMap";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_DETAILS, CONTACT_SECTION } from "@/constants/contact";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={CONTACT_SECTION.eyebrow}
            heading={CONTACT_SECTION.heading}
            description={CONTACT_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="flex flex-col gap-5">
            {CONTACT_DETAILS.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start gap-4 rounded-2xl border border-pebble bg-cream px-6 py-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Icon name={detail.icon} className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso/50">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-base font-medium text-espresso transition-colors hover:text-gold-dark"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="text-base font-medium text-espresso">{detail.value}</span>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal direction="right">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-pebble shadow-[0_32px_64px_-32px_rgba(44,30,22,0.3)] lg:aspect-auto lg:h-full">
              <ContactMap />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/80 to-transparent p-5">
                <span className="text-xs font-medium text-white">
                  Dapoli, Ratnagiri District, Maharashtra
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
