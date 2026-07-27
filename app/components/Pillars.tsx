"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ecossistema — carrossel horizontal pinado, dirigido por scroll.
 * Estrutura: <section> com um stage sticky (100svh) + espaçador 340vh
 * + fecho "Contratado separadamente...".
 *
 * Mecânica:
 *   p = clamp(-rect.top / (offsetHeight - innerHeight), 0, 1)
 *   active = min(6, floor(p * 7))
 *   pitch = card.getBoundingClientRect().width + 24  (medido no DOM)
 *   translate3d(-active * pitch, 0, 0)
 *   padding-left = (rail.clientWidth - pitch) / 2  → centraliza card ativo
 * ResizeObserver recalcula tudo em resizes.
 *
 * ⚠️ Nenhum ancestral pode ter overflow-x: hidden (quebra sticky).
 * Usa overflow-x: clip via `.overflow-x-clip` no body/main.
 */

const CARDS = [
  {
    n: "01",
    icon: "/fluxa-f.png",
    iconRounded: "rounded-[14px]",
    title: "Fluxa Kitchen",
    body: "Um sistema que organiza sua cozinha como um relógio e acaba com o caos do pico.",
    priceLabel: "Valor de mercado:",
    price: "R$ 800/mês",
  },
  {
    n: "02",
    icon: "/fluxa-cardapio.png",
    iconRounded: "rounded-[14px]",
    title: "Fluxa Cardápio",
    body: "Um vendedor silencioso que aumenta seu ticket médio: order bump, upsell e cross-sell dentro do cardápio.",
    priceLabel: "Valor de mercado:",
    price: "R$ 500/mês",
  },
  {
    n: "03",
    icon: "/icon-aquisicao.svg",
    iconRounded: "rounded-full",
    title: "Gestão de Tráfego (Meta + Google)",
    body: "Especialistas dominando as pesquisas da sua cidade pra atrair cliente pronto pra comprar.",
    priceLabel: "Valor de mercado:",
    price: "R$ 2.500/mês",
  },
  {
    n: "04",
    icon: "/icon-comunidade.svg",
    iconRounded: "rounded-full",
    title: "Assessoria de Conteúdo e Visual",
    body: "Roteiros de Reels, fotos com fome e campanhas sazonais que geram desejo imediato.",
    priceLabel: "Valor de mercado:",
    price: "R$ 1.500/mês",
  },
  {
    n: "05",
    icon: "/icon-consumidor.svg",
    iconRounded: "rounded-full",
    title: "Consultoria Estratégica Mensal",
    body: "Sessões individuais pra ajustar lucro e escala. Você escuta qual é a margem e qual é o caminho.",
    priceLabel: "Valor de mercado:",
    price: "R$ 2.000/mês",
  },
  {
    n: "06",
    icon: "/fluxa-points-coin.png",
    iconRounded: "rounded-full",
    iconFit: "object-contain" as const,
    title: "O Cofre (Database Marketing)",
    body: "Sua base própria de clientes: nome, telefone, histórico, aniversário. Você nunca mais aluga audiência de terceiros.",
    priceLabel: "Valor:",
    price: "Inestimável",
  },
];

const ACC_LABELS = [
  "R$ 800",
  "R$ 1.300",
  "R$ 3.800",
  "R$ 5.300",
  "R$ 7.300",
  "R$ 7.300 + o Cofre",
  "tudo num parceiro só",
];

const MARQUEE_NAMES = [
  "Fluxa Kitchen",
  "Fluxa Cardápio",
  "Fluxa Points",
  "Tráfego pago",
  "Conteúdo e visual",
  "Consultoria estratégica",
  "O Cofre",
];

export function Pillars() {
  const stageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [pad, setPad] = useState(32);

  useEffect(() => {
    const onScroll = () => {
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      const next = Math.min(6, Math.floor(p * 7.0001));
      setActive((prev) => (prev === next ? prev : next));
    };

    const measure = () => {
      const rail = railRef.current;
      const track = trackRef.current;
      const card = track?.children[0] as HTMLElement | undefined;
      if (!rail || !card) return;
      const nextPitch = card.getBoundingClientRect().width + 24;
      const nextPad = Math.max(24, Math.round((rail.clientWidth - nextPitch) / 2));
      setPitch((prev) =>
        Math.round(prev) === Math.round(nextPitch) ? prev : nextPitch,
      );
      setPad((prev) => (prev === nextPad ? prev : nextPad));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("resize", measure);
    onScroll();
    measure();

    const ro = new ResizeObserver(() => {
      measure();
      onScroll();
    });
    if (railRef.current) ro.observe(railRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  const barWidth = `${((active + 1) / 7) * 100}%`;

  return (
    <section id="ecossistema" className="relative bg-surface" ref={stageRef}>
      {/* Stage sticky — todo o painel do carrossel pinado por 340vh. */}
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="container-fluxa">
          <span className="chip-live">
            <span className="dot" />
            <span>Role para montar o ecossistema</span>
          </span>
          <h2 className="text-h2-sm mt-3.5 max-w-[26em] text-ink text-balance">
            A infraestrutura que grandes redes levam anos pra construir,
            disponível <span className="text-fluxa-red">hoje</span>.
          </h2>
        </div>

        {/* Marquee infinito com os nomes dos produtos */}
        <div className="mt-5 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="anim-marquee flex w-max gap-10">
            {[0, 1].map((k) => (
              <div
                key={k}
                aria-hidden={k === 1}
                className="flex gap-10 whitespace-nowrap pr-10 text-[13px] font-semibold uppercase tracking-[0.18em] text-on-surface-muted"
              >
                {MARQUEE_NAMES.map((name) => (
                  <span key={name} className="flex items-center gap-10">
                    <span>{name}</span>
                    <span className="text-fluxa-red">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Trilha horizontal — 7 cards, centraliza o ativo. */}
        <div ref={railRef} className="mt-5 w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-6 transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{
              paddingLeft: `${pad}px`,
              transform: `translate3d(${-active * pitch}px, 0, 0)`,
            }}
          >
            {CARDS.map((c) => (
              <article
                key={c.n}
                className="flex flex-col rounded-[18px] border border-outline bg-surface p-[22px] shadow-sm-fx"
                style={{ flex: "0 0 clamp(272px, 24vw, 330px)" }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[32px] font-bold leading-none tracking-[-0.04em] text-ink/[0.15]">
                    {c.n}
                  </span>
                  <span className="h-px flex-1 bg-black/10" />
                </div>
                <img
                  src={c.icon}
                  alt=""
                  width={46}
                  height={46}
                  className={`mt-3.5 h-[46px] w-[46px] ${c.iconRounded} ${
                    c.iconFit ?? "object-cover"
                  }`}
                />
                <h3 className="mt-3.5 text-[17px] font-bold leading-[1.25] tracking-[-0.02em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-on-surface-variant text-pretty">
                  {c.body}
                </p>
                <p className="mt-3.5 text-[12px] font-bold text-on-surface-muted">
                  {c.priceLabel}{" "}
                  <span className="text-fluxa-red">{c.price}</span>
                </p>
              </article>
            ))}

            {/* Card 07 — payoff ink */}
            <article
              className="flex flex-col justify-center rounded-[18px] bg-ink p-8 text-white shadow-[0_12px_40px_-16px_rgba(26,14,14,0.35)]"
              style={{ flex: "0 0 clamp(300px, 32vw, 440px)" }}
            >
              <img
                src="/fluxa-carinha.png"
                alt="Fluxa"
                width={52}
                height={52}
                className="h-[52px] w-[52px] rounded-full object-cover"
              />
              <p className="mt-5 text-[clamp(28px,3vw,46px)] font-bold leading-[1.02] tracking-[-0.04em] text-balance">
                A Fluxa é{" "}
                <span className="text-fluxa-pink-ink">tudo isso!</span>
              </p>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-white/70">
                Mais de R$ 7.300 por mês em ferramenta e gente — num parceiro
                só, com o seu nome na porta.
              </p>
            </article>
          </div>
        </div>

        {/* Barra de progresso + leitura acumulada */}
        <div className="container-fluxa mt-6">
          <div className="flex items-center gap-5">
            <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-black/[0.08]">
              <div
                className="h-full rounded-full bg-fluxa-red transition-[width] duration-[650ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ width: barWidth }}
              />
            </div>
            <p className="whitespace-nowrap text-[13.5px] font-semibold text-on-surface-variant">
              Custo somado até aqui:{" "}
              <span className="font-mono font-semibold text-fluxa-red">
                {ACC_LABELS[active]}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Espaçador que dá altura de scroll pro carrossel avançar */}
      <div aria-hidden="true" className="h-[340vh]" />

      {/* Fecho */}
      <div className="pb-[104px]">
        <p className="container-fluxa text-center text-[clamp(17px,1.5vw,21px)] leading-[1.5] text-on-surface-variant text-balance">
          Contratado separadamente: mais de{" "}
          <span className="font-bold text-ink">R$ 7.300 por mês</span>. Com a
          Fluxa: <span className="font-bold text-fluxa-red">um parceiro só</span>.
        </p>
      </div>
    </section>
  );
}
