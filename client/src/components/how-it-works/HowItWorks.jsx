
import {
  UserRound,
  BriefcaseBusiness,
  Target,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Build Your Profile",
    description: "Complete academic, skills, and project details.",
    icon: UserRound,
    color: "text-placement-purple",
  },
  {
    number: "02",
    title: "Discover Opportunities",
    description: "Browse AI-curated job listings.",
    icon: BriefcaseBusiness,
    color: "text-placement-teal",
  },
  {
    number: "03",
    title: "Check Eligibility & Match",
    description: "See your match score and eligibility instantly.",
    icon: Target,
    color: "text-placement-blue",
  },
  {
    number: "04",
    title: "Prepare & Apply",
    description: "Use AI tools to prepare and submit applications.",
    icon: FileCheck2,
    color: "text-placement-pink",
  },
  {
    number: "05",
    title: "Track Your Placement",
    description: "Follow every stage until the offer letter.",
    icon: TrendingUp,
    color: "text-placement-purple",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden border-y border-border bg-background py-20 transition-colors duration-300 sm:py-24"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 size-72 rounded-full bg-placement-purple/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-72 rounded-full bg-placement-blue/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">

          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            How It{" "}
            <span className="bg-gradient-to-r from-placement-purple via-placement-pink to-placement-blue bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Your placement journey in five smart steps. From building your
            profile to tracking your offers, everything stays organized in
            one place.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">

          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-[30px] h-px bg-primary/30" />

          <div className="relative grid grid-cols-5 gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group flex flex-col items-center text-center"
              >
                {/* Number badge */}
                <div className="relative z-10 flex size-[60px] items-center justify-center rounded-2xl bg-gradient-to-br from-placement-purple to-placement-blue text-lg font-bold text-white shadow-md shadow-placement-purple/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-6 text-base font-bold text-text-primary">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[230px] text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
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
                  className="relative flex gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Vertical connector */}
                  {index !== steps.length - 1 && (
                    <div className="absolute -bottom-[22px] left-[31px] h-5 w-px bg-primary/25" />
                  )}

                  {/* Step icon */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-placement-purple to-placement-blue text-white shadow-sm">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div
                      className={`mb-1 text-xs font-bold tracking-wider ${step.color}`}
                    >
                      STEP {step.number}
                    </div>

                    <h3 className="text-base font-bold text-text-primary">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-text-secondary">
                      {step.description}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 text-sm text-text-muted">
          <Target size={17} className="text-primary" />
          <span>
            One platform. Five steps. A smarter placement journey.
          </span>
        </div>

      </div>
    </section>
  );
}
