"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "554788371498"; // 47 8837-1498

/**
 * Formulário de parceria — cream. Título centralizado com objeção entre aspas
 * curvas. Card branco padding 36px, grid 2 colunas. Inputs 48px raio 14px.
 * Submit pill 60px vermelho, ícone WhatsApp + "Fale com um especialista em
 * 5 minutos". Abre WhatsApp com mensagem pré-preenchida.
 */
export function PartnershipForm() {
  const [sent, setSent] = useState(false);
  const [faturamento, setFaturamento] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = [
      "Olá! Quero recuperar o controle do meu restaurante.",
      "",
      `Nome: ${data.get("nome") || ""}`,
      `WhatsApp: ${data.get("telefone") || ""}`,
      `Restaurante: ${data.get("restaurante") || ""}`,
      `Tipo de negócio: ${data.get("tipo") || ""}`,
      `Faturamento mensal: ${faturamento}`,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <section id="parceria" className="fx-inout bg-surface-cream py-[104px]">
      <div className="container-fluxa">
        <div className="mx-auto max-w-[46rem] text-center">
          <h2 className="text-[clamp(26px,2.9vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink text-balance">
            &ldquo;Isso é incrível, mas é caro demais pra minha realidade agora.&rdquo;
          </h2>
          <p className="text-lead mx-auto mt-6 max-w-[40rem] text-on-surface-variant text-pretty">
            A Fluxa não é um fornecedor — é parceira. E parceiro conversa antes
            de precificar. A gente entende o tamanho do seu restaurante, seu
            volume e seu momento. Só depois falamos em número. Muita gente
            descobre que o custo mensal cabe no que já gasta com marketplace
            hoje.
          </p>
        </div>

        {sent ? (
          <SuccessCard onReset={() => setSent(false)} />
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 grid max-w-[40rem] gap-5 rounded-[18px] border border-outline bg-surface p-9 shadow-sm-fx"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field
                label="Nome"
                name="nome"
                type="text"
                required
                full
                autoComplete="name"
                placeholder="Seu nome"
              />
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
                value={faturamento}
                onChange={setFaturamento}
                options={[
                  "Até R$ 20 mil",
                  "R$ 20 mil a R$ 50 mil",
                  "R$ 50 mil a R$ 100 mil",
                  "Acima de R$ 100 mil",
                ]}
              />
            </div>

            <button
              type="submit"
              className="flex h-[60px] w-full items-center justify-center gap-2.5 rounded-full bg-fluxa-red text-[16.5px] font-bold tracking-[-0.01em] text-white shadow-[0_1px_2px_rgba(213,4,49,0.24),0_14px_34px_-10px_rgba(213,4,49,0.45)] transition-colors hover:bg-fluxa-red-hover"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.03c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
              Fale com um especialista em 5 minutos
            </button>
            <p className="text-center text-[13px] text-on-surface-muted">
              Você será direcionado ao WhatsApp da Fluxa com seus dados já
              preenchidos.
            </p>
          </form>
        )}
      </div>
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
      <span className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="fx-input"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </span>
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="fx-input appearance-none"
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
    <div className="mx-auto mt-12 max-w-[40rem] rounded-[18px] border border-outline bg-surface p-12 text-center shadow-sm-fx">
      <span className="inline-grid h-[52px] w-[52px] place-items-center rounded-full bg-fluxa-red text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12l4 4L19 6" />
        </svg>
      </span>
      <h3 className="mt-6 text-[26px] font-bold tracking-[-0.025em] text-ink">
        Abrimos o WhatsApp pra você.
      </h3>
      <p className="mx-auto mt-3.5 max-w-[28rem] text-[15.5px] leading-[1.6] text-on-surface-variant">
        É só enviar a mensagem que já está pronta. Um consultor Fluxa responde
        em até 5 minutos.
      </p>
      <button
        onClick={onReset}
        className="mt-7 text-[14px] font-semibold text-fluxa-red underline underline-offset-4 hover:text-fluxa-red-hover"
      >
        Preencher novamente
      </button>
    </div>
  );
}
