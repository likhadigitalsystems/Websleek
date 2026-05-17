import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 min-w-0"
            onClick={() => setOpen(false)}
            aria-label="Websleek IT Solutions — Home"
          >
            <img
              src="/assets/mobilelogo.png"
              alt=""
              className="h-10 w-auto shrink-0"
            />
            <span className="flex flex-col min-w-0">
              <span className="font-display text-base font-bold text-websleek-dark tracking-wide leading-tight truncate">
                Websleek
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-websleek-teal leading-tight">
                IT Solutions
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-websleek-teal" : "text-websleek-dark/70 hover:text-websleek-teal"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-websleek-teal text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-websleek-ocean transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-websleek-dark hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive ? "bg-websleek-teal text-white" : "text-websleek-dark hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-websleek-teal text-white text-center text-sm font-semibold px-4 py-3 rounded-lg"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
