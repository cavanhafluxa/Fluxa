"use client";

import type { ReactNode } from "react";
import { Children } from "react";

/**
 * OrbitingCircles — primitive adaptado do padrão open-source da magicui.design
 * (dillionverma/orbiting-circles), reimplementado sem dependências externas
 * (sem clsx/tailwind-merge no projeto). Usa CSS custom properties + a keyframe
 * `orbit` definida em globals.css.
 */
export function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 56,
}: {
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
}) {
  const items = Children.toArray(children);
  const count = items.length || 1;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <circle
            className="stroke-black/[0.07]"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>
      )}
      {items.map((child, index) => {
        const angle = (360 / count) * index;
        return (
          <div
            key={index}
            style={
              {
                "--duration": duration,
                "--radius": radius,
                "--angle": angle,
                position: "absolute",
                left: "50%",
                top: "50%",
                width: iconSize,
                height: iconSize,
                marginLeft: -iconSize / 2,
                marginTop: -iconSize / 2,
              } as React.CSSProperties
            }
            className={`flex animate-orbit items-center justify-center ${
              reverse ? "[animation-direction:reverse]" : ""
            } ${className}`}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
