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
      className="border-t border-outline/30 bg-surface px-6 py-24 md:px-8 md:py-40"
    >
      <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
        <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
          Vamos Fechar a Parceria?
        </h2>
        <p className="text-lg font-medium text-on-surface-variant md:text-xl">
          Preencha os dados e receba uma análise estratégica gratuita do seu
          negócio.
        </p>
      </div>

      {status === "success" ? (
        <SuccessCard onReset={() => setStatus("idle")} />
      ) : (
        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-2xl space-y-6"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field
              label="Nome Completo"
              name="nome"
              type="text"
              required
              autoComplete="name"
              full
            />
            <Field
              label="Nome do Restaurante"
              name="restaurante"
              type="text"
              required
              autoComplete="organization"
            />
            <Field
              label="WhatsApp / Número"
              name="telefone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(11) 90000-0000"
            />
            <Select
              label="Faturamento Mensal"
              name="faturamento"
              required
              options={[
                "Até R$ 20k",
                "R$ 20k – R$ 50k",
                "R$ 50k – R$ 100k",
                "Acima de R$ 100k",
              ]}
            />
            <Field
              label="Tipo de Negócio"
              name="tipo"
              type="text"
              required
              placeholder="Ex.: Hamburgueria"
            />
          </div>

          {status === "error" && errorMsg && (
            <p
              role="alert"
              className="rounded-2xl border border-fluxa-red/30 bg-fluxa-red/10 px-4 py-3 text-sm text-fluxa-red"
            >
              {errorMsg}
            </p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-fluxa-red py-5 text-base font-bold text-white shadow-lg transition-colors hover:bg-fluxa-red-hover disabled:cursor-not-allowed disabled:opacity-70 md:text-lg"
            >
              {status === "loading"
                ? "Enviando..."
                : "Enviar e Solicitar Análise"}
            </button>
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
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? label}
        autoComplete={autoComplete}
        aria-label={label}
        className="w-full rounded-2xl border-none bg-surface-variant/70 p-5 font-medium text-on-surface outline-none transition-shadow placeholder:text-on-surface-variant/70 focus:ring-2 focus:ring-fluxa-red"
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
      <span className="sr-only">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        aria-label={label}
        className="w-full appearance-none rounded-2xl border-none bg-surface-variant/70 p-5 font-medium text-on-surface outline-none transition-shadow focus:ring-2 focus:ring-fluxa-red"
      >
        <option value="" disabled>
          {label}
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
    <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-outline/40 bg-surface-variant/50 p-10 text-center md:p-14">
      <span
        aria-hidden="true"
        className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-fluxa-red text-white"
      >
        ✓
      </span>
      <h3 className="font-display mt-6 text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
        Recebemos. Já estamos te ligando.
      </h3>
      <p className="mx-auto mt-4 max-w-md text-lg font-medium text-on-surface-variant">
        Um especialista da Fluxa vai entrar em contato pelo WhatsApp em até 5
        minutos.
      </p>
      <button
        onClick={onReset}
        className="mt-8 text-sm font-semibold text-fluxa-red underline underline-offset-4 hover:text-fluxa-red-hover"
      >
        Enviar outro contato
      </button>
    </div>
  );
}
