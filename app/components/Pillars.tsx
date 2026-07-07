const pillars = [
  {
    n: "01",
    title: "Aquisição",
    tag: "Meta Ads + Google",
    body: "Meta Ads para atenção e desejo na hora da fome. Google para capturar quem já está com fome e quer pedir agora.",
  },
  {
    n: "02",
    title: "Operação",
    tag: "Fluxa Kitchen",
    body: "App de gestão em tempo real integrado com o marketing — pico organizado, zero caos.",
  },
  {
    n: "03",
    title: "Conversão",
    tag: "Fluxa Cardápio",
    body: "Cardápio com engenharia de conversão para subir ticket médio e facilitar o checkout. Sem taxa de app terceiro.",
  },
  {
    n: "04",
    title: "Retenção",
    tag: "Fluxa Points",
    body: "Clientes anônimos viram indivíduos conhecidos. Fidelidade automática que constrói uma base de dados sua.",
  },
  {
    n: "05",
    title: "Comunidade",
    tag: "O mais importante",
    body: "Uma comunidade que engaja com a marca e vira embaixadora do restaurante. Efeito bola de neve.",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="border-t border-carvao/8 bg-massa-cream-2/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">Ecossistema</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-[1.1] text-carvao md:text-5xl">
            Os 5 pilares do ecossistema Fluxa.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="flex flex-col rounded-2xl border border-carvao/10 bg-massa-cream p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xs font-medium tracking-[0.16em] text-fluxa-red">
                  {p.n}
                </span>
                <span className="text-xs text-carvao/50">{p.tag}</span>
              </div>
              <h3 className="font-display mt-6 text-2xl font-bold leading-tight text-carvao">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-carvao/60">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* Pull quote discreto */}
        <div className="mt-16 max-w-4xl border-l border-fluxa-red/40 pl-6">
          <p className="font-display text-2xl font-medium leading-snug text-carvao md:text-3xl">
            Do lucro em cada transação para o lucro em cada relacionamento.
          </p>
          <p className="mt-3 text-sm text-carvao/50">
            Em vez de um cliente em cada indivíduo, um indivíduo em cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
