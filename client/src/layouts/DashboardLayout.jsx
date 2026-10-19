
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
      className={`min-h-screen ${
        dark ? "bg-[#0F1025] text-white" : "bg-[#F7F8FC] text-[#1F1C47]"
      }`}
    >
      <DashboardSidebar role={role} />

      <div className="min-h-screen lg:ml-[250px]">
        <DashboardNavbar role={role} />

        <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-9 lg:py-8">
          <Outlet context={{ user, role }} />
        </main>
      </div>
    </div>
  );
}
