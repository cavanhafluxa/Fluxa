export function DualAudience() {
  return (
    <section className="relative overflow-hidden border-t border-carvao/10 bg-carvao text-massa-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-fluxa-red/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brasa/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 text-brasa">O diferencial estrutural</p>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
            O poder da{" "}
            <em className="not-italic text-fluxa-red">Dupla Audiência</em> e do
            efeito bola de neve.
          </h2>
          <p className="mt-6 text-lg text-massa-cream/70">
            Não fazemos conteúdo só para o restaurante. Trabalhamos os dois
            lados do balcão ao mesmo tempo — e é aí que a rede começa a girar.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-massa-cream/10 bg-carvao-soft p-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fluxa-red/15 font-display text-lg font-bold text-fluxa-red">
                01
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-massa-cream/60">
                Para o consumidor
              </span>
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold text-massa-cream md:text-4xl">
              Fluxa-Lovers
            </h3>
            <p className="mt-4 text-base leading-relaxed text-massa-cream/70">
              Educamos o público sobre os benefícios de pedir em parceiros
              Fluxa. Cada consumidor que entra na comunidade vira demanda
              qualificada para todos os parceiros.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-massa-cream/10 bg-carvao-soft p-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brasa/20 font-display text-lg font-bold text-brasa">
                02
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-massa-cream/60">
                Para o restaurante
              </span>
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold text-massa-cream md:text-4xl">
              Preferência & Exclusividade
            </h3>
            <p className="mt-4 text-base leading-relaxed text-massa-cream/70">
              Trabalhamos com poucos parceiros por praça. Isso significa
              posicionamento único, sem competir com o vizinho pelo mesmo
              atendimento e a mesma verba.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
