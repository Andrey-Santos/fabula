export type CategorySlug = "jeans" | "blusas" | "vestidos" | "saias" | "conjuntos";

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: CategorySlug;
  images: string[];
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
};

export const categories: { slug: CategorySlug; name: string; image: string }[] = [
  { slug: "jeans", name: "Jeans", image: "/img/categorias/jeans.jpg" },
  { slug: "blusas", name: "Blusas", image: "/img/categorias/blusa.jpg" },
  { slug: "vestidos", name: "Vestidos", image: "/img/categorias/vestido.jpg" },
  { slug: "saias", name: "Saias", image: "/img/categorias/saia.jpg" },
  { slug: "conjuntos", name: "Conjuntos", image: "/img/categorias/conjunto.jpg" },
];

const P = ["PP", "P", "M", "G", "GG"];
const NUM = ["36", "38", "40", "42", "44"];

export const products: Product[] = [
  {
    slug: "blusa-manga-bufante",
    name: "Blusa Manga Bufante",
    price: 229.9,
    category: "blusas",
    images: ["/img/p01.svg", "/img/p13.svg", "/img/p04.svg"],
    description:
      "Viscose leve com manga bufante e botões forrados. Cai bem com jeans no dia a dia e com saia midi quando a ocasião pede um pouco mais.",
    sizes: P,
    colors: [
      { name: "Amarelo", hex: "#f2d98a" },
      { name: "Off-white", hex: "#efe7dc" },
    ],
    isNew: true,
  },
  {
    slug: "vestido-midi-poa",
    name: "Vestido Midi Poá",
    price: 289.9,
    category: "vestidos",
    images: ["/img/categorias/vestido.jpg", "/img/p12.svg", "/img/p11.svg"],
    description:
      "Vestido midi em poá com decote transpassado e cinto do mesmo tecido. Comprimento na altura da panturrilha e forro na saia.",
    sizes: P,
    colors: [
      { name: "Preto", hex: "#2f2f2f" },
      { name: "Terracota", hex: "#c07a56" },
    ],
    isNew: true,
  },
  {
    slug: "camisa-oversized",
    name: "Camisa Oversized",
    price: 259.9,
    category: "blusas",
    images: ["/img/p03.svg", "/img/p14.svg"],
    description:
      "Camisa de algodão com modelagem ampla e ombro caído. Use fechada com alfaiataria ou aberta por cima de uma regata.",
    sizes: P,
    colors: [
      { name: "Branco", hex: "#efe7dc" },
      { name: "Areia", hex: "#dcd2c4" },
    ],
    isNew: true,
  },
  {
    slug: "blusa-canelada-premium",
    name: "Blusa Canelada Premium",
    price: 179.9,
    category: "blusas",
    images: ["/img/p04.svg", "/img/p01.svg"],
    description:
      "Malha canelada de toque macio, com ombro vazado e caimento justo ao corpo. Peça curinga para compor com jeans de cintura alta.",
    sizes: P,
    colors: [
      { name: "Pink", hex: "#e07fa8" },
      { name: "Preto", hex: "#2f2f2f" },
    ],
    isNew: true,
  },
  {
    slug: "calca-jeans-wide-leg",
    name: "Calça Jeans Wide Leg",
    price: 329.9,
    category: "jeans",
    images: ["/img/p05.svg", "/img/p15.svg"],
    description:
      "Jeans de cintura alta com pernas amplas e barra a fio. Lavagem clara, sem elastano, para um caimento estruturado.",
    sizes: NUM,
    colors: [
      { name: "Lavagem clara", hex: "#b9c4d4" },
      { name: "Lavagem média", hex: "#9aa8bd" },
    ],
  },
  {
    slug: "calca-jeans-skinny",
    name: "Calça Jeans Skinny",
    price: 279.9,
    category: "jeans",
    images: ["/img/p06.svg", "/img/p05.svg"],
    description:
      "Skinny de cintura alta com elastano, modelagem que acompanha o corpo sem marcar. Lavagem escura para usar de dia ou à noite.",
    sizes: NUM,
    colors: [{ name: "Lavagem escura", hex: "#9aa8bd" }],
  },
  {
    slug: "short-jeans-alfaiataria",
    name: "Short Jeans Alfaiataria",
    price: 199.9,
    category: "jeans",
    images: ["/img/p15.svg", "/img/p06.svg"],
    description:
      "Short jeans com pregas frontais e barra dobrada. Modelagem de alfaiataria que eleva o look do verão.",
    sizes: NUM,
    colors: [{ name: "Lavagem clara", hex: "#aeb8c9" }],
  },
  {
    slug: "saia-midi-animal-print",
    name: "Saia Midi Animal Print",
    price: 249.9,
    category: "saias",
    images: ["/img/p07.svg", "/img/p08.svg"],
    description:
      "Saia midi acetinada com estampa animal print e fenda lateral discreta. Fica impecável com blusa lisa e mule.",
    sizes: P,
    colors: [{ name: "Onça", hex: "#d9c7ae" }],
  },
  {
    slug: "saia-plissada-midi",
    name: "Saia Plissada Midi",
    price: 219.9,
    category: "saias",
    images: ["/img/p08.svg", "/img/p07.svg"],
    description:
      "Plissado marcado em tecido leve, com cós elástico coberto. Movimento garantido a cada passo.",
    sizes: P,
    colors: [
      { name: "Camel", hex: "#c8b48f" },
      { name: "Preto", hex: "#2f2f2f" },
    ],
  },
  {
    slug: "conjunto-blazer-short",
    name: "Conjunto Blazer e Short",
    price: 459.9,
    category: "conjuntos",
    images: ["/img/p09.svg", "/img/p10.svg"],
    description:
      "Conjunto de alfaiataria em verde sálvia: blazer de ombro leve e short de cintura alta. Vendido como conjunto completo.",
    sizes: P,
    colors: [{ name: "Verde sálvia", hex: "#cdd6bd" }],
  },
  {
    slug: "conjunto-tricot-saia",
    name: "Conjunto Tricot e Saia",
    price: 399.9,
    category: "conjuntos",
    images: ["/img/p10.svg", "/img/p09.svg"],
    description:
      "Tricot canelado com saia de mesmo fio, em tom areia. Confortável como pijama, elegante como alfaiataria.",
    sizes: P,
    colors: [{ name: "Areia", hex: "#e3d7c3" }],
  },
  {
    slug: "vestido-chemise-linho",
    name: "Vestido Chemise de Linho",
    price: 339.9,
    category: "vestidos",
    images: ["/img/p11.svg", "/img/p02.svg"],
    description:
      "Linho misto com botões frontais e cinto removível. Fresco para o verão, fácil de usar com tênis ou sandália.",
    sizes: P,
    colors: [{ name: "Rosa claro", hex: "#f0c9d6" }],
  },
  {
    slug: "vestido-preto-essencial",
    name: "Vestido Preto Essencial",
    price: 269.9,
    category: "vestidos",
    images: ["/img/p12.svg", "/img/p02.svg"],
    description:
      "O preto que resolve qualquer convite. Malha firme, decote redondo e comprimento midi.",
    sizes: P,
    colors: [{ name: "Preto", hex: "#3b3b3b" }],
  },
  {
    slug: "blusa-cropped-amarela",
    name: "Blusa Cropped Amarela",
    price: 159.9,
    category: "blusas",
    images: ["/img/p13.svg", "/img/p01.svg"],
    description:
      "Cropped de alça média em amarelo Fabula, com bojo embutido. Feita para combinar com cintura alta.",
    sizes: P,
    colors: [{ name: "Amarelo", hex: "#f6e3a8" }],
  },
  {
    slug: "camisa-linho-manga-longa",
    name: "Camisa de Linho Manga Longa",
    price: 289.9,
    category: "blusas",
    images: ["/img/p14.svg", "/img/p03.svg"],
    description:
      "Linho puro com acabamento amaciado, punho com botão e bolso discreto no peito. Amassa bonito.",
    sizes: P,
    colors: [{ name: "Areia", hex: "#dcd2c4" }],
  },
];

export const newArrivals = products.filter((p) => p.isNew);

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, limit = 4) {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const rest = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
