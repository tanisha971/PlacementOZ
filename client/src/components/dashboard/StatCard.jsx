
export default function StatCard({
  icon: Icon,
  value,
  label,
  trend,
  color = "purple",
}) {
  const colors = {
    purple: "bg-[#593C96]/10 text-[#593C96]",
    blue: "bg-sky-50 text-sky-600",
    indigo: "bg-blue-50 text-blue-600",
    pink: "bg-fuchsia-50 text-fuchsia-500",
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            colors[color] || colors.purple
          }`}
        >
          {Icon && <Icon size={22} />}
        </div>

        {trend && (
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
            {trend}
          </span>
        )}
      </div>

      <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#593C96]">
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </article>
  );
}
