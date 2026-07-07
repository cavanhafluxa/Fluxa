export function FluxaFoods() {
  return (
    <section
      id="fluxa-foods"
      className="border-t border-carvao/8 bg-massa-cream-2/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Produto Fluxa</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.1] text-carvao md:text-5xl">
              Fluxa Foods.
            </h2>
            <p className="mt-5 max-w-md text-base text-carvao/60 md:text-lg">
              O combo{" "}
              <span className="text-carvao">
                Fluxa Kitchen + Fluxa Cardápio
              </span>
              . A stack de operação e conversão que faz o restaurante rodar sem
              caos e vender mais em cada pedido.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-carvao px-5 py-3 text-sm font-medium text-massa-cream transition hover:bg-fluxa-red"
              >
                Conhecer o Fluxa Foods
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-carvao/50 underline underline-offset-4 hover:text-carvao"
              >
                flxa.space
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ProductCard
              slot="kitchen-mockup.png"
              name="Fluxa Kitchen"
              desc="Gestão de cozinha em tempo real. Fim do caos no pico."
            />
            <ProductCard
              slot="menu-mockup.png"
              name="Fluxa Cardápio"
              desc="Cardápio com engenharia de conversão. Ticket médio para cima."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  slot,
  name,
  desc,
}: {
  slot: string;
  name: string;
  desc: string;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-carvao/10 bg-massa-cream p-5">
      <div className="asset-slot aspect-[4/3] w-full overflow-hidden rounded-xl">
        <img src={`/${slot}`} alt={name} width={600} height={450} />
        <span className="asset-slot-label">/{slot}</span>
      </div>
      <h3 className="font-display mt-5 text-lg font-bold text-carvao">
        {name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-carvao/60">{desc}</p>
    </article>
  );
}
