import Link from "next/link";

const links = [
  { href: "#problema", label: "Soluções" },
  { href: "#pilares", label: "Ecossistema" },
  { href: "#case", label: "Case Lanas" },
  { href: "https://fluxafoods.com.br/", label: "Fluxa Foods" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-5">
      {/* Pill flutuante centralizada. max-width e paddings casam com
          .container-fluxa pra que "Fluxa" e o título do hero comecem
          exatamente no mesmo eixo horizontal em qualquer viewport. */}
      <nav className="mx-auto flex w-full max-w-[72rem] items-center justify-between gap-4 rounded-full border border-black/[0.06] bg-white/85 px-6 py-2 shadow-[0_8px_30px_-8px_rgba(10,10,11,0.12)] backdrop-blur-xl md:gap-6 md:px-8 md:py-2.5 lg:px-12 xl:max-w-[80rem] xl:px-16 xl:py-3 2xl:max-w-[88rem] 2xl:px-20">
        <Link
          href="/"
          aria-label="Fluxa, página inicial"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-full bg-surface transition-transform duration-500 group-hover:scale-[1.05] md:h-10 md:w-10">
            <video
              src="/fluxa-logo-animada.mp4"
              aria-hidden="true"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-display text-[1.4rem] font-bold tracking-tightest leading-none text-on-surface md:text-[1.5rem]">
            Fluxa
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-[0.875rem] font-medium text-on-surface-variant lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#parceria"
          className="btn-primary shrink-0 !py-2.5 !px-5 !text-[0.875rem]"
        >
          Comece agora
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="-mr-0.5"
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
