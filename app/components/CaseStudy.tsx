export function CaseStudy() {
  return (
    <section id="case" className="relative border-t border-carvao/10">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow mb-6">Case Fluxa</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-carvao md:text-6xl">
              Lanas Burguer decidiu{" "}
              <em className="not-italic text-fluxa-red">mudar o jogo</em>.
            </h2>
            <p className="mt-6 text-lg text-carvao/70">
              O cardápio parou de fechar a loja “do nada”, o ticket médio subiu
              e os dados dos clientes agora são deles.
            </p>
            <p className="mt-6 font-display text-2xl italic leading-snug text-carvao md:text-3xl">
              O Lanas decidiu ser dono do seu próprio negócio.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Pill>Ticket médio ↑</Pill>
              <Pill>Cardápio 100% no ar</Pill>
              <Pill>Base de dados própria</Pill>
              <Pill>Fidelidade automática</Pill>
            </div>
          </div>

          {/* Painel visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-carvao/10 bg-carvao p-10 text-massa-cream shadow-[0_30px_80px_-40px_rgba(26,14,14,0.6)] md:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fluxa-red/30 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brasa/20 blur-3xl"
              />

              <div className="relative">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-brasa">
                  Antes → Depois
                </span>

                <div className="mt-8 space-y-6">
                  <Row
                    label="Cardápio online"
                    before="Fechava sozinho no rush"
                    after="Estável, com push de upsell"
                  />
                  <Row
                    label="Ticket médio"
                    before="Estagnado"
                    after="Subindo mês a mês"
                  />
                  <Row
                    label="Base de clientes"
                    before="Anônima, no app terceiro"
                    after="Identificada e recorrente"
                  />
                  <Row
                    label="Custo de aquisição"
                    before="Taxas fixas de agência"
                    after="Investimento com ROI medido"
                  />
                </div>

                <div className="mt-10 rounded-2xl border border-massa-cream/15 bg-massa-cream/5 p-5">
                  <p className="font-display text-lg text-massa-cream">
                    “Agora o cliente é meu — e volta.”
                  </p>
                  <p className="mt-1 text-xs text-massa-cream/60">
                    — Lanas Burguer, parceiro Fluxa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  return (
    <div className="grid grid-cols-[1fr] gap-1 border-b border-massa-cream/10 pb-4 md:grid-cols-[1fr_2fr] md:items-center md:gap-6">
      <p className="text-sm text-massa-cream/60">{label}</p>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-massa-cream/50 line-through">{before}</span>
        <span aria-hidden="true" className="text-brasa">
          →
        </span>
        <span className="font-medium text-massa-cream">{after}</span>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-carvao/15 bg-massa-cream px-4 py-2 text-sm font-medium text-carvao">
      {children}
    </span>
  );
}
