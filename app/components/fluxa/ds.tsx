/**
 * Primitivos do Fluxa Design System, portados do bundle do handoff
 * (`_ds_bundle.js` → components/core/{Logo,Icon}.jsx).
 *
 * Geometria e stroke são os do brand book: isótipo "Abertura" no viewBox
 * 26 13 54 75 e ícones outline 6/100 com um terminal cortado. Cor sempre
 * via `currentColor`, então basta ajustar a cor do container.
 */

/* ─── Logo ──────────────────────────────────────────────────────────────── */

const MARK_TOP =
  "M26 64 L26 40 C26 23 39 13 58 13 L80 13 L80 26 C80 44 65 54 45 54 C37 54 30 58 26 64 Z";
const MARK_BOTTOM =
  "M26 70 C31 61 40 57 52 57 L52 72 C52 82 44 88 33 88 L26 88 Z";

type LogoProps = {
  /** `lockup` = isótipo + wordmark, `mark` = só o isótipo, `wordmark` = só o texto. */
  variant?: "lockup" | "mark" | "wordmark";
  /** Altura do isótipo e corpo do wordmark, em px. */
  size?: number;
  className?: string;
};

export function Logo({ variant = "lockup", size = 32, className }: LogoProps) {
  const mark = (
    <svg
      viewBox="26 13 54 75"
      height={size}
      className="block flex-none"
      aria-hidden="true"
    >
      <path d={MARK_TOP} fill="currentColor" />
      <path d={MARK_BOTTOM} fill="currentColor" />
    </svg>
  );

  const word = (
    <span
      className="font-urbanist font-extrabold leading-none"
      style={{ fontSize: size, letterSpacing: "-0.03em" }}
    >
      fluxa
    </span>
  );

  if (variant === "mark") {
    return <span className={`inline-flex ${className ?? ""}`}>{mark}</span>;
  }
  if (variant === "wordmark") {
    return <span className={`inline-flex ${className ?? ""}`}>{word}</span>;
  }
  return (
    <span
      className={`inline-flex items-center ${className ?? ""}`}
      style={{ gap: size * 0.28 }}
    >
      {mark}
      {word}
    </span>
  );
}

/* ─── Icon ──────────────────────────────────────────────────────────────── */

/** Os 8 ícones próprios da Fluxa. */
const ICONS = {
  presenca: (
    <>
      <circle cx={50} cy={50} r={30} />
      <path d="M50 20 L50 4" />
      <path d="M76 24 L86 14" strokeLinecap="round" />
      <path d="M24 24 L14 14" strokeLinecap="round" />
    </>
  ),
  produto: (
    <>
      <path d="M20 40 L80 40 L74 80 L26 80 Z" />
      <path d="M20 40 C20 20 80 20 80 40" />
      <path d="M50 12 L50 2" />
    </>
  ),
  conversao: <path d="M16 24 L84 24 L56 56 L56 84 L44 78 L44 56 Z" />,
  retencao: (
    <>
      <path d="M78 50 A28 28 0 1 1 64 26" />
      <path d="M64 14 L64 30 L80 30" strokeLinecap="round" />
    </>
  ),
  cliente: (
    <>
      <circle cx={50} cy={34} r={16} />
      <path d="M18 86 C18 62 82 62 82 86" />
    </>
  ),
  restaurante: (
    <>
      <path d="M14 44 L50 16 L86 44" />
      <path d="M24 44 L24 84 L76 84 L76 44" />
      <path d="M42 84 L42 62 L58 62 L58 84" />
    </>
  ),
  dados: (
    <>
      <path d="M20 84 L20 50" strokeLinecap="round" />
      <path d="M50 84 L50 24" strokeLinecap="round" />
      <path d="M80 84 L80 60" />
      <path d="M12 84 L88 84" />
    </>
  ),
  crescimento: (
    <>
      <path d="M14 76 C34 76 40 40 60 40 C80 40 80 20 88 16" />
      <path d="M70 16 L88 16 L88 34" strokeLinecap="round" />
    </>
  ),
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinejoin="round"
      strokeLinecap="butt"
      role="presentation"
      className={`inline-block flex-none ${className ?? ""}`}
    >
      {ICONS[name]}
    </svg>
  );
}

/* ─── Ícones de terceiros usados nos CTAs ───────────────────────────────── */

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-none"
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.7-4.7A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.6 9.2c.3 2.4 3.8 5.9 6.2 6.2l1.2-1.6 2 .9-.5 1.7c-2.9.9-8.7-4.9-7.8-7.8l1.7-.5.9 2-1.7.9" />
    </svg>
  );
}

/**
 * E-mail com um ponto de quebra depois do "@". Em coluna estreita o
 * endereço tem que quebrar em algum lugar; sem isso o navegador parte no
 * meio de "gmail" ("...gmai / l.com").
 */
export function EmailText({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at < 0) return <>{email}</>;
  return (
    <>
      {email.slice(0, at)}
      <wbr />
      {email.slice(at)}
    </>
  );
}

export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
      className="flex-none"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </svg>
  );
}
