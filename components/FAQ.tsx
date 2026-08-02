"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS, FAQ_SECTION } from "@/constants/faq";
import { cn } from "@/utils/cn";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="bg-cream py-24 sm:py-28">
      <Container className="max-w-4xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={FAQ_SECTION.eyebrow}
            heading={FAQ_SECTION.heading}
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={index * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-colors",
                    isOpen ? "border-gold/50" : "border-navy/10"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      id={`faq-trigger-${item.id}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-serif text-lg text-navy">{item.question}</span>
                      <Icon
                        name="chevron-down"
                        className={cn(
                          "h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-base leading-relaxed text-navy/70">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button href="#contact" variant="primary">
            {FAQ_SECTION.ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
