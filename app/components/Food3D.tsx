type Food3DProps = {
  src: string;
  alt: string;
  size?: number;
  rotate?: number;
  className?: string;
  shadow?: "normal" | "soft" | "none";
  float?: "none" | "slow" | "slower";
};

export function Food3D({
  src,
  alt,
  size = 240,
  rotate = 0,
  className = "",
  shadow = "normal",
  float = "none",
}: Food3DProps) {
  const shadowClass =
    shadow === "normal"
      ? "food-3d"
      : shadow === "soft"
        ? "food-3d-soft"
        : "";
  const floatClass =
    float === "slow"
      ? "float-3d float-3d-slow"
      : float === "slower"
        ? "float-3d float-3d-slower"
        : "";

  return (
    <div
      className={`select-none ${floatClass} ${className}`}
      style={
        {
          width: size,
          height: size,
          ["--rot" as string]: `${rotate}deg`,
          transform: floatClass ? undefined : `rotate(${rotate}deg)`,
        } as React.CSSProperties
      }
      aria-hidden={alt === ""}
    >
      <div className="food-slot h-full w-full">
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={shadowClass}
        />
      </div>
    </div>
  );
}
