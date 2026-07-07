export function FluxaFoods() {
  return (
    <section
      id="fluxa-foods"
      className="relative overflow-hidden bg-massa-cream"
    >
      <div
        aria-hidden="true"
        className="checker-cream absolute inset-x-0 bottom-0 h-24 opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-6 text-fluxa-red">Um produto Fluxa</p>
            <h2 className="font-display text-5xl uppercase leading-[0.92] text-carvao md:text-8xl">
              Fluxa<br />
              <span className="text-fluxa-red">Foods.</span>
            </h2>
            <p
              className="mt-6 max-w-md text-lg text-carvao/70"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              O combo{" "}
              <strong className="font-semibold text-carvao">
                Fluxa Kitchen + Fluxa Cardápio
              </strong>
              . A stack de operação e conversão que faz o restaurante rodar sem
              caos e vender mais em cada pedido.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-carvao px-7 py-4 text-base font-semibold text-massa-cream transition hover:bg-fluxa-red"
                style={{ fontFamily: "var(--font-sans)" }}
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
                style={{ fontFamily: "var(--font-sans)" }}
              >
                flxa.space
              </a>
            </div>
          </div>

          {/* Painel visual */}
          <div className="relative">
            {/* Sticker girando */}
            <div className="pointer-events-none absolute -left-4 -top-8 z-10 md:-left-10 md:-top-12">
              <div className="sticker h-28 w-28 rotate-[-10deg] md:h-32 md:w-32">
                <div className="text-center leading-tight">
                  <div className="text-[0.6rem] uppercase tracking-widest">
                    Combo
                  </div>
                  <div className="font-display text-2xl md:text-3xl">2x1</div>
                  <div className="text-[0.6rem] uppercase tracking-widest">
                    stack
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border-2 border-carvao/10 bg-carvao p-8 text-massa-cream shadow-[0_30px_80px_-40px_rgba(26,14,14,0.6)] md:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-fluxa-red/40 blur-3xl"
              />

              <div className="relative grid gap-4 sm:grid-cols-2">
                <ProductCard
                  slot="kitchen-mockup.png"
                  name="Fluxa Kitchen"
                  desc="Gestão de cozinha em tempo real. Fim do caos no pico."
                />
                <ProductCard
                  slot="menu-mockup.png"
                  name="Fluxa Cardápio"
                  desc="Cardápio com engenharia de conversão. Ticket médio pra cima."
                />
              </div>

              <p
                className="relative mt-8 text-center text-xs uppercase tracking-[0.22em] text-brasa"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
              >
                Uma stack. Duas frentes. Um resultado.
              </p>
            </div>
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
    <div className="rounded-2xl border border-massa-cream/10 bg-carvao-soft p-5">
      <div className="asset-slot food-shadow aspect-[4/3] w-full overflow-hidden rounded-xl bg-massa-cream/5">
        <img src={`/${slot}`} alt={name} width={600} height={450} />
        <span className="asset-slot-label !text-massa-cream/50">/{slot}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl uppercase leading-[0.95] text-massa-cream">
        {name}
      </h3>
      <p
        className="mt-2 text-sm leading-relaxed text-massa-cream/65"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
      >
        {desc}
      </p>
    </div>
  );
}
