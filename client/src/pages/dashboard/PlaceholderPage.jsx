
import { useOutletContext } from "react-router-dom";

export default function PlaceholderPage({ title, description }) {
  const { user } = useOutletContext();

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
      <p className="text-sm font-semibold text-[#593C96]">
        PlacementOZ
      </p>
      <h1 className="mt-3 text-2xl font-bold text-[#1F1C47]">
        {title}
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
        {description}
      </p>
      <p className="mt-6 text-xs text-slate-400">
        Signed in as {user?.name || "Student"}
      </p>
    </section>
  );
}
