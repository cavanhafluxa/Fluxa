import type { Metadata } from "next";
import { Urbanist, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

/** Urbanist 700/800 — display, wordmark e números. */
const urbanist = Urbanist({
  variable: "--font-urbanist-google",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

/** Manrope 400/600/700 — corpo, legendas, dados e UI. */
const manrope = Manrope({
  variable: "--font-manrope-google",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fluxa | Marketing pela jornada do cliente",
  description:
    "Estruturamos restaurantes para crescer do primeiro contato à próxima compra. Conhecer, desejar, comprar e voltar — a jornada inteira, não ações soltas.",
  openGraph: {
    title: "Fluxa | Marketing pela jornada do cliente",
    description:
      "Antes da ação, vem o cliente. A Fluxa estrutura a jornada inteira do restaurante: conhecer, desejar, comprar e voltar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${urbanist.variable} ${manrope.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
