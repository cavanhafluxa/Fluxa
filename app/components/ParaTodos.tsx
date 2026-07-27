"use client";

import { useEffect, useState } from "react";

/**
 * "Pra todo tipo de operação" — versão cream centralizada com chips + copy,
 * mantendo o showcase animado (cross-fade automático) das artes de comida,
 * como já estava no repo. Os chips clicáveis controlam manualmente o índice.
 */
const PLACES = [
  { src: "/food-pizzaria.svg", label: "Pizzaria" },
  { src: "/food-dogao.svg", label: "Hamburgueria" },
  { src: "/food-frango.svg", label: "Frango" },
  { src: "/food-sushi.svg", label: "Japonês" },
  { src: "/food-sorvete.svg", label: "Sorveteria" },
];

const EXTRA_CHIPS = ["Churrasco na brasa", "Cafeteria", "Açaí", "Dark kitchen"];

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

        {/* Showcase animado — mantido do repo */}
        <div className="relative mx-auto mt-10 h-[280px] w-full max-w-[520px] md:h-[340px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mx-auto my-auto h-[75%] w-[75%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,160,61,0.42),rgba(242,160,61,0.18)_38%,transparent_68%)]"
          />
          {PLACES.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.label}
              className="absolute left-1/2 top-1/2 h-auto w-[130%] max-w-none select-none object-contain transition-all duration-700 ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                transform:
                  i === active
                    ? "translate(-50%, -50%) scale(1)"
                    : "translate(-50%, -50%) scale(0.92)",
                filter: "drop-shadow(0 24px 40px rgba(26,14,14,0.16))",
              }}
              draggable={false}
              loading="lazy"
              aria-hidden={i !== active}
            />
          ))}
        </div>

        {/* Chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {PLACES.map((p, i) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setActive(i)}
              className={
                "inline-flex h-11 items-center rounded-full px-[22px] text-[14.5px] font-semibold transition-all " +
                (i === active
                  ? "bg-fluxa-red text-white shadow-brand"
                  : "border border-outline bg-surface text-ink hover:border-outline-strong")
              }
            >
              {p.label}
            </button>
          ))}
          {EXTRA_CHIPS.map((label) => (
            <span
              key={label}
              className="inline-flex h-11 items-center rounded-full border border-outline bg-surface px-[22px] text-[14.5px] font-semibold text-ink"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
