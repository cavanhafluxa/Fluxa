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
      className="border-t border-carvao/8 bg-massa-cream"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="md:sticky md:top-28">
            <p className="eyebrow">Parceria</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.1] text-carvao md:text-5xl">
              Vamos fechar a parceria?
            </h2>
            <p className="mt-5 max-w-md text-base text-carvao/60 md:text-lg">
              Preencha o formulário. Um especialista te chama em até 5 minutos
              no WhatsApp.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-carvao/70">
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
              className="rounded-2xl border border-carvao/10 bg-massa-cream-2/40 p-8 md:p-10"
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
                  className="mt-5 rounded-lg border border-fluxa-red/30 bg-fluxa-red/10 px-4 py-3 text-sm text-fluxa-red"
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-fluxa-red px-6 py-3 text-sm font-medium text-massa-cream transition hover:bg-fluxa-red-hover disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading"
                  ? "Enviando..."
                  : "Quero falar com um especialista"}
              </button>

              <p className="mt-4 text-center text-xs text-carvao/40">
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
    <li className="flex items-start gap-2.5">
      <span
        aria-hidden="true"
        className="mt-2 inline-flex h-1 w-1 flex-none rounded-full bg-fluxa-red"
      />
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
      <span className="mb-2 block text-sm text-carvao">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-carvao/15 bg-massa-cream px-4 py-3 text-sm text-carvao outline-none transition placeholder:text-carvao/30 focus:border-fluxa-red focus:ring-2 focus:ring-fluxa-red/15"
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
      <span className="mb-2 block text-sm text-carvao">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full appearance-none rounded-lg border border-carvao/15 bg-massa-cream px-4 py-3 text-sm text-carvao outline-none transition focus:border-fluxa-red focus:ring-2 focus:ring-fluxa-red/15"
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
    <div className="flex flex-col items-start rounded-2xl border border-carvao/10 bg-massa-cream-2/40 p-10 md:p-12">
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fluxa-red text-sm text-massa-cream"
      >
        ✓
      </span>
      <h3 className="font-display mt-6 text-2xl font-bold leading-tight text-carvao md:text-3xl">
        Recebemos. Já estamos te ligando.
      </h3>
      <p className="mt-3 max-w-md text-sm text-carvao/60">
        Um especialista da Fluxa vai entrar em contato pelo WhatsApp em até 5
        minutos.
      </p>
      <button
        onClick={onReset}
        className="mt-6 text-sm font-medium text-fluxa-red underline underline-offset-4"
      >
        Enviar outro contato
      </button>
    </div>
  );
}
