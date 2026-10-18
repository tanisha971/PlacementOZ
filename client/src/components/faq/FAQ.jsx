
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const questions = [
  {
    question: "What is PlacementOZ?",
    answer:
      "PlacementOZ is a centralized placement management platform designed to connect students, placement teams and recruiters while simplifying the entire placement process.",
  },
  {
    question: "Who can use PlacementOZ?",
    answer:
      "Students, placement coordinators and recruiters can use PlacementOZ to manage different parts of the campus placement ecosystem.",
  },
  {
    question: "Can I track my job applications?",
    answer:
      "Yes. Students can organize and track their applications, interviews, selection stages and placement progress from their dashboard.",
  },
  {
    question: "Does PlacementOZ use AI?",
    answer:
      "PlacementOZ is designed with AI-powered capabilities that can provide intelligent insights and help students make better placement decisions.",
  },
  {
    question: "Is PlacementOZ free?",
    answer:
      "The availability of specific features and pricing can depend on how PlacementOZ is deployed by an institution.",
  },
];

export default function FAQ() {
  const { dark } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-24 ${
        dark ? "bg-[#13142C]" : "bg-[#F8F7FC]"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#593C96] uppercase tracking-wider">
            FAQ
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-3 ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            Frequently asked
            <span className="bg-gradient-to-r from-[#593C96] via-[#C674CE] to-[#326CB6] bg-clip-text text-transparent">
              {" "}questions.
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  dark
                    ? "bg-white/[0.03] border-white/10"
                    : "bg-white border-black/5"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-3.5 flex items-center justify-between gap-4 text-left"
                >
                  <span
                    className={`text-sm sm:text-base font-semibold ${
                      dark ? "text-white" : "text-[#1F1C47]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl text-[#593C96] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    className={`px-6 pb-4 text-sm leading-6 ${
                      dark ? "text-white/60" : "text-[#4B5563]"
                    }`}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
