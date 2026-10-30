
import { useId } from "react";

export default function Logo({ size = "md", dark = false }) {
  const gradientId = useId();

  const sizes = {
    sm: 28,
    md: 36,
    lg: 48,
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const s = sizes[size] ?? sizes.md;
  const textSize = textSizes[size] ?? textSizes.md;

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={s}
        height={s}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="var(--color-placement-purple)" />
            <stop offset="100%" stopColor="var(--color-placement-blue)" />
          </linearGradient>
        </defs>

        <path
          d="M24 3L43.05 13.5V34.5L24 45L4.95 34.5V13.5L24 3Z"
          fill={`url(#${gradientId})`}
        />

        <path
          d="M17 17.5C17 15.567 18.567 14 20.5 14C22.433 14 24 15.567 24 17.5C24 19.433 22.433 21 20.5 21C18.567 21 17 19.433 17 17.5Z"
          fill="white"
        />

        <path
          d="M20.5 21C18.567 21 17 22.567 17 24.5V30H24V24.5C24 22.567 22.433 21 20.5 21Z"
          fill="white"
          opacity="0.85"
        />

        <path
          d="M25 23.5C25 21.567 26.567 20 28.5 20C30.433 20 32 21.567 32 23.5C32 25.433 30.433 27 28.5 27C26.567 27 25 25.433 25 23.5Z"
          fill="var(--color-placement-pink)"
        />

        <path
          d="M32 32.5C32 30.567 30.433 29 28.5 29C26.567 29 25 30.567 25 32.5V35H32V32.5Z"
          fill="var(--color-placement-pink)"
          opacity="0.8"
        />
      </svg>

      
      <div>
        <div
          className={`font-bold leading-none ${textSize} ${
            dark ? "text-white" : "text-text-primary"
          }`}
        >
          PlacementOZ
        </div>

        {size !== "sm" && (
          <div
            className={`mt-0.5 text-[10px] font-medium leading-none tracking-wide ${
              dark ? "text-white/70" : "text-primary"
            }`}
          >
            PLACEMENT OPTIMIZE
          </div>
        )}
      </div>

    </div>
  );
}
