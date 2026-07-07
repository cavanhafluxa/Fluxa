import Link from "next/link";

const links = [
  { href: "#problema", label: "Diagnóstico" },
  { href: "#pilares", label: "Ecossistema" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#case", label: "Case" },
];

export function Nav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <header className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-carvao/8 bg-massa-cream/80 px-4 py-2.5 backdrop-blur-xl md:px-5 md:py-3">
        <Link
          href="/"
          aria-label="Fluxa — página inicial"
          className="flex shrink-0 items-center gap-2"
        >
          <img src="/logo-mark.svg" alt="" width={26} height={26} />
          <span className="font-display text-lg font-bold tracking-tight text-carvao">
            fluxa
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-carvao/70 transition hover:text-carvao"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#parceria"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-carvao px-4 py-2 text-sm font-medium text-massa-cream transition hover:bg-fluxa-red"
        >
          Ser parceiro
        </a>
      </header>
    </div>
  );
}
