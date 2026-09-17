export type Testimonial = {
  id: string;
  name: string;
  handle: string;
  /** Imagem do look, ou poster do vídeo quando houver `video`. */
  image?: string;
  video?: string;
  text: string;
  product: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Camila R.",
    handle: "@camilarocha",
    image: "/img/elaveste1.jpg",
    text: "Comprei no crediário e levei três peças. Chegou rápido e serviu certinho.",
    product: "Blusa Manga Bufante",
  },
  {
    id: "2",
    name: "Juliana M.",
    handle: "@jumendes",
    image: "/img/elaveste2.jpg",
    text: "Usei no casamento da minha irmã e todo mundo perguntou de onde era.",
    product: "Vestido Midi Poá",
  },
  {
    id: "3",
    name: "Bruna L.",
    handle: "@brunalopes",
    image: "/img/elaveste3-poster.jpg",
    video: "/img/elaveste3.mp4",
    text: "As meninas da loja montaram o look inteiro comigo. Saí com tudo pronto.",
    product: "Vestido Chemise de Linho",
  },
];
