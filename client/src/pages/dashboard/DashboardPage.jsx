
import { useOutletContext } from "react-router-dom";
import StatCard from "../../components/dashboard/StatCard";
import RecommendedJobs from "../../components/dashboard/RecommendedJobs";
import MatchScoreCard from "../../components/dashboard/MatchScoreCard";
import NotificationsCard from "../../components/dashboard/NotificationsCard";
import SkillGapsCard from "../../components/dashboard/SkillGapsCard";
import {
  UserRound,
  BriefcaseBusiness,
  FileCheck,
  Target,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useOutletContext();

  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
        ? "Good Afternoon"
        : "Good Evening";

  const firstName = user?.name?.split(" ")[0] || "Student";

  const stats = [
    {
      label: "Profile Completion",
      value: "92%",
      icon: UserRound,
      color: "purple",
      trend: "+8% this month",
    },
    {
      label: "Recommended Jobs",
      value: "24",
      icon: BriefcaseBusiness,
      color: "blue",
      trend: "12 new this week",
    },
    {
      label: "Applications",
      value: "8",
      icon: FileCheck,
      color: "green",
      trend: "2 in progress",
    },
    {
      label: "Match Score",
      value: "91%",
      icon: Target,
      color: "pink",
      trend: "Excellent match",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-5">
      {/* Greeting */}
      <section>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {greeting}, {firstName}!
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Here's what's happening with your placement journey.
        </p>
      </section>

      {/* Summary cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      {/* Main dashboard grid */}
      <section className="grid min-w-0 grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1.8fr)_minmax(340px,0.9fr)]">
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
