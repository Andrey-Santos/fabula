import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CreditCard, RefreshCw, Store, Truck } from "lucide-react";

import { Hero } from "@/components/site/hero";
import { Reveal } from "@/components/site/reveal";
import { SectionTitle } from "@/components/site/section-title";
import { ProductCard } from "@/components/shop/product-card";
import { TestimonialCarousel } from "@/components/shop/testimonial-carousel";
import { Fairy } from "@/components/site/fairy";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { categories, products, type CategorySlug } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

const benefits = [
  { icon: CreditCard, title: "Crediário próprio", text: "6x sem juros" },
  { icon: Truck, title: "Frete grátis", text: "para todo o Brasil" },
  { icon: RefreshCw, title: "Trocas", text: "com mais facilidade" },
  { icon: Store, title: "Atendimento", text: "loja física + WhatsApp" },
];

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const activeCategory = categories.find((c) => c.slug === categoria)?.slug as
    | CategorySlug
    | undefined;

  const showcase = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products.filter((p) => p.isNew);

  return (
    <>
      <Hero />

      <section className="mx-auto mt-9 max-w-7xl px-4 lg:mt-12">
        <ul className="grid divide-y divide-line rounded-lg border border-line bg-cream-deep shadow-sm sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="flex items-center gap-3 px-5 py-5 transition-colors hover:bg-cream"
            >
              <benefit.icon className="size-6 text-gold-deep" aria-hidden />
              <div>
                <p className="text-sm font-medium">{benefit.title}</p>
                <p className="text-sm text-muted">{benefit.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-15">
        <SectionTitle title="Categorias" subtitle="Encontre o seu estilo" />
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/?categoria=${category.slug}#novidades`}
                className="group block overflow-hidden rounded-lg bg-cream-deep transition-shadow hover:shadow-lg"
              >
                <AspectRatio ratio={3 / 4}>
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <span className="flex items-center justify-between px-4 py-3 text-sm">
                  {category.name}
                  <ArrowRight className="size-4 text-gold-deep transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="novidades" className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-12">
        <SectionTitle
          title={activeCategory ? categories.find((c) => c.slug === activeCategory)!.name : "Novidades"}
          subtitle={
            activeCategory
              ? `${showcase.length} peças nesta categoria`
              : "As peças mais desejadas da estação"
          }
          action={
            activeCategory ? (
              <Link href="/#novidades" className="text-sm hover:text-gold-deep">
                Limpar filtro
              </Link>
            ) : (
              <Link
                href="/?categoria=vestidos#novidades"
                className="hidden items-center gap-1 text-sm hover:text-gold-deep sm:flex"
              >
                Ver todas as novidades
                <ArrowRight className="size-4" />
              </Link>
            )
          }
        />
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {showcase.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-12">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-lg lg:grid-cols-[1.05fr_1fr]">
            <div className="relative z-10 bg-gold px-8 py-12 sm:px-12 lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)] lg:pr-24">
              <Fairy className="h-12 w-10 text-ink" />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ink/70">
                Desde {site.since}
              </p>
              <h2 className="mt-4 text-3xl font-light uppercase leading-tight text-ink sm:text-4xl">
                Uma loja,
                <br />
                muitas histórias
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/80">
                A Fabula nasceu em {site.since}, em {site.city}, com o propósito de
                levar mais do que moda: queríamos levar autoestima, estilo e
                confiança. O que começou com uma loja física hoje também é online,
                para estar com você em todos os momentos.
              </p>
              <p className="script mt-8 text-2xl text-ink">{site.slogan}</p>
            </div>
            <div className="relative min-h-64 bg-cream-deep lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%]">
              <Image
                src="/img/about.png"
                alt="Cliente da Fabula em Rio do Sul"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-15">
        <Reveal>
          <SectionTitle
            title="Elas usam Fabula"
            subtitle="Nosso maior orgulho é ver você aqui"
          />
          <div className="mt-8">
            <TestimonialCarousel items={testimonials} />
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Marque{" "}
            <a href={site.instagram} className="text-ink hover:text-gold-deep">
              {site.instagramHandle}
            </a>{" "}
            para aparecer aqui.
          </p>
        </Reveal>
      </section>
    </>
  );
}
