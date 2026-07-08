export function CaseStudy() {
  return (
    <section
      id="case"
      className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32"
    >
      <div className="relative flex flex-col items-center gap-12 overflow-hidden rounded-[3rem] bg-surface-variant/50 p-10 md:flex-row md:gap-16 md:p-16 lg:p-24">
        {/* Conteúdo */}
        <div className="flex-1">
          <h2 className="font-display mb-8 text-3xl font-bold leading-tight tracking-tight text-on-surface md:text-5xl">
            Lanas Burguer decidiu{" "}
            <span className="text-fluxa-red">MUDAR O JOGO</span>.
          </h2>
          <p className="mb-10 text-lg font-medium leading-relaxed text-on-surface-variant md:mb-12 md:text-xl">
            &ldquo;Com a implementação do ecossistema Fluxa, não apenas
            digitalizamos nosso atendimento, mas passamos a entender exatamente
            quem é nosso cliente. O faturamento em canais próprios cresceu 3x
            em menos de 6 meses, reduzindo nossa dependência de marketplaces
            externos.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="asset-slot h-14 w-14 overflow-hidden rounded-full">
              <img
                src="/lanas-owner.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
              <span className="asset-slot-label !text-[0.5rem]">owner</span>
            </div>
            <div>
              <p className="font-bold text-on-surface">
                Fundador Lanas Burguer
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                Case de Sucesso
              </p>
            </div>
          </div>
        </div>

        {/* Foto do burger */}
        <div className="asset-slot aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl md:w-2/5">
          <img
            src="/lanas.jpg"
            alt="Lanas Burguer"
            className="h-full w-full object-cover"
          />
          <span className="asset-slot-label">/public/lanas.jpg</span>
        </div>
      </div>
    </section>
  );
}
