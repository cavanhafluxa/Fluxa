"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "554788371498"; // 47 8837-1498

/**
 * Footer — layout "footer-section" (arihantcodes / 21st.dev) adaptado
 * ao design system da Fluxa (Tailwind v4 + tokens próprios, sem shadcn):
 *   - Coluna 1: newsletter "Fique por dentro" (input + botão send embutido
 *     + halo desfocado de acento)
 *   - Coluna 2: navegação rápida
 *   - Coluna 3: contato
 *   - Coluna 4: redes sociais (com tooltips em CSS puro)
 *   - Barra inferior: copyright + links legais
 * O toggle de dark mode do componente original foi omitido: a LP é
 * light-only e um controle não-funcional seria quebrado.
 */
export function Footer() {
  const [email, setEmail] = useState("");

  function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = `Olá! Quero receber as novidades da Fluxa. Meu e-mail: ${email}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setEmail("");
  }

  return (
    <footer className="relative border-t border-outline/40 bg-surface-variant/40 text-on-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1 — Newsletter */}
          <div className="relative">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 overflow-hidden rounded-full">
                <img
                  src="/fluxa-logo.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-display text-xl font-black tracking-tightest text-on-surface">
                Fluxa
              </span>
            </div>

            <h2 className="font-display mb-3 text-2xl font-bold tracking-tight text-ink">
              Fique por dentro
            </h2>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-on-surface-variant">
              Receba novidades, cases e estratégias pra fazer seu restaurante
              crescer.
            </p>

            <form onSubmit={onSubscribe} className="relative max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                autoComplete="email"
                className="w-full rounded-full border border-black/10 bg-surface py-3 pl-4 pr-14 text-sm font-medium text-on-surface outline-none transition-shadow placeholder:text-on-surface-muted focus:ring-2 focus:ring-fluxa-red"
              />
              <button
                type="submit"
                aria-label="Assinar novidades"
                className="absolute right-1.5 top-1.5 grid h-9 w-9 place-items-center rounded-full bg-fluxa-red text-white shadow-brand transition-transform hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            {/* Halo de acento desfocado (assinatura do componente original) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 top-0 h-24 w-24 rounded-full bg-fluxa-red/10 blur-2xl"
            />
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-on-surface">
              Navegação
            </h3>
            <nav className="space-y-3 text-sm font-medium text-on-surface-variant">
              <a href="#problema" className="block transition-colors hover:text-fluxa-red">
                Soluções
              </a>
              <a href="#pilares" className="block transition-colors hover:text-fluxa-red">
                Ecossistema
              </a>
              <a href="#case" className="block transition-colors hover:text-fluxa-red">
                Case Lanas
              </a>
              <a href="#parceria" className="block transition-colors hover:text-fluxa-red">
                Seja Parceiro
              </a>
              <a
                href="https://fluxafoods.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-fluxa-red transition-colors hover:text-fluxa-red-hover"
              >
                Fluxa Foods ↗
              </a>
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-on-surface">
              Contato
            </h3>
            <address className="space-y-3 text-sm not-italic text-on-surface-variant">
              <p>Atendimento online · Brasil</p>
              <p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-fluxa-red"
                >
                  WhatsApp: (47) 8837-1498
                </a>
              </p>
              <p>
                <a
                  href="mailto:assessoriafluxa@gmail.com"
                  className="transition-colors hover:text-fluxa-red"
                >
                  assessoriafluxa@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Coluna 4 — Redes sociais */}
          <div className="relative">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-on-surface">
              Siga a Fluxa
            </h3>
            <div className="flex gap-3">
              <SocialButton
                label="Instagram"
                href="https://instagram.com/"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </SocialButton>

              <SocialButton
                label="WhatsApp"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.03c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                </svg>
              </SocialButton>

              <SocialButton
                label="Facebook"
                href="https://facebook.com/"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </SocialButton>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-on-surface-variant">
              Tecnologia e estratégia unidas pelo seu lucro.
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-outline/40 pt-8 text-center md:flex-row">
          <p className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Fluxa. Todos os direitos reservados.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-on-surface-variant">
            <a href="#" className="transition-colors hover:text-fluxa-red">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-fluxa-red">
              Termos de Uso
            </a>
            <a href="#" className="transition-colors hover:text-fluxa-red">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

/**
 * Botão de rede social com tooltip em CSS puro (group-hover),
 * substituindo o Tooltip do Radix usado no componente original.
 */
function SocialButton({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-surface text-on-surface-variant transition-colors hover:border-fluxa-red/30 hover:bg-fluxa-red hover:text-white"
      >
        {children}
      </a>
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-[0.7rem] font-semibold text-white opacity-0 shadow-lift transition-opacity duration-200 group-hover:opacity-100"
      >
        {label}
      </span>
    </div>
  );
}
