"use client";

import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export function EnquiryModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-pebble bg-cream px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-serif text-lg text-espresso">Ready to explore Sapphire?</h3>
          <p className="text-sm leading-relaxed text-espresso/60">
            Share your details and continue the conversation on WhatsApp.
          </p>
        </div>
        <Button type="button" onClick={() => setOpen(true)} className="w-full shrink-0 sm:w-auto">
          Enquire Now
        </Button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} ariaLabel="Enquiry form">
        <ContactForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}
