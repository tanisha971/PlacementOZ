
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { useTheme } from "../context/ThemeContext";

function getStoredUser() {
  try {
    return JSON.parse(
      sessionStorage.getItem("placementoz_user") || "{}"
    );
  } catch {
    return {};
  }
}

export default function DashboardLayout() {
  const { dark } = useTheme();
  const [user] = useState(getStoredUser);
  const role = user.role || "Student";

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        dark
          ? "bg-[#10111F] text-white"
          : "bg-[#F7F8FC] text-[#17152F]"
      }`}
    >
      {/* Fixed left sidebar */}
      <DashboardSidebar role={role} />

      {/* Main application area */}
      <div className="min-h-screen min-w-0 lg:ml-[288px]">
        {/* Fixed-height top navbar */}
        <DashboardNavbar role={role} />

        {/* Nested route content */}
        <main className="min-w-0 px-4 py-4 sm:px-6 lg:px-8">
          <Outlet context={{ user, role }} />
        </main>
      </div>
    </div>
  );
}
