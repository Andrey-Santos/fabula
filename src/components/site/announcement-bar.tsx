import { MapPin } from "lucide-react";

import { SocialLinks } from "@/components/site/social-links";
import { site } from "@/data/site";

const messages = ["Frete grátis para todo o Brasil", "Loja física + WhatsApp"];

function MessageGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-3" aria-hidden={hidden}>
      {messages.map((message, index) => (
        <span key={message} className="flex items-center gap-3">
          {index > 0 && (
            <span aria-hidden className="text-line">
              |
            </span>
          )}
          {message}
        </span>
      ))}
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-cream-deep text-[11px] tracking-wide text-muted">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2">
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 sm:flex hover:text-ink"
        >
          <MapPin className="size-3.5 text-gold-deep" aria-hidden />
          {site.city}
        </a>

        {/* Mobile: cabe tudo rolando devagar em loop */}
        <div className="marquee flex flex-1 overflow-hidden whitespace-nowrap sm:hidden">
          <div className="marquee-track flex items-center gap-3">
            <MessageGroup />
            <span aria-hidden className="text-line">
              |
            </span>
            <MessageGroup hidden />
          </div>
        </div>

        {/* Desktop: já cabe tudo, sem animação */}
        <div className="hidden flex-1 items-center justify-center gap-3 whitespace-nowrap sm:flex">
          <MessageGroup />
        </div>

        <SocialLinks className="hidden md:flex [&_a]:hover:text-ink" />
      </div>
    </div>
  );
}
