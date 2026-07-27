import Link from "next/link";

const links = [
  { href: "#custo", label: "Soluções" },
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#points", label: "Fluxa Points" },
  { href: "#case", label: "Cases" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 p-4">
      <nav className="mx-auto flex w-full max-w-[1024px] items-center justify-between gap-6 rounded-full border border-black/[0.06] bg-white/85 py-2.5 pl-4 pr-3.5 shadow-[0_8px_30px_-8px_rgba(26,14,14,0.12)] backdrop-blur-[20px] backdrop-saturate-[180%]">
        <Link
          href="/"
          aria-label="Fluxa, página inicial"
          className="flex shrink-0 items-center gap-2.5 text-ink"
        >
          <img
            src="/fluxa-carinha.png"
            alt="Fluxa"
            width={34}
            height={34}
            className="h-[34px] w-[34px] rounded-full object-cover"
          />
          <span className="text-[21px] font-bold leading-none tracking-tightest text-ink">
            Fluxa
          </span>
        </Link>

        <ul className="hidden items-center gap-6 overflow-hidden whitespace-nowrap text-[14px] font-medium lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#parceria" className="btn-nav shrink-0">
          Comece agora
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
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
      </nav>
    </header>
  );
}
