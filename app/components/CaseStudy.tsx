export function CaseStudy() {
  return (
    <section id="case" className="container-fluxa py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="reveal-on-view relative grid grid-cols-1 gap-10 overflow-hidden rounded-2xl bg-surface-warm p-8 shadow-soft md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12 md:p-10 lg:p-14">
        {/* Conteúdo */}
        <div>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-fluxa-red/20">
              <img
                src="/logo-lanas.svg"
                alt=""
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-on-surface-muted">
                Case de sucesso
              </p>
              <p className="mt-0.5 text-[0.95rem] font-bold text-ink">
                Lanas Burguer
              </p>
            </div>
          </div>

          <h2 className="font-display mt-8 text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl lg:text-5xl xl:text-[3.25rem] 2xl:text-[3.5rem]">
            Histórias de quem{" "}
            <span className="text-fluxa-red">já passou por isso</span>.
          </h2>

          <p className="mt-5 text-[1.05rem] font-semibold text-ink md:text-[1.15rem]">
            O Lanas Burguer decidiu que era hora de mudar o jogo.
          </p>

          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-on-surface-variant md:text-[1.1rem]">
            Eles também estavam cansados das taxas e do anonimato dos clientes.
            Hoje, a cozinha parou de travar, o restaurante não fecha “do nada”,
            o faturamento subiu e eles são donos da própria audiência.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            <Kpi label="Cozinha travando no pico" value="Zero" />
            <Kpi label="Faturamento" value="Em alta" />
            <Kpi label="Audiência" value="Própria" />
          </div>
        </div>

        {/* Foto do produto */}
        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lift">
          <img
            src="/foto-lanas.svg"
            alt="Lanas Burguer"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-[0.7rem] font-medium leading-tight text-on-surface-variant md:text-[0.75rem]">
        {label}
      </p>
    </div>
  );
}
