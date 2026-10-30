
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Moon,
  Sun,
  Bell,
  ChevronDown,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function DashboardNavbar({ role = "Student" }) {
  const { dark, toggle } = useTheme();
  const navigate = useNavigate();

  const [user] = useState(() => {
    try {
      return JSON.parse(
        sessionStorage.getItem("placementoz_user") || "{}"
      );
    } catch {
      return {};
    }
  });

  const initials = (user.name || role)
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const iconButtonClass =
    "rounded-full p-2 text-text-secondary transition-colors hover:bg-surface-hover hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <header className="sticky top-0 z-30 flex h-[78px] items-center gap-4 border-b border-border bg-surface px-5 text-text-primary transition-colors duration-300 sm:px-7">

      {/* Search */}
      <div className="relative w-full max-w-[545px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
        />

        <input
          type="search"
          placeholder="Search jobs, companies, skills..."
          aria-label="Search jobs, companies, and skills"
          className="h-11 w-full rounded-2xl border border-transparent bg-surface-secondary pl-11 pr-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary/30 focus:ring-2 focus:ring-primary/10"
        />
      </div>

      {/* Right actions */}
      <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggle}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className={iconButtonClass}
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <button
          type="button"
          onClick={() => navigate("notifications")}
          aria-label="Notifications"
          className={`relative ${iconButtonClass}`}
        >
          <Bell size={21} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-error ring-2 ring-surface" />
        </button>

        {/* Profile */}
        <button
          type="button"
          onClick={() => navigate("profile")}
          className="flex items-center gap-2 rounded-full transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Open profile"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-placement-purple to-placement-blue text-sm font-bold text-white">
            {initials || "U"}
          </span>

          <ChevronDown
            size={15}
            className="hidden text-text-muted sm:block"
          />
        </button>
      </div>
    </header>
  );
}
