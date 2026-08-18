import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  headingAccent?: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  heading,
  headingAccent,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.3em]",
          light ? "text-gold-light" : "text-gold-dark"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-espresso"
        )}
      >
        {heading}
        {headingAccent ? (
          <>
            {" "}
            <span className={light ? "text-gold-light" : "text-gold-dark"}>
              {headingAccent}
            </span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-espresso/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
