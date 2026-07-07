import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fluxa — O canal onde seu restaurante precisa estar",
  description:
    "Marketing, tecnologia e comunidade para restaurantes construírem sua própria base de clientes — sem depender de apps de delivery ou agências.",
  openGraph: {
    title: "Fluxa — O canal onde seu restaurante precisa estar",
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
    <html lang="pt-BR" className={`${dmSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
