export function DualAudience() {
  return (
    <section
      id="diferencial"
      className="border-t border-carvao/8 bg-massa-cream"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">Diferencial</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-[1.1] text-carvao md:text-5xl">
            O poder da dupla audiência.
          </h2>
          <p className="mt-5 text-base text-carvao/60 md:text-lg">
            Não fazemos conteúdo só para o restaurante. Trabalhamos os dois
            lados do balcão — é aí que a rede começa a girar.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-carvao/10 bg-massa-cream p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-fluxa-red">
              Para o consumidor
            </p>
            <h3 className="font-display mt-4 text-2xl font-bold leading-tight text-carvao md:text-3xl">
              Fluxa-Lovers
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-carvao/60">
              Educamos o público sobre os benefícios de pedir em parceiros
              Fluxa. Cada consumidor que entra na comunidade vira demanda
              qualificada para todos os parceiros.
            </p>
          </article>

          <article className="rounded-2xl border border-carvao/10 bg-massa-cream p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-fluxa-red">
              Para o restaurante
            </p>
            <h3 className="font-display mt-4 text-2xl font-bold leading-tight text-carvao md:text-3xl">
              Exclusividade de praça
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-carvao/60">
              Poucos parceiros por região. Posicionamento único, sem competir
              com o vizinho pelo mesmo atendimento e a mesma verba.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
