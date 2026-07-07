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
    <section
      id="parceria"
      className="relative border-t border-carvao/10 bg-massa-cream-2/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-6">Parceria</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-carvao md:text-6xl">
              Vamos fechar a{" "}
              <em className="not-italic text-fluxa-red">parceria?</em>
            </h2>
            <p className="mt-6 text-lg text-carvao/70">
              Buscamos parceiros de crescimento. Preencha o formulário para que
              nossos especialistas entrem em contato em até{" "}
              <span className="font-semibold text-carvao">5 minutos</span>.
            </p>

            <ul className="mt-10 space-y-4 text-carvao/80">
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
              className="rounded-3xl border border-carvao/10 bg-massa-cream p-8 shadow-[0_30px_80px_-50px_rgba(26,14,14,0.4)] md:p-10"
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
                  className="mt-5 rounded-xl border border-fluxa-red/30 bg-fluxa-red/10 px-4 py-3 text-sm text-fluxa-red"
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-fluxa-red px-8 py-4 text-base font-semibold text-massa-cream shadow-[0_10px_30px_-10px_rgba(214,32,31,0.55)] transition hover:bg-fluxa-red-hover disabled:cursor-not-allowed disabled:opacity-70"
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

              <p className="mt-4 text-center text-xs text-carvao/50">
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
        className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-fluxa-red text-[0.7rem] font-bold text-massa-cream"
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
    <label className="block">
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
        className="w-full rounded-xl border border-carvao/15 bg-massa-cream-2/40 px-4 py-3 text-carvao outline-none transition placeholder:text-carvao/30 focus:border-fluxa-red focus:bg-massa-cream focus:ring-2 focus:ring-fluxa-red/20"
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
      <span className="mb-2 block text-sm font-medium text-carvao">
        {label}
        {required && <span className="text-fluxa-red"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full appearance-none rounded-xl border border-carvao/15 bg-massa-cream-2/40 px-4 py-3 text-carvao outline-none transition focus:border-fluxa-red focus:bg-massa-cream focus:ring-2 focus:ring-fluxa-red/20"
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
    <div className="flex flex-col items-start rounded-3xl border border-fluxa-red/20 bg-massa-cream p-10 md:p-12">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-fluxa-red text-xl font-bold text-massa-cream">
        ✓
      </span>
      <h3 className="mt-6 font-display text-3xl font-bold text-carvao md:text-4xl">
        Recebemos! Já estamos te ligando.
      </h3>
      <p className="mt-4 text-base text-carvao/70">
        Um especialista da Fluxa vai entrar em contato pelo WhatsApp em até 5
        minutos. Deixa o celular por perto.
      </p>
      <button
        onClick={onReset}
        className="mt-8 text-sm font-medium text-fluxa-red underline underline-offset-4 hover:text-fluxa-red-hover"
      >
        Enviar outro contato
      </button>
    </div>
  );
}
