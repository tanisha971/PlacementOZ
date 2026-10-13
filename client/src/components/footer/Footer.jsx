import Logo from "../common/Logo";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`border-t ${
        dark
          ? "bg-[#0A0B1B] border-white/10"
          : "bg-[#F8F7FC] border-[#1F1C47]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size="md" dark={dark} />

            <p
              className={`mt-5 max-w-md text-sm leading-6 ${
                dark ? "text-white/45" : "text-[#1F1C47]/55"
              }`}
            >
              Making campus placements smarter, simpler and more connected
              through technology.
            </p>

            <div className="flex gap-3 mt-6">
              {["in", "𝕏", "◎", "▶"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold transition ${
                    dark
                      ? "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                      : "bg-[#593C96]/5 text-[#593C96] hover:bg-[#593C96]/10"
                  }`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3
              className={`font-semibold ${
                dark ? "text-white" : "text-[#1F1C47]"
              }`}
            >
              Platform
            </h3>

            <div
              className={`flex flex-col gap-3 mt-5 text-sm ${
                dark ? "text-white/50" : "text-[#1F1C47]/55"
              }`}
            >
              <a href="#features" className="hover:text-[#593C96]">
                Features
              </a>

              <a href="#how-it-works" className="hover:text-[#593C96]">
                How It Works
              </a>

              <a href="#faq" className="hover:text-[#593C96]">
                FAQ
              </a>

              <a href="#contactus" className="hover:text-[#593C96]">
                Contact
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3
              className={`font-semibold ${
                dark ? "text-white" : "text-[#1F1C47]"
              }`}
            >
              Company
            </h3>

            <div
              className={`flex flex-col gap-3 mt-5 text-sm ${
                dark ? "text-white/50" : "text-[#1F1C47]/55"
              }`}
            >
              <a href="#" className="hover:text-[#593C96]">
                About
              </a>

              <a href="#" className="hover:text-[#593C96]">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-[#593C96]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 pt-6 border-t flex flex-col md:flex-row justify-between gap-3 text-xs ${
            dark
              ? "border-white/10 text-white/35"
              : "border-[#1F1C47]/10 text-[#1F1C47]/40"
          }`}
        >
          <p>© {new Date().getFullYear()} PlacementOZ. All rights reserved.</p>

          <p>Built for smarter campus placements.</p>
        </div>
      </div>
    </footer>
  );
}