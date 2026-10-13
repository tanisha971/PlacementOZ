import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const { dark } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden pt-20 ${
        dark
          ? "bg-[#0F1025]"
          : "bg-gradient-to-br from-[#F8F6FF] via-white to-[#F0F6FF]"
      }`}
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#593C96]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#326CB6]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-20">

          {/* Left */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                dark
                  ? "bg-white/10 text-[#C674CE]"
                  : "bg-[#593C96]/10 text-[#593C96]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C674CE]" />
              Smarter Placements. Better Careers.
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight ${
                dark ? "text-white" : "text-[#1F1C47]"
              }`}
            >
              Your Campus.
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#593C96] via-[#C674CE] to-[#326CB6]">
                Optimized.
              </span>
            </h1>

            <p
              className={`mt-7 text-lg md:text-xl max-w-xl leading-relaxed ${
                dark ? "text-white/60" : "text-[#1F1C47]/65"
              }`}
            >
              PlacementOZ brings students, recruiters and placement teams
              together in one intelligent platform designed to simplify the
              entire placement journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                to="/register"
                className="px-7 py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#593C96] to-[#326CB6] shadow-xl shadow-[#593C96]/25 hover:scale-[1.02] transition text-center"
              >
                Get Started →
              </Link>

              <a
                href="#how-it-works"
                className={`px-7 py-3.5 rounded-xl font-semibold border text-center transition ${
                  dark
                    ? "border-white/15 text-white hover:bg-white/5"
                    : "border-[#593C96]/20 text-[#593C96] hover:bg-[#593C96]/5"
                }`}
              >
                Explore Platform
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div>
                <p
                  className={`text-2xl font-bold ${
                    dark ? "text-white" : "text-[#1F1C47]"
                  }`}
                >
                  01
                </p>
                <p
                  className={`text-sm ${
                    dark ? "text-white/50" : "text-[#1F1C47]/50"
                  }`}
                >
                  Unified Platform
                </p>
              </div>

              <div
                className={`h-10 w-px ${
                  dark ? "bg-white/10" : "bg-[#1F1C47]/10"
                }`}
              />

              <div>
                <p
                  className={`text-2xl font-bold ${
                    dark ? "text-white" : "text-[#1F1C47]"
                  }`}
                >
                  AI
                </p>
                <p
                  className={`text-sm ${
                    dark ? "text-white/50" : "text-[#1F1C47]/50"
                  }`}
                >
                  Powered Insights
                </p>
              </div>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            <div
              className={`relative rounded-3xl p-4 border shadow-2xl ${
                dark
                  ? "bg-white/[0.04] border-white/10 shadow-black/30"
                  : "bg-white border-[#593C96]/10 shadow-[#593C96]/10"
              }`}
            >
              <div
                className={`rounded-2xl overflow-hidden ${
                  dark ? "bg-[#171832]" : "bg-[#F8F8FC]"
                }`}
              >
                {/* Mock top bar */}
                <div
                  className={`h-14 border-b flex items-center px-5 justify-between ${
                    dark ? "border-white/10" : "border-black/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#593C96] to-[#326CB6]" />
                    <div
                      className={`w-20 h-2 rounded ${
                        dark ? "bg-white/20" : "bg-[#1F1C47]/15"
                      }`}
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#C674CE]/20" />
                    <div className="w-7 h-7 rounded-full bg-[#326CB6]/20" />
                  </div>
                </div>

                {/* Dashboard */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div
                        className={`w-32 h-3 rounded mb-2 ${
                          dark ? "bg-white/20" : "bg-[#1F1C47]/15"
                        }`}
                      />
                      <div
                        className={`w-20 h-2 rounded ${
                          dark ? "bg-white/10" : "bg-[#1F1C47]/10"
                        }`}
                      />
                    </div>

                    <div className="px-3 py-2 rounded-lg bg-[#593C96]/10 text-[#593C96] text-xs font-semibold">
                      Dashboard
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {["Applications", "Shortlisted", "Interviews"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`p-4 rounded-xl border ${
                            dark
                              ? "bg-white/[0.03] border-white/10"
                              : "bg-white border-black/5"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg mb-3 ${
                              index === 0
                                ? "bg-[#593C96]/15"
                                : index === 1
                                ? "bg-[#326CB6]/15"
                                : "bg-[#C674CE]/15"
                            }`}
                          />

                          <p
                            className={`text-xl font-bold ${
                              dark ? "text-white" : "text-[#1F1C47]"
                            }`}
                          >
                            {index === 0 ? "24" : index === 1 ? "12" : "06"}
                          </p>

                          <p
                            className={`text-[10px] mt-1 ${
                              dark ? "text-white/40" : "text-[#1F1C47]/40"
                            }`}
                          >
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  <div
                    className={`rounded-xl border p-5 ${
                      dark
                        ? "bg-white/[0.03] border-white/10"
                        : "bg-white border-black/5"
                    }`}
                  >
                    <div className="flex justify-between mb-5">
                      <div
                        className={`w-28 h-2.5 rounded ${
                          dark ? "bg-white/15" : "bg-[#1F1C47]/10"
                        }`}
                      />

                      <div className="w-14 h-2 rounded bg-[#593C96]/20" />
                    </div>

                    <div className="flex items-end gap-3 h-28">
                      {[40, 65, 50, 80, 60, 90, 72].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[#593C96] to-[#326CB6]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div
              className={`absolute -left-6 top-1/4 p-4 rounded-2xl border shadow-xl ${
                dark
                  ? "bg-[#171832] border-white/10"
                  : "bg-white border-[#593C96]/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  ✓
                </div>

                <div>
                  <p
                    className={`text-xs font-semibold ${
                      dark ? "text-white" : "text-[#1F1C47]"
                    }`}
                  >
                    Application Updated
                  </p>
                  <p
                    className={`text-[10px] ${
                      dark ? "text-white/40" : "text-[#1F1C47]/40"
                    }`}
                  >
                    Just now
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`absolute -right-5 bottom-10 p-4 rounded-2xl border shadow-xl ${
                dark
                  ? "bg-[#171832] border-white/10"
                  : "bg-white border-[#593C96]/10"
              }`}
            >
              <p className="text-xs text-[#593C96] font-semibold">
                Placement Score
              </p>
              <p
                className={`text-2xl font-bold mt-1 ${
                  dark ? "text-white" : "text-[#1F1C47]"
                }`}
              >
                92%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}