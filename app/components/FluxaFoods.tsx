export function FluxaFoods() {
  return (
    <section
      id="fluxa-foods"
      className="mx-auto max-w-7xl border-t border-outline/30 px-6 py-20 text-center md:px-8 md:py-24"
    >
      <div className="flex flex-col items-center p-8 md:p-16">
        <h3 className="font-display mb-4 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
          Conheça o Fluxa Foods
        </h3>
        <p className="mx-auto mb-8 max-w-lg text-lg text-on-surface-variant">
          A solução completa de{" "}
          <span className="font-semibold text-on-surface">
            Kitchens + Cardápio inteligente
          </span>{" "}
          para quem busca o próximo nível de escala.
        </p>
        <a
          href="https://flxa.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-semibold text-on-surface transition-opacity hover:opacity-70"
        >
          Explorar flxa.space
          <span aria-hidden="true" className="text-xl">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
