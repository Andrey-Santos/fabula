"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { brl, cn, installment } from "@/lib/utils";
import { useCart } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((state) => state.add);
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-lg bg-cream-deep">
        <Link href={`/produto/${product.slug}`} aria-label={product.name}>
          <AspectRatio ratio={3 / 4}>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </AspectRatio>
        </Link>

        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink">
            Novo
          </span>
        )}

        <button
          type="button"
          onClick={() => setFavorite((value) => !value)}
          aria-pressed={favorite}
          aria-label={`${favorite ? "Remover" : "Salvar"} ${product.name} nos favoritos`}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-cream/90 text-ink transition hover:bg-cream"
        >
          <Heart
            className={cn("size-4", favorite && "fill-gold-deep text-gold-deep")}
          />
        </button>

        <Button
          type="button"
          variant="dark"
          size="sm"
          className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
          onClick={() =>
            add({
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.images[0],
              size: product.sizes[0],
              color: product.colors[0]?.name,
            })
          }
        >
          <ShoppingBag />
          Adicionar ao carrinho
        </Button>
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium">
          <Link href={`/produto/${product.slug}`} className="hover:text-gold-deep">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-base">{brl(product.price)}</p>
        <p className="text-xs text-muted">{installment(product.price)}</p>
      </div>
    </article>
  );
}
