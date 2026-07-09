const stack = [
  {
    n: "01",
    title: "Fluxa Kitchen",
    body: "Um sistema que organiza sua cozinha como um relógio e acaba com o caos.",
    price: "R$ 800/mês",
    icon: "/icon-kitchens.svg",
    dark: false,
  },
  {
    n: "02",
    title: "Engenharia de Cardápio Digital",
    body: "Um vendedor silencioso que aumenta seu ticket médio automaticamente.",
    price: "R$ 500/mês",
    icon: "/icon-conversao.svg",
    dark: false,
  },
  {
    n: "03",
    title: "Gestão de Tráfego (Meta + Google)",
    body: "Especialistas dominando as pesquisas da sua cidade para atrair clientes prontos para comprar.",
    price: "R$ 2.500/mês",
    icon: "/icon-aquisicao.svg",
    dark: false,
  },
  {
    n: "04",
    title: "Assessoria de Conteúdo e Visual",
    body: "Conteúdos estratégicos e roteiros de Reels que geram desejo imediato.",
    price: "R$ 1.500/mês",
    icon: "/icon-comunidade.svg",
    dark: false,
  },
  {
    n: "05",
    title: "Consultoria Estratégica Mensal",
    body: "Sessões individuais com especialistas em marketing para ajustar seu lucro e escala.",
    price: "R$ 2.000/mês",
    icon: "/icon-consumidor.svg",
    dark: false,
  },
  {
    n: "06",
    title: "O “Cofre” (Database Marketing)",
    body: "A construção e gestão da sua base própria de clientes, para você nunca mais alugar audiência de terceiros.",
    price: "Inestimável",
    icon: "/fluxa-points.svg",
    dark: true,
  },
];

export function Pillars() {
  return (
    <section
      id="pilares"
      className="container-fluxa py-16 md:py-20 xl:py-24 2xl:py-28"
    >
      <div className="mb-12 max-w-3xl md:mb-16">
        <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl lg:text-5xl xl:text-[3.25rem] 2xl:text-[3.75rem]">
          A infraestrutura que grandes restaurantes levam anos para construir,
          disponível <span className="text-fluxa-red">hoje</span>.
        </h2>
        <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-on-surface-variant md:text-[1.1rem]">
          Se você contratasse separadamente tudo que o Ecossistema Fluxa
          entrega, este seria o seu custo mensal estimado:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((p) => (
          <StackCard key={p.n} {...p} />
        ))}
      </div>

      <p className="mt-10 text-center text-[0.95rem] font-medium text-on-surface-variant md:mt-14 md:text-[1.05rem]">
        Contratado separadamente: mais de{" "}
        <span className="font-bold text-ink">R$ 7.300 por mês</span>. Com a
        Fluxa: <span className="font-bold text-fluxa-red">um parceiro só</span>.
      </p>
    </section>
  );
}

function StackCard({
  n,
  title,
  body,
  price,
  icon,
  dark,
}: {
  n: string;
  title: string;
  body: string;
  price: string;
  icon: string;
  dark: boolean;
}) {
  if (dark) {
    return (
      <div className="reveal-on-view relative flex flex-col items-start overflow-hidden rounded-2xl bg-ink p-8 text-white shadow-lift md:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fluxa-red/25 blur-3xl"
        />
        <div className="relative flex w-full items-baseline gap-3">
          <span className="font-display text-4xl font-bold leading-none tracking-tight text-white/25 md:text-5xl">
            {n}
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>
        <div className="relative mt-6 h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
          <img
            src={icon}
            alt=""
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
        <h4 className="relative mt-6 font-display text-xl font-bold tracking-tight md:text-2xl">
          {title}
        </h4>
        <p className="relative mt-3 text-[0.95rem] leading-relaxed text-white/70">
          {body}
        </p>
        <p className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-fluxa-red px-4 py-1.5 text-[0.8rem] font-bold text-white">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Valor: {price}
        </p>
      </div>
    );
  }

  return (
    <div className="reveal-on-view flex flex-col items-start rounded-2xl border border-black/[0.06] bg-surface p-8 shadow-soft transition-transform duration-500 hover:-translate-y-0.5 md:p-8">
      <div className="flex w-full items-baseline gap-3">
        <span className="font-display text-4xl font-bold leading-none tracking-tight text-ink/15 md:text-5xl">
          {n}
        </span>
        <span className="h-px flex-1 bg-black/10" />
      </div>
      <div className="mt-6 h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
        <img
          src={icon}
          alt=""
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </div>
      <h4 className="mt-6 font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
        {title}
      </h4>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-on-surface-variant">
        {body}
      </p>
      <p className="mt-6 text-[0.8rem] font-bold text-on-surface-muted">
        Valor de mercado:{" "}
        <span className="text-fluxa-red">{price}</span>
      </p>
    </div>
  );
}
