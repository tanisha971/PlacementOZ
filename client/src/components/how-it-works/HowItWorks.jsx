
import {
  UserRound,
  BriefcaseBusiness,
  Target,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const steps = [
  {
    number: "01",
    title: "Build Your Profile",
    description: "Complete academic, skills, and project details.",
    icon: UserRound,
    color: "#593C96",
  },
  {
    number: "02",
    title: "Discover Opportunities",
    description: "Browse AI-curated job listings.",
    icon: BriefcaseBusiness,
    color: "#3287AE",
  },
  {
    number: "03",
    title: "Check Eligibility & Match",
    description: "See your match score and eligibility instantly.",
    icon: Target,
    color: "#326CB6",
  },
  {
    number: "04",
    title: "Prepare & Apply",
    description: "Use AI tools to prepare and submit applications.",
    icon: FileCheck2,
    color: "#C674CE",
  },
  {
    number: "05",
    title: "Track Your Placement",
    description: "Follow every stage until the offer letter.",
    icon: TrendingUp,
    color: "#593C96",
  },
];

export default function HowItWorks() {
  const { dark } = useTheme();

  return (
    <section
      id="how-it-works"
      className={`relative isolate overflow-hidden  border-y py-20 transition-colors duration-300 sm:py-24 ${
        dark
          ? "border-white/10 bg-[#0F1025]"
          : "border-[#E5E7EB] bg-[#F8F9FC]"
      }`}
    >
    {/* Decorative background accents */}
        {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-[#593C96]/15" : "bg-[#593C96]/[0.07]"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-[#326CB6]/15" : "bg-[#326CB6]/[0.07]"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">

          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            How It{" "}
            <span className="bg-gradient-to-r from-[#593C96] via-[#C674CE] to-[#326CB6] bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
              dark ? "text-white/60" : "text-[#4B5563]"
            }`}
          >
            Your placement journey in five smart steps. From building your
            profile to tracking your offers, everything stays organized in
            one place.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          {/* Connecting line */}
          <div
            className={`absolute left-[10%] right-[10%] top-[30px] h-px ${
              dark ? "bg-white/20" : "bg-[#593C96]/30"
            }`}
          />

          <div className="relative grid grid-cols-5 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Number badge */}
                  <div
                    className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#593C96] to-[#326CB6] text-lg font-bold text-white shadow-md shadow-[#593C96]/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                  >
                    {step.number}
                  </div>

                  <h3
                    className={`mt-6 text-base font-bold ${
                      dark ? "text-white" : "text-[#1F1C47]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-2 max-w-[230px] text-sm leading-6 ${
                      dark ? "text-white/60" : "text-[#4B5563]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile and tablet timeline */}
        <div className="mx-auto max-w-2xl lg:hidden">
          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`relative flex gap-4 rounded-2xl border p-5 transition-all duration-300 ${
                    dark
                      ? "border-white/10 bg-white/[0.035] hover:border-white/20"
                      : "border-[#E5E7EB] bg-white hover:border-[#593C96]/25 hover:shadow-lg hover:shadow-[#593C96]/5"
                  }`}
                >
                  {/* Vertical connector */}
                  {index !== steps.length - 1 && (
                    <div
                      className={`absolute bottom-[-22px] left-[31px] h-5 w-px ${
                        dark ? "bg-white/20" : "bg-[#593C96]/25"
                      }`}
                    />
                  )}

                  {/* Step icon */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#593C96] to-[#326CB6] text-white shadow-sm"
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className="mb-1 text-xs font-bold tracking-wider"
                      style={{ color: step.color }}
                    >
                      STEP {step.number}
                    </div>

                    <h3
                      className={`text-base font-bold ${
                        dark ? "text-white" : "text-[#1F1C47]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`mt-1 text-sm leading-6 ${
                        dark ? "text-white/60" : "text-[#4B5563]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`mt-14 flex flex-wrap items-center justify-center gap-2 text-sm ${
            dark ? "text-white/50" : "text-[#6B7280]"
          }`}
        >
          <Target size={17} className="text-[#593C96]" />
          <span>
            One platform. Five steps. A smarter placement journey.
          </span>
        </div>
      </div>
    </section>
  );
}
