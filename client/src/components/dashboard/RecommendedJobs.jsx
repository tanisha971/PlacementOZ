
import { useState } from "react";
import {
  MapPin,
  Clock3,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

const demoJobs = [
  {
    id: 1,
    company: "Microsoft",
    initials: "MS",
    title: "Software Engineer",
    location: "Bangalore / Hybrid",
    deadline: "Feb 28",
    salary: "₹22 LPA",
    skills: ["Java", "React", "SQL"],
    match: 92,
    color: "bg-sky-500",
  },
  {
    id: 2,
    company: "TCS",
    initials: "TCS",
    title: "Software Engineer",
    location: "Multiple Locations",
    deadline: "Mar 5",
    salary: "₹7 LPA",
    skills: ["Java", "Python", "DSA"],
    match: 89,
    color: "bg-red-500",
  },
  {
    id: 3,
    company: "Infosys",
    initials: "IN",
    title: "Backend Developer",
    location: "Bangalore",
    deadline: "Mar 10",
    salary: "₹10 LPA",
    skills: ["Spring Boot", "SQL", "REST"],
    match: 87,
    color: "bg-sky-600",
  },
];

export default function RecommendedJobs() {
  const [filter, setFilter] = useState("All");
  const [saved, setSaved] = useState([]);
  const [applied, setApplied] = useState([]);

  const filteredJobs = demoJobs.filter((job) => {
    if (filter === "Saved") return saved.includes(job.id);
    if (filter === "Applied") return applied.includes(job.id);
    return true;
  });

  function toggleSaved(id) {
    setSaved((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
        <h2 className="text-lg font-bold text-[#1F1C47]">
          Recommended Jobs
        </h2>

        <div className="flex items-center gap-1">
          {["All", "Saved", "Applied"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                filter === item
                  ? "bg-[#593C96] text-white"
                  : "text-slate-500 hover:bg-[#593C96]/5 hover:text-[#593C96]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <p className="px-5 py-10 text-center text-sm text-slate-500">
          No jobs in this category yet.
        </p>
      ) : (
        filteredJobs.map((job) => (
          <article
            key={job.id}
            className="border-b border-slate-100 px-5 py-5 last:border-b-0"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white ${job.color}`}
              >
                {job.initials}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-[#1F1C47]">
                      {job.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-slate-600">
                      {job.company}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="rounded-full bg-[#593C96]/10 px-2.5 py-1 text-xs font-bold text-[#593C96]">
                      {job.match}% Match
                    </span>
                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600 sm:justify-end">
                      <CheckCircle2 size={13} />
                      Eligibility
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    Deadline: {job.deadline}
                  </span>
                  <span className="font-bold text-[#593C96]">
                    {job.salary}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => toggleSaved(job.id)}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                        saved.includes(job.id)
                          ? "border-[#593C96] bg-[#593C96]/5 text-[#593C96]"
                          : "border-slate-200 text-slate-600 hover:border-[#593C96]"
                      }`}
                    >
                      {saved.includes(job.id) ? "Saved" : "Save"}
                    </button>

                    <button
                      type="button"
                      disabled={applied.includes(job.id)}
                      onClick={() =>
                        setApplied((prev) => [...prev, job.id])
                      }
                      className="rounded-lg bg-[#593C96] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4B3280] disabled:cursor-not-allowed disabled:bg-slate-400"
                    >
                      {applied.includes(job.id) ? "Applied" : "Apply"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))
      )}

      <button
        type="button"
        onClick={() => window.location.hash = "#/student/jobs"}
        className="flex w-full items-center justify-center gap-2 border-t border-slate-200 py-4 text-sm font-semibold text-[#593C96] hover:bg-[#593C96]/5"
      >
        <BriefcaseBusiness size={16} />
        View all jobs
      </button>
    </section>
  );
}
