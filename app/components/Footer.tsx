import { TapeMarquee } from "./TapeMarquee";

export function Footer() {
  return (
    <footer className="bg-carvao text-massa-cream">
      <TapeMarquee
        variant="red"
        tilt={1}
        items={[
          "Fluxa",
          "Aquisição",
          "Conversão",
          "Retenção",
          "Comunidade",
          "Restaurantes donos do próprio jogo",
        ]}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-4xl uppercase leading-none">
            fluxa<span className="text-fluxa-red">.</span>
          </p>
          <p
            className="mt-4 max-w-sm text-sm text-massa-cream/65"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            O canal onde seu restaurante precisa estar. Marketing, tecnologia
            e comunidade para restaurantes donos do próprio negócio.
          </p>
        </div>

        <div>
          <p
            className="text-xs uppercase tracking-[0.22em] text-brasa"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            Ecossistema
          </p>
          <ul
            className="mt-4 space-y-2 text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <li>
              <a href="#pilares" className="text-massa-cream/70 hover:text-massa-cream">
                Fluxa Kitchen
              </a>
            </li>
            <li>
              <a href="#pilares" className="text-massa-cream/70 hover:text-massa-cream">
                Fluxa Cardápio
              </a>
            </li>
            <li>
              <a href="#pilares" className="text-massa-cream/70 hover:text-massa-cream">
                Fluxa Points
              </a>
            </li>
            <li>
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-massa-cream/70 hover:text-massa-cream"
              >
                Fluxa Foods ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p
            className="text-xs uppercase tracking-[0.22em] text-brasa"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            Vamos conversar
          </p>
          <ul
            className="mt-4 space-y-2 text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <li>
              <a href="#parceria" className="text-massa-cream/70 hover:text-massa-cream">
                Ser parceiro
              </a>
            </li>
            <li>
              <a href="#case" className="text-massa-cream/70 hover:text-massa-cream">
                Ver o case
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-massa-cream/10">
        <div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-massa-cream/50 md:flex-row md:items-center md:px-8"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <p>© {new Date().getFullYear()} Fluxa. Todos os direitos reservados.</p>
          <p>Feito para restaurantes que querem ser donos do próprio jogo.</p>
        </div>
      </div>
    </footer>
  );
}
