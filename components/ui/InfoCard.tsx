import { Icon } from "@/components/ui/Icon";
import type { IconKey } from "@/types";
import { cn } from "@/utils/cn";

type InfoCardTone = "light" | "glass";

interface InfoCardProps {
  icon: IconKey;
  title: string;
  description?: string;
  tone?: InfoCardTone;
  compact?: boolean;
  className?: string;
  iconClassName?: string;
}

export function InfoCard({
  icon,
  title,
  description,
  tone = "light",
  compact = false,
  className,
  iconClassName,
}: InfoCardProps) {
  if (compact) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300",
          tone === "light"
            ? "border-navy/10 bg-white hover:border-gold/40 hover:shadow-[0_12px_30px_-16px_rgba(11,28,44,0.25)]"
            : "border-white/10 bg-white/5 backdrop-blur-md hover:border-gold-light/40 hover:bg-white/10",
          className
        )}
      >
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            tone === "light" ? "bg-gold/15 text-gold-dark" : "bg-gold-light/15 text-gold-light"
          )}
        >
          <Icon name={icon} className="h-4 w-4" />
        </span>
        <span
          className={cn(
            "text-sm font-medium",
            tone === "light" ? "text-navy/85" : "text-white/85"
          )}
        >
          {title}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex flex-col gap-4 rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1",
        tone === "light"
          ? "border-navy/10 bg-white shadow-[0_16px_40px_-28px_rgba(11,28,44,0.3)] hover:border-gold/40 hover:shadow-[0_24px_48px_-24px_rgba(11,28,44,0.3)]"
          : "border-white/10 bg-white/5 backdrop-blur-md hover:border-gold-light/40 hover:bg-white/[0.08]",
        className
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
          tone === "light" ? "bg-gold/15 text-gold-dark" : "bg-gold-light/15 text-gold-light"
        )}
      >
        <Icon name={icon} className={iconClassName ?? "h-6 w-6"} />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3
          className={cn(
            "font-serif text-lg",
            tone === "light" ? "text-navy" : "text-white"
          )}
        >
          {title}
        </h3>
        {description ? (
          <p
            className={cn(
              "text-sm leading-relaxed",
              tone === "light" ? "text-navy/65" : "text-white/65"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
