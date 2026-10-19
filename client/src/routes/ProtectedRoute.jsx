
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ProtectedRoute({ allowedRoles = [] }) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function verifySession() {
      const token = sessionStorage.getItem("placementoz_token");

      if (!token) {
        if (!cancelled) setStatus("unauthenticated");
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok || !data.user) {
          sessionStorage.removeItem("placementoz_token");
          sessionStorage.removeItem("placementoz_user");

          if (!cancelled) setStatus("unauthenticated");
          return;
        }

        sessionStorage.setItem(
          "placementoz_user",
          JSON.stringify(data.user)
        );

        if (
          allowedRoles.length > 0 &&
          !allowedRoles.includes(data.user.role)
        ) {
          if (!cancelled) setStatus("forbidden");
          return;
        }

        if (!cancelled) setStatus("authenticated");
      } catch {
        // Keep the session intact if the server is temporarily offline.
        if (!cancelled) setStatus("error");
      }
    }

    verifySession();

    return () => {
      cancelled = true;
    };
  }, [allowedRoles]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center text-[#593C96]">
        Verifying your session...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  if (status === "forbidden") {
    return <Navigate to="/unauthorized" replace />;
  }

  if (status === "error") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3">
        <p>Unable to verify your session. Check your server connection.</p>
        <button
          className="rounded-lg bg-[#593C96] px-4 py-2 text-white"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    );
  }

  return <Outlet />;
}
