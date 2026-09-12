"use client";

import { useState } from "react";
import { AnchorLink } from "./AnchorLink";
import { Logo } from "./ds";
import { NAV_LINKS } from "./content";

/**
 * Nav em pílula fixa — mantida da LP anterior, agora em creme translúcido
 * com blur. Abaixo de 900px os links dão lugar a um botão de menu que abre
 * um painel em pílula logo abaixo da nav.
 *
 * O breakpoint da nav (900px) é maior que o da troca de composição (767px)
 * de propósito: entre 768 e 900px a composição é a de desktop, mas os
 * links já não cabem na pílula.
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 p-4 max-[900px]:p-2.5">
      <nav className="pointer-events-auto mx-auto flex max-w-[1024px] items-center justify-between gap-6 rounded-full border border-vinho/[0.08] bg-creme/[0.86] py-2.5 pl-[18px] pr-3.5 backdrop-blur-[20px] backdrop-saturate-[180%] max-[900px]:gap-2.5 max-[900px]:py-2 max-[900px]:pl-3.5 max-[900px]:pr-2">
        <AnchorLink
          href="#top"
          aria-label="fluxa, página inicial"
          className="flex items-center text-vinho"
        >
          <Logo size={24} />
        </AnchorLink>

        <div className="flex items-center gap-7 whitespace-nowrap font-manrope text-[14px] font-semibold leading-none text-vinho-3 max-[900px]:hidden">
          {NAV_LINKS.map((l) => (
            <AnchorLink
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-terracota"
            >
              {l.label}
            </AnchorLink>
          ))}
        </div>

        <AnchorLink
          href="#diagnostico"
          className="fx-lift inline-flex h-[38px] items-center gap-2 whitespace-nowrap rounded-full bg-vinho px-[18px] font-manrope text-[13px] font-semibold leading-none tracking-[0.01em] text-creme hover:bg-terracota max-[900px]:px-3.5 max-[900px]:text-[12px]"
        >
          Pedir diagnóstico <span aria-hidden="true">→</span>
        </AnchorLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="hidden h-[38px] w-[38px] flex-none items-center justify-center rounded-full border border-vinho/[0.12] bg-white text-vinho max-[900px]:inline-flex"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d={open ? "M5 5l14 14M19 5L5 19" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </nav>

      {/* Painel do menu. Fica sempre no DOM e alterna visibility/opacity
          pra poder transicionar — display:none não anima. */}
      <div
        className="pointer-events-auto mx-auto mt-2 hidden max-w-[1024px] flex-col gap-0.5 rounded-3xl border border-vinho/[0.08] bg-creme/[0.96] p-2.5 backdrop-blur-[20px] transition-[opacity,transform] duration-300 ease-fluxa max-[900px]:flex"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          visibility: open ? "visible" : "hidden",
        }}
      >
        {NAV_LINKS.map((l) => (
          <AnchorLink
            key={l.href}
            href={l.href}
            onNavigate={() => setOpen(false)}
            className="rounded-full px-4 py-3.5 font-manrope text-[15px] font-semibold leading-none text-vinho hover:bg-white hover:text-terracota"
          >
            {l.labelMobile}
          </AnchorLink>
        ))}
        <AnchorLink
          href="#contato"
          onNavigate={() => setOpen(false)}
          className="mt-1 rounded-full bg-terracota px-4 py-3.5 text-center font-manrope text-[15px] font-bold leading-none text-white hover:bg-terracota-hover"
        >
          Pedir diagnóstico
        </AnchorLink>
      </div>
    </header>
  );
}
