import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-deep lg:min-h-[42rem]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/hero-loja.png"
          alt=""
          fill
          priority
          className="object-cover object-[78%_12%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:py-32">
        <div className="max-w-lg">
          <p className="script text-3xl text-gold-deep">Looks que te fazem</p>
          <h1 className="mt-2 text-4xl font-light uppercase leading-[1.05] tracking-[0.02em] text-ink sm:text-6xl">
            Sentir a sua
            <br />
            melhor versão
          </h1>
          <p className="mt-5 text-base text-muted">
            Moda feminina, acessórios e estilo para o seu dia a dia. Do casual ao
            especial, sempre com você.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#novidades">
                Ver coleção
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.whatsapp}>
                <MessageCircle />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            {site.hours.map((hour) => (
              <div key={hour.days}>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  {hour.days}
                </dt>
                <dd className="mt-1">{hour.time}</dd>
              </div>
            ))}
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                Loja física
              </dt>
              <dd className="mt-1">{site.city}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
