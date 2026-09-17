import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/data/site";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label={`${site.name} — página inicial`}
    >
        <span
          className={cn(
            "script text-3xl",
            tone === "dark" ? "text-ink" : "text-cream",
          )}
        >
          <span className="text-gold-deep">F</span>abula
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] uppercase tracking-[0.18em]",
            tone === "dark" ? "text-muted" : "text-cream/70",
          )}
        >
          {site.slogan}
        </span>
    </Link>
  );
}
