"use client";

import type { ReactNode } from "react";
import { useEnquiry } from "@/components/EnquiryProvider";
import { Button } from "@/components/ui/Button";

interface SiteVisitButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

/**
 * A "Book Site Visit" style CTA. Instead of linking to #contact it opens the
 * shared Enquire Now popup (see EnquiryProvider).
 */
export function SiteVisitButton({ children, variant = "primary", className }: SiteVisitButtonProps) {
  const { openEnquiry } = useEnquiry();

  return (
    <Button type="button" variant={variant} className={className} onClick={openEnquiry}>
      {children}
    </Button>
  );
}
