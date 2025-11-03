// src/components/SiteHeader.tsx
import { NavLink } from "react-router-dom";

export default function SiteHeader() {
  const base = "text-sm font-medium transition-colors";
  return (
    <header className="sticky top-0 z-50 bg-slate-100 border-b border-slate-200">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/about" className="inline-flex items-center gap-2">
          <img src="/GDSC_Logo.png" alt="GDSC NUS Logo" className="h-8 w-auto" />
        </NavLink>

        <div className="hidden md:flex gap-6">
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              `${base} ${isActive ? "text-red-500" : "text-slate-700 hover:text-slate-900"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-blue-500" : "text-slate-700 hover:text-slate-900"}`
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-yellow-500" : "text-slate-700 hover:text-slate-900"}`
            }
          >
            Meet The Team
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-green-500" : "text-slate-700 hover:text-slate-900"}`
            }
          >
            Projects
          </NavLink>
        </div>

        <a
          href="#join"
          className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600"
        >
          Join Upcoming Events
        </a>
      </nav>
    </header>
  );
}