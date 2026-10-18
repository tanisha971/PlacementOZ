import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

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

  const linkStyle = `text-sm font-medium transition-colors duration-200 ${
    dark
      ? "text-white/70 hover:text-white"
      : "text-[#1F1C47]/70 hover:text-[#593C96]"
  }`;

  const buttonStyle = `w-10 h-10 rounded-xl flex items-center justify-center
    transition-all duration-200 focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#593C96]
    ${
      dark
        ? "bg-white/10 text-white hover:bg-white/20"
        : "bg-[#593C96]/10 text-[#593C96] hover:bg-[#593C96]/20"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b
        backdrop-blur-xl transition-colors duration-300 ${
          dark
            ? "bg-[#0F1025]/90 border-white/10"
            : "bg-white/90 border-[#593C96]/10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" aria-label="PlacementOZ home">
            <Logo size="md" dark={dark} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={linkStyle}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggle}
              className={buttonStyle}
              aria-label={
                dark ? "Switch to light mode" : "Switch to dark mode"
              }
              aria-pressed={dark}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? (
                <Sun
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              ) : (
                <Moon
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              )}
            </button>

            <Link
              to="/login"
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold
                transition-colors ${
                  dark
                    ? "text-white hover:bg-white/10"
                    : "text-[#593C96] hover:bg-[#593C96]/10"
                }`}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-5 py-2.5
                rounded-xl text-sm font-semibold text-white
                bg-gradient-to-r from-[#593C96] to-[#326CB6]
                hover:opacity-90 transition-all duration-200
                shadow-lg shadow-[#593C96]/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              className={buttonStyle}
              aria-label={
                dark ? "Switch to light mode" : "Switch to dark mode"
              }
              aria-pressed={dark}
            >
              {dark ? (
                <Sun size={20} strokeWidth={1.8} />
              ) : (
                <Moon size={20} strokeWidth={1.8} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`w-10 h-10 rounded-xl flex items-center
                justify-center transition-colors ${
                  dark
                    ? "text-white hover:bg-white/10"
                    : "text-[#1F1C47] hover:bg-[#593C96]/10"
                }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className={`lg:hidden border-t pb-5 pt-4 ${
              dark
                ? "border-white/10 text-white"
                : "border-[#593C96]/10 text-[#1F1C47]"
            }`}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-3 rounded-lg ${linkStyle} ${
                    dark
                      ? "hover:bg-white/5"
                      : "hover:bg-[#593C96]/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-3 pt-4">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className={`flex-1 text-center px-4 py-3 rounded-xl
                    border text-sm font-semibold transition-colors ${
                      dark
                        ? "border-white/15 hover:bg-white/5"
                        : "border-[#593C96]/20 hover:bg-[#593C96]/5"
                    }`}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center
                    gap-2 px-4 py-3 rounded-xl text-sm font-semibold
                    text-white bg-gradient-to-r from-[#593C96]
                    to-[#326CB6] hover:opacity-90 transition-opacity"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}