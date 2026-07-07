export function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      {/* Blob decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-fluxa-red/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-brasa/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pt-28 md:pb-32">
        <p className="eyebrow mb-8">Fluxa • Para restaurantes</p>

        <h1 className="font-display text-[2.5rem] font-black leading-[1.02] tracking-tight text-carvao md:text-[4.5rem] lg:text-[5.75rem]">
          Não só uma <em className="not-italic text-fluxa-red">Assessoria</em>.
          <br className="hidden md:block" /> O{" "}
          <em className="not-italic">Canal</em> que seu restaurante precisa
          estar.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-carvao/75 md:text-xl">
          Pare de pagar aluguel por clientes que deveriam ser seus. Unimos{" "}
          <span className="font-medium text-carvao">Marketing</span>,{" "}
          <span className="font-medium text-carvao">Tecnologia de Ponta</span> e
          uma <span className="font-medium text-carvao">Comunidade ativa</span>{" "}
          para construir o seu maior ativo: uma base própria de clientes que
          volta sempre.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#parceria"
            className="group inline-flex items-center gap-3 rounded-full bg-fluxa-red px-7 py-4 text-base font-semibold text-massa-cream shadow-[0_10px_30px_-10px_rgba(214,32,31,0.55)] transition hover:bg-fluxa-red-hover hover:shadow-[0_14px_36px_-10px_rgba(214,32,31,0.7)]"
          >
            Quero a Fluxa como parceira
            <span
              aria-hidden="true"
              className="transition group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <a
            href="#pilares"
            className="inline-flex items-center gap-2 rounded-full border border-carvao/20 px-6 py-4 text-base font-medium text-carvao transition hover:bg-carvao hover:text-massa-cream"
          >
            Ver o ecossistema
          </a>
        </div>

        {/* Stat strip */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-carvao/10 pt-10 md:grid-cols-4">
          <Stat kpi="0%" label="de taxa que segura seus dados" />
          <Stat kpi="+ ticket" label="com engenharia de conversão no cardápio" />
          <Stat kpi="1 base" label="de clientes própria, sua para sempre" />
          <Stat kpi="5min" label="para um especialista te chamar" />
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-bold text-carvao md:text-4xl">
        {kpi}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-carvao/60">{label}</p>
    </div>
  );
}
