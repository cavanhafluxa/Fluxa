export function FluxaFoods() {
  return (
    <section
      id="fluxa-foods"
      className="relative overflow-hidden bg-surface-warm py-20 text-center md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent_75%)]"
      />
      <div className="reveal-on-view container-fluxa relative max-w-4xl">
        <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-[2.75rem]">
          Pare de alugar clientes com apps de delivery.{" "}
          <span className="text-fluxa-red">
            Construa sua própria base
          </span>{" "}
          com marketing e gestão de negócio.
        </h2>
        <div className="mt-9 flex justify-center">
          <a href="#parceria" className="btn-primary !px-8 !py-4 !text-base">
            Quero recuperar o controle
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
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
      </div>
    </section>
  );
}
