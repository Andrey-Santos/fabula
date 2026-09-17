import { cn } from "@/lib/utils";
import { site } from "@/data/site";

// lucide-react não distribui mais ícones de marca; SVGs mínimos aqui.
const icons = {
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  Facebook: (
    <path d="M14 8.5V7a1.5 1.5 0 0 1 1.5-1.5H17V2.5h-2.5A4.5 4.5 0 0 0 10 7v1.5H7.5V12H10v9.5h4V12h2.5l.5-3.5z" />
  ),
};

const links = [
  { href: site.instagram, label: "Instagram", icon: icons.Instagram },
  { href: site.facebook, label: "Facebook", icon: icons.Facebook },
];

export function SocialLinks({
  className,
  iconClassName = "size-4",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.label}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className={iconClassName}
          >
            {link.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
