import Image from "next/image";
import Link from "next/link";
import { Clock, MessageCircle, ShieldCheck, Star, Store } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { PaymentMethods } from "@/components/site/payment-methods";
import { SocialLinks } from "@/components/site/social-links";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer id="contato">
      <div className="border-t border-line bg-cream-deep">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <p className="script text-3xl leading-snug text-ink">
            Moda que te acompanha
            <br />
            em todos os momentos
          </p>

          <div className="flex gap-3">
            <Store className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden />
            <div>
              <h2 className="text-sm font-medium">Loja física</h2>
              <address className="mt-1 text-sm not-italic">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink"
                >
                  {site.address}
                </a>
              </address>
            </div>
          </div>

          <div className="flex gap-3">
            <MessageCircle
              className="mt-0.5 size-5 shrink-0 text-gold-deep"
              aria-hidden
            />
            <div>
              <h2 className="text-sm font-medium">Fale conosco</h2>
              <a
                href={site.whatsapp}
                className="mt-1 block text-sm text-muted hover:text-ink"
              >
                {site.phoneLabel}
              </a>
              <span className="text-sm text-muted">WhatsApp</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden />
            <div>
              <h2 className="text-sm font-medium">Horário de atendimento</h2>
              <ul className="mt-1 text-sm text-muted">
                {site.hours.map((hour) => (
                  <li key={hour.days}>
                    {hour.days}: {hour.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-line pt-6 md:col-span-4">
            <PaymentMethods />

            <ul className="mt-4 flex flex-wrap items-center gap-3">
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-xs hover:border-ink"
                >
                  <Star className="size-3.5 fill-gold-deep text-gold-deep" aria-hidden />
                  Avaliações no Google
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-xs text-muted">
                  <ShieldCheck className="size-3.5 text-gold-deep" aria-hidden />
                  Compra segura
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-ink text-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
          <Logo tone="light" />

          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-cream/80">
            <Link href="/#sobre" className="hover:text-gold">
              Política de privacidade
            </Link>
            <Link href="/#sobre" className="hover:text-gold">
              Trocas e devoluções
            </Link>
            <Link href="/#sobre" className="hover:text-gold">
              Termos de uso
            </Link>
          </nav>

          <div>
            <p className="script text-2xl text-gold">Nos siga</p>
            <SocialLinks className="mt-2 [&_a]:hover:text-gold" iconClassName="size-5" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl border-t border-cream/15 px-4 py-5 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
      </div>

      <div className="bg-cream-deep py-3">
        <a
          href="https://kindlein.business"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto block w-fit opacity-80 transition hover:opacity-100"
          aria-label="Desenvolvido por Andrey Kindlein"
        >
          <Image
            src="/img/assinatura.jpg"
            alt="Desenvolvido por Andrey Kindlein"
            width={340}
            height={113}
            className="h-14 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
