
import { Bell, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "Application shortlisted at Microsoft",
    time: "2h ago",
    color: "text-success",
  },
  {
    id: 2,
    title: "New job match: SDE at Amazon",
    time: "5h ago",
    color: "text-primary",
  },
  {
    id: 3,
    title: "Upcoming deadline: TCS Application",
    time: "1d ago",
    color: "text-warning",
  },
];

export default function NotificationsCard() {
  const navigate = useNavigate();

  return (
    <section className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-text-primary">
          Notifications
        </h2>

        <Bell size={18} className="text-text-muted" />
      </div>

      {/* Notification list */}
      <div className="mt-5 space-y-5">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <Circle
              size={10}
              fill="currentColor"
              className={`mt-1 shrink-0 ${item.color}`}
            />

            <div>
              <p className="text-sm leading-5 text-text-secondary">
                {item.title}
              </p>

              <p className="mt-1 text-xs text-text-muted">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View all */}
      <button
        type="button"
        onClick={() => navigate("/student/notifications")}
        className="mt-5 w-full text-sm font-semibold text-primary transition-colors hover:text-primary-hover hover:underline"
      >
        View all notifications →
      </button>
    </section>
  );
}
