const pillars = [
  {
    n: "01",
    title: "Aquisição",
    tag: "Meta Ads + Google",
    body: "Usamos Meta Ads para gerar atenção e desejo bem na hora da fome, e dominamos o Google para capturar quem já está com fome e quer pedir agora.",
  },
  {
    n: "02",
    title: "Operação",
    tag: "Fluxa Kitchen",
    body: "Acabamos com o “Pesadelo na Cozinha”. Um app de gestão em tempo real integrado com seu Marketing que organiza os pedidos e elimina o caos nos dias de pico.",
  },
  {
    n: "03",
    title: "Conversão",
    tag: "Fluxa Cardápio",
    body: "Um sistema desenhado com engenharia de conversão para aumentar seu ticket médio e facilitar o checkout — sem as taxas dos apps terceiros.",
  },
  {
    n: "04",
    title: "Retenção",
    tag: "Fluxa Points & Database",
    body: "Transformamos clientes anônimos em indivíduos conhecidos. Com o sistema de fidelidade automático, seus clientes acumulam benefícios e você constrói uma base de dados valiosa.",
  },
  {
    n: "05",
    title: "Comunidade",
    tag: "O mais importante",
    body: "A construção de uma comunidade que engaja com a marca e torna-se embaixadora do restaurante. Efeito bola de neve.",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="relative border-t border-carvao/10">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">O ecossistema</p>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-carvao md:text-6xl">
            Os <em className="not-italic text-fluxa-red">5 Pilares</em> do
            Ecossistema Fluxa
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group relative overflow-hidden rounded-3xl border border-carvao/10 bg-massa-cream p-8 transition hover:-translate-y-1 hover:border-fluxa-red/30 hover:shadow-[0_20px_50px_-25px_rgba(122,15,15,0.35)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.18em] text-borgonha">
                  {p.n}
                </span>
                <span className="rounded-full border border-carvao/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-carvao/60">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold text-carvao">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-carvao/70">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* Pull quote */}
        <figure className="mx-auto mt-24 max-w-4xl border-l-4 border-fluxa-red pl-8">
          <blockquote className="font-display text-2xl font-medium leading-snug text-carvao md:text-4xl">
            O marketing saiu da{" "}
            <em className="not-italic text-carvao/50">
              “maximização do lucro em cada transação”
            </em>{" "}
            para a{" "}
            <em className="not-italic text-fluxa-red">
              maximização do lucro em cada relacionamento
            </em>
            .
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-borgonha">
            Em vez de um cliente em cada indivíduo — um indivíduo em cada
            cliente.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
