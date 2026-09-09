"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Modal } from "@/components/ui/Modal";

interface EnquiryContextValue {
  openEnquiry: () => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

/**
 * Owns the single Enquire Now popup for the whole site. Every "Book Site Visit"
 * button (navbar, hero, section CTAs) and the Contact section's "Enquire Now"
 * button open this same modal + form, so there is exactly one modal instance and
 * one WhatsApp enquiry flow.
 */
export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openEnquiry = useCallback(() => setOpen(true), []);
  const closeEnquiry = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openEnquiry, closeEnquiry }), [openEnquiry, closeEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <Modal open={open} onClose={closeEnquiry} ariaLabel="Enquiry form">
        <ContactForm onSuccess={closeEnquiry} />
      </Modal>
    </EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryContextValue {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
