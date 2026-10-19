
import { Target } from "lucide-react";

const metrics = [
  { label: "Skills", value: 94, color: "bg-[#593C96]" },
  { label: "Projects", value: 88, color: "bg-sky-600" },
  { label: "Role Fit", value: 95, color: "bg-blue-600" },
  { label: "Academics", value: 90, color: "bg-fuchsia-400" },
];

export default function MatchScoreCard() {
  const score = 91;
  const circumference = 2 * Math.PI * 43;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="font-bold text-[#1F1C47]">Your Match Score</h2>

      <div className="mt-5 flex items-center gap-5">
        <div className="relative h-[108px] w-[108px] shrink-0">
          <svg viewBox="0 0 100 100" className="-rotate-90">
            <circle
              cx="50"
              cy="50"
              r="43"
              fill="none"
              stroke="#EDE9F6"
              strokeWidth="7"
            />
            <circle
              cx="50"
              cy="50"
              r="43"
              fill="none"
              stroke="#593C96"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${(score / 100) * circumference} ${circumference}`}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-extrabold text-[#1F1C47]">
              {score}%
            </span>
            <span className="text-[10px] text-slate-500">Score</span>
          </div>
        </div>

        <div>
          <p className="font-bold text-[#593C96]">Excellent</p>
          <p className="mt-1 text-sm leading-5 text-slate-500">
            Your profile has a strong match with recommended roles.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="grid grid-cols-[72px_minmax(0,1fr)_36px] items-center gap-3"
          >
            <span className="text-xs text-slate-500">
              {metric.label}
            </span>

            <div className="h-2 overflow-hidden rounded-full bg-[#F0EFF7]">
              <div
                className={`h-full rounded-full ${metric.color}`}
                style={{ width: `${metric.value}%` }}
              />
            </div>

            <span className="text-right text-xs font-bold text-[#593C96]">
              {metric.value}%
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          window.location.hash = "#/student/skill-gap";
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 text-sm font-semibold text-[#593C96] hover:underline"
      >
        <Target size={16} />
        View Skill Gap Analysis →
      </button>
    </section>
  );
}
