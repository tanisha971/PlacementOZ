import { useTheme } from "../../context/ThemeContext";

export default function ContactUs() {
  const { dark } = useTheme();

  return (
    <section
      id="contactus"
      className={`py-24 ${
        dark ? "bg-[#0F1025]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`rounded-3xl p-8 md:p-12 lg:p-16 border ${
            dark
              ? "bg-gradient-to-br from-[#593C96]/20 to-[#326CB6]/10 border-white/10"
              : "bg-gradient-to-br from-[#F5F0FF] to-[#EEF6FF] border-[#593C96]/10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-sm font-semibold text-[#593C96] uppercase tracking-wider">
                Contact Us
              </span>

              <h2
                className={`text-4xl md:text-5xl font-bold mt-3 ${
                  dark ? "text-white" : "text-[#1F1C47]"
                }`}
              >
                Let's build better
                <span className="bg-gradient-to-r from-[#593C96] via-[#C674CE] to-[#326CB6] bg-clip-text text-transparent">
                  {" "}placements.
                </span>
              </h2>

              <p
                className={`mt-5 leading-7 ${
                  dark ? "text-white/55" : "text-[#1F1C47]/60"
                }`}
              >
                Have a question, suggestion or want to collaborate with
                PlacementOZ? We'd love to hear from you.
              </p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-5 py-3.5 rounded-xl border outline-none transition ${
                  dark
                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#593C96]"
                    : "bg-white border-[#1F1C47]/10 text-[#1F1C47] placeholder:text-[#1F1C47]/35 focus:border-[#593C96]"
                }`}
              />

              <input
                type="email"
                placeholder="Email Address"
                className={`w-full px-5 py-3.5 rounded-xl border outline-none transition ${
                  dark
                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#593C96]"
                    : "bg-white border-[#1F1C47]/10 text-[#1F1C47] placeholder:text-[#1F1C47]/35 focus:border-[#593C96]"
                }`}
              />

              <textarea
                rows="4"
                placeholder="How can we help?"
                className={`w-full px-5 py-3.5 rounded-xl border outline-none resize-none transition ${
                  dark
                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#593C96]"
                    : "bg-white border-[#1F1C47]/10 text-[#1F1C47] placeholder:text-[#1F1C47]/35 focus:border-[#593C96]"
                }`}
              />

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#593C96] to-[#326CB6] hover:opacity-90 transition"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}