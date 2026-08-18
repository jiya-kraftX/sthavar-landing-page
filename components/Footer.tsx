import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { CONTACT_DETAILS } from "@/constants/contact";
import { IMAGES } from "@/constants/images";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/navigation";
import { SITE } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3">
            <CloudinaryImage
              src={IMAGES.logo.publicId}
              alt=""
              width={160}
              height={160}
              quality="auto:best"
              className="h-10 w-10 rounded-full object-cover"
              fallbackClassName="h-10 w-10 rounded-full border border-white/20"
              fallbackVariant="compact"
              fallbackIcon="sparkle"
            />
            <span className="font-serif text-xl text-white">
              {SITE.shortName}
              <span className="block text-[0.6rem] font-sans font-medium uppercase tracking-[0.3em] text-white/60">
                Sthavar Group
              </span>
            </span>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-white/60">{SITE.description}</p>
          <ul className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-light hover:text-gold-light"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Contact
          </h3>
          <ul className="flex flex-col gap-2.5">
            {CONTACT_DETAILS.map((detail) => (
              <li key={detail.label} className="text-xs text-white/70">
                {detail.href ? (
                  <a href={detail.href} className="transition-colors hover:text-white">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-2 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/50">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">Crafted for generational legacies.</p>
        </Container>
      </div>
    </footer>
  );
}
