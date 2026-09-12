"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "./ds";
import { BUSINESS_TYPES, REVENUE_RANGES, WHATSAPP } from "./content";

type Variant = "desktop" | "mobile";

/**
 * Formulário de diagnóstico. Não faz POST: monta a mensagem e abre o
 * WhatsApp da Fluxa com os dados já preenchidos, que é onde a conversa
 * continua.
 *
 * "Tipo de negócio" é um dropdown próprio em vez de um `<select>` nativo
 * porque o nativo não aceita a identidade visual da marca (pílula creme,
 * seta terracota, item marcado). O valor vai num input hidden pra que o
 * form continue sendo um form.
 */
export function LeadForm({ variant }: { variant: Variant }) {
  const mobile = variant === "mobile";
  const [tipo, setTipo] = useState("");
  const [open, setOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  // Fecha no clique fora e no Escape — um dropdown que só fecha no
  // segundo clique no próprio botão deixa o campo preso na tela.
  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (!dropdown.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim() || "—";

    const message = [
      "Olá, Fluxa! Quero um diagnóstico da minha jornada.",
      `Nome: ${field("nome")}`,
      `WhatsApp: ${field("whatsapp")}`,
      `Restaurante: ${field("restaurante")}`,
      `Tipo de negócio: ${field("tipo")}`,
      `Faturamento mensal: ${field("faturamento")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const labelCls =
    "flex flex-col gap-2 font-manrope text-[13px] font-semibold leading-none text-vinho";
  const inputCls = `fx-pill-input ${mobile ? "min-h-[52px]" : "text-[15px]"}`;
  // Duas colunas no desktop, uma no mobile.
  const pairCls = mobile
    ? "flex flex-col gap-4"
    : "grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr))]";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col rounded-lg bg-white text-vinho ${
        mobile ? "gap-4 p-[22px]" : "fx-rise gap-5 p-9"
      }`}
    >
      <label className={labelCls}>
        Nome
        <input
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Seu nome"
          className={inputCls}
        />
      </label>

      <div className={pairCls}>
        <label className={labelCls}>
          WhatsApp
          <input
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(47) 90000-0000"
            className={inputCls}
          />
        </label>
        <label className={labelCls}>
          Nome do restaurante
          <input
            name="restaurante"
            type="text"
            required
            placeholder="Ex.: Casa Brasa"
            className={inputCls}
          />
        </label>
      </div>

      <div className={pairCls}>
        <div className={labelCls}>
          Tipo de negócio
          <div className="relative" ref={dropdown}>
            <input name="tipo" type="hidden" value={tipo} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className={`flex w-full items-center justify-between gap-3 rounded-full border bg-white px-[18px] text-left font-manrope font-normal leading-none transition-colors duration-200 ease-fluxa hover:border-terracota ${
                mobile ? "min-h-[52px] text-[16px]" : "h-[52px] text-[15px]"
              } ${open ? "border-terracota" : "border-creme-2"} ${
                tipo ? "text-vinho" : "text-vinho-5"
              }`}
            >
              <span>{tipo || "Selecione"}</span>
              <span
                aria-hidden="true"
                className="text-[11px] text-terracota transition-transform duration-300 ease-fluxa"
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▼
              </span>
            </button>

            {open && (
              <div
                role="listbox"
                className="absolute inset-x-0 top-[58px] z-10 flex max-h-[230px] flex-col gap-0.5 overflow-auto rounded-2xl border border-creme-4 bg-white p-2 shadow-[0_18px_40px_-24px_rgba(41,21,30,0.35)]"
              >
                {BUSINESS_TYPES.map((t) => {
                  const selected = t === tipo;
                  return (
                    <button
                      key={t}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        setTipo(t);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center justify-between gap-2 rounded-full px-3.5 text-left font-manrope font-semibold leading-none transition-colors duration-200 ease-fluxa hover:bg-creme hover:text-vinho ${
                        mobile ? "min-h-[44px] text-[15px] py-3" : "py-[11px] text-[14px]"
                      } ${selected ? "bg-creme text-vinho" : "bg-transparent text-vinho-3"}`}
                    >
                      <span>{t}</span>
                      <span
                        aria-hidden="true"
                        className="text-terracota"
                        style={{ opacity: selected ? 1 : 0 }}
                      >
                        ·
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <label className={labelCls}>
          Faturamento mensal
          {/* `appearance-none` tira a pílula do visual nativo, então a seta
              volta desenhada — sem ela o campo se passa por campo de texto. */}
          <div className="relative">
            <select
              name="faturamento"
              defaultValue=""
              className={`${inputCls} w-full appearance-none pr-12`}
            >
              <option value="">Selecione</option>
              {REVENUE_RANGES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 text-[11px] text-terracota"
            >
              ▼
            </span>
          </div>
        </label>
      </div>

      <button
        type="submit"
        className={`fx-lift inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-terracota font-manrope font-bold text-white hover:bg-terracota-hover ${
          mobile
            ? "min-h-[56px] px-5 text-[16px] leading-[1.2]"
            : "mt-1 h-[60px] px-7 text-[16px] leading-none tracking-[0.01em]"
        }`}
      >
        <WhatsAppIcon size={20} />
        Fale com especialista em 5 minutos
      </button>

      <p
        className={`m-0 text-center font-manrope font-normal leading-[1.5] text-vinho-5 ${
          mobile ? "text-[12px]" : "text-[13px]"
        }`}
      >
        Você será direcionado ao WhatsApp da Fluxa com seus dados já preenchidos.
      </p>
    </form>
  );
}
