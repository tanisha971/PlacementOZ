
import { ArrowRight } from "lucide-react";

const skillGaps = [
  { name: "Spring Boot", level: "High", color: "bg-red-50 text-red-500" },
  { name: "Docker", level: "Medium", color: "bg-amber-50 text-amber-600" },
  { name: "AWS", level: "Low", color: "bg-emerald-50 text-emerald-600" },
];

export default function SkillGapsCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="font-bold text-[#1F1C47]">Top Skill Gaps</h2>

      <div className="mt-5 space-y-4">
        {skillGaps.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-sm text-slate-600">{skill.name}</span>
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
        onClick={() => {
          window.location.hash = "#/student/skill-gap";
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 text-sm font-semibold text-[#593C96] hover:underline"
      >
        View full analysis <ArrowRight size={15} />
      </button>
    </section>
  );
}
