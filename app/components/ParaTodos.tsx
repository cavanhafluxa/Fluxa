"use client";

import { useEffect, useState } from "react";

/**
 * "Pra todo tipo de operação" — versão cream centralizada com chip + copy,
 * showcase animado (cross-fade automático) das artes de comida centralizado.
 * Sem chips de operação — a variedade fica no showcase que roda sozinho.
 */
const PLACES = [
  { src: "/food-pizzaria.svg", label: "Pizzaria" },
  { src: "/food-dogao.svg", label: "Hamburgueria" },
  { src: "/food-frango.svg", label: "Frango" },
  { src: "/food-sushi.svg", label: "Japonês" },
  { src: "/food-sorvete.svg", label: "Sorveteria" },
];

export function ParaTodos() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % PLACES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="fx-inout relative overflow-hidden bg-surface-cream py-[104px]">
      <div className="container-fluxa relative text-center">
        <span className="chip-live">
          <span className="dot" />
          <span>Pra todo tipo de operação</span>
        </span>
        <h2 className="text-h2 mx-auto mt-6 max-w-[24em] text-ink text-balance">
          Hamburgueria, pizzaria, japonês ou sorveteria.{" "}
          <span className="text-fluxa-red">É pra todo mundo.</span>
        </h2>
        <p className="text-lead mx-auto mt-5 max-w-[40rem] text-on-surface-variant text-pretty">
          Não importa o que sai da sua cozinha. Se você vende comida, a Fluxa
          monta o canal próprio do seu jeito, com a cara da sua marca — não com
          a cara da nossa.
        </p>

        {/* Showcase animado centralizado — sem chips, roda sozinho.
            Os SVGs têm padding interno à esquerda (viewBox 1440×810), então
            a imagem é dimensionada além do container e puxada pela esquerda
            pra colocar a arte visível no centro visual. Os valores são
            os mesmos do repo antigo, empíricos pra esses assets específicos. */}
        <div className="relative mx-auto mt-12 h-[360px] w-full max-w-[720px] overflow-hidden md:h-[460px] md:max-w-[820px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mx-auto my-auto h-[75%] w-[75%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,160,61,0.42),rgba(242,160,61,0.18)_38%,transparent_68%)]"
          />
          {PLACES.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.label}
              className="absolute left-1/2 top-1/2 h-auto w-[140%] max-w-none select-none object-contain transition-all duration-700 ease-out md:w-[150%]"
              style={{
                opacity: i === active ? 1 : 0,
                // Arte visível dos SVGs food-*.svg cai em ~76% da largura
                // do viewBox (padding transparente enorme à esquerda),
                // medido via canvas — por isso o translate assimétrico.
                transform:
                  i === active
                    ? "translate(-76%, -50%) scale(1)"
                    : "translate(-76%, -50%) scale(0.92)",
                transformOrigin: "76% 50%",
              }}
              draggable={false}
              loading="lazy"
              aria-hidden={i !== active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
