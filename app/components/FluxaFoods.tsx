export function FluxaFoods() {
  return (
    <section
      id="fluxa-foods"
      className="relative border-t border-carvao/10 bg-massa-cream"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-6">Um produto Fluxa</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-carvao md:text-6xl">
              Fluxa <em className="not-italic text-fluxa-red">Foods</em>
            </h2>
            <p className="mt-6 text-lg text-carvao/70">
              O conjunto{" "}
              <span className="font-semibold text-carvao">
                Fluxa Kitchen + Fluxa Cardápio
              </span>{" "}
              — a stack de operação e conversão que faz o restaurante rodar sem
              caos e vender mais em cada pedido.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-carvao px-7 py-4 text-base font-semibold text-massa-cream transition hover:bg-fluxa-red"
              >
                Conhecer o Fluxa Foods
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-carvao/60 underline underline-offset-4 hover:text-carvao"
              >
                flxa.space
              </a>
            </div>
          </div>

          {/* Card visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-carvao/10 bg-massa-cream-2 p-10 md:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fluxa-red/15 blur-3xl"
              />
              <div className="relative grid gap-6 sm:grid-cols-2">
                <ProductCard
                  name="Fluxa Kitchen"
                  desc="Gestão de cozinha em tempo real. Fim do caos no pico."
                />
                <ProductCard
                  name="Fluxa Cardápio"
                  desc="Cardápio com engenharia de conversão. Ticket médio pra cima."
                />
              </div>
              <p className="relative mt-8 font-mono text-xs uppercase tracking-[0.18em] text-borgonha">
                Uma stack. Duas frentes. Um resultado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-carvao/10 bg-massa-cream p-6">
      <h3 className="font-display text-xl font-bold text-carvao">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-carvao/65">{desc}</p>
    </div>
  );
}
