const cards = [
  {
    n: "01",
    tag: "Delivery",
    title: "Apps de Delivery",
    body: "Cobram altas taxas, sequestram os dados dos seus clientes e você nunca sabe quem realmente comprou de você.",
    tone: "neutral" as const,
  },
  {
    n: "02",
    tag: "Agência",
    title: "Agências de Marketing",
    body: "Fees fixos altos pra postar fotos que não garantem pedidos. Focam na fama da própria agência, não no seu lucro.",
    tone: "neutral" as const,
  },
  {
    n: "03",
    tag: "Fluxa",
    title: "A Fluxa",
    body: "“O problema não é o seu restaurante. É o canal que você usa.” A gente traz a demanda — mas devolve o cliente pra você.",
    tone: "fluxa" as const,
  },
];

export function Problem() {
  return (
    <section id="problema" className="relative bg-massa-cream">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 text-fluxa-red">O diagnóstico</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-carvao md:text-7xl">
            O caminho onde seu{" "}
            <span className="text-fluxa-red">lucro escapa</span>{" "}
            todos os meses.
          </h2>
          <p
            className="mt-6 max-w-2xl text-lg text-carvao/70"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            Você trabalha, entrega, atende. Mas no fim do mês boa parte do lucro
            fica com quem nunca cozinhou um prato.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.n} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  n,
  tag,
  title,
  body,
  tone,
}: {
  n: string;
  tag: string;
  title: string;
  body: string;
  tone: "neutral" | "fluxa";
}) {
  const isFluxa = tone === "fluxa";

  return (
    <article
      className={
        isFluxa
          ? "group relative flex flex-col overflow-hidden rounded-[2rem] bg-fluxa-red p-8 text-massa-cream shadow-[0_30px_60px_-30px_rgba(214,32,31,0.6)] md:p-10"
          : "group relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-carvao/10 bg-massa-cream-2/40 p-8 md:p-10"
      }
    >
      {isFluxa && (
        <>
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brasa/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="checker-cream absolute -bottom-8 -right-8 h-32 w-32 rounded-tl-3xl opacity-40"
          />
        </>
      )}

      <div className="relative flex items-center justify-between">
        <span
          className={
            "sticker h-14 w-14 rotate-[-6deg] text-lg " +
            (isFluxa ? "sticker-red !bg-carvao !text-massa-cream" : "")
          }
        >
          {n}
        </span>
        <span
          className={
            "rounded-full px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] " +
            (isFluxa
              ? "border border-massa-cream/40 text-massa-cream"
              : "border border-carvao/20 text-carvao/70")
          }
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {tag}
        </span>
      </div>

      <h3
        className={
          "relative mt-8 font-display text-3xl uppercase leading-[0.95] md:text-4xl " +
          (isFluxa ? "text-massa-cream" : "text-carvao")
        }
      >
        {title}
      </h3>

      <p
        className={
          "relative mt-5 text-base leading-relaxed " +
          (isFluxa ? "text-massa-cream/85" : "text-carvao/70")
        }
        style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
      >
        {body}
      </p>

      {isFluxa && (
        <div className="relative mt-8 flex flex-wrap gap-2">
          <Chip>Aquisição</Chip>
          <Chip>Conversão</Chip>
          <Chip>Retenção</Chip>
        </div>
      )}
    </article>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full bg-carvao px-3 py-1 text-xs font-medium text-massa-cream"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {children}
    </span>
  );
}
