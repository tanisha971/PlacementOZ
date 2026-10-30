
import { useOutletContext, useNavigate } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

import {
  UserRound,
  GraduationCap,
  Code2,
  FileText,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Pencil,
  Plus,
  BriefcaseBusiness,
  Award,
  FolderKanban,
  Bookmark,
  Building2,
  ExternalLink,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Target,
} from "lucide-react";

// ============================================
// REUSABLE COMPONENTS
// ============================================

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-text-muted">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-text-primary">
          {value || "Not added yet"}
        </p>
      </div>
    </div>
  );
}

function SectionCard({ id, title, icon: Icon, children, action }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-colors duration-300 sm:p-6"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon size={18} />
          </div>

          <h2 className="font-bold text-text-primary">
            {title}
          </h2>
        </div>

        {action && (
          <button
            type="button"
            onClick={action.onClick}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <Pencil size={13} />
            {action.label || "Edit"}
          </button>
        )}
      </div>

      {children}
    </section>
  );
}

function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface-secondary/50 px-5 py-9 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={23} />
      </div>

      <h3 className="mt-3 text-sm font-bold text-text-primary">
        {title}
      </h3>

      <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-text-muted">
        {description}
      </p>

      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
        >
          <Plus size={14} />
          {action.label}
        </button>
      )}
    </div>
  );
}

// ============================================
// APPLICATION STATUS
// ============================================

function StatusBadge({ status }) {
  const normalized = String(status || "Pending").toLowerCase();

  const config = {
    selected: {
      label: "Selected",
      icon: CheckCircle2,
      className: "bg-success/10 text-success",
    },
    shortlisted: {
      label: "Shortlisted",
      icon: CheckCircle2,
      className: "bg-success/10 text-success",
    },
    applied: {
      label: "Applied",
      icon: CheckCircle2,
      className: "bg-info/10 text-info",
    },
    pending: {
      label: "Pending",
      icon: Clock3,
      className: "bg-warning/10 text-warning",
    },
    rejected: {
      label: "Rejected",
      icon: XCircle,
      className: "bg-error/10 text-error",
    },
    "in review": {
      label: "In Review",
      icon: AlertCircle,
      className: "bg-warning/10 text-warning",
    },
  };

  const item = config[normalized] || config.pending;
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${item.className}`}
    >
      <Icon size={12} />
      {item.label}
    </span>
  );
}

// ============================================
// JOB ITEM
// ============================================

function JobItem({ job, saved = false }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Building2 size={20} />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-text-primary">
            {job.title || "Untitled Position"}
          </h3>

          <p className="mt-1 text-xs text-text-secondary">
            {job.company || "Company not specified"}
          </p>

          <div className="mt-2 flex flex-wrap gap-3 text-xs text-text-muted">
            {job.location && (
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {job.location}
              </span>
            )}

            {job.salary && (
              <span className="font-medium text-primary">
                {job.salary}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        {!saved && <StatusBadge status={job.status} />}

        {saved && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
            <Bookmark size={13} />
            Saved
          </span>
        )}

        {job.url && (
          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${job.title || "job"}`}
            className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

// ============================================
// MAIN PROFILE PAGE
// ============================================

export default function MyProfile() {
  const { user = {} } = useOutletContext();
  const navigate = useNavigate();

  const name = user?.name || "Student";

  // Personal information
  const personalInfo = [
    { icon: UserRound, label: "Full Name", value: name },
    { icon: Mail, label: "Email Address", value: user?.email },
    { icon: Phone, label: "Phone Number", value: user?.phone },
    { icon: MapPin, label: "Location", value: user?.location },
    { icon: CalendarDays, label: "Date of Birth", value: user?.dob },
  ];

  // Academic information
  const academicInfo = [
    {
      icon: GraduationCap,
      label: "College / University",
      value: user?.college,
    },
    {
      icon: BriefcaseBusiness,
      label: "Department",
      value: user?.department,
    },
    {
      icon: GraduationCap,
      label: "Degree",
      value: user?.degree,
    },
    {
      icon: CalendarDays,
      label: "Graduation Year",
      value: user?.graduationYear,
    },
    {
      icon: GraduationCap,
      label: "CGPA",
      value: user?.cgpa,
    },
  ];

  // Profile collections
  const skills = Array.isArray(user?.skills) ? user.skills : [];
  const certifications = Array.isArray(user?.certifications)
    ? user.certifications
    : [];
  const projects = Array.isArray(user?.projects) ? user.projects : [];
  const experience = Array.isArray(user?.experience)
    ? user.experience
    : [];
  const applications = Array.isArray(user?.applications)
    ? user.applications
    : [];
  const savedJobs = Array.isArray(user?.savedJobs)
    ? user.savedJobs
    : [];

  // Profile completion
  const completionItems = [
    Boolean(user?.name),
    Boolean(user?.email),
    Boolean(user?.phone),
    Boolean(user?.location),
    Boolean(user?.college),
    Boolean(user?.department),
    Boolean(user?.degree),
    Boolean(user?.graduationYear),
    Boolean(user?.cgpa),
    skills.length > 0,
    certifications.length > 0,
    projects.length > 0,
    Boolean(user?.resume),
  ];

  const completion = Math.round(
    (completionItems.filter(Boolean).length /
      completionItems.length) *
      100
  );

  // Application statistics
  const applicationStats = {
    total: applications.length,

    selected: applications.filter((item) =>
      ["selected", "shortlisted"].includes(
        String(item.status || "").toLowerCase()
      )
    ).length,

    pending: applications.filter((item) =>
      ["pending", "applied", "in review"].includes(
        String(item.status || "").toLowerCase()
      )
    ).length,

    rejected: applications.filter(
      (item) =>
        String(item.status || "").toLowerCase() === "rejected"
    ).length,
  };

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-5 pb-8">

      {/* =====================================
          PAGE HEADING
      ====================================== */}

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-text-muted">
            Your professional identity, achievements and placement journey.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/student/profile/edit")}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
        >
          <Pencil size={15} />
          Edit Profile
        </button>
      </div>

      {/* =====================================
          FACEBOOK-STYLE PROFILE HEADER
      ====================================== */}

      <ProfileHeader user={user} />

      {/* =====================================
          PROFILE COMPLETION
      ====================================== */}

      <section
        id="profile-overview"
        className="scroll-mt-24 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target size={20} />
            </div>

            <div>
              <h2 className="font-bold text-text-primary">
                Profile Completion
              </h2>

              <p className="mt-1 text-xs text-text-muted">
                Complete your profile to improve recruiter visibility.
              </p>
            </div>
          </div>

          <span className="text-2xl font-extrabold text-primary tabular-nums">
            {completion}%
          </span>
        </div>

        <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-surface-secondary">
          <div
            className="h-full rounded-full bg-gradient-to-r from-placement-purple to-placement-blue transition-all duration-500"
            style={{ width: `${completion}%` }}
          />
        </div>
      </section>

      {/* =====================================
          PERSONAL INFORMATION
      ====================================== */}

      <SectionCard
        id="personal-information"
        title="Personal Information"
        icon={UserRound}
        action={{
          label: "Edit",
          onClick: () => navigate("/student/profile/edit"),
        }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalInfo.map((item) => (
            <InfoItem key={item.label} {...item} />
          ))}
        </div>
      </SectionCard>

      {/* =====================================
          ACADEMIC INFORMATION
      ====================================== */}

      <SectionCard
        title="Academic Information"
        icon={GraduationCap}
        action={{
          label: "Edit",
          onClick: () => navigate("/student/profile/edit"),
        }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academicInfo.map((item) => (
            <InfoItem key={item.label} {...item} />
          ))}
        </div>
      </SectionCard>

      {/* =====================================
          TECHNICAL SKILLS
      ====================================== */}

      <SectionCard
        title="Technical Skills"
        icon={Code2}
        action={{
          label: "Add Skills",
          onClick: () => navigate("/student/profile/edit"),
        }}
      >
        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Code2}
            title="Showcase your technical expertise"
            description="Add programming languages, frameworks, databases and tools you know."
            action={{
              label: "Add Skills",
              onClick: () => navigate("/student/profile/edit"),
            }}
          />
        )}
      </SectionCard>

      {/* =====================================
          CERTIFICATIONS
      ====================================== */}

      <SectionCard
        title="Certifications & Achievements"
        icon={Award}
        action={{
          label: "Add Certification",
          onClick: () => navigate("/student/profile/edit"),
        }}
      >
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {certifications.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warning/10 text-warning">
                  <Award size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-text-primary">
                    {item.name || item.title || "Certification"}
                  </h3>

                  <p className="mt-1 text-xs text-text-secondary">
                    {item.issuer ||
                      item.organization ||
                      "Issuer not specified"}
                  </p>

                  {item.date && (
                    <p className="mt-2 text-xs text-text-muted">
                      {item.date}
                    </p>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      View Certificate
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Award}
            title="No certifications added"
            description="Show recruiters your certifications, courses and achievements."
            action={{
              label: "Add Certification",
              onClick: () => navigate("/student/profile/edit"),
            }}
          />
        )}
      </SectionCard>

      {/* =====================================
          PROJECTS
      ====================================== */}

      <SectionCard
        id="profile-projects"
        title="Projects"
        icon={FolderKanban}
        action={{
          label: "Add Project",
          onClick: () => navigate("/student/profile/edit"),
        }}
      >
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.id || index}
                className="rounded-xl border border-border p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FolderKanban size={19} />
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View project"
                      className="rounded-lg p-2 text-text-muted hover:bg-primary/10 hover:text-primary"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <h3 className="mt-3 font-bold text-text-primary">
                  {project.name || project.title || "Untitled Project"}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-text-secondary">
                  {project.description ||
                    "No project description provided."}
                </p>

                {Array.isArray(project.technologies) &&
                  project.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={`${tech}-${i}`}
                          className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={FolderKanban}
            title="Your projects belong here"
            description="Add academic, personal and hackathon projects to demonstrate your practical skills."
            action={{
              label: "Add Project",
              onClick: () => navigate("/student/profile/edit"),
            }}
          />
        )}
      </SectionCard>

      {/* =====================================
          EXPERIENCE
      ====================================== */}

      <SectionCard
        id="profile-experience"
        title="Experience"
        icon={BriefcaseBusiness}
        action={{
          label: "Add Experience",
          onClick: () => navigate("/student/profile/edit"),
        }}
      >
        {experience.length > 0 ? (
          <div className="space-y-4">
            {experience.map((item, index) => (
              <div key={item.id || index} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-info/10 text-info">
                  <BriefcaseBusiness size={19} />
                </div>

                <div className="min-w-0 flex-1 border-b border-border pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold text-text-primary">
                    {item.position ||
                      item.role ||
                      item.title ||
                      "Position"}
                  </h3>

                  <p className="mt-1 text-sm text-text-secondary">
                    {item.company ||
                      item.organization ||
                      "Organization not specified"}
                  </p>

                  {(item.duration ||
                    item.startDate ||
                    item.endDate) && (
                    <p className="mt-2 text-xs text-text-muted">
                      {item.duration ||
                        `${item.startDate || ""} - ${
                          item.endDate || "Present"
                        }`}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={BriefcaseBusiness}
            title="No experience added yet"
            description="Add internships, work experience, volunteering or relevant training."
            action={{
              label: "Add Experience",
              onClick: () => navigate("/student/profile/edit"),
            }}
          />
        )}
      </SectionCard>

      {/* =====================================
          RESUME
      ====================================== */}

      <SectionCard title="Resume" icon={FileText}>
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-surface-secondary p-4 sm:flex-row sm:items-center sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText size={22} />
            </div>

            <div>
              <p className="text-sm font-bold text-text-primary">
                {user?.resume?.name || "Your Resume"}
              </p>

              <p className="mt-1 text-xs text-text-muted">
                {user?.resume
                  ? "Your resume is available in your profile."
                  : "Upload your latest resume in PDF format."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {user?.resume?.url && (
              <a
                href={user.resume.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs font-semibold text-text-secondary hover:bg-surface-hover"
              >
                <ExternalLink size={14} />
                View Resume
              </a>
            )}

            <button
              type="button"
              onClick={() => navigate("/student/profile/edit")}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
            >
              <Plus size={15} />
              {user?.resume ? "Update Resume" : "Upload Resume"}
            </button>
          </div>
        </div>
      </SectionCard>

      {/* =====================================
          APPLICATION OVERVIEW
      ====================================== */}

      <SectionCard
        id="profile-applications"
        title="Application Overview"
        icon={BriefcaseBusiness}
        action={{
          label: "View All",
          onClick: () => navigate("/student/applications"),
        }}
      >
        {/* Application statistics */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              label: "Total Applied",
              value: applicationStats.total,
              icon: BriefcaseBusiness,
              color: "text-primary bg-primary/10",
            },
            {
              label: "Shortlisted",
              value: applicationStats.selected,
              icon: CheckCircle2,
              color: "text-success bg-success/10",
            },
            {
              label: "In Progress",
              value: applicationStats.pending,
              icon: Clock3,
              color: "text-warning bg-warning/10",
            },
            {
              label: "Rejected",
              value: applicationStats.rejected,
              icon: XCircle,
              color: "text-error bg-error/10",
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-surface-secondary/50 p-4"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.color}`}
                >
                  <Icon size={17} />
                </div>

                <p className="mt-3 text-2xl font-extrabold text-text-primary">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-text-muted">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recent applications */}
        <div className="mt-5 space-y-3">
          <h3 className="text-sm font-bold text-text-primary">
            Recent Applications
          </h3>

          {applications.length > 0 ? (
            applications.slice(0, 5).map((job, index) => (
              <JobItem
                key={job.id || index}
                job={job}
              />
            ))
          ) : (
            <EmptyState
              icon={BriefcaseBusiness}
              title="No applications yet"
              description="Your submitted job applications and their progress will appear here."
              action={{
                label: "Explore Jobs",
                onClick: () => navigate("/student/jobs"),
              }}
            />
          )}
        </div>
      </SectionCard>

      {/* =====================================
          SAVED JOBS
      ====================================== */}

      <SectionCard
        title="Saved Jobs"
        icon={Bookmark}
        action={{
          label: "Explore Jobs",
          onClick: () => navigate("/student/jobs"),
        }}
      >
        {savedJobs.length > 0 ? (
          <div className="space-y-3">
            {savedJobs.slice(0, 5).map((job, index) => (
              <JobItem
                key={job.id || index}
                job={job}
                saved
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Bookmark}
            title="No saved jobs yet"
            description="Bookmark interesting opportunities and revisit them whenever you are ready to apply."
            action={{
              label: "Browse Jobs",
              onClick: () => navigate("/student/jobs"),
            }}
          />
        )}
      </SectionCard>

    </div>
  );
}
