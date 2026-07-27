/**
 * CTA final — ink centralizado com halo radial vermelho 700px atrás.
 * H2 com "Construa sua própria base" em pink-on-ink, CTA pill 60px.
 */
export function FinalCta() {
  return (
    <section className="fx-inout relative overflow-hidden bg-ink py-[120px] text-center text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(213,4,49,0.24),transparent_65%)]"
      />
      <div className="relative mx-auto w-full max-w-[1000px] px-8">
        <h2 className="text-[clamp(30px,3.6vw,54px)] font-bold leading-[1.07] tracking-[-0.035em] text-balance">
          Pare de alugar clientes com apps de delivery.{" "}
          <span className="text-fluxa-pink-ink">Construa sua própria base</span>{" "}
          com marketing e gestão de negócio.
        </h2>
        <div className="mt-10 flex justify-center">
          <a
            href="#parceria"
            className="inline-flex h-[60px] items-center gap-2.5 rounded-full bg-fluxa-red px-[34px] text-[17px] font-semibold text-white shadow-[0_1px_2px_rgba(213,4,49,0.24),0_18px_44px_-12px_rgba(213,4,49,0.55)] transition-colors hover:bg-fluxa-red-hover"
          >
            Quero recuperar o controle
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-[34rem] text-[14.5px] leading-[1.6] text-white/60">
          Resposta em até 5 minutos no WhatsApp. Sem SDR terceirizado, sem
          robô — um consultor Fluxa fala com você direto.
        </p>
      </div>
    </section>
  );
}
