import { OrbitingCircles } from "./OrbitingCircles";

const INNER = [
  { label: "Fluxa Kitchen", icon: "/icon-kitchens.svg" },
  { label: "Fluxa Cardápio", icon: "/icon-conversao.svg" },
  { label: "Fluxa Points", icon: "/fluxa-points.svg" },
];

const OUTER = [
  { label: "Aquisição", icon: "/icon-aquisicao.svg" },
  { label: "Comunidade", icon: "/icon-comunidade.svg" },
  { label: "Fluxa Foods", icon: "/fluxa-foods-logo.svg" },
];

function Satellite({ label, icon }: { label: string; icon: string }) {
  return (
    <div
      title={label}
      className="reveal-on-view flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-black/[0.06] md:h-16 md:w-16"
    >
      <img
        src={icon}
        alt={label}
        width={40}
        height={40}
        className="h-8 w-8 object-cover md:h-9 md:w-9"
        draggable={false}
      />
    </div>
  );
}

export function EcosystemOrbit() {
  return (
    <section className="relative overflow-hidden bg-surface-warm py-16 md:py-20 xl:py-24 2xl:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_45%,black,transparent_75%)]"
      />

      <div className="reveal-on-view container-fluxa relative flex flex-col items-center">
        <h2 className="font-display max-w-3xl text-center text-3xl font-bold leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-5xl xl:text-[3.25rem] 2xl:text-[3.5rem]">
          Não é um app a mais.{" "}
          <span className="text-fluxa-red">É um ecossistema</span> girando em
          torno do seu negócio.
        </h2>
        <p className="mt-5 max-w-xl text-center text-[1rem] leading-relaxed text-on-surface-variant md:text-[1.1rem]">
          Aquisição, cardápio, cozinha, fidelidade e comunidade, todos
          conectados ao mesmo canal: o seu.
        </p>

        {/* Diagrama orbital */}
        <div
          className="relative mt-14 h-[340px] w-[340px] scale-[0.72] sm:scale-90 md:mt-16 md:h-[480px] md:w-[480px] md:scale-100"
          style={{ transformOrigin: "center" }}
        >
          {/* Halo suave atrás do sistema */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(214,32,31,0.08),transparent_65%)]"
          />

          {/* Centro — logo Fluxa */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink shadow-lift md:h-24 md:w-24">
            <span className="absolute inset-0 rounded-full bg-fluxa-red/25 blur-xl" />
            <img
              src="/fluxa-logo.svg"
              alt="Fluxa"
              width={56}
              height={56}
              className="relative h-11 w-11 rounded-full object-cover md:h-14 md:w-14"
            />
          </div>

          <OrbitingCircles radius={110} duration={22} reverse iconSize={56}>
            {INNER.map((item) => (
              <Satellite key={item.label} {...item} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles radius={200} duration={32} iconSize={64}>
            {OUTER.map((item) => (
              <Satellite key={item.label} {...item} />
            ))}
          </OrbitingCircles>
        </div>

        {/* Legenda — nomeia os produtos que orbitam */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 md:mt-14">
          {[...INNER, ...OUTER].map((item) => (
            <span key={item.label} className="logo-pill">
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
