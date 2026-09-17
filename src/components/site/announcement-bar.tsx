import { MapPin } from "lucide-react";

import { SocialLinks } from "@/components/site/social-links";
import { site } from "@/data/site";

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
        <div className="no-scrollbar flex flex-1 items-center justify-center gap-3 overflow-x-auto whitespace-nowrap">
          <span>Frete grátis para todo o Brasil</span>
          <span aria-hidden className="text-line">|</span>
          <span>Crediário próprio em até 6x sem juros</span>
          <span aria-hidden className="text-line">|</span>
          <span>Loja física + WhatsApp</span>
        </div>
        <SocialLinks className="hidden md:flex [&_a]:hover:text-ink" />
      </div>
    </div>
  );
}
