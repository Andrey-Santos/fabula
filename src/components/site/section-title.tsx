import { cn } from "@/lib/utils";

/** Título de seção com o traço dourado desenhado à mão da marca. */
export function SectionTitle({
  title,
  subtitle,
  action,
  className,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-end justify-between gap-4", className)}>
      <div>
        <h2 className="relative inline-block text-2xl font-light uppercase tracking-[0.12em] text-ink sm:text-3xl">
          {title}
          <svg
            viewBox="0 0 120 12"
            aria-hidden
            className="absolute -right-24 bottom-1.5 hidden h-3 w-24 text-gold sm:block"
          >
            <path
              d="M2 8C20 2 34 10 52 6c14-3 22 4 36 1s20-5 30-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </h2>
        {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
