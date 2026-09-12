import { AnchorLink } from "./AnchorLink";
import { Cta } from "./Cta";
import { LeadForm } from "./LeadForm";
import { NewsletterForm } from "./NewsletterForm";
import { EmailText, Icon, InstagramIcon, Logo } from "./ds";
import {
  CASE_RESULTS,
  DIAGNOSTIC,
  EMAIL,
  EXECUTION,
  FOODS_URL,
  INSTAGRAM,
  JOURNEY,
  LANAS_INSTAGRAM,
  METHOD,
  WA_DIAGNOSTICO,
  WA_PARCERIA,
  WHATSAPP,
  WHATSAPP_DISPLAY,
  waLink,
} from "./content";

/**
 * Composição de mobile (≤767px).
 *
 * Não é a de desktop empilhada: mesma narrativa e mesma copy, outra
 * dinâmica. O hero entrega o CTA acima da dobra e só depois mostra o
 * restaurante 3D em sangria; o problema vira um ritmo vertical de frases;
 * a jornada vira uma sequência 01→04; o case vira uma história editorial
 * com um resultado por bloco. Sem parallax e sem os brilhos que, em tela
 * estreita, só deixavam espaço vazio.
 */
export function MobileLanding() {
  return (
    <main className="fx-mobile bg-creme">
      {/* ── M1 Hero ──────────────────────────────────────────────────── */}
      <section id="m-top" className="overflow-hidden bg-creme pt-[104px]">
        <div className="flex flex-col gap-[22px] px-[22px]">
          <span className="fx-label-sm text-vinho-4">
            Parceria de crescimento para restaurantes
          </span>
          <h1 className="m-0 font-urbanist text-[clamp(40px,13vw,60px)] font-extrabold leading-[0.94] tracking-[-0.03em] text-vinho">
            Marketing pela jornada do cliente.
          </h1>
          <p className="m-0 max-w-[34ch] text-[17px] leading-[1.5] text-vinho-3">
            Estruturamos restaurantes para crescer do primeiro contato à próxima
            compra.
          </p>
          <Cta href={waLink(WA_DIAGNOSTICO)} variant="accent" external block>
            Quero um diagnóstico
          </Cta>
          <div className="flex flex-wrap gap-2">
            {JOURNEY.map((s, i) => (
              <span
                key={s.title}
                className={`rounded-full px-3.5 py-2 font-manrope text-[12px] font-semibold leading-none ${
                  i === JOURNEY.length - 1
                    ? "bg-terracota text-white"
                    : "bg-creme-3 text-vinho-3"
                }`}
              >
                {s.title}
              </span>
            ))}
          </div>
        </div>

        {/* O restaurante 3D fica na Hero do celular também. Mesmo recorte
            do desktop — um recorte centralizado mostraria só área vazia. */}
        <div
          className="relative mt-1 w-full overflow-hidden"
          style={{ aspectRatio: "710 / 610" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-[8%_6%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,104,59,0.28),rgba(233,104,59,0.08)_45%,transparent_70%)]"
          />
          <img
            src="/hero-estabelecimento.png"
            alt="Restaurante em 3D"
            draggable={false}
            fetchPriority="high"
            className="fx-float-slow pointer-events-none absolute h-auto max-w-none select-none"
            style={{ left: "-157.7%", top: "-37.7%", width: "270.4%" }}
          />
        </div>
      </section>

      {/* ── M2 O problema ───────────────────────────────────────────── */}
      <section id="m-problema" className="bg-vinho px-[22px] py-[72px] text-creme">
        <div className="fx-rise flex flex-col gap-7">
          <span className="fx-label-sm text-rosa-cinza">O problema</span>
          <div className="flex flex-col gap-0.5 font-urbanist text-[clamp(30px,9vw,42px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span>Venda cai.</span>
            <span className="text-rosa-cinza">Posta.</span>
            <span className="text-rosa-cinza">Anuncia.</span>
            <span className="text-rosa-cinza">Faz promoção.</span>
            <span className="text-rosa-cinza">Melhora.</span>
            <span className="text-terracota">Para.</span>
          </div>
          <div aria-hidden="true" className="h-px bg-vinho-2" />
          <h2 className="m-0 font-urbanist text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-terracota">
            Isso é marketing pontual.
          </h2>
          <p className="m-0 text-[16px] leading-[1.55] text-rosa-cinza text-pretty">
            O problema é fazer cada ação sem olhar o que acontece com o cliente
            antes, durante e depois da compra.
          </p>
        </div>
      </section>

      {/* ── M3 O reframe ────────────────────────────────────────────── */}
      <section className="bg-creme px-[22px] py-[72px]">
        <div className="fx-rise flex flex-col gap-5">
          <h2 className="m-0 font-urbanist text-[clamp(34px,10vw,46px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-vinho">
            Antes da ação, vem o cliente.
          </h2>
          <p className="m-0 text-[16px] leading-[1.55] text-vinho-3">
            Antes do próximo post, campanha ou anúncio, existe uma pergunta mais
            importante:
          </p>
          <p className="m-0 font-urbanist text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-terracota">
            O que precisa acontecer com o seu cliente?
          </p>
          <p className="m-0 text-[15px] leading-[1.5] text-vinho-4">
            É daí que começa o marketing da Fluxa.
          </p>
        </div>
      </section>

      {/* ── M4 A jornada ────────────────────────────────────────────── */}
      <section
        id="m-jornada"
        className="border-t border-creme-2 bg-creme pb-[72px] pt-14"
      >
        <div className="flex flex-col gap-[22px] px-[22px]">
          <span className="fx-label-sm text-vinho-4">A jornada</span>
          <div className="flex flex-col">
            {JOURNEY.map((s, i) => (
              <div
                key={s.title}
                className={`flex gap-3.5 border-t border-creme-2 py-[18px] ${
                  i === JOURNEY.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="min-w-7 font-urbanist text-[15px] font-extrabold leading-[1.4] text-terracota">
                  {s.n}
                </span>
                <div className="flex flex-col gap-1">
                  <h3
                    className={`m-0 font-urbanist text-[26px] font-extrabold leading-none tracking-[-0.02em] ${
                      i === JOURNEY.length - 1 ? "text-terracota" : "text-vinho"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.5] text-vinho-3">
                    {s.short}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="m-0 font-urbanist text-[20px] font-bold leading-[1.2] tracking-[-0.02em] text-vinho">
            É essa jornada que a Fluxa estrutura.
          </p>
        </div>
      </section>

      {/* ── M5 Diagnóstico ─────────────────────────────────────────── */}
      <section className="bg-vinho px-[22px] py-[72px] text-creme">
        <div className="flex flex-col gap-6">
          <span className="fx-label-sm text-rosa-cinza">
            Diagnóstico de jornada
          </span>
          <h2 className="m-0 font-urbanist text-[clamp(32px,9.5vw,44px)] font-extrabold leading-none tracking-[-0.03em]">
            Onde seu restaurante perde clientes hoje?
          </h2>
          <div className="flex flex-col gap-3">
            {DIAGNOSTIC.map((d, i) => {
              const last = i === DIAGNOSTIC.length - 1;
              return (
                <div
                  key={d.title}
                  className={`flex items-center gap-3.5 rounded-lg p-[18px] ${
                    last ? "bg-terracota text-vinho" : "bg-vinho-elev"
                  }`}
                >
                  <span className={last ? "text-vinho" : "text-terracota"}>
                    <Icon name={d.icon} size={28} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="m-0 font-urbanist text-[19px] font-bold leading-none">
                      {d.title}
                    </h3>
                    <p
                      className={`m-0 text-[14px] leading-[1.45] ${
                        last ? "text-vinho" : "text-rosa-cinza"
                      }`}
                    >
                      {d.questionShort}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <Cta href={waLink(WA_DIAGNOSTICO)} variant="outline" external block>
            Quero descobrir meus gargalos
          </Cta>
        </div>
      </section>

      {/* ── M6 Método Fluxa ────────────────────────────────────────── */}
      <section id="m-metodo" className="bg-creme px-[22px] py-[72px]">
        <div className="flex flex-col gap-6">
          <span className="fx-label-sm text-vinho-4">Método Fluxa</span>
          <h2 className="m-0 font-urbanist text-[clamp(32px,9.5vw,44px)] font-extrabold leading-none tracking-[-0.03em] text-vinho">
            Não começamos pela ferramenta.{" "}
            <span className="text-terracota">Começamos pelo cliente.</span>
          </h2>
          <div className="flex flex-col">
            {METHOD.map((m, i) => {
              const last = i === METHOD.length - 1;
              return (
                <div
                  key={m.n}
                  className={`flex flex-col gap-2.5 border-t border-creme-2 py-[22px] ${
                    last ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-vinho">
                    <span
                      className={`font-urbanist text-[14px] font-extrabold leading-none ${
                        last ? "text-terracota" : "text-vinho-5"
                      }`}
                    >
                      {m.n}
                    </span>
                    <Icon name={m.icon} size={24} />
                    <h3 className="m-0 font-urbanist text-[20px] font-bold leading-[1.1] tracking-[-0.02em]">
                      {m.titleShort}
                    </h3>
                  </div>
                  <p className="m-0 text-[15px] leading-[1.5] text-vinho-3">
                    {m.lead}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── M7 Case Lana's Burguer ─────────────────────────────────── */}
      <section id="m-case" className="bg-quase-preto text-creme">
        <div className="relative h-[clamp(260px,64vw,340px)] overflow-hidden">
          <img
            src="/case-lanas-burger.jpg"
            alt="Hambúrguer do Lana's Burguer"
            className="block h-full w-full object-cover object-[50%_45%]"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,19,21,0.4),rgba(23,19,21,0.95))]"
          />
          <div className="absolute inset-x-[22px] bottom-[22px] flex flex-col gap-3.5">
            <img
              src="/lanas-logo.png"
              alt="Lana's Burguer"
              width={72}
              height={72}
              className="h-[72px] w-[72px] invert"
            />
            <span className="fx-label-sm text-rosa-cinza">
              Case · Lana&apos;s Burguer
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-[22px] pb-[72px] pt-9">
          <div className="flex flex-col gap-4">
            <h2 className="m-0 font-urbanist text-[clamp(30px,9vw,42px)] font-extrabold leading-none tracking-[-0.03em]">
              O que acontece quando olhamos a jornada inteira?
            </h2>
            <p className="m-0 text-[16px] leading-[1.55] text-rosa-cinza">
              O trabalho não começou escolhendo uma ferramenta. Começou olhando
              para o cliente.
            </p>
            <a
              href={`https://instagram.com/${LANAS_INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fx-lift inline-flex min-h-12 items-center gap-2.5 self-start rounded-full border border-creme/[0.32] px-5 font-manrope text-[14px] font-semibold leading-none text-creme hover:border-creme hover:bg-creme hover:text-quase-preto"
            >
              <InstagramIcon size={17} />@{LANAS_INSTAGRAM}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Um resultado por bloco, separados por fio. */}
          {CASE_RESULTS.map((r, i) => (
            <div key={r.metric} className="flex flex-col gap-8">
              {i > 0 && <div aria-hidden="true" className="h-px bg-preto-2" />}
              <div className="fx-rise flex flex-col gap-4">
                <span className="font-urbanist text-[clamp(56px,17vw,76px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-terracota">
                  {r.metric}
                </span>
                <span className="fx-label-sm text-rosa-cinza">{r.stage}</span>
                <p className="m-0 text-[16px] leading-[1.55]">{r.lead}</p>
                <p className="m-0 text-[15px] leading-[1.55] text-rosa-cinza">
                  {r.detail}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3 rounded-lg bg-vinho p-6">
            <h3 className="m-0 font-urbanist text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              O resultado não apareceu em um lugar só.
            </h3>
            <p className="m-0 font-urbanist text-[17px] font-bold leading-[1.35] text-rosa-cinza">
              Mais gente conheceu. Mais gente desejou. Mais gente comprou. E
              clientes voltaram.
            </p>
            <p className="m-0 text-[15px] leading-[1.5] text-creme">
              É isso que acontece quando o marketing começa a olhar a jornada
              inteira.
            </p>
          </div>
        </div>
      </section>

      {/* ── M8 Capacidade de execução ──────────────────────────────── */}
      <section id="m-execucao" className="bg-creme px-[22px] py-[72px]">
        <div className="flex flex-col gap-[22px]">
          <span className="fx-label-sm text-vinho-4">
            Capacidade de execução
          </span>
          <h2 className="m-0 font-urbanist text-[clamp(30px,9vw,42px)] font-extrabold leading-none tracking-[-0.03em] text-vinho">
            Estratégia sem execução vira apresentação.
          </h2>
          <p className="m-0 text-[16px] leading-[1.55] text-vinho-3">
            Depois de entender onde a jornada perde clientes, colocamos as
            ferramentas para trabalhar.
          </p>
          <div className="flex flex-wrap gap-2">
            {EXECUTION.map((item) => (
              <span
                key={item}
                className="rounded-full bg-creme-3 px-4 py-[11px] font-manrope text-[14px] font-semibold leading-none text-vinho"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="m-0 font-urbanist text-[19px] font-bold leading-[1.25] text-vinho">
            A ferramenta vem depois do problema.{" "}
            <span className="text-terracota">Não o contrário.</span>
          </p>
        </div>
      </section>

      {/* ── M9 Fluxa Foods ────────────────────────────────────────── */}
      <section id="m-foods" className="bg-oliva px-[22px] py-16">
        <div className="flex flex-col gap-5">
          <img
            src="/fluxa-foods-lockup.png"
            alt="Fluxa Foods"
            className="h-9 w-auto self-start"
          />
          <h2 className="m-0 font-urbanist text-[clamp(28px,8.5vw,38px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-creme">
            Tecnologia também faz parte da experiência do cliente.
          </h2>
          <p className="m-0 text-[16px] leading-[1.55] text-creme">
            Cardápio, operação e dados para tornar a compra mais simples e dar ao
            restaurante mais inteligência sobre seus clientes.
          </p>
          <Cta href={FOODS_URL} variant="foods" external block>
            Conhecer Fluxa Foods <span aria-hidden="true">↗</span>
          </Cta>
        </div>
      </section>

      {/* ── M10 Parceiro Fluxa ────────────────────────────────────── */}
      <section id="m-parceiro" className="bg-creme px-[22px] py-[72px]">
        <div className="flex flex-col gap-5">
          <span className="fx-label-sm text-vinho-4">Parceiro Fluxa</span>
          <h2 className="m-0 font-urbanist text-[clamp(30px,9vw,42px)] font-extrabold leading-none tracking-[-0.03em] text-vinho">
            Não queremos ser mais um fornecedor do restaurante.
          </h2>
          <p className="m-0 font-urbanist text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-terracota">
            Queremos participar do crescimento.
          </p>
          <p className="m-0 text-[16px] leading-[1.55] text-vinho-3">
            Um Parceiro Fluxa trabalha a jornada do cliente de forma contínua —
            da geração de demanda à próxima compra.
          </p>
          <Cta href={waLink(WA_PARCERIA)} variant="ink" external block>
            Quero entender a parceria
          </Cta>
        </div>
      </section>

      {/* ── M11 Formulário ───────────────────────────────────────── */}
      <section
        id="m-form"
        className="relative overflow-hidden bg-quase-preto px-[22px] py-[72px] text-creme"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-30%] top-[-10%] aspect-square w-[80vw] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,104,59,0.42),transparent_70%)]"
        />
        <div className="relative flex flex-col gap-[22px]">
          <span className="fx-label-sm text-rosa-cinza">
            Diagnóstico de jornada
          </span>
          <h2 className="m-0 font-urbanist text-[clamp(32px,9.5vw,44px)] font-extrabold leading-none tracking-[-0.03em]">
            Onde sua jornada está perdendo clientes?
          </h2>
          <p className="m-0 text-[16px] leading-[1.55] text-rosa-cinza">
            Preencha e continue no WhatsApp com um especialista da Fluxa.
          </p>
          <LeadForm variant="mobile" />
        </div>
      </section>

      {/* ── M12 Footer ───────────────────────────────────────────── */}
      <footer className="bg-creme-soft px-[22px] pb-9 pt-12 text-vinho-3">
        <div className="flex flex-col gap-7 text-[15px] leading-[1.5]">
          <div className="flex flex-col gap-3.5 text-vinho">
            <Logo size={26} />
            <h3 className="m-0 font-urbanist text-[24px] font-bold leading-[1.1] tracking-[-0.02em]">
              Fique por dentro
            </h3>
            <p className="m-0 text-[15px] leading-[1.5] text-vinho-4">
              Receba novidades, cases e estratégias pra fazer seu restaurante
              crescer.
            </p>
          </div>

          <NewsletterForm />

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <span className="fx-label-sm text-vinho">Navegação</span>
              <AnchorLink href="#m-metodo">Método</AnchorLink>
              <AnchorLink href="#m-jornada">Jornada</AnchorLink>
              <AnchorLink href="#m-case">Case Lana&apos;s</AnchorLink>
              <AnchorLink href="#m-parceiro">Seja Parceiro</AnchorLink>
              <a
                href={FOODS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracota"
              >
                Fluxa Foods ↗
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="fx-label-sm text-vinho">Contato</span>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="break-words">
                <EmailText email={EMAIL} />
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{INSTAGRAM}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 border-t border-creme-4 pt-5 text-[13px] leading-[1.5] text-vinho-5">
            <span>© {new Date().getFullYear()} Fluxa. Todos os direitos reservados.</span>
            <span>Tecnologia e estratégia unidas pelo seu lucro.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
