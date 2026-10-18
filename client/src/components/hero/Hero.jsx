
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  ArrowRight,
  GraduationCap,
  UserRound,
  UsersRound,
  ShieldCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Bell,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const roles = [
  { name: "Student", icon: GraduationCap },
  { name: "Placement Officer", icon: UserRound },
  { name: "Recruiter", icon: UsersRound },
  { name: "Admin", icon: ShieldCheck },
];

const skills = [
  { name: "Java", score: 92, color: "#593C96" },
  { name: "React", score: 82, color: "#3287AE" },
  { name: "SQL", score: 88, color: "#326CB6" },
  { name: "Spring Boot", score: 45, color: "#F59E0B" },
];

const jobs = [
  {
    role: "Software Engineer",
    company: "Microsoft",
    score: "94%",
    initial: "M",
    color: "#593C96",
    background: "bg-[#593C96]/10",
  },
  {
    role: "Backend Developer",
    company: "TCS",
    score: "89%",
    initial: "T",
    color: "#3287AE",
    background: "bg-[#3287AE]/10",
  },
];

const metrics = [
  {
    label: "Applied",
    value: "08",
    icon: BriefcaseBusiness,
    color: "#593C96",
    background: "bg-[#593C96]/10",
  },
  {
    label: "Shortlisted",
    value: "03",
    icon: CheckCircle2,
    color: "#22A06B",
    background: "bg-[#22A06B]/10",
  },
  {
    label: "Profile",
    value: "92%",
    icon: UserRound,
    color: "#3287AE",
    background: "bg-[#3287AE]/10",
  },
  {
    label: "Recommended",
    value: "24",
    icon: Target,
    color: "#326CB6",
    background: "bg-[#326CB6]/10",
  },
];

export default function Hero() {
  const { dark } = useTheme();
  const [selectedRole, setSelectedRole] = useState("Student");

  const mutedText = dark ? "text-white/55" : "text-[#6B7280]";
  const headingText = dark ? "text-white" : "text-[#1F1C47]";

  const dashboardCard = dark
    ? "border-white/10 bg-white/[0.035]"
    : "border-[#E5E7EB] bg-white";

  const registerRole = selectedRole.toLowerCase().replace(/\s+/g, "-");

  return (
    <section
      id="home"
      className={`relative overflow-hidden pt-28 pb-20 transition-colors duration-300 sm:pt-32 lg:min-h-[720px] lg:pb-24 ${
        dark
          ? "bg-[#0F1025]"
          : "bg-gradient-to-br from-[#F8F9FC] via-white to-[#F4F3FA]"
      }`}
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-[#593C96]/20" : "bg-[#593C96]/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 rounded-full blur-3xl ${
          dark ? "bg-[#326CB6]/20" : "bg-[#326CB6]/10"
        }`}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">

        {/* LEFT: Hero content */}
        <div className="relative z-10 animate-fade-in">

          {/* Eyebrow */}
          <div
            className={`mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
              dark
                ? "border-[#C674CE]/30 bg-[#593C96]/20 text-[#D9B8F0]"
                : "border-[#593C96]/20 bg-[#593C96]/5 text-[#593C96]"
            }`}
          >
            <Zap size={16} />
            AI-Powered Placement Intelligence
          </div>

          {/* Heading */}
          <h1
            className={`max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl ${headingText}`}
          >
            Optimize Your Journey. Land Your{" "}
            <span className="bg-gradient-to-r from-[#593C96] via-[#C674CE] to-[#326CB6] bg-clip-text text-transparent">
              Dream Job.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mt-7 max-w-2xl text-base leading-8 sm:text-lg ${dark ? "text-white/70" : "text-[#4B5563]"}`}
          >
            PlacementOZ is an AI-powered placement optimization platform that
            helps students discover the right opportunities, improve their
            skills, and achieve their dream placements.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to={`/register?role=${encodeURIComponent(registerRole)}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#593C96] to-[#326CB6] px-7 py-2 font-semibold text-white shadow-lg shadow-[#593C96]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#593C96]"
            >
              Get Started
              <ArrowRight size={19} />
            </Link>

            <a
              href="#companies"
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-4 font-semibold transition-colors ${
                dark
                  ? "border-white/15 text-white hover:bg-white/5"
                  : "border-[#E5E7EB] bg-white/60 text-[#1F1C47] hover:border-[#593C96]/40 hover:bg-[#593C96]/5"
              }`}
            >
              Explore Opportunities
            </a>
          </div>

          {/* Interactive role selector */}
          <div className="mt-10">
            <p className={`mb-4 text-sm font-medium ${mutedText}`}>
              I am a
            </p>

            <div className="flex flex-wrap gap-2.5">
              {roles.map(({ name, icon: Icon }) => {
                const isSelected = selectedRole === name;

                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSelectedRole(name)}
                    aria-pressed={isSelected}
                    className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-3 text-sm font-semibold transition-all duration-200 sm:px-4 ${
                      isSelected
                        ? "border-[#593C96] bg-[#593C96] text-white shadow-md shadow-[#593C96]/20"
                        : dark
                          ? "border-white/10 bg-white/[0.04] text-white/75 hover:border-[#C674CE]/50 hover:bg-white/[0.08]"
                          : "border-[#E5E7EB] bg-white text-[#4B5563] hover:border-[#593C96]/40 hover:bg-[#593C96]/5"
                    }`}
                  >
                    <Icon size={17} strokeWidth={1.8} />
                    {name}
                  </button>
                );
              })}
            </div>

            <p className={`mt-3 text-xs ${mutedText}`}>
              {selectedRole === "Student" &&
                "Discover jobs, identify skill gaps, and track applications."}
              {selectedRole === "Placement Officer" &&
                "Coordinate campus drives and monitor placement outcomes."}
              {selectedRole === "Recruiter" &&
                "Discover candidates and manage recruitment opportunities."}
              {selectedRole === "Admin" &&
                "Manage platform users, access, and system activity."}
            </p>
          </div>
        </div>

        {/* RIGHT: AI dashboard */}
        <div className="relative mx-auto w-full max-w-[640px] lg:ml-auto lg:mr-1">

          {/* Dashboard glow */}
          <div
            aria-hidden="true"
            className={`absolute -inset-5 -z-10 rounded-[40px] blur-2xl ${
              dark
                ? "bg-gradient-to-br from-[#593C96]/25 via-[#C674CE]/10 to-[#326CB6]/20"
                : "bg-gradient-to-br from-[#593C96]/15 via-[#C674CE]/10 to-[#326CB6]/15"
            }`}
          />

          <div
            className={`relative overflow-hidden rounded-[24px] border shadow-2xl transition-colors duration-300 ${
              dark
                ? "border-white/10 bg-[#171832] shadow-black/40"
                : "border-white bg-white shadow-[#1F1C47]/15"
            }`}
          >

            {/* Dashboard header */}
            <div className="flex items-center justify-between gap-3 bg-[#1F1C47] px-4 py-2 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex shrink-0 gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6267]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFC83D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#20D997]" />
                </div>

                
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white sm:text-sm">
                    PlacementOZ Intelligence
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#C674CE]/30 bg-[#C674CE]/15 px-2.5 py-1.5 text-[10px] font-semibold text-[#E6B6F0] sm:text-xs">
                <Sparkles size={13} />
                AI Powered
              </div>
            </div>

            <div className="space-y-4 p-3 sm:space-y-5 sm:p-5">

              

              {/* Match score and KPI cards */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3">

                {/* Match score */}
                <div
                  className={`col-span-2 flex flex-col items-center justify-center rounded-2xl border p-3 sm:p-4 ${
                    dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-[#E5E7EB] bg-gradient-to-br from-white to-[#F8F6FF]"
                  }`}
                >
                  <div className="relative flex h-[76px] w-[76px] items-center justify-center sm:h-[92px] sm:w-[92px]">
                    <svg
                      viewBox="0 0 100 100"
                      className="-rotate-90"
                      width="100%"
                      height="100%"
                      role="img"
                      aria-label="Illustrative 92 percent match score"
                    >
                      <defs>
                        <linearGradient id="oz-match-gradient">
                          <stop offset="0%" stopColor="#593C96" />
                          <stop offset="100%" stopColor="#326CB6" />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke={dark ? "#383453" : "#EAE5F6"}
                        strokeWidth="9"
                      />

                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#oz-match-gradient)"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42 * 0.92} ${2 * Math.PI * 42}`}
                      />
                    </svg>

                    <div className="absolute text-center">
                      <p className={`text-xl font-extrabold sm:text-2xl ${headingText}`}>
                        92%
                      </p>
                      <p className={`text-[9px] sm:text-[10px] ${mutedText}`}>
                        Match score
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-[#22A06B] sm:text-xs">
                    <CheckCircle2 size={13} />
                    Excellent match
                  </div>
                </div>

                {/* Metrics */}
                <div className="col-span-3 grid grid-cols-2 gap-2 sm:gap-3">
                  {metrics.map(({ label, value, icon: Icon, color, background }) => (
                    <div
                      key={label}
                      className={`flex min-w-0 items-center gap-2 rounded-xl border p-2.5 sm:gap-3 sm:p-3 ${
                        dark
                          ? "border-white/10 bg-white/[0.035]"
                          : "border-[#E5E7EB] bg-white"
                      }`}
                    >
                      <div
                        className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:flex ${background}`}
                        style={{ color }}
                      >
                        <Icon size={17} />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="text-lg font-extrabold sm:text-xl"
                          style={{ color }}
                        >
                          {value}
                        </p>
                        <p className={`truncate text-[10px] sm:text-xs ${mutedText}`}>
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill profile */}
              <div className={`rounded-2xl border p-3.5 sm:p-4 ${dashboardCard}`}>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#593C96]/10 text-[#8D6BD0]">
                      <Sparkles size={16} />
                    </div>

                    <div>
                      <h3 className={`text-xs font-bold sm:text-sm ${headingText}`}>
                        Your Skill Profile
                      </h3>
                  
                    </div>
                  </div>

                  
                </div>

                <div className="space-y-3">
                  {skills.map(({ name, score, color }) => (
                    <div key={name}>
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <span className={`text-[10px] font-medium sm:text-xs ${dark ? "text-white/75" : "text-[#4B5563]"}`}>
                          {name}
                        </span>

                        <span
                          className="text-[10px] font-bold sm:text-xs"
                          style={{ color }}
                        >
                          {score}%
                        </span>
                      </div>

                      <div className={`h-1.5 overflow-hidden rounded-full ${dark ? "bg-white/10" : "bg-[#F0EFF7]"}`}>
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${score}%`, backgroundColor: color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI insight */}
                <div className={`mt-4 flex items-start gap-2 rounded-xl p-3 ${dark ? "bg-[#F59E0B]/10" : "bg-[#FFF8E8]"}`}>
                  <Sparkles size={15} className="mt-0.5 shrink-0 text-[#F59E0B]" />

                  <p className={`text-[10px] leading-relaxed sm:text-xs ${dark ? "text-white/75" : "text-[#72521A]"}`}>
                    <span className="font-bold">AI insight:</span>{" "}
                    Strengthen Spring Boot to improve your backend role readiness.
                  </p>
                </div>
              </div>

              {/* Recommended jobs */}
              <div className={`rounded-2xl border p-3.5 sm:p-4 ${dashboardCard}`}>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div>
                    <h3 className={`text-xs font-bold sm:text-sm ${headingText}`}>
                      Recommended Opportunities
                    </h3>
                    
                  </div>

                  <a
                    href="#companies"
                    className="flex shrink-0 items-center gap-1 text-[10px] font-semibold text-[#8D6BD0] hover:text-[#326CB6]"
                  >
                    Explore <ArrowRight size={12} />
                  </a>
                </div>

                <div className="space-y-2">
                  {jobs.map((job) => (
                    <div
                      key={job.role}
                      className={`flex items-center gap-3 rounded-xl p-2.5 transition-colors ${
                        dark
                          ? "bg-white/[0.035] hover:bg-white/[0.07]"
                          : "bg-[#F8F9FC] hover:bg-[#F2EEFC]"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${job.background}`}
                        style={{ color: job.color }}
                      >
                        {job.initial}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className={`truncate text-[11px] font-bold sm:text-xs ${headingText}`}>
                          {job.role}
                        </p>
                        <p className={`mt-0.5 text-[10px] ${mutedText}`}>
                          {job.company}
                        </p>
                      </div>

                      <span
                        className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
                        style={{ backgroundColor: job.color }}
                      >
                        {job.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          

          {/* Bottom status pill */}
          <div
            className={`absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 shadow-lg ${
              dark
                ? "border-white/10 bg-[#211D48] text-white"
                : "border-white bg-white text-[#3287AE]"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22A06B] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22A06B]" />
            </span>

            <span className="text-[10px] font-bold sm:text-xs">
              AI-powered placement insights
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
