import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Companies", href: "#companies" },
    { name: "Resources", href: "#resources" },
    { name: "About Us", href: "#aboutus" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all ${
        dark
          ? "bg-[#0F1025]/80 border-white/10"
          : "bg-white/80 border-[#593C96]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home">
            <Logo size="md" dark={dark} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  dark
                    ? "text-white/70 hover:text-white"
                    : "text-[#1F1C47]/70 hover:text-[#593C96]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                dark
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-[#593C96]/10 text-[#593C96] hover:bg-[#593C96]/20"
              }`}
              aria-label="Toggle theme"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            <Link
              to="/login"
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
                dark
                  ? "text-white hover:bg-white/10"
                  : "text-[#593C96] hover:bg-[#593C96]/10"
              }`}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#593C96] to-[#326CB6] hover:opacity-90 transition shadow-lg shadow-[#593C96]/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden text-2xl ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`lg:hidden pb-6 pt-2 ${
              dark ? "text-white" : "text-[#1F1C47]"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium py-2"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-3 pt-2">
                <Link
                  to="/login"
                  className="flex-1 text-center px-4 py-2.5 rounded-xl border border-[#593C96]/20"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="flex-1 text-center px-4 py-2.5 rounded-xl text-white bg-gradient-to-r from-[#593C96] to-[#326CB6]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}