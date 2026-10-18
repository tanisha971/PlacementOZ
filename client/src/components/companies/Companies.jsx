import { useTheme } from "../../context/ThemeContext";

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
  const { dark } = useTheme();

  return (
    <section
      id="companies"
      className={`py-16 md:py-20 transition-colors duration-300 ${
        dark ? "bg-[#28244F]" : "bg-[#F4F3FA]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-3 ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            Opportunities From Leading Companies
          </h2>

          <p
            className={`text-sm sm:text-base ${
              dark ? "text-[#D1D5DB]" : "text-[#4B5563]"
            }`}
          >
            Example companies featured in the platform
          </p>
        </div>

        {/* Company cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {companies.map((company) => (
            <div
              key={company}
              className={`min-h-[58px] rounded-xl border flex items-center justify-center px-3 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#593C96]/40 ${
                dark
                  ? "bg-[#1F1C47] border-[#3A3566]"
                  : "bg-white border-[#E5E7EB]"
              }`}
            >
              <span
                className={`text-sm font-bold text-center ${
                  dark ? "text-[#D1D5DB]" : "text-[#4B5563]"
                }`}
              >
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}