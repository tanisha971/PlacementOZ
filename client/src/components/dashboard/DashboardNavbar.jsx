
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

  return (
    <header
      className={`sticky top-0 z-30 flex h-[81px] items-center gap-4 border-b px-5 sm:px-7 ${
        dark
          ? "border-white/10 bg-[#17182F] text-white"
          : "border-slate-200 bg-white text-[#1F1C47]"
      }`}
    >
      <div className="relative w-full max-w-[545px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          placeholder="Search jobs, companies, skills..."
          aria-label="Search jobs, companies, and skills"
          className={`h-11 w-full rounded-2xl border-0 pl-11 pr-4 text-sm outline-none ring-1 ring-transparent focus:ring-[#593C96]/40 ${
            dark
              ? "bg-white/[0.06] text-white placeholder:text-white/40"
              : "bg-[#F4F3FA] text-[#1F1C47] placeholder:text-slate-400"
          }`}
        />
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          onClick={toggle}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#593C96]"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          type="button"
          onClick={() => navigate("notifications")}
          aria-label="Notifications"
          className="relative rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#593C96]"
        >
          <Bell size={21} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <button
          type="button"
          onClick={() => navigate("profile")}
          className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#593C96]/40"
          aria-label="Open profile"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#593C96] to-[#326CB6] text-sm font-bold text-white">
            {initials || "U"}
          </span>
          <ChevronDown size={15} className="hidden text-slate-400 sm:block" />
        </button>
      </div>
    </header>
  );
}
