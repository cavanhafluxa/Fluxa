"use client";

import { useEffect, useState } from "react";
import { PLACES } from "./content";

/**
 * Showcase rotativo dos restaurantes 3D — mantido da LP anterior, agora na
 * seção da Jornada.
 *
 * Enquadramento: os SVGs `food-*.svg` têm a arte deslocada para ~76% da
 * largura do viewBox (o resto é padding transparente), então a imagem é
 * dimensionada além do container e puxada pela esquerda. Sem isso, um
 * recorte centralizado mostra área vazia — é o mesmo ajuste empírico do
 * repo anterior e os valores são específicos destes assets.
 */
export function FoodShowcase({ className }: { className?: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % PLACES.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? "h-[clamp(300px,36vw,440px)]"}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,104,59,0.26),rgba(233,104,59,0.08)_40%,transparent_68%)]"
      />
      {PLACES.map((p, i) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.label}
          draggable={false}
          loading="lazy"
          aria-hidden={i !== active}
          className="absolute left-1/2 top-1/2 h-auto w-[150%] max-w-none select-none object-contain transition-[opacity,transform] duration-700 ease-fluxa"
          style={{
            opacity: i === active ? 1 : 0,
            transform:
              i === active
                ? "translate(-76%,-50%) scale(1)"
                : "translate(-76%,-50%) scale(.92)",
            transformOrigin: "76% 50%",
          }}
        />
      ))}
    </div>
  );
}
