import type { ReactNode } from "react";

/**
 * CTA em pílula. Os que levam ao WhatsApp são links de verdade (`<a>` com
 * `target="_blank"`), não botões com `window.open` — funcionam sem JS,
 * abrem em nova aba no meio-clique e podem ser copiados.
 *
 * Variantes, conforme o Fluxa DS:
 *   accent  — terracota. Uma por tela.
 *   ink     — vinho, vira terracota no hover.
 *   outline — contorno creme sobre fundo escuro; preenche no hover.
 *   foods   — vermelho da sub-marca Fluxa Foods. Só para ela.
 */
type Variant = "accent" | "ink" | "outline" | "foods";

const VARIANTS: Record<Variant, string> = {
  accent: "bg-terracota text-white hover:bg-terracota-hover",
  ink: "bg-vinho text-creme hover:bg-terracota hover:text-white",
  outline:
    "border border-creme bg-transparent text-creme hover:bg-creme hover:text-vinho",
  foods: "bg-foods-vermelho text-white hover:bg-foods-vermelho-hover",
};

export function Cta({
  href,
  variant,
  children,
  external = false,
  /** `true` ocupa a largura toda e cresce pra 56px — usado no mobile. */
  block = false,
  className,
}: {
  href: string;
  variant: Variant;
  children: ReactNode;
  external?: boolean;
  block?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={`fx-lift inline-flex items-center gap-2.5 rounded-full font-manrope font-bold leading-none tracking-[0.01em] ${
        block
          ? "w-full min-h-[56px] justify-center px-5 text-[16px] leading-[1.3]"
          : "h-[56px] justify-center px-7 text-[16px]"
      } ${VARIANTS[variant]} ${className ?? ""}`}
    >
      {children}
    </a>
  );
}
