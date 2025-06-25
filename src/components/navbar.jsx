import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Remote Access", path: "/remote-access" },
  { title: "Support", path: "/support" },
  { title: "Join Team", path: "/join-team" },
  { title: "Feedback", path: "/feedback" },
  { title: "Ticket", path: "/ticket" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-2 p-2 rounded-full bg-glass hover:bg-white/40 transition border border-transparent hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" style={{ color: "var(--color-text)" }} />
      ) : (
        <MoonIcon className="h-5 w-5" style={{ color: "var(--color-text)" }} />
      )}
    </button>
  );
}

const NavbarMain = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 glass shadow-lg backdrop-blur-lg border-b border-border/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-xl shadow-md" />
          </Link>
          <span
            className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent select-none"
            style={{ color: "var(--color-text)" }}
          >
            TechnoVerse
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="px-4 py-2 rounded-lg font-medium hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition"
              style={{ color: "var(--color-text)" }}
            >
              {link.title}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-border/40 focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" style={{ color: "var(--color-text)" }} /> : <Bars3Icon className="h-6 w-6" style={{ color: "var(--color-text)" }} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-glass shadow-lg border-t border-border/60 animate-fade-in-down">
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="px-4 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
