
import {
  Brain,
  Target,
  MessageSquare,
  ChartNoAxesCombined,
  BriefcaseBusiness,
  FileText,
  BellRing,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const features = [
  {
    icon: ChartNoAxesCombined,
    title: "Placement Dashboard",
    description:
      "Track applications, interviews, offers and placement progress from one centralized dashboard.",
    color: "#593C96",
    bg: "bg-[#593C96]/10",
    tag: "Analytics",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get intelligent insights to understand your placement journey and make better decisions.",
    color: "#3287AE",
    bg: "bg-[#3287AE]/10",
    tag: "AI Intelligence",
  },
  {
    icon: BriefcaseBusiness,
    title: "Job Opportunities",
    description:
      "Discover relevant job opportunities and keep track of every application effortlessly.",
    color: "#326CB6",
    bg: "bg-[#326CB6]/10",
    tag: "Career Growth",
  },
  {
    icon: FileText,
    title: "Resume Management",
    description:
      "Organize your resumes and keep your application documents ready for every opportunity.",
    color: "#C674CE",
    bg: "bg-[#C674CE]/10",
    tag: "Profile Building",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description:
      "Identify missing skills and discover what you need to learn for your target roles.",
    color: "#3287AE",
    bg: "bg-[#3287AE]/10",
    tag: "Skill Development",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Prepare for interviews with structured practice and actionable feedback to improve your confidence.",
    color: "#593C96",
    bg: "bg-[#593C96]/10",
    tag: "Interview Ready",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description:
      "Stay updated on important deadlines, interviews, application changes and placement announcements.",
    color: "#C674CE",
    bg: "bg-[#C674CE]/10",
    tag: "Stay Updated",
  },
];

export default function Features() {
  const { dark } = useTheme();

  return (
    <section
      id="features"
      className={`relative overflow-hidden border-t py-20 transition-colors duration-300 sm:py-24 ${
        dark
          ? "border-white/10 bg-[#0F1025]"
          : "border-[#E5E7EB] bg-[#F8F9FC]"
      }`}
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-[#593C96]/10" : "bg-[#593C96]/[0.06]"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-[#326CB6]/10" : "bg-[#326CB6]/[0.06]"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          

          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-[#593C96] via-[#C674CE] to-[#326CB6] bg-clip-text text-transparent">
              Placement Success
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
              dark ? "text-white/60" : "text-[#4B5563]"
            }`}
          >
            From building your profile to preparing for interviews, discover
            the tools you need to make your placement journey simpler, smarter
            and more organized.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(
            ({ icon: Icon, title, description, color, bg, tag }, index) => (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                  dark
                    ? "border-white/10 bg-white/[0.035] hover:border-[#C674CE]/35 hover:bg-white/[0.055] hover:shadow-xl hover:shadow-black/10"
                    : "border-[#E5E7EB] bg-white hover:-translate-y-1 hover:border-[#593C96]/25 hover:shadow-xl hover:shadow-[#593C96]/[0.07]"
                }`}
              >
                {/* Subtle top accent */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                  style={{
                    background: `linear-gradient(to right, ${color}, #326CB6)`,
                  }}
                />

                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${bg}`}
                    style={{ color }}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      dark
                        ? "bg-white/[0.06] text-white/55"
                        : "bg-[#F8F9FC] text-[#6B7280]"
                    }`}
                  >
                    {tag}
                  </span>
                </div>

                <h3
                  className={`mt-6 text-lg font-bold transition-colors ${
                    dark
                      ? "text-white group-hover:text-[#D9B8F0]"
                      : "text-[#1F1C47] group-hover:text-[#593C96]"
                  }`}
                >
                  {title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    dark ? "text-white/55" : "text-[#4B5563]"
                  }`}
                >
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
