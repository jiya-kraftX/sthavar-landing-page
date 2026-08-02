import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy shadow-[0_8px_30px_-8px_rgba(198,161,91,0.55)] hover:bg-gold-light hover:shadow-[0_12px_36px_-8px_rgba(198,161,91,0.7)]",
  secondary: "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white",
  ghost: "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], className);

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
