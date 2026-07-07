import { TapeMarquee } from "./TapeMarquee";

const pillars = [
  {
    n: "01",
    title: "Aquisição",
    tag: "Meta Ads + Google",
    body: "Meta Ads pra atenção e desejo na hora da fome. Google pra capturar quem já tá com fome e quer pedir agora.",
  },
  {
    n: "02",
    title: "Operação",
    tag: "Fluxa Kitchen",
    body: "Acabou o “Pesadelo na Cozinha”. App de gestão em tempo real integrado com o marketing — pico organizado, zero caos.",
  },
  {
    n: "03",
    title: "Conversão",
    tag: "Fluxa Cardápio",
    body: "Cardápio com engenharia de conversão pra subir ticket médio e facilitar o checkout. Sem taxa de app terceiro.",
  },
  {
    n: "04",
    title: "Retenção",
    tag: "Fluxa Points + Database",
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
    <section id="pilares" className="relative bg-carvao text-massa-cream">
      <TapeMarquee
        variant="brasa"
        tilt={1.5}
        fast
        items={[
          "Aquisição",
          "Operação",
          "Conversão",
          "Retenção",
          "Comunidade",
          "Ecossistema Fluxa",
        ]}
        className="-mt-2"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 text-brasa">O ecossistema</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-7xl">
            Os <span className="text-brasa">5 pilares</span> do ecossistema
            Fluxa.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-massa-cream/10 bg-carvao-soft p-8 transition hover:-translate-y-1 hover:border-brasa/40 hover:shadow-[0_20px_50px_-25px_rgba(242,160,61,0.35)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="sticker h-14 w-14 rotate-[-8deg] text-base">
                  {p.n}
                </span>
                <span
                  className="rounded-full border border-massa-cream/20 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-massa-cream/70"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-8 font-display text-4xl uppercase leading-[0.95] text-massa-cream md:text-5xl">
                {p.title}
              </h3>
              <p
                className="mt-5 text-base leading-relaxed text-massa-cream/70"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
              >
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* Pull quote — Fluxa Red destaque */}
        <div className="mt-20 rounded-[2rem] bg-fluxa-red p-8 md:p-14">
          <p className="eyebrow mb-4 text-brasa">Mudança de eixo</p>
          <blockquote className="font-display text-3xl uppercase leading-[0.98] text-massa-cream md:text-5xl">
            Do lucro máximo em cada{" "}
            <span className="text-carvao">transação</span>
            <br />
            pro lucro máximo em cada{" "}
            <span className="text-brasa">relacionamento</span>.
          </blockquote>
          <p
            className="mt-6 max-w-2xl text-base text-massa-cream/80"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            Em vez de um cliente em cada indivíduo — um indivíduo em cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
