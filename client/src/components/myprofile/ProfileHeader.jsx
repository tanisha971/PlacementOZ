
import { useState } from "react";
import {
  Mail,
  GraduationCap,
  MapPin,
  LayoutDashboard,
  UserRound,
  FolderKanban,
  BriefcaseBusiness,
  FileCheck,
} from "lucide-react";

const tabs = [
  { label: "Overview", id: "profile-overview", icon: LayoutDashboard },
  { label: "About", id: "personal-information", icon: UserRound },
  { label: "Projects", id: "profile-projects", icon: FolderKanban },
  { label: "Experience", id: "profile-experience", icon: BriefcaseBusiness },
  { label: "Applications", id: "profile-applications", icon: FileCheck },
];

export default function ProfileHeader({ user = {} }) {
  const [activeTab, setActiveTab] = useState("profile-overview");

  const name = user?.name || "Student";
  const role = user?.role || "Student";
  const email = user?.email || "";

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  function handleTabClick(id) {
    setActiveTab(id);
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">

      {/* Cover banner */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-r from-placement-navy via-placement-purple to-placement-blue sm:h-52">
        {/* Decorative shapes */}
        <div className="absolute -right-16 -top-36 h-96 w-96 rounded-full border-[45px] border-white/10" />

        <div className="absolute right-48 top-10 h-40 w-40 rounded-full bg-placement-pink/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/20 to-transparent" />

        
      </div>

      {/* Identity strip */}
      <div className="relative border-b border-border bg-surface-secondary/60 px-5 sm:px-8">

        <div className="flex min-h-[100px] flex-col justify-end gap-3 pb-4 pt-4 sm:min-h-[105px] sm:flex-row sm:items-end sm:justify-between sm:pb-4">

          {/* Avatar */}
          <div className="flex min-w-0 items-end gap-4">

            <div className="relative -mt-[76px] z-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-[5px] border-surface bg-gradient-to-br from-placement-purple to-placement-blue text-2xl font-extrabold text-white shadow-lg sm:-mt-[88px] sm:h-28 sm:w-28 sm:text-3xl">
              {initials || "U"}

              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-[3px] border-surface bg-success" />
            </div>

            {/* Name and role */}
            <div className="min-w-0 pb-1">
              <h2 className="truncate text-xl font-extrabold tracking-tight text-text-primary sm:text-2xl">
                {name}
              </h2>

              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {role}
                </span>

                {user?.department && (
                  <span className="text-xs text-text-muted">
                    {user.department}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Account status */}
          <div className="pb-1 sm:pb-2 sm:pl-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/10 px-3 py-2 text-xs font-semibold text-success">
              <span className="h-2 w-2 rounded-full bg-success" />
              Active Account
            </span>
          </div>
        </div>

        
      </div>

      {/* Profile navigation tabs */}
      <nav
        aria-label="Profile sections"
        className="flex overflow-x-auto bg-surface px-3 scrollbar-none sm:px-6"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;

          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              aria-current={active ? "location" : undefined}
              className={`flex shrink-0 items-center gap-2 border-b-[3px] px-4 py-4 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                active
                  ? "border-primary text-primary"
                  : "border-transparent text-text-muted hover:border-border-strong hover:text-text-primary"
              }`}
            >
              <Icon size={15} />
              {tab.label}
            </a>
          );
        })}
      </nav>
    </section>
  );
}
