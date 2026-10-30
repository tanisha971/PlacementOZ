
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Clock3,
  XCircle,
  BriefcaseBusiness,
  Search,
  SlidersHorizontal,
  CalendarDays,
  X,
} from "lucide-react";

// ============================================
// DEMO APPLICATION DATA
// ============================================

const initialApplications = [
  {
    id: 1,
    company: "Microsoft",
    initials: "MS",
    color: "bg-sky-500",
    role: "Software Engineer",
    salary: "₹22 LPA",
    appliedDate: "Jan 15",
    status: "Interview",
    progress: 3,
    stages: ["Applied", "Shortlisted", "Assessment", "Interview", "Offer"],
  },
  {
    id: 2,
    company: "TCS",
    initials: "TCS",
    color: "bg-red-600",
    role: "Software Engineer",
    salary: "₹7 LPA",
    appliedDate: "Jan 20",
    status: "Shortlisted",
    progress: 2,
    stages: ["Applied", "Shortlisted", "Assessment", "Interview", "Offer"],
  },
  {
    id: 3,
    company: "Infosys",
    initials: "IN",
    color: "bg-sky-600",
    role: "Backend Developer",
    salary: "₹10 LPA",
    appliedDate: "Jan 22",
    status: "Interview",
    progress: 4,
    stages: ["Applied", "Shortlisted", "Assessment", "Interview", "Offer"],
  },
  {
    id: 4,
    company: "Google",
    initials: "G",
    color: "bg-red-500",
    role: "SDE Intern",
    salary: "₹80K/mo",
    appliedDate: "Jan 25",
    status: "Applied",
    progress: 1,
    stages: ["Applied", "Shortlisted", "Assessment", "Interview", "Offer"],
  },
  {
    id: 5,
    company: "Wipro",
    initials: "WI",
    color: "bg-placement-purple-dark",
    role: "Project Engineer",
    salary: "₹3.5 LPA",
    appliedDate: "Feb 1",
    status: "Rejected",
    progress: 0,
    stages: ["Applied", "Shortlisted", "Assessment", "Interview", "Offer"],
  },
  {
    id: 6,
    company: "Accenture",
    initials: "AC",
    color: "bg-purple-600",
    role: "ASE",
    salary: "₹4.5 LPA",
    appliedDate: "Feb 5",
    status: "Selected",
    progress: 5,
    stages: ["Applied", "Shortlisted", "Assessment", "Interview", "Offer"],
  },
];

// ============================================
// STATUS CONFIGURATION
// ============================================

const statusStyles = {
  Applied: "bg-info/10 text-info",
  Shortlisted: "bg-primary/10 text-primary",
  Interview: "bg-warning/10 text-warning",
  Selected: "bg-success/10 text-success",
  Rejected: "bg-error/10 text-error",
};

const filters = [
  "All",
  "Applied",
  "Shortlisted",
  "Interview",
  "Selected",
  "Rejected",
];

// ============================================
// SUMMARY CARD
// ============================================

function SummaryCard({ value, label, color, icon: Icon }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className={`text-3xl font-extrabold tracking-tight ${color}`}>
          {value}
        </p>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-secondary">
          <Icon size={20} className={color} />
        </div>
      </div>

      <p className="mt-2 text-sm font-medium text-text-secondary">
        {label}
      </p>
    </article>
  );
}

// ============================================
// APPLICATION PROGRESS TRACKER
// ============================================

function ApplicationProgress({ application }) {
  const { progress, stages, status } = application;
  const rejected = status === "Rejected";

  return (
    <div className="mt-7">
      <div className="grid grid-cols-5">
        {stages.map((stage, index) => {
          const completed = index < progress;
          const isRejected = rejected && index === 0;
          const isCurrent = !rejected && index === progress - 1;

          return (
            <div
              key={stage}
              className="relative flex min-w-0 flex-col items-center"
            >
              {/* Connector */}
              {index > 0 && (
                <div
                  className={`absolute right-1/2 top-4 h-0.5 w-full ${
                    rejected
                      ? "bg-border"
                      : index < progress
                        ? "bg-success"
                        : "bg-border"
                  }`}
                />
              )}

              {/* Stage icon */}
              <div
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                  isRejected
                    ? "border-error bg-error text-white"
                    : completed
                      ? "border-success bg-success text-white"
                      : "border-border bg-surface text-text-muted"
                }`}
              >
                {isRejected ? (
                  <XCircle size={16} />
                ) : completed ? (
                  <CheckCircle2 size={16} />
                ) : (
                  <Clock3 size={15} />
                )}
              </div>

              {/* Stage label */}
              <span
                className={`mt-2 text-center text-[10px] font-medium sm:text-xs ${
                  isRejected
                    ? "text-error"
                    : completed || isCurrent
                      ? "text-success"
                      : "text-text-muted"
                }`}
              >
                {stage}
              </span>
            </div>
          );
        })}
      </div>

      {rejected && (
        <p className="mt-4 rounded-lg bg-error/5 px-3 py-2 text-xs text-error">
          This application was not successful.
        </p>
      )}

      {status === "Selected" && (
        <p className="mt-4 rounded-lg bg-success/5 px-3 py-2 text-xs font-medium text-success">
          Congratulations! You have received an offer.
        </p>
      )}
    </div>
  );
}

// ============================================
// APPLICATION CARD
// ============================================

function ApplicationCard({ application }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md sm:p-6">

      {/* Company information */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white ${application.color}`}
          >
            {application.initials}
          </div>

          <div className="min-w-0">
            <h3 className="text-base font-bold text-text-primary sm:text-lg">
              {application.role}
            </h3>

            <p className="mt-0.5 text-sm text-text-secondary">
              {application.company}
              <span className="mx-1.5">·</span>
              {application.salary}
            </p>

            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-text-muted">
              <CalendarDays size={13} />
              Applied: {application.appliedDate}
            </p>
          </div>
        </div>

        <span
          className={`w-fit shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[application.status]}`}
        >
          {application.status}
        </span>
      </div>

      {/* Progress */}
      <ApplicationProgress application={application} />
    </article>
  );
}

// ============================================
// MAIN APPLICATIONS PAGE
// ============================================

export default function Applications() {
  const [applications] = useState(initialApplications);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Summary counts
  const totalApplied = applications.length;

  const shortlisted = applications.filter(
    (item) =>
      item.status === "Shortlisted" ||
      item.status === "Interview" ||
      item.status === "Selected"
  ).length;

  const interviews = applications.filter(
    (item) => item.status === "Interview"
  ).length;

  const selected = applications.filter(
    (item) => item.status === "Selected"
  ).length;

  // Search and status filtering
  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesStatus =
        activeFilter === "All" ||
        application.status === activeFilter;

      const matchesSearch =
        !query ||
        application.company.toLowerCase().includes(query) ||
        application.role.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [applications, activeFilter, search]);

  const summaryCards = [
    {
      label: "Total Applied",
      value: totalApplied,
      color: "text-info",
      icon: BriefcaseBusiness,
    },
    {
      label: "Shortlisted",
      value: shortlisted,
      color: "text-primary",
      icon: CheckCircle2,
    },
    {
      label: "In Interview",
      value: interviews,
      color: "text-warning",
      icon: Clock3,
    },
    {
      label: "Selected",
      value: selected,
      color: "text-success",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1800px] space-y-7 pb-8">

      {/* PAGE HEADER */}
      <section>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
              Application Tracker
            </h1>

            <p className="mt-1 text-sm text-text-secondary sm:text-base">
              Monitor your placement journey from application to offer.
            </p>
          </div>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <SummaryCard key={card.label} {...card} />
        ))}
      </section>

      {/* APPLICATION FILTERS */}
      <section className="space-y-4">

        {/* Search */}
        <div className="relative max-w-lg">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search company or job role..."
            className="h-11 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        {/* Status tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                  active
                    ? "border-primary bg-primary text-text-inverse"
                    : "border-border bg-surface text-text-secondary hover:border-primary hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* APPLICATION LIST */}
      <section className="space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-bold text-text-primary">
            Your Applications
          </h2>

          <span className="text-xs text-text-muted">
            {filteredApplications.length} applications
          </span>
        </div>

        {filteredApplications.length > 0 ? (
          <div className="space-y-4">
            {filteredApplications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-border bg-surface px-5 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BriefcaseBusiness size={28} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-text-primary">
              No applications found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
              There are no applications matching your current search or selected status.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveFilter("All");
                setSearch("");
              }}
              className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              View All Applications
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
