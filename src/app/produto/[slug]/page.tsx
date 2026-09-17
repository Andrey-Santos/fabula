import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/shop/product-card";
import { ProductDetail } from "@/components/shop/product-detail";
import { SectionTitle } from "@/components/site/section-title";
import { categories, getProduct, products, relatedProducts } from "@/data/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category)!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <nav aria-label="Você está em" className="mb-8 text-xs text-muted">
        <Link href="/" className="hover:text-ink">
          Início
        </Link>
        <span aria-hidden> / </span>
        <Link href={`/?categoria=${category.slug}#novidades`} className="hover:text-ink">
          {category.name}
        </Link>
        <span aria-hidden> / </span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      <section className="mt-20">
        <SectionTitle title="Combina com" subtitle="Peças que saem junto" />
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {relatedProducts(product).map((related) => (
            <ProductCard key={related.slug} product={related} />
          ))}
        </div>
      </section>
    </div>
  );
}
