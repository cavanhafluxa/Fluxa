/**
 * "Duas portas" — 2 colunas:
 *   A — Fluxa (Ecossistema completo): border-2 accent + badge RECOMENDADO
 *       flutuando, 4 items com check vermelho, CTA vermelho.
 *   B — Fluxa Foods (SaaS avulso): fundo branco (o lockup tem "Foods" em
 *       creme — sobre cream desaparece), border strong, heading é o lockup
 *       PNG. 3 items com check cinza. CTA cream → fluxafoods.com.br.
 */
export function FluxaFoods() {
  return (
    <section className="fx-inout bg-surface py-[104px]">
      <div className="container-fluxa">
        <h2 className="text-h2 mb-4 text-ink">Duas formas de estar na Fluxa.</h2>
        <p className="text-lead mb-12 max-w-[40rem] text-on-surface-variant">
          Escolha pelo que você precisa hoje — não pelo tamanho do plano.
        </p>

        <div className="grid items-start gap-7 md:grid-cols-2">
          {/* Coluna A — Fluxa (recomendado) */}
          <div
            className="relative rounded-[18px] bg-surface p-10"
            style={{
              border: "2px solid var(--fx-accent)",
              boxShadow: "0 12px 40px -16px rgba(242,160,61,0.4)",
            }}
          >
            <span
              className="absolute -top-[13px] left-10 inline-flex h-[26px] items-center rounded-full px-3.5 text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ background: "var(--fx-accent)", color: "#4a2c05" }}
            >
              Recomendado
            </span>
            <h3 className="text-[26px] font-bold tracking-[-0.025em] text-ink">
              Fluxa
            </h3>
            <p className="mt-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-on-surface-muted">
              Ecossistema completo
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] text-on-surface-variant">
              Pra restaurante que quer crescer e não quer aprender ferramenta.
            </p>
            <ul className="mt-6 grid gap-3.5">
              {[
                "Consultor humano configurando, otimizando e ajustando mês a mês.",
                "Sua marca dentro da rede Fluxa — impulso de tráfego, Fluxa Points, comunidade.",
                "Kitchen, Cardápio, Tráfego, Conteúdo, Consultoria e Cofre integrados.",
                "Modelo baseado no seu sucesso.",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-3 text-[15px] leading-[1.55] text-ink"
                >
                  <CheckIcon color="var(--color-fluxa-red)" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="#parceria"
              className="mt-8 inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-fluxa-red text-[15.5px] font-semibold text-white shadow-[0_1px_2px_rgba(213,4,49,0.24),0_12px_30px_-10px_rgba(213,4,49,0.42)] transition-colors hover:bg-fluxa-red-hover"
            >
              Quero ser parceiro Fluxa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Coluna B — Fluxa Foods */}
          <div className="rounded-[18px] border border-outline-strong bg-surface p-10">
            <img
              src="/fluxa-foods-lockup.png"
              alt="Fluxa Foods"
              className="block h-[34px] w-auto object-contain"
            />
            <p className="mt-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-on-surface-muted">
              SaaS avulso
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] text-on-surface-variant">
              Pra trailer, dark kitchen, food truck ou quem só quer a
              ferramenta.
            </p>
            <ul className="mt-6 grid gap-3.5">
              {[
                "Toda a tecnologia da Fluxa — Kitchen, Cardápio e Points.",
                "Mensalidade fixa, autosserviço, sem consultor.",
                "Sem exposição na rede — se você já tem canal próprio e só precisa do software, é aqui.",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-3 text-[15px] leading-[1.55] text-ink"
                >
                  <CheckIcon color="var(--fx-n-500)" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="https://fluxafoods.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-full border border-outline-strong bg-surface-cream text-[15.5px] font-semibold text-ink transition-colors hover:bg-[#f5f5f5]"
            >
              Quero só o Fluxa Foods
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17 17 7M17 7h-7M17 7v7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-[14.5px] text-on-surface-muted">
          Não sabe qual é o seu caso?{" "}
          <a href="#parceria" className="font-semibold text-fluxa-red">
            Fale com a gente
          </a>{" "}
          — a gente aponta o caminho certo, mesmo que não seja com a Fluxa.
        </p>
      </div>
    </section>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}
