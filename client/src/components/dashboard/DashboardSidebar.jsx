
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UserRound,
  BriefcaseBusiness,
  Star,
  FileText,
  BookOpen,
  Target,
  Brain,
  MessageSquare,
  Sparkles,
  Bell,
  Settings,
  Users,
  Building2,
  ClipboardList,
  ChevronLeft,
} from "lucide-react";
import Logo from "../common/Logo";
import ProfileBar from "./ProfileBar";

const navigationByRole = {
  Student: [
    { label: "Dashboard", path: "dashboard", icon: LayoutDashboard },
    { label: "My Profile", path: "profile", icon: UserRound },
    { label: "Jobs", path: "jobs", icon: BriefcaseBusiness },
    { label: "Recommended", path: "recommended", icon: Star, badge: "24" },
    { label: "Applications", path: "applications", icon: FileText },
    { label: "Resume", path: "resume", icon: BookOpen },
    { label: "Skill Gap", path: "skill-gap", icon: Target },
    { label: "Preparation", path: "preparation", icon: Brain },
    { label: "Interviews", path: "interviews", icon: MessageSquare },
    { label: "AI Assistant", path: "ai-assistant", icon: Sparkles, badge: "AI" },
    { label: "Notifications", path: "notifications", icon: Bell, badge: "3" },
    { label: "Settings", path: "settings", icon: Settings },
  ],
  Officer: [
    { label: "Dashboard", path: "dashboard", icon: LayoutDashboard },
    { label: "Students", path: "students", icon: Users },
    { label: "Companies", path: "companies", icon: Building2 },
    { label: "Job Drives", path: "drives", icon: BriefcaseBusiness },
    { label: "Applications", path: "applications", icon: ClipboardList },
    { label: "Notifications", path: "notifications", icon: Bell },
    { label: "Settings", path: "settings", icon: Settings },
  ],
  Recruiter: [
    { label: "Dashboard", path: "dashboard", icon: LayoutDashboard },
    { label: "Company Profile", path: "profile", icon: Building2 },
    { label: "Job Listings", path: "jobs", icon: BriefcaseBusiness },
    { label: "Applicants", path: "applicants", icon: Users },
    { label: "Interviews", path: "interviews", icon: MessageSquare },
    { label: "Settings", path: "settings", icon: Settings },
  ],
  Admin: [
    { label: "Dashboard", path: "dashboard", icon: LayoutDashboard },
    { label: "Users", path: "users", icon: Users },
    { label: "Students", path: "students", icon: GraduationCapFallback },
    { label: "Companies", path: "companies", icon: Building2 },
    { label: "Job Listings", path: "jobs", icon: BriefcaseBusiness },
    { label: "Settings", path: "settings", icon: Settings },
  ],
};

function GraduationCapFallback(props) {
  return <BookOpen {...props} />;
}

export default function DashboardSidebar({ role = "Student" }) {
  const items = navigationByRole[role] || navigationByRole.Student;

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-[288px] flex-col border-r border-slate-200 bg-white">
      <div className="flex h-[81px] shrink-0 items-center border-b border-slate-200 px-5">
        <Logo size="md" />
      </div>

      <nav
        aria-label={`${role} navigation`}
        className="flex-1 space-y-1 overflow-y-auto px-2.5 py-4"
      >
        {items.map(({ label, path, icon: Icon, badge }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "dashboard"}
            className={({ isActive }) =>
              `flex min-h-12 items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-[#593C96]/10 text-[#593C96]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#593C96]"
              }`
            }
          >
            <Icon size={20} strokeWidth={1.8} />
            <span className="flex-1">{label}</span>

            {badge && (
              <span className="rounded-full bg-[#593C96] px-2 py-0.5 text-[10px] font-bold text-white">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <ProfileBar />
    </aside>
  );
}
