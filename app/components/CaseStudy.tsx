/**
 * Case Lana's Burger — H2 grande + card cream com grid 1.3fr | 1fr:
 *   Esquerda: aspas vermelhas + depoimento + assinatura LB
 *   Direita:  3 mini-cards de KPI (+40% ticket / 4 semanas / Base própria)
 * Abaixo: label PARCEIRO FLUXA + pill Lana's Burger.
 */
export function CaseStudy() {
  return (
    <section id="case" className="fx-inout bg-surface py-[104px]">
      <div className="container-fluxa">
        <h2 className="text-h2 mb-12 max-w-[30em] text-ink">
          Restaurantes que já{" "}
          <span className="text-fluxa-red">recuperaram o controle</span>.
        </h2>

        <div className="grid items-center gap-12 rounded-[18px] bg-surface-cream p-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-fluxa-red/90"
              aria-hidden="true"
            >
              <path d="M9.5 4C6.5 5.8 4.6 8.9 4.6 12.6c0 3.3 2 5.4 4.5 5.4 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.3-1.6 1.6-3.3 3.3-4.4L9.5 4zm9 0c-3 1.8-4.9 4.9-4.9 8.6 0 3.3 2 5.4 4.5 5.4 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.3-1.6 1.6-3.3 3.3-4.4L18.5 4z" />
            </svg>
            <blockquote className="mt-5 text-[clamp(18px,1.7vw,25px)] font-medium leading-[1.45] tracking-[-0.02em] text-ink text-pretty">
              Eu passava o dia respondendo pedido no WhatsApp e imprimindo
              comanda no braço. O consultor Fluxa entrou, subiu meu cardápio
              bonitão, configurou impressora e treinou minha equipe. Em 4
              semanas o ticket médio subiu 40%, só por causa dos combos
              automáticos que a Fluxa desenhou. Hoje eu cozinho — a Fluxa cuida
              do resto.
            </blockquote>
            <div className="mt-8 flex items-center gap-3.5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-[15px] font-bold text-white">
                LB
              </span>
              <div>
                <p className="text-[14.5px] font-bold text-ink">
                  Lana's Burger
                </p>
                <p className="mt-0.5 text-[13px] text-on-surface-muted">
                  Lana's Burger · Gaspar/SC
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[18px] border border-outline bg-surface p-[26px]">
              <p className="font-mono text-[40px] font-semibold leading-none tracking-[-0.03em] text-fluxa-red">
                +40%
              </p>
              <p className="mt-2.5 text-[13.5px] font-semibold text-on-surface-variant">
                de ticket médio
              </p>
            </div>
            <div className="rounded-[18px] border border-outline bg-surface p-[26px]">
              <p className="font-mono text-[40px] font-semibold leading-none tracking-[-0.03em] text-ink">
                4
              </p>
              <p className="mt-2.5 text-[13.5px] font-semibold text-on-surface-variant">
                semanas até o resultado
              </p>
            </div>
            <div className="rounded-[18px] bg-ink p-[26px] text-white">
              <p className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em]">
                Base própria
              </p>
              <p className="mt-2.5 text-[13.5px] text-white/70">
                clientes com nome, telefone e histórico
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <span className="text-eyebrow text-on-surface-muted">
            Parceiro Fluxa
          </span>
          <span className="inline-flex h-[42px] items-center rounded-full border border-outline-strong px-[22px] text-[13px] font-bold uppercase tracking-[0.08em] text-ink">
            Lana's Burger
          </span>
        </div>
      </div>
    </section>
  );
}
