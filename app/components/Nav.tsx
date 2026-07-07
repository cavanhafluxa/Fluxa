import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-carvao/10 bg-massa-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-2xl font-black tracking-tight text-carvao"
          aria-label="Fluxa — página inicial"
        >
          Fluxa<span className="text-fluxa-red">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#problema"
            className="text-sm text-carvao/70 transition hover:text-carvao"
          >
            O problema
          </a>
          <a
            href="#pilares"
            className="text-sm text-carvao/70 transition hover:text-carvao"
          >
            Ecossistema
          </a>
          <a
            href="#case"
            className="text-sm text-carvao/70 transition hover:text-carvao"
          >
            Case
          </a>
          <a
            href="#fluxa-foods"
            className="text-sm text-carvao/70 transition hover:text-carvao"
          >
            Fluxa Foods
          </a>
        </nav>

        <a
          href="#parceria"
          className="inline-flex items-center gap-2 rounded-full bg-carvao px-5 py-2.5 text-sm font-medium text-massa-cream transition hover:bg-fluxa-red"
        >
          Ser parceiro
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
