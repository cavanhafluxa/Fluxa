import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-fluxa-red text-massa-cream shadow-[0_10px_30px_-20px_rgba(26,14,14,0.5)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link
          href="/"
          aria-label="Fluxa — página inicial"
          className="flex items-center gap-2"
        >
          <span className="asset-slot inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-massa-cream text-fluxa-red">
            <img src="/logo-mark.svg" alt="" />
            <span className="asset-slot-label !text-fluxa-red !opacity-100 font-display text-lg">
              F
            </span>
          </span>
          <span className="font-display text-2xl tracking-tight text-massa-cream">
            fluxa<span className="text-brasa">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink href="#problema">Diagnóstico</NavLink>
          <NavLink href="#pilares">Ecossistema</NavLink>
          <NavLink href="#case">Case</NavLink>
          <NavLink href="#fluxa-foods">Fluxa Foods</NavLink>
        </nav>

        <a
          href="#parceria"
          className="inline-flex items-center gap-2 rounded-full bg-carvao px-4 py-2.5 text-sm font-medium text-massa-cream transition hover:bg-massa-cream hover:text-carvao"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Ser parceiro
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-massa-cream/85 transition hover:text-massa-cream"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {children}
    </a>
  );
}
