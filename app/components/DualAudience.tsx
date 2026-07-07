export function DualAudience() {
  return (
    <section className="relative overflow-hidden bg-massa-cream">
      {/* Faixa xadrez topo */}
      <div
        aria-hidden="true"
        className="checker-carvao h-6 w-full"
        style={{ opacity: 0.9 }}
      />

      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 text-fluxa-red">Diferencial estrutural</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-carvao md:text-7xl">
            O poder da{" "}
            <span className="text-fluxa-red">dupla audiência</span> e do efeito
            bola de neve.
          </h2>
          <p
            className="mt-6 max-w-2xl text-lg text-carvao/70"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            A gente não faz conteúdo só pro restaurante. Trabalha os dois lados
            do balcão — é aí que a rede começa a girar.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-[2rem] bg-carvao p-10 text-massa-cream md:p-14">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-fluxa-red/30 blur-3xl"
            />
            <div className="relative flex items-center gap-3">
              <span className="sticker sticker-red h-14 w-14 rotate-[-8deg]">
                01
              </span>
              <span
                className="rounded-full border border-massa-cream/25 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Para o consumidor
              </span>
            </div>
            <h3 className="relative mt-8 font-display text-5xl uppercase leading-[0.95] md:text-6xl">
              Fluxa-Lovers
            </h3>
            <p
              className="relative mt-5 text-base leading-relaxed text-massa-cream/75"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              A gente educa o público sobre os benefícios de pedir em parceiros
              Fluxa. Cada consumidor que entra na comunidade vira demanda
              qualificada pra todos os parceiros.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] bg-brasa p-10 text-carvao md:p-14">
            <div
              aria-hidden="true"
              className="checker-cream absolute -bottom-6 -right-6 h-40 w-40 rounded-tl-3xl opacity-30"
            />
            <div className="relative flex items-center gap-3">
              <span className="sticker !bg-carvao !text-massa-cream h-14 w-14 rotate-[-8deg]">
                02
              </span>
              <span
                className="rounded-full border border-carvao/30 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Para o restaurante
              </span>
            </div>
            <h3 className="relative mt-8 font-display text-5xl uppercase leading-[0.95] md:text-6xl">
              Exclusividade
            </h3>
            <p
              className="relative mt-5 text-base leading-relaxed text-carvao/80"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              Poucos parceiros por praça. Posicionamento único, sem competir com
              o vizinho pelo mesmo atendimento e a mesma verba.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
