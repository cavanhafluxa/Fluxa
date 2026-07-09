export function DualAudience() {
  return (
    <section id="diferencial" className="bg-surface-variant/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Imagem */}
        <div className="reveal-on-view relative order-2 h-[480px] overflow-hidden rounded-2xl shadow-lift md:order-1 md:h-[560px]">
          <img
            src="/consumidor.svg"
            alt="Consumidor Fluxa-Lover"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="reveal-on-view order-1 md:order-2">
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
            O poder da dupla audiência.
          </h2>
          <p className="mt-5 max-w-lg text-[1rem] leading-relaxed text-on-surface-variant md:text-[1.1rem]">
            Um único ecossistema, dois lados servidos. Consumidor engajado de um
            lado, restaurante no controle do outro.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <div className="mb-4 h-14 w-14 overflow-hidden rounded-full">
                <img
                  src="/icon-consumidor.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <h5 className="text-lg font-bold text-ink md:text-xl">
                Para o consumidor (Fluxa-Lovers)
              </h5>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-on-surface-variant md:text-[1rem]">
                Pedido fluido, recompensas reais, conexão com as marcas locais
                que ele já ama.
              </p>
            </div>

            <div className="h-px w-full bg-outline/50" />

            <div>
              <div className="mb-4 h-14 w-14 overflow-hidden rounded-full">
                <img
                  src="/icon-restaurante.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <h5 className="text-lg font-bold text-ink md:text-xl">
                Para o restaurante
              </h5>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-on-surface-variant md:text-[1rem]">
                Dado proprietário, autonomia total, custo reduzido, crescimento
                escalável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
