"use client";

import type { ReactNode, MouseEvent } from "react";
import type Lenis from "lenis";

/**
 * Desktop e mobile são composições distintas com ids distintos, então um
 * link `#metodo` precisa virar `#m-metodo` quando a composição mobile é a
 * que está visível. O mapa traduz; o fallback é o próprio hash.
 */
const MOBILE_IDS: Record<string, string> = {
  "#top": "#m-top",
  "#problema": "#m-problema",
  "#jornada": "#m-jornada",
  "#metodo": "#m-metodo",
  "#case": "#m-case",
  "#execucao": "#m-execucao",
  "#foods": "#m-foods",
  "#parceiro": "#m-parceiro",
  // No mobile não existe seção de diagnóstico separada do formulário:
  // os dois CTAs levam ao form, que é onde a conversa começa.
  "#diagnostico": "#m-form",
  "#contato": "#m-form",
};

const MOBILE_BREAKPOINT = 767;

/** Resolve o hash para a composição visível e rola até lá via Lenis. */
export function scrollToAnchor(hash: string) {
  let target = hash;
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    const mapped = MOBILE_IDS[hash];
    if (mapped && document.querySelector(mapped)) target = mapped;
  }

  const el = document.querySelector(target);
  if (!el) return;

  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, { offset: -8 });
  } else {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 8,
      behavior: "smooth",
    });
  }
}

/**
 * Link de âncora que usa o smooth scroll do Lenis em vez do salto nativo.
 * Existe como client component pra que as seções possam continuar sendo
 * server components.
 */
export function AnchorLink({
  href,
  children,
  className,
  style,
  onNavigate,
  "aria-label": ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Chamado depois de navegar — usado pelo menu mobile pra se fechar. */
  onNavigate?: () => void;
  "aria-label"?: string;
}) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    onNavigate?.();
    scrollToAnchor(href);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
