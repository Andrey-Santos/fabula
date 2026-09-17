"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * false no servidor e na primeira renderização do cliente, true depois.
 * Evita divergência de hidratação em telas que leem o carrinho do localStorage.
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
