import { TapeMarquee } from "./TapeMarquee";

export function CaseStudy() {
  return (
    <section id="case" className="relative bg-massa-cream-2/60">
      <TapeMarquee
        variant="red"
        tilt={-1.5}
        items={[
          "Case Fluxa",
          "Lanas Burguer",
          "Ticket médio",
          "Base própria",
          "Cardápio no ar",
          "Menos caos",
        ]}
      />

      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-6 text-fluxa-red">Case Fluxa</p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] text-carvao md:text-7xl">
              Lanas Burguer decidiu{" "}
              <span className="text-fluxa-red">mudar o jogo</span>.
            </h2>
            <p
              className="mt-6 max-w-xl text-lg text-carvao/70"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              O cardápio parou de fechar a loja “do nada”, o ticket médio subiu
              e os dados dos clientes agora são deles.
            </p>
            <p className="mt-6 font-display text-2xl uppercase leading-[0.95] text-carvao md:text-4xl">
              O Lanas decidiu ser dono do próprio negócio.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Pill>Ticket médio ↑</Pill>
              <Pill>Cardápio 100% no ar</Pill>
              <Pill>Base de dados própria</Pill>
              <Pill>Fidelidade automática</Pill>
            </div>
          </div>

          {/* Foto do Lanas + card antes/depois */}
          <div className="relative">
            <div className="asset-slot food-shadow aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-2 border-carvao/10 bg-massa-cream">
              <img
                src="/lanas.jpg"
                alt="Lanas Burguer, parceiro Fluxa"
                width={800}
                height={1000}
                className="object-cover"
              />
              <span className="asset-slot-label">/public/lanas.jpg</span>
            </div>

            {/* Card sobreposto */}
            <div className="absolute -bottom-8 -left-4 max-w-xs rounded-2xl bg-carvao p-5 text-massa-cream shadow-2xl md:-left-10 md:max-w-sm md:p-6">
              <p
                className="text-xs uppercase tracking-[0.18em] text-brasa"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Antes → Depois
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <Row before="Cardápio fechava sozinho" after="Estável, com upsell" />
                <Row before="Ticket estagnado" after="Subindo mês a mês" />
                <Row before="Cliente anônimo" after="Cliente identificado" />
              </div>
            </div>

            {/* Sticker */}
            <div className="pointer-events-none absolute -top-6 right-4 md:-top-10 md:right-10">
              <div className="sticker sticker-red h-24 w-24 rotate-[8deg] md:h-28 md:w-28">
                <div className="text-center leading-tight">
                  <div className="text-[0.6rem] uppercase tracking-widest">
                    Case
                  </div>
                  <div className="font-display text-xl md:text-2xl">Lanas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ before, after }: { before: string; after: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-massa-cream/10 pb-2 last:border-b-0 last:pb-0">
      <span className="text-massa-cream/50 line-through">{before}</span>
      <span aria-hidden="true" className="text-brasa">
        →
      </span>
      <span className="font-medium text-massa-cream">{after}</span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border-2 border-carvao/15 bg-massa-cream px-4 py-2 text-sm font-medium text-carvao"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {children}
    </span>
  );
}
