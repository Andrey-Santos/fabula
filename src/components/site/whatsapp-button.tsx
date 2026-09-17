import { MessageCircle } from "lucide-react";

import { site } from "@/data/site";

export function WhatsappButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="size-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
