"use client";

import { WHATSAPP } from "./content";

/**
 * "Fique por dentro" do footer. Como ainda não existe lista de e-mail
 * ligada, o envio abre o WhatsApp com o e-mail digitado — mesma saída do
 * formulário de diagnóstico.
 */
export function NewsletterForm({ className }: { className?: string }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        `Olá, Fluxa! Quero receber as novidades. Meu e-mail: ${email}`,
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center ${className ?? ""}`}
    >
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Seu melhor e-mail"
        aria-label="Seu melhor e-mail"
        className="h-14 w-full rounded-full border border-creme-4 bg-white pl-[22px] pr-16 font-manrope text-[16px] font-normal leading-none text-vinho transition-colors duration-200 ease-fluxa placeholder:text-vinho-5 focus:border-terracota focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Assinar novidades"
        className="fx-lift absolute right-1.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-terracota text-[17px] text-white hover:bg-terracota-hover"
      >
        <span aria-hidden="true">➤</span>
      </button>
    </form>
  );
}
