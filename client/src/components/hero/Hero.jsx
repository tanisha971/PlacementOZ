
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
  Sparkles,
  Target,
} from "lucide-react";

const roles = [
  { name: "Student", icon: GraduationCap },
  { name: "Placement Officer", icon: UserRound },
  { name: "Recruiter", icon: UsersRound },
  { name: "Admin", icon: ShieldCheck },
];

const skills = [
  { name: "Java", score: 92, color: "bg-placement-purple" },
  { name: "React", score: 82, color: "bg-placement-teal" },
  { name: "SQL", score: 88, color: "bg-placement-blue" },
  { name: "Spring Boot", score: 45, color: "bg-warning" },
];

const jobs = [
  {
    role: "Software Engineer",
    company: "Microsoft",
    score: "94%",
    initial: "M",
    color: "bg-placement-purple/10 text-placement-purple",
  },
  {
    role: "Backend Developer",
    company: "TCS",
    score: "89%",
    initial: "T",
    color: "bg-placement-teal/10 text-placement-teal",
  },
];

const metrics = [
  {
    label: "Applied",
    value: "08",
    icon: BriefcaseBusiness,
    color: "text-placement-purple",
    background: "bg-placement-purple/10 text-placement-purple",
  },
  {
    label: "Shortlisted",
    value: "03",
    icon: CheckCircle2,
    color: "text-success",
    background: "bg-success/10 text-success",
  },
  {
    label: "Profile",
    value: "92%",
    icon: UserRound,
    color: "text-placement-teal",
    background: "bg-placement-teal/10 text-placement-teal",
  },
  {
    label: "Recommended",
    value: "24",
    icon: Target,
    color: "text-placement-blue",
    background: "bg-placement-blue/10 text-placement-blue",
  },
];

export default function Hero() {
  const [selectedRole, setSelectedRole] = useState("Student");

  const registerRole = selectedRole
    .toLowerCase()
    .replace(/\s+/g, "-");

  const circumference = 2 * Math.PI * 42;

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-background pb-20 pt-28 transition-colors duration-300 sm:pt-32 lg:pb-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-28 size-72 rounded-full bg-placement-purple/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 size-96 rounded-full bg-placement-blue/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">

        {/* LEFT: Hero content */}
        <div className="relative z-10 animate-fade-in">

          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">
            <Zap size={16} />
            AI-Powered Placement Intelligence
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            Optimize Your Journey. Land Your{" "}
            <span className="bg-gradient-to-r from-placement-purple via-placement-pink to-placement-blue bg-clip-text text-transparent">
              Dream Job.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            PlacementOZ is an AI-powered placement optimization
            platform that helps students discover the right
            opportunities, improve their skills, and achieve
            their dream placements.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              to={`/register?role=${encodeURIComponent(registerRole)}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-placement-purple to-placement-blue px-7 py-3.5 font-semibold text-white shadow-lg shadow-placement-purple/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Started
              <ArrowRight size={19} />
            </Link>

            <a
              href="#companies"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 font-semibold text-text-primary transition-colors hover:border-primary/40 hover:bg-primary-soft"
            >
              Explore Opportunities
            </a>

          </div>

          {/* Role selector */}
          <div className="mt-10">

            <p className="mb-4 text-sm font-medium text-text-muted">
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
                    className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4 ${
                      isSelected
                        ? "border-primary bg-primary text-white shadow-md shadow-placement-purple/20 hover:bg-primary-hover"
                        : "border-border bg-surface text-text-secondary hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                    }`}
                  >
                    <Icon size={17} strokeWidth={1.8} />
                    {name}
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-xs text-text-muted">
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

        {/* RIGHT: AI Dashboard Preview */}
        <div className="relative mx-auto w-full max-w-[640px] lg:ml-auto lg:mr-1">

          {/* Dashboard glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[40px] bg-gradient-to-br from-placement-purple/15 via-placement-pink/10 to-placement-blue/15 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">

            {/* Dashboard header */}
            <div className="flex items-center justify-between gap-3 bg-placement-navy px-4 py-3 sm:px-5">

              <div className="flex min-w-0 items-center gap-3">

                <div className="flex shrink-0 gap-1.5">
                  <span className="size-2.5 rounded-full bg-error" />
                  <span className="size-2.5 rounded-full bg-warning" />
                  <span className="size-2.5 rounded-full bg-success" />
                </div>

                <p className="truncate text-xs font-semibold text-white sm:text-sm">
                  PlacementOZ Intelligence
                </p>

              </div>

              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-placement-pink/30 bg-placement-pink/15 px-2.5 py-1.5 text-[10px] font-semibold text-white sm:text-xs">
                <Sparkles size={13} />
                AI Powered
              </div>

            </div>

            <div className="space-y-4 p-3 sm:space-y-5 sm:p-5">

              {/* Match score and metrics */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3">

                {/* Match score */}
                <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-3 sm:p-4">

                  <div className="relative flex size-[76px] items-center justify-center sm:size-[92px]">

                    <svg
                      viewBox="0 0 100 100"
                      className="-rotate-90"
                      role="img"
                      aria-label="Illustrative 92 percent match score"
                    >
                      <defs>
                        <linearGradient id="oz-match-gradient">
                          <stop offset="0%" stopColor="var(--primary)" />
                          <stop offset="100%" stopColor="var(--color-placement-blue)" />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="var(--surface-secondary)"
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
                        strokeDasharray={`${circumference * 0.92} ${circumference}`}
                      />
                    </svg>

                    <div className="absolute text-center">
                      <p className="text-xl font-extrabold text-text-primary sm:text-2xl">
                        92%
                      </p>

                      <p className="text-[9px] text-text-muted sm:text-[10px]">
                        Match score
                      </p>
                    </div>

                  </div>

                  <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-success sm:text-xs">
                    <CheckCircle2 size={13} />
                    Excellent match
                  </div>

                </div>

                {/* Metrics */}
                <div className="col-span-3 grid grid-cols-2 gap-2 sm:gap-3">

                  {metrics.map(({ label, value, icon: Icon, color, background }) => (
                    <div
                      key={label}
                      className="flex min-w-0 items-center gap-2 rounded-xl border border-border bg-surface-secondary p-2.5 sm:gap-3 sm:p-3"
                    >
                      <div className={`hidden size-9 shrink-0 items-center justify-center rounded-lg sm:flex ${background}`}>
                        <Icon size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className={`text-lg font-extrabold sm:text-xl ${color}`}>
                          {value}
                        </p>

                        <p className="truncate text-[10px] text-text-muted sm:text-xs">
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* Skill profile */}
              <div className="rounded-2xl border border-border bg-surface p-3 sm:p-4">

                <div className="mb-4 flex items-center gap-2">

                  <div className="flex size-8 items-center justify-center rounded-lg bg-placement-purple/10 text-placement-purple">
                    <Sparkles size={16} />
                  </div>

                  <h3 className="text-xs font-bold text-text-primary sm:text-sm">
                    Your Skill Profile
                  </h3>

                </div>

                <div className="space-y-3">

                  {skills.map(({ name, score, color }) => (
                    <div key={name}>

                      <div className="mb-1.5 flex items-center justify-between gap-3">

                        <span className="text-[10px] font-medium text-text-secondary sm:text-xs">
                          {name}
                        </span>

                        <span className="text-[10px] font-bold text-text-secondary sm:text-xs">
                          {score}%
                        </span>

                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-surface-secondary">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${color}`}
                          style={{ width: `${score}%` }}
                        />
                      </div>

                    </div>
                  ))}

                </div>

                {/* AI insight */}
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-warning/10 p-3 text-text-secondary">

                  <Sparkles size={15} className="mt-0.5 shrink-0 text-warning" />

                  <p className="text-[10px] leading-relaxed sm:text-xs">
                    <span className="font-bold text-text-primary">
                      AI insight:
                    </span>{" "}
                    Strengthen Spring Boot to improve your backend role readiness.
                  </p>

                </div>
              </div>

              {/* Recommended jobs */}
              <div className="rounded-2xl border border-border bg-surface p-3 sm:p-4">

                <div className="mb-3 flex items-center justify-between gap-2">

                  <h3 className="text-xs font-bold text-text-primary sm:text-sm">
                    Recommended Opportunities
                  </h3>

                  <a
                    href="#companies"
                    className="flex shrink-0 items-center gap-1 text-[10px] font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    Explore
                    <ArrowRight size={12} />
                  </a>

                </div>

                <div className="space-y-2">

                  {jobs.map((job) => (
                    <div
                      key={job.role}
                      className="flex items-center gap-3 rounded-xl bg-surface-secondary p-2.5 transition-colors hover:bg-surface-hover"
                    >

                      <div className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${job.color}`}>
                        {job.initial}
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-[11px] font-bold text-text-primary sm:text-xs">
                          {job.role}
                        </p>

                        <p className="mt-0.5 text-[10px] text-text-muted">
                          {job.company}
                        </p>

                      </div>

                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${job.color}`}>
                        {job.score}
                      </span>

                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>

          {/* Bottom status pill */}
          <div className="absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-text-primary shadow-lg">

            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
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
