"use client";

import { useEffect, useState } from "react";
import { PiList, PiX } from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { NAV_CTA_LABEL, NAV_LINKS } from "@/constants/navigation";
import { IMAGES } from "@/constants/images";
import { SITE } from "@/constants/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/utils/cn";

export function Navbar() {
  const scrolled = useScrollPosition(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrolled || menuOpen;

  useEffect(() => {
    if (!menuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-pebble bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container as="nav" className="flex h-20 items-center justify-between">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
          aria-label={`${SITE.name} — Home`}
        >
          <CloudinaryImage
            src={IMAGES.logo.publicId}
            alt="Sthavar Group Logo"
            width={160}
            height={160}
            quality="auto:best"
            className="h-10 w-10 rounded-full object-cover"
            fallbackClassName="h-10 w-10 rounded-full border border-current/20"
            fallbackVariant="compact"
            fallbackIcon="sparkle"
          />
          <span
            className={cn(
              "font-serif text-base uppercase leading-none tracking-[0.2em]",
              solid ? "text-espresso" : "text-white"
            )}
          >
            Sthavar Group
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  solid ? "text-espresso/80 hover:text-gold-dark" : "text-white/85 hover:text-gold-light"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" className="px-6 py-3 text-xs">
            {NAV_CTA_LABEL}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            solid ? "text-espresso" : "text-white"
          )}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <PiX className="h-6 w-6" aria-hidden /> : <PiList className="h-6 w-6" aria-hidden />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-pebble bg-cream transition-[max-height] duration-300 ease-out lg:hidden",
          menuOpen
            ? "max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
            : "max-h-0 overflow-hidden border-t-0"
        )}
      >
        <Container className="flex flex-col gap-1 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-espresso/80 transition-colors hover:bg-navy/5 hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
            {NAV_CTA_LABEL}
          </Button>
        </Container>
      </div>
    </header>
  );
}
