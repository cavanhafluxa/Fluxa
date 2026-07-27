/**
 * Hero — split 2 colunas seguindo o handoff:
 *   Esquerda: chip + H1 (com "controle" sublinhado em vermelho) + lead
 *             + CTA primário + CTA fantasma + linha de reforço com check.
 *   Direita:  halo dourado + estabelecimento 3D (PNG transparente) com
 *             float animation. O crop mimeitiza o handoff.
 */
export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-radial-warm pb-[72px] pt-[132px]"
      aria-label="Fluxa, hero"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent_75%)]"
      />

      <div className="container-fluxa-wide relative z-10 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] md:gap-14">
        {/* Coluna esquerda — copy */}
        <div className="order-2 max-w-[40rem] md:order-1">
          <span className="chip-live">
            <span className="dot" />
            <span>Ecossistema Fluxa · Parceria de crescimento</span>
          </span>

          <h1 className="text-h1 mt-[22px] text-ink text-balance">
            Recupere o{" "}
            <span className="relative inline-block text-fluxa-red">
              controle
              <svg
                aria-hidden="true"
                viewBox="0 0 320 18"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-fluxa-red/45"
              >
                <path
                  d="M2 14 C 80 4, 220 4, 318 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            do seu restaurante.
          </h1>

          <p className="text-lead-lg mt-6 max-w-[34rem] text-on-surface-variant text-pretty">
            A cozinha vira caos no pico. As taxas comem sua margem. E você nem
            sabe quem comeu sua comida. A Fluxa não vende um app — devolve o
            controle pra suas mãos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a href="#parceria" className="btn-primary">
              Quero recuperar o controle
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#ecossistema" className="btn-ghost">
              Ver ecossistema
            </a>
          </div>

          <p className="mt-[22px] flex items-center gap-2.5 text-[13.5px] text-on-surface-muted">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-fluxa-success)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            Consultor Fluxa responde em até 5 minutos, no seu WhatsApp. Humano.
          </p>
        </div>

        {/* Coluna direita — halo + estabelecimento 3D */}
        <div className="relative order-1 min-w-0 md:order-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[6%_4%] z-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,160,61,0.35),rgba(242,160,61,0.12)_42%,transparent_70%)]"
          />
          <div
            className="relative z-10 w-full overflow-hidden"
            style={{ aspectRatio: "710 / 610" }}
          >
            <img
              src="/hero-estabelecimento.png"
              alt="Estabelecimento com o ecossistema Fluxa"
              className="hero-float pointer-events-none absolute h-auto max-w-none select-none"
              style={{
                left: "-157.7%",
                top: "-37.7%",
                width: "270.4%",
                filter: "drop-shadow(0 30px 60px rgba(26,14,14,0.16))",
              }}
              draggable={false}
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * OQueMuda — a "Dor identitária" pinada. Sticky top-0 h-100svh coberta
 * pela seção Problem (que vem em seguida com z-10 + bg opaco).
 * Conteúdo: H2 grande com "não para ser empregado" em vermelho,
 * pergunta + 3 bullets com barra lateral vermelha.
 */
export function OQueMuda() {
  return (
    <section className="sticky top-0 z-0 flex h-[100svh] items-center overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots opacity-[0.45] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_45%,black,transparent_75%)]"
      />
      <div className="container-fluxa relative z-10">
        <h2 className="text-h2-lg max-w-[22em] text-ink text-balance">
          Você abriu um restaurante para ser dono dele,{" "}
          <span className="text-fluxa-red">não para ser empregado</span>.
        </h2>
        <p className="mt-7 text-[clamp(17px,1.5vw,21px)] font-semibold text-ink">
          Quem realmente manda no seu negócio hoje?
        </p>
        <ul className="mt-5 grid max-w-[46rem] gap-3.5">
          {[
            "O aplicativo que te empurra pra promoção só pra você não perder posição no ranking.",
            "A agência que cobra R$ 3.000 por post e mede sucesso em curtida.",
            "Ou o marketplace que fica com 27% de cada pedido e te chama de parceiro.",
          ].map((t) => (
            <li
              key={t}
              className="flex gap-3.5 text-[clamp(15px,1.2vw,17.5px)] leading-[1.55] text-on-surface-variant"
            >
              <span
                aria-hidden="true"
                className="w-[3px] shrink-0 rounded-full bg-fluxa-red/35"
              />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-[40rem] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-on-surface-variant text-pretty">
          Se alguma dessas te fisgou, o controle do seu restaurante não está
          com você. Está com um sistema que cresce à sua custa.
        </p>
      </div>
    </section>
  );
}
