import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fluxa | Recupere o controle do seu restaurante",
  description:
    "Você abriu um restaurante para ser dono dele, não para ser empregado. A Fluxa devolve o controle do seu negócio para suas mãos.",
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
    <html lang="pt-BR" className={dmSans.variable}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
