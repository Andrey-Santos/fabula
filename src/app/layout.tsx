import type { Metadata } from "next";
import { Jost, Parisienne } from "next/font/google";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsappButton } from "@/components/site/whatsapp-button";
import { site } from "@/data/site";
import "./globals.css";

const sans = Jost({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

const script = Parisienne({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Moda feminina, acessórios e estilo para o seu dia a dia. Crediário próprio em 6x sem juros e frete grátis para todo o Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${script.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
