import { useTheme } from "../../context/ThemeContext";

const features = [
  {
    icon: "📊",
    title: "Placement Dashboard",
    description:
      "Track applications, interviews, offers and placement progress from one centralized dashboard.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Insights",
    description:
      "Get intelligent insights to understand your placement journey and make better decisions.",
  },
  {
    icon: "💼",
    title: "Job Opportunities",
    description:
      "Discover relevant job opportunities and keep track of every application effortlessly.",
  },
  {
    icon: "📄",
    title: "Resume Management",
    description:
      "Organize your resumes and keep your application documents ready for every opportunity.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description:
      "Monitor your preparation and placement progress with meaningful analytics.",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    description:
      "Never miss important deadlines, interviews, application updates or placement announcements.",
  },
];

export default function Features() {
  const { dark } = useTheme();

  return (
    <section
      id="features"
      className={`py-24 ${
        dark ? "bg-[#0F1025]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[#593C96] uppercase tracking-wider">
            Everything You Need
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-3 ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            Built for the entire
            <span className="text-[#593C96]"> placement journey.</span>
          </h2>

          <p
            className={`mt-5 ${
              dark ? "text-white/55" : "text-[#1F1C47]/60"
            }`}
          >
            Everything students and placement teams need to make campus
            placements simpler, smarter and more organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                dark
                  ? "bg-white/[0.03] border-white/10 hover:border-[#593C96]/50"
                  : "bg-white border-[#593C96]/10 hover:border-[#593C96]/30 hover:shadow-xl hover:shadow-[#593C96]/5"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#593C96]/15 to-[#326CB6]/15 flex items-center justify-center text-xl mb-6">
                {feature.icon}
              </div>

              <h3
                className={`text-lg font-bold ${
                  dark ? "text-white" : "text-[#1F1C47]"
                }`}
              >
                {feature.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 ${
                  dark ? "text-white/50" : "text-[#1F1C47]/55"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}