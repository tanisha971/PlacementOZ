
import { useState } from "react";
import { LogOut, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileBar() {
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

  const name = user.name || "Student";
  const role = user.role || "Student";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  function logout() {
    sessionStorage.removeItem("placementoz_token");
    sessionStorage.removeItem("placementoz_user");
    navigate("/login", { replace: true });
  }

  return (
    <div className="border-t border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#593C96] text-sm font-bold text-white">
          {initials || "U"}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[#1F1C47]">
            {name}
          </p>
          <p className="truncate text-xs text-slate-500">
            {role}
          </p>
        </div>

        <button
          type="button"
          onClick={logout}
          title="Sign out"
          aria-label="Sign out"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={17} />
        </button>
      </div>

      <button
        type="button"
        onClick={() => navigate("profile")}
        className="mt-3 flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-xs text-slate-500 transition hover:bg-slate-50 hover:text-[#593C96]"
      >
        Account details
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
