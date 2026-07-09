"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll global via Lenis.
 * Convive com sticky elements + scroll-driven video no Hero — Lenis apenas
 * suaviza a posição do scroll nativo, não sequestra eventos. IntersectionObserver
 * e getBoundingClientRect continuam funcionando normalmente.
 * Respeita prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothWheel: true,
    });

    // expõe a instância pra debugging / âncoras (window.__lenis)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
