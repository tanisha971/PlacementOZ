import { useTheme } from "../../context/ThemeContext";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Build your student profile with your education, skills, projects and career preferences.",
  },
  {
    number: "02",
    title: "Discover Opportunities",
    description:
      "Explore relevant placement opportunities and keep everything organized in one place.",
  },
  {
    number: "03",
    title: "Track Your Journey",
    description:
      "Track applications, interviews, selections and your overall placement progress.",
  },
  {
    number: "04",
    title: "Land Your Dream Role",
    description:
      "Use intelligent insights and preparation tools to improve your chances of success.",
  },
];

export default function HowItWorks() {
  const { dark } = useTheme();

  return (
    <section
      id="how-it-works"
      className={`py-24 ${
        dark ? "bg-[#13142C]" : "bg-[#F8F7FC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[#593C96] uppercase tracking-wider">
            Simple Process
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-3 ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            Your journey,
            <span className="text-[#326CB6]"> simplified.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              
              <div
                className={`p-7 rounded-2xl border h-full ${
                  dark
                    ? "bg-white/[0.03] border-white/10"
                    : "bg-white border-black/5"
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-bold text-[#593C96]/20">
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-[calc(100%-10px)] top-12 w-5 border-t border-dashed border-[#593C96]/30" />
                  )}
                </div>

                <h3
                  className={`text-lg font-bold ${
                    dark ? "text-white" : "text-[#1F1C47]"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-sm leading-6 mt-3 ${
                    dark ? "text-white/50" : "text-[#1F1C47]/55"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}