
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
    <div className="border-t border-border bg-surface p-4 transition-colors duration-300">

      {/* User information */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-placement-purple to-placement-blue text-sm font-bold text-white">
          {initials || "U"}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-text-primary">
            {name}
          </p>

          <p className="truncate text-xs text-text-muted">
            {role}
          </p>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={logout}
          title="Sign out"
          aria-label="Sign out"
          className="rounded-lg p-2 text-text-muted transition-colors hover:bg-error/10 hover:text-error focus:outline-none focus:ring-2 focus:ring-error/30"
        >
          <LogOut size={17} />
        </button>
      </div>

      {/* Account details */}
      <button
        type="button"
        onClick={() => navigate("profile")}
        className="mt-3 flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-xs text-text-secondary transition-colors hover:bg-surface-hover hover:text-primary"
      >
        Account details

        <ChevronRight size={14} />
      </button>
    </div>
  );
}
