
import { Bell, Circle } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Application shortlisted at Microsoft",
    time: "2h ago",
    color: "text-emerald-500",
  },
  {
    id: 2,
    title: "New job match: SDE at Amazon",
    time: "5h ago",
    color: "text-[#593C96]",
  },
  {
    id: 3,
    title: "Upcoming deadline: TCS Application",
    time: "1d ago",
    color: "text-amber-500",
  },
];

export default function NotificationsCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#1F1C47]">Notifications</h2>
        <Bell size={18} className="text-slate-400" />
      </div>

      <div className="mt-5 space-y-5">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <Circle
              size={10}
              fill="currentColor"
              className={`mt-1 shrink-0 ${item.color}`}
            />

            <div>
              <p className="text-sm leading-5 text-slate-600">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          window.location.hash = "#/student/notifications";
        }}
        className="mt-5 w-full text-sm font-semibold text-[#593C96] hover:underline"
      >
        View all notifications →
      </button>
    </section>
  );
}
