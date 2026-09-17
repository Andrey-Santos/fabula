"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { categories } from "@/data/products";
import { cartCount, useCart } from "@/store/cart";
import { cn } from "@/lib/utils";
import { useHydrated } from "@/lib/use-hydrated";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#novidades", label: "Novidades" },
  { href: "/#sobre", label: "Sobre a Fabula" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const hydrated = useHydrated();
  const count = useCart((state) => (hydrated ? cartCount(state.items) : 0));

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      <AnnouncementBar />
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <button
            type="button"
            className="-ml-2 p-2 lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Logo className="shrink-0" />

          <nav className="ml-auto hidden items-center gap-7 text-sm lg:flex">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-deep">
                {link.label}
              </Link>
            ))}

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-gold-deep"
              >
                Categorias
                <ChevronDown className="size-4" aria-hidden />
              </button>
              <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="rounded-lg border border-line bg-cream p-2 shadow-lg">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/?categoria=${category.slug}#novidades`}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-cream-deep"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-deep">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1 lg:ml-6">
            <button
              type="button"
              className="p-2 hover:text-gold-deep"
              aria-label="Buscar produtos"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              <Search className="size-5" />
            </button>
            <Link
              href="/#contato"
              className="p-2 hover:text-gold-deep"
              aria-label="Minha conta"
            >
              <User className="size-5" />
            </Link>
            <Link
              href="/carrinho"
              className="relative p-2 hover:text-gold-deep"
              aria-label={`Carrinho com ${count} ${count === 1 ? "item" : "itens"}`}
            >
              <ShoppingBag className="size-5" />
              <span
                className={cn(
                  "absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-gold text-[11px] font-medium text-ink",
                  count === 0 && "bg-cream-deep text-muted",
                )}
              >
                {count}
              </span>
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-line bg-cream">
            <form
              className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <Search className="size-4 text-muted" aria-hidden />
              <input
                autoFocus
                type="search"
                placeholder="Buscar por peça, categoria ou cor"
                className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-muted"
              />
              <button
                type="button"
                aria-label="Fechar busca"
                onClick={() => setSearchOpen(false)}
              >
                <X className="size-4 text-muted" />
              </button>
            </form>
          </div>
        )}
      </div>

      {menuOpen && (
        <nav className="border-b border-line bg-cream lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-line pt-2">
              <span className="text-xs uppercase tracking-[0.18em] text-muted">
                Categorias
              </span>
              <ul className="pb-2">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/?categoria=${category.slug}#novidades`}
                      className="block py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
