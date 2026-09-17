"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { useHydrated } from "@/lib/use-hydrated";
import { brl, installment } from "@/lib/utils";
import { cartSubtotal, useCart } from "@/store/cart";

export default function CartPage() {
  const mounted = useHydrated();
  const items = useCart((state) => state.items);
  const setQuantity = useCart((state) => state.setQuantity);
  const remove = useCart((state) => state.remove);

  const subtotal = cartSubtotal(items);
  const whatsappLink = `${site.whatsapp}?text=${encodeURIComponent(
    `Olá! Quero finalizar meu pedido na Fabula:\n\n${items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name}${item.size ? ` — ${item.size}` : ""}${
            item.color ? ` / ${item.color}` : ""
          }`,
      )
      .join("\n")}\n\nTotal: ${brl(subtotal)}`,
  )}`;

  if (!mounted) {
    return <div className="mx-auto max-w-7xl px-4 py-20" aria-busy />;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <ShoppingBag className="mx-auto size-10 text-gold-deep" aria-hidden />
        <h1 className="mt-6 text-2xl font-light uppercase tracking-[0.12em]">
          Seu carrinho está vazio
        </h1>
        <p className="mt-3 text-sm text-muted">
          Comece pelas novidades da estação.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/#novidades">Ver novidades</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-2xl font-light uppercase tracking-[0.12em]">Carrinho</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-5">
              <Link
                href={`/produto/${item.slug}`}
                className="w-24 shrink-0 overflow-hidden rounded-md bg-cream-deep"
              >
                <AspectRatio ratio={3 / 4}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </AspectRatio>
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-sm font-medium">
                      <Link href={`/produto/${item.slug}`} className="hover:text-gold-deep">
                        {item.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-xs text-muted">
                      {[item.size, item.color].filter(Boolean).join(" / ")}
                    </p>
                  </div>
                  <p className="text-sm">{brl(item.price * item.quantity)}</p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center rounded-full border border-line">
                    <button
                      type="button"
                      className="p-2 hover:text-gold-deep"
                      aria-label={`Diminuir quantidade de ${item.name}`}
                      onClick={() => setQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="min-w-8 text-center text-sm" aria-live="polite">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="p-2 hover:text-gold-deep"
                      aria-label={`Aumentar quantidade de ${item.name}`}
                      onClick={() => setQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs text-muted hover:text-ink"
                    onClick={() => remove(item.id)}
                  >
                    <Trash2 className="size-4" />
                    Remover
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-lg border border-line bg-cream-deep p-6">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Resumo</h2>

          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>{brl(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Frete</dt>
              <dd className="text-gold-deep">Grátis</dd>
            </div>
            <div className="flex justify-between border-t border-line pt-3 text-base">
              <dt>Total</dt>
              <dd>{brl(subtotal)}</dd>
            </div>
          </dl>

          <p className="mt-2 text-xs text-muted">
            {installment(subtotal, site.installments)} sem juros no crediário
            próprio.
          </p>

          <Button asChild size="lg" className="mt-6 w-full">
            <a href={whatsappLink}>Finalizar no WhatsApp</a>
          </Button>

          <Button asChild variant="ghost" size="sm" className="mt-2 w-full">
            <Link href="/#novidades">
              <ArrowLeft />
              Continuar comprando
            </Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}
