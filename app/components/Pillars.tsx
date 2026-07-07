const pillars = [
  {
    n: "01",
    title: "Aquisição",
    body: "Tráfego pago inteligente em Meta e Google Ads focado em quem realmente tem fome agora.",
    icon: "/food-pizza.png",
    wide: true,
    dark: false,
  },
  {
    n: "02",
    title: "Fluxa Kitchen",
    body: "Gestão operacional simplificada para máxima eficiência da sua cozinha.",
    icon: "/food-burger.png",
    wide: false,
    dark: false,
  },
  {
    n: "03",
    title: "Conversão",
    body: "Cardápios digitais otimizados para aumentar o ticket médio automaticamente.",
    icon: "/food-fries.png",
    wide: false,
    dark: false,
  },
  {
    n: "04",
    title: "Fluxa Points & Database",
    body: "Retenção ativa. Sua base de dados é sua maior riqueza. Fidelize e venda novamente.",
    icon: "/food-donut.png",
    wide: true,
    dark: true,
  },
  {
    n: "05",
    title: "Comunidade",
    body: "Engajamento real com consumidores apaixonados pela sua marca.",
    icon: "/food-drink.png",
    wide: false,
    dark: false,
  },
];

export function Pillars() {
  return (
    <section
      id="pilares"
      className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-40"
    >
      <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Estrutura 360º
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-6xl">
            Os 5 Pilares do Ecossistema
          </h2>
        </div>
        <p className="max-w-md text-lg font-medium italic text-on-surface-variant md:text-right md:text-xl">
          &ldquo;O Marketing saiu da Maximização do Lucro em cada transação
          para Maximização do Lucro em cada Relacionamento.&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <PillarCard key={p.n} {...p} />
        ))}
      </div>
    </section>
  );
}

function PillarCard({
  n,
  title,
  body,
  icon,
  wide,
  dark,
}: {
  n: string;
  title: string;
  body: string;
  icon: string;
  wide: boolean;
  dark: boolean;
}) {
  const wideCls = wide ? "md:col-span-2 lg:col-span-2" : "";

  if (dark) {
    return (
      <div
        className={`${wideCls} flex flex-col items-start rounded-[2.5rem] bg-on-surface p-10 text-white shadow-2xl`}
      >
        <div className="icon-3d-slot mb-8 h-32 w-32 rounded-full">
          <img src={icon} alt="" width={128} height={128} />
        </div>
        <span className="mb-2 text-sm font-bold text-white/50">{n}</span>
        <h4 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h4>
        <p className="max-w-lg text-lg leading-relaxed text-white/70">
          {body}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${wideCls} glass-card flex flex-col items-start rounded-[2.5rem] p-10`}
    >
      <div className="icon-3d-slot mb-8 h-32 w-32 rounded-full">
        <img src={icon} alt="" width={128} height={128} />
      </div>
      <span className="mb-2 text-sm font-bold text-on-surface-variant">
        {n}
      </span>
      <h4
        className={
          "mb-4 font-bold tracking-tight text-on-surface " +
          (wide ? "text-3xl" : "text-2xl")
        }
      >
        {title}
      </h4>
      <p
        className={
          "leading-relaxed text-on-surface-variant " +
          (wide ? "max-w-lg text-lg" : "")
        }
      >
        {body}
      </p>
    </div>
  );
}
