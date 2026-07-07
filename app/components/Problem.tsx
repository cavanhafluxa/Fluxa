const cards = [
  {
    icon: "/food-burger.png",
    title: "Apps de Delivery",
    body: "Altas taxas que corroem sua margem e o 'sequestro' de dados: você vende, mas não conhece seu cliente.",
    highlight: false,
  },
  {
    icon: "/food-fries.png",
    title: "Agências de Marketing",
    body: "Fees fixos altos e posts bonitos que não convertem em pedidos reais. Sem garantia de lucro ou dados estratégicos.",
    highlight: false,
  },
  {
    icon: "/food-drink.png",
    title: "A FLUXA",
    body: "O problema não é o seu restaurante. É o canal que você usa. Nós criamos a ponte direta entre seu produto e o consumidor.",
    highlight: true,
  },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="bg-surface-variant/30 px-6 py-24 md:px-8 md:py-40"
    >
      <div className="mx-auto mb-16 max-w-7xl text-center md:mb-24">
        <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
          O caminho por onde seu lucro escapa todos os meses.
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  body,
  highlight,
}: {
  icon: string;
  title: string;
  body: string;
  highlight: boolean;
}) {
  return (
    <article
      className={
        highlight
          ? "rounded-[2.5rem] bg-on-surface p-10 text-white shadow-2xl md:-translate-y-4 md:p-12"
          : "rounded-[2.5rem] border border-black/[0.02] bg-surface p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:p-12"
      }
    >
      <div className="icon-3d-slot mb-8 h-24 w-24 rounded-full">
        <img src={icon} alt="" width={96} height={96} />
      </div>
      <h3
        className={
          "mb-4 text-2xl font-bold tracking-tight " +
          (highlight ? "text-white" : "text-on-surface")
        }
      >
        {title}
      </h3>
      <p
        className={
          "leading-relaxed " +
          (highlight ? "text-white/70" : "text-on-surface-variant")
        }
      >
        {body}
      </p>
    </article>
  );
}
