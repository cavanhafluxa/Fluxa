const cards = [
  {
    tag: "Delivery",
    title: "Apps de Delivery",
    body: "Cobram altas taxas, sequestram os dados dos seus clientes e você nunca sabe quem realmente comprou de você.",
    highlight: false,
  },
  {
    tag: "Agência",
    title: "Agências de Marketing",
    body: "Fees fixos altos para postar fotos que não garantem pedidos. Focam na fama da própria agência, não no seu lucro.",
    highlight: false,
  },
  {
    tag: "Fluxa",
    title: "A Fluxa",
    body: "“O problema não é o seu restaurante. É o canal que você usa.” A gente traz a demanda — mas devolve o cliente para você.",
    highlight: true,
  },
];

export function Problem() {
  return (
    <section id="problema" className="border-t border-carvao/8 bg-massa-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">Diagnóstico</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-[1.1] text-carvao md:text-5xl">
            O caminho onde seu lucro escapa todos os meses.
          </h2>
          <p className="mt-5 text-base text-carvao/60 md:text-lg">
            Você trabalha, entrega, atende. Mas no fim do mês boa parte do
            lucro fica com quem nunca cozinhou um prato.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  tag,
  title,
  body,
  highlight,
}: {
  tag: string;
  title: string;
  body: string;
  highlight: boolean;
}) {
  return (
    <article
      className={
        highlight
          ? "flex flex-col rounded-2xl bg-carvao p-8 text-massa-cream"
          : "flex flex-col rounded-2xl border border-carvao/10 bg-massa-cream p-8"
      }
    >
      <p
        className={
          "text-xs uppercase tracking-[0.16em] " +
          (highlight ? "text-brasa" : "text-fluxa-red")
        }
      >
        {tag}
      </p>
      <h3
        className={
          "font-display mt-4 text-2xl font-bold leading-tight " +
          (highlight ? "text-massa-cream" : "text-carvao")
        }
      >
        {title}
      </h3>
      <p
        className={
          "mt-3 text-[0.95rem] leading-relaxed " +
          (highlight ? "text-massa-cream/70" : "text-carvao/60")
        }
      >
        {body}
      </p>
    </article>
  );
}
