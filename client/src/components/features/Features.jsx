
import {
  Brain,
  Target,
  MessageSquare,
  ChartNoAxesCombined,
  BriefcaseBusiness,
  FileText,
  BellRing,
} from "lucide-react";

const features = [
  {
    icon: ChartNoAxesCombined,
    title: "Placement Dashboard",
    description:
      "Track applications, interviews, offers and placement progress from one centralized dashboard.",
    tag: "Analytics",
    color: "text-placement-purple",
    background: "bg-placement-purple/10",
    accent: "from-placement-purple to-placement-blue",
    hover: "group-hover:text-placement-purple",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get intelligent insights to understand your placement journey and make better decisions.",
    tag: "AI Intelligence",
    color: "text-placement-teal",
    background: "bg-placement-teal/10",
    accent: "from-placement-teal to-placement-blue",
    hover: "group-hover:text-placement-teal",
  },
  {
    icon: BriefcaseBusiness,
    title: "Job Opportunities",
    description:
      "Discover relevant job opportunities and keep track of every application effortlessly.",
    tag: "Career Growth",
    color: "text-placement-blue",
    background: "bg-placement-blue/10",
    accent: "from-placement-blue to-placement-purple",
    hover: "group-hover:text-placement-blue",
  },
  {
    icon: FileText,
    title: "Resume Management",
    description:
      "Organize your resumes and keep your application documents ready for every opportunity.",
    tag: "Profile Building",
    color: "text-placement-pink",
    background: "bg-placement-pink/10",
    accent: "from-placement-pink to-placement-purple",
    hover: "group-hover:text-placement-pink",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description:
      "Identify missing skills and discover what you need to learn for your target roles.",
    tag: "Skill Development",
    color: "text-placement-teal",
    background: "bg-placement-teal/10",
    accent: "from-placement-teal to-placement-blue",
    hover: "group-hover:text-placement-teal",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Prepare for interviews with structured practice and actionable feedback to improve your confidence.",
    tag: "Interview Ready",
    color: "text-placement-purple",
    background: "bg-placement-purple/10",
    accent: "from-placement-purple to-placement-blue",
    hover: "group-hover:text-placement-purple",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description:
      "Stay updated on important deadlines, interviews, application changes and placement announcements.",
    tag: "Stay Updated",
    color: "text-placement-pink",
    background: "bg-placement-pink/10",
    accent: "from-placement-pink to-placement-purple",
    hover: "group-hover:text-placement-pink",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden border-t border-border bg-background py-20 transition-colors duration-300 sm:py-24"
    >
      {/* Decorative backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 size-72 rounded-full bg-info/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-placement-purple via-placement-pink to-placement-blue bg-clip-text text-transparent">
              Placement Success
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            From building your profile to preparing for interviews,
            discover the tools you need to make your placement journey
            simpler, smarter and more organized.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(
            ({
              icon: Icon,
              title,
              description,
              tag,
              color,
              background,
              accent,
              hover,
            }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-7"
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r ${accent} transition-all duration-300 group-hover:w-full`}
                />

                {/* Icon and tag */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${background} ${color}`}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="rounded-full bg-surface-secondary px-2.5 py-1 text-[10px] font-semibold text-text-muted">
                    {tag}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className={`mt-6 text-lg font-bold text-text-primary transition-colors duration-200 ${hover}`}
                >
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {description}
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
