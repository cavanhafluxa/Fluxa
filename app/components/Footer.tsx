export function Footer() {
  return (
    <footer className="border-t border-outline/30 bg-surface-variant/50 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 md:flex-row md:px-8">
        <div className="max-w-xs">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-surface ring-2 ring-fluxa-red">
              <img
                src="/logo-mark.svg"
                alt=""
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
            </span>
            <span className="font-display text-2xl font-black tracking-tightest text-on-surface">
              Fluxa.
            </span>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">
            Tecnologia e estratégia unidas pelo seu lucro.
          </p>
        </div>

        <div className="flex flex-wrap gap-16">
          <div>
            <h6 className="mb-6 text-xs font-bold uppercase tracking-widest text-on-surface">
              Produtos
            </h6>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li>
                <a
                  href="#pilares"
                  className="transition-colors hover:text-on-surface"
                >
                  Fluxa Kitchen
                </a>
              </li>
              <li>
                <a
                  href="#pilares"
                  className="transition-colors hover:text-on-surface"
                >
                  Fluxa Cardápio
                </a>
              </li>
              <li>
                <a
                  href="#pilares"
                  className="transition-colors hover:text-on-surface"
                >
                  Fluxa Points
                </a>
              </li>
              <li>
                <a
                  href="https://flxa.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-on-surface"
                >
                  Fluxa Foods ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-6 text-xs font-bold uppercase tracking-widest text-on-surface">
              Institucional
            </h6>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li>
                <a
                  href="#parceria"
                  className="transition-colors hover:text-on-surface"
                >
                  Seja Parceiro
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-on-surface">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-on-surface">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-outline/30 px-6 pt-8 text-xs font-medium text-on-surface-variant md:px-8">
        <p>© {new Date().getFullYear()} Fluxa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
