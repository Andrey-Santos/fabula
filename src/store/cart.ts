"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string; // slug + variação
  slug: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "id" | "quantity">, quantity?: number) => void;
  remove: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const itemId = (slug: string, size?: string, color?: string) =>
  [slug, size, color].filter(Boolean).join("|");

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item, quantity = 1) =>
        set((state) => {
          const id = itemId(item.slug, item.size, item.color);
          const existing = state.items.find((i) => i.id === id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity + quantity } : i,
              ),
            };
          }
          return { items: [...state.items, { ...item, id, quantity }] };
        }),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      setQuantity: (id, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "fabula-cart" },
  ),
);

export const cartCount = (items: CartItem[]) =>
  items.reduce((total, i) => total + i.quantity, 0);

export const cartSubtotal = (items: CartItem[]) =>
  items.reduce((total, i) => total + i.price * i.quantity, 0);
