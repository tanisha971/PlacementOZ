
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

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
  const [user] = useState(getStoredUser);
  const role = user.role || "Student";

  return (
    <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
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
