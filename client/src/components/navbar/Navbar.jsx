
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

  const closeMenu = () => setMenuOpen(false);

  const themeButtonClass =
    "inline-flex size-10 items-center justify-center rounded-xl text-text-secondary transition-colors duration-200 hover:bg-surface-hover hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const authButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/90 shadow-sm backdrop-blur-xl transition-colors duration-300">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            aria-label="PlacementOZ home"
            onClick={closeMenu}
            className="shrink-0"
          >
            <Logo size="md" dark={dark} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggle}
              className={themeButtonClass}
              aria-label={
                dark ? "Switch to light mode" : "Switch to dark mode"
              }
              aria-pressed={dark}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? (
                <Sun size={20} strokeWidth={1.8} />
              ) : (
                <Moon size={20} strokeWidth={1.8} />
              )}
            </button>

            {/* Login */}
            <Link
              to="/login"
              className={`${authButtonClass} text-primary hover:bg-primary-soft`}
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-placement-purple to-placement-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>

          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggle}
              className={themeButtonClass}
              aria-label={
                dark ? "Switch to light mode" : "Switch to dark mode"
              }
              aria-pressed={dark}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? (
                <Sun size={20} strokeWidth={1.8} />
              ) : (
                <Moon size={20} strokeWidth={1.8} />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={themeButtonClass}
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
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[500px] border-t border-border pb-5 pt-4 opacity-100"
              : "max-h-0 border-t-0 py-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <div className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-surface-hover hover:text-primary"
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Authentication Actions */}
            <div className="flex gap-3 pt-4">

              <Link
                to="/login"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-hover"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-placement-purple to-placement-blue px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>

            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
