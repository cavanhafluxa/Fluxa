import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fluxa — Não só uma Assessoria. O Canal que seu restaurante precisa estar.",
  description:
    "Marketing, tecnologia e comunidade para restaurantes construírem sua própria base de clientes — sem depender de apps de delivery ou agências.",
  openGraph: {
    title: "Fluxa — O Canal que seu restaurante precisa estar",
    description:
      "Aquisição, Conversão e Retenção para restaurantes. Pare de pagar aluguel por clientes que deveriam ser seus.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
