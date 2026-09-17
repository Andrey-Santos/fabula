"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.firstElementChild as HTMLElement)?.offsetWidth ?? 1;
    setActive(Math.round(track.scrollLeft / cardWidth));
  }

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="w-[calc(100%-1rem)] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
          >
            <figure className="rounded-lg border border-line bg-cream p-4">
              <div className="overflow-hidden rounded-md bg-cream-deep">
                <AspectRatio ratio={4 / 5}>
                  {item.video ? (
                    <video
                      src={`${item.video}#t=0.1`}
                      poster={item.image}
                      preload="auto"
                      muted
                      loop
                      playsInline
                      autoPlay
                      aria-label={`Look de ${item.name} em vídeo`}
                      className="size-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.image!}
                      alt={`Look de ${item.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </AspectRatio>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">
                {item.text}
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between text-xs text-muted">
                <span>
                  <span className="font-medium text-ink">{item.name}</span>{" "}
                  {item.handle}
                </span>
                <span>{item.product}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Ver depoimentos anteriores"
        onClick={() => scrollToIndex(Math.max(active - 1, 0))}
        className="absolute -left-3 top-1/3 grid size-10 place-items-center rounded-full border border-line bg-cream shadow-sm hover:bg-cream-deep lg:-left-5"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Ver próximos depoimentos"
        onClick={() => scrollToIndex(Math.min(active + 1, items.length - 1))}
        className="absolute -right-3 top-1/3 grid size-10 place-items-center rounded-full border border-line bg-cream shadow-sm hover:bg-cream-deep lg:-right-5"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Ir para o depoimento ${index + 1}`}
            aria-current={index === active}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index === active ? "w-6 bg-gold" : "w-1.5 bg-line",
            )}
          />
        ))}
      </div>
    </div>
  );
}
