
import { useOutletContext, useNavigate } from "react-router-dom";
import {
  Target,
  BriefcaseBusiness,
  FileText,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import RecommendedJobs from "../../components/dashboard/RecommendedJobs";
import MatchScoreCard from "../../components/dashboard/MatchScoreCard";
import NotificationsCard from "../../components/dashboard/NotificationsCard";
import SkillGapsCard from "../../components/dashboard/SkillGapsCard";

export default function DashboardPage() {
  const { user } = useOutletContext();
  const navigate = useNavigate();

  const name = user?.name?.trim().split(/\s+/)[0] || "Student";
  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  const stats = [
    {
      icon: Target,
      value: "92%",
      label: "Profile Completion",
      trend: "+3% this week",
      color: "purple",
    },
    {
      icon: BriefcaseBusiness,
      value: "24",
      label: "Recommended Jobs",
      trend: "5 new today",
      color: "blue",
    },
    {
      icon: FileText,
      value: "8",
      label: "Applications",
      trend: "3 active",
      color: "indigo",
    },
    {
      icon: TrendingUp,
      value: "91%",
      label: "Match Score",
      trend: "Top 5% of students",
      color: "pink",
    },
  ];

  return (
    <div className="mx-auto max-w-[1600px] space-y-7">
      {/* Welcome section */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#1F1C47] sm:text-3xl">
            {greeting}, {name} 👋
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Let's optimize your placement journey. You have{" "}
            <span className="font-semibold text-[#593C96]">
              3 new matches
            </span>{" "}
            today.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("../ai-assistant")}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-gradient-to-r from-[#593C96] to-[#C674CE] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:self-auto"
        >
          <Sparkles size={17} />
          Ask AI
        </button>
      </section>

      {/* Summary statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      {/* Dashboard content */}
      <section className="grid grid-cols-1 items-start gap-6 2xl:grid-cols-[minmax(0,1.8fr)_minmax(330px,0.9fr)]">
        <div className="min-w-0">
          <RecommendedJobs />
        </div>

        <div className="min-w-0 space-y-5">
          <MatchScoreCard />
          <NotificationsCard />
          <SkillGapsCard />
        </div>
      </section>
    </div>
  );
}
