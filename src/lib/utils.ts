import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function brl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/** Crediário próprio: 6x sem juros. */
export function installment(value: number, times = 6) {
  return `ou ${times}x de ${brl(value / times)}`;
}
