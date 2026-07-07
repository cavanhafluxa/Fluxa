export function CaseStudy() {
  return (
    <section id="case" className="border-t border-carvao/8 bg-massa-cream-2/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Case Fluxa</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.1] text-carvao md:text-5xl">
              Lanas Burguer decidiu mudar o jogo.
            </h2>
            <p className="mt-5 max-w-md text-base text-carvao/60 md:text-lg">
              O cardápio parou de fechar a loja “do nada”, o ticket médio subiu
              e os dados dos clientes agora são deles.
            </p>
            <p className="mt-5 text-lg text-carvao md:text-xl">
              O Lanas decidiu ser dono do próprio negócio.
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-6">
              <Metric label="Ticket médio" value="↑" />
              <Metric label="Cardápio no ar" value="100%" />
              <Metric label="Base de dados" value="Própria" />
              <Metric label="Fidelidade" value="Automática" />
            </dl>
          </div>

          <div className="asset-slot aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <img
              src="/lanas.jpg"
              alt="Lanas Burguer, parceiro Fluxa"
              width={800}
              height={1000}
            />
            <span className="asset-slot-label">/public/lanas.jpg</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.14em] text-carvao/40">
        {label}
      </dt>
      <dd className="font-display mt-1 text-2xl font-bold text-carvao">
        {value}
      </dd>
    </div>
  );
}
