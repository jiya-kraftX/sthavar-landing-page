"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { PiX } from "react-icons/pi";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}

export function Modal({ open, onClose, children, ariaLabel, className }: ModalProps) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={cn(
          "relative w-full max-w-md rounded-3xl border border-pebble bg-white p-6 shadow-[0_40px_80px_-28px_rgba(0,19,95,0.45)] sm:p-8",
          !reducedMotion && "animate-[modal-in_0.25s_ease-out]",
          className
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-espresso/50 transition-colors hover:bg-gold/10 hover:text-gold-dark"
        >
          <PiX className="h-5 w-5" aria-hidden />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
