
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  ArrowLeft,
  LayoutDashboard,
  Home,
} from "lucide-react";

import Logo from "../../components/common/Logo";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10 transition-colors duration-300">
      <div className="w-full max-w-lg text-center">

        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Link to="/" aria-label="PlacementOZ home">
            <Logo size="lg" />
          </Link>
        </div>

        {/* Access denied icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">
          <ShieldAlert
            size={48}
            strokeWidth={1.6}
            className="text-primary"
          />
        </div>

        {/* Message */}
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Error 403
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
          Access Denied
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-text-secondary">
          You don't have permission to access this page.
          Please sign in with an account that has the required
          access, or return to your dashboard.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>

          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-text-inverse shadow-md shadow-primary/20 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background"
          >
            <LayoutDashboard size={17} />
            Student Dashboard
          </Link>
        </div>

        {/* Home link */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-primary"
        >
          <Home size={16} />
          Back to Home
        </Link>

        {/* Copyright */}
        <p className="mt-12 text-xs text-text-muted">
          © {new Date().getFullYear()} PlacementOZ · Placement Optimize
        </p>
      </div>
    </main>
  );
}
