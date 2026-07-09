import Link from "next/link";

const links = [
  { href: "#problema", label: "Soluções" },
  { href: "#pilares", label: "Ecossistema" },
  { href: "#case", label: "Case Lanas" },
  { href: "https://fluxafoods.com.br/", label: "Fluxa Foods" },
];

export function Nav() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5 md:px-8">
        <Link
          href="/"
          aria-label="Fluxa, página inicial"
          className="group flex items-center gap-3"
        >
          <span className="relative inline-flex h-12 w-12 overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-[1.03]">
            <img
              src="/fluxa-logo.svg"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-display text-[1.75rem] font-bold tracking-tightest leading-none text-on-surface">
            Fluxa
            <span className="text-fluxa-red">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 text-[0.875rem] font-medium text-on-surface-variant md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <a
            href="#parceria"
            className="btn-primary !py-2.5 !px-5 !text-[0.875rem]"
          >
            Seja Parceiro
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="-mr-0.5 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
