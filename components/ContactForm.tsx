"use client";

import { useCallback, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const WHATSAPP_NUMBER = "917249394599";
const INDIAN_MOBILE_PATTERN = /^[6-9]\d{9}$/;

function buildWhatsAppUrl(name: string, phone: string): string {
  const message = `Hi, I am ${name}.\n\nMy phone number is ${phone}.\n\nI am interested in Sapphire by Sthavar Group and would like to know more.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps = {}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isSubmitting) return;

      const trimmedName = name.trim();
      const trimmedPhone = phone.trim();

      if (!trimmedName) {
        setError("Please enter your name.");
        return;
      }

      if (!INDIAN_MOBILE_PATTERN.test(trimmedPhone)) {
        setError("Please enter a valid 10-digit Indian mobile number.");
        return;
      }

      setError(null);
      setIsSubmitting(true);

      // Passing "noopener" as a window feature makes window.open() return
      // null even on success, per spec — so we can't use that string and
      // still detect success. Open normally, then strip `opener` by hand to
      // get the same security benefit while keeping a usable reference.
      const whatsappWindow = window.open(buildWhatsAppUrl(trimmedName, trimmedPhone), "_blank");
      if (whatsappWindow) whatsappWindow.opener = null;

      // Never leave the button permanently disabled, even if the tab never
      // reports back — release the lock shortly after the attempt.
      window.setTimeout(() => setIsSubmitting(false), 1200);

      if (!whatsappWindow) {
        setError("We couldn't open WhatsApp automatically. Please allow pop-ups for this site and try again.");
        return;
      }

      onSuccess?.();
    },
    [name, phone, isSubmitting, onSuccess]
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-pebble bg-white px-6 py-7 sm:px-8 sm:py-8"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="font-serif text-xl text-espresso">Enquire Now</h3>
        <p className="text-sm leading-relaxed text-espresso/60">
          Share your details and we&rsquo;ll continue the conversation on WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="enquiry-name"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso/50"
        >
          Name
        </label>
        <input
          id="enquiry-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your full name"
          autoComplete="name"
          className="rounded-xl border border-pebble bg-cream px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="enquiry-phone"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso/50"
        >
          Phone Number
        </label>
        <div className="flex items-stretch overflow-hidden rounded-xl border border-pebble bg-cream transition-colors focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
          <span className="flex items-center border-r border-pebble px-4 text-sm font-medium text-espresso/60">
            +91
          </span>
          <input
            id="enquiry-phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="10-digit mobile number"
            autoComplete="tel-national"
            className="w-full bg-transparent px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 outline-none"
          />
        </div>
      </div>

      {error ? (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
        <Icon name="whatsapp" className="h-5 w-5" />
        {isSubmitting ? "Opening WhatsApp…" : "Enquire on WhatsApp"}
      </Button>
    </form>
  );
}
