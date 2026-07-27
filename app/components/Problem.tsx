/**
 * "O custo de não fazer nada" — grid 1fr | 1.12fr:
 *   Esquerda: 3 loser cards empilhados (delivery apps + agências + cardápios genéricos)
 *   Direita:  1 winner card dominante (ink) com halo + KPIs Taxa/Dado/Ponte
 * Fundo cream. Aplica animação fade-in-out por seção (fx-inout).
 */
const LOSERS = [
  {
    icon: "/icon-marketplaces.svg",
    title: "Apps de delivery",
    body: "Taxa de até 30% por pedido. Se eles saírem do ar amanhã, você perde uma clientela que nunca foi sua. Isso não é parceria, é dependência.",
  },
  {
    icon: "/icon-agencias.svg",
    title: "Agências de marketing tradicionais",
    body: "Fee fixo alto, posts bonitos, zero controle sobre pedido, dado ou resultado. Você paga por presença online enquanto os números não mudam.",
  },
];

export function Problem() {
  return (
    <section
      id="custo"
      className="fx-inout relative z-10 bg-surface-cream py-[104px] shadow-[0_-24px_48px_-24px_rgba(26,14,14,0.14)]"
    >
      <div className="container-fluxa">
        <div className="mb-14 max-w-[44rem]">
          <h2 className="text-h2-lg text-ink">O custo de não fazer nada.</h2>
          <p className="text-lead mt-5 max-w-[38rem] text-on-surface-variant text-pretty">
            Hoje você aluga cliente. Todo mês, três atores comem sua margem — e
            no fim do ano, você trabalhou pra eles.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-[1fr_1.12fr] md:items-stretch">
          <div className="grid content-start gap-5">
            {LOSERS.map((c) => (
              <LoserCard key={c.title} {...c} />
            ))}

            {/* 3º card: cardápios genéricos, ícone Lucide em círculo vermelho */}
            <article className="flex items-start gap-5 rounded-[18px] border border-outline bg-surface p-7 shadow-sm-fx transition-transform duration-300 hover:-translate-y-0.5">
              <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-fluxa-red text-white">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="m9 9 -2 3 2 3M15 9l2 3-2 3" />
                </svg>
              </span>
              <div>
                <h3 className="text-[19px] font-bold leading-tight tracking-[-0.02em] text-ink">
                  Cardápios digitais genéricos
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-on-surface-variant text-pretty">
                  Vendem software e somem. Suporte por chat quando dá bug. Sua
                  marca desaparece dentro de uma plataforma neutra e você
                  aprende a operar sozinho — pagando por isso.
                </p>
              </div>
            </article>
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
    <article className="flex items-start gap-5 rounded-[18px] border border-outline bg-surface p-7 shadow-sm-fx transition-transform duration-300 hover:-translate-y-0.5">
      <img
        src={icon}
        alt=""
        width={58}
        height={58}
        className="h-[58px] w-[58px] shrink-0 rounded-full"
      />
      <div>
        <h3 className="text-[19px] font-bold leading-tight tracking-[-0.02em] text-ink">
          {title}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-on-surface-variant text-pretty">
          {body}
        </p>
      </div>
    </article>
  );
}

function WinnerCard() {
  return (
    <article className="relative flex flex-col justify-between overflow-hidden rounded-[18px] bg-ink p-11 text-white shadow-lift">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fluxa-red/[0.28] blur-3xl"
      />
      <div className="relative">
        <img
          src="/fluxa-carinha.png"
          alt="Fluxa"
          width={62}
          height={62}
          className="h-[62px] w-[62px] rounded-full object-cover"
        />
        <span className="mt-9 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-fluxa-red" />A Fluxa
        </span>
        <h3 className="mt-3.5 text-[clamp(26px,2.6vw,40px)] font-bold leading-[1.1] tracking-[-0.03em]">
          O problema não é sua comida.{" "}
          <span className="text-fluxa-pink-ink">É o canal.</span>
        </h3>
        <p className="mt-5 max-w-[30rem] text-[16.5px] leading-[1.6] text-white/75 text-pretty">
          Você merece um ativo que seja seu: uma base de clientes que te conhece
          pelo nome e volta porque gosta da sua marca — não por causa de cupom.
        </p>
      </div>
      <div className="relative mt-12 grid grid-cols-3 gap-4 border-t border-white/[0.12] pt-6">
        <MiniKpi label="Taxa" value="0%" mono />
        <MiniKpi label="Dado" value="Seu" />
        <MiniKpi label="Ponte" value="Direta" />
      </div>
    </article>
  );
}

function MiniKpi({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
      <p
        className={
          "mt-1.5 text-[26px] font-semibold tracking-[-0.02em] " +
          (mono ? "font-mono" : "font-bold")
        }
      >
        {value}
      </p>
    </div>
  );
}
