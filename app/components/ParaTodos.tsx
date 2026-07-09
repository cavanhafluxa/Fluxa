"use client";

import { useEffect, useState } from "react";

/**
 * "É pra todo tipo de operação" — texto à esquerda, showcase de estabelecimentos
 * à direita que se alternam (cross-fade automático). Cada tipo de comida tem seu
 * próprio SVG flutuando.
 */
const PLACES = [
  { src: "/food-pizzaria.svg", label: "Pizzaria" },
  { src: "/food-dogao.svg", label: "Hot dog" },
  { src: "/food-frango.svg", label: "Frango" },
  { src: "/food-sushi.svg", label: "Sushi" },
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
    <section className="relative overflow-hidden bg-radial-warm py-20 md:py-24 xl:py-28 2xl:py-32">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,black,transparent_75%)]" />

      <div className="container-fluxa relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.15fr] md:gap-6">
        {/* Coluna esquerda — texto */}
        <div className="reveal-on-view max-w-[36rem]">
          <span className="chip-live">
            <span className="dot" />
            <span>Pra todo tipo de operação</span>
          </span>

          <h2 className="font-display mt-5 text-display-2 text-ink">
            Hamburgueria, pizzaria, japonês ou sorveteria.{" "}
            <span className="text-fluxa-red">É pra todo mundo.</span>
          </h2>

          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-on-surface-variant md:text-[1.15rem]">
            Não importa o que sai da sua cozinha. Se você vende comida, a Fluxa
            monta o canal próprio do seu jeito, com a cara da sua marca.
          </p>

          {/* Chips dos tipos — clicáveis, sincronizam com o showcase */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {PLACES.map((p, i) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setActive(i)}
                className={
                  "rounded-full px-4 py-2 text-[0.8rem] font-semibold transition-all " +
                  (i === active
                    ? "bg-fluxa-red text-white shadow-brand"
                    : "bg-white text-on-surface-variant ring-1 ring-black/[0.06] hover:ring-black/15")
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Coluna direita — showcase que alterna. Os SVGs têm bastante respiro
            interno à esquerda, então a arte precisa crescer e ser puxada para
            o centro visual da coluna. */}
        <div className="relative order-first h-[320px] w-full md:order-last md:h-[460px] lg:h-[560px] xl:h-[660px] 2xl:h-[760px]">
          {/* Halo dourado atrás */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mx-auto my-auto h-[75%] w-[75%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,160,61,0.42),rgba(242,160,61,0.18)_38%,transparent_68%)]"
          />
          {PLACES.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.label}
              className="absolute left-1/2 top-1/2 h-auto w-[140%] max-w-none select-none object-contain transition-all duration-700 ease-out md:w-[150%] lg:w-[160%]"
              style={{
                opacity: i === active ? 1 : 0,
                transform:
                  i === active
                    ? "translate(-68%, -50%) scale(1)"
                    : "translate(-68%, -50%) scale(0.92)",
                filter: "drop-shadow(0 24px 40px rgba(10,10,11,0.16))",
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
