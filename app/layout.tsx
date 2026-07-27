import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Fluxa | Recupere o controle do seu restaurante",
  description:
    "A cozinha vira caos no pico. As taxas comem sua margem. E você nem sabe quem comeu sua comida. A Fluxa não vende um app — devolve o controle pra suas mãos.",
  openGraph: {
    title: "Fluxa | Recupere o controle do seu restaurante",
    description:
      "Pare de alugar clientes com apps de delivery. Construa sua própria base com marketing e gestão de negócio.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
