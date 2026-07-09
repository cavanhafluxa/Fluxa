export function Footer() {
  return (
    <footer className="border-t border-outline/30 bg-surface-variant/50 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 md:flex-row md:px-8">
        <div className="max-w-xs">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="inline-flex h-10 w-10 overflow-hidden rounded-full">
              <img
                src="/fluxa-logo.svg"
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-display text-2xl font-black tracking-tightest text-on-surface">
              Fluxa
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
                  href="https://fluxafoods.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-fluxa-red transition-colors hover:text-fluxa-red-hover"
                >
                  Conheça o Fluxa Food&apos;s ↗
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
                <a
                  href="https://wa.me/554788371498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-on-surface"
                >
                  WhatsApp: (47) 8837-1498
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
