
import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Clock3,
  Bookmark,
  BriefcaseBusiness,
  CheckCircle2,
  SlidersHorizontal,
  X,
  GraduationCap,
  IndianRupee,
  Filter,
  CalendarDays,
  Target,
} from "lucide-react";

// ============================================
// DEMO JOB DATA
// Replace with backend API data later.
// ============================================

const demoJobs = [
  {
    id: 1,
    company: "Microsoft",
    initials: "MS",
    title: "Software Engineer",
    location: "Bangalore",
    workMode: "Hybrid",
    deadline: "Feb 28",
    salary: "₹22 LPA",
    skills: ["Java", "React", "SQL", "DSA"],
    match: 92,
    type: "Full Time",
    branch: "CSE",
    minCgpa: 7.0,
    description:
      "Work with engineering teams to design, develop and maintain scalable software solutions. Build reliable applications and contribute to product development.",
    color: "bg-sky-500",
    recommended: true,
  },
  {
    id: 2,
    company: "Google",
    initials: "G",
    title: "SDE Intern",
    location: "Hyderabad",
    workMode: "On-site",
    deadline: "Mar 5",
    salary: "₹80K/mo",
    skills: ["Python", "DSA", "System Design"],
    match: 88,
    type: "Internship",
    branch: "CSE",
    minCgpa: 7.5,
    description:
      "Join an engineering team as an intern and work on real-world technical challenges, software development and large-scale systems.",
    color: "bg-red-500",
    recommended: true,
  },
  {
    id: 3,
    company: "TCS",
    initials: "TCS",
    title: "Software Engineer",
    location: "Multiple",
    workMode: "On-site",
    deadline: "Mar 5",
    salary: "₹7 LPA",
    skills: ["Java", "Python", "DSA"],
    match: 89,
    type: "Full Time",
    branch: "All Branches",
    minCgpa: 6.0,
    description:
      "Join the software engineering team to build enterprise applications, work with modern technologies and solve business problems.",
    color: "bg-red-600",
    recommended: true,
  },
  {
    id: 4,
    company: "Infosys",
    initials: "IN",
    title: "Backend Developer",
    location: "Bangalore",
    workMode: "Hybrid",
    deadline: "Mar 10",
    salary: "₹10 LPA",
    skills: ["Spring Boot", "SQL", "REST"],
    match: 87,
    type: "Full Time",
    branch: "CSE",
    minCgpa: 7.0,
    description:
      "Develop backend services, REST APIs and database-driven applications. Collaborate with cross-functional teams to deliver scalable solutions.",
    color: "bg-sky-600",
    recommended: true,
  },
  {
    id: 5,
    company: "Amazon",
    initials: "A",
    title: "SDE I",
    location: "Bangalore",
    workMode: "On-site",
    deadline: "Mar 15",
    salary: "₹18 LPA",
    skills: ["Java", "DSA", "AWS"],
    match: 85,
    type: "Full Time",
    branch: "CSE",
    minCgpa: 7.5,
    description:
      "Build customer-focused products and scalable distributed systems. Work on challenging engineering problems.",
    color: "bg-amber-500",
    recommended: true,
  },
  {
    id: 6,
    company: "Wipro",
    initials: "W",
    title: "Project Engineer",
    location: "Multiple",
    workMode: "On-site",
    deadline: "Mar 18",
    salary: "₹6 LPA",
    skills: ["Java", "SQL", "Python"],
    match: 78,
    type: "Full Time",
    branch: "All Branches",
    minCgpa: 6.0,
    description:
      "Work on software development and enterprise technology projects with an opportunity to learn and grow.",
    color: "bg-orange-500",
    recommended: false,
  },
  {
    id: 7,
    company: "Adobe",
    initials: "AD",
    title: "Software Development Intern",
    location: "Noida",
    workMode: "Hybrid",
    deadline: "Mar 20",
    salary: "₹75K/mo",
    skills: ["C++", "DSA", "Java"],
    match: 90,
    type: "Internship",
    branch: "CSE",
    minCgpa: 8.0,
    description:
      "Contribute to software products, collaborate with experienced developers and solve interesting technical challenges.",
    color: "bg-red-500",
    recommended: true,
  },
  {
    id: 8,
    company: "Accenture",
    initials: "AC",
    title: "Associate Software Engineer",
    location: "Multiple",
    workMode: "Hybrid",
    deadline: "Mar 25",
    salary: "₹6.5 LPA",
    skills: ["Java", "SQL", "React"],
    match: 82,
    type: "Full Time",
    branch: "All Branches",
    minCgpa: 6.0,
    description:
      "Participate in software engineering projects, application development and technology consulting engagements.",
    color: "bg-placement-purple",
    recommended: false,
  },
];

// ============================================
// FILTER OPTIONS
// ============================================

const jobTypes = [
  "All",
  "Full Time",
  "Internship",
  "Contract",
];

const locations = [
  "Any",
  "Bangalore",
  "Hyderabad",
  "Multiple",
  "Remote",
];

const branches = [
  "All Branches",
  "CSE",
  "IT",
  "ECE",
  "MCA",
];

const cgpaOptions = [
  "No Filter",
  "6.0+",
  "7.0+",
  "7.5+",
  "8.0+",
];

const availableSkills = [
  "Java",
  "Python",
  "React",
  "SQL",
  "DSA",
  "Spring Boot",
];

const tabs = [
  "All Jobs",
  "Recommended",
  "Saved",
];

// ============================================
// DEFAULT FILTER STATE
// ============================================

const defaultFilters = {
  jobType: "All",
  location: "Any",
  branch: "All Branches",
  cgpa: "No Filter",
  skills: [],
};

// ============================================
// REUSABLE FILTER GROUP
// ============================================

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold text-text-secondary">
        {title}
      </h3>

      <div className="space-y-1">
        {options.map((option) => {
          const active = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={active}
              className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
              }`}
            >
              {option}

              {active && (
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// SKILLS FILTER
// ============================================

function SkillsFilter({ selectedSkills, onChange }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold text-text-secondary">
        Required Skills
      </h3>

      <div className="flex flex-wrap gap-2">
        {availableSkills.map((skill) => {
          const selected = selectedSkills.includes(skill);

          return (
            <button
              key={skill}
              type="button"
              onClick={() =>
                onChange((previous) =>
                  previous.includes(skill)
                    ? previous.filter((item) => item !== skill)
                    : [...previous, skill]
                )
              }
              aria-pressed={selected}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                selected
                  ? "border-primary bg-primary text-text-inverse"
                  : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {skill}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// JOB CARD
// ============================================

function JobCard({
  job,
  saved,
  applied,
  onSave,
  onApply,
  onDetails,
}) {
  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-6">

      {/* Company and bookmark */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white ${job.color}`}
          >
            {job.initials}
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-bold text-text-primary">
              {job.title}
            </h3>

            <p className="mt-0.5 text-sm text-text-secondary">
              {job.company}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSave(job.id)}
          aria-label={saved ? "Remove saved job" : "Save job"}
          aria-pressed={saved}
          title={saved ? "Remove from saved jobs" : "Save job"}
          className={`rounded-lg p-2 transition-colors ${
            saved
              ? "bg-primary/10 text-primary"
              : "text-text-muted hover:bg-primary/10 hover:text-primary"
          }`}
        >
          <Bookmark
            size={19}
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Location and deadline */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-secondary sm:text-sm">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="shrink-0 text-text-muted" />
          {job.location}, {job.workMode}
        </span>

        <span className="flex items-center gap-1.5">
          <Clock3 size={14} className="shrink-0 text-text-muted" />
          Deadline: {job.deadline}
        </span>
      </div>

      {/* Skills */}
      <div className="mt-5 flex min-h-8 flex-wrap items-center gap-2">
        {job.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-surface-secondary px-2.5 py-1 text-xs font-medium text-text-secondary"
          >
            {skill}
          </span>
        ))}

        {job.skills.length > 3 && (
          <span className="text-xs font-medium text-text-muted">
            +{job.skills.length - 3}
          </span>
        )}
      </div>

      {/* Match and salary */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
            {job.match}% Match
          </span>

          <span className="flex items-center gap-1 text-xs font-semibold text-success">
            <CheckCircle2 size={13} />
            Eligible
          </span>
        </div>

        <span className="text-sm font-bold text-primary">
          {job.salary}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onDetails(job)}
          className="rounded-xl border border-border px-3 py-2.5 text-xs font-semibold text-text-primary transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary sm:text-sm"
        >
          View Details
        </button>

        <button
          type="button"
          disabled={applied}
          onClick={() => onApply(job.id)}
          className="rounded-xl bg-primary px-3 py-2.5 text-xs font-semibold text-text-inverse transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-surface-hover disabled:text-text-muted sm:text-sm"
        >
          {applied ? "Applied" : "Apply Now"}
        </button>
      </div>
    </article>
  );
}

// ============================================
// JOB DETAILS MODAL
// ============================================

function JobDetailsModal({
  job,
  onClose,
  onApply,
  applied,
}) {
  if (!job) return null;

  const details = [
    {
      icon: MapPin,
      label: "Location",
      value: job.location,
    },
    {
      icon: BriefcaseBusiness,
      label: "Job Type",
      value: job.type,
    },
    {
      icon: IndianRupee,
      label: "Compensation",
      value: job.salary,
    },
    {
      icon: CalendarDays,
      label: "Deadline",
      value: job.deadline,
    },
    {
      icon: GraduationCap,
      label: "Eligible Branch",
      value: job.branch,
    },
    {
      icon: Target,
      label: "Minimum CGPA",
      value: `${job.minCgpa.toFixed(1)}+`,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-modal-title"
        className="my-auto w-full max-w-2xl rounded-2xl border border-border bg-surface p-5 shadow-2xl sm:p-7"
      >
        {/* Modal heading */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold text-white ${job.color}`}
            >
              {job.initials}
            </div>

            <div className="min-w-0">
              <h2
                id="job-modal-title"
                className="text-lg font-bold text-text-primary sm:text-xl"
              >
                {job.title}
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                {job.company}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close job details"
            className="rounded-lg p-2 text-text-muted hover:bg-surface-hover hover:text-text-primary"
          >
            <X size={20} />
          </button>
        </div>

        {/* Job information */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl bg-surface-secondary p-3"
              >
                <Icon size={17} className="text-primary" />

                <p className="mt-2 text-[11px] text-text-muted">
                  {item.label}
                </p>

                <p className="mt-1 text-xs font-semibold text-text-primary">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="font-bold text-text-primary">
            Job Description
          </h3>

          <p className="mt-2 text-sm leading-7 text-text-secondary">
            {job.description}
          </p>
        </div>

        {/* Required skills */}
        <div className="mt-6">
          <h3 className="font-bold text-text-primary">
            Required Skills
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Modal actions */}
        <div className="mt-7 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-text-secondary hover:bg-surface-hover"
          >
            Close
          </button>

          <button
            type="button"
            disabled={applied}
            onClick={() => onApply(job.id)}
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-surface-hover disabled:text-text-muted"
          >
            {applied ? "Already Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN JOBS PAGE
// ============================================

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Jobs");

  // Draft filters: selections not yet applied
  const [draftFilters, setDraftFilters] = useState(defaultFilters);

  // Applied filters: used to filter job listings
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters);

  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // ==========================================
  // FILTER HANDLERS
  // ==========================================

  function updateDraftFilter(key, value) {
    setDraftFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  function applyFilters() {
    setAppliedFilters({
      ...draftFilters,
      skills: [...draftFilters.skills],
    });

    setMobileFiltersOpen(false);
  }

  function clearFilters() {
    setDraftFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setSearch("");
    setActiveTab("All Jobs");
  }

  // ==========================================
  // SAVE / APPLY HANDLERS
  // ==========================================

  function toggleSave(id) {
    setSavedJobs((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function applyForJob(id) {
    setAppliedJobs((previous) =>
      previous.includes(id)
        ? previous
        : [...previous, id]
    );
  }

  // ==========================================
  // SEARCH AND FILTER LOGIC
  // ==========================================

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return demoJobs.filter((job) => {
      const matchesSearch =
        !query ||
        [
          job.title,
          job.company,
          job.location,
          job.type,
          ...job.skills,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesType =
        appliedFilters.jobType === "All" ||
        job.type === appliedFilters.jobType;

      const matchesLocation =
        appliedFilters.location === "Any" ||
        job.location.toLowerCase() ===
          appliedFilters.location.toLowerCase();

      const matchesBranch =
        appliedFilters.branch === "All Branches" ||
        job.branch === appliedFilters.branch ||
        job.branch === "All Branches";

      const selectedCgpa =
        appliedFilters.cgpa === "No Filter"
          ? 0
          : Number(appliedFilters.cgpa.replace("+", ""));

      // Shows jobs whose CGPA requirement is within
      // the selected CGPA threshold.
      const matchesCgpa =
        selectedCgpa === 0 ||
        job.minCgpa <= selectedCgpa;

      const matchesSkills =
        appliedFilters.skills.length === 0 ||
        appliedFilters.skills.every((skill) =>
          job.skills.some(
            (jobSkill) =>
              jobSkill.toLowerCase() === skill.toLowerCase()
          )
        );

      const matchesTab =
        activeTab === "All Jobs" ||
        (activeTab === "Recommended" && job.recommended) ||
        (activeTab === "Saved" && savedJobs.includes(job.id));

      return (
        matchesSearch &&
        matchesType &&
        matchesLocation &&
        matchesBranch &&
        matchesCgpa &&
        matchesSkills &&
        matchesTab
      );
    });
  }, [
    search,
    activeTab,
    appliedFilters,
    savedJobs,
  ]);

  const hasActiveFilters =
    appliedFilters.jobType !== "All" ||
    appliedFilters.location !== "Any" ||
    appliedFilters.branch !== "All Branches" ||
    appliedFilters.cgpa !== "No Filter" ||
    appliedFilters.skills.length > 0;

  // ==========================================
  // FILTER PANEL CONTENT
  // Shared by desktop and mobile
  // ==========================================

  const filterContent = (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-text-primary">
          Filters
        </h2>

        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-semibold text-primary hover:underline"
        >
          Clear All
        </button>
      </div>

      <FilterGroup
        title="Job Type"
        options={jobTypes}
        value={draftFilters.jobType}
        onChange={(value) =>
          updateDraftFilter("jobType", value)
        }
      />

      <div className="border-t border-border" />

      <FilterGroup
        title="Location"
        options={locations}
        value={draftFilters.location}
        onChange={(value) =>
          updateDraftFilter("location", value)
        }
      />

      <div className="border-t border-border" />

      <FilterGroup
        title="Branch"
        options={branches}
        value={draftFilters.branch}
        onChange={(value) =>
          updateDraftFilter("branch", value)
        }
      />

      <div className="border-t border-border" />

      <FilterGroup
        title="Min CGPA"
        options={cgpaOptions}
        value={draftFilters.cgpa}
        onChange={(value) =>
          updateDraftFilter("cgpa", value)
        }
      />

      <div className="border-t border-border" />

      <SkillsFilter
        selectedSkills={draftFilters.skills}
        onChange={(callback) =>
          setDraftFilters((previous) => ({
            ...previous,
            skills: callback(previous.skills),
          }))
        }
      />

      <div className="rounded-xl bg-primary/5 p-4">
        <div className="flex items-center gap-2 text-primary">
          <GraduationCap size={18} />

          <p className="text-xs font-bold">
            Placement Tip
          </p>
        </div>

        <p className="mt-2 text-xs leading-5 text-text-secondary">
          Keep your profile, skills and resume updated to discover more relevant opportunities.
        </p>
      </div>

      <div className="space-y-2 border-t border-border pt-5">
        <button
          type="button"
          onClick={applyFilters}
          className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
        >
          Apply Filters
        </button>

        <button
          type="button"
          onClick={clearFilters}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-surface-hover"
        >
          Clear All
        </button>
      </div>
    </>
  );

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="mx-auto w-full max-w-[1800px] space-y-5 pb-8">

      {/* PAGE HEADING */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Job Discovery
          </h1>

          <p className="mt-1 text-sm text-text-muted">
            {filteredJobs.length} opportunities matching your preferences
          </p>
        </div>

        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-hover lg:hidden"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">

        {/* DESKTOP FILTER SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-6 overflow-y-auto rounded-2xl border border-border bg-surface p-5 shadow-sm">
            {filterContent}
          </div>
        </aside>

        {/* JOB CONTENT */}
        <main className="min-w-0 space-y-5">

          {/* SEARCH AND TABS */}
          <div className="flex flex-col gap-3 xl:flex-row">
            <div className="relative min-w-0 flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search by role, company, skills..."
                className="h-12 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div className="flex shrink-0 items-center gap-1 overflow-x-auto rounded-xl bg-surface-secondary p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={activeTab === tab}
                  className={`shrink-0 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                    activeTab === tab
                      ? "bg-primary text-text-inverse shadow-sm"
                      : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                  }`}
                >
                  {tab}

                  {tab === "Saved" && savedJobs.length > 0 && (
                    <span className="ml-1.5">
                      ({savedJobs.length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE FILTER INDICATORS */}
          {(hasActiveFilters || search.trim()) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-text-muted">
                Active filters:
              </span>

              {appliedFilters.jobType !== "All" && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  {appliedFilters.jobType}
                </span>
              )}

              {appliedFilters.location !== "Any" && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  {appliedFilters.location}
                </span>
              )}

              {appliedFilters.branch !== "All Branches" && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  {appliedFilters.branch}
                </span>
              )}

              {appliedFilters.cgpa !== "No Filter" && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  CGPA: {appliedFilters.cgpa}
                </span>
              )}

              {appliedFilters.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                >
                  {skill}
                </span>
              ))}

              {search.trim() && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  Search: {search}
                </span>
              )}

              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* JOB CARDS */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  saved={savedJobs.includes(job.id)}
                  applied={appliedJobs.includes(job.id)}
                  onSave={toggleSave}
                  onApply={applyForJob}
                  onDetails={setSelectedJob}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-border bg-surface px-5 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <BriefcaseBusiness size={28} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-text-primary">
                No jobs found
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
                We couldn't find any opportunities matching your current search and filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* RESULTS FOOTER */}
          {filteredJobs.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-xs text-text-muted">
              <span>
                Showing {filteredJobs.length} of {demoJobs.length} opportunities
              </span>

              <span className="flex items-center gap-1">
                <CheckCircle2 size={13} className="text-success" />
                Eligibility indicators are demo data
              </span>
            </div>
          )}
        </main>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {mobileFiltersOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setMobileFiltersOpen(false);
            }
          }}
        >
          <div className="flex h-full w-full max-w-sm flex-col overflow-y-auto bg-surface p-5 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter size={19} className="text-primary" />

                <h2 className="text-lg font-bold text-text-primary">
                  Filters
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="rounded-lg p-2 text-text-muted hover:bg-surface-hover"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {filterContent}
            </div>
          </div>
        </div>
      )}

      {/* JOB DETAILS MODAL */}
      <JobDetailsModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={(id) => {
          applyForJob(id);
          setSelectedJob(null);
        }}
        applied={
          selectedJob
            ? appliedJobs.includes(selectedJob.id)
            : false
        }
      />
    </div>
  );
}
