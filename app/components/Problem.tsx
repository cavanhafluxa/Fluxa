const losers = [
  {
    icon: "/icon-marketplaces.svg",
    title: "Apps de Delivery",
    body: "Taxas de até 30% por pedido. Se eles saírem do ar amanhã, você perde “sua” clientela. Isso não é parceria, é dependência.",
  },
  {
    icon: "/icon-agencias.svg",
    title: "Agências de Marketing",
    body: "Fee fixo alto, posts bonitos, zero controle sobre pedido, dado ou resultado real.",
  },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="sticky top-0 z-10 min-h-[100svh] bg-surface-warm px-6 py-20 shadow-[0_-24px_48px_-24px_rgba(10,10,11,0.12)] md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl md:mb-20">
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
            O custo de não fazer nada.
          </h2>
          <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-on-surface-variant md:text-[1.1rem]">
            Hoje, você “aluga” seus clientes de plataformas que cobram
            taxas por pedido. E no fim, você não sabe nem quem comprou de você.
          </p>
        </div>

        {/*
          Layout assimétrico:
          esquerda = 2 "loser" cards empilhados (Apps + Agências)
          direita  = 1 card FLUXA dominante, mais alto e escuro
        */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.15fr] md:gap-6 lg:gap-8">
          <div className="flex flex-col gap-5 md:gap-6">
            {losers.map((c) => (
              <LoserCard key={c.title} {...c} />
            ))}
          </div>

          <WinnerCard />
        </div>
      </div>
    </section>
  );
}

function LoserCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <article className="reveal-on-view flex flex-1 items-start gap-5 rounded-2xl border border-black/[0.06] bg-surface p-6 shadow-soft transition-transform duration-500 hover:-translate-y-0.5 md:gap-6 md:p-8">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full md:h-16 md:w-16">
        <img
          src={icon}
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold tracking-tight text-ink md:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-on-surface-variant">
          {body}
        </p>
      </div>
    </article>
  );
}

function WinnerCard() {
  return (
    <article className="reveal-on-view relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink p-8 text-white shadow-lift md:p-10 lg:p-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fluxa-red/25 blur-3xl"
      />

      <div className="relative">
        <div className="h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
          <img
            src="/fluxa-logo.svg"
            alt=""
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <span className="mt-8 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-fluxa-red" />
          A Fluxa
        </span>

        <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-[2.35rem]">
          O problema não é sua comida.{" "}
          <span className="text-fluxa-red">É o canal.</span>
        </h3>

        <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-white/75 md:text-[1.05rem]">
          Você merece um ativo que seja seu: uma base de clientes que te
          conhece pelo nome e volta porque gosta da sua marca. Não por causa de
          cupom.
        </p>
      </div>

      <div className="relative mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
        <MiniKpi label="Taxa" value="0%" />
        <MiniKpi label="Dado" value="Seu" />
        <MiniKpi label="Ponte" value="Direta" />
      </div>
    </article>
  );
}

function MiniKpi({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
      <p className="mt-1.5 font-display text-xl font-bold tracking-tight text-white md:text-2xl">
        {value}
      </p>
    </div>
  );
}
