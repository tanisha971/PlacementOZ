
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    color: "bg-placement-blue",
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
    color: "bg-error",
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
    color: "bg-placement-teal",
  },
];

const filters = ["All", "Saved", "Applied"];

export default function RecommendedJobs() {
  const navigate = useNavigate();

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

  function toggleApplied(id) {
    setApplied((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300">

      {/* Header and filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
        <h2 className="text-lg font-bold text-text-primary">
          Recommended Jobs
        </h2>

        <div className="flex items-center gap-1">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                filter === item
                  ? "bg-primary text-text-inverse"
                  : "text-text-secondary hover:bg-surface-hover hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Job listings */}
      {filteredJobs.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <BriefcaseBusiness
            size={32}
            className="mx-auto mb-3 text-text-muted"
          />

          <p className="text-sm font-medium text-text-primary">
            No jobs in this category yet.
          </p>

          <p className="mt-1 text-xs text-text-muted">
            Jobs you save or apply to will appear here.
          </p>
        </div>
      ) : (
        filteredJobs.map((job) => (
          <article
            key={job.id}
            className="border-b border-border px-5 py-5 transition-colors last:border-b-0 hover:bg-surface-hover/50"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

              {/* Company initials */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white ${job.color}`}
              >
                {job.initials}
              </div>

              <div className="min-w-0 flex-1">

                {/* Job title and match */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-text-primary">
                      {job.title}
                    </h3>

                    <p className="mt-0.5 text-sm text-text-secondary">
                      {job.company}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                      {job.match}% Match
                    </span>

                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-success sm:justify-end">
                      <CheckCircle2 size={13} />
                      Eligibility
                    </p>
                  </div>
                </div>

                {/* Job details */}
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-secondary sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    Deadline: {job.deadline}
                  </span>

                  <span className="font-bold text-primary">
                    {job.salary}
                  </span>
                </div>

                {/* Skills and actions */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-surface-secondary px-2.5 py-1 text-xs text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => toggleSaved(job.id)}
                      aria-pressed={saved.includes(job.id)}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                        saved.includes(job.id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-text-secondary hover:border-primary hover:text-primary"
                      }`}
                    >
                      {saved.includes(job.id) ? "Saved" : "Save"}
                    </button>

                    <button
                      type="button"
                      disabled={applied.includes(job.id)}
                      onClick={() => toggleApplied(job.id)}
                      className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-text-inverse transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-surface-hover disabled:text-text-muted"
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

      {/* View all jobs */}
      <button
        type="button"
        onClick={() => navigate("/student/jobs")}
        className="flex w-full items-center justify-center gap-2 border-t border-border py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
      >
        <BriefcaseBusiness size={16} />
        View all jobs
      </button>
    </section>
  );
}
