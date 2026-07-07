"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function PartnershipForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error ?? "Falha ao enviar. Tente novamente.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro inesperado.");
    }
  }

  return (
    <section id="parceria" className="relative bg-fluxa-red text-massa-cream">
      <div
        aria-hidden="true"
        className="checker-cream absolute inset-x-0 top-0 h-6 opacity-40"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-6 text-brasa">Parceria</p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-7xl">
              Vamos fechar a <span className="text-brasa">parceria?</span>
            </h2>
            <p
              className="mt-6 max-w-md text-lg text-massa-cream/85"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              A gente busca parceiros de crescimento. Preenche o form e um
              especialista te chama em até{" "}
              <strong className="font-semibold text-massa-cream">
                5 minutos
              </strong>
              .
            </p>

            <ul
              className="mt-10 space-y-4 text-massa-cream/90"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              <Feat>Diagnóstico gratuito do canal atual</Feat>
              <Feat>Plano de aquisição e retenção sob medida</Feat>
              <Feat>Sem fee de agência — parceria de crescimento</Feat>
            </ul>
          </div>

          {status === "success" ? (
            <SuccessCard onReset={() => setStatus("idle")} />
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] bg-massa-cream p-8 text-carvao shadow-[0_30px_80px_-30px_rgba(26,14,14,0.6)] md:p-10"
              noValidate
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Seu nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                />
                <Field
                  label="Nome do restaurante"
                  name="restaurante"
                  type="text"
                  required
                  autoComplete="organization"
                />
                <Field
                  label="WhatsApp"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(11) 90000-0000"
                />
                <Select
                  label="Faturamento mensal"
                  name="faturamento"
                  required
                  options={[
                    "Até R$ 30 mil",
                    "R$ 30 mil – R$ 80 mil",
                    "R$ 80 mil – R$ 200 mil",
                    "R$ 200 mil – R$ 500 mil",
                    "Acima de R$ 500 mil",
                  ]}
                />
                <div className="md:col-span-2">
                  <Select
                    label="Tipo de negócio"
                    name="tipo"
                    required
                    options={[
                      "Hamburgueria",
                      "Pizzaria",
                      "Restaurante à la carte",
                      "Comida japonesa",
                      "Dark kitchen",
                      "Rede / franquia",
                      "Outro",
                    ]}
                  />
                </div>
              </div>

              {status === "error" && errorMsg && (
                <p
                  role="alert"
                  className="mt-5 rounded-xl border border-fluxa-red/40 bg-fluxa-red/10 px-4 py-3 text-sm text-fluxa-red"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-fluxa-red px-8 py-4 text-base font-semibold text-massa-cream shadow-[0_10px_30px_-10px_rgba(214,32,31,0.55)] transition hover:bg-fluxa-red-hover disabled:cursor-not-allowed disabled:opacity-70"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {status === "loading" ? (
                  "Enviando..."
                ) : (
                  <>
                    Quero falar com um especialista
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>

              <p
                className="mt-4 text-center text-xs text-carvao/50"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Ao enviar, você concorda em receber contato da equipe Fluxa.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Feat({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brasa text-[0.7rem] font-bold text-carvao"
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block" style={{ fontFamily: "var(--font-sans)" }}>
      <span className="mb-2 block text-sm font-medium text-carvao">
        {label}
        {required && <span className="text-fluxa-red"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border-2 border-carvao/15 bg-massa-cream-2/40 px-4 py-3 text-carvao outline-none transition placeholder:text-carvao/30 focus:border-fluxa-red focus:bg-massa-cream focus:ring-2 focus:ring-fluxa-red/20"
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
    <label className="block" style={{ fontFamily: "var(--font-sans)" }}>
      <span className="mb-2 block text-sm font-medium text-carvao">
        {label}
        {required && <span className="text-fluxa-red"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full appearance-none rounded-xl border-2 border-carvao/15 bg-massa-cream-2/40 px-4 py-3 text-carvao outline-none transition focus:border-fluxa-red focus:bg-massa-cream focus:ring-2 focus:ring-fluxa-red/20"
      >
        <option value="" disabled>
          Selecione…
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
    <div className="flex flex-col items-start rounded-[2rem] bg-massa-cream p-10 text-carvao md:p-12">
      <span className="sticker sticker-red h-14 w-14 rotate-[-6deg] text-xl">
        ✓
      </span>
      <h3 className="mt-6 font-display text-3xl uppercase leading-[0.95] md:text-5xl">
        Recebemos! Já estamos te ligando.
      </h3>
      <p
        className="mt-4 max-w-md text-base text-carvao/70"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
      >
        Um especialista da Fluxa vai entrar em contato pelo WhatsApp em até 5
        minutos. Deixa o celular por perto.
      </p>
      <button
        onClick={onReset}
        className="mt-8 text-sm font-medium text-fluxa-red underline underline-offset-4 hover:text-fluxa-red-hover"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Enviar outro contato
      </button>
    </div>
  );
}
