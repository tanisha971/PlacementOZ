
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
      className={`flex flex-col items-center justify-center gap-5
        bg-[#F7F8FC] text-[#1F1C47]
        dark:bg-[#10111F] dark:text-white
        ${fullScreen ? "min-h-screen w-full" : "min-h-[240px] w-full"}
      `}
    >
      {/* Brand */}
      <div className="animate-pulse">
        <Logo />
      </div>

      {/* Animated loader */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border-4 border-violet-100 dark:border-violet-950" />

        <LoaderCircle
          size={54}
          strokeWidth={3}
          className="animate-spin text-violet-600 dark:text-violet-400"
        />
      </div>

      {/* Loading text */}
      <div className="space-y-2 text-center">
        <p className="text-base font-semibold">
          {message}
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Just a moment while everything gets ready.
        </p>
      </div>

      {/* Animated progress indicator */}
      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-violet-100 dark:bg-gray-800">
        <div className="h-full w-1/2 animate-loader-progress rounded-full bg-violet-600 dark:bg-violet-400" />
      </div>
    </div>
  );
}
