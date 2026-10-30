
import { LoaderCircle } from "lucide-react";
import Logo from "./Logo";

export default function Loader({
  message = "Preparing your placement journey...",
  fullScreen = true,
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex w-full flex-col items-center justify-center gap-5 bg-background text-text-primary transition-colors duration-300 ${
        fullScreen ? "min-h-screen" : "min-h-[240px]"
      }`}
    >
      {/* Brand */}
      <div className="animate-pulse">
        <Logo />
      </div>

      {/* Animated loader */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border-4 border-primary/10" />

        <LoaderCircle
          size={54}
          strokeWidth={3}
          className="animate-spin text-primary"
        />
      </div>

      {/* Loading text */}
      <div className="space-y-2 text-center">
        <p className="text-base font-semibold text-text-primary">
          {message}
        </p>

        <p className="text-sm text-text-muted">
          Just a moment while everything gets ready.
        </p>
      </div>

      {/* Animated progress indicator */}
      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-primary/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
      </div>
    </div>
  );
}
