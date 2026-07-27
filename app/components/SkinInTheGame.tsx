/**
 * Modelo de parceria — fundo cream. H2 + lead + 3 cards brancos alinhados:
 *   mensalidade transparente / comissão fixa e justa / cobrança sem caixa-preta.
 */
const CARDS = [
  {
    title: "Mensalidade transparente",
    body: "Você sabe exatamente quanto vai pagar antes do primeiro pedido.",
  },
  {
    title: "Comissão fixa e justa",
    body: "Sem fee variável, sem taxa por chargeback.",
  },
  {
    title: "Cobrança sem caixa-preta",
    body: "Cada linha da fatura tem nome e motivo.",
  },
];

export function SkinInTheGame() {
  return (
    <section className="fx-inout relative overflow-hidden bg-surface-cream py-[104px]">
      <div className="container-fluxa relative">
        <div className="max-w-[46rem]">
          <h2 className="text-h2 text-ink text-balance">
            Não somos uma assessoria fria. Somos seus{" "}
            <span className="text-fluxa-red">parceiros de crescimento</span>.
          </h2>
          <p className="text-lead mt-6 max-w-[40rem] text-on-surface-variant text-pretty">
            A maioria das agências cobra caro pra postar fotos que não trazem
            pedido. Nós crescemos com você — nosso modelo é baseado no seu
            sucesso.
          </p>
        </div>
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-[18px] border border-outline bg-surface p-[26px]"
            >
              <p className="text-[15px] font-bold text-ink">{c.title}</p>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-on-surface-variant">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
