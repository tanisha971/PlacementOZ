
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const skillGaps = [
  {
    name: "Spring Boot",
    level: "High",
    color: "bg-error/10 text-error",
  },
  {
    name: "Docker",
    level: "Medium",
    color: "bg-warning/10 text-warning",
  },
  {
    name: "AWS",
    level: "Low",
    color: "bg-success/10 text-success",
  },
];

export default function SkillGapsCard() {
  const navigate = useNavigate();

  return (
    <section className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300">
      <h2 className="font-bold text-text-primary">
        Top Skill Gaps
      </h2>

      <div className="mt-5 space-y-4">
        {skillGaps.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-sm text-text-secondary">
              {skill.name}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${skill.color}`}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => navigate("/student/skill-gap")}
        className="mt-6 flex w-full items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover hover:underline"
      >
        View full analysis
        <ArrowRight size={15} />
      </button>
    </section>
  );
}
