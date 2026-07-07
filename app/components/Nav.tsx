import Link from "next/link";

const links = [
  { href: "#problema", label: "Soluções" },
  { href: "#pilares", label: "Ecossistema" },
  { href: "#diferencial", label: "Diferenciais" },
  { href: "#case", label: "Case Lanas" },
  { href: "#fluxa-foods", label: "Fluxa Foods" },
];

export function Nav() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 tracking-tight md:px-8">
        <Link
          href="/"
          aria-label="Fluxa — página inicial"
          className="flex items-center gap-2.5"
        >
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
        </Link>

        <ul className="hidden gap-8 text-sm font-medium text-on-surface-variant md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-on-surface"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#parceria"
          className="rounded-full bg-fluxa-red px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-fluxa-red-hover"
        >
          Seja Parceiro
        </a>
      </nav>
    </header>
  );
}
