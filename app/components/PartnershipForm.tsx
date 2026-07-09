"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "554788371498"; // 47 8837-1498

export function PartnershipForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const msg = [
      "Olá! Quero recuperar o controle do meu restaurante.",
      "",
      `Nome: ${data.get("nome")}`,
      `WhatsApp: ${data.get("telefone")}`,
      `Restaurante: ${data.get("restaurante")}`,
      `Tipo de negócio: ${data.get("tipo")}`,
      `Faturamento mensal: ${data.get("faturamento")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <section
      id="parceria"
      className="border-t border-outline/30 bg-surface py-20 md:py-24"
    >
      <div className="container-fluxa mb-10 max-w-3xl text-center md:mb-12">
        <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink md:text-[2.25rem] lg:text-[2.5rem]">
          “Isso é incrível, mas é caro demais para a minha realidade agora.”
        </h2>
        <p className="mt-5 text-[1rem] leading-relaxed text-on-surface-variant md:text-[1.1rem]">
          A Fluxa não é um fornecedor. Nós somos seus parceiros. Preencha o
          formulário e fale com nossos especialistas em até 5 minutos.
        </p>
      </div>

      {sent ? (
        <SuccessCard onReset={() => setSent(false)} />
      ) : (
        <form onSubmit={onSubmit} className="mx-auto max-w-2xl space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Nome" name="nome" type="text" required full autoComplete="name" />
            <Field
              label="WhatsApp"
              name="telefone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(47) 90000-0000"
            />
            <Field
              label="Nome do restaurante"
              name="restaurante"
              type="text"
              required
              autoComplete="organization"
              placeholder="Ex.: Casa Brasa"
            />
            <Field
              label="Tipo de negócio"
              name="tipo"
              type="text"
              required
              placeholder="Ex.: Hamburgueria"
            />
            <Select
              label="Faturamento mensal"
              name="faturamento"
              required
              options={[
                "Até R$ 20 mil",
                "R$ 20 mil a R$ 50 mil",
                "R$ 50 mil a R$ 100 mil",
                "Acima de R$ 100 mil",
              ]}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-full bg-fluxa-red px-16 text-center text-base font-bold tracking-[-0.01em] text-white shadow-brand outline-none transition-all duration-300 hover:bg-fluxa-red-hover hover:shadow-[0_18px_44px_-12px_rgba(214,32,31,0.55)] focus-visible:ring-2 focus-visible:ring-fluxa-red focus-visible:ring-offset-4 md:text-lg"
            >
              Quero recuperar o controle
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute left-2 grid h-12 w-12 rounded-full bg-white p-3.5 text-fluxa-red shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-[calc(100%-3.5rem)]"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.03c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
            </button>
            <p className="mt-3 text-center text-[0.8rem] text-on-surface-variant">
              Você será direcionado ao WhatsApp da Fluxa com seus dados já
              preenchidos.
            </p>
          </div>
        </form>
      )}
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
  autoComplete,
  full,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  full?: boolean;
}) {
  return (
    <label className={full ? "block md:col-span-2" : "block"}>
      <span className="mb-1.5 block text-[0.8rem] font-semibold text-ink">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-black/10 bg-surface p-3.5 font-medium text-on-surface outline-none transition-shadow placeholder:text-on-surface-muted focus:ring-2 focus:ring-fluxa-red"
      />
    </label>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.8rem] font-semibold text-ink">
        {label}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-black/10 bg-surface p-3.5 font-medium text-on-surface outline-none transition-shadow focus:ring-2 focus:ring-fluxa-red"
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-outline/40 bg-surface-warm p-10 text-center shadow-soft md:p-14">
      <span
        aria-hidden="true"
        className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-fluxa-red text-white"
      >
        ✓
      </span>
      <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-ink md:text-3xl">
        Abrimos o WhatsApp pra você.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-on-surface-variant">
        É só enviar a mensagem que já está pronta. Um especialista da Fluxa
        responde em até 5 minutos.
      </p>
      <button
        onClick={onReset}
        className="mt-8 text-sm font-semibold text-fluxa-red underline underline-offset-4 hover:text-fluxa-red-hover"
      >
        Preencher novamente
      </button>
    </div>
  );
}
