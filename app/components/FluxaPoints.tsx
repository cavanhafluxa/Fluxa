/**
 * Fluxa Points — seção ink com halo esquerdo, grid 1.15fr | 1fr:
 *   Esquerda: chip + H2 + lead
 *   Direita:  mockup de sacola (Casa Brasa) com faixa +80 pts e CTA "Finalizar pedido"
 * Depois: 3 blocos glass + frase de fecho.
 */
export function FluxaPoints() {
  return (
    <section
      id="points"
      className="fx-inout relative overflow-hidden bg-ink py-[104px] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-fluxa-red/20 blur-[80px]"
      />
      <div className="container-fluxa relative">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-1.5 text-[12.5px] font-semibold text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-fluxa-red" />
              Fluxa Points
            </span>
            <h2 className="text-h2 mt-6 text-balance">
              Um programa de fidelidade que vira{" "}
              <span className="text-fluxa-pink-ink">
                ativo do seu restaurante
              </span>
              .
            </h2>
            <p className="text-lead mt-6 max-w-[34rem] text-white/70 text-pretty">
              Cada real gasto na sua casa vira ponto na carteira do cliente. E
              ponto no seu restaurante só volta pro seu restaurante — vira
              motivo pra ele pedir de você de novo, não do concorrente.
            </p>
          </div>

          {/* Mockup de sacola */}
          <div className="relative rounded-[20px] border border-white/[0.1] bg-white/[0.06] p-[22px]">
            <p className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Sacola · Casa Brasa
            </p>
            <div className="grid gap-2.5 rounded-[14px] bg-white p-4 text-ink">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13.5px] font-semibold">
                  2× Burger da casa
                </span>
                <span className="font-mono text-[13.5px]">R$ 63,80</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13.5px] font-semibold">
                  1× Batata rústica
                </span>
                <span className="font-mono text-[13.5px]">R$ 16,00</span>
              </div>
              <div className="h-px bg-outline" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13.5px] font-bold">Total</span>
                <span className="font-mono text-[15px] font-semibold">
                  R$ 79,80
                </span>
              </div>
              <div
                className="mt-1 flex items-center gap-2.5 rounded-[12px] px-3.5 py-3"
                style={{ background: "var(--fx-accent-bg)" }}
              >
                <img
                  src="/fluxa-points-coin.png"
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain"
                />
                <span
                  className="text-[13px] font-bold"
                  style={{ color: "#8a5710" }}
                >
                  Você vai ganhar +80 pts nessa compra
                </span>
              </div>
              <div className="mt-1 flex h-11 items-center justify-center rounded-full bg-fluxa-red text-[14px] font-semibold text-white">
                Finalizar pedido
              </div>
            </div>
            <p className="mt-3.5 text-[12px] text-white/50">
              O cliente vê o saldo crescer antes de finalizar — recompensa deixa
              de ser promessa vaga.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {BLOCKS.map((b) => (
            <div
              key={b.title}
              className="rounded-[18px] border border-white/[0.1] bg-white/[0.05] p-7"
            >
              <h3 className="text-[18px] font-bold tracking-[-0.02em]">
                {b.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-white/70 text-pretty">
                {b.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-[44rem] text-[clamp(17px,1.5vw,22px)] font-semibold leading-[1.4] tracking-[-0.02em] text-balance">
          A Fluxa não distribui o seu cliente pra rede. A Fluxa te dá a máquina
          de reter o cliente que já é seu.
        </p>
      </div>
    </section>
  );
}

const BLOCKS = [
  {
    title: "Fidelidade que o cliente enxerga",
    body: "Cardápio, sacola e checkout mostram quantos pontos a compra rende. O cliente sabe que está acumulando — a cada pedido, em número visível.",
  },
  {
    title: "Recompensa desenhada com você",
    body: "Item grátis a cada X pontos, desconto na pizza grande, frete grátis pro cliente Ouro, sobremesa no aniversário. Você desenha, o consultor configura, o resgate acontece no carrinho.",
  },
  {
    title: "Cliente que volta é ativo permanente",
    body: "Cada ponto acumulado é motivo pra voltar — e ele não gasta essa recompensa no concorrente. É receita recorrente sem cupom novo, sem anúncio novo.",
  },
];
