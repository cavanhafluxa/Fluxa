"use client";

import { useState } from "react";

/**
 * FAQ — accordion (uma aberta por vez, primeira aberta por padrão).
 * Container radius 14 border outline, itens separados por border-top.
 */
const ITEMS = [
  {
    value: "custo",
    title: "Quanto custa ser parceiro Fluxa?",
    body: "Mensalidade + comissão fixa, sem fee variável nem cobrança escondida. O número exato sai depois que a gente conhece o tamanho da sua operação — pra não vender pacote que não serve pra você. Muita gente descobre que o custo mensal cabe no que já paga hoje em marketplace.",
  },
  {
    value: "independencia",
    title: "Vou perder minha independência?",
    body: "Não. O cardápio é no seu domínio, com sua marca, sua cor, sua logo. Se um dia você quiser sair, os dados dos seus clientes vão com você — pra sempre. A Fluxa é parceira, não dona.",
  },
  {
    value: "concorrencia",
    title: "A Fluxa concorre com o meu restaurante?",
    body: "Nunca. A gente não abre loja, não vende comida, não compete por cliente. Todo cliente da rede é cliente do parceiro. Nosso jogo é fazer você vender mais.",
  },
  {
    value: "volume",
    title: "E se eu tiver 10 pedidos por dia?",
    body: "A rede Fluxa gera mais tração pra quem já tem operação minimamente rodando. Se você está começando do zero, o Fluxa Foods (SaaS) pode fazer mais sentido antes — e quando escalar, você migra pra parceria.",
  },
  {
    value: "consultor",
    title: "E se eu não gostar do consultor?",
    body: "Trocamos, sem custo. A gente escolhe o consultor certo pro seu perfil de restaurante. Se não rolar química, ajustamos.",
  },
  {
    value: "impressora",
    title: "Como funciona a impressão térmica?",
    body: "Recomendamos impressora local e ajudamos a comprar. Nosso agente conecta ela ao Kitchen — e se cair a internet, imprime pelo navegador. Se as duas falharem, o pedido não se perde: fica na fila esperando.",
  },
  {
    value: "nota",
    title: "Emite nota fiscal?",
    body: "Sim, NFC-e integrada. O consultor configura a parte fiscal com você.",
  },
  {
    value: "salao",
    title: "Funciona pra restaurante que atende só no salão?",
    body: "Sim. Fluxa Kitchen + Modo Mesa com QR Code faz a comanda digital do salão sem precisar de PDV em cada mesa. O cliente escaneia, pede, e o garçom recebe.",
  },
  {
    value: "exclusividade",
    title: "Vocês exigem exclusividade?",
    body: "Não. Você pode continuar no iFood ou onde quiser. Só que quando começar a comparar quanto rende cada canal, vai perceber sozinho onde o dinheiro cresce.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<string | null>("custo");

  return (
    <section id="faq" className="fx-inout bg-surface-cream py-[104px]">
      <div className="mx-auto w-full max-w-[880px] px-8">
        <h2 className="text-h2 mb-10 text-ink">
          Perguntas que a gente sempre escuta.
        </h2>
        <div className="overflow-hidden rounded-[14px] border border-outline bg-surface">
          {ITEMS.map((item, i) => {
            const isOpen = open === item.value;
            return (
              <div
                key={item.value}
                className={i === 0 ? "" : "border-t border-outline"}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.value)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14px] font-semibold text-ink"
                >
                  <span>{item.title}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className={
                      "shrink-0 transition-transform duration-300 " +
                      (isOpen ? "rotate-180" : "")
                    }
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14px] leading-[1.6] text-on-surface-variant">
                    {item.body}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
