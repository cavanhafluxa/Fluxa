"use client";

import { useEffect } from "react";

/**
 * Parallax dos elementos marcados com `data-parallax="<px>"`.
 *
 * O valor é o deslocamento máximo em px: o elemento anda esse tanto entre
 * entrar e sair da tela, proporcional à distância do seu centro ao centro
 * do viewport. Negativo sobe.
 *
 * Um único rAF varre todos os elementos, em vez de um observer por nó —
 * são poucos elementos e o custo é um `getBoundingClientRect` por frame.
 * Desligado no mobile (o efeito atrapalha mais do que ajuda em tela
 * pequena) e com `prefers-reduced-motion`.
 */
export function Parallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const tick = () => {
      // Abaixo de 900px o CSS já neutraliza o transform; não gastar frame.
      if (window.innerWidth > 900) {
        const vh = window.innerHeight;
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = Number.parseFloat(el.dataset.parallax ?? "0") || 0;
          const r = el.getBoundingClientRect();
          const progress = (r.top + r.height / 2 - vh / 2) / vh;
          el.style.transform = `translate3d(0,${(progress * speed).toFixed(2)}px,0)`;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
