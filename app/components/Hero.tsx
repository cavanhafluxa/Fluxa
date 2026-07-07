export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-surface">
      {/* Composição 3D como background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="asset-slot h-full w-full">
          <img
            src="/hero-3d.png"
            alt=""
            className="h-full w-full max-w-[1600px] object-cover object-center opacity-95"
          />
          <span className="asset-slot-label">/public/hero-3d.png</span>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mt-[-8vh] max-w-5xl px-6 text-center md:px-8">
        <span className="mb-8 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          O Futuro da Gastronomia
        </span>
        <h1 className="font-display tracking-tightest mb-10 text-5xl font-black leading-[1.05] text-on-surface drop-shadow-sm md:text-8xl">
          Não só uma Assessoria.
          <br />
          <span className="text-fluxa-red">O Canal</span> que seu restaurante
          precisa estar.
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-on-surface-variant drop-shadow-sm md:text-2xl">
          Pare de pagar aluguel por clientes que deveriam ser seus. Unimos
          Marketing, Tecnologia e Comunidade para construir sua base própria.
        </p>
        <div className="flex justify-center">
          <a
            href="#parceria"
            className="rounded-full bg-on-surface px-10 py-5 text-base font-bold text-white shadow-2xl transition-transform hover:scale-105 md:text-lg"
          >
            Quero a Fluxa como parceira
          </a>
        </div>
      </div>
    </section>
  );
}
