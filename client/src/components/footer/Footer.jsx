import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  ArrowUpRight,
} from "lucide-react";

import Logo from "../common/Logo";
import { useTheme } from "../../context/ThemeContext";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Jobs", href: "#jobs" },
      { label: "AI Matching", href: "#features" },
      { label: "Skill Gap", href: "#features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Career Resources", href: "#resources" },
      { label: "Interview Prep", href: "#resources" },
      { label: "Resume Guide", href: "#resources" },
      { label: "FAQs", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#aboutus" },
      { label: "Contact", href: "#contactus" },
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedInIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: XIcon,
  },
];

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        dark
          ? "border-white/10 bg-[#0A0B1B]"
          : "border-[#E5E7EB] bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="PlacementOZ home"
              className="inline-flex rounded-lg transition-opacity hover:opacity-80"
            >
              <Logo size="md" dark={dark} />
            </a>

            <p
              className={`mt-5 max-w-xs text-sm leading-7 ${
                dark ? "text-white/60" : "text-[#4B5563]"
              }`}
            >
              AI-powered placement optimization for students, placement
              officers, and recruiters.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                    dark
                      ? "bg-white/[0.06] text-white/70 hover:bg-[#593C96]/30 hover:text-white"
                      : "bg-[#593C96]/[0.06] text-[#593C96] hover:bg-[#593C96]/15"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3
                className={`text-sm font-bold ${
                  dark ? "text-white" : "text-[#1F1C47]"
                }`}
              >
                {group.title}
              </h3>

              <ul className="mt-5 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`group inline-flex items-center gap-1 text-sm transition-colors duration-200 ${
                        dark
                          ? "text-white/60 hover:text-[#D9B8F0]"
                          : "text-[#4B5563] hover:text-[#593C96]"
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright bar */}
        <div
          className={`mt-12 flex flex-col gap-4 border-t pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between ${
            dark
              ? "border-white/10 text-white/50"
              : "border-[#E5E7EB] text-[#4B5563]"
          }`}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} PlacementOZ. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm">
            Placement Optimize · Built for India's placement ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}
