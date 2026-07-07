import Link from "next/link";

const links = [
  { href: "#problema", label: "Dinheiro perdido" },
  { href: "#pilares", label: "Pilares" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#case", label: "Lanas" },
];

export function Nav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <header className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full bg-massa-cream px-4 py-2.5 shadow-[0_18px_50px_-20px_rgba(214,32,31,0.35)] md:px-5 md:py-3">
        <Link
          href="/"
          aria-label="Fluxa — página inicial"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center">
            <img src="/logo-mark.svg" alt="" width={32} height={32} />
          </span>
          <span className="font-display text-xl uppercase tracking-tight text-carvao">
            fluxa
          </span>
        </Link>

        <nav className="hidden items-center gap-1.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full bg-fluxa-red px-3.5 py-1.5 text-[0.78rem] font-medium text-massa-cream transition hover:bg-carvao"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#parceria"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-fluxa-red px-4 py-2 text-sm font-semibold text-massa-cream shadow-[0_10px_25px_-10px_rgba(214,32,31,0.6)] transition hover:bg-carvao"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Quero ser parceiro
        </a>
      </header>
    </div>
  );
}
