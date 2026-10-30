
import { Target } from "lucide-react";

const metrics = [
  { label: "Skills", value: 94, color: "bg-primary" },
  { label: "Projects", value: 88, color: "bg-placement-teal" },
  { label: "Role Fit", value: 95, color: "bg-placement-blue" },
  { label: "Academics", value: 90, color: "bg-placement-pink" },
];

export default function MatchScoreCard() {
  const score = 91;
  const circumference = 2 * Math.PI * 43;

  return (
    <section className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300">
      <h2 className="font-bold text-text-primary">
        Your Match Score
      </h2>

      <div className="mt-5 flex items-center gap-5">
        {/* Circular score indicator */}
        <div className="relative h-[108px] w-[108px] shrink-0">
          <svg
            viewBox="0 0 100 100"
            className="-rotate-90"
            aria-label={`Match score: ${score}%`}
            role="img"
          >
            <circle
              cx="50"
              cy="50"
              r="43"
              fill="none"
              stroke="var(--surface-secondary)"
              strokeWidth="7"
            />

            <circle
              cx="50"
              cy="50"
              r="43"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${(score / 100) * circumference} ${circumference}`}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-extrabold text-text-primary">
              {score}%
            </span>

            <span className="text-[10px] text-text-muted">
              Score
            </span>
          </div>
        </div>

        {/* Score description */}
        <div>
          <p className="font-bold text-primary">
            Excellent
          </p>

          <p className="mt-1 text-sm leading-5 text-text-secondary">
            Your profile has a strong match with recommended roles.
          </p>
        </div>
      </div>

      {/* Metric breakdown */}
      <div className="mt-6 space-y-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="grid grid-cols-[72px_minmax(0,1fr)_36px] items-center gap-3"
          >
            <span className="text-xs text-text-secondary">
              {metric.label}
            </span>

            <div className="h-2 overflow-hidden rounded-full bg-surface-secondary">
              <div
                className={`h-full rounded-full transition-all duration-500 ${metric.color}`}
                style={{ width: `${metric.value}%` }}
              />
            </div>

            <span className="text-right text-xs font-bold text-text-primary">
              {metric.value}%
            </span>
          </div>
        ))}
      </div>

      {/* Skill gap navigation */}
      <button
        type="button"
        onClick={() => {
          window.location.hash = "#/student/skill-gap";
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover hover:underline"
      >
        <Target size={16} />
        View Skill Gap Analysis →
      </button>
    </section>
  );
}
