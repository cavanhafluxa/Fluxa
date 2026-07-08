export function DualAudience() {
  return (
    <section id="diferencial" className="bg-surface-variant/30 py-24 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-8">
        {/* Imagem */}
        <div className="asset-slot relative order-2 h-[520px] overflow-hidden rounded-[3rem] shadow-2xl md:order-1 md:h-[600px]">
          <img
            src="/dual-audience.jpg"
            alt="Consumidor satisfeito e dono do restaurante"
            className="h-full w-full object-cover"
          />
          <span className="asset-slot-label">/public/dual-audience.jpg</span>
        </div>

        {/* Conteúdo */}
        <div className="order-1 space-y-10 md:order-2 md:space-y-12">
          <h2 className="font-display tracking-tightest text-4xl font-bold leading-tight text-on-surface md:text-6xl">
            O Poder da Dupla Audiência
          </h2>

          <div className="space-y-8">
            <div>
              <div className="icon-3d-slot mb-4 h-16 w-16 rounded-full">
                <img src="/food-drink.png" alt="" width={64} height={64} />
              </div>
              <h5 className="mb-2 text-xl font-bold text-on-surface">
                Para o Consumidor (Fluxa-Lovers)
              </h5>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Uma experiência de pedido fluida, recompensas reais e conexão
                com as melhores marcas locais.
              </p>
            </div>

            <div className="h-px w-full bg-outline/40" />

            <div>
              <div className="icon-3d-slot mb-4 h-16 w-16 rounded-full">
                <img src="/food-burger.png" alt="" width={64} height={64} />
              </div>
              <h5 className="mb-2 text-xl font-bold text-on-surface">
                Para o Restaurante
              </h5>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Dados proprietários, autonomia total, custos reduzidos e
                crescimento escalável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
