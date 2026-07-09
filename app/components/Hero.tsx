"use client";

/**
 * Hero — split editorial 2 colunas:
 *   - Esquerda: copy (chip + headline + subhead + CTAs), centralizada vertical
 *   - Direita:  pizza flutuando, centralizada na coluna e puxada pra dentro
 *               (não sangra pra fora da tela)
 * Cabe em 100svh, respeita a nav sticky.
 */
export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-radial-warm"
      style={{ minHeight: "100svh" }}
      aria-label="Fluxa, hero"
    >
      {/* Fundo — grade de pontos suave */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-8 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:gap-4 md:px-8 md:py-16">
        {/* Coluna esquerda — copy */}
        <div className="anim-fade-up order-2 max-w-[36rem] md:order-1 md:max-w-[40rem]">
          <span className="chip-live">
            <span className="dot" />
            <span>Te entendemos</span>
          </span>

          <h1 className="font-display mt-5 text-display-1 text-ink">
            Você abriu um restaurante para ser{" "}
            <span className="relative inline-block">
              <span className="text-fluxa-red">dono</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 320 18"
                className="absolute -bottom-1 left-0 h-3 w-full text-fluxa-red/50"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14 C 80 4, 220 4, 318 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            dele, não para ser empregado.
          </h1>

          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-on-surface-variant md:text-[1.2rem]">
            A cozinha vira caos no pico, as taxas comem sua margem e você nem
            sabe quem comeu sua comida. Nós não vendemos um app: devolvemos o
            controle pra suas mãos.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
            <a href="#parceria" className="btn-primary">
              Quero recuperar o controle
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#pilares" className="btn-ghost">
              Ver ecossistema
            </a>
          </div>
        </div>

        {/* Coluna direita — pizza maior, centralizada e puxada bem pra esquerda */}
        <div className="relative order-1 flex items-center justify-center md:order-2 md:-ml-16 lg:-ml-28">
          {/* Halo dourado suave atrás pra dar profundidade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-[90%] w-[90%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,160,61,0.24),transparent_62%)]"
          />
          <img
            src="/pizza-bg.svg"
            alt=""
            className="hero-pizza-bg w-[82%] max-w-[480px] select-none object-contain md:w-full md:max-w-[620px]"
            draggable={false}
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * OQueMuda — seção do dashboard/mockup (o painel "pinado" da sobreposição).
 *
 * É `sticky top-0 z-0` com altura EXATA de 100svh: o conteúdo inteiro
 * (chip + headline + mockup do Kitchens) sempre cabe na tela, centralizado,
 * sem cortar. Fica pinado enquanto a seção Problem (sibling seguinte, z-10,
 * bg opaco) sobe por cima. O timing de "quanto tempo o mockup aparece sozinho
 * antes de ser coberto" é controlado pelo espaçador em page.tsx.
 */
export function OQueMuda() {
  return (
    <section className="sticky top-0 z-0 flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-surface px-6 py-8 md:px-8 md:py-12">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_35%,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <span className="chip-live">
          <span className="dot" />
          <span>Dashboard real do Kitchens</span>
        </span>

        <h3 className="font-display mt-5 max-w-3xl text-center text-display-3 text-ink md:mt-7">
          O que muda quando o cliente é{" "}
          <em className="not-italic text-fluxa-red">seu</em>.
        </h3>

        <div className="relative mt-7 w-full max-w-5xl md:mt-9">
          <div className="pointer-events-none absolute inset-x-8 -top-4 bottom-0 rounded-[2rem] bg-gradient-to-b from-black/5 to-transparent blur-2xl" />
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

/**
 * Recriação do Fluxa Kitchens Hub real (fluxakitchens.com.br/home).
 * Sidebar red + greeting + KPIs 2x2 + chart 7d + Lanas card + quick actions.
 */
function ProductPreview() {
  return (
    <div className="relative mx-auto overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white shadow-hero md:rounded-[1.75rem]">
      {/* Browser chrome */}
      <div className="flex items-center justify-between bg-surface-variant/70 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        </div>
        <div className="hidden items-center gap-2 rounded-md bg-white px-3 py-1 text-[0.68rem] font-medium text-on-surface-variant ring-1 ring-black/5 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-fluxa-red" />
          fluxakitchens.com.br / home
        </div>
        <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-on-surface-muted">
          Ao vivo
        </span>
      </div>

      {/* Dashboard body */}
      <div className="flex bg-white">
        <KitchensSidebar />

        <div className="min-w-0 flex-1 p-4 md:p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.35fr_1fr]">
            {/* Coluna esquerda: header + KPIs + chart */}
            <div className="min-w-0">
              <KitchensHeader />
              <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
                <KitchensKpi
                  label="FATURAMENTO HOJE"
                  value="R$ 1.847,00"
                  hint="27 pedidos entregues"
                  icon={<IconCash />}
                  tone="rose"
                />
                <KitchensKpi
                  label="PEDIDOS HOJE"
                  value="31"
                  hint="4 ativos agora"
                  icon={<IconReceipt />}
                  tone="amber"
                />
                <KitchensKpi
                  label="TICKET MÉDIO"
                  value="R$ 59,60"
                  hint="por pedido"
                  icon={<IconTag />}
                  tone="rose"
                />
                <KitchensKpi
                  label="MESAS OCUPADAS"
                  value="7/10"
                  hint="3 livres"
                  icon={<IconTable />}
                  tone="pink"
                />
              </div>
              <KitchensChart />
            </div>

            {/* Coluna direita: perfil do restaurante + toggle + actions */}
            <div className="min-w-0">
              <KitchensRestaurantCard />
              <div className="mt-3 flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2.5 ring-1 ring-emerald-100">
                <span className="text-[0.78rem] font-semibold text-emerald-800">
                  Loja aberta
                </span>
                <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500">
                  <span className="absolute right-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <KitchensAction label="Fazer pedido" icon={<IconPlus />} />
                <KitchensAction label="PDV" icon={<IconRegister />} />
                <KitchensAction label="Mesas" icon={<IconTable />} />
                <KitchensAction label="Cozinha" icon={<IconChef />} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior de status */}
      <div className="flex items-center gap-2 border-t border-black/5 bg-emerald-50/70 px-4 py-2">
        <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500 text-white">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12l4 4L19 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-[0.72rem] font-semibold text-emerald-800">
          Operação em dia
        </span>
        <span className="text-[0.72rem] text-emerald-800/60">
          nenhum pedido atrasado.
        </span>
      </div>
    </div>
  );
}

function KitchensSidebar() {
  return (
    <aside className="flex w-11 flex-col items-center gap-2 bg-fluxa-red py-3 md:w-14 md:py-4">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-fluxa-red md:h-9 md:w-9">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 3h12v3H10v4h6v3h-6v8H6V3z" />
        </svg>
      </span>
      <span className="mt-2 grid h-6 w-6 place-items-center rounded-md bg-white/25 text-white md:h-7 md:w-7">
        <IconHome />
      </span>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="grid h-6 w-6 place-items-center rounded-md text-white/70 md:h-7 md:w-7"
        >
          <span className="h-3 w-3 rounded-sm bg-white/25" />
        </span>
      ))}
      <span className="mt-auto grid h-7 w-7 place-items-center rounded-md bg-white/90 text-[0.65rem] font-bold text-fluxa-red ring-2 ring-white/20 md:h-8 md:w-8">
        CB
      </span>
    </aside>
  );
}

function KitchensHeader() {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="font-display text-xl font-bold leading-tight tracking-tight text-ink md:text-2xl">
          Bom dia, Marina!
        </p>
        <p className="mt-1 truncate text-[0.72rem] text-on-surface-variant md:text-[0.78rem]">
          quarta-feira, 8 de julho · Casa Brasa
        </p>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-white md:text-[0.65rem]">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        Loja aberta
      </span>
    </div>
  );
}

const KPI_TONES = {
  rose: "bg-rose-100 text-fluxa-red",
  amber: "bg-amber-100 text-amber-600",
  pink: "bg-pink-100 text-pink-500",
} as const;

function KitchensKpi({
  label,
  value,
  hint,
  icon,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  icon: React.ReactNode;
  tone: keyof typeof KPI_TONES;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white p-3 ring-1 ring-black/5">
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${KPI_TONES[tone]}`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-on-surface-muted md:text-[0.6rem]">
          {label}
        </p>
        <p className="mt-1 font-display text-base font-bold tracking-tight text-ink tabular-nums md:text-lg">
          {value}
        </p>
        <p className="mt-0.5 truncate text-[0.62rem] text-on-surface-variant">
          {hint}
        </p>
      </div>
    </div>
  );
}

function KitchensChart() {
  return (
    <div className="mt-3 rounded-xl bg-white p-3 ring-1 ring-black/5 md:p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[0.78rem] font-bold text-ink">Faturamento</p>
          <p className="mt-0.5 text-[0.62rem] text-on-surface-variant">
            Últimos 7 dias ·{" "}
            <span className="font-semibold text-ink">R$ 11.372,00</span>
          </p>
        </div>
        <div className="flex flex-col items-end gap-0.5 text-[0.58rem] font-medium">
          <span className="inline-flex items-center gap-1 text-fluxa-red">
            <span className="h-1.5 w-1.5 rounded-full bg-fluxa-red" />
            Esta semana
          </span>
          <span className="inline-flex items-center gap-1 text-on-surface-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-on-surface-muted" />
            Semana passada
          </span>
        </div>
      </div>

      <svg
        viewBox="0 0 320 80"
        className="mt-3 h-20 w-full"
        role="img"
        aria-label="Comparativo de faturamento semanal"
      >
        <defs>
          <linearGradient id="kFillRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d6201f" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#d6201f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="kFillGray" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Semana passada — gray curve peaking early */}
        <path
          d="M0,55 C 20,25 40,10 60,10 C 80,10 100,30 120,55 C 140,72 160,72 320,72"
          fill="url(#kFillGray)"
          stroke="none"
        />
        <path
          d="M0,55 C 20,25 40,10 60,10 C 80,10 100,30 120,55 C 140,72 160,72 320,72"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Esta semana — red curve peaking mid */}
        <path
          d="M0,72 C 60,72 120,72 180,52 C 210,42 220,50 240,58 C 260,66 300,72 320,72"
          fill="url(#kFillRed)"
          stroke="none"
        />
        <path
          d="M0,72 C 60,72 120,72 180,52 C 210,42 220,50 240,58 C 260,66 300,72 320,72"
          fill="none"
          stroke="#d6201f"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      <div className="mt-1 flex justify-between text-[0.55rem] font-medium uppercase tracking-widest text-on-surface-muted">
        {["qui", "sex", "sáb", "dom", "seg", "ter", "qua"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}

function KitchensRestaurantCard() {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 ring-1 ring-black/5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-fluxa-red to-fluxa-red-deep text-[0.85rem] font-bold text-white md:h-12 md:w-12">
        CB
      </span>
      <div className="min-w-0">
        <p className="truncate text-[0.8rem] font-bold text-ink">Casa Brasa</p>
        <div className="mt-0.5 flex items-center gap-2 text-[0.62rem] text-on-surface-variant">
          <span className="inline-flex items-center gap-0.5 text-amber-500">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            4,8
          </span>
          <span>·</span>
          <span>R$ 8,00 entrega</span>
        </div>
      </div>
    </div>
  );
}

function KitchensAction({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 ring-1 ring-black/5 transition-colors hover:bg-surface-warm"
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-fluxa-red text-white">
        {icon}
      </span>
      <span className="truncate text-[0.72rem] font-semibold text-ink">
        {label}
      </span>
    </button>
  );
}

/* ─── Ícones internos ─── */
function IconHome() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCash() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconReceipt() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 2h12v20l-3-2-3 2-3-2-3 2V2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconTag() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 12l-8 8-9-9V3h8l9 9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
    </svg>
  );
}
function IconTable() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 10h18M5 10v10M19 10v10M8 10V6a4 4 0 0 1 8 0v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconPlus() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconRegister() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="7"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 3h10v4H7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}
function IconChef() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 15a5 5 0 0 1-1-9.9A5 5 0 0 1 14 4a5 5 0 0 1 5 5.1A5 5 0 0 1 18 15v5H6v-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
