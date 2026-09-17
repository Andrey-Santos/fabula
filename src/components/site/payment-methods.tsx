import { CreditCard, QrCode, Receipt } from "lucide-react";

/**
 * Formas de pagamento aceitas — texto + ícone neutro, sem reproduzir
 * o desenho das marcas (Visa, Mastercard etc. são marca registrada).
 */
const cards = ["Visa", "Mastercard", "Elo", "Hipercard", "Amex"];

export function PaymentMethods() {
  return (
    <div>
      <h2 className="text-sm font-medium">Formas de pagamento</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {cards.map((card) => (
          <li
            key={card}
            className="flex items-center gap-1.5 rounded-md border border-line bg-cream px-2.5 py-1.5 text-xs text-muted"
          >
            <CreditCard className="size-3.5 text-gold-deep" aria-hidden />
            {card}
          </li>
        ))}
        <li className="flex items-center gap-1.5 rounded-md border border-line bg-cream px-2.5 py-1.5 text-xs text-muted">
          <QrCode className="size-3.5 text-gold-deep" aria-hidden />
          Pix
        </li>
        <li className="flex items-center gap-1.5 rounded-md border border-line bg-cream px-2.5 py-1.5 text-xs text-muted">
          <Receipt className="size-3.5 text-gold-deep" aria-hidden />
          Boleto
        </li>
      </ul>
    </div>
  );
}
