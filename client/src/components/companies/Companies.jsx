
const companies = [
  "TCS",
  "Microsoft",
  "Infosys",
  "Accenture",
  "Amazon",
  "Google",
  "Wipro",
  "IBM",
];

export default function Companies() {
  return (
    <section
      id="companies"
      className="bg-surface-secondary border-y border-border py-16 transition-colors duration-300 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-text-primary sm:text-3xl">
            Opportunities From Leading Companies
          </h2>

          <p className="text-sm text-text-secondary sm:text-base">
            Example companies featured in the platform
          </p>
        </div>

        {/* Company cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {companies.map((company) => (
            <div
              key={company}
              className="flex min-h-[58px] items-center justify-center rounded-xl border border-border bg-surface px-3 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
            >
              <span className="text-center text-sm font-bold text-text-secondary transition-colors duration-200 hover:text-primary">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
