
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import Logo from "../../components/common/Logo";

const roles = ["Student", "Officer", "Recruiter", "Admin"];

const stats = [
  { value: "25K+", label: "Active Students" },
  { value: "500+", label: "Companies" },
  { value: "92%", label: "Success Rate" },
  { value: "3.5K+", label: "Opportunities" },
];

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      sessionStorage.setItem("placementoz_token", data.token);
      sessionStorage.setItem("placementoz_user", JSON.stringify(data.user));

      navigate("/student/dashboard", { replace: true });
    } catch {
      setError("Cannot connect to the server. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10";

  return (
    <main className="grid min-h-screen bg-background transition-colors duration-300 lg:h-screen lg:grid-cols-2">

      {/* Left branding panel */}
      <section className="relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-gradient-to-br from-placement-navy via-placement-purple to-placement-blue px-7 py-7 text-white sm:px-10 lg:h-screen lg:min-h-0 lg:px-14 lg:py-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-placement-pink/15 blur-3xl"
        />

        <div className="relative z-10">
          <Link
            to="/"
            className="inline-flex"
            aria-label="PlacementOZ home"
          >
            <Logo size="lg" dark />
          </Link>
        </div>

        <div className="relative z-10 my-10 lg:my-0">
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Your placement journey starts here.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Access AI-powered job matching, skill gap analysis, and placement
            tracking — all in one intelligent platform.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3.5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-extrabold sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-white/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-sm text-white/50">
          © {new Date().getFullYear()} PlacementOZ · Placement Optimize
        </p>
      </section>

      {/* Right login panel */}
      <section className="flex items-center justify-center px-4 py-6 sm:px-8 lg:h-screen lg:overflow-y-auto lg:px-10 lg:py-5">
        <div className="w-full max-w-[500px] rounded-[20px] border border-border bg-surface p-6 shadow-sm transition-colors duration-300 sm:p-8">

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-[30px]">
              Welcome back
            </h2>

            <p className="mt-1.5 text-sm text-text-secondary sm:text-base">
              Sign in to your PlacementOZ account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Login role */}
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">
                Login as
              </label>

              <div className="grid grid-cols-4 gap-1 rounded-xl bg-surface-secondary p-1">
                {roles.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRole(item)}
                    aria-pressed={role === item}
                    className={`rounded-lg px-1 py-2 text-xs font-semibold transition sm:text-sm ${
                      role === item
                        ? "bg-primary text-text-inverse shadow-md shadow-primary/20"
                        : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="login-email"
                className="mb-1.5 block text-sm font-medium text-text-primary"
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <label
                  htmlFor="login-password"
                  className="text-sm font-medium text-text-primary"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-primary"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex cursor-pointer items-center gap-2.5 text-sm text-text-secondary">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-primary"
              />
              Remember me
            </label>

            {/* Error message */}
            {error && (
              <p
                role="alert"
                className="rounded-lg border border-error/20 bg-error/10 px-3 py-2 text-sm text-error"
              >
                {error}
              </p>
            )}

            {/* Sign in */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-text-inverse shadow-md shadow-primary/15 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-surface"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-sm text-text-muted">OR</span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google sign-in */}
          <button
            type="button"
            onClick={() => setError("Google sign-in is not connected yet.")}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-border py-3 text-sm font-semibold text-text-primary transition hover:bg-surface-hover"
          >
            <span className="text-lg font-bold text-info">G</span>
            Continue with Google
          </button>

          {/* Register link */}
          <p className="mt-6 text-center text-sm text-text-secondary">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
