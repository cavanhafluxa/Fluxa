export function SkinInTheGame() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-white md:px-8 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-fluxa-red/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal-on-view max-w-3xl">
          <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            Nós não somos uma assessoria fria. Somos seus{" "}
            <span className="text-fluxa-red">parceiros de crescimento</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/70 md:text-[1.15rem]">
            A maioria das agências cobra caro para postar fotos que não trazem
            pedidos. Nós somos diferentes. Nós crescemos com você: nosso modelo
            é baseado no seu sucesso.
          </p>
        </div>
      </div>
    </section>
  );
}
