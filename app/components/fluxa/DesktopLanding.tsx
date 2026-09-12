import { Cta } from "./Cta";
import { FoodShowcase } from "./FoodShowcase";
import { LeadForm } from "./LeadForm";
import { Icon, InstagramIcon } from "./ds";
import {
  CASE_RESULTS,
  DIAGNOSTIC,
  EXECUTION,
  FOODS_URL,
  JOURNEY,
  LANAS_INSTAGRAM,
  METHOD,
  WA_DIAGNOSTICO,
  WA_PARCERIA,
  waLink,
} from "./content";

/**
 * Grids de duas colunas que colapsam sozinhos quando a coluna não cabe
 * mais na largura mínima. As strings são literais de propósito: o Tailwind
 * varre o código-fonte por nomes de classe, então uma classe montada por
 * interpolação nunca chega a ser gerada.
 */
const COL_320 =
  "grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]";
const COL_340 =
  "grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]";
const COL_380 =
  "grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]";
const COL_400 =
  "grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]";
const COL_420 =
  "grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]";

function Label({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "on-dark";
}) {
  return (
    <span
      className={`fx-label ${tone === "on-dark" ? "text-rosa-cinza" : "text-vinho-4"}`}
    >
      {children}
    </span>
  );
}

/**
 * Composição de desktop (≥768px) — as 11 seções da LP na ordem da
 * narrativa: problema → reframe → jornada → diagnóstico → método → prova
 * → execução → produto → parceria → contato.
 */
export function DesktopLanding() {
  return (
    <main id="top" className="fx-desktop">
      {/* ── 01 Hero ──────────────────────────────────────────────────── */}
      <section
        aria-label="Fluxa — marketing pela jornada do cliente"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-creme pb-[72px] pt-[140px] text-vinho"
      >
        <div
          className={`container-fluxa-wide relative z-10 ${COL_420} items-center gap-10`}
        >
          <div className="flex max-w-[640px] flex-col gap-7">
            <Label>Parceria de crescimento para restaurantes.</Label>
            <h1 className="m-0 font-urbanist text-[clamp(48px,7.2vw,108px)] font-extrabold leading-[0.92] tracking-[-0.03em] text-balance">
              MARKETING PELA JORNADA DO CLIENTE.
            </h1>
            <p className="m-0 max-w-[38ch] text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-vinho-3 text-pretty">
              Estruturamos restaurantes para crescer do primeiro contato à
              próxima compra.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Cta href={waLink(WA_DIAGNOSTICO)} variant="accent" external>
                Quero um diagnóstico da minha jornada
              </Cta>
            </div>
            <div className="flex flex-wrap gap-2.5 font-manrope text-[13px] font-semibold leading-none text-vinho-4">
              {JOURNEY.map((s) => (
                <span key={s.title}>{s.title}.</span>
              ))}
            </div>
          </div>

          {/* Restaurante 3D — mantido da LP anterior. O halo fica atrás. */}
          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[8%_6%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,104,59,0.28),rgba(233,104,59,0.08)_45%,transparent_70%)]"
            />
            <div
              data-parallax="-46"
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "710 / 610" }}
            >
              {/* O PNG tem o restaurante numa região deslocada da arte, então
                  o recorte é assimétrico. Valores empíricos deste asset. */}
              <img
                src="/hero-estabelecimento.png"
                alt="Restaurante em 3D"
                draggable={false}
                fetchPriority="high"
                className="fx-float pointer-events-none absolute h-auto max-w-none select-none"
                style={{ left: "-157.7%", top: "-37.7%", width: "270.4%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 O problema ────────────────────────────────────────────── */}
      <section id="problema" className="fx-section bg-vinho text-creme">
        <div className={`container-fluxa fx-rise ${COL_380} items-end gap-16`}>
          <div className="flex flex-col gap-1.5">
            <Label tone="on-dark">O problema</Label>
            <h2 className="mb-5 mt-7 font-urbanist text-[clamp(44px,6vw,88px)] font-extrabold leading-[0.92] tracking-[-0.03em]">
              Venda cai.
            </h2>
            {["Posta.", "Anuncia.", "Faz promoção.", "Melhora."].map((t) => (
              <p
                key={t}
                className="m-0 font-urbanist text-[clamp(26px,3vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-rosa-cinza"
              >
                {t}
              </p>
            ))}
            <p className="m-0 font-urbanist text-[clamp(26px,3vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-creme">
              Para.
            </p>
          </div>
          {/* A margem inferior ocupa o lugar do `top:-96px` do protótipo:
              mesmo resultado visual, sem tirar o bloco do fluxo. */}
          <div className="flex max-w-[46ch] flex-col gap-6 min-[900px]:mb-24">
            <h3 className="m-0 font-urbanist text-[clamp(30px,3.4vw,48px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-terracota">
              Isso é marketing pontual.
            </h3>
            <p className="m-0 text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-creme">
              O problema não é fazer essas ações.
            </p>
            <p className="m-0 text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-rosa-cinza text-pretty">
              O problema é fazer cada uma delas sem olhar o que está
              acontecendo com o cliente antes, durante e depois da compra.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 O reframe ─────────────────────────────────────────────── */}
      <section
        id="reframe"
        className="fx-section-lg relative overflow-hidden bg-creme text-vinho"
      >
        <img
          src="/fio-curva.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-1/2 w-[min(70vw,900px)] -translate-y-1/2 opacity-55"
        />
        <div className="container-fluxa fx-rise relative flex flex-col gap-10">
          <h2 className="m-0 max-w-[12ch] font-urbanist text-[clamp(44px,6.4vw,96px)] font-extrabold leading-[0.92] tracking-[-0.03em]">
            Antes da ação,
            <br />
            vem o cliente.
          </h2>
          <div className={`${COL_320} max-w-[960px] items-start gap-10`}>
            <p className="m-0 text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-vinho-3 text-pretty">
              Antes de pensar no próximo post, campanha, promoção ou anúncio,
              existe uma pergunta mais importante:
            </p>
            <div className="flex flex-col gap-4">
              <p className="m-0 font-urbanist text-[clamp(24px,2.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em] text-terracota text-balance">
                O que precisa acontecer com o seu cliente?
              </p>
              <p className="m-0 text-[17px] leading-[1.5] text-vinho-4">
                É daí que começa o marketing da Fluxa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 A jornada ─────────────────────────────────────────────── */}
      <section
        id="jornada"
        className="border-t border-creme-2 bg-creme pb-[72px] text-vinho min-[900px]:pb-32"
      >
        <div
          className={`container-fluxa ${COL_400} items-center gap-14 pt-14 min-[900px]:pt-28`}
        >
          <div className="fx-rise flex flex-col gap-10">
            <Label>A jornada</Label>
            <div className="flex flex-col">
              {JOURNEY.map((s, i) => (
                <h2
                  key={s.title}
                  className={`m-0 font-urbanist text-[clamp(52px,7vw,112px)] font-extrabold leading-[0.92] tracking-[-0.03em] ${
                    i === JOURNEY.length - 1 ? "text-terracota" : ""
                  }`}
                >
                  {s.title}.
                </h2>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <FoodShowcase />
            <div className="flex max-w-[44ch] flex-col gap-2.5 text-[clamp(16px,1.2vw,19px)] leading-[1.5] text-vinho-3">
              {JOURNEY.map((s) => (
                <p key={s.title} className="m-0">
                  {s.long}
                </p>
              ))}
              <p className="m-0 mt-4 font-urbanist text-[clamp(22px,2vw,30px)] font-bold leading-[1.1] tracking-[-0.02em] text-vinho">
                É essa jornada que a Fluxa estrutura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 Diagnóstico ──────────────────────────────────────────── */}
      <section id="diagnostico" className="fx-section bg-vinho text-creme">
        <div className="container-fluxa flex flex-col gap-16">
          <div className={`fx-rise ${COL_380} items-end gap-12`}>
            <div className="flex flex-col gap-6">
              <Label tone="on-dark">Diagnóstico de jornada</Label>
              <h2 className="m-0 max-w-[14ch] font-urbanist text-[clamp(40px,5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-balance">
                Onde seu restaurante perde clientes hoje?
              </h2>
            </div>
            <div className="flex flex-col gap-1.5 text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-rosa-cinza">
              <p className="m-0">
                Talvez o problema esteja antes da primeira compra.
              </p>
              <p className="m-0">Talvez esteja durante.</p>
              <p className="m-0 text-creme">
                Talvez aconteça depois — e ninguém esteja olhando.
              </p>
            </div>
          </div>

          {/* Quatro cards em 2×2. O gap de 1px sobre o fundo vinho-2 desenha
              as divisórias sem bordas que se somariam nos encontros. */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-vinho-2 min-[900px]:grid-cols-2">
            {DIAGNOSTIC.map((d) => (
              <div
                key={d.title}
                className="fx-lift flex min-h-[260px] flex-col gap-5 bg-terracota px-7 pb-9 pt-8 text-creme hover:bg-terracota-hover"
              >
                <Icon name={d.icon} size={40} />
                <div className="mt-auto flex flex-col gap-3">
                  <h3 className="m-0 font-urbanist text-[28px] font-bold leading-[1.05] tracking-[-0.02em]">
                    {d.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.5] text-pretty">
                    {d.question}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Cta href={waLink(WA_DIAGNOSTICO)} variant="outline" external>
              Quero descobrir meus gargalos
            </Cta>
          </div>
        </div>
      </section>

      {/* ── 06 Método Fluxa ─────────────────────────────────────────── */}
      <section id="metodo" className="fx-section bg-creme text-vinho">
        <div className="container-fluxa flex flex-col gap-[72px]">
          <div className={`fx-rise ${COL_380} items-end gap-12`}>
            <div className="flex flex-col gap-6">
              <Label>Método Fluxa</Label>
              <h2 className="m-0 max-w-[14ch] font-urbanist text-[clamp(40px,5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-balance">
                Não começamos pela ferramenta.{" "}
                <span className="text-terracota">Começamos pelo cliente.</span>
              </h2>
            </div>
            <p className="m-0 max-w-[40ch] text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-vinho-3">
              Depois de entender a jornada, estruturamos o crescimento em
              quatro frentes.
            </p>
          </div>

          {/* Uma coluna até 900px (onde a composição de desktop ainda vale,
              mas três colunas não caberiam), três acima disso. */}
          <div className="flex flex-col border-t border-creme-2">
            {METHOD.map((m, i) => (
              <div
                key={m.n}
                className="fx-row grid grid-cols-1 items-start gap-3.5 border-b border-creme-2 py-7 min-[900px]:gap-6 min-[900px]:py-10 min-[900px]:[grid-template-columns:minmax(64px,120px)_minmax(0,1.1fr)_minmax(0,1.4fr)] min-[900px]:hover:pl-4"
              >
                <span
                  className={`font-urbanist text-[clamp(40px,4vw,56px)] font-extrabold leading-none tracking-[-0.03em] ${
                    i === METHOD.length - 1 ? "text-terracota" : "text-creme-2"
                  }`}
                >
                  {m.n}
                </span>
                <div className="flex flex-col gap-3.5">
                  <Icon name={m.icon} size={32} />
                  <h3 className="m-0 font-urbanist text-[clamp(24px,2.4vw,32px)] font-bold leading-[1.05] tracking-[-0.02em] text-balance">
                    {m.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-2.5 text-[16px] leading-[1.5] text-vinho-3">
                  <p className="m-0 font-semibold text-vinho">{m.lead}</p>
                  <p className="m-0 text-pretty">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Case Lana's Burguer ──────────────────────────────────── */}
      <section
        id="case"
        className="fx-section bg-quase-preto bg-[url('/case-lanas-burger.jpg')] bg-cover bg-center bg-no-repeat text-creme"
      >
        <div className="container-fluxa relative flex flex-col gap-[72px]">
          {/* Escurece a foto só atrás do conteúdo; as bordas da seção
              continuam mostrando a imagem. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-80px_-8px] rounded-lg bg-[radial-gradient(120%_80%_at_30%_30%,rgba(23,19,21,0.92),rgba(23,19,21,0.74)_55%,rgba(23,19,21,0.58))]"
          />

          <div className={`fx-rise relative ${COL_340} items-end gap-12`}>
            <div className="flex flex-col gap-6">
              <Label tone="on-dark">Case · Lana&apos;s Burguer</Label>
              <h2 className="m-0 max-w-[16ch] font-urbanist text-[clamp(40px,5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-creme text-balance">
                O que acontece quando começamos a olhar a jornada inteira?
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <img
                src="/lanas-logo.png"
                alt="Lana's Burguer"
                data-parallax="-24"
                width={128}
                height={128}
                className="h-32 w-32 self-start rounded-full invert"
              />
              <p className="m-0 text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-rosa-cinza">
                O trabalho com o Lana&apos;s não começou escolhendo uma
                ferramenta.
              </p>
              <p className="m-0 text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-creme">
                Começou olhando para o cliente.
              </p>
              <a
                href={`https://instagram.com/${LANAS_INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fx-lift mt-1 inline-flex h-[52px] items-center gap-2.5 self-start rounded-full border border-creme/[0.32] px-6 font-manrope text-[15px] font-semibold leading-none text-creme hover:border-creme hover:bg-creme hover:text-quase-preto"
              >
                <InstagramIcon size={18} />@{LANAS_INSTAGRAM}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* 2×2, não 3+1: com quatro resultados, três colunas deixam um
              card órfão na segunda linha. */}
          <div className="fx-rise relative grid grid-cols-1 gap-6 min-[900px]:grid-cols-2">
            {CASE_RESULTS.map((r) => (
              <div
                key={r.metric}
                className={`fx-lift flex flex-col gap-5 rounded-lg px-7 pb-9 pt-8 ${
                  r.highlight
                    ? "bg-terracota text-vinho hover:bg-terracota-hover"
                    : "bg-vinho text-creme hover:bg-vinho-elev"
                }`}
              >
                <span
                  className={`font-urbanist text-[clamp(48px,5vw,72px)] font-extrabold leading-[0.9] tracking-[-0.04em] ${
                    r.highlight ? "text-vinho" : "text-terracota"
                  }`}
                >
                  {r.metric}
                </span>
                <span
                  className={`fx-label ${r.highlight ? "text-vinho" : "text-rosa-cinza"}`}
                >
                  {r.stage}
                </span>
                <p className="m-0 text-[16px] leading-[1.5] text-pretty">
                  {r.lead}
                </p>
                <p
                  className={`m-0 text-[16px] leading-[1.5] text-pretty ${
                    r.highlight ? "" : "text-rosa-cinza"
                  }`}
                >
                  {r.detail}
                </p>
              </div>
            ))}
          </div>

          <div className={`fx-rise relative ${COL_340} items-end gap-12`}>
            <h3 className="m-0 max-w-[16ch] font-urbanist text-[clamp(30px,3.6vw,52px)] font-extrabold leading-none tracking-[-0.03em] text-creme text-balance">
              O resultado não apareceu em um lugar só.
            </h3>
            <div className="flex flex-col gap-4">
              <p className="m-0 font-urbanist text-[clamp(20px,1.8vw,26px)] font-bold leading-[1.25] tracking-[-0.02em] text-rosa-cinza">
                Mais gente conheceu. Mais gente desejou. Mais gente comprou. E
                clientes voltaram.
              </p>
              <p className="m-0 text-[17px] leading-[1.5] text-creme">
                É isso que acontece quando o marketing começa a olhar a jornada
                inteira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 Capacidade de execução ───────────────────────────────── */}
      <section id="execucao" className="fx-section bg-creme text-vinho">
        <div
          className={`container-fluxa fx-rise ${COL_380} items-start gap-16`}
        >
          <div className="flex flex-col gap-7">
            <Label>Capacidade de execução</Label>
            <h2 className="m-0 max-w-[14ch] font-urbanist text-[clamp(40px,5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              Estratégia sem execução vira apresentação.
            </h2>
            <div className="flex max-w-[44ch] flex-col gap-2.5 text-[clamp(16px,1.2vw,19px)] leading-[1.5] text-vinho-3">
              <p className="m-0">
                A Fluxa não entrega um diagnóstico e vai embora.
              </p>
              <p className="m-0 text-pretty">
                Depois de entender onde a jornada perde clientes, colocamos as
                ferramentas necessárias para trabalhar.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <ul className="m-0 flex list-none flex-col border-t border-creme-2 p-0">
              {EXECUTION.map((item, i) => (
                <li
                  key={item}
                  className="fx-row flex items-center justify-between gap-4 border-b border-creme-2 py-[18px] font-urbanist text-[clamp(22px,2.2vw,30px)] font-bold leading-[1.1] tracking-[-0.02em] hover:pl-3 hover:text-terracota"
                >
                  <span>{item}</span>
                  <span className="fx-label text-[12px] text-vinho-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-0.5 font-urbanist text-[clamp(18px,1.6vw,22px)] font-bold leading-[1.2] tracking-[-0.01em]">
              <p className="m-0">A ferramenta vem depois do problema.</p>
              <p className="m-0 text-terracota">Não o contrário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 Fluxa Foods ──────────────────────────────────────────── */}
      <section id="foods" className="fx-section-sm bg-oliva text-quase-preto">
        <div
          className={`container-fluxa fx-rise ${COL_380} items-center gap-14`}
        >
          <div className="flex flex-col gap-7">
            <img
              src="/fluxa-foods-lockup.png"
              alt="Fluxa Foods"
              className="h-11 w-auto self-start"
            />
            <h2 className="m-0 max-w-[16ch] font-urbanist text-[clamp(36px,4.4vw,60px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-creme text-balance">
              Tecnologia também faz parte da experiência do cliente.
            </h2>
          </div>
          <div className="flex max-w-[46ch] flex-col items-start gap-6">
            <p className="m-0 text-[clamp(17px,1.3vw,20px)] font-semibold leading-[1.5] text-creme">
              Fluxa Foods é o braço de produto da Fluxa para a experiência de
              pedido.
            </p>
            <p className="m-0 text-[17px] leading-[1.5] text-creme text-pretty">
              Cardápio, operação e dados trabalhando para tornar a compra mais
              simples e dar ao restaurante mais inteligência sobre seus
              clientes.
            </p>
            <Cta href={FOODS_URL} variant="foods" external>
              Conhecer Fluxa Foods <span aria-hidden="true">↗</span>
            </Cta>
          </div>
        </div>
      </section>

      {/* ── 10 Parceiro Fluxa ───────────────────────────────────────── */}
      <section id="parceiro" className="fx-section bg-creme text-vinho">
        <div
          className={`container-fluxa fx-rise ${COL_380} items-start gap-16`}
        >
          <div className="flex flex-col gap-7">
            <Label>Parceiro Fluxa</Label>
            <h2 className="m-0 max-w-[16ch] font-urbanist text-[clamp(40px,5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-balance">
              Não queremos ser mais um fornecedor do restaurante.
            </h2>
            <p className="m-0 font-urbanist text-[clamp(24px,2.6vw,36px)] font-bold leading-[1.05] tracking-[-0.02em] text-terracota">
              Queremos participar do crescimento.
            </p>
          </div>
          <div className="flex flex-col items-start gap-8 pt-3">
            <p className="m-0 max-w-[44ch] text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-vinho-3 text-pretty">
              Um Parceiro Fluxa trabalha a jornada do cliente de forma contínua
              — da geração de demanda à próxima compra.
            </p>
            <Cta href={waLink(WA_PARCERIA)} variant="ink" external>
              Quero entender a parceria
            </Cta>
          </div>
        </div>
      </section>

      {/* ── 11 Formulário ──────────────────────────────────────────── */}
      <section
        id="contato"
        className="fx-section relative overflow-hidden bg-quase-preto text-creme"
      >
        <div
          aria-hidden="true"
          data-parallax="40"
          className="fx-pulse pointer-events-none absolute bottom-[-38%] right-[-18%] aspect-square w-[70vw] max-w-[880px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,104,59,0.5),rgba(122,46,42,0.32)_42%,transparent_70%)]"
        />
        <div
          className={`container-fluxa relative ${COL_400} items-center gap-14`}
        >
          <div className="fx-rise flex flex-col gap-6">
            <Label tone="on-dark">Diagnóstico de jornada</Label>
            <h2 className="m-0 max-w-[13ch] font-urbanist text-[clamp(40px,5.4vw,80px)] font-extrabold leading-[0.94] tracking-[-0.03em] text-balance">
              Onde sua jornada está perdendo clientes?
            </h2>
            <p className="m-0 max-w-[40ch] text-[clamp(17px,1.3vw,20px)] leading-[1.5] text-rosa-cinza text-pretty">
              Preencha os dados e continue a conversa no WhatsApp com um
              especialista da Fluxa.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-urbanist text-[clamp(18px,1.6vw,24px)] font-bold leading-[1.2] tracking-[-0.02em] text-rosa-cinza">
              {JOURNEY.map((s, i) => (
                <span
                  key={s.title}
                  className={i === JOURNEY.length - 1 ? "text-terracota" : ""}
                >
                  {s.title}.
                </span>
              ))}
            </div>
          </div>
          <LeadForm variant="desktop" />
        </div>
      </section>
    </main>
  );
}
