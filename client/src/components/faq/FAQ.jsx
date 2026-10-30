
import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-surface-secondary py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl font-bold text-text-primary md:text-5xl">
            Frequently asked
            <span className="bg-gradient-to-r from-placement-purple via-placement-pink to-placement-blue bg-clip-text text-transparent">
              {" "}questions.
            </span>
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-primary/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-text-primary sm:text-base">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-xl font-medium text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-sm leading-6 text-text-secondary"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
