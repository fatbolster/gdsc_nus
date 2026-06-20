// src/components/SiteHeader.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About", active: "text-red-500", end: true },
  { to: "/events", label: "Events", active: "text-blue-500" },
  { to: "/team", label: "Meet The Team", active: "text-yellow-500" },
  { to: "/projects", label: "Projects", active: "text-green-500" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const base = "text-sm font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 shadow-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <NavLink
          to="/about"
          className="inline-flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img src="/GDSC_Logo.png" alt="DG NUS Logo" className="h-8 w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `${base} ${isActive ? l.active : "text-slate-700 hover:text-slate-900"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://t.me/dscnus"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Join Upcoming Events
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${base} py-3 ${isActive ? l.active : "text-slate-700 hover:text-slate-900"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="https://t.me/dscnus"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Join Upcoming Events
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
