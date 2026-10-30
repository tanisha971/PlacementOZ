
import { useOutletContext } from "react-router-dom";

export default function PlaceholderPage({ title, description }) {
  const { user } = useOutletContext();

  return (
    <section className="rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 sm:p-10">
      <p className="text-sm font-semibold text-primary">
        PlacementOZ
      </p>

      <h1 className="mt-3 text-2xl font-bold text-text-primary">
        {title}
      </h1>

      <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary">
        {description}
      </p>

      <p className="mt-6 text-xs text-text-muted">
        Signed in as {user?.name || "Student"}
      </p>
    </section>
  );
}
