export function Problem() {
  return (
    <section
      id="problema"
      className="relative border-t border-carvao/10 bg-massa-cream-2/60"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">O diagnóstico</p>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-carvao md:text-6xl">
            O caminho por onde seu <em className="not-italic text-fluxa-red">lucro escapa</em>{" "}
            todos os meses.
          </h2>
          <p className="mt-6 text-lg text-carvao/70">
            Você trabalha, entrega, atende. Mas no final do mês, boa parte do
            lucro fica com quem nunca cozinhou um prato.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card
            index="01"
            title="Apps de Delivery"
            body="Cobram altas taxas, “sequestram” os dados dos seus clientes e você nunca sabe quem realmente comprou de você."
            tone="neutral"
          />
          <Card
            index="02"
            title="Agências de Marketing"
            body="Fees fixos altos para postar fotos que não garantem pedidos. Focam na fama da própria agência, não no seu lucro."
            tone="neutral"
          />
          <Card
            index="03"
            title="A Fluxa"
            body="“O problema não é o seu restaurante. É o canal que você usa.” Nós trazemos a demanda, mas devolvemos o cliente para você — Aquisição, Conversão e Retenção."
            tone="fluxa"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  index,
  title,
  body,
  tone,
}: {
  index: string;
  title: string;
  body: string;
  tone: "neutral" | "fluxa";
}) {
  const isFluxa = tone === "fluxa";
  return (
    <article
      className={
        isFluxa
          ? "group relative overflow-hidden rounded-3xl bg-carvao p-8 text-massa-cream shadow-[0_20px_50px_-25px_rgba(26,14,14,0.5)] md:p-10"
          : "group relative overflow-hidden rounded-3xl border border-carvao/10 bg-massa-cream p-8 md:p-10"
      }
    >
      {isFluxa && (
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-fluxa-red/40 blur-3xl"
        />
      )}
      <div className="relative">
        <p
          className={
            "font-mono text-xs tracking-[0.18em] " +
            (isFluxa ? "text-brasa" : "text-borgonha")
          }
        >
          {index}
        </p>
        <h3
          className={
            "mt-4 font-display text-2xl font-bold md:text-3xl " +
            (isFluxa ? "text-massa-cream" : "text-carvao")
          }
        >
          {title}
        </h3>
        <p
          className={
            "mt-4 text-base leading-relaxed " +
            (isFluxa ? "text-massa-cream/80" : "text-carvao/70")
          }
        >
          {body}
        </p>

        {isFluxa && (
          <div className="mt-8 flex flex-wrap gap-2">
            <Chip>Aquisição</Chip>
            <Chip>Conversão</Chip>
            <Chip>Retenção</Chip>
          </div>
        )}
      </div>
    </article>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-massa-cream/25 bg-massa-cream/5 px-3 py-1 text-xs font-medium text-massa-cream">
      {children}
    </span>
  );
}
