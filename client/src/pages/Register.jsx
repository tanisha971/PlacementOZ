
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Circle,
} from "lucide-react";
import Logo from "../components/common/Logo";
import { useTheme } from "../context/ThemeContext";

const roles = [
  {
    value: "Student",
    description: "Looking for placement opportunities",
    icon: GraduationCap,
  },
  {
    value: "Officer",
    description: "Managing placement activities",
    icon: BriefcaseBusiness,
  },
  {
    value: "Recruiter",
    description: "Hiring candidates from campus",
    icon: Building2,
  },
];

const benefits = [
  "AI-powered job matching tailored to your profile",
  "Real-time skill gap analysis and learning plans",
  "Track every application with smart notifications",
  "Mock interviews with AI feedback",
];

export default function Register() {
  const [role, setRole] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      // Temporary starter approach for local development.
      sessionStorage.setItem("placementoz_token", data.token);
      sessionStorage.setItem("placementoz_user", JSON.stringify(data.user));

      // Redirect after successful registration.
      navigate("/login", { replace: true });
    } catch {
      setError("Cannot connect to the server. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#E5E7EB] bg-white py-2.5 pl-10 pr-3 text-sm text-[#1F1C47] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#593C96] focus:ring-2 focus:ring-[#593C96]/10";

  return (
    <main className="grid min-h-screen bg-[#F8F9FC] lg:grid-cols-2">
      {/* Left branding panel */}
      <section className="relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#29204F] via-[#593C96] to-[#C674CE] px-7 py-9 text-white sm:px-10 lg:min-h-screen lg:px-11 lg:py-12">
        <div className="relative z-10">
          <Link to="/" aria-label="PlacementOZ home">
            <Logo size="md" dark />
          </Link>
        </div>

        <div className="relative z-10 my-12 lg:my-0">
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Join thousands of students optimizing their placement journey.
          </h1>

          <ul className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm leading-6 text-white/85"
              >
                <span className="mt-1 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-white/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-sm text-white/50">
          © {new Date().getFullYear()} PlacementOZ · Placement Optimize
        </p>
      </section>

      {/* Registration form */}
      <section className="flex items-center justify-center px-4 py-8 sm:px-8">
        <div className="w-full max-w-[402px] rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-[22px] font-bold tracking-tight text-[#1F1C47]">
            Create your account
          </h2>

          <p className="mt-1 text-xs text-[#6B7280]">
            Start your placement optimization journey
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Role selection */}
            <fieldset>
              <legend className="mb-2 text-xs font-medium text-[#1F1C47]">
                I am a
              </legend>

              <div className="space-y-2">
                {roles.map(({ value, description, icon: Icon }) => {
                  const selected = role === value;

                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRole(value)}
                      aria-pressed={selected}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition ${
                        selected
                          ? "border-[#593C96] bg-[#593C96]/[0.045]"
                          : "border-[#E5E7EB] hover:border-[#593C96]/40"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          selected
                            ? "bg-[#593C96] text-white"
                            : "bg-[#F4F3FA] text-[#593C96]"
                        }`}
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-xs font-semibold ${
                            selected ? "text-[#593C96]" : "text-[#1F1C47]"
                          }`}
                        >
                          {value === "Officer"
                            ? "Placement Officer"
                            : value}
                        </span>
                        <span className="mt-0.5 block text-[10px] leading-4 text-[#6B7280]">
                          {description}
                        </span>
                      </span>

                      <span
                        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                          selected
                            ? "border-[#593C96] bg-[#593C96]"
                            : "border-[#D1D5DB]"
                        }`}
                      >
                        {selected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Full name */}
            <div>
              <label
                htmlFor="register-name"
                className="mb-1.5 block text-xs font-medium text-[#1F1C47]"
              >
                Full Name
              </label>

              <div className="relative">
                <UserRound
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />
                <input
                  id="register-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Aditya Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="register-email"
                className="mb-1.5 block text-xs font-medium text-[#1F1C47]"
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />
                <input
                  id="register-email"
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
              <label
                htmlFor="register-password"
                className="mb-1.5 block text-xs font-medium text-[#1F1C47]"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />
                <input
                  id="register-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Min. 8 characters"
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`${inputClass} pr-10`}
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#593C96]"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="register-confirm-password"
                className="mb-1.5 block text-xs font-medium text-[#1F1C47]"
              >
                Confirm Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />
                <input
                  id="register-confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Repeat password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className={`${inputClass} pr-10`}
                />
                <button
                  type="button"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#593C96]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={15} />
                  ) : (
                    <Eye size={15} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="text-xs text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#593C96] py-3 text-sm font-semibold text-white transition hover:bg-[#4B3280] focus:outline-none focus:ring-2 focus:ring-[#593C96]/40 focus:ring-offset-2"
            >
              Create Account
              <ArrowRight size={16} />
            </button>

            <label className="flex items-start justify-center gap-2 text-center text-[10px] leading-5 text-[#6B7280]">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                required
                className="mt-1 accent-[#593C96]"
              />
              <span>
                By registering you agree to our{" "}
                <Link
                  to="/terms"
                  className="font-medium text-[#593C96] hover:underline"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-medium text-[#593C96] hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            <p className="pt-1 text-center text-xs text-[#6B7280]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#593C96] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
