
const colors = {
  purple: "bg-primary/10 text-primary",
  blue: "bg-placement-blue/10 text-placement-blue",
  indigo: "bg-placement-teal/10 text-placement-teal",
  pink: "bg-placement-pink/10 text-placement-pink",
};

export default function StatCard({
  icon: Icon,
  value,
  label,
  trend,
  color = "purple",
}) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            colors[color] || colors.purple
          }`}
        >
          {Icon && <Icon size={22} />}
        </div>

        {trend && (
          <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
            {trend}
          </span>
        )}
      </div>

      <p className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary">
        {value}
      </p>

      <p className="mt-1 text-sm text-text-muted">
        {label}
      </p>
    </article>
  );
}
