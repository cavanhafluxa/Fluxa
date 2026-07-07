import { TapeMarquee } from "./TapeMarquee";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-carvao pt-24 text-massa-cream md:pt-28">
      {/* Gradient escuro → borgonha → red */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #1a0e0e 0%, #2a1010 35%, #4a1010 60%, #7a0f0f 82%, #a11615 100%)",
        }}
      />
      {/* Vinheta radial pra dar profundidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 30% 40%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* Letra "f" gigante translúcida no fundo (lado direito) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 select-none md:-right-24 md:top-16"
      >
        <span
          className="font-display block text-[26rem] leading-none text-massa-cream/[0.06] md:text-[42rem]"
          style={{ transform: "rotate(-8deg)" }}
        >
          f
        </span>
      </div>

      {/* Ruído sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-6 pb-24 pt-8 md:px-10 md:pb-32">
        <p
          className="text-2xl font-light text-massa-cream/90 md:text-4xl"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
        >
          Não apenas uma
        </p>

        <h1 className="font-display mt-2 text-[5.5rem] uppercase leading-[0.85] text-massa-cream md:text-[11rem] lg:text-[13rem]">
          Assessoria
        </h1>

        <p
          className="mt-4 max-w-3xl text-2xl font-light leading-tight text-massa-cream/90 md:text-4xl"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
        >
          o canal que o seu restaurante precisa estar.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#parceria"
            className="group inline-flex items-center gap-3 rounded-2xl bg-brasa px-7 py-4 text-base font-semibold text-carvao shadow-[0_20px_50px_-15px_rgba(242,160,61,0.6)] transition hover:-translate-y-0.5 hover:bg-massa-cream md:text-lg"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Quero a Fluxa como parceira!
            <span
              aria-hidden="true"
              className="transition group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <a
            href="#pilares"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-massa-cream/25 px-6 py-4 text-base font-medium text-massa-cream/90 transition hover:bg-massa-cream/10 md:text-lg"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Ver o ecossistema
          </a>
        </div>

        {/* Sub-linha explicativa */}
        <p
          className="mt-14 max-w-2xl text-sm leading-relaxed text-massa-cream/60 md:text-base"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
        >
          Pare de pagar aluguel por clientes que deveriam ser seus. Unimos{" "}
          <strong className="font-semibold text-massa-cream">Marketing</strong>,{" "}
          <strong className="font-semibold text-massa-cream">Tecnologia</strong>{" "}
          e uma{" "}
          <strong className="font-semibold text-massa-cream">
            Comunidade ativa
          </strong>{" "}
          para construir sua própria base de clientes que volta sempre.
        </p>
      </div>

      {/* Fita conectora entre hero e resto */}
      <div className="relative z-20">
        <TapeMarquee
          variant="cream"
          tilt={-2}
          items={[
            "Aquisição",
            "Conversão",
            "Retenção",
            "Comunidade",
            "Base própria",
            "Sem taxa de agência",
          ]}
        />
      </div>
    </section>
  );
}
