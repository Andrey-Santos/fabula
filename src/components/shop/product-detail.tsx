"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, CreditCard, ShoppingBag, Truck } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { brl, cn, installment } from "@/lib/utils";
import { useCart } from "@/store/cart";

export function ProductDetail({ product }: { product: Product }) {
  const [image, setImage] = useState(product.images[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [added, setAdded] = useState(false);
  const add = useCart((state) => state.add);

  function handleAdd() {
    add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      color,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex gap-3">
        {product.images.length > 1 && (
          <ul className="flex w-20 shrink-0 flex-col gap-3">
            {product.images.map((src) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setImage(src)}
                  aria-label={`Ver foto de ${product.name}`}
                  aria-current={src === image}
                  className={cn(
                    "block w-full overflow-hidden rounded-md border bg-cream-deep",
                    src === image ? "border-ink" : "border-transparent",
                  )}
                >
                  <AspectRatio ratio={3 / 4}>
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </AspectRatio>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex-1 overflow-hidden rounded-lg bg-cream-deep">
          <AspectRatio ratio={3 / 4}>
            <Image
              src={image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </div>

      <div className="lg:pt-4">
        <h1 className="text-3xl font-light uppercase tracking-[0.04em]">
          {product.name}
        </h1>
        <p className="mt-4 text-2xl">{brl(product.price)}</p>
        <p className="text-sm text-muted">
          {installment(product.price)} no crediário próprio
        </p>

        <fieldset className="mt-8">
          <legend className="text-xs uppercase tracking-[0.18em] text-muted">
            Tamanho
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                aria-pressed={option === size}
                className={cn(
                  "min-w-12 rounded-full border px-4 py-2 text-sm transition",
                  option === size
                    ? "border-ink bg-ink text-cream"
                    : "border-line hover:border-ink",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-xs uppercase tracking-[0.18em] text-muted">
            Cor: <span className="text-ink">{color}</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.colors.map((option) => (
              <button
                key={option.name}
                type="button"
                onClick={() => setColor(option.name)}
                aria-pressed={option.name === color}
                aria-label={option.name}
                className={cn(
                  "size-9 rounded-full border-2 transition",
                  option.name === color ? "border-ink" : "border-line",
                )}
                style={{ backgroundColor: option.hex }}
              />
            ))}
          </div>
        </fieldset>

        <Button size="lg" className="mt-8 w-full sm:w-auto" onClick={handleAdd}>
          {added ? <Check /> : <ShoppingBag />}
          {added ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
        </Button>

        <ul className="mt-6 space-y-2 text-sm text-muted">
          <li className="flex items-center gap-2">
            <Truck className="size-4 text-gold-deep" aria-hidden />
            Frete grátis para todo o Brasil
          </li>
          <li className="flex items-center gap-2">
            <CreditCard className="size-4 text-gold-deep" aria-hidden />
            Crediário próprio em até 6x sem juros
          </li>
        </ul>

        <div className="mt-8 border-t border-line pt-6">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
            Descrição
          </h2>
          <p className="mt-3 text-sm leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
