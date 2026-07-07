export function Footer() {
  return (
    <footer className="border-t border-carvao/10 bg-carvao text-massa-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-3xl font-black tracking-tight">
            Fluxa<span className="text-fluxa-red">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-massa-cream/60">
            O canal onde seu restaurante precisa estar. Marketing, tecnologia e
            comunidade para restaurantes donos do próprio negócio.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brasa">
            Ecossistema
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="#pilares"
                className="text-massa-cream/70 transition hover:text-massa-cream"
              >
                Fluxa Kitchen
              </a>
            </li>
            <li>
              <a
                href="#pilares"
                className="text-massa-cream/70 transition hover:text-massa-cream"
              >
                Fluxa Cardápio
              </a>
            </li>
            <li>
              <a
                href="#pilares"
                className="text-massa-cream/70 transition hover:text-massa-cream"
              >
                Fluxa Points
              </a>
            </li>
            <li>
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-massa-cream/70 transition hover:text-massa-cream"
              >
                Fluxa Foods ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brasa">
            Vamos conversar
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="#parceria"
                className="text-massa-cream/70 transition hover:text-massa-cream"
              >
                Ser parceiro
              </a>
            </li>
            <li>
              <a
                href="#case"
                className="text-massa-cream/70 transition hover:text-massa-cream"
              >
                Ver o case
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-massa-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-massa-cream/50 md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} Fluxa. Todos os direitos reservados.</p>
          <p>Feito para restaurantes que querem ser donos do próprio jogo.</p>
        </div>
      </div>
    </footer>
  );
}
