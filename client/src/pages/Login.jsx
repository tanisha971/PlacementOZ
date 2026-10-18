
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import Logo from "../components/common/Logo";
import { useTheme } from "../context/ThemeContext";

const roles = ["Student", "Officer", "Recruiter", "Admin"];

const stats = [
  { value: "25K+", label: "Active Students" },
  { value: "500+", label: "Companies" },
  { value: "92%", label: "Success Rate" },
  { value: "3.5K+", label: "Opportunities" },
];

export default function Login() {
  const { dark } = useTheme();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your existing login API here.
    console.log("Login submitted:", {
      email: formData.email,
      password: formData.password,
      role,
      rememberMe,
    });
  };

  const inputClass = `w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm outline-none transition focus:border-[#593C96] focus:ring-2 focus:ring-[#593C96]/10 ${
    dark
      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-white/35"
      : "border-[#E5E7EB] bg-white text-[#1F1C47] placeholder:text-[#9CA3AF]"
  }`;

  return (
    <main
      className={`grid min-h-screen lg:h-screen lg:grid-cols-2 ${
        dark ? "bg-[#0F1025]" : "bg-[#F8F9FC]"
      }`}
    >
      {/* Left branding panel */}
      <section className="relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#29204F] via-[#593C96] to-[#326CB6] px-7 py-7 text-white sm:px-10 lg:h-screen lg:min-h-0 lg:px-14 lg:py-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#C674CE]/15 blur-3xl"
        />

        <div className="relative z-10">
          <Link to="/" className="inline-flex" aria-label="PlacementOZ home">
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
                className="rounded-xl border border-white/10 bg-white/[0.10] p-4 backdrop-blur-sm"
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
        <div
          className={`w-full max-w-[500px] rounded-[20px] border p-6 shadow-sm sm:p-8 ${
            dark
              ? "border-white/10 bg-[#17182F]"
              : "border-[#E5E7EB] bg-white"
          }`}
        >
          <div className="mb-6">
            <h2
              className={`text-2xl font-bold tracking-tight sm:text-[30px] ${
                dark ? "text-white" : "text-[#1F1C47]"
              }`}
            >
              Welcome back
            </h2>

            <p
              className={`mt-1.5 text-sm sm:text-base ${
                dark ? "text-white/60" : "text-[#6B7280]"
              }`}
            >
              Sign in to your PlacementOZ account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Login role */}
            <div>
              <label
                className={`mb-2 block text-sm font-medium ${
                  dark ? "text-white/80" : "text-[#374151]"
                }`}
              >
                Login as
              </label>

              <div
                className={`grid grid-cols-4 gap-1 rounded-xl p-1 ${
                  dark ? "bg-white/[0.06]" : "bg-[#F4F3FA]"
                }`}
              >
                {roles.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRole(item)}
                    aria-pressed={role === item}
                    className={`rounded-lg px-1 py-2 text-xs font-semibold transition sm:text-sm ${
                      role === item
                        ? "bg-[#593C96] text-white shadow-md shadow-[#593C96]/20"
                        : dark
                          ? "text-white/65 hover:bg-white/[0.06]"
                          : "text-[#4B5563] hover:bg-white"
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
                className={`mb-1.5 block text-sm font-medium ${
                  dark ? "text-white/85" : "text-[#1F2937]"
                }`}
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
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
                  className={`text-sm font-medium ${
                    dark ? "text-white/85" : "text-[#1F2937]"
                  }`}
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#593C96] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
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
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#593C96]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label
              className={`flex cursor-pointer items-center gap-2.5 text-sm ${
                dark ? "text-white/60" : "text-[#6B7280]"
              }`}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-[#593C96]"
              />
              Remember me
            </label>

            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            {/* Sign in */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#593C96] py-3 font-semibold text-white shadow-md shadow-[#593C96]/15 transition hover:bg-[#4B3280] focus:outline-none focus:ring-2 focus:ring-[#593C96]/40 focus:ring-offset-2"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-4">
            <div
              className={`h-px flex-1 ${
                dark ? "bg-white/10" : "bg-[#E5E7EB]"
              }`}
            />
            <span className="text-sm text-[#9CA3AF]">OR</span>
            <div
              className={`h-px flex-1 ${
                dark ? "bg-white/10" : "bg-[#E5E7EB]"
              }`}
            />
          </div>

          {/* Google sign-in */}
          <button
            type="button"
            onClick={() => setError("Google sign-in is not connected yet.")}
            className={`flex w-full items-center justify-center gap-3 rounded-xl border py-3 text-sm font-semibold transition ${
              dark
                ? "border-white/10 text-white hover:bg-white/[0.05]"
                : "border-[#E5E7EB] text-[#1F2937] hover:bg-[#F8F9FC]"
            }`}
          >
            <span className="text-lg font-bold text-[#4285F4]">G</span>
            Continue with Google
          </button>

          {/* Register link */}
          <p
            className={`mt-6 text-center text-sm ${
              dark ? "text-white/60" : "text-[#6B7280]"
            }`}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#593C96] hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
