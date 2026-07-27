import { OrbitingCircles } from "./OrbitingCircles";

/**
 * Orbital — 480×480 no desktop, centro é a carinha da Fluxa (ink com halo
 * vermelho). Anéis: raio 112 / 22s / reverso (Kitchen, Cardápio, Points)
 * e raio 200 / 32s (Aquisição, Comunidade, Fluxa Foods). O satélite do
 * Fluxa Foods é um pill 118×62 com o lockup — o lockup é largo, não cabe
 * em círculo de 62px.
 */
const INNER = [
  { label: "Fluxa Kitchen", icon: "/fluxa-f.png" },
  { label: "Fluxa Cardápio", icon: "/fluxa-cardapio.png" },
  { label: "Fluxa Points", icon: "/fluxa-points-coin.png" },
];

const OUTER = [
  { label: "Aquisição", icon: "/icon-aquisicao.svg" },
  { label: "Comunidade", icon: "/icon-comunidade.svg" },
  { label: "Fluxa Foods", icon: "/fluxa-foods-lockup.png", wide: true },
];

function Satellite({
  label,
  icon,
  wide,
}: {
  label: string;
  icon: string;
  wide?: boolean;
}) {
  return (
    <div
      title={label}
      className={
        "flex h-[62px] items-center justify-center rounded-full border border-black/[0.06] bg-white shadow-[0_2px_10px_rgba(26,14,14,0.08)] " +
        (wide ? "w-[118px] px-3" : "w-[62px]")
      }
    >
      {wide ? (
        <img
          src={icon}
          alt={label}
          width={96}
          height={32}
          className="h-8 w-24 object-contain"
          draggable={false}
        />
      ) : (
        <img
          src={icon}
          alt={label}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
          draggable={false}
        />
      )}
    </div>
  );
}

export function EcosystemOrbit() {
  return (
    <section className="fx-inout relative overflow-hidden bg-surface py-[104px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots opacity-[0.35] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_45%,black,transparent_75%)]"
      />

      <div className="container-fluxa relative flex flex-col items-center">
        <h2 className="text-h2 max-w-[26em] text-center text-ink text-balance">
          Não é um app a mais.{" "}
          <span className="text-fluxa-red">É um ecossistema</span> girando em
          torno do seu negócio.
        </h2>
        <p className="text-lead mt-5 max-w-[34rem] text-center text-on-surface-variant text-pretty">
          Aquisição, cardápio, cozinha, fidelidade e comunidade — todos
          conectados ao mesmo canal: o seu.
        </p>

        <div
          className="relative mt-14 h-[340px] w-[340px] scale-[0.72] md:mt-16 md:h-[480px] md:w-[480px] md:scale-100"
          style={{ transformOrigin: "center" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(213,4,49,0.09),transparent_65%)]"
          />

          {/* Centro — carinha em círculo ink com halo vermelho */}
          <div className="absolute left-1/2 top-1/2 z-10 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full bg-ink shadow-[0_24px_48px_-16px_rgba(26,14,14,0.3)]">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-fluxa-red/30 blur-lg"
            />
            <img
              src="/fluxa-carinha.png"
              alt="Fluxa"
              width={66}
              height={66}
              className="relative h-[66px] w-[66px] rounded-full object-cover"
            />
          </div>

          <OrbitingCircles radius={112} duration={22} reverse iconSize={62}>
            {INNER.map((item) => (
              <Satellite key={item.label} {...item} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles radius={200} duration={32} iconSize={62} wideIndex={2}>
            {OUTER.map((item) => (
              <Satellite key={item.label} {...item} />
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
