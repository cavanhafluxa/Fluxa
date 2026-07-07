export function Footer() {
  return (
    <footer className="border-t border-carvao/8 bg-massa-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-massa-cream ring-2 ring-fluxa-red">
              <img
                src="/logo-mark.svg"
                alt=""
                width={26}
                height={26}
                className="h-6 w-6 object-contain"
              />
            </span>
            <p className="font-display text-lg font-bold text-carvao">fluxa</p>
          </div>
          <p className="mt-4 max-w-sm text-sm text-carvao/60">
            O canal onde seu restaurante precisa estar. Marketing, tecnologia e
            comunidade.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-carvao/40">
            Ecossistema
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="#pilares"
                className="text-carvao/70 transition hover:text-carvao"
              >
                Fluxa Kitchen
              </a>
            </li>
            <li>
              <a
                href="#pilares"
                className="text-carvao/70 transition hover:text-carvao"
              >
                Fluxa Cardápio
              </a>
            </li>
            <li>
              <a
                href="#pilares"
                className="text-carvao/70 transition hover:text-carvao"
              >
                Fluxa Points
              </a>
            </li>
            <li>
              <a
                href="https://flxa.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-carvao/70 transition hover:text-carvao"
              >
                Fluxa Foods ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-carvao/40">
            Vamos conversar
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="#parceria"
                className="text-carvao/70 transition hover:text-carvao"
              >
                Ser parceiro
              </a>
            </li>
            <li>
              <a
                href="#case"
                className="text-carvao/70 transition hover:text-carvao"
              >
                Ver o case
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-carvao/8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-carvao/40 md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} Fluxa. Todos os direitos reservados.</p>
          <p>Feito para restaurantes donos do próprio jogo.</p>
        </div>
      </div>
    </footer>
  );
}
