import { TapeMarquee } from "./TapeMarquee";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-fluxa-red text-massa-cream">
      {/* piso xadrez no rodapé */}
      <div
        aria-hidden="true"
        className="checker-cream absolute bottom-0 left-0 right-0 h-40 md:h-56"
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* sticker girando */}
      <div className="pointer-events-none absolute right-6 top-24 z-20 md:right-16 md:top-32">
        <div className="relative">
          <div className="sticker sticker-red h-32 w-32 rotate-[-12deg] md:h-40 md:w-40">
            <div className="text-center leading-tight">
              <div className="text-xs uppercase tracking-widest">Especialista</div>
              <div className="font-display text-3xl md:text-4xl">5min</div>
              <div className="text-xs uppercase tracking-widest">no WhatsApp</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-28 pt-14 md:grid-cols-[1.15fr_1fr] md:gap-12 md:px-8 md:pb-40 md:pt-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-massa-cream/25 bg-massa-cream/10 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-brasa" />
            Para restaurantes
          </div>

          <h1 className="mt-6 font-display text-[2.9rem] uppercase leading-[0.92] md:text-[5.75rem] lg:text-[6.75rem]">
            Não só uma
            <br />
            <span className="text-brasa">assessoria.</span>
            <br />
            O canal.
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-massa-cream/85 md:text-lg"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            Pare de pagar aluguel por clientes que deveriam ser seus. Unimos{" "}
            <strong className="font-semibold text-massa-cream">Marketing</strong>,{" "}
            <strong className="font-semibold text-massa-cream">Tecnologia</strong>{" "}
            e uma{" "}
            <strong className="font-semibold text-massa-cream">
              Comunidade ativa
            </strong>{" "}
            para construir uma base própria de clientes que volta sempre.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#parceria"
              className="group inline-flex items-center gap-3 rounded-full bg-massa-cream px-7 py-4 text-base font-semibold text-carvao shadow-[0_16px_40px_-15px_rgba(26,14,14,0.55)] transition hover:bg-brasa hover:text-carvao"
            >
              Quero a Fluxa como parceira
              <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#pilares"
              className="inline-flex items-center gap-2 rounded-full border-2 border-massa-cream/50 px-6 py-4 text-base font-semibold text-massa-cream transition hover:bg-massa-cream/10"
            >
              Ver o ecossistema
            </a>
          </div>
        </div>

        {/* Slot pra imagem do combo */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-6 rounded-full bg-brasa/30 blur-3xl"
            />
            <div className="asset-slot food-shadow relative aspect-square w-[280px] overflow-hidden rounded-full bg-fluxa-red-hover md:w-[420px] lg:w-[500px]">
              <img
                src="/hero-burger.png"
                alt="Combo Fluxa: burger, batata e refrigerante"
                width={720}
                height={720}
              />
              <span className="asset-slot-label">/public/hero-burger.png</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fita de encerramento do hero */}
      <div className="relative z-20 -mt-6 md:-mt-4">
        <TapeMarquee
          variant="carvao"
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
