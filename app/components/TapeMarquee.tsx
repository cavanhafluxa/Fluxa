type TapeMarqueeProps = {
  items: string[];
  variant?: "carvao" | "cream" | "brasa" | "red";
  tilt?: number;
  fast?: boolean;
  className?: string;
};

const variantMap: Record<
  NonNullable<TapeMarqueeProps["variant"]>,
  { bg: string; text: string; border: string; dot: string }
> = {
  carvao: {
    bg: "bg-carvao",
    text: "text-massa-cream",
    border: "border-y-2 border-massa-cream",
    dot: "text-brasa",
  },
  cream: {
    bg: "bg-massa-cream",
    text: "text-carvao",
    border: "border-y-2 border-carvao",
    dot: "text-fluxa-red",
  },
  brasa: {
    bg: "bg-brasa",
    text: "text-carvao",
    border: "border-y-2 border-carvao",
    dot: "text-fluxa-red",
  },
  red: {
    bg: "bg-fluxa-red",
    text: "text-massa-cream",
    border: "border-y-2 border-massa-cream",
    dot: "text-brasa",
  },
};

export function TapeMarquee({
  items,
  variant = "carvao",
  tilt = -2,
  fast = false,
  className = "",
}: TapeMarqueeProps) {
  const v = variantMap[variant];
  const track = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative overflow-hidden ${v.bg} ${v.text} ${v.border} ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
      aria-hidden="true"
    >
      <div className={`marquee ${fast ? "marquee-fast" : ""} py-4`}>
        {track.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-8 whitespace-nowrap font-display text-2xl uppercase tracking-tight md:text-3xl"
          >
            {item}
            <span className={`${v.dot} text-2xl md:text-3xl`}>★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
